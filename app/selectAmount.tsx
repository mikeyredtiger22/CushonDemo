import { StyleSheet, View, TextInput, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { router } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { addUserAction } from "../redux/userActionsSlice";

export default function SelectAmount() {
  const params = useLocalSearchParams();
  const dispatch = useDispatch();

  const { fundTitle } = params;

  const [investAmount, setInvestAmount] = useState("");

  const onNextPressed = () => {
    dispatch(
      addUserAction({
        actionType: "INVEST_ISA",
        name: fundTitle,
        amount: investAmount,
      })
    );
    
    // Navigate back to dashboard home screen
    router.navigate({ pathname: "/" });
  };

  return (
    <View style={styles.container}>
      <ThemedText type="title">{fundTitle}</ThemedText>
      <ThemedText style={styles.subtitle}>
        Please enter how much you'd like to invest in this fund.
      </ThemedText>
      <ThemedText style={styles.subtitle}>Please enter amount:</ThemedText>
      <TextInput
        value={investAmount}
        onChangeText={setInvestAmount}
        placeholder="0.00"
        keyboardType="numeric"
      />
      <View style={styles.spacer} />
      {investAmount && (
        <ThemedText style={styles.subtitle}>
          Press next to invest £{investAmount} into {fundTitle}.
        </ThemedText>
      )}
      <Button title={"Next"} onPress={onNextPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  subtitle: {
    marginVertical: 20,
    // paddingBottom: 20,
  },
  spacer: {
    flex: 1,
  },
});
