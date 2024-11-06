import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const rewardsData = [
  {
    id: 1,
    name: "Es Teh Manis",
    points: 40,
    image: require("../assets/esteh.png"),
  },
  {
    id: 2,
    name: "Kopi Susu",
    points: 50,
    image: require("../assets/kopisusu.png"),
  },
  {
    id: 3,
    name: "Boba Milk Tea",
    points: 60,
    image: require("../assets/boba.png"),
  },
  {
    id: 4,
    name: "Es Teh Manis",
    points: 40,
    image: require("../assets/esteh.png"),
  },
  {
    id: 5,
    name: "Kopi Susu",
    points: 50,
    image: require("../assets/kopisusu.png"),
  },
  {
    id: 6,
    name: "Boba Milk Tea",
    points: 60,
    image: require("../assets/boba.png"),
  },
  {
    id: 7,
    name: "Es Teh Manis",
    points: 40,
    image: require("../assets/esteh.png"),
  },
  {
    id: 8,
    name: "Kopi Susu",
    points: 50,
    image: require("../assets/kopisusu.png"),
  },
  {
    id: 9,
    name: "Boba Milk Tea",
    points: 60,
    image: require("../assets/boba.png"),
  },
];

export default function ScrollViewHorizontal() {
  return (
    <View style={{ backgroundColor: "#fff", paddingHorizontal: 18 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontWeight: "900", fontSize: 18 }}>
            Redeem Your Rewards
          </Text>
          <Text style={{ fontSize: 12 }}>Earn more to get your rewards</Text>
        </View>
        <Text style={{ fontWeight: "900", color: "#fa8830" }}>SEE ALL</Text>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ backgroundColor: "#fff", marginTop: 20 }}
      >
        {rewardsData.map((reward) => (
          <TouchableOpacity key={reward.id} style={{ padding: 8 }}>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 6,
                elevation: 2,
                width: 185,
                height: 185,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image
                style={{ width: 150, height: 150 }}
                source={reward.image}
              />
            </View>
            <Text style={{ fontWeight: "bold", marginTop: 12 }}>
              {reward.name}
            </Text>
            <Text style={{ fontWeight: "bold", color: "#fa8830" }}>
              {reward.points} Pts
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
