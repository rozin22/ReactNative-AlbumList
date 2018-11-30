//library
import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";

//Component
const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F3E900",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 320,
    marginTop: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.4,
    elevation: 4,
    position: "relative"
  },
  textStyle: {
    color: "#000000",
    fontSize: 20
  }
};

//Make Component Availabel
export default Header;
