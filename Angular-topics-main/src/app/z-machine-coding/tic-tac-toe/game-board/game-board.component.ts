import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  board: string[][] = [];
  currentPlayer: string = 'X';
  winner: string | null = null;
  isDraw: boolean = false;

  constructor() {
    this.initializeBoard()
   }

  ngOnInit(): void {
  }

  initializeBoard() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = null;
    this.isDraw = false;
  }

  makeMove(row: number, col: number) {
    if (!this.board[row][col] && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      this.checkWinner();
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner() {
    const winningCombinations = [
      // Rows
      [[0, 0], [0, 1], [0, 2]],

      [[1, 0], [1, 1], [1, 2]],

      [[2, 0], [2, 1], [2, 2]],
      // Columns
      [[0, 0], [1, 0], [2, 0]],

      [[0, 1], [1, 1], [2, 1]],

      [[0, 2], [1, 2], [2, 2]],
      // Diagonals
      [[0, 0], [1, 1], [2, 2]],

      [[0, 2], [1, 1], [2, 0]]
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.board[a[0]][a[1]] &&
        this.board[a[0]][a[1]] === this.board[b[0]][b[1]] &&
        this.board[a[0]][a[1]] === this.board[c[0]][c[1]]
      ) {
        this.winner = this.board[a[0]][a[1]];
        return;
      }
    }

    // Check for a draw
    if (this.board.every(row => row.every(cell => cell))) {
      this.isDraw = true;
    }
  }

  resetGame() {
    this.initializeBoard();
  }

}
