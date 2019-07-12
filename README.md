# My Tic Tac Toe Game
Welcome to my first GA project: Tic tac toe game.
This Game is written in JavaScript and playable in the browser. It requires a user account with the game's API sever where the game states are saved.

# User stories
Tic-Tac-Toe  game.
1. As a user, I want to play tic-tac-toe.
2. As a  user, I want to read  first the Instructions so that I can win tic-tac-toe.
3. As a first-time user  I want to create a new account so that I can trace my games playing.
4. As a returning user, I want to log into my account so that I can start a new game.
5. As a returning user, I want to trace my performing (wins/lost/tie) so that I can improve.
6. As a returning user, I want to change my password so that my account is secure.
7. As a returning user, I want to log out of my account so that I can keep my information safe.

 It's a game which the user is able to choose whether to play against itself starting with 'X' switch to 'O'. The computer shows each player, a winner or the Draw if the game is tie.
*A board(Table) of total 9 squares (cells) 3 rows,3 columns a two squares diagonal. Table square with these ID: 1 2 3 4 5 6 7 8 9.

User: Player1  clicks on a square ('X'appears each time this player clicks on any square)switch to player2 ('O'shown each time this player click on any square). It's randomly click, and the players click after other. After a square has been clicked ( it’s activated) and it cannot accept any click unless the game is reset.
Condition of winning: A player1 or player 2 wins when there are: X or O on Squares: Rows: 1,2,3 or 4,5,6 or 7,8,9 Columns: 1,4,7 or 2,5,8 or 3,6,9 Diagonals: 1,5,9 or 3, 5, 7.
Draw/Tie: There is draw when none of player succeed to click on winner’s squares until all squares are filled.
Challenges. I use array to represente the table and each square(cell) has index 0,1,2,3,4,5,6,7 and 8. (Total= 9). Notice: the player's point of view, the board(table) contains spaces 1-9. But, an array's indexes start their count at 0.
I had difficulty to use for loop that looks through the squares and I did choose if statement.

# my Github address link:
https://github.com/fofombi/tic-tac-toe-kevin-client

# My wireframe link:
https://i.imgur.com/C1jbhG1.jpg

# The technologies used to create this project are:
    1. JavaScript
    2. JQuerry for DOM manipulation.
    3. Html
    4. Atom
    5. SCSS
    6. Github.
    7. Git.
    8. Ajax.
    9. Curl.
    10. Grunt
    11. Instructor-provided API.
    12.  Bootstrap

# Development Process  and Problem solving
I have started this project by developing project scopes which has been changed as I was moving forward.
1- I drew first my Wiframes
2- I figured out how I could display my game board.
3- I focus on meeting the project requirements by applying SCSS to make sure that the user experience has been met.
4- I created a New branch (development) where many changing have been made.
5- started with user authentication,  Game logic, connecting the game to the DOM, API game actions, UI handling etc.
6- This branch has been  commited severial times and merged to the master branch before deploying.
7- I had some technical, API and Auth Specifications  issues that have been solve

# Improvements/Unsolved Problems
The following Improvements could be made:
1- Display the game Instructions to the user.
2- Create multiplier functionality.
3-The user's interface could be improved.
4- I could add animations etc..
