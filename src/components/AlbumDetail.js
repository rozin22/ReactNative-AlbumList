import React from "react";
import { View, Text, StyleSheet, Image, Alert, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    headerAlbumContent,
    thumbnailStyleContainer,
    headerTextStyle,
    imageStyle
  } = styles;

  buttonClikcAlert = () => {
    return Linking.openURL(url);
  };

  return (
    <Card>
      {/* Detail Section */}
      <CardSection>
        <View style={thumbnailStyleContainer}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerAlbumContent}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      {/* Image Section */}
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={buttonClikcAlert}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerAlbumContent: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: "#fff",
    borderWidth: 1
  },
  thumbnailStyleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
    marginRight: 8
  },
  imageStyle: {
    width: null,
    flex: 1,
    height: 320
  }
});

export default AlbumDetail;
