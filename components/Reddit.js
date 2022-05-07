import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
} from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from 'react-native-elements';

// http://10.0.2.2:5000/memes
// https://posthunt-api-flask.herokuapp.com/

const Reddit = () => {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [memePage, setMemePage] = useState('memes');

    const ref = React.useRef();

    useEffect(() => {
        const json = JSON.stringify({ "page": memePage })
        console.log(json);
        axios
            .post('https://posthunt-api-flask.herokuapp.com//memes', json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function (response) {
                console.log(response.data)
                setMemes(response.data);
                setLoading(false);
            });
    }, []);
    console.log(memes);

    const refresh = () => {
        setLoading(true);
        axios
            .get('https://posthunt-api-flask.herokuapp.com//memes')
            .then(function (response) {
                // console.log(response.data) 
                setMemes(response.data);
                setLoading(false);
            });
        ref.current.scrollTo({ x: 0, y: 0, animated: true });
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            {loading === true ? <Text>Loading..</Text> :
                <ScrollView ref={ref}>
                    <Header
                        barStyle="dark-content"
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'Posthunt', style: { color: '#fff' ,fontSize:18,} }}
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                            colors: ['#FD6500', '#FD8F00'],
                            start: { x: 0, y: 0.5 },
                            end: { x: 1, y: 0.5 },
                        }}
                        containerStyle={{
                            justifyContent: 'space-around',
                        }}
                    />
                    <View style={{ flex: 1 }}>
                        {Object.entries(memes).map(([key, value]) => {
                            return (
                                <>
                                    <View style={styles.postAccount} key={key + 1000}>
                                        <View style={styles.caption}>
                                            <Text key={key + 100} style={styles.title} >Memes</Text>
                                        </View>
                                    </View>
                                    <Image style={styles.image} source={{ uri: value }} key={key} resizeMode={'contain'} />
                                </>
                            );
                        })}
                    </View>
                    <Button onPress={refresh} title="refresh">
                        <Text>Refresh</Text>
                    </Button>
                </ScrollView>
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1 / 1,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 10,
    },
    postAccount: {
        borderColor: "black",
    },
    caption: {
        backgroundColor: "#FDBA00",
        marginTop: -330,
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 25,
        paddingTop: 15,
        borderRadius: 25,
        top: 370,
        height: 420,
    },
    title: {
        fontSize: 18,

    }
});

export default Reddit;
