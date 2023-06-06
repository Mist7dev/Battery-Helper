import { ScrollView, StatusBar, Text, View } from 'react-native';

export default function Tips() {
  return (
    <View className="flex-1 h-full bg-gray-900">
      <ScrollView>
      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-100 text-lg">
          Tips
        </Text>
      </View>
      </ScrollView>
    </View>
  )
}
