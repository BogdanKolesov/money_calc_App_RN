import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, NumberInput, PageTitle, Remainder, Row } from '../../atoms';
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
                        <Row>
                            <Button ok minified onPress={() => setEdit(!edit)} >Ок</Button>
                            <Button notOk minified onPress={() => setEdit(!edit)} >Не ок</Button>
                        </Row>
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
