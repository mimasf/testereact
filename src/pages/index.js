import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../assets/logo.png';

const styles=StyleSheet.create({
    Logo:{
        
        width: 600 ,
        height: 300
    }
})




export default function Home() {
    return ( 
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            
                <Image source={Logo} style={styles.Logo}></Image>
            </View>

    );

}
