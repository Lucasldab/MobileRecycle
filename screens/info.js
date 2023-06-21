import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Info({}) {
  
  return (
    <View style={globalStyles.container}>
      <Text style={{fontWeight: 'bold'}}>Aqui estão algumas dicas úteis sobre reciclagem:</Text>
      <Text style={{fontWeight: 'bold'}}>Conheça as diretrizes locais de reciclagem:</Text>
      <Text>
          {`Verifique as diretrizes e regulamentos de reciclagem em sua área. Os procedimentos de reciclagem podem variar de acordo com o local, então é importante entender quais materiais podem ser reciclados e como separá-los corretamente.`}
        </Text>
      <Text style={{fontWeight: 'bold'}}>Separe corretamente os materiais:</Text>
      <Text>
          {`Separe os materiais recicláveis dos resíduos comuns. Em geral, plástico, vidro, metal e papel são recicláveis. Certifique-se de enxaguar os recipientes de comida e bebida antes de colocá-los na lixeira de reciclagem.`}
        </Text>
        <Text style={{fontWeight: 'bold'}}>Reduza, reutilize e recicle:</Text>
        <Text>
          {`A reciclagem é apenas uma parte do processo. Antes de jogar algo fora, pense se pode reduzir o consumo ou reutilizar o item. Por exemplo, utilize sacolas reutilizáveis em vez de sacolas plásticas descartáveis.`}
        </Text>
        <Text style={{fontWeight: 'bold'}}>Compre produtos reciclados:</Text>
        <Text>
          {`Dê preferência a produtos feitos com materiais reciclados. Isso incentiva a demanda por reciclagem e ajuda a fechar o ciclo de produtos reciclados.`}
        </Text>
        <Text style={{fontWeight: 'bold'}}>Recicle eletrônicos corretamente:</Text>
        <Text>
          {`Equipamentos eletrônicos devem ser descartados de forma adequada, pois podem conter materiais tóxicos. Procure pontos de coleta específicos para reciclagem de eletrônicos ou verifique se o fabricante oferece programas de reciclagem.`}
        </Text>
        <Text style={{fontWeight: 'bold'}}>Composte resíduos orgânicos:</Text>
        <Text>
          {`A compostagem é uma excelente maneira de reduzir a quantidade de resíduos enviados para aterros sanitários. Separe os resíduos orgânicos, como restos de alimentos e folhas, e crie uma pilha de compostagem em seu jardim.`}
        </Text>
        <Text style={{fontWeight: 'bold'}}>Eduque-se e eduque os outros:</Text>
        <Text>
          {`Aprenda mais sobre reciclagem e compartilhe esse conhecimento com amigos, familiares e colegas. Quanto mais pessoas estiverem informadas, maior será o impacto positivo na reciclagem.`}
        </Text>
        <Text>{`Lembre-se de que a reciclagem é um esforço coletivo e cada pequena ação conta. Ao adotar práticas de reciclagem, você estará contribuindo para a conservação dos recursos naturais e a proteção do meio ambiente.`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})