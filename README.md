# My Tic Tac Toe Game
* As user, I want to create a tic tac toe game with two players
It's simple game  with my javascript/jQuery. It's a game which the user is able to choose whether to play as X or O and have the computer shows each play and there a winner or the game is tie.

*Table of total 9 squares (cells) 3 rows,3 columns a two squares diagonal.
Table square with these ID:       1   2   3
                                  4   5   6
                                  7   8   9
* How to play this game:
There two players: Player1 (shows X each time this play click on any square) and player2 (shows O each time this player click on any square). It's randomly click, and the players click after other. After a square has been clicked ( it’s activated) and it cannot accept any click unless the game is reset.
*Condition of winning
A player 1or player 2 wins when there are:
X or O on Squares: Rows:      1,2,3  or  4,5,6  or  7,8,9
                  Columns:    1,4,7  or  2,5,8  or  3,6,9
                  Diagonals:  1,5,9  or  3, 5, 7.
*Draw/Tie
The Game is tie when none of player succeed to click on winner’s squares until all squares are filled.
*Challenges.
I use array to represente the table and each square(cell) has 0,1,2,3,4,5,6,7 and 8. (Total= 9).
Notice: the player's point of view, the board(table) contains spaces 1-9. But, an array's indexes start their count at 0.


I had difficulty to use for loop to look through the squares and I did choose if statement.
