import { StyleSheet } from 'react-native';

export const styleSheet = (windowHeight, windowWidth) => {
    const wp = windowWidth / 360
    const hp = windowHeight / 800
    return StyleSheet.create({
        "wrap": {
            "backgroundColor": "white",
            "width": '100%',
            "height": '100%',
            'position': 'relative'
        },
        'topMenu': {
            'width': '90%',
            'flexDirection': 'row',
            'alignItems': 'center',
            'marginRight': 'auto',
            'marginLeft': 'auto',
            'position': 'relative',
        },
        'backIcon': {
            'width': 30,
            'height': 30,
            'position': 'absolute',
            'left': 0,
            'top': -15,
        },
        'pageTitle': {
            'marginRight': 'auto',
            'marginLeft': 'auto',
            'fontFamily': 'NotoSansKR-Bold',
            'color': '#2D4B73',
            'fontSize': 22,
        },
        'contentsWrap': {
            'width': '90%',
            'marginRight': 'auto',
            'marginLeft': 'auto',
            'marginTop': 30,
        },
        'centerBtnLayer': {
            'width': '100%',
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between',
            'marginBottom': 20,
        },
        'centerBtn': {
            'width': 150,
            'height': 70,
            'backgroundColor': '#2D4B73',
            'borderRadius': 15,
            'elevation': 10,
        },
        'centerBtnText': {
            'fontFamily': 'AppleSDGothicNeo',
            'fontWeight': '500',
            'color': 'white',
            'lineHeight' :70,
            'fontSize': 18,
            'textAlign': 'center',
        },
    });
}