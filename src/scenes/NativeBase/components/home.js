import React, { Component } from 'react'
import { Container, Header, Body, Title, Content, Text, Footer, Card, CardItem, Icon, Right, Left, Button } from 'native-base'
class Home extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.openDrawer()}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>Google Plus</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
                <Footer>
                    <Text>Footer</Text>
                </Footer>
            </Container>
        )
    }
}

export default Home;