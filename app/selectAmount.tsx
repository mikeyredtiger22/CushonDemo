import { StyleSheet, View, TextInput, Button } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { FundProps } from "@/components/Fund";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

export default function SelectAmount() {
  const params = useLocalSearchParams();
  const { fundTitle } = params;

  const [investAmount, setInvestAmount] = useState("");

  const onPressFund = (fundTitle: FundProps["title"]) => {
    // router.push("selectAmount", { params: { fundTitle } });
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
      <Button title={"Next"} />
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
