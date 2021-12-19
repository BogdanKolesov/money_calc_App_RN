import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { StyledInput, StyledText } from '../../atoms';
import { ScrollContainer } from '../../atoms/ScrollContainer';

const Home = () => {
    return (
        <AppContainer>
            <StyledText>414412</StyledText>
            <StyledInput keyboardType='numeric'
            />
        </AppContainer>
    );
}

const AppContainer = styled.View`
    flex: 1;
    padding-top: 7%;
    margin-left: 5%;
    margin-right: 5%;
    
`

export default Home;
