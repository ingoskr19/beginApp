import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text, Card, CardItem, Button } from 'native-base'
import HeaderComponent from './header';
class Login extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (props) => (
                <HeaderComponent title="Login" navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                />
            )
        }
    }
    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text style={styles.text}>Login</Text>
                        </CardItem>
                    </Card>
                    <Button
                        onPress={()=>navigation.navigate('TermsStack')}
                    >
                        <Text>Terminos y condiciones</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'red'
    }
});
export default Login;