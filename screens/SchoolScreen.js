import { StyleSheet, Text, View } from "react-native";

function SchoolScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>School Screen</Text>
    </View>
  );
}

export default SchoolScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#eee",
  },
});
