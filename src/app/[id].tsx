import { useObject } from "@realm/react";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { BSON } from "realm";
import { Task } from "../models/Task";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();

  const task = useObject(Task, new BSON.ObjectID(id as string));

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Task Details" }} />

      <Text style={{ color: "white", fontSize: 20 }}>{task?.description}</Text>
    </View>
  );
};

export default TaskDetails;
