import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";

const LINKS = [
  { url: "https://github.com/Raphaelj1/hng-mobile-stage0", text: "GitHub Repo" },
  { url: "https://telex.im", text: "Telex" },
  { url: "https://delve.fun/", text: "Delve" },
  { url: "https://hng.tech/hire/react-native-developers", text: "Hire React Native Devs" },
];

export default function App() {
  const openURL = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HNG Links - Stage 0</Text>
      <View style={styles.buttonContainer}>
        {LINKS.map(({ url, text }) => (
          <TouchableOpacity
            key={url}
            style={styles.button}
            onPress={() => openURL(url)}
          >
            <Text style={styles.buttonText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    backgroundColor: "#101010",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#eeeeee",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    margin: 3,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
