import React  from "react";
import { Text, View,Image,StyleSheet } from "react-native";


const Header = ()=> {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style = {styles.rightContainer}>
                <Image style={styles.Image} source={require("../../../assets/logo_Nasa.png")}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",

    },
    leftContainer:{
        flex:1,
        alignItems:"flex-start"
    },
    rightContainer:{
        flex:1,
        alignItems:"flex-end"

    },
    title:{
        fontSize:20,
        color:"#fff"
    },
    Image:{
        width:60,
        height:60    
    }
    
})

export default Header;