import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { login } from '../redux/action/authAction';
import { SubmitButton } from '../components/SubmitButton';
import { store } from '../redux/store';

const Login: React.FC = (props: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username == '') return Alert.alert('Please enter name');
        else if (password == '') return Alert.alert('Please enter password');
        else store.dispatch(login(username, password));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <TextInput
                testID='username'
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                testID='password'
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <SubmitButton testID='login-button' title='Login' onClick={handleLogin} />
            <Text style={{ marginTop: 16 }}>{'OR'}</Text>
            <SubmitButton testID='signup-button' title='Signup' onClick={() => props?.navigation.navigate('Signup')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default Login