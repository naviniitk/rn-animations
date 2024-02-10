import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home, Moti } from "../screens";

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        options={{
          title: "Home",
          headerTransparent: true,
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Moti"
        options={{
          title: "Moti",
          headerTransparent: true,
        }}
        component={Moti}
      />
    </Drawer.Navigator>
  );
}
