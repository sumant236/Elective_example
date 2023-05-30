import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

function Card({ first_name, last_name, email, avatar }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <TouchableOpacity onPress={() => setOpen(!isOpen)}>
      <View style={styles.container}>
        <Image source={{ uri: avatar }} style={styles.image} />
        <Text style={styles.text}>
          {first_name} {last_name}
        </Text>
        {isOpen && (
          <View style={styles.email}>
            <Text style={styles.text}>{email}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 10,
    backgroundColor: "#cecece",
    justifyContent: "center",
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: "bold",
  },
  email: {
    height: 32,
    paddingLeft: 20,
    justifyContent: "center",
    backgroundColor: "#cecece",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Card;
