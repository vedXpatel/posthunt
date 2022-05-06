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

// http://10.0.2.2:5000/instagram
// https://posthunt-api-flask.herokuapp.com/

const Instagram = () => {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [memePage, setMemePage] = useState('memes');
    const [posts, setPosts] = useState({});
    const [captions, setCaptions] = useState({});

    const ref = React.useRef();

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://10.0.2.2:5000/instagram')
            .then(function (response) {
                // console.log(response.data) 
                setMemes(response.data);
                setPosts(memes['posts'])
                setCaptions(memes['captions'])
                setLoading(false);
            });
    }, []);
    console.log(memes);
    console.log(`-----------------------------------------------------`);
    console.log(posts);
    console.log(`-----------------------------------------------------`);
    console.log(captions);


    const refresh = () => {
        setLoading(true);
        axios
            .get('http://10.0.2.2:5000/instagram')
            .then(function (response) {
                // console.log(response.data) 
                setMemes(response.data);
                setPosts(memes['posts'])
                setCaptions(memes['captions'])
                setLoading(false);
            });
    };

    return (
        <SafeAreaView >
            {loading === true ? <Text>Loading..</Text> :
                <ScrollView ref={ref} >
                    <View style={{ flex: 1 }}>
                        {/* {Object.entries(posts).map(([key, value]) => {
                            return (
                                <>
                                    <View style={styles.postAccount} key={key + 1000}>
                                        <View style={styles.caption}>
                                            <Text key={key + 100} >Memes</Text>
                                        </View>
                                    </View>
                                    <Image style={styles.image} source={{ uri: value }} key={key} resizeMode={'contain'} />
                                </>
                            );
                        })}
                        {Object.entries(captions).map(([key, value]) => {
                            return (
                                <View style={styles.postAccount} key={key + 1000}>
                                    <View style={styles.caption}>
                                        <Text key={key + 100} >Memes</Text>
                                    </View>
                                </View>
                            );
                        })} */}
                    </View>
                </ScrollView>
            }
                    <Button onPress={refresh} title="refresh">
                        <Text>Refresh</Text>
                    </Button>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1 / 1,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 15,
        borderColor: 'black',
    },
    postAccount: {
        borderColor: "black",
    },
    caption: {
        marginBottom: 25,
        backgroundColor: "#f2af05",
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 35,
        padding: 15,
    },
});

export default Instagram;