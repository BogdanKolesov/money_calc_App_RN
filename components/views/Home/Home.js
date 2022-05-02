import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, NumberInput } from '../../atoms';

const Home = () => {
    return (
        <AppContainer>
            <NumberInput inputTitle='Всего средств' />
            <NumberInput inputTitle='Количество дней' />
            <NumberInput inputTitle='Расходы' />
            <NumberInput inputTitle='Доходы' />
            <Button>Добавить</Button>
        </AppContainer>
    );
}


export default Home;
