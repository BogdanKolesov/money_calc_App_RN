import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const Button = ({ children, onPress }) => {
    return (
        <StyledButton onPress={onPress}>
            <StyledText>
                {children}
            </StyledText>
            <StyledLinearGradient
                colors={['rgba(0, 93, 185, 0.4)', 'rgba(54, 57, 181, 0.6)']}
                start={{ x: 0.5, y: 0. }}
                end={{ x: 0.93, y: 1 }}
            />
        </StyledButton>
    );
}


export default Button;

const StyledButton = styled.TouchableOpacity`
    width: 200px;
    height: 50px;
    /* border-width: 3px; */
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: relative;
    margin-top: 10px;
`

const StyledText = styled.Text`
    font-size: 24px;
    color: white;
    font-family: Roboto_400Regular;
    letter-spacing: 1.2px;
    z-index: 1;

`
const StyledLinearGradient = styled(LinearGradient)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: 5px;
`