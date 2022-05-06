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

const Twitter = () => {

    const [twitter,setTwitter] = useState([]);

    let profile,name,username;

    const request = async() => {
        axios
            .get('http://10.0.2.2:5000/')
            .then(function (response) {
                setTwitter(response.data);
            })
            .catch(error => console.log(error));
    }


    useEffect(() => {
        request()
    }, []);

    const refresh = () => {
        axios
            .get('http://10.0.2.2:5000/')
            .then(function (response) {
                setTwitter(response.data);
            })
            .catch(error => console.log(error));
    }

    console.log(twitter);
    profile = twitter[201];
    name = twitter[202];
    username = twitter[203];

    delete twitter[201];
    delete twitter[202];
    delete twitter[203];
    

    return (
        <>
        <ScrollView>
            <Button title="refresh" onPress={refresh}><Text>Refresh</Text></Button>
            {Object.entries(twitter).map(([key, value]) => {
                        return (
                            <View style={styles.tweetView}>
                                <Image source={{ uri: profile}} style={styles.image}/>
                                <Text style={styles.profile} key={key+1000}>{name}   @{username}</Text>
                                <Text key={key} style={styles.tweetText}>{value}</Text>
                            </View>
                        );
                    })}
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    tweetView: {
        flex:1,
        backgroundColor:'#F8BE00',
        marginTop:25,
        marginLeft:25,
        marginRight:25,
        borderRadius:25,
    },
    profile: {
        paddingTop: 19,
        paddingLeft: 83,
        fontWeight: '700',
        fontSize: 16,
        color: '#ffffff',
    },
    tweetText: {
        paddingTop: 2,
        paddingLeft: 83,
        // color: '#141619',
        color: '#ffffff',
        fontSize: 16,
        paddingRight:29,
        marginBottom:14,
    },
    image:{
        position: 'absolute',
        width:55,
        height:55,
        marginTop: 20,
        marginLeft:20,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white'
    }
})

export default Twitter;