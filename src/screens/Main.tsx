import { View, Text, StyleSheet } from "react-native"

const Main = () => {
    return(
        <View style={styles.container} >
            <View style={styles.header} >
            <Text>Header</Text>
            </View >
            <View style={styles.body}>
            <Text>Body</Text>
            </View>
            <View style={styles.footer}>
            <Text>Footer</Text>
            </View>
        </View>

    )
}

export default Main 

const styles = StyleSheet.create({
    container:{
        flex:1

    },
    header:{
        backgroundColor: 'red',
        flex:1

    },
    body:{
        backgroundColor: 'green',
        flex:1,
        justifyContent:'center',
        textAlign:'center'

    },
    footer:{
        backgroundColor: 'blue',
        flex:1

    }
})