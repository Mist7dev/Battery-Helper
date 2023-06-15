import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import * as Battery from 'expo-battery'
import * as Notifications from 'expo-notifications'
import { Feather } from '@expo/vector-icons'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

export default function Home() {
  const [batteryLevel, setBatteryLevel] = useState(null)
  const [isCharging, setIsCharging] = useState(null)

  useEffect(() => {
    const fetchBatteryData = async () => {
      const level = await Battery.getBatteryLevelAsync()
      setBatteryLevel(level)

      const batteryState = await Battery.getBatteryStateAsync()
      setIsCharging(
        batteryState === Battery.BatteryState.CHARGING ||
          batteryState === Battery.BatteryState.FULL,
      )
    }

    fetchBatteryData()
  }, [])

  let displayedBatteryLevel = null
    if (batteryLevel !== null) {
      displayedBatteryLevel = Math.round(batteryLevel * 100)
    }

  const sendNotifications = async (notifications) => {
    for (const notification of notifications) {
      await Notifications.scheduleNotificationAsync(notification)
    }
  }

  const generateNotification = (title, body, trigger) => {
    return {
      content: {
        title,
        body,
      },
      trigger,
    }
  }

  const monitorBattery = async () => {
    const lowBattery = 20
    const fullBattery = 100
    const recommendedBattery = 80

    let batteryNotification = null

    switch (true) {
      case displayedBatteryLevel <= lowBattery && !isCharging:
        batteryNotification = generateNotification(
          'Bateria baixa!',
          'Conecte o celular ao carregador.',
          null,
        )
        await sendNotifications([batteryNotification])
        console.log('bateria baixa')
        break
      case displayedBatteryLevel === fullBattery && isCharging:
        batteryNotification = generateNotification(
          'Bateria cheia!',
          'Retire o celular do carregador.',
          null,
        )
        await sendNotifications([batteryNotification])
        console.log('bateria cheia')
        break
      case displayedBatteryLevel > recommendedBattery && displayedBatteryLevel < fullBattery && isCharging:
        batteryNotification = generateNotification(
          'Nível recomendado atingido!',
          'Retire o celular do carregador para preservar a vida útil da bateria.',
          null,
        )
        await sendNotifications([batteryNotification])
        console.log('bateria recomendada')
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (batteryLevel !== null && isCharging !== null) {
      monitorBattery(displayedBatteryLevel)
    }
  }, [batteryLevel, isCharging])

  return (
    <View className="flex-1 bg-gray-800">
      <View className="flex-1 flex-row items-center justify-between px-12">
        {displayedBatteryLevel <= 20 ||
        (isCharging && displayedBatteryLevel === 100) ? (
          <>
            <Feather name="battery-charging" color="#b91c1c" size={64} />
            <Text className="font-title text-2xl text-red-700">
              {`${displayedBatteryLevel}%`}
            </Text>
          </>
        ) : isCharging && displayedBatteryLevel < 80 ? (
          <>
            <Feather name="battery-charging" color="#fcd34d" size={64} />
            <Text className="font-title text-2xl text-amber-300">
              {`${displayedBatteryLevel}%`}
            </Text>
          </>
        ) : (
          <>
            <Feather name="battery-charging" color="#04d361" size={64} />
            <Text className="font-title text-2xl text-green-500">
              {`${displayedBatteryLevel}%`}
            </Text>
          </>
        )}
      </View>

      <View className="flex-1 items-center justify-start space-y-8 px-12">
        {isCharging ? (
          displayedBatteryLevel === 100 ? (
            <>
              <Feather name="alert-triangle" size={32} color="#b91c1c" />
              <Text className="text-center font-alt text-lg text-red-700">
                Carga máxima atingida, retire o celular do carregador!
              </Text>
            </>
          ) : displayedBatteryLevel >= 80 ? (
            <>
              <Feather name="alert-triangle" size={32} color="#04d361" />
              <Text className="text-center font-alt text-lg text-green-500">
                Carga recomendada atingida, retire seu celular do carregador!
              </Text>
            </>
          ) : (
            <>
              <Feather name="battery" size={32} color="#fcd34d" />
              <Text className="text-center font-alt text-lg text-amber-300">
                Carregando...
              </Text>
            </>
          )
        ) : displayedBatteryLevel <= 20 ? (
          <>
            <Feather name="alert-triangle" size={32} color="#b91c1c" />
            <Text className="text-center font-alt text-lg text-red-700">
              Carga baixa, conecte seu celular no carregador!
            </Text>
          </>
        ) : (
          <>
            <Feather name="smile" size={32} color="#bebebf" />
            <Text className="font-alt text-lg text-gray-100">
              Nenhuma ação recomendada
            </Text>
          </>
        )}
      </View>
    </View>
  )
}
