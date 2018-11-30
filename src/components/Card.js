import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  containerStyle: {
    width: 320,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#F3E900",
    borderColor: "#fff",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { widht: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 10
  }
});

export default Card;
