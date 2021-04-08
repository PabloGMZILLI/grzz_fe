import React from 'react';
import { View } from 'react-native';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, Text, Divider, Icon, SocialIcon } from "react-native-elements";

export default function BillboardDetails({ route, navigation }) {

	var nav = useNavigation();
	const item = route.params;

	return (
		<>
			<View style={{ marginHorizontal: 20, marginTop: 10 }}>
				<View style={{ flexDirection: 'row' }}>
					<Avatar
						rounded
						title={item.name[0] + item.lastName[0]}
						containerStyle={{ backgroundColor: "#BDBDBD" }}
						size={100}
					/>
					<View style={{ marginLeft: 20 }}>
						<Text h1>{item.name} {item.lastName}</Text>
						<Text h4>Recursos Humanos</Text>
					</View>
				</View>
				<Divider style={{ marginVertical: 10 }} />
				<View>
					<Text h3 style={{ marginBottom: 10 }}>Desempenho:</Text>
					<View style={{ flexDirection: 'row' }}>
						<Icon
							name='trophy'
							type='font-awesome'
							color='blue'
							size={80}
						/>
						<View style={{ marginLeft: 20 }}>
							<Text h3>Platina</Text>
							<Text h4>Melhor pontuacao: {item.points}</Text>
							<Text h4>Tipo de avaliacao: RH</Text>
						</View>
					</View>
				</View>
				<Divider style={{ marginVertical: 10 }} />
				<View>
					<Text h3 style={{ marginBottom: 10 }}>Dados:</Text>
					<Text h4>Cidade: Passo Fundo</Text>
					<Text h4>Sede: Passo Fundo</Text>
					<Text h4>Funcao: RH</Text>
				</View>
				<Divider style={{ marginVertical: 10 }} />
				<View>
					<Text h3 style={{ marginBottom: 10 }}>Rede sociais:</Text>
					<SocialIcon
						title='LinkedIn'
						button
						type='linkedin'
					/>
					<SocialIcon
						title='WhatsApp'
						button
						type='whatsapp'
					/>
				</View>
			</View>
		</>
	);
}