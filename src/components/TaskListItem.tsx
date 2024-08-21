import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TaskListItem({ task }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.description}</Text>
      <AntDesign name="close" size={16} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    // height: ItemHeight,
    paddingVertical: 3,
  },
  container: {
    backgroundColor: "#1D2125",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // height: "100%",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
