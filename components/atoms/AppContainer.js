import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const AppContainer = ({ children }) => {
    return (
        <AppView>
            <AppScrollView showsVerticalScrollIndicator={false}>
                {children}
            </AppScrollView>
        </AppView>
    );
}

export default AppContainer;

const AppView = styled.View`
    width: 100%;
    height: 100%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
    background-color: white;
`

const AppScrollView = styled.ScrollView`
    width: 100%;
    height: 100%;
`