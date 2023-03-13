import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styleSheet } from './stylesheet';
import { retrieveCode } from '../../common/repository/repository';
const QrSearch = (props) => {

  const styles = styleSheet()

  const [opWorkEventOption, setOpWorkEventOption] = useState([])

  const getCd = async () => {
    let opWorkEventArr = []
    try {
      const res = await retrieveCode('0', 'OP_WORK_EVENT', '003')
      res.map(v => (
        opWorkEventArr.push({ locationNm: v.cdVNm, opWorkEvent: v.cdV })
      ))
      setOpWorkEventOption(opWorkEventArr)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCd()
  }, [])

  return (
    <View style={styles.wrap}>
      <View style={styles.topMenu}>
        <TouchableOpacity style={styles.backBtn} onPress={() => { props.navigation.goBack() }}>
          <Image source={require('../../common/img/backIcon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>스캔 검색</Text>
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
        <View style={styles.centerBtnWrap}>
          <View style={styles.centerBtnLayer}>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: '병원접수', opWorkEvent: '02' })}>
            {/* <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: opWorkEventOption[0].locationNm, opWorkEvent: opWorkEventOption[0].opWorkEvent })}> */}
              <Text style={styles.centerBtnText}>병원접수</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: '대기실입실', opWorkEvent: '03' })}>
            {/* <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: opWorkEventOption[1].locationNm, opWorkEvent: opWorkEventOption[1].opWorkEvent })}> */}
              <Text style={styles.centerBtnText}>대기실 입실</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centerBtnLayer}>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: '시술실입실', opWorkEvent: '04' })}>
            {/* <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: opWorkEventOption[2].locationNm, opWorkEvent: opWorkEventOption[2].opWorkEvent })}> */}
              <Text style={styles.centerBtnText}>시술실 입실</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: '배아이식', opWorkEvent: '15' })}>
            {/* <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: opWorkEventOption[4].locationNm, opWorkEvent: opWorkEventOption[4].opWorkEvent })}> */}
              <Text style={styles.centerBtnText}>배아세포 확인</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centerBtnLayer}>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: '회복실퇴실', opWorkEvent: '06' })}>
            {/* <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: opWorkEventOption[3].locationNm, opWorkEvent: opWorkEventOption[3].opWorkEvent })}> */}
              <Text style={styles.centerBtnText}>회복실 퇴실</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: 'QR프린터', opWorkEvent: '99' })}>
            {/* <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: opWorkEventOption[5].locationNm, opWorkEvent: opWorkEventOption[5].opWorkEvent })}> */}
              <Text style={styles.centerBtnText}>QR 프린터</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default QrSearch

QrSearch.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
