import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
    },
    logoAndWelcome:{
        height:'30%',
        // backgroundColor:'red',
        width:'100%',
        justifyContent:"center",
        alignItems:'center',
    },
    formContainer:{
        height:'60%',
        // backgroundColor:'yellow',
        width:'100%',
        justifyContent:"center",
        alignItems:'center',
    },
    footer:{
        height:'10%',
        // backgroundColor:'blue',vg
        width:'100%',
        position:'relative',
        alignItems:'center',
        justifyContent:"center"
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
    error:{
        color:'red',
        fontSize:12,
        paddingLeft:8
    },
    textButton:{
        color:themas.colors.secondary,
        fontWeight:'bold',
        fontSize:18
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:themas.colors.primary,
        width:200,
        marginTop:30,
        borderRadius:50,
        height:50,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    textLogo:{
        marginTop: 40,
        fontWeight:'bold',
        fontSize:18
    },    register:{
        position:'absolute',
        top:0,
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
})