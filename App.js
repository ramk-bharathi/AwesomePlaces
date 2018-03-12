/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetailsModal from './src/components/PlaceDetails/PlaceDetailModal';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    state = {
        places: [],
        selectedPlace: null
    };
    onPlaceAddedHandler = (place) => {
        this.setState(prevState => {
            return {
                places: prevState.places.concat({key: Math.random().toString(), name: place, image: {uri: 'https://i.ytimg.com/vi/U2OyyvVb9Dw/maxresdefault.jpg'}})
            }
        });
    };
    itemSelectHandler = key => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            }
        });
        // this.setState(prevState => {
        //     return {
        //         places: prevState.places.filter(place => {
        //             return place.key !== key
        //         })
        //     }
        // });
    };
    itemDeleted = () => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter(place => {
                    return place.key !== prevState.selectedPlace.key
                }),
                selectedPlace: null
            }
        });
    };
    closeModal = () => {
        this.setState({
            selectedPlace: null
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <PlaceDetailsModal selectedPlace={this.state.selectedPlace} onModalClose={this.closeModal} onItemDeleted={this.itemDeleted}/>
                <PlaceInput onPlaceAdded={this.onPlaceAddedHandler}/>
                <PlaceList places={this.state.places} itemSelected={this.itemSelectHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
