import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import Tracker from "./src/components/Tracker";
import ActionSheet from "./src/components/ActionSheet";
import StyledText from "react-native-styled-text";
import BottomSheetMenu from "./src/components/BottomSheet";

export default function App() {
  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <Tracker />
        <StyledText style={styles.body}>
          How long has the company been in business?
        </StyledText>
        <BottomSheetMenu />
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    marginTop: 100,
    textAlign: "center",
  },
  body: {
    alignItems: "center",
    padding: 20,
    fontSize: 50,
    marginTop: 100,
    justifyContent: "center",
  },
  headline: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: 200,
    backgroundColor: "yellow",
  },
});
