import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.innerText}>
          Open up App.js to start working on your app!
        </Text>
      </View>

      <View style={styles.bottom_container}>
        <Text style={styles.innerText}>
          Open up App.js to start working on your app$
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row"
  },
  upper_container: {
    flex: 1,
    backgroundColor: "red",
  },
  bottom_container: {
    flex: 1,
    backgroundColor: "blue",
  },
});
