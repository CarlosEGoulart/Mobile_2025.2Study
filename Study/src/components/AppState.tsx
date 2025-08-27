import { View, Text, TextInput } from 'react-native'
import React = require('react');

export default function AppState() {
    const [user, onchangeUser] = React.useState('');
    const [pass, onchangePass] = React.useState('')
    
    
    React.useEffect(() => {
        console.log("Render");

        return () => {
            console.log("kill");
        };
    }, []) 
        

    return (
        <View>
            <Text>AppState</Text>
            <TextInput
                placeholder="User"
                onChangeText={onchangeUser}
                value={user}
            />
            
            <TextInput
                placeholder="Senha"
                onChangeText={onchangePass}
                value={pass}
            />
        </View>
    )
}