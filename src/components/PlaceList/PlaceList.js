import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ListItem from './../ListItem/ListItem';

const placeList = props => {
    return (
        <FlatList style={styles.placeListContainer} data={props.places} renderItem={(info) => (
            <ListItem placeName={info.item.name}
                      placeImage={info.item.image}
                      itemPressed={() => props.itemSelected(info.item.key)}
            />
        )}/>
    );
};

const styles = StyleSheet.create({
    placeListContainer: {
        width: "100%"
    }
});

export default placeList;