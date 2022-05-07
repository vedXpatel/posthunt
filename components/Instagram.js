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

// https://posthunt-api-flask.herokuapp.com/instagram
// https://posthunt-api-flask.herokuapp.com/

const Instagram = () => {
    const [memes, setMemes] = useState([
        {
            captions: {
                0: 'When life (or a supporting artist) gives you dragons, you make them make kissy noises. \n\n#setlife \n#shesfullylosttheplot \n#mammaneedsaholiday!\n#Drogon #Rhaegal #Viserion #🐉',
                1: 'Doesn’t this video give you goosebumps!? I am amazed at how incredibly bold and brave these 5 brilliant women are, it takes my breath away to witness their strength! \n\nClinique are following these magnificent leaders on their journeys to the end of the earth!\nYou already know I’m obsessed with @clinique Moisture Surge but this LITERALLY takes it to whole new heights. \n\nI can only imagine what each of these womens’ skin must go through from shooting on location, facing dry climates, extreme cold, intense sun (and let’s face it some hard core stress)! Sometimes with only as much water as they can carry! I do believe that these fearless warriors deserve all of the Moisture Surge and delicious hydration in a jar they can get! ⛰️💕🤩💪 They also deserve our endless respect for being braver than I could ever imagine being…Follow @Clinique to learn more.\n\n \n#Clinique #Ad #CliniqueAmbassador #MoistureSurge #beauty #skincare #parabenfree #fragrancefree',
                2: 'Zen and the Art of On Set Maintenance…\n\nFilming? Stressful?!! \nAh Phooey…\n\n#innercalmiseasywhenyourgreenroomisasauna \n#yesiminpjs\n#yesitismycostume \n#yesmyjobisreal\n#🧘\u200d♀️ #🤷\u200d♀️ #👼',
                3: "Right now, I’m bouncing between one job and the next, one car/train/plane and the next and I’m noticing something… I don’t know about you, but the more I’m out and about, the more my skin is dehydrated. Turns out, tons of things can throw off your glow: air travel, extreme weather, blue light—even going back and forth between heat and aircon. Hell, even Ted’s face washing ritual (AKA licking me) isn’t sorting it out…\n\nThat's why I'm obsessed, OBSESSSSSSED I TELL YOU with @clinique Moisture Surge 100H. I know I’ve banged on about it before BUT I cannot rave enough about how it keeps my skin glowing and glowing and glowing… moisture surge in my bag SWAG?! \n\nIt’s hydration for whatever life throws at me (and you! And ted…) \nFollow @clinique for more juicy details on getting the skin you deserve 🤩😶\u200d🌫️🥰🪄🥳\n\n#ad #CliniqueAmbassador #Clinique #MoistureSurge",
                4: 'An actor prepares. \n\nBall?! \nTreat?! \nLunch?! \n\n#ohitsadogslife \n#hewaslesshappywhenigottotheballfirst \n#🎾 #🐶',
                5: "Ted and I are proud to stand with #Ukraine 🇺🇦. As are the incredible, beautiful crew from my latest project. These T-shirts were the most welcomed wrap gifts I’ve ever had the honour to give.\n\nMy heart is breaking along with so many others over the continued suffering, pain and heartbreak millions are living through in Ukraine. As the news comes in everyday it can feel overwhelming, not knowing how any one individual can make any difference to this shocking reality, but, here are a few ways to show your support and send some love…\n\nIf you want to join us and donate much needed funds, donate to @disastersemergencycommittee. By doing so you'll help provide food, water, shelter and healthcare to refugees and displaced families.\n\nIf you are in the USA 🇺🇸 you can give to directrelief.org who are working to fulfil the medical needs of Ukraine’s health ministry.\n\nThe beautifully made (and insanely soft and comfy) t-shirts that Ted, the crew and I are wearing are by the ever magnificent and loving @charliemackesy. All proceeds go to @chooselove \n\nAll links are in my bio. \n\nAnd finally my incredibly talented and dear friend @jasperfry has some stunning photos he took of #kyiv in 2018 for sale. All the proceeds are going to four Ukraine based charities. Info on his page. \n\n#standwithukraine \n#standforlove \n#❤️",
                6: 'One ferry across the Mersey and i managed to bag myself a stone cold fox…. \nLiverpool you done stole my heart, and my toes #😍 #❤️ \n#sorrynotsorryforthedadjoke\n#buthesarealgoodlistener \n#seadipnotadvised',
                7: 'Be still my beating heart it’s BACK!!!!! The seagull is coming back baby and it feeeels sooooo goooood!!!!!! YOU CAN BUY YOUR TICKETS RIGHT THIS VERY SECOND! \n\nGo to thejamielloydcompany.com (link in bio…;)\nWe will be on stage 29th June-10th September 2022 at the magnificent Harrold Pinter Theatre. GO GET EM!!!! \n\nOh I cannot wait to get on that stage and relive this magical production a few years wiser.. cannot wait to see you all there, happy happy happy new year you beauties\n#flyinglikeaseagull #betterstartrrlearningthoselinesthenright? \n@jamielloyd @jamielloydco',
                8: '#ad #CliniqueAmbassador\nThe festive season continues!!! Don’t miss out on this beautiful more than moisture gift set from @clinique !!! Hurry whilst stocks last as this little baby will be on everyone’s gift list….. Perfect for that last min chance to spread the festive glowing skin 🎄😍💪🏻 \n\n#MerryClinique #MoistureSurge',
                9: '#ad CliniqueAmbassador \nHAPPY CLEAN SKIN HOLIDAYS ! \nNo matter how much makeup or festive glitter you’re rocking this little miracle balm will remove ever ounce so your skin will feel lush and happy! Go to @clinique to get your today!! \n❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️\n#HolidaySkin #TakeTheDayOff #Beauty #Skincare',
                10: 'Heyyyoooooohhhhhhh!!! Guys check out @metaseva #sevalove for their groundbreaking support for my charity.\nThanks to @DeepakChopra, @Poonacha, @Dreamviewinc, @pholiostudio, @StevenSebring, @superrare.co and @Subnationgg for all of your pro-bono support, advice, and new ways for thinking about charitable giving.  Can’t wait to see what we achieve tomorrow.\nPlease please support me in making this a huge success for brain injury survivors everywhere. I know you have that holiday spirit in you…😘 \n#metaseva #sevalove #sameyou #braininjury #NFTdrops #NFTartists #NFTCommunity #nftforgood #nftcollector #EmiliaClarke #digitalart #design #Metaverse @sameyouorg',
                11: 'Yes. I am now THIS lady. Baking ain’t just for humans. \n\nI mean LOOK AT HIM! 😍😂💪🏻 #teddyturnstwo #spoilt?! #onlygettingwhatmylittlemandeswrves #❤️ #🐶',
            },
            posts: {
                0: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/277931094_505058741074402_3874745759673689087_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=BmRXlseh2QsAX_TJjm5&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT90nLekb57sLeBm_S-BPrNHS6bACXbaHtZad_aM_1Y-ZA&oe=627E32E9&_nc_sid=7bff83',
                1: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/277965814_472275521317174_5509804632029900558_n.jpg?stp=dst-jpg_e15_fr_p1080x1080&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=QPpw2_iugIcAX940Qoj&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8EIRMa4t5_VWJlcwuHGea3uRSXwF2qKJV2S301pDmxBQ&oe=62790D9E&_nc_sid=7bff83',
                2: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/277854134_1099672260608839_979040095879851983_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Fssw3RQ4C4YAX-hKZtP&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8e9PZr6961tsffGFtpATRGSvTv4H5qbSe6VYtFuFd32A&oe=627E6480&_nc_sid=7bff83',
                3: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/276980367_343524244458765_8814919989970608847_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=jx3Tg0xCo-YAX9MAhnm&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-sgleL-o3BODip1ZrTPBG5bONHg3kruoyoxMFmQ-7v-g&oe=627917C3&_nc_sid=7bff83',
                4: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/276965419_489090872937317_2365066547891317883_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=dcaxdXs5exUAX_zaiCb&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9FO2-ie6CidLfSep2oTq3_fVhUVo3mkDOn6UNUOAu4Lw&oe=627DFFC9&_nc_sid=7bff83',
                5: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/275567477_265834495600641_8985005185998197690_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=DgolZBoj4P0AX8htdyH&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8lyyXdFTAAIjQZePpCNvHf3zCbYLXh3VvEyCO7krzatw&oe=627D862E&_nc_sid=7bff83',
                6: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/273960766_141079861712353_4173781272312988177_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=SGAam261nn8AX-K2lXJ&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_YJLyrpherHhVEFBRiOVAvAMB1a7tHUsLQBq5cUp-3mQ&oe=627DAE05&_nc_sid=7bff83',
                7: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/271677523_630246364911161_6773763654009408486_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=bzxtQwwzDEIAX8nBNxb&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9UqJzI-ZlPkgBB3Uj0aKgqEAR_iXPL7nEpukwt8PxKSg&oe=62791168&_nc_sid=7bff83',
                8: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/267485047_605332227350042_7587320481322379463_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=dxB8S66csqQAX_pdkLe&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_qPKhYKPd7mkhK6v2zi-3AdalvUeVXefIaQFAaGzTg6Q&oe=6278DD81&_nc_sid=7bff83',
                9: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/266377667_324801652578491_3211176307187948591_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=elayh1_KB1kAX8TAJdS&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-FxPwGNzw89ThQcGRSfjLmxPi86ETA8blLRNK2SG8Qpg&oe=6278AC32&_nc_sid=7bff83',
                10: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/261934685_1038830300241013_4164997741312768179_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ILKmtQGGRWYAX_JcyLM&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT-lpkHSW6NWjJcSuGF5YHf8WfaXOmj0P0Jw4bmO7vXjLg&oe=62794B9D&_nc_sid=7bff83',
                11: 'https://instagram.fabe1-1.fna.fbcdn.net/v/t51.2885-15/260099230_423237179348043_4573892903433460981_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fabe1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=1LQ0vwdTF04AX-ziSOK&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8V6LRy01w-39Spn_oNeRjW8oKx5djJig9XasXwrUudkg&oe=627DFE92&_nc_sid=7bff83',
            },
        },
    ]);
    const [loading, setLoading] = useState(true);
    const [memePage, setMemePage] = useState('memes');
    const [posts, setPosts] = useState({});
    const [captions, setCaptions] = useState({});

    const ref = React.useRef();

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://posthunt-api-flask.herokuapp.com/instagram')
            .then(function (response) {
                // console.log(response.data)
                setMemes(response.data);
                setPosts(memes['posts']);
                setCaptions(memes['captions']);
                setLoading(false);
            });
        setPosts(memes['posts']);
        setCaptions(memes['captions']);
    }, []);
    console.log(memes);
    console.log(`-----------------------------------------------------`);
    console.log(memes['posts']);
    console.log(`-----------------------------------------------------`);
    console.log(memes['captions']);

    const refresh = () => {
        setLoading(true);
        axios
            .get('https://posthunt-api-flask.herokuapp.com/instagram')
            .then(function (response) {
                // console.log(response.data)
                setMemes(response.data);
                setPosts(memes['posts']);
                setCaptions(memes['captions']);
                setLoading(false);
            });
    };

    return (
        <SafeAreaView>
            {loading === true ? (
                <Text>Loading..</Text>
            ) : (
                <ScrollView ref={ref}>
                    <View style={{ flex: 1 }}>
                        {Object.entries(memes['posts']).map(([key, value]) => {
                            return (
                                <>
                                    <Header
                                        barStyle="dark-content"
                                        leftComponent={{ icon: 'menu', color: '#fff' }}
                                        centerComponent={{
                                            text: 'Posthunt',
                                            style: { color: '#fff', fontSize: 18 },
                                        }}
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
                                                            <Text key={key + 100} style={styles.title}>
                                                                Memes
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <Image
                                                        style={styles.image}
                                                        source={{ uri: value }}
                                                        key={key}
                                                        resizeMode={'contain'}
                                                    />
                                                </>
                                            );
                                        })}
                                    </View>{' '}
                                </>
                            );
                        })}
                        {/* {Object.entries(memes["captions"]).map(([key, value]) => {
                            return (
                                // <View style={styles.postAccount} key={key + 1000}>
                                //     <View style={styles.caption}>
                                //         <Text key={key + 100} >Memes</Text>
                                //     </View>
                                // </View>
                            );
                        })} */}
                    </View>
                </ScrollView>
            )}
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
        borderRadius: 25,
        borderColor: 'white',
        borderWidth: 10,
    },
    postAccount: {
        borderColor: 'black',
    },
    caption: {
        backgroundColor: '#FDBA00',
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
    },
});

export default Instagram;
