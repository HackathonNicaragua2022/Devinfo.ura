import { View, Text, StyleSheet } from "react-native"

import React from 'react';
import { Image, ScrollView,TouchableOpacity} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 500,
  height: 64,
};

export function Home (){
    return(
        <View style={styles.container} >
            <ScrollView>
            <Text style={{ fontSize: 50 }}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 50 }}>If you like</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 50 }}>Scrolling down</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 50 }}>What's the best</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 50 }}>Framework around?</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 50 }}>React Native</Text>
        </ScrollView>
        </View>

    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent:"center"

    },
})
