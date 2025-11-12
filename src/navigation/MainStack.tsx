import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your main/home app screens
import Home from "../screens/main/Home.tsx";
import Checkout from "../screens/main/Checkout.tsx";
import Orders from "../screens/main/Orders.tsx";
import Notifications from "../screens/main/Notifications.tsx";
// ... import other main app screens as needed

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Notifications" component={Notifications} />
      {/* Add any other screens in your main user app */}
    </Stack.Navigator>
  );
};

export default MainStack;
