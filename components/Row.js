import { View, Text } from "react-native";
import react, { useState } from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-paper";

export default function Row({ item, selectedId, select }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Pressable onPress={() => select(item.id)}>
      <View style={styles.row}>
        <Text style={isSelected ? styles.textSelected : null}>{item.name}</Text>
        <View>
          <Button
            mode="contained"
            onPress={() => {
              setIsSelected(!isSelected);
            }} style={{backgroundColor: isSelected ? "green" : "red"}}
            title="Toggle Line-Through"
          >
            {isSelected ?  "Done" : "Not Done"}
          </Button>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    fontSize: 24,
    padding: 4,
    margin: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  textSelected: {
    textDecorationLine: "line-through",
  },
});
