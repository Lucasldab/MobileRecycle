import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TaskList from '../components/tasks';

export default function Schedule() {

  const [titleTask, setTitle] = useState('');
  const [DataCon, setDueDate] = useState('');
  const [task, setTasks] = useState([]);

  const addTask = () => {
    if (!titleTask.trim()  || !DataCon.trim()) {
      return;
    }

    const newTask = {
      id: Date.now(),
      titleTask: titleTask,
      DataCon: DataCon,
      completed: false,
    };

    setTasks([...task, newTask]);
    setTitle('');
    setDueDate('');
    console.log(task)
  };
  
return (
  <View style={styles.container}>
  <Text style={styles.heading}>Agende sua Coleta</Text>
  <TextInput
    placeholder="Tarefa"
    value={titleTask}
    onChangeText={(text) => setTitle(text)}
    style={styles.input}
  />
  <TextInput
    placeholder="Data de Conclusão (DD/MM/AAAA)"
    value={DataCon}
    onChangeText={(text) => setDueDate(text)}
    style={styles.input}
  />
  <Button title="Criar Tarefa" onPress={addTask} color = '#05fc63'/>
  <TaskList tasks={task} />
</View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 25,
    marginBottom: 15,
    marginTop: 10,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
  },
});