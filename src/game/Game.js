export default class Game{
    _grid = [];
    _rows = 0;
    _columns = 0;

    constructor(rows, columns, bombs){
        this._rows = rows;
        this._columns = columns;
        let generatedBombs = 0;
        for(let i = 0; i < rows; i++){
            let row = [];
            for(let j = 0; j < columns; j++){
                const bomb = this.generateBomb();
                row.push(bomb);
                if(bomb) generatedBombs++;
            }
            this._grid.push(row);
        }
        while(generatedBombs < bombs){
            for(let i = 0; i < rows; i++){
                for(let j = 0; j < columns; j++){
                    const bomb = this.generateBomb();
                    if(bomb) {
                        this._grid[i][j] = bomb;
                        generatedBombs++;
                        if(generatedBombs === bombs) return;
                    }
                }
            }
        }
    }

    generateBomb(){
        const bomb = Math.floor(Math.random() * 20) === 0;
        console.log(bomb);
        return bomb;
    }

    tileHasBomb(row, column){
        if(row >= 0 && row < this._rows && column >= 0 && column < this._columns)
            return this._grid[row][column];
        return false;
    }
}