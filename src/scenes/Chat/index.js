import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    FlatList,
    Image, Modal, Button
} from 'react-native';

import io from 'socket.io-client';

const NAME = '@jsuazag';
const AVATAR = "http://culoveo.com/wp-content/uploads/2016/01/disfraz-de-negro-pollon-del-whatsapp.jpg";

class ChatScene extends Component {
    state = {
        typing: '',
        messages: [],
        showModal: true,
        nickname: '',
        whoIsTyping: ''
    };

    componentDidMount() {
        this.socket = io.connect('http://chatroomrn.us.openode.io:80');
        this.listenMessages();
        this.listenTyping();
    }

    listenTyping() {
        this.socket.on('typing', (data) => {
            this.setState({ whoIsTyping: data.username });
        });
    }

    listenMessages() {
        this.socket.on('new_message', (data) => {
            let newMessage = {
                avatar: data.avatar,
                username: data.username,
                message: data.message
            };
            this.setState({
                messages: [...this.state.messages, newMessage]
            })
        })
    }

    renderItem({ item }) {
        return (
            <View style={styles.row}>
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <View style={styles.rowText}>
                    <Text style={styles.sender}>{item.username}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
            </View>
        );
    }

    sendMessage = () => {
        /*this.setState({
          messages: [...this.state.messages, { username: NAME, avatar: AVATAR, message: this.state.typing }]
        })*/
        this.socket.emit('new_message', { message: this.state.typing })
        this.setState({
            typing: ''
        })
    }



    keyExtractor = () => Math.floor((Math.random() * 1000) + 1).toString()

    enterRoom = () => {
        this.socket.emit('change_username', { username: this.state.nickname, avatar: AVATAR })
        this.setState({ showModal: false })
    }

    renderModal() {
        return (
            <Modal
                animationType="slide"
                visible={this.state.showModal}
                transparent={false}
                onRequestClose={() => { }}
            >
                <View style={styles.modalContainer}>
                    <TextInput
                        style={styles.inputNickname}
                        placeholder={'@nickname'}
                        onChangeText={text => this.setState({ nickname: text })}
                    />
                    <Button
                        title="Ingresar al chat :D"
                        onPress={this.enterRoom}
                    />
                </View>
            </Modal>
        );
    }

    onChangeText = (text) => {
        this.setState({ typing: text });
        this.socket.emit('typing', { username: this.state.nickname });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderModal()}
                {this.state.whoIsTyping != '' ?
                    <Text> {this.state.whoIsTyping + " está escribiendo..."}</Text>
                    : null
                }
                <FlatList
                    data={this.state.messages}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.footer}>
                        <TextInput
                            value={this.state.typing}
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Type something nice"
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.sendMessage}
                        />
                        <TouchableOpacity onPress={this.sendMessage}>
                            <Text style={styles.send}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    avatar: {
        borderRadius: 20,
        width: 40,
        height: 40,
        marginRight: 10
    },
    rowText: {
        flex: 1
    },
    message: {
        fontSize: 18
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#eee'
    },
    input: {
        paddingHorizontal: 20,
        fontSize: 18,
        flex: 1
    },
    send: {
        alignSelf: 'center',
        color: 'lightseagreen',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    inputNickname: {
        backgroundColor: '#ccc',
        marginBottom: 10,
    }
});

export default ChatScene;