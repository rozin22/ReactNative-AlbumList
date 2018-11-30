import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import { Constants } from "expo";
import AlbumList from "./src/components/AlbumList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.statusBar}>
        <Header headerText="Test Album" />
        <AlbumList style={styles.container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#000",
    // justifyContent: "center",
    flex: 1,
    alignItems: "center",
    height: Constants.statusBarHeight
  },
  container: {
    flex: 1,
    alignItems: "center"
  }
});
