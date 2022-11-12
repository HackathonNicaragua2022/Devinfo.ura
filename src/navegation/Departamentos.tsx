import { View, Text, StyleSheet } from "react-native"

import React from 'react';
import { Image,Button, ScrollView,TouchableOpacity,TextInput} from 'react-native';


interface Props{
    title: string;
    placeholder:string;
    onChangeText:(text:string) => void;
}

export function Departamentos (){
    return(
        <View style={styles.containerMain} >
            <ScrollView>


                <Text style={styles.titulo} >Departamentos</Text>

                <View style={styles.container} >
                    <Text style={styles.text} >Managua</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Masaya</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Granada</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Leon</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Chinandega</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Carazo</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Esteli</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Boaco</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Chontales</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Rio San Juan</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >RAAS</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >RAAN</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Jinotega</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Matagalpa</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Nueva Segovia</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Madriz</Text>
                </View>
                <View style={styles.container} >
                    <Text style={styles.text} >Rivas</Text>
                </View>
    
            </ScrollView>
        </View>

    );

};

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
        height:50,
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
    titulo: {

        fontSize: 35,
        width: '90%',
        marginLeft: '10%',

    },
    text: {

        fontSize: 30,
        color: 'white',
        marginLeft: '25%',
        fontWeight:'30',
        fontFamily: 'Roboto'

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
        width:'40%',
        height: 150,
        borderRadius: 20,
        marginLeft: 90,
        marginTop: 10,

    },
    botons:{
        width:'95%',
        marginLeft: 3,
    }
})


