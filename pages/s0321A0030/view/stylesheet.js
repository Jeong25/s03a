import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        "wrap": {
            "backgroundColor": "#2D4B73",
            "width": '100%',
            "height": '100%',
            'position' : 'relative'
        },
        'topMenu': {
            'width': '90%',
            'flexDirection': 'row',
            'alignItems': 'center',
            'marginRight' : 'auto',
            'marginLeft' : 'auto',
        },
        'topLogo': {
            'fontFamily': 'NotoSerifKR-Regular',
            'color': 'white',
            'fontSize': 28,
        },
        'contentsWrap': {
            'width' : '90%',
            'marginRight' : 'auto',
            'marginLeft' : 'auto',
            'marginTop' : 30,
        },
        'welcomeText': {
            'fontFamily': 'AppleSDGothicNeo',
            'fontWeight': '700',
            'color': 'white',
            'fontSize': 24,
        },
        'centerBtnWrap' : {
            'marginTop' : '15%',
        },
        'centerBtnLayer':{
            'width' : '100%',
            'flexDirection':'row',
            'alignItems':'center',
            'justifyContent':'space-between',
            'marginBottom': 20,
        },
        'centerBtn' : {
            'width' : 150,
            'height' : 150,
            'backgroundColor' : 'white',
            'borderRadius' : 15,
            'padding': 10,
            'elevation' : 20,
        },
        'centerBtnText' : {
            'fontFamily': 'AppleSDGothicNeo',
            'fontWeight': '500',
            'color': '#2D4B73',
            'fontSize': 18,
            'textAlign':'right',
            'marginTop':'auto',
        },
        'btnIcon':{
            'width': 45,
            'height': 45,
        }
    });
}