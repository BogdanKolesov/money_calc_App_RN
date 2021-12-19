import styled from 'styled-components/native';
import { Text } from 'react-native'

export const StyledText = styled.Text`
    font-size: 80px;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
    text-align: ${({ centred }) => (centred ? 'center' : 'auto')};
`