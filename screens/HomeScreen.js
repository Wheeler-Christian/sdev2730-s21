import { StyleSheet, Text, View } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Christian Wheeler</Text>
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
  h1: {
    color: "#eee",
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "noto-sans",
  },
  text: {
    color: "#eee",
    fontSize: 16,
    marginHorizontal: 28,
    textAlign: "left",
    fontFamily: "ubuntu-regular",
  },
});
