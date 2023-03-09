import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType } from "react-native-camera-kit";
import { retrieveInsemCellCustMob } from '../../common/repository/repository';
import { styleSheet } from './stylesheet';

const QrScanCell = (props) => {

  const styles = styleSheet()
  const isFocused = useIsFocused()
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
      const qrData = JSON.parse(event)
      const custOpId = qrData.custOpId
      if (!inputData.custOpId || inputData.custOpId === null) {
        await fistScan(custOpId)
      } else {
        await secondScan(custOpId)
      }
    } catch (error) {
    }
  }

  const fistScan = async (custOpId) => {
    try {
      const hospId = await AsyncStorage.getItem('hospId')
      if (inputData.opWorkEvent === '13') {
        const res = await retrieveInsemCellCustMob(hospId, custOpId, inputData.opWorkEvent)
        if (!res || res === null || res.custOpId === null) {
          Alert.alert('', '고객 정보 없음')
        } else {
          Alert.alert('', '고객 정보 확인', [{
            text: '확인', onPress: () => {
              setScaned(true)
            }
          }])
          setInputData({ ...inputData, custOpId: res.custOpId, locationNm: `고객명: ${res.custNm}` })
        }
      }
    } catch (e) {
      Alert.alert('Error', '에러 발생')
      console.log(e)
    }
    // setTimeout(() => {
    //   setScaned(true)
    // }, 3000)
  }

  const secondScan = async (custOpId) => {
    console.log(JSON.stringify(inputData, null, 4))
    if (inputData.opWorkEvent === '13') {
      if (custOpId === inputData.custOpId) {
        Alert.alert('', '배우자 정보 일치', [
          {
            text: '확인', onPress: () => {
              props.navigation.navigate('InsemCellRegister', { opWorkEvent: inputData.opWorkEvent, custOpId: inputData.custOpId })
              setScaned(true)
            }
          }
        ])
      } else {
        Alert.alert('', '배우자 정보 불일치', [{
          text: '확인', onPress: () => {
            setScaned(true)
          }
        }])
      }
    }
  }

  useEffect(() => {
    if (props.route.params?.locationNm) {
      setInputData({
        locationNm: props.route.params?.locationNm,
        opWorkEvent: props.route.params?.opWorkEvent
      })
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
        {/* <TouchableOpacity style={styles.searchBtn} onPress={() => { secondScan(2005, 'O') }}>
          <Image source={require('../../common/img/magnifierIcon-w.png')} style={styles.btnIcon} />
        </TouchableOpacity> */}
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

QrScanCell.propTypes = {
}
QrScanCell.defaultProps = {
}

export default QrScanCell