import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, SafeAreaView } from "react-native";

const cartItemsInitial = [
  {
    id: "1",
    name: "Beef sauce and goat...",
    price: 574,
    quantity: 1,
    image: require("../../../assets/images/fries.png"),
  },
  {
    id: "2",
    name: "Beef sauce and goat...",
    price: 572,
    quantity: 3,
    image: require("../../../assets/images/chicken.png"),
  },
];

const Checkout = ({ navigation }: any) => {
  const [cartItems, setCartItems] = useState(cartItemsInitial);
  const [promo, setPromo] = useState("");

  const updateQuantity = (id: string, diff: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + diff) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.payment}>Payment</Text>
          <View style={{ width: 34 }} /> {/* placeholder to center title */}
        </View>

        {/* Section title */}
        <Text style={styles.sectionTitle}>My</Text>
        <Text style={styles.sectionSubtitle}>Chugo list</Text>

        {/* Cart items */}
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.cartImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{`₵ ${item.price.toFixed(2)}`}</Text>
              </View>
              <View style={styles.qtyControl}>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(item.id, 1)}>
                  <Text style={styles.qtyBtnText}>+</Text>
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(item.id, -1)}>
                  <Text style={styles.qtyBtnText}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          style={styles.cartList}
          showsVerticalScrollIndicator={false}
        />

        {/* Promo code */}
        <View style={styles.promoView}>
          <TextInput
            style={styles.promoInput}
            placeholder="Do you have any promo code ?"
            value={promo}
            onChangeText={setPromo}
            placeholderTextColor="#939393"
          />
        </View>

        {/* Summary */}
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>{`₵ ${subtotal.toFixed(2)}`}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total</Text>
          <Text style={styles.summaryValue}>{`₵ ${total.toFixed(2)}`}</Text>
        </View>

        {/* Next button */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "rgba(246, 246, 246, 1)" },
  container: {
    flex: 1,
    paddingHorizontal: 14,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    justifyContent: "space-between",
  },
  backArrow: {
    fontSize: 20,
    color: "rgba(20, 32, 50, 1)",
    fontWeight: "500",
  },
  payment: {
    fontSize: 17,
    color: "rgba(55, 73, 87, 1)",
    fontWeight: "400",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "500",
    color: "rgba(20, 32, 50, 1)",
    marginTop: 10,
  },
  sectionSubtitle: {
    fontSize: 32,
    fontWeight: "200",
    color: "rgba(20, 32, 50, 1)",
    marginBottom: 12,
  },
  cartList: {
    marginBottom: 8,
  },
  cartItem: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 13,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
    
  },
  cartImage: {
    width: 84,
    height: 84,
    borderRadius: 20,
    marginRight: 12,
    
  },
  itemDetails: { flex: 1 },
  itemName: {
    fontSize: 20,
    fontWeight: "600",
    color: "rgba(20, 32, 50, 1)",
    marginBottom: 4,
    fontFamily: 'Inter',
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(20, 32, 50, 1)",
    fontFamily: 'Inter',
  },
  qtyControl: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 47,
    justifyContent: "space-between",
  },
  qtyBtn: {
    backgroundColor: "#fff",
    width: 28,
    height: 28,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 3,
  },
  qtyBtnText: { fontSize: 18, fontWeight: "700", color: "#3A465C" },
  qtyText: { fontSize: 16, fontWeight: "500", color: "#222B45" },
  promoView: {
    alignItems: "center",
    marginVertical: 18,
  },
  promoInput: {
    width: 386,
    height: 67,
    borderRadius: 14,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    fontSize: 16,
    color: "rgba(20, 32, 50, 1)",
    fontFamily: 'Inter',
   
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
    marginHorizontal: 6,
  },
  summaryLabel: {
    fontSize: 20,
    color: "rgba(20, 32, 50, 1)",
    fontWeight: "500",
    fontFamily: 'Inter',
  },
  summaryValue: {
    fontSize: 20,
    color: "rgba(20, 32, 50, 1)",
    fontWeight: "500",
    fontFamily: 'Inter',
  },
  nextButton: {
    marginTop: 16,
    backgroundColor: "rgba(8, 21, 40, 1)",
    paddingVertical: 15,
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 12,
    height: 68,
  },
  nextButtonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1,
    fontFamily: "Inter",
    bottom: -2
  },
});
