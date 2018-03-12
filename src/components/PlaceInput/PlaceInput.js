import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

class PlaceInput extends React.Component {
    state = {
        placeName: ""
    };
    onPlaceNameChange = place => {
        this.setState({
            placeName: place
        });
    };
    onAddPlaceClick = () => {
        if(this.state.placeName.trim() === '') {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    };
    render() {
        return (
            <View style={styles.formView}>
                <TextInput
                    placeholder="Awesome Place"
                    onChangeText={this.onPlaceNameChange}
                    value={this.state.placeName}
                    style={styles.inputControl}
                />
                <Button title="Add Place" onPress={this.onAddPlaceClick} style={styles.buttonControl}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formView: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    inputControl: {
        width: "100%"
    },
    buttonControl: {
        width: "100%"
    }
});

export default PlaceInput;