import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { API_GET } from '../../common/api/Client';
import { setUserTp } from '../../common/store/store';
import { styleSheet } from './stylesheet';

const SIGN_IN_TARGET_URL = "/rest/v1/S031200010/sign-in";
const CLIENT_IP_URL = 'https://api64.ipify.org?format=json';

const Signin = ((props) => {

  const styles = styleSheet()

  const [clientIp, setClientIp] = useState('')
  const [regNo, setRegNo] = useState('')

  const onClickLogin = async () => {
    if (regNo.length === 0) {
      alert("직번을 입력해주세요.");
      return false;
    }
    if (!clientIp) {
      alert("사용자의 IP정보를 초기화하는데 실패했습니다. 관리자에게 문의해주세요.");
      return false;
    }
    await AsyncStorage.setItem('regNo', regNo || '')
    await AsyncStorage.setItem('clientIp', clientIp || '')

    try {
      const params = {
        'reg-no': regNo,
        'main-ip-flag': "Y",
        'password': "",
      }
      const headers = {
        'X-Forwarded-For': clientIp
      }
      const { data } = await API_GET(SIGN_IN_TARGET_URL, params, headers)
      if (data.data.hospId >= 0) {
        setUserTp(data.data)
        props.navigation.navigate('Main')
      } else {
        alert(data.message)
      }
    } catch (e) {
      console.error(e);
      alert("요청을 처리하는 중 오류가 발생했습니다. 관리자에게 문의해주새요.")
    }
  }

  const getClientIp = async () => {
    try {
      const { data: { ip } } = await axios.get(CLIENT_IP_URL);
      setClientIp(ip)
    } catch (e) {
      console.log(e)
      alert("사용자의 IP정보를 초기화하는데 실패했습니다. 관리자에게 문의해주세요.")
    }
  }

  const getLocalData = async () => {
    try {
      const localRegNo = await AsyncStorage.getItem('regNo')
      if (localRegNo === null || localRegNo === '') {
        return
      } else {
        try {
          const params = {
            'reg-no': localRegNo,
            'main-ip-flag': "Y",
            'password': "",
          }
          const headers = {
            'X-Forwarded-For': clientIp
          }
          const { data } = await API_GET(SIGN_IN_TARGET_URL, params, headers)
          if (data.data.hospId >= 0) {
            setUserTp(data.data)
            props.navigation.navigate('Main')
          } else {
            alert(data.message)
          }
        } catch (e) {
          console.error(e);
          alert("요청을 처리하는 중 오류가 발생했습니다. 관리자에게 문의해주새요.")
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const loginFlag = async () => {
      const hospId = await AsyncStorage.getItem('hospId')
      if (hospId === null || hospId === '') {
        getLocalData()
      } else {
        props.navigation.navigate('Main')
      }
    }
    getClientIp()
    loginFlag()
  }, [])

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      enableOnAndroid={true}
      scrollEnabled={true}
      scrollToOverflowEnabled={true}
      enableAutomaticScroll={true}
      keyboardShouldPersistTaps='always'
      nestedScrollEnabled={true}
    >
      <View style={styles.wrap}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>AEGIS</Text>
        </View>
        <View style={styles.contentsWrap}>
          <TextInput
            style={styles.loginInput}
            placeholder={"직번"}
            placeholderTextColor='rgba(0,0,0,0.2)'
            keyboardType="number-pad"
            returnKeyType="done"
            onChange={(e) => { setRegNo(e.nativeEvent.text) }}
          />
        </View>
        <View style={styles.btnWrap}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => onClickLogin()}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView >
  );
})

Signin.propTypes = {
}
Signin.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

export default Signin
