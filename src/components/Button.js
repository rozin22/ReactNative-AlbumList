import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Alert } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 8,
    paddingBottom: 8
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 4,
    marginRight: 4
  }
});

export default Button;
