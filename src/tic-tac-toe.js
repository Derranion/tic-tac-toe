class TicTacToe {

    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.currentPlayer;
            if (this.currentPlayer == 'x') {
                this.currentPlayer = 'o';
            } else {
                this.currentPlayer = 'x';
            }
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        const field = this.field;

        function getRow(index) {
            return field[index];
        }

        function getColumn(index) {
            return field.map(function (row) {
                return row[index];
            });
        }

        function findWinner(array) {
            const first = array[0];
            const hasWinner = array.every(function (el) {
                return el == first;
            });

            return hasWinner ? first : null;
        }

        return findWinner(getRow(0))
            || findWinner(getRow(1))
            || findWinner(getRow(2))
            || findWinner(getColumn(0))
            || findWinner(getColumn(1))
            || findWinner(getColumn(2))
            || findWinner([field[0][0], field[1][1], field[2][2]])
            || findWinner([field[0][2], field[1][1], field[2][0]]);
    }

    noMoreTurns() {
        return this.field.every(function (row) {
            return row.every(function (el) {
                return el != null;
            })
        });
    }

    isDraw() {
        return !this.getWinner() && this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
