import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styled from 'styled-components/native';

const NumberInput = ({ minified, inputTitle, placeholder, value }) => {
    return (
        <StyledView minified={minified}>
            <ViewTitle>
                {inputTitle}
            </ViewTitle>
            <Input
                keyboardType="numeric"
                placeholder={placeholder}
                value={value}
            />
        </StyledView>
    );
}

export default NumberInput;

const StyledView = styled.View`
    width: ${props => props.minified ? 80 : 100}%;
    margin-top: 10px;
`

const Input = styled.TextInput`
    width: 100%;
    font-size: 22px;
    color: black;
    border-color: black;
    border-width: 1px;
    flex-direction: column;
    border-radius: 5px;
    padding: 5px;
    border-bottom-right-radius: 0px;
`

const ViewTitle = styled.Text`
    font-size: 22px;
    letter-spacing: 1px;
    color: black;
    padding-bottom: 10px;
`