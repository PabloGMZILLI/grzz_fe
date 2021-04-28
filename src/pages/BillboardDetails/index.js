import React, { useContext } from 'react';
import { View } from 'react-native';
import { Avatar, Text, Divider, Icon, SocialIcon } from "react-native-elements";
import AuthContext from '../../contexts/auth';
import styles from './styles';

export default function BillboardDetails({ route, navigation }) {
	const { user } = useContext(AuthContext);
	var item = route.params;
	if (!item) {
		item = user;
	}

	return (
		<>
			<View style={styles.container}>
				<View style={styles.avatar}>
					<Avatar
						rounded
						title={item.name[0] + item.lastName[0]}
						containerStyle={{ backgroundColor: "#BDBDBD", marginTop: 10 }}
						size={70}
					/>
					<View style={{ marginLeft: 20, marginTop: 0 }}>
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
				<Text h3 style={{ marginBottom: 10 }}>Rede sociais:</Text>
				<View style={styles.icons} >
					<SocialIcon
						style={styles.icon}
						title='LinkedIn'
						button
						type='linkedin'
					/>
					<SocialIcon
						style={styles.icon}
						title='WhatsApp'
						button
						type='whatsapp'
					/>
				</View>
			</View>
		</>
	);
}