import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Icon = ({ children, add, onPress }) => {
    return (
        <StyledIcon add={add} onPress={onPress}>
            {children}
        </StyledIcon>
    );
}

export default Icon;

const StyledIcon = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-color: ${props => props.add ? 'green' : 'red'};
    border-radius: 100px;
    border-width: 2px;
`