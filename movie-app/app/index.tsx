import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-primary">Welcome to Movie App!</Text>
      <Link href="/onboarding" className="text-primary">
        Go to Onboarding
      </Link>
      <Link href={{ pathname: "/movie/[id]", params: { id: "avengers" } }} className="text-primary">
        Go to Movie 1
      </Link>
    </View>
  );
}
