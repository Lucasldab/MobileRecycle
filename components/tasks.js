import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TaskList = ({ tasks }) => {
  const renderTask = ({ item }) => {
    return (
      <View style={styles.task}>
        <Text style={styles.titleTask}>{item.titleTask}</Text>
        <Text style={styles.DataCon}>{item.DataCon}</Text>
      </View>
    );
  };

  const sortedTasks = tasks.sort((a, b) => new Date(a.DataCon) - new Date(b.DataCon));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}></Text>
      <FlatList
        data={sortedTasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 11,
  },
  task: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginBottom: 11,
  },
  titleTask: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  DataCon: {
    fontSize: 14,
    color: 'gray',
  },
  list: {
    flex: 1,
  },
});

export default TaskList;
