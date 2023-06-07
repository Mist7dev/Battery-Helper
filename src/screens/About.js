import { View, ScrollView, Text } from 'react-native'

export default function About() {
  return (
    <View className="h-full flex-1 bg-gray-900">
      <ScrollView>
        <View className="mt-6 flex-1 items-center justify-center p-5">
          <Text className="text-center font-title text-lg text-gray-100">
            Questão energética no Brasil
          </Text>
        </View>

        <View className="m-5 mt-5 flex-1">
          <Text className="mt-1 font-body text-base text-gray-100">
            O consumo de energia elétrica no Brasil é um assunto de grande
            importância, pois além de afetar nossas contas de luz, também possui
            um impacto significativo no meio ambiente. Nossas necessidades
            energéticas continuam a crescer, mas é essencial encontrarmos
            maneiras de reduzir nosso consumo e adotar hábitos mais
            sustentáveis.
          </Text>

          <Text className="mt-1 font-body text-base text-gray-100">
            Pequenas ações podem fazer uma grande diferença quando se trata de
            economizar energia elétrica. Um exemplo simples é desconectar o
            celular da tomada assim que estiver totalmente carregado. Embora
            possa parecer insignificante, manter o celular conectado
            continuamente após a carga completa desperdiça energia
            desnecessariamente.
          </Text>

          <Text className="mt-1 font-body text-base text-gray-100">
            Essa prática também se aplica a outros aparelhos eletrônicos, como
            laptops, tablets e até mesmo eletrodomésticos. Ao desligar os
            dispositivos quando não estão em uso ou desconectá-los da tomada
            quando totalmente carregados, estamos evitando o chamado "consumo em
            standby", que representa uma parcela significativa do consumo total
            de energia.
          </Text>

          <Text className="mt-1 font-body text-base text-gray-100">
            Além disso, devemos estar cientes do uso consciente da energia
            elétrica em nossas atividades diárias. Desligar as luzes ao sair de
            um cômodo, optar por lâmpadas de LED mais eficientes, aproveitar a
            luz natural sempre que possível e utilizar eletrodomésticos de forma
            consciente são medidas que contribuem para a redução do consumo.
          </Text>

          <Text className="mt-1 font-body text-base text-gray-100">
            Essas pequenas ações podem parecer simples, mas quando adotadas por
            um grande número de pessoas, têm o potencial de gerar um impacto
            significativo na economia de energia elétrica. Além disso, ao
            reduzir o consumo, estamos contribuindo para a preservação dos
            recursos naturais e para a mitigação das emissões de gases de efeito
            estufa, ajudando a combater as mudanças climáticas.
          </Text>

          <Text className="mt-1 font-body text-base text-gray-100">
            Portanto, ao tirar o celular da tomada quando está carregado,
            estamos não apenas economizando energia e dinheiro, mas também
            fazendo a nossa parte para um futuro mais sustentável. Lembre-se de
            que pequenas ações individuais podem se somar e fazer uma grande
            diferença coletiva. Vamos todos trabalhar juntos para um consumo
            consciente de energia elétrica.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
