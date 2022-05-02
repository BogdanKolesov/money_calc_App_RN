import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, NumberInput, Remainder } from '../../atoms';

const Home = () => {
    return (
        <AppContainer>
            <DevLabel />
            <Remainder />
            <NumberInput placeholder='32000' inputTitle='Всего средств' />
            <NumberInput placeholder='20' inputTitle='Количество дней' />
            <Button>Редактировать</Button>
            <NumberInput minified inputTitle='Расходы' />
            <NumberInput minified inputTitle='Доходы' />
            <Button>Добавить</Button>
        </AppContainer>
    );
}


export default Home;
