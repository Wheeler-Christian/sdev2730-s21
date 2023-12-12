import { StyleSheet, Text, View } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.text}>
        I am a student at Davis Technical College, studying Software
        Development. My goal is to become a software engineer.
      </Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
  },
  title: {
    color: "#eee",
    margin: 24,
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    color: "#eee",
    fontSize: 18,
    marginHorizontal: 24,
    textAlign: "left",
  },
});
