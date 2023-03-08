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
            'justifyContent' : 'space-between',
            'marginRight': 'auto',
            'marginLeft': 'auto',
            'position': 'relative',
        },

        'backIcon': {
            'width': 30,
            'height': 30,
        },
        'scanIcon': {
            'width': 30,
            'height': 30,
        },
        'pageTitle': {
            'marginRight': 'auto',
            'marginLeft': 'auto',
            'fontFamily': 'NotoSansKR-Bold',
            'color': '#2D4B73',
            'fontSize': 22,
        },
        'contentsWrap':{
            'width' : '90%',
            'marginRight': 'auto',
            'marginLeft': 'auto',
            'marginTop': 30,
        },
        'custInfoWrap' :{
            'width' : '100%',
        },
        'infoLayer' :{
            'width': '100%',
            'flexDirection' : 'row',
            'justifyContent' : 'space-between',
            'marginBottom' : 10,
        },
        'infoWrap' :{
            'flexDirection' : 'row',
            'width' : '50%',

        },
        'infoLabel': {
            'width' : 70,
            'backgroundColor' : '#2D4B73',
            'borderRadius' : 10,
            'marginRight' : 10,

        },
        'infoLabelText': {
            'fontFamily': 'NotoSansKR-Bold',
            'color': 'white',
            'fontSize': 16,
            'textAlign':'center',

        },
        'custSheetNum': {
            'fontFamily': 'NotoSansKR-Bold',
            'color': '#2D4B73',
            'fontSize': 16,
        },
        'researcherName': {
            'fontFamily': 'NotoSansKR-Bold',
            'color': '#2D4B73',
            'fontSize': 16,

        },
        'custInfo': {
            'fontFamily': 'NotoSansKR-Bold',
            'color': '#2D4B73',
            'fontSize': 16,
        },
        'selectWrap': {
            'fontFamily': 'NotoSansKR-Bold',
            'color': '#2D4B73',
            'fontSize': 16,
        },

        'numInputWrap': {
            'flexDirection':'row',
            'alignItem':'center',
            'position' : 'relative',
            'marginTop'  : '5%',
            'borderBottomColor' : '#2D4B73',
            'borderBottomWidth' : 2.5,
            'backgroundColor' : 'red'
        },
            

        'numInput': {
            'width' : '100%',
            'fontFamily': 'NotoSans-Bold',
            'color': '#333',
            'fontSize': 26,
            'padding': 0,
            'textAlign' : 'center',
            'lineHeight' : 42,


        },

        'amount': {
            'fontFamily': 'NotoSansKR-Bold',
            'color': '#d2d2d2',
            'fontSize': 26,
            'marginLeft' : 'auto',
            'lineHeight' :42,

        },
        'numBtnWrap' : {
            'marginTop'  : '5%',
        },
        'numLayer':{
            'flexDirection' : 'row',
            'alignItems' : 'center',
            'justifyContent' : 'space-between',
            'paddingHorizontal':20,
            'marginBottom'  : '10%',

        },
        'number': {
            'width' : 40,
            'height' : 40,
            'fontFamily': 'NotoSans-Regular',
            'textAlign' : 'center',
            'color': '#2D4B73',
            'fontSize': 30,
            'lineHeight' : 40,
        },
        'eraseIcon': {
           'width' : 40,
           'height' : 40,            
        },
        "btnWrap":{
            'marginBottom' : 10,
        },

        "saveBtn": {
            'backgroundColor': "#72ACFF",
            'borderRadius': 10,
            'marginBottom' : 10,
        },
        "printBtn": {
            'backgroundColor': "#72ACFF",
            'borderRadius': 10,
        },
        "btnText": {
            'fontSize': 24,
            'lineHeight' : 60,
            "fontFamily": "Apple SD Gothic Neo",
            "fontWeight": '700',
            'color': 'white',
            'textAlign': 'center',
            'textAlignVertical': 'center',

        },
    






    });
}