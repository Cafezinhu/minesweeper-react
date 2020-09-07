export default class Game{
    static _grid = [];
    static _rows = 0;
    static _columns = 0;

    static generate(rows, columns, bombs){
        Game._grid = [];
        Game._rows = rows;
        Game._columns = columns;
        let generatedBombs = 0;
        for(let i = 0; i < rows; i++){
            let row = [];
            for(let j = 0; j < columns; j++){
                row.push(false);
            }
            Game._grid.push(row);
        }
        while(generatedBombs < bombs){
            for(let i = 0; i < rows; i++){
                for(let j = 0; j < columns; j++){
                    const bomb = Game.generateBomb(generatedBombs, bombs);
                    if(bomb && !Game._grid[i][j]) {
                        Game._grid[i][j] = bomb;
                        generatedBombs++;
                        if(generatedBombs === bombs || generatedBombs >= rows * columns) return;
                    }
                }
            }
        }
    }

    static generateBomb(generatedBombs, totalBombs){
        if( generatedBombs < totalBombs){
            const bomb = Math.floor(Math.random() * 100) === 0;
            return bomb;
        }
        return false;
    }

    static tileHasBomb(row, column){
        if(row >= 0 && row < Game._rows && column >= 0 && column < Game._columns)
            return Game._grid[row][column];
        return false;
    }

    static bombsAround(row, column){
        let counter = 0;
        for(let i = -1; i < 2; i++){
            for(let j = -1; j < 2; j++){
                if(this.tileHasBomb(row + i, column + j)) counter++;
            }
        }
        return counter;
    }
}