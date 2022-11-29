import * as React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { View, Button, StyleSheet, Image } from "react-native";

const ActionSheet = () => {
  React.useEffect(() => {
    openSheet();
  });

  const { showActionSheetWithOptions } = useActionSheet();

  const [selectionTextIndex, setSelectionTextIndex] = React.useState(0);

  const updateSelectionText = (selectedIndex: number) => {
    setSelectionTextIndex(selectedIndex);
  };

  const openSheet = () => {
    const options: string[] = [
      "BETWEEN 2 - 4 YEARS",
      "LESS THAN 2 YEARS",
      "BETWEEN 4 - 8 YEARS",
      "8 YEARS OR MORE",
    ];

    showActionSheetWithOptions(
      {
        options,
        showSeparators: true,
        containerStyle: styles.container,
        textStyle: styles.text,
        messageTextStyle: styles.message,
        titleTextStyle: styles.title,
        tintColor: "blue",
        message:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      () => {}
    );
  };
  return openSheet;
};

export default ActionSheet;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "white",
  },
  message: {
    backgroundColor: "yellow",
    alignContent: "center",
    color: "black",
  },
  title: {
    backgroundColor: "yellow",
  },
  text: {
    paddingLeft: "40%",
    color: "white",
  },
});
