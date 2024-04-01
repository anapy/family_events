import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-elements";

const Home = ({navigation, route}) => {
    const [user, setUser] = useState('Mari Pili')

    return (
        <View style={styles.sectionContainer}>
            <Text h1 style={styles.colorPink}>
                FolkApp
            </Text>
            <View>
            <Text h2 style={styles.colorPink}>
                Hola {route.params.user}
            </Text>
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

export default Home;
