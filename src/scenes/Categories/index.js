import React, { Component } from 'react';
import { Platform, ScrollView, Button, SectionList, Image } from 'react-native';
import {Container,Content,Header, View} from 'native-base';
import ItemCategory from './components/item-category';
import HeaderComponent from '../NativeBase/components/header';

const categories = [
    {
        id: 1,
        name: 'Dairy Products',
        backgroundColor: '#26a69a',
        opacity: 90,
        description: '- Products rich in calcium',
        photo: 'https://previews.123rf.com/images/baibaz/baibaz1603/baibaz160300046/55868581-diversos-productos-l%C3%A1cteos-frescos-en-el-fondo-de-madera.jpg'
    },
    {
        id: 2,
        name: 'Proteins',
        backgroundColor: '#fb8c00',
        opacity: 90,
        description: '- Delicious products rich in proteins',
        photo: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/DEDF/production/_101855075_proteinas01.jpg'
    },
    {
        id: 3,
        name: 'Flours',
        backgroundColor: '#1a237e',
        opacity: 90,
        description: '- Cereals and other seeds',
        photo: 'http://olmo.pntic.mec.es/rjid0000/pasta.jpg'
    },
];
class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoriesList: [],
            result: {},
            imageSrc: {}
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: (props) => (
                <HeaderComponent title="Categories" navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                />
            )
        }
    }

    componentDidMount = () => {

        this.setState({
            categoriesList: categories
        });
    }

    
    renderItem = ({ item }) => <ItemCategory navigation={this.props.navigation} category={item} />
    keyExtractor = (item) => item.id.toString()
    render() {
        return (
            <Container>
                <Content>
                    <ScrollView>
                        <SectionList
                            renderItem={this.renderItem}
                            sections={[
                                {
                                    data: this.state.categoriesList
                                }
                            ]}
                            keyExtractor={this.keyExtractor}
                        />
                    </ScrollView>
                </Content>
            </Container>
        );
    }

}

export default Categories;