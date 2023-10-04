import React,{FC} from "react"
import { Text, View,StyleSheet,Image,Button } from "react-native"
import {PostImage} from "../../types/index"
//Componente tipado
const TodayImage:FC<PostImage> = ({date,title,url})=> {
    
    return (
        <View style ={style.container}>
            <View style={style.ImageContainer}>
                {/*esto se hace en el caso de que la imagen no sea local */}
                <Image style={style.image} source={{uri:url}}/>
            </View>
            <Text style={style.title}>{title}</Text>
            <Text style={style.date}>{date}</Text>

            <View style={style.button}>
                <Button title="View"/>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor:"#2c449d",
        marginVertical:16,
        borderRadius:32,
        padding:16,
        marginHorizontal:24
    },
    image:{
        width:"100%",
        borderRadius:32,
        height:180,
        borderWidth:2,
        borderColor:"white"
    },
    ImageContainer:{
        borderWidth:2,
        borderRadius:32,
    },
    title:{
        color:"white",
        fontSize:20,
        marginVertical:12,
        fontWeight:"bold"

    },
    date:{
        color:"#fff",
        fontSize:16
    },
    button:{
        alignItems:"flex-end"
    }
})
export default TodayImage