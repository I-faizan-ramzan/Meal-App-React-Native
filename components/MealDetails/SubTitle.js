import { View, Text, StyleSheet } from "react-native";

export default function SubTitle({ children }) {
  return (
    <>
      <View style={styles.stepsContainer}>
        <Text style={styles.subTitle}>{children}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#d3bbacff",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  stepsContainer: {
    borderBottomColor: "#d3bbacff",
    borderBottomWidth: 2,
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
  },
});
