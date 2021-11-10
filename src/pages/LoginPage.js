import React from "react";
import {View, TextInput, StyleSheet, Button} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import FormRow from "../components/FormRow"

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyB2r6ZIbD3yQZ2wIe253053SQ2a1D_qoZ8",
            authDomain: "series-9dd07.firebaseapp.com",
            projectId: "series-9dd07",
            storageBucket: "series-9dd07.appspot.com",
            messagingSenderId: "702065174209",
            appId: "1:702065174209:web:dd712326bde3d9a85a1640"
        }
        initializeApp(firebaseConfig)

        const auth = getAuth()
        signInWithEmailAndPassword(auth, 'aizen@sereitei.com', '123123')
            .then(user => console.log('Usuário autenticado!'))
            .catch(error => console.log('Usuário não encontrado'))
    }

    onChangeHandler(field, value) {
        this.setState({
            [field]: value
        })
    }

    tryLogin() {
        console.log(this.state)
    }

    render() {
        return(
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        style={styles.input}
                        placeholder="user@mail.com"
                        value={this.state.email}
                        onChangeText={value => this.onChangeHandler('email', value)} />
                </FormRow>
                <FormRow last>
                    <TextInput style={styles.input}
                        placeholder="******"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)} />
                </FormRow>
                <Button title="Entrar" onPress={() => this.tryLogin()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5
    }
})

