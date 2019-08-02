import React from 'react';

import { Router, Scene, Stack } from 'react-native-router-flux';
import { Ionicons,  FontAwesome } from '@expo/vector-icons';

import DescriptionPed from '../Description/Description';
import Search from '../Search/Search';
import PedidoCompleto from '../Search/PedidoCompleto';

const SEARCH = () => { return(<Ionicons name="ios-search" size={32} color="black" />)}
const DESCRIPTION = () => { return(<FontAwesome name="pencil" size={32} color="black" />)}


export default props = () => {
    return(
        <Router>
            <Stack key='root'>                              
                <Scene 
                    key='tabbar'
                    title=''
                    tabs
                    hideNavBar                     
                    tabBarStyle={{ backgroundColor:'#FFFFFF' }}
                >
                    <Scene 
                        key='tabMain' 
                        title='Descrição'
                        icon={DESCRIPTION}                                                
                    >
                        <Scene
                            key='DescriptionPed'
                            component={DescriptionPed}
                            hideNavBar
                            initial
                        />
                    </Scene>

                    <Scene 
                        key='tabSearch' 
                        title='Search'
                        icon={SEARCH}
                    >
                        <Scene
                            key='Search'
                            component={Search}
                            hideNavBar                                                       
                        />
                    </Scene>           
                </Scene>
                <Scene 
                    key='PedidoCompleto'
                    component={PedidoCompleto}
                /> 
            </Stack>
        </Router>
    );
}