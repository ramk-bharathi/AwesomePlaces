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
import {connect} from 'react-redux';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
    onPlaceAddedHandler = (place) => {
        this.props.onAddPlace(place);
    };
    itemSelectHandler = key => {
        this.props.onSelectPlace(key);
    };
    itemDeleted = () => {
        this.props.onDeletePlace();
    };
    closeModal = () => {
        this.props.onDeselectPlace();
    };
    render() {
        return (
            <View style={styles.container}>
                <PlaceDetailsModal selectedPlace={this.props.selectedPlace} onModalClose={this.closeModal} onItemDeleted={this.itemDeleted}/>
                <PlaceInput onPlaceAdded={this.onPlaceAddedHandler}/>
                <PlaceList places={this.props.places} itemSelected={this.itemSelectHandler}/>
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

const stateProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    };
};

const dispatchProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};

export default connect(stateProps, dispatchProps)(App);
