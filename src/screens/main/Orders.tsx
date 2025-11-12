import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView } from "react-native";

// Dummy order data
const orders = [
  {
    id: "1",
    name: "Beef sauce and goat...",
    price: "₵ 574.00",
    image: require("../../../assets/images/fries.png"),
    orderNo: 1,
  },
  {
    id: "2",
    name: "Beef sauce and goat...",
    price: "₵ 572.00",
    image: require("../../../assets/images/chicken.png"),
    orderNo: 2,
  },
];

const TAB_ICONS = [
  { key: "home", label: "Home", emoji: "🏡" },
  { key: "notification", label: "Notification", emoji: "🔔" },
  { key: "checkout", label: "Checkout", emoji: "🛒" },
  { key: "orders", label: "Orders", emoji: "📦" },
  { key: "menu", label: "Menu", emoji: "☰" },
];

const ChugoOrdersScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <TouchableOpacity>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chugo orders</Text>
        </View>

        <Text style={styles.sectionTitle}>My</Text>
        <Text style={styles.sectionSubtitle}>Chugo orders</Text>

        {/* Orders List */}
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.orderCard}>
              <Image source={item.image} style={styles.orderImage} />
              <View style={styles.orderDetails}>
                <Text style={styles.orderName}>{item.name}</Text>
                <Text style={styles.orderPrice}>{item.price}</Text>
              </View>
              <Text style={styles.orderNo}>#{item.orderNo}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />

        {/* Bottom Tab Bar */}
        <View style={styles.bottomNav}>
          {TAB_ICONS.map(tab => (
            <TouchableOpacity key={tab.key} style={styles.tabItem}>
              <Text style={styles.tabIcon}>{tab.emoji}</Text>
              <Text style={styles.tabLabel}>{tab.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChugoOrdersScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F8F9FA" },
  container: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 6,
    backgroundColor: "#F8F9FA",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
    marginTop: 8,
  },
  backArrow: {
    fontSize: 34,
    color: "#101C2A",
    marginRight: 12,
    fontWeight: "100",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    color: "#949CA6",
    fontWeight: "400",
    marginLeft: -34, // to visually center title text
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "500",
    color: "#222B45",
    marginTop: 0,
    marginBottom: 2,
  },
  sectionSubtitle: {
    fontSize: 17,
    fontWeight: "400",
    color: "#6A758D",
    marginBottom: 10,
  },
  orderCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  orderImage: {
    width: 46,
    height: 46,
    borderRadius: 10,
    marginRight: 12,
    backgroundColor: "#ECECEC",
  },
  orderDetails: {
    flex: 1,
  },
  orderName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#222B45",
    marginBottom: 3,
  },
  orderPrice: {
    fontSize: 13,
    fontWeight: "400",
    color: "#6A758D",
  },
  orderNo: {
    fontSize: 14,
    fontWeight: "600",
    color: "#797A7C",
    marginLeft: 6,
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 68,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#F2F3F7",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 0,
    alignSelf: "center"
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    fontSize: 22,
    color: "#949CA6",
    marginBottom: 3,
  },
  tabLabel: {
    fontSize: 11,
    color: "#949CA6",
  },
});
