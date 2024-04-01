import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from "react-native-elements";

const Login = ({navigation}) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const logIn = () => {
        alert('Usuario: ' + user + '\nPassword: ' + password)
        navigation.navigate('Home', {user: user})
    }

    return (
        <View style={styles.sectionContainer}>
            <Text h1 style={styles.colorPink}>
                FolkApp
            </Text>
            <View>
                <Input
                   placeholder='Usuario'
                   value={user}
                   onChangeText={(userName) => {setUser(userName)}}
                ></Input>
                <Input
                   placeholder='Contraseña'
                   value={password}
                   onChangeText={(pass) => {setPassword(pass)}}
                   secureTextEntry={true}
                ></Input>
            <Button title='Entrar' buttonStyle={{backgroundColor: '#FF8080'}} style={styles.colorPink} onPress={() => {navigation.navigate('Home', {user: user})}}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        paddingTop: 32,
        paddingHorizontal: 56,
        backgroundColor: '#CDFADB',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    colorAqua: {
        color: '#CDFADB',
    },
    colorGreen: {
        color: '#F6FDC3',
    },
    colorOrange: {
        color: '#FFCF96',
    },
    colorPink: {
        margin: 52,
        color: '#FF8080',
        fontSize: 32,
        fontWeight: "bold"
    }
});

export default Login;
