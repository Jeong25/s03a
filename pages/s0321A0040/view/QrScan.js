import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from "react-native-camera-kit";
import { qrScanEvent, kakaoMessage } from '../../common/repository/repository';
import { styleSheet } from './stylesheet';
import { NativeModules } from 'react-native';     // <== 모듈 (@민성현 추가)

const QrScan = (props) => {
  const { PrintModule } = NativeModules;          // <== 이렇게 불러와서 (@민성현 추가)

  const styles = styleSheet()
  const isFocused = useIsFocused();
  const CAM_VIEW_HEIGHT = Dimensions.get('screen').height;
  const CAM_VIEW_WIDTH = Dimensions.get('screen').width;
  const cameraStyles = useMemo(() => styleSheet(CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH), [CAM_VIEW_HEIGHT, CAM_VIEW_WIDTH])
  const camera = useRef(null)

  const [inputData, setInputData] = useState({})
  const [scaned, setScaned] = useState(true)
  const [cameraFront, setCameraFront] = useState(true)

  const onBarCodeRead = async (event) => {
    if (!scaned) {
      return
    }
    setScaned(false)
    try {
      const qrData = event
      const custOpId = qrData.split(',')[0]
      const opWorkTp = qrData.split(',')[1]
      scan(custOpId, opWorkTp)
    } catch (error) {
    }
  }

  const scan = async (custOpId, opWorkTp) => {
    try {
      if (inputData.opWorkEvent === '02') {
        const res = await qrScanEvent(custOpId, opWorkTp, inputData)
        Alert.alert('', res, [{
          text: '확인', onPress: () => {
            setScaned(true)
          }
        }])
      } else if (inputData.opWorkEvent === '03') {
        const res = await qrScanEvent(custOpId, opWorkTp, inputData)
        Alert.alert('', res, [{
          text: '확인', onPress: () => {
            setScaned(true)
          }
        }])
      } else if (inputData.opWorkEvent === '04') {
        const res = await qrScanEvent(custOpId, opWorkTp, inputData)
        Alert.alert('', res, [{
          text: '확인', onPress: () => {
            setScaned(true)
          }
        }])
      } else if (inputData.opWorkEvent === '06') {
        const res = await qrScanEvent(custOpId, opWorkTp, inputData)
        Alert.alert('', res, [{
          text: '확인', onPress: () => {
            setScaned(true)
          }
        }])
      } else if (inputData.opWorkEvent === '14') {
        props.navigation.navigate('EmbMoveRegister', { opWorkEvent: inputData.opWorkEvent, custOpId: custOpId })
        setTimeout(() => {
          setScaned(true)
        }, 5000)
      } else if (inputData.opWorkEvent === '15') {
        // 신규 화면 이동 후 비교, 시술실 custOpId랑 스캔 custOpId 비교 일치하면 자동 저장
      } else {
        printQr(custOpId.toString(), opWorkTp.toString());
      }
    } catch (e) {
      Alert.alert('Error', '에러 발생')
      console.log(e)
    }
    // setTimeout(() => {
    //   setScaned(true)
    // }, 5000)
  }

  const printQr = async (custOpId, opWorkTp) => {
    try {
      const res = await kakaoMessage(custOpId, inputData.opWorkEvent)
      const custNm = res.custNm
      PrintModule.transfer(1, custOpId.toString(), opWorkTp.toString(), custNm)
      setTimeout(() => {
        setScaned(true)
      }, 10000)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    // PrintModule.show("Hello World", PrintModule.SHORT);       // <== 이런식으로 사용. (@민성현 추가)
    const getLocalData = async () => {
      const hospId = await AsyncStorage.getItem('hospId')
      const userId = await AsyncStorage.getItem('userId')
      setInputData({
        locationNm: props.route.params?.locationNm,
        opWorkEvent: props.route.params?.opWorkEvent,
        hospId: hospId,
        loginId: userId,
      })
    }
    if (props.route.params?.locationNm) {
      getLocalData()
      setScaned(true)
    }
  }, [isFocused])


  return (
    <View style={styles.wrap}>
      <View style={styles.topBtnWrap}>
        <TouchableOpacity style={styles.backBtn} onPress={() => { props.navigation.goBack() }}>
          <Image source={require('../../common/img/backIcon-w.png')} style={styles.btnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.changeBtn} onPress={() => { setCameraFront(!cameraFront) }}>
          <Image source={require('../../common/img/change.png')} style={styles.btnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { scan(2005, 'O') }}>
          <Image source={require('../../common/img/magnifierIcon-w.png')} style={styles.btnIcon} />
        </TouchableOpacity>
      </View>
      <Camera
        style={cameraStyles.camera}
        ref={camera}
        cameraType={cameraFront ? CameraType.Front : CameraType.Back}
        scanBarcode={true}
        showFrame={false}
        laserColor="rgba(0, 0, 0, 0)"
        frameColor="rgba(0, 0, 0, 0)"
        surfaceColor="rgba(0 0, 0, 0)"
        onReadCode={(event) => onBarCodeRead(event.nativeEvent.codeStringValue)}
      />
      <View style={styles.textWrap}>
        <Text style={styles.locationName}>{inputData.locationNm || ''}</Text>
      </View>
    </View>
  )
}

QrScan.propTypes = {
}
QrScan.defaultProps = {
}

export default QrScan

