import { ScrollView, Text, View } from 'react-native'

export default function Tips() {
  return (
    <View className="h-full flex-1 bg-gray-900">
      <ScrollView>
        <View className="mt-6 flex-1 items-center justify-center p-5">
          <Text className="text-center font-title text-lg text-gray-100">
            Para prolongar a vida útil da bateria do seu dispositivo, aqui estão
            algumas recomendações para o carregamento:
          </Text>
        </View>

        <View className="m-5 mt-5 flex-1">
          <Text className="mt-1 font-body text-base text-gray-100">
            1. Evite carregar completamente e descarregar completamente: É
            aconselhável evitar que a bateria do seu dispositivo chegue a 0% ou
            carregue até 100% com frequência. Em vez disso, mantenha a carga
            entre 20% e 80% sempre que possível.
          </Text>

          <Text className="mt-2 font-body text-base text-gray-100">
            2. Carregue em intervalos menores: É melhor carregar seu dispositivo
            com mais frequência em pequenos intervalos do que deixar a bateria
            descarregar completamente. Isso reduzirá o estresse sobre a bateria
            e ajudará a prolongar sua vida útil.
          </Text>

          <Text className="mt-2 font-body text-base text-gray-100">
            3. Evite superaquecimento: O calor excessivo pode danificar a
            bateria. Portanto, evite expor seu dispositivo a altas temperaturas
            durante o carregamento. Além disso, evite usar o dispositivo
            enquanto estiver conectado a uma fonte de energia, pois isso pode
            gerar calor adicional.
          </Text>

          <Text className="mt-2 font-body text-base text-gray-100">
            4. Desconecte após atingir 100%: Não deixe o dispositivo conectado à
            tomada após atingir 100% de carga. O carregamento contínuo pode
            aumentar o estresse na bateria e diminuir sua vida útil. Portanto,
            desconecte o dispositivo assim que estiver completamente carregado.
          </Text>

          <Text className="mt-2 font-body text-base text-gray-100">
            5. Use o carregador original: Sempre que possível, utilize o
            carregador original fornecido pelo fabricante do dispositivo. Os
            carregadores genéricos podem não ser adequados e podem causar danos
            à bateria.
          </Text>

          <Text className="mt-2 font-body text-base text-gray-100">
            6. vite carregamentos rápidos frequentes: Embora o carregamento
            rápido seja conveniente, ele gera mais calor e pode aumentar o
            desgaste da bateria ao longo do tempo. Use o carregamento rápido
            apenas quando necessário e opte pelo carregamento normal na maioria
            das vezes.
          </Text>

          <Text className="mt-2 font-body text-base text-gray-100">
            7. Mantenha a bateria em condições adequadas: Proteja seu
            dispositivo contra temperaturas extremas e evite exposição
            prolongada ao sol. Além disso, mantenha a bateria do seu dispositivo
            em um nível de carga médio se você não planeja usá-lo por um longo
            período.
          </Text>

          <Text className="mt-2 font-body text-base text-gray-100">
            Lembre-se de que as baterias têm uma vida útil limitada e,
            eventualmente, precisarão ser substituídas. No entanto, seguindo
            essas recomendações, você pode ajudar a prolongar a vida útil da
            bateria do seu dispositivo e otimizar seu desempenho.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
