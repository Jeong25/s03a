import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const styleSheet = (windowHeight = Dimensions.get('window').height, windowWidth = Dimensions.get('window').width) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({

        "wrap": {
            'width': windowWidth,
            'height': windowHeight,
            'position': 'relative',
            'backgroundColor': '#2D4B73',
        },
        "titleWrap": {
            'marginTop': '15%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
        },
        "title": {
            'fontFamily': 'NotoSerifKR-Bold',
            'textAlign': 'center',
            'fontSize': 70,
            'color': 'white'
        },
        'contentsWrap':{
            'marginLeft':'auto',
            'marginRight':'auto',
            'width': '90%',
            'marginTop': '30%',
        },
        "loginInput": {
            "width": "100%",
            "height": 65,
            "overflow": "hidden",
            'backgroundColor': 'white',
            "borderRadius"  : 10,
            "fontFamily": "Apple SD Gothic Neo",
            "fontSize": 18,
            "fontWeight": '700',
            "color": "#383838",
            'marginTop': '6%',
            "paddingHorizontal" : 10,
        },
        'btnWrap':{
            'width' : '90%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'marginTop': 'auto',
            'marginBottom' : 100,
        },
        "loginBtn": {
            'backgroundColor': "#72ACFF",
            'borderRadius': 10,
        },
        "loginText": {
            'fontSize': 24,
            'lineHeight' : 60,
            "fontFamily": "Apple SD Gothic Neo",
            "fontWeight": '700',
            'color': 'white',
            'textAlign': 'center',
            'textAlignVertical': 'center',

        },
    })
}