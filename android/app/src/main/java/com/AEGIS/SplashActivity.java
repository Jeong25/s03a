package com.AEGIS; // 패키지 이름 수정

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}

// public class SplashActivity extends Activity {
//     protected void onCreate(Bundle savedInstanceState){
//         super.onCreate(savedInstanceState);
//         try{
//             Thread.sleep(2000);
//         }catch (InterruptedException e){
//             e.printStackTrace();
//         }

//         Intent intent=new Intent(this, MainActivity.class);
//         startActivity(Intent);
//         finish();
//     }

// }
