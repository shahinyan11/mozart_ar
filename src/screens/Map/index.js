import React, {Component} from 'react'
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import ProgressBar from "../../components/ProgressBar";
import BottomMenu from "../../components/BottomMenu";
import BackIcon from "../../assets/svgs/BackIcon";
import data from "../../services/data";
import {styles} from './styles'
import MapViewDirections from "react-native-maps-directions";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cameraAccess: false,
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            },
            mode: 'WALKING'
        }
    }

    componentWillMount(){
        request(PERMISSIONS.ANDROID.CAMERA).then((status) => {
            if (status === 'granted') {
                this.setState({
                    cameraAccess: true
                })
            }
        });

        Geolocation.getCurrentPosition((data) => {
            this.setState({
                region: {
                    latitude: data.coords.latitude,
                    longitude: data.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }
            })
        });
    };

    render() {
        const {oriented, game} = this.props;
        const {mode, region} = this.state;
        const coordinates = data.coordinates[`stage_${game.stage}`];

        return (
            <ScrollView style={!oriented ? styles.scrollView : styles.scrollViewOriented}
                        contentContainerStyle={{flexGrow: 1}}>
                <View style={!oriented ? styles.container : styles.containerOriented}>
                    <LinearGradient style={!oriented ? styles.col_1 : styles.col_1Oriented}
                                    colors={['rgba(36, 25, 32, 1)', 'rgba(36, 25, 32, 0.75)']}
                                    start={{x: 0, y: 0}}
                                    end={{x: 1, y: 0}}
                    >
                        <ProgressBar navigation={this.props.navigation}/>
                        <View style={!oriented ? styles.titleContain : styles.titleContainOriented}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                                style={styles.touchBack}
                            >
                                <BackIcon fill="#39ABD7"/>
                            </TouchableOpacity>

                            <Image source={require('../../assets/images/np-map.png')} style={styles.mapIcon}/>
                            <Text style={styles.mainTitle}>KARTE</Text>
                        </View>
                    </LinearGradient>
                    <View style={styles.col_2}>
                        <MapView
                            style={styles.map}
                            customMapStyle={data.mapStyle}
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            showsUserLocation={true}
                            // onUserLocationChange={this.onUserLocationChange}
                            // onRegionChangeComplete={this.onRegionChangeComplete}
                            region={region}
                        >
                            {
                                coordinates.map((value, index) => {
                                    if (game.stage !== 8 || game.stage !== 14) {
                                        return (
                                            <View key={index}>
                                                <MapView.Marker coordinate={value.destination}>
                                                    {game.stage === 5 ?
                                                        <Image source={require('../../assets/images/mapMarker.png')}
                                                               style={{width: 20, height: 20}}/> : null}
                                                </MapView.Marker>
                                                <MapViewDirections
                                                    origin={{latitude: region.latitude, longitude: region.longitude}}
                                                    destination={value.destination}
                                                    apikey={'your_API_KEY'}
                                                    mode={mode}
                                                    strokeWidth={3.5}
                                                    lineDashPattern={[10, 10]}
                                                    strokeColor="hotpink"
                                                />
                                            </View>
                                        )
                                    }
                                })
                            }

                        </MapView>
                    </View>
                    <View style={!oriented ? styles.col_3 : styles.col_3Oriented}>
                        <BottomMenu
                            screenId={4}
                            navigation={this.props.navigation}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)
