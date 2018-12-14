import React, { Component } from 'react';
import { Platform, View, Text, SectionList, StyleSheet } from 'react-native';
import { Body, Container, Content, Icon, Accordion, Separator, Button, Footer, FooterTab } from 'native-base';
import HeaderComponent from '../Components/Header/header';

const dataArray = [
  { title: "Direct bank transfer", content: "Lorem ipsum dolor sit amet" },
  { title: "Check payments", content: "Lorem ipsum dolor sit amet" },
  { title: "Cash on delivery", content: "Lorem ipsum dolor sit amet" },
  { title: "Pay Pal", content: "Lorem ipsum dolor sit amet" },
  { title: "PayU Money", content: "Lorem ipsum dolor sit amet" },
  { title: "Credit Card", content: "Lorem ipsum dolor sit amet" }
];
class PaymentScene extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    header: (props) => {
      return (
        <HeaderComponent title="Payments Methods" navigation={navigation}
          hasBackButton={props.navigation.state.routes.length > 1}
        >
        </HeaderComponent>
      )
    }
  });

  _renderHeader(item, expanded) {
    return (
      <View
        style={{ flexDirection: "row", padding: 10, justifyContent: "space-between", alignItems: "center", backgroundColor: "#A9DAD6" }}
      >
        <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(content) {
    return (
      <Text
        style={{ backgroundColor: "#e3f1f1", padding: 10, fontStyle: "italic" }}
      >
        {content}
      </Text>
    );
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Separator bordered>
            <Text>PLEASE SELECT YOUR PAY METHOD</Text>
          </Separator>
          <Accordion
          style={styles.accordion}
            dataArray={dataArray}
            renderHeader={this._renderHeader}
          //renderContent={this._renderContent}
          />
          
        </Content>
      
        <Footer>
          <FooterTab>
            <Button full style={styles.button} onPress={()=>this.props.navigation.navigate('ShoppingResultScreen')}>
              <Text style={styles.button}>PLACE ORDER</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  accordion : {
    marginTop: 15
  },
  button: {
    backgroundColor: '#7efb7b',
  },
  text: {
    color: '#053645',
  }
});

export default PaymentScene;