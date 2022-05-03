import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components/native';
import { Icon, NumberInput } from '../atoms';

const ActionInputItem = ({ add, onPress, ref }) => {
    return (
        <StyledView>
            <NumberInput ref={ref} minified add={add} inputTitle={add ? 'Доходы' : 'Расходы'} />
            <Icon add={add} onPress={onPress}>
                <AntDesign add={add} name={add ? 'plus' : 'minus'} style={{ fontSize: 18, color: add ? 'green' : 'red' }} />
            </Icon>
        </StyledView>
    );
}

export default ActionInputItem

const StyledView = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    margin-bottom: 10px;

`