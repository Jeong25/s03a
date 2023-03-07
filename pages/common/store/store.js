import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserTp = async (data) => {
    await AsyncStorage.setItem('hospId', data.hospId.toString() || '')
    await AsyncStorage.setItem('userId', data.userId.toString() || '')
    await AsyncStorage.setItem('regNo', data.regNo.toString() || '')
    await AsyncStorage.setItem('directorNm', data.directorNm || '')
    await AsyncStorage.setItem('systemUserTp', data.systemUserTp || '')
    await AsyncStorage.setItem('systemAdminFlag', data.systemAdminFlag || '')
    await AsyncStorage.setItem('hpNo', data.hpNo || '')
    await AsyncStorage.setItem('email', data.email || '')
    await AsyncStorage.setItem('accessToken', data.accessToken || '')
    await AsyncStorage.setItem('refreshToken', data.refreshToken || '')
    console.log(JSON.stringify(data, null, 4))
}

export { setUserTp }