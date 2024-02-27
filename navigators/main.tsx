import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { ItemDetails } from "../screens";
import ProgressTransitionExample from "../screens/shared-transition";
import HomeNavigator from "./home-navigtor";

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerTransparent: true }}
      initialRouteName="HomeNavigator"
      backBehavior={"initialRoute"}
    >
      <Drawer.Screen
        name="HomeNavigator"
        options={{
          title: "HomeNavigator",
          headerTitle: "",
          headerShown: false,
        }}
        component={HomeNavigator}
      />
      <Drawer.Screen
        name="ItemDetails"
        options={{
          title: "Item Details",
          headerTransparent: true,
        }}
        component={ItemDetails}
      />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="ProgressTransitionExample"
        component={ProgressTransitionExample}
      />
    </Drawer.Navigator>
  );
}
