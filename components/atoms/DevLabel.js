import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const DevLabel = () => {
    return (
        <StyledText>
            Created by Kolesov.dev
        </StyledText>
    );
}

const StyledText = styled.Text`
    font-size: 16px;
    color: black;
    letter-spacing: 1.2px;
    width: 100%;
    text-align: right;
    justify-content: center;
    align-items: center;
    font-family: Roboto_100Thin;
`

export default DevLabel;
