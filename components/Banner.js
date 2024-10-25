import { Image, View } from "react-native";
import Swiper from "react-native-swiper";

export default function Banner() {
  return (
    <View style={{ height: 200, marginTop: 60 }}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination={false}
        style={{ height: 200 }}
      >
        <Image
          source={require("../assets/1.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={require("../assets/2.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={require("../assets/3.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={require("../assets/4.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={require("../assets/5.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={require("../assets/6.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={require("../assets/7.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={require("../assets/8.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={require("../assets/9.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <Image
          source={require("../assets/10.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </Swiper>
    </View>
  );
}
