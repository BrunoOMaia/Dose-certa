import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Text } from 'react-native-paper';

  export default function CustomCard({item, deletarCard, id, selecionarItem}) {
    return (
        
        <Card>
        <Card.Content>
            

        <Text variant="titleLarge">{item.nome}</Text>
        <Text variant="bodyMedium">Quantidade: {item.quantidade}</Text>
        <Text variant="bodyMedium">Periodicidade: {item.periodicidade}</Text>
        <Text variant="bodyMedium">{item.informacoesAdicionais}</Text>
        </Card.Content>
        
        <Card.Actions>
          <Button onPress={() => deletarCard(id)}>Deletar</Button>
          <Button onPress={() => selecionarItem(item)}>Editar</Button>
        </Card.Actions>
            
      </Card>
        
    );
  }
  