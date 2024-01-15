import { useState, useEffect } from "react";
import { StyleSheet, Button, Text, View } from 'react-native';
import { v4 as uuid } from 'uuid';
import AddTask from "./AddTask";

const ToDoList = (props) => {
    const [toDos, setToDos] = useState([])

    useEffect(() => {
        const init = []
        props.items.forEach(items => {
            init.push({ id: uuid(), name: items })
        });
        setToDos(init)
    }, [])

    function addToDo(newTitle) {
        setToDos([...toDos, { id: uuid(), name: newTitle }])
    }

    function removeToDo(id) {
        setToDos(toDos.filter(item => item.id != id))
    }

    return (
        <View style={styles.todoListContainer}>

            {toDos.map((item) =>
                <View key={item.id} style={styles.todoItem}>
                    <Text>{item.name}</Text>
                    <Button
                        title="Delete"
                        onPress={() => removeToDo(item.id)}
                    />
                </View>
            )
            }
            <AddTask onAddTask={addToDo}/>
        </View>
    );
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});


export default ToDoList;