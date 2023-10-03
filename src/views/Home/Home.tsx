import React, { useEffect, useState } from "react";
import {View,StyleSheet} from "react-native"
import Header from "../../components/Header";
import TraerDatos from "../../Helpers/FetchApiNasa";

const Home = ()=> {

    const [dataTodayInfo,setDataTodayInfo] = useState("")

    const loadTodayImage = async()=> {
        const todayImage = await TraerDatos()
        setDataTodayInfo(todayImage)
        
        return todayImage
    }
    
    useEffect(()=> {
        const data = loadTodayImage()
    },[])
    
    return (
        <View style={style.container}>
            <Header/>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16
    }
})

export default Home