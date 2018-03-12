import React from 'react';
import {View, Text, Button, Modal, Image, StyleSheet} from 'react-native';

const placeDetailsModal = props => {
    let modalContent = null;
    if(props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.modalImage}/>
                <Text>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onModalClose} animationType="slide" visible={props.selectedPlace !== null}>
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title='Close' color='red' onPress={props.onModalClose}/>
                    <Button title='Delete' color='green' onPress={props.onItemDeleted}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 16
    },
    modalImage: {
        width: '100%',
        height: 200
    }
});

export default placeDetailsModal;