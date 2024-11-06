import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "##fff",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingRight: 16,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  section: {
    padding: 16,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 2,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 28,
  },
  promoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -16,
    justifyContent: "center",
    gap: 16,
  },
  membershipContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginTop: 8,
  },
  levelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 16,
    // marginTop: 20,
    // backgroundColor: "red",
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#FF6B00",
    fontSize: 14,
    fontWeight: "bold",
  },
  levelProgress: {
    marginTop: 32,
    // marginBottom: 16,
    // alignItems: "center",
  },
  levelIcons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 40,
    // backgroundColor: "red",
  },
  levelIcon: {
    alignItems: "center",
    position: "relative",
    // backgroundColor: "red",
  },
  activeLevelIcon: {
    opacity: 1,
  },
  checkIcon: {
    position: "absolute",
    top: 14,
    right: -8,
  },
  levelConnector: {
    // flex: 1,
    height: 2,
    width: 30,
    backgroundColor: "black",
    marginHorizontal: 24,
    bottom: 10,
  },
  levelText: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#f1f1f1",
    borderRadius: 2,
    marginTop: 8,
  },
  progressFill: {
    width: "33%",
    height: "100%",
    // backgroundColor: "#4CAF50",
    borderRadius: 2,
  },
  targetText: {
    fontSize: 14,
    color: "#666",
    marginTop: 24,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -8,
    marginTop: 16,
    height: 230,
    // backgroundColor: "red",
    // flexDirection: "column",
  },
  menuItem: {
    width: "33.33%",
    padding: 24,
    alignItems: "center",
  },
  menuText: {
    marginTop: 10,
    fontSize: 12,
    color: "#333",
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 16,
    backgroundColor: "#FF6B00",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  // PromoCard styles
  promoCard: {
    width: "45%",
    // flex: 1,
    // padding: 8,
    // marginHorizontal: 10,
    height: 295,
    borderRadius: 8,
    // marginBottom: 26,
    backgroundColor: "white",
    elevation: 4,
  },
  promoImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
  },
  promoContent: {
    padding: 14,
  },
  promoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 14,
    marginTop: 2,
  },
  promoExpiry: {
    fontSize: 12,
    color: "#666",
  },

  // LocationList styles
  locationContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  locationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: "900",
  },
  locationSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  locationCard: {
    // padding: 16,
    borderBottomWidth: 1,
    paddingBottom: 4,
    borderBottomColor: "#E0E0E0",
    marginBottom: 10,
  },
  lastLocationCard: {
    borderBottomWidth: 0,
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  distanceText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#666",
  },
});
