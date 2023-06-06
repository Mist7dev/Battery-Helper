import { View, ScrollView, Text } from 'react-native';

export default function About() {
  return (
    <View className="flex-1 h-full bg-gray-900">
      <ScrollView>
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-100 text-lg">
            About
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
