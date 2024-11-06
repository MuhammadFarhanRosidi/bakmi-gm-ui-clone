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
          elevation: 2,
          paddingHorizontal: 12,
          marginBottom: 26,
          backgroundColor: "white",
          borderRadius: 4,
          height: 215,
          justifyContent: "space-between",
          // backgroundColor: "red",
          paddingVertical: 20,
        }}
      >
        <View style={GlobalStyles.levelHeader}>
          <Text style={GlobalStyles.levelTitle}>Your Level</Text>
          <TouchableOpacity>
            <Text style={GlobalStyles.seeAll}>LEARN MORE</Text>
          </TouchableOpacity>
        </View>

        <View style={GlobalStyles.levelProgress}>
          <View style={GlobalStyles.levelIcons}>
            <View
              style={[GlobalStyles.levelIcon, GlobalStyles.activeLevelIcon]}
            >
              <View
                style={{
                  backgroundColor: "#b6b6b6",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="crown" size={26} color="#888" />
              </View>
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
              <View
                style={{
                  backgroundColor: "#eee5aa",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="crown" size={26} color="#FFD700" />
              </View>
              <Text style={GlobalStyles.levelText}>Gold</Text>
            </View>
            <View style={GlobalStyles.levelConnector} />
            <View style={GlobalStyles.levelIcon}>
              <View
                style={{
                  backgroundColor: "#b6b6b6",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="lock" size={26} color="#E5E4E2" />
              </View>
              <Text style={GlobalStyles.levelText}>Platinum</Text>
            </View>
          </View>
          <View style={GlobalStyles.progressBar}>
            <View style={GlobalStyles.progressFill} />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: "white",
                position: "absolute",
                borderRadius: 20,
                borderColor: "orange",
                borderWidth: 5,
                top: -7,
                left: 380,
              }}
            ></View>
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
          <Icon name="basket" size={44} color="#4CAF50" />
          <Text style={GlobalStyles.menuText}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="ticket-percent" size={44} color="#FF5722" />
          <Text style={GlobalStyles.menuText}>Redeem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="ticket" size={44} color="#2196F3" />
          <Text style={GlobalStyles.menuText}>My Vouchers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="star" size={44} color="#FFC107" />
          <Text style={GlobalStyles.menuText}>Privilege</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="history" size={44} color="#9E9E9E" />
          <Text style={GlobalStyles.menuText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={GlobalStyles.menuItem}>
          <Icon name="message" size={44} color="#8BC34A" />
          <Text style={GlobalStyles.menuText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, marginBottom: 40 }}>
        <Image
          source={require("../assets/1.png")}
          style={{
            width: "100%",
            height: 208,
            borderRadius: 8,
            objectFit: "cover",
          }}
        />
      </View>
    </View>
  );
}
