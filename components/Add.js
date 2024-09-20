import { View } from "react-native";
import { TextInput,StyleSheet } from "react-native";
import { Button } from "react-native";
import { useState } from "react";


export default function Add({add}) {
    const [name, setName] = useState(""); 

    const svae = () => {
        add(name)
        setName("")
    }

    return (
        <View style={styles.container}>
            <TextInput style = {styles.input} value={name} onChangeText={name => setName(name)} placeholder="Item name..."/>
        <Button title = "save" onPress={() => svae(name)}/>
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
})