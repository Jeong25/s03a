import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
    const wp = windowWidth > 540 ? 1.5 : windowWidth / 360
    const hp = windowHeight > 960 ? 1.5 : windowHeight / 640

    return StyleSheet.create({
        "wrap": {
            "backgroundColor": "#888",
            "width": '100%',
            "height": '100%',
        },
        "topBtnWrap": {
            "width": '90%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between',
            'marginTop': 20,
            'zIndex': 9,
        },
        'changeBtn': {
            "width": 40,
            "height": 40,
        },
        'backBtn': {
            "width": 40,
            "height": 40,
        },
        'searchBtn': {
            "width": 40,
            "height": 40,
        },
        'btnIcon': {
            "width": 30,
            "height": 30,
        },
        "textWrap": {
            'marginTop': 'auto',
            'marginBottom': '20%',
            'marginLeft': 'auto',
            'marginRight': 'auto',
            'zIndex': 9,
        },
        "locationName": {
            'fontFamily': 'Apple SD Gothic Neo',
            'fontWeight': '900',
            'fontSize': 44,
            'color': 'white',
            'textAlign': 'center'
        },
        "camera": {
            "width": windowWidth,
            "height": windowHeight,
            'position': 'absolute',
            'top': 0,
            'zIndex': 1,
        },
    })
}