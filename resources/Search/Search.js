import React,  { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, CheckBox, Text, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListViewTag from './ListView';
import ErroMsg from './ErroMsg';
import Indicator from './Indicator';

import { connect } from 'react-redux';

import { buscaPedido, 
         alteraStateTag, 
         buscaTag, 
         pesquisaTagPedido, 
         alteraTipoPesquisaTag, 
         alteraStateIndicator 
} from '../Functions/Actions/index';

class Search extends Component {
    constructor(props){
        super(props);

        this.state={
            busca: ''
        }
    }
    _buscarPedido(conteudo){
        this.props.alteraStateIndicator();
        Keyboard.dismiss();
        this.props.stateTag ? this.props.buscaTag(conteudo, this.props.tipoPesquisaTag) : this.props.buscaPedido(conteudo);
    }

    _alterarStateTag(){
        this.props.alteraStateTag();
    }
    _alterarStateTipoPesquisaTag(){
        this.props.alteraTipoPesquisaTag();
    }
    
    _alterarBusca(busca){
        this.setState({ busca: busca })
        this.props.pesquisaTagPedido();
    }

    render(){
        const { todosPedidos, 
                BuscaPedido, 
                erroBuscaPedido, 
                stateTag, 
                buscaTags, 
                tipoPesquisaTag, 
                nro_registro, 
                indicator } = this.props;

        return(
            <View>
                <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                    <View style={styles.viewSerch}>
                        <TextInput 
                            placeholder='pedido ou tag'
                            onChangeText={busca => this._alterarBusca(busca)}
                            value={this.state.busca}
                            style={styles.textSearch}
                        />
                        <TouchableOpacity style={styles.iconSearch}>
                            <Ionicons 
                                name="ios-search" 
                                size={32} 
                                color="black"
                                onPress={() => this._buscarPedido(this.state.busca)} 
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ViewCheckBoxCounter}>
                        <View style={styles.checkBox}>
                            <CheckBox 
                                value={stateTag}
                                onChange={() => this._alterarStateTag()}
                            />
                            <Text>Tag</Text>
                            <CheckBox 
                                value={tipoPesquisaTag}
                                onChange={() => this._alterarStateTipoPesquisaTag()}
                                disabled={!stateTag}
                            />
                            <Text>Restrito</Text>
                        </View>
                        <View style={styles.viewContador}>
                            <Text style={styles.textContador}>{nro_registro}</Text>
                        </View>
                    </View>

                    {indicator ? (<Indicator/>) : null }

                    { erroBuscaPedido ? (
                        <ErroMsg />
                    ): (
                        <ListViewTag 
                            pedido={BuscaPedido} 
                            todosPedidos={todosPedidos}
                            pedidosTags={buscaTags}
                            stateTag={stateTag}
                        />                        
                    )}
                    
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return (
        { 
            BuscaPedido: state.firebase.buscaPedido,
            todosPedidos: state.firebase.todosPedidos,
            erroBuscaPedido: state.firebase.erroBuscaPedido,
            stateTag: state.firebase.stateTag,
            buscaTags: state.firebase.buscaTags,
            tipoPesquisaTag: state.firebase.tipoPesquisaTag,
            nro_registro: state.firebase.nro_registro,
            indicator: state.firebase.indicator
        }
    )
}

export default connect(
    mapStateToProps, { buscaPedido, 
                       alteraStateTag, 
                       buscaTag, 
                       pesquisaTagPedido, 
                       alteraTipoPesquisaTag, 
                       alteraStateIndicator
                     }
 )(Search);

const styles = StyleSheet.create({
    viewSerch: { 
        height: 50, 
        width: '98%',        
        backgroundColor: 'white' , 
        borderRadius: 10 ,
        marginTop: 45,
        marginBottom: 10, 
        elevation: 2,
        flexDirection: 'row', 
    },
    textSearch:{
        margin: 10,
        fontSize: 15         
    },
    viewErroMsg: {
        height: 35,
        borderRadius: 10,
        backgroundColor: '#88ADEE', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    iconSearch: {
        position: 'absolute',
        left: 306,
        top: 8,
        backgroundColor: 'white'
    },
    checkBox: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    ViewCheckBoxCounter: {
        justifyContent: 'space-between', 
        flexDirection: 'row'
    },
    viewContador: {
        margin: 10,
        backgroundColor: '#88ADEE',
        padding: 5,
        borderRadius: 20
    },
    textContador: {
        fontWeight: 'bold'
    }
})