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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 2,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  promoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -8,
    justifyContent: "center",
  },
  membershipContainer: {
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 8,
  },
  levelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
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
    // marginBottom: 16,
  },
  levelIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  levelIcon: {
    alignItems: "center",
    position: "relative",
  },
  activeLevelIcon: {
    opacity: 1,
  },
  checkIcon: {
    position: "absolute",
    top: -8,
    right: -8,
  },
  levelConnector: {
    flex: 1,
    height: 2,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 8,
  },
  levelText: {
    marginTop: 4,
    fontSize: 12,
    color: "#666",
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    marginTop: 8,
  },
  progressFill: {
    width: "33%",
    height: "100%",
    backgroundColor: "#4CAF50",
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
  },
  menuItem: {
    width: "33.33%",
    padding: 8,
    alignItems: "center",
  },
  menuText: {
    marginTop: 4,
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
    // padding: 8,
    marginHorizontal: 8,
    height: 280,
    borderRadius: 8,
    marginBottom: 8,
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
    marginBottom: 4,
  },
  promoExpiry: {
    fontSize: 12,
    color: "#666",
  },

  // LocationList styles
  locationContainer: {
    padding: 16,
    backgroundColor: "#fff",
  },
  locationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
  },
  locationCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
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
  },
  distanceText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#666",
  },
});
