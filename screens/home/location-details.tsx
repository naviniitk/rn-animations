import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { Dimensions, Image, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const LOCATIONS = [
  {
    key: "1",
    location: "Santoris, Greece",
    numberOfDays: 9,
    image:
      "https://images.unsplash.com/photo-1664688023019-d4ab2703a7cb?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#0c212d",
  },
  {
    key: "2",
    location: "Costa De Papagayo, Spain",
    numberOfDays: 10,
    image:
      "https://images.unsplash.com/photo-1595932233821-6c38c11bfcd6?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#f8eace",
  },
  {
    key: "3",
    location: "Mexico City, Mexico",
    numberOfDays: 12,
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwZGVzdGlvbmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
    color: "#e4e5ea",
  },
  {
    key: "4",
    location: "Paris, France",
    numberOfDays: 11,
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
    color: "#1caa8a",
  },
  {
    key: "5",
    location: "Miami, USA",
    numberOfDays: 15,
    image:
      "https://images.unsplash.com/photo-1611839699701-5cd5f18c25a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvbGlkYXklMjBsb2NhdGlvbnN8ZW58MHx8MHx8fDA%3D",
    color: "#f37fce",
  },
  {
    key: "6",
    location: "Puerto Rico, USA",
    numberOfDays: 7,
    image:
      "https://images.unsplash.com/photo-1625642471723-12744e6e4211?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVlcnRvJTIwcmljb3xlbnwwfHwwfHx8MA%3D%3D",
    color: "#ba9ace",
  },
];

export default function LocationDetails({
  route,
}: StackScreenProps<StackParamList, "LocationDetails">) {
  const { location } = route.params as { location: (typeof LOCATIONS)[0] };

  return (
    <View style={{ flex: 1 }}>
      <Animated.Image
        sharedTransitionTag={`${location.key}-image`}
        source={{ uri: location.image }}
        style={{ width, height: width }}
        resizeMode="cover"
      />
      <View style={{ padding: 20 }}>
        <Animated.Text
          sharedTransitionTag={`${location.key}-text`}
          style={{ fontWeight: "800", fontSize: 24 }}
        >
          {location.location}
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(200)}>
          Santorini is one of the Cyclades islands in the Aegean Sea. It was
          devastated by a volcanic eruption in the 16th century BC, forever
          shaping its rugged landscape. The whitewashed, cubiform houses of its
          2 principal towns, Fira and Oia, cling to cliffs above an underwater
          caldera (crater). They overlook the sea, small islands to the west and
          beaches made up of black, red and white lava pebbles.
        </Animated.Text>
      </View>
    </View>
  );
}
