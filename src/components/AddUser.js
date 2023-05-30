import { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";

function AddUser({onSubmit}){
    const [text, setText] = useState("")

    const handleSubmit = () => {
        onSubmit && onSubmit(text);
        setText("")
    }
    return (
        <View>
            <Text>Add User</Text>
            <TextInput placeholder="Type to add user" onChangeText={setText} value={text}></TextInput>
            <Button onPress={handleSubmit} title="Add User" color="magenta" accessibilityLabel="access"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default AddUser;