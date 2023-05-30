import { StyleSheet, Text, View } from "react-native";

function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    padding: 20,
    backgroundColor: "teal",
    marginTop: 40
  },
  text: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default Header;
