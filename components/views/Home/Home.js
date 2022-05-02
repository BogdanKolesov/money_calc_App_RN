import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, NumberInput } from '../../atoms';

const Home = () => {
    return (
        <AppContainer>
            <NumberInput inputTitle='Всего средств' />
            <NumberInput inputTitle='Количество дней' />
        </AppContainer>
    );
}


export default Home;
