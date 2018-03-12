import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.itemPressed}>
        <View style={styles.listItemStyle}>
            <Image style={styles.placeImageStyle} source={props.placeImage} resizeMode="center"/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItemStyle: {
        width: "100%",
        padding: 10,
        margin: 5,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    placeImageStyle: {
        height: 30,
        width: 30
    }
});

export default listItem;