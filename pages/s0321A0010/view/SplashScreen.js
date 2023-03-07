import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';

const SplashScreen = (props) => {

  useEffect(() => {
    const getLocalData = async () => {
      props.navigation.reset({ routes: [{ name: 'Signin' }] })
      return
    }
    getLocalData()
  }, [])

  return (
    <View>
    </View>
  )
}

SplashScreen.propTypes = {
}

SplashScreen.defaultProps = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height
}

export default SplashScreen
