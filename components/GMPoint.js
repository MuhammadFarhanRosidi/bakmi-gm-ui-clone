import { Text, TouchableOpacity, View } from "react-native";

export default function GMPoint() {
  return (
    <TouchableOpacity
      style={{
        elevation: 2,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        height: "53",
        backgroundColor: "white",
        borderRadius: 4,
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold" }}>Bakmi GM Point</Text>
        <Text style={{ color: "#666" }}>
          40 will expired on 22 Feb 2024.{" "}
          <Text style={{ textDecorationLine: "underline", color: "blue" }}>
            See Details
          </Text>
        </Text>
      </View>
      <Text style={{ fontWeight: "bold" }}>40</Text>
    </TouchableOpacity>
  );
}
