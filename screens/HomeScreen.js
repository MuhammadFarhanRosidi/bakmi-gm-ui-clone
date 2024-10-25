import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { GlobalStyles } from "../styles/GlobalStyles";
import { PromoCard } from "../components/PromoCard";
import { LocationList } from "../components/LocationList";
import { MembershipLevel } from "../components/MembershipLevel";
import Banner from "../components/Banner";
import ScrollViewHorizontal from "../components/ScrollViewHorizontal";

export default function HomeScreen() {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Header />
      <ScrollView style={GlobalStyles.scrollView}>
        {/* Swiper */}
        <Banner />
        {/* Membership Section */}
        <MembershipLevel />

        {/* Scroll View Section Horizontal */}
        <ScrollViewHorizontal />
        {/* Privilege Section */}
        <View style={GlobalStyles.section}>
          <Text style={GlobalStyles.sectionTitle}>Privilege</Text>
          <Text style={GlobalStyles.sectionSubtitle}>
            Keep discovering our promo and news
          </Text>
          <View style={GlobalStyles.promoGrid}>
            <PromoCard
              title="Sign Up Reward 💰"
              image={require("../assets/promo.png")}
              expiry="Exp. 31 Dec 2024"
            />
            <PromoCard
              title="Sign Up Reward 💰"
              image={require("../assets/promo.png")}
              expiry="Exp. 31 Dec 2024"
            />
            <PromoCard
              title="Sign Up Reward 💰"
              image={require("../assets/promo.png")}
              expiry="Exp. 31 Dec 2024"
            />
            <PromoCard
              title="Sign Up Reward 💰"
              image={require("../assets/promo.png")}
              expiry="Exp. 31 Dec 2024"
            />
            {/* Add other promo cards */}
          </View>
        </View>

        {/* Location Section */}
        <LocationList />
      </ScrollView>
    </SafeAreaView>
  );
}
