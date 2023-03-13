import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { retrieveOveCellCustMob, retrieveWorker, updateInsemCellCustMob } from '../../common/repository/repository';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OveEmbRegister = (props) => {

  const styles = styleSheet()
  const [inputData, setInputData] = useState([])
  const [workerOption, setWorkerOption] = useState([])
  const [saveFlag, setSaveFlag] = useState(true)

  const getData = async () => {
    const hospId = await AsyncStorage.getItem('hospId')
    const userId = await AsyncStorage.getItem('userId')
    let workerArr = []

    try {
      const res1 = await retrieveWorker(hospId, 'R')
      res1.map(v => (
        workerArr.push({ value: v.userId, label: v.directorNm })
      ))
      setWorkerOption(workerArr)

      const res2 = await retrieveOveCellCustMob(hospId)
      if (res2 === null) {
        Alert.alert('', '등록된 정보가 없습니다.', [{
          text: '확인', onPress: () => {
            props.navigation.goBack()
          }
        }])
        return
      }
      if (res2.collectCnt === null) {
        setInputData({ ...res2, collectCnt: '', loginId: userId, opWorkEvent: '12', workerId: userId })
      } else {
        setInputData({ ...res2, collectCnt: res2.collectCnt.toString(), loginId: userId, opWorkEvent: '12', workerId: userId })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onClickSave = async () => {
    console.log(JSON.stringify(inputData, null, 4))
    if (saveFlag) {
      try {
        setSaveFlag(false)
        const res = await updateInsemCellCustMob(inputData)
        Alert.alert('', res, [{
          text: '확인', onPress: () => {
            setSaveFlag(true)
          }
        }])
      } catch (error) {
        Alert.alert('Error', '에러 발생')
        console.log(error)
      }
    } else {
      return
    }
  }

  const onClickPrint = () => {
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.wrap}>
      <View style={styles.topMenu}>
        <TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.goBack()}>
          <Image source={require('../../common/img/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>난자세포 등록</Text>
        <TouchableOpacity style={styles.scannerBtn} onPress={() => props.navigation.goBack()}>
          <Image source={require('../../common/img/scannerIcon.png')} style={styles.scanIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.contentsWrap}
        resetScrollToCoords={{ x: 0, y: 0 }}
        enableOnAndroid={true}
        scrollEnabled={true}
        scrollToOverflowEnabled={true}
        enableAutomaticScroll={true}
        keyboardShouldPersistTaps='always'
        nestedScrollEnabled={true}
      >
        <View style={styles.custInfoWrap}>
          <View style={styles.infoLayer}>
            <View style={styles.infoWrap}>
              <View style={styles.infoLabel}>
                <Text style={styles.infoLabelText}>시트번호</Text>
              </View>
              <Text style={styles.custSheetNum}>{`${inputData?.chartNo}-${inputData?.seq}`}</Text>
            </View>
            <View style={styles.infoWrap}>
              <View style={styles.infoLabel}>
                <Text style={styles.infoLabelText}>연구원</Text>
              </View>
              <View style={styles.selectWrap}>
                <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  fixAndroidTouchableBug={true}
                  value={inputData?.workerId}
                  placeholder={{
                    label: '연구원선택', value: ''
                  }}
                  items={workerOption}
                  onValueChange={(value) => setInputData({ ...inputData, workerId: value })}
                />
              </View>
            </View>
          </View>
          <View style={styles.infoLayer}>
            <View style={styles.infoWrap}>
              <View style={styles.infoLabel}>
                <Text style={styles.infoLabelText}>고객명</Text>
              </View>
              <Text style={styles.custSheetNum}>{`${inputData?.custNm}`}</Text>
            </View>
            <View style={styles.infoWrap}>
              <View style={styles.infoLabel}>
                <Text style={styles.infoLabelText}>배우자</Text>
              </View>
              <Text style={styles.custSheetNum}>{`${inputData?.hosNm}`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.inputWrap}>
          <View style={styles.numInputWrap}>
            <TextInput editable={false} style={styles.numInput} value={inputData?.collectCnt}/>
            <Text style={styles.amount}>개</Text>
          </View>
          <View style={styles.numBtnWrap}>
            <View style={styles.numLayer}>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '1' })}
              ><Text style={styles.number}>1</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '2' })}
              ><Text style={styles.number}>2</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '3' })}
              ><Text style={styles.number}>3</Text></TouchableOpacity>
            </View>
            <View style={styles.numLayer}>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '4' })}
              ><Text style={styles.number}>4</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '5' })}
              ><Text style={styles.number}>5</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '6' })}
              ><Text style={styles.number}>6</Text></TouchableOpacity>
            </View>
            <View style={styles.numLayer}>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '7' })}
              ><Text style={styles.number}>7</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '8' })}
              ><Text style={styles.number}>8</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '9' })}
              ><Text style={styles.number}>9</Text></TouchableOpacity>
            </View>
            <View style={styles.numLayer}>
              <View><Text style={styles.number}></Text></View>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt + '0' })}
              ><Text style={styles.number}>0</Text></TouchableOpacity>
              <TouchableOpacity
                onPress={() => setInputData({ ...inputData, collectCnt: inputData.collectCnt.substring(0, inputData.collectCnt.length - 1) })}
              >
                <Image source={require('../../common/img/eraseIcon.png')} style={styles.eraseIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.btnWrap}>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => onClickSave()}
          >
            <Text style={styles.btnText}>저장</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.printBtn}
            onPress={() => onClickPrint()}
          >
            <Text style={styles.btnText}>프린트</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default OveEmbRegister

OveEmbRegister.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
