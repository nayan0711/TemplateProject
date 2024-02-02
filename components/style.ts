import { StyleSheet } from "react-native";
 const styles=StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        fontSize:50,
        margin:20,
        alignItems:'center',
        marginTop:35,

    },
    backBtnStyle:{
        height:40,
        width:40,
        
    },
    bellBtnStyle:{
        height:35,
        width:35,
        alignItems:'flex-end',
        resizeMode: 'cover', 
        marginLeft:50,
    },
    homeBtnStyle:{
        height:30,
        width:30,
        alignItems:'flex-end',
        marginHorizontal:28,
        resizeMode: 'cover', 
    },
    registerBackgroundStyle:{
       flex :1,  
    },
    registerContainer:{
        height:'100%',
        width:'90%',
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        alignItems: 'center',
    },
    registerInputStyle:{
        borderColor:'gray',
        borderWidth:1,
        width:300,
        marginTop:20,
        borderRadius:100,
    },
    checkbox: {
        alignSelf: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 16,
    },
    btnStyle:{
        marginTop:10, 
        marginHorizontal:20
    },
    btnTextStyle:{
        fontSize:20, 
        margin:10  
    }

})
export default styles