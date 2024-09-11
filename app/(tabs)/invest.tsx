import { StyleSheet, View, ScrollView } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import Fund, { FundProps } from "@/components/Fund";
import { router } from "expo-router";

const funds = [
  "Vanguard S&P 500 ETF",
  "Invesco EQQQ NASDAQ-100",
  "L&G Global Technology",
];

export default function TabTwoScreen() {
  const onPressFund = (fundTitle: FundProps["title"]) => {
    router.push({ pathname: "/selectAmount", params: { fundTitle } });
  };

  return (
    <View style={styles.container}>
      <ThemedText type="title">Cushon ISAs</ThemedText>
      <ThemedText style={styles.subtitle}>
        Select a fund below to invest in.
      </ThemedText>
      <ScrollView contentContainerStyle={{ gap: 20 }}>
        {funds.map((fund) => (
          <Fund title={fund} onPress={onPressFund} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#000",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  subtitle: {
    marginVertical: 20,
    paddingBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#aaa",
  },
});
