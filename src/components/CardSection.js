import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    borderRadius: 4,
    borderColor: "#F3E900",
    backgroundColor: "#F3E900",
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative",
    paddingTop: 2
  }
});

export default CardSection;
