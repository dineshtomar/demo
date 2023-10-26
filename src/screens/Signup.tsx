import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';

import { register } from '../redux/action/authAction';
import { SubmitButton } from '../components/SubmitButton';
import { store } from '../redux/store';

const Signup: React.FC = (props: any) => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {
        if (username == '') return Alert.alert('Please enter username');
        else if (email == '') return Alert.alert('Please enter email address');
        else if (password == '') return Alert.alert('Please enter password');
        else store.dispatch(register({ username, email, password }))
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{'Registration'}</Text>
            <TextInput
                testID='username'
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUserName(text)}
            />

            <TextInput testID='email'
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />

            <TextInput testID='password'
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <SubmitButton testID='signup-button' title='Signup' onClick={handleRegistration} />
            <TouchableOpacity style={{ marginTop: 8, position: 'absolute', bottom: 32 }} onPress={() => props.navigation.navigate('Login')}>
                <Text style={{ color: 'black' }}>{'Already have an account? Login'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
    },
    button: {
        width: '100%',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 32,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Signup;