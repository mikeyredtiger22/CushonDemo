import { StyleSheet, Text, View, Pressable, Platform } from "react-native";

export type InvestmentCardProps = {
  data: Object;
};

export default function InvestmentCard({ data }: InvestmentCardProps) {
  console.log("data:", data);
  return (
    <Pressable style={styles.container}>
      <View style={styles.layout}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.balance}>£{data.amount}.00</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 100,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: Platform.select({
      native: 12,
    }),
  },
  layout: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#666",
    marginBottom: 6,
  },
  balance: {
    fontSize: 28,
    fontWeight: "600",
  },
});
