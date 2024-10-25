import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "../styles/GlobalStyles";
import GMPoint from "./GMPoint";

export function MembershipLevel() {
  return (
    <View style={GlobalStyles.membershipContainer}>
      <View
        style={{
          elevation: 4,
          padding: 12,
          marginBottom: 12,
          backgroundColor: "white",
          borderRadius: 4,
        }}
      >
        <View style={GlobalStyles.levelHeader}>
          <Text style={GlobalStyles.levelTitle}>Your Level</Text>
          <TouchableOpacity>
            <Text style={GlobalStyles.seeAll}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.levelProgress}>
          <View style={GlobalStyles.levelIcons}>
            <View
              style={[GlobalStyles.levelIcon, GlobalStyles.activeLevelIcon]}
            >
              <Icon name="crown" size={24} color="#888" />
              <Text style={GlobalStyles.levelText}>Silver</Text>
              <Icon
                name="check-circle"
                size={16}
                color="#4CAF50"
                style={GlobalStyles.checkIcon}
              />
            </View>
            <View style={GlobalStyles.levelConnector} />
            <View style={GlobalStyles.levelIcon}>
              <Icon name="crown" size={24} color="#FFD700" />
              <Text style={GlobalStyles.levelText}>Gold</Text>
            </View>
            <View style={GlobalStyles.levelConnector} />
            <View style={GlobalStyles.levelIcon}>
              <Icon name="crown" size={24} color="#E5E4E2" />
              <Text style={GlobalStyles.levelText}>Platinum</Text>
            </View>
          </View>
          <View style={GlobalStyles.progressBar}>
            <View style={GlobalStyles.progressFill} />
          </View>
        </View>

        <Text style={GlobalStyles.targetText}>
          Spend{" "}
          <Text style={{ fontWeight: "900", color: "black" }}>3.500.001</Text>{" "}
          by{" "}
          <Text style={{ fontWeight: "900", color: "black" }}>23 Oct 2025</Text>{" "}
          to reach{" "}
          <Text style={{ fontWeight: "900", color: "black" }}>Gold</Text>
        </Text>
      </View>

      {/* GMPoint Section */}
      <GMPoint />

      <View style={GlobalStyles.menuGrid}>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="basket" size={24} color="#4CAF50" />
          <Text style={GlobalStyles.menuText}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="ticket-percent" size={24} color="#FF5722" />
          <Text style={GlobalStyles.menuText}>Redeem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="ticket" size={24} color="#2196F3" />
          <Text style={GlobalStyles.menuText}>My Vouchers</Text>
          <View style={GlobalStyles.badge}>
            <Text style={GlobalStyles.badgeText}>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="star" size={24} color="#FFC107" />
          <Text style={GlobalStyles.menuText}>Privilege</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="history" size={24} color="#9E9E9E" />
          <Text style={GlobalStyles.menuText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="message" size={24} color="#8BC34A" />
          <Text style={GlobalStyles.menuText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Image
          source={require("../assets/1.png")}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 12,
            objectFit: "cover",
          }}
        />
      </View>
    </View>
  );
}
