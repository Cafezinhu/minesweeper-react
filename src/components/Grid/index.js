import React, { Component } from 'react';
import styled from 'styled-components';
import Tile from '../Tile';

const width = 650;
const height = 650;

const GridRoot = styled.div`
    width: ${width}px;
    height: ${height}px;
    background: #74f797;
`;

const Row = styled.div`
    width: 100%;
    height: calc(${height}px/ ${props => props.rows});
    display: flex;
    justify-content: space-evenly;
`;

export default class Grid extends Component{

    state = {
        rows: this.props.rows,
        columns: this.props.columns
    };

    render(){
        let rows = [];
        let counter = 0;
        for(let i = 0; i < this.state.rows; i++){
            let tiles = [];
            for(let j = 0; j < this.state.columns; j++){
                tiles.push(<Tile>{counter}</Tile>);
                counter++;
            }
            rows.push(<Row rows={this.state.rows}>{tiles}</Row>);
        }

        return(
            <GridRoot>
                {rows}
            </GridRoot>
        );
    }
}