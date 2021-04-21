import React, { useState } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";

import Text from "../Text";
import categoryList from "../../categories";
import dapps from "../../dapps";

export default HomeScreen = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    const changeCategory = (category) => {
        setSelectedCategory(category);
    };

    const DappItem = (dapp) => {
        return (
            <Dapp>
                <DappCover source={dapp.cover} />
            </Dapp>
        )
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" />

            <Header>
                <Text large>Hello {" "}
                    <Text large heavy>
                        NewUser,
                    </Text>
                    {`\n`}
                    <Text large heavy>
                        Best Dapps of today!
                    </Text>
                </Text>

                <Avatar source={require('../../assets/DefaultUser.png')} />
            </Header>

            <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
                {categoryList.map((category, index) => {
                    return (
                        <Category key={index} onPress={() => changeCategory(category)}>
                            <CategoryName selected={selectedCategory === category ? true : false}>
                                {category}
                            </CategoryName>
                            {selectedCategory === category && <CategoryDot />}
                        </Category>
                    )
                })}
            </Categories>

            <Dapps data={dapps} KeyExtractor={item => String(item.id)} renderItem={({ item }) => DappItem(item)} />
        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #343434; 
`;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 16px 32px 0 32px;
    `;

const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    `;

const Categories = styled.ScrollView`
    margin-top: 32px;
    flex-grow: 0;
    `;

const Category = styled.TouchableOpacity`
    align-items: center;
    margin: 0 16px;
    height: 32px;
    `;

const CategoryName = styled(Text)`
    color: ${(props) => (props.selected ? "#819ee5" : "#9a9a9a")};
    font-weight: ${(props) => (props.selected ? "700" : "500")};
    `;

const CategoryDot = styled.View`
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #819ee5;
`;

const Dapps = styled.FlatList`
    margin-top: 32px;
    flex: 1;
`;

const Dapp = styled.TouchableOpacity`
    margin-bottom: 32px;
`;

const DappCover = styled.Image`
    height: 300px;
    width: 100%;
`;