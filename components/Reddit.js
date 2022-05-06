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

// http://10.0.2.2:5000/memes
// https://posthunt-api-flask.herokuapp.com/

const Reddit = () => {
    const [memes, setMemes] = useState([]);
    const [loading,setLoading] = useState(true);
    const [memePage,setMemePage] = useState('memes');

    const ref = React.useRef();

    useEffect(() => {
        const json = JSON.stringify({"page":memePage})
        console.log(json);
        axios
            .post('http://10.0.2.2:5000/memes',json,{
                headers:{
                    'Content-Type':'application/json'
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
            .get('http://10.0.2.2:5000/memes')
            .then(function (response) {
                // console.log(response.data) 
                setMemes(response.data);
                setLoading(false);
            });
        ref.current.scrollTo({ x: 0, y: 0, animated: true });
    };

    return (
        <SafeAreaView>
            { loading===true ? <Text>Loading..</Text> : 
            <ScrollView ref={ref}>
                <View style={{ flex: 1 }}>
                    {Object.entries(memes).map(([key, value]) => {
                        return (
                            <>
                            <View style={styles.postAccount} key={key+1000}>
                                <View style={styles.caption}>
                                <Text key={key+100} >Memes</Text>
                                </View>
                                </View>
                                <Image style={styles.image} source={{ uri: value }} key={key} resizeMode={'contain'}/>
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
        aspectRatio: 1/1,
        marginLeft:25,
        marginRight:25,
        borderRadius:15,
        borderColor: 'black',
    },
    postAccount:{
        borderColor: "black",
    },
    caption:{
        marginBottom: 25,
        backgroundColor: "#f2af05",
        marginTop:25,
        marginLeft:25,
        marginRight:25,
        borderRadius:35,
        padding:15,
    },
});

export default Reddit;
