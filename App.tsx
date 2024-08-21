import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TaskListItem from './src/components/TaskListItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{padding: 10}}>
        <TaskListItem task={{description: 'First Task'}} />
        <TaskListItem task={{description: 'Second Task'}} />
        <TaskListItem task={{description: 'Third Task'}} />
        </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,


  },
});
