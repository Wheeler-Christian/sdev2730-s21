import { StyleSheet, Text, View } from "react-native";

const skillsArray = [
  "HTML",
  "CSS",
  "SQL",
  "JavaScript",
  "PHP",
  "React",
  "React Native",
  "Docker",
  "C#",
  "CompTIA A+",
];

function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Skills Screen</Text>
    </View>
  );
}

export default SkillsScreen;

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
