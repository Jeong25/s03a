package com.AEGIS.nativemodule;

import android.widget.Toast;
import android.util.Log;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

import java.io.IOException;
import java.io.InputStream;
import java.io.File;
import java.io.OutputStream;
import java.io.FileOutputStream;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

import com.brother.ptouch.sdk.Printer;
import com.brother.ptouch.sdk.PrinterInfo;
import com.brother.ptouch.sdk.PrinterStatus;
import com.brother.ptouch.sdk.NetPrinter;
import com.brother.ptouch.sdk.LabelInfo;

// import static com.brother.ptouch.sdk.PrinterInfo.Port;
// import static com.brother.ptouch.sdk.PrinterInfo.Model;
// import static com.brother.ptouch.sdk.PrinterInfo.ErrorCode;
// import static com.brother.ptouch.sdk.PrinterInfo.PrintMode;
// import static com.brother.ptouch.sdk.PrinterInfo.PaperSize;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;
import com.journeyapps.barcodescanner.BarcodeEncoder;

public class PrintModule extends ReactContextBaseJavaModule {
    PrintModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "PrintModule";
    }

    @ReactMethod
    public void transfer(int num, String id, String tp, String name) throws Exception {
        try {
            final Printer mPrinter = new Printer();
            PrinterInfo mPrinterInfo = mPrinter.getPrinterInfo();

            mPrinterInfo.printerModel = PrinterInfo.Model.PT_P950NW;
            mPrinterInfo.port = PrinterInfo.Port.NET;
            mPrinterInfo.ipAddress = "192.168.10.15";
            mPrinterInfo.printMode = PrinterInfo.PrintMode.FIT_TO_PAPER;
            if (num == 1) {
                mPrinterInfo.labelNameIndex = LabelInfo.PT.W12.ordinal(); // num 1 => 12mm
            } else {
                mPrinterInfo.labelNameIndex = LabelInfo.PT.W6.ordinal(); // num 2 => 6mm
            }
            // mPrinterInfo.printerModel = PrinterInfo.Model.PT_P900W;

            mPrinter.setPrinterInfo(mPrinterInfo);

            // show(String.valueOf(mPrinter.checkLabelInPrinter()), 1);
            if (mPrinter.startCommunication()) {
                show("Printer Connect", 1);
                if (mPrinter.startPTTPrint(num, "UTF-8")) {
                    mPrinter.replaceTextName(id + "," + tp, "qr");
                    mPrinter.replaceTextName(name, "name");
                    PrinterStatus result = mPrinter.flushPTTPrint();
                    if (result.errorCode != PrinterInfo.ErrorCode.ERROR_NONE) {
                        show(String.valueOf(result.errorCode), 1);
                    }
                }
                mPrinter.endCommunication();
            } else {
                show("Printer Error", 1);
            }

            // new Thread(new Runnable() {
            // @Override
            // public void run() {
            // if (mPrinter.startCommunication()) {
            // PrinterStatus result = mPrinter.printImage(bmp);

            // if (result.errorCode != ErrorCode.ERROR_NONE) {
            // show(String.valueOf(result.errorCode), 1);
            // }
            // show("SUCCESS", 1);
            // mPrinter.endCommunication();
            // }
            // }
            // }).start();

        } catch (Exception e) {
            show(e.getMessage(), 1);
        }
    }

    @ReactMethod
    public void show(String message, int duration) {
        ReactApplicationContext context = getReactApplicationContext();
        Toast toast = Toast.makeText(context, message, duration);
        toast.show();
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("SHORT", Toast.LENGTH_SHORT);
        constants.put("LONG", Toast.LENGTH_LONG);
        return constants;
    }

    // private Bitmap generateQrCode(String id, String tp) throws Exception {
    // try {
    // BarcodeEncoder encoder = new BarcodeEncoder();
    // String params = "{custOpId:" + id + ",opWorkTp:" + tp + "}";
    // return encoder.encodeBitmap(params, BarcodeFormat.QR_CODE, 11, 11);
    // } catch (Exception e) {
    // show(e.getMessage(), 2);
    // throw e;
    // }
    // }

    // private void saveBitmapToJpeg(Bitmap bitmap, String name) {
    // //저장할 파일 이름
    // String fileName = name + ".jpg";
    // //storage 에 파일 인스턴스를 생성
    // File tempFile = new File("/storage/emulated/0/Pictures", fileName);
    // try {
    // // 자동으로 빈 파일을 생성
    // tempFile.createNewFile();
    // // 파일을 쓸 수 있는 스트림을 준비
    // FileOutputStream out = new FileOutputStream(tempFile);
    // // compress 함수를 사용해 스트림에 비트맵을 저장
    // bitmap.compress(Bitmap.CompressFormat.JPEG, 100, out);
    // // 스트림 사용후 닫기
    // out.close();
    // } catch (IOException e) {
    // Log.e("MyTag","IOException : " + e.getMessage());
    // }
    // }

}