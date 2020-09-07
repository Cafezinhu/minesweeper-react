import React, {Component} from 'react';
import styled from 'styled-components';
import Grid from './components/Grid';


const Root = styled.div`
    background: #f7f774;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export default class App extends Component{
    render(){
        return(
            <Root>
                <Grid rows={20} columns={20} bombs={40}/>
            </Root>
        );
    }
}