if (process.env.NODE_ENV === "development") {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import MainNavigator from "./navigators/main";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
