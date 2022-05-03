import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

const buttonGradientVariants = {
    regular: ['rgba(0, 93, 185, 0.4)', 'rgba(54, 57, 181, 0.6)'],
    ok: ['rgba(65, 185, 59, 0.4)', 'rgba(82, 120, 182,0.6)'],
    notOk: ['rgba(224, 108, 108, 0.4)', 'rgba(207, 154, 154, 0.6)']
}

const Button = ({ children, onPress, ok, notOk, minified }) => {
    return (
        <StyledButton minified={minified} onPress={onPress}>
            <StyledText>
                {children}
            </StyledText>
            <StyledLinearGradient
                ok={ok}
                notOk={notOk}
                colors={ok || notOk ? (ok ? buttonGradientVariants.ok : buttonGradientVariants.notOk) : buttonGradientVariants.regular}
                start={{ x: 0.5, y: 0. }}
                end={{ x: 0.93, y: 1 }}
            />
        </StyledButton>
    );
}


export default Button;

const StyledButton = styled.TouchableOpacity`
    width: ${props => props.minified ? '150px' : '200px'};
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