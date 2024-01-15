// 9. Define ToDoList.js as follows:
// a) Import React and necessary components (useState, View, Text, Button, StyleSheet,
// uuidv4, etc9. Define ToDoList.js as follows:
// a) Import React and necessary components (useState, View, Text, Button, StyleSheet,
// uuidv4, etc
import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddTask = (props) => {
    const [Title, setTitle] = useState('')
    const onAddTask = props.onAddTask

    function handleAddTask() {
        if (Title != '') {
            onAddTask(Title)
            setTitle('')
        }
    }
    return (
        <View style={styles.addTodoForm}>
            <TextInput
                style={styles.input}
                value={Title}
                onChangeText={setTitle}
            />
            <Button
                onPress={handleAddTask}
                title="Add"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    addTodoForm: {
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default AddTask;
