import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import Home from '../screens/Home'
import About from '../screens/About'
import Tips from '../screens/Tips'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#1F1F23' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="battery-charging" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Tips"
        component={Tips}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="help-circle" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="info" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
