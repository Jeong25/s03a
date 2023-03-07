import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styleSheet } from './stylesheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = (props) => {

  const styles = styleSheet()

  const logout = async () => {
    await AsyncStorage.setItem('hospId', '')
    await AsyncStorage.setItem('userId', '')
    await AsyncStorage.setItem('regNo', '')
    await AsyncStorage.setItem('directorNm', '')
    await AsyncStorage.setItem('systemUserTp', '')
    await AsyncStorage.setItem('systemAdminFlag', '')
    await AsyncStorage.setItem('hpNo', '')
    await AsyncStorage.setItem('email', '')
    await AsyncStorage.setItem('accessToken', '')
    await AsyncStorage.setItem('refreshToken', '')
    await AsyncStorage.setItem('regNo', '')
    props.navigation.navigate('Signin')
  }

  return (
    <View style={styles.wrap}>
      <View style={styles.topMenu}>
        <Text style={styles.topLogo}>AEGIS</Text>
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
        <View style={styles.welcomeWrap}>
          <Text style={styles.welcomeText}>
            안녕하세요.{'\n'}
            'HospName' 병원입니다.
          </Text>
        </View>
        <View style={styles.centerBtnWrap}>
          <View style={styles.centerBtnLayer}>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('OveEmbRegister')}>
              <Image source={require('../../common/img/ovumIcon.png')} style={styles.btnIcon} />
              <Text style={styles.centerBtnText}>난자 등록</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScanCell', { locationNm: '수정세포 등록', opWorkEvent: '13' })}>
              <Image source={require('../../common/img/embryoIcon.png')} style={styles.btnIcon} />
              <Text style={styles.centerBtnText}>수정세포 등록</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.centerBtnLayer}>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrScan', { locationNm: '배아이식 등록', opWorkEvent: '14' })}>
              <Image source={require('../../common/img/transferIcon.png')} style={styles.btnIcon} />
              <Text style={styles.centerBtnText}>배아이식 등록</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.centerBtn} onPress={() => props.navigation.navigate('QrSearch')}>
              <Image source={require('../../common/img/scannerIcon.png')} style={styles.btnIcon} />
              <Text style={styles.centerBtnText}>QR스캔</Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity style={styles.centerBtn} onPress={() => logout()}>
            <Text style={styles.centerBtnText}>로그아웃</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  )
}

export default Main

Main.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}
