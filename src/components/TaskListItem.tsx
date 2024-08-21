import { AntDesign } from "@expo/vector-icons";
import { useRealm } from "@realm/react";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { Task } from "../models/Task";

export default function TaskListItem({ task }: { task: Task }) {
  const realm = useRealm();

  const deleteTask = () => {
    realm.write(() => {
      realm.delete(task);
    });
  };
  return (
    <Link href={`/${task._id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>

        <AntDesign name="close" size={16} color="gray" />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D2125",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
