import React, { Component } from 'react'
import { Container, Content, Button, Text } from 'native-base';

class HomeScreen extends Component {
  render() {
    return (
      <Container>
          <Content>
              <Button primary onPress={()=>this.props.navigation.navigate('Shoes')}>
                  <Text>Shoes</Text>
              </Button>
              <Button primary onPress={()=>this.props.navigation.navigate('Technology')}>
                  <Text>Technology</Text>
              </Button>
          </Content>
      </Container>
    )
  }
}

export default HomeScreen