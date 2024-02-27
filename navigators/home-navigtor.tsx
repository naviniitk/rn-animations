import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, LocationDetails } from "../screens";

const Stack = createNativeStackNavigator<StackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LocationDetails" component={LocationDetails} />
    </Stack.Navigator>
  );
}
