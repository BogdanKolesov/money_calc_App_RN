import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const PageTitle = ({ title }) => {
    return (
        <StyledText>
            {title}
        </StyledText>
    );
}

export default PageTitle;

const StyledText = styled.Text`
    font-size: 30px;
    color: black;
    font-family: Roboto_100Thin;
    letter-spacing: 1.1px;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
`