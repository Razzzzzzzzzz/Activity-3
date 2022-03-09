import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

interface IProps {
    url: string;
}

export default function ImageCard(props: IProps) {
    const { url } = props;
    return (
        <View style={styles.imageContainer}>
            <Image
                source={{
                    uri: url
                }}
                style={{ flex: 1, resizeMode: "cover" }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});

const test = (x: number, y: number) => {

}