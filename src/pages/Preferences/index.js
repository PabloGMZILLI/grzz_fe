import React, {useContext} from 'react';
import { Text, TouchableOpacity ,View } from 'react-native'
import { Feather } from '@expo/vector-icons';

import AuthContext from '../../contexts/auth';
// Pagina de preferencias da usuaria, aqui pode configurar algumas coisas:
// Tempo para notificar que alguma coisa
// Notificar aniversario da cliente?

 const Preferences = () => {
    const { user } = useContext(AuthContext);
     console.log(user);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
    );
}

export default Preferences;