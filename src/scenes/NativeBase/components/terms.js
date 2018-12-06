import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text, Card, CardItem } from 'native-base'
import HeaderComponent from './header';
class TermsScene extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (props) => (
                <HeaderComponent title="Terminos y Condiciones" navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                />
            )
        }
    }
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Text style={styles.text}>Terminos y Condiciones</Text>
                        </CardItem>
                    </Card>
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
export default TermsScene;