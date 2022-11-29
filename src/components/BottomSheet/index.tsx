import React, { useCallback, useRef, useMemo, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/AntDesign";

const BottomSheetMenu = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const options: string[] = [
    "BETWEEN 2 - 4 YEARS",
    "LESS THAN 2 YEARS",
    "BETWEEN 4 - 8 YEARS",
    "8 YEARS OR MORE",
  ];

  const snapPoints = useMemo(() => ["90%"], []);

  const handleSheetChange = useCallback((index: any) => {
    console.log("handleSheetChange", index);
  }, []);

  const handleSnapPress = useCallback((index: any) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderItem = useCallback(
    ({ item }: any) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <View style={styles.textStyle}>
          <Icon
            name="infocirlceo"
            size={30}
            color="black"
            style={{ padding: 5, marginLeft: 25 }}
          />
          <Text numberOfLines={2}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book Lorem Ipsum has been
          </Text>
        </View>
        <BottomSheetFlatList
          data={options}
          keyExtractor={(i: any) => i}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  contentContainer: {
    backgroundColor: "white",
    marginTop: 10,
  },
  itemContainer: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#3399ff",
    alignItems: "center",
  },
  textStyle: {
    backgroundColor: "#FFE38D",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomSheetMenu;
