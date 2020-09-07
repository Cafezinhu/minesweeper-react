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
                <Grid rows={10} columns={10} bombs={20}/>
            </Root>
        );
    }
}