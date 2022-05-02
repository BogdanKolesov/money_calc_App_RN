import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Remainder = () => {
    return (
        <RemainderContainer>
            <RemainderTitle>Остаток:</RemainderTitle>
            <RemainderText>32000 на 20 суток</RemainderText>
        </RemainderContainer>
    );
}

const RemainderContainer = styled.View`
    width: 100%;
`

const RemainderTitle = styled.Text`
    font-size: 18px;
    color: black;
    opacity: 0.5;
    letter-spacing: 1px;
`

const RemainderText = styled.Text`
    font-size: 30px;
    color: black;
    opacity: 0.8;
    letter-spacing: 1.1px;
`

export default Remainder;
