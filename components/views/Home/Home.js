import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, NumberInput, PageTitle, Remainder } from '../../atoms';
import { ActionInputItem } from '../../molecules';

const Home = () => {

    const [edit, setEdit] = useState(false);


    return (
        <AppContainer>
            <DevLabel />
            <PageTitle title='Остаток средств' />
            <Remainder />
            <Text>
            </Text>
            {
                edit ?
                    (<>
                        <NumberInput editable={edit} placeholder='32000' inputTitle='Всего средств' />
                        <NumberInput editable={edit} placeholder='20' inputTitle='Количество дней' />
                        <Button onPress={() => setEdit(!edit)} >Ок</Button>
                        <Button onPress={() => setEdit(!edit)} >Не ок</Button>
                    </>)
                    :
                    <>

                        <Button onPress={() => setEdit(!edit)} >Редактировать</Button>
                    </>
            }
            <ActionInputItem add />
            <ActionInputItem />
        </AppContainer>
    );
}


export default Home;
