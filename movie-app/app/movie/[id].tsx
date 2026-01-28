import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const MovieDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-primary">MovieDetail: {id}</Text>
    </View>
  );
};

export default MovieDetail;