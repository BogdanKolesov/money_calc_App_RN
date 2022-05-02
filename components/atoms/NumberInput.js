import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styled from 'styled-components/native';

const NumberInput = ({ inputTitle, placeholder, value }) => {
    return (
        <StyledView>
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
    width: 60%;
    margin-top: 10px;
`

const Input = styled.TextInput`
    width: 100%;
    font-size: 18px;
    color: black;
    border-color: black;
    border-width: 1px;
    flex-direction: column;
    border-radius: 5px;
    padding: 5px;
`

const ViewTitle = styled.Text`
    font-size: 22px;
    letter-spacing: 1px;
    color: black;
    padding-bottom: 10px;
`