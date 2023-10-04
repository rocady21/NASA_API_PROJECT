import React,{FC} from "react";
import { View,StyleSheet, Text,Button } from "react-native";
import { PostImage } from "../../types";


const CardPostImage:FC<PostImage> = ({title,date})=> {
    
return (
        <View style={style.container}>
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
        backgroundColor:"rgba(18,39,113,225)",
        marginVertical:6,
        padding:16,
        borderRadius:20
    },
    button:{
        alignItems:"flex-end"
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:"white",
        marginBottom:12

    },
    date:{
        color:"white"
    }
})


export default CardPostImage