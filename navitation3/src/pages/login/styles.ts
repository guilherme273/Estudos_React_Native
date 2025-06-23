import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
    },
    logoAndWelcome:{
        height:Dimensions.get('window').height/3,
        // backgroundColor:'red',
        width:'100%',
        justifyContent:"center",
        alignItems:'center',
    },
    formContainer:{
        height:Dimensions.get('window').height/3,
        // backgroundColor:'yellow',
        width:'100%',
        justifyContent:"center",
        alignItems:'center',
    },
    footer:{
        height:Dimensions.get('window').height/4,
        // backgroundColor:'blue',
        width:'100%',
        position:'relative',
        alignItems:'center',
        justifyContent:"center"
    },
    textLogo:{
        marginTop: 40,
        fontWeight:'bold',
        fontSize:18
    },
    labelInput:{
        color:themas.colors.gray,
        marginTop:20,
        paddingLeft:8
    },
    inputAndIcon:{
        width:'90%',
        height:40,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:20,  
        borderColor:themas.colors.lightGray1,
        backgroundColor: themas.colors.lightGray3,
        paddingHorizontal:15      
    },
    input:{
        width:'90%',
        height:40,
        paddingLeft:5,
        
    },
    register:{
        position:'absolute',
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
       
    },
    textLink:{
        color:themas.colors.gray
    },
    registerLink:{
        color:themas.colors.primary,
        width:100,
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:themas.colors.primary,
        width:200,
        marginTop:30,
        borderRadius:50,
        height:50
    },
    textButton:{
        color:themas.colors.secondary,
        fontWeight:'bold',
        fontSize:18
    }


})