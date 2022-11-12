import { View, Text, StyleSheet } from "react-native"

import React from 'react';
import { Image, ScrollView,TouchableOpacity,TextInput} from 'react-native';


const logo = {
  width: 500,
  height: 64,
};

interface Props{
    title: string;
    placeholder:string;
    onChangeText:(text:string) => void;
}

export function Home (){
    return(
        <View style={styles.containerMain} >
            <ScrollView>
                <View>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={text =>onChangeText(text)}
                        placeholder={"Buscar"}
                    />
                </View>
                 <View style={styles.container} >
                    <Text style={styles.text} >Lineas de buses</Text>

                    <Image style={styles.imgbus}
                        source={require("../img/bus.png")}/>


                    </View>
                 <View style={styles.container} >
                    <Text style={styles.text} >Departamentos</Text>
                    <View>
                    <Image style={styles.imgbus}
                        source={require("../img/mapanicaragua.png")}
                        />

                    </View>
                </View>
                 <View style={styles.container} >
                    <Text style={styles.text} >Ayuda</Text>
                    <View>
                    <Image style={styles.imgbus}
                        source={require("../img/Ayuda.png")}
                        />

                    </View>
                </View>

    
            </ScrollView>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        margin: 'auto',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 2,
        borderWidth: 0,
        borderColor: '#fffff',
        marginTop: 10,
        height:240,
        backgroundColor: '#ff5b00',

    },
    containerMain: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 0,
        height: '100%',
        display: 'flex'

    },
    text: {

        fontSize: 30,
        color: '#034C50',
        marginLeft: '25%',

    },
    inputs:{
        borderRadius: 15,
        borderColor: '#fffff',
        borderWidth: 3,
        width: '95%',
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 27,
        marginTop: 25
    },
    imgbus:{
        width:'85%',
        height: 130,
        borderRadius: 20,
        marginLeft: 25,
        marginTop: 10,

    }
})


