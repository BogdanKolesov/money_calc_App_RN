import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Row = ({ children }) => {
    return (
        <StyledView>
            {children}
        </StyledView>
    );
}

const StyledView = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`


export default Row;
