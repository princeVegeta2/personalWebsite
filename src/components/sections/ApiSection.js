import React, { useState, useEffect } from 'react';
import { encryptText } from '../common/CipherApi';
import { getBoard, getCurrentPlayer, makeMove, resetGame, getWinner, isGameOver } from '../common/TTTApi';
import '../../assets/styles/ApiSection.css';

function ApiSection() {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('english');
    const [encryptedText, setEncryptedText] = useState('');
    const [error, setError] = useState('');

    // TicTacToe states
    const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [winner, setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const handleEncrypt = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const encrypted = await encryptText(text, language);
            setEncryptedText(encrypted);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const boardData = await getBoard();
                const currentPlayerData = await getCurrentPlayer();
                const winnerData = await getWinner();
                const gameOverData = await isGameOver();

                setBoard(boardData);
                setCurrentPlayer(currentPlayerData);
                setWinner(winnerData);
                setGameOver(gameOverData);
            } catch (error) {
                setError('Error fetching game data.');
            }
        }

        fetchData();
    }, []);

    const handleMove = async (row, column) => {
        if (gameOver || board[row][column] !== '') return;
        try {
            await makeMove(row, column);
            const boardData = await getBoard();
            const currentPlayerData = await getCurrentPlayer();
            const winnerData = await getWinner();
            const gameOverData = await isGameOver();

            setBoard(boardData);
            setCurrentPlayer(currentPlayerData);
            setWinner(winnerData);
            setGameOver(gameOverData);
        } catch (error) {
            setError('Invalid move. Try again.');
        }
    };

    const handleReset = async () => {
        try {
            await resetGame();
            const boardData = await getBoard();
            const currentPlayerData = await getCurrentPlayer();

            setBoard(boardData);
            setCurrentPlayer(currentPlayerData);
            setWinner(null);
            setGameOver(false);
        } catch (error) {
            setError('Error resetting game.');
        }
    };

    return (
        <section className="api-section" id="api-section">
            <div className="api-title">
                <h2>My API</h2>
                <div className="api-divider"></div>
            </div>
            <div className="api-grid">
                <div className="api">
                    <h1>Cipher API</h1>
                    <div className="api-description">
                        <p>This API was developed using .NET. It has 1 endpoint in its controller
                            which is responsible for both choosing the language and encrypting/decrypting text.
                            It uses the <b><a href="https://en.wikipedia.org/wiki/ROT13" target="_blank" className="word-link">ROT13</a></b> cipher
                            to encrypt the English text. For the Russian language, it uses a custom made ROT16 cipher,
                            which follows the same principles as ROT13, but without the letter "Ё", since the amount of letters
                            in the alphabet needs to be even for this cipher to work.
                        </p>
                        <a href="https://github.com/princeVegeta2/CipherAPI-docker-" target="_blank" className="github-link">GitHub</a>
                    </div>
                    <h2>Encrypt your text</h2>
                    <form className="api-form" onSubmit={handleEncrypt}>
                        <label>
                            Text:
                            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                        </label>
                        <label>
                            Language:
                            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                                <option value="english">English</option>
                                <option value="russian">Russian</option>
                            </select>
                        </label>
                        <button type="submit">Encrypt</button>
                    </form>
                    <div className="encrypted-text">
                        {encryptedText && <p>{encryptedText}</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </div>
                <div className="api">
                    <h1>TicTacToe API</h1>
                    <div className="api-description">
                        <p>This API was also developed using .NET, but unlike the Cipher API, it has a lot more business logic and endpoints.
                            The logic behind the API is just the TicTacToe game logic. There are 5 <b>GET</b> and 2 <b>POST</b> methods in the controller.
                            The API can return the current board, return the current player ("X" or "O"), allows the player to make a move, has a Reset method,
                            checks if the game is over and also if the board is full, and lastly returns the winner.
                        </p>
                        <a href="https://github.com/princeVegeta2/TicTacToeAPI-2.0" target="_blank" className="github-link">GitHub</a>
                    </div>
                    <div className="tic-tac-toe">
                        <h2>Current Player: {currentPlayer}</h2>
                        <div className="board">
                            {board.map((row, rowIndex) => (
                                row.map((cell, columnIndex) => (
                                    <button
                                        key={`${rowIndex}-${columnIndex}`}
                                        className="board-cell"
                                        onClick={() => handleMove(rowIndex, columnIndex)}
                                        disabled={cell !== '' || gameOver}
                                    >
                                        {cell}
                                    </button>
                                ))
                            ))}
                        </div>
                        {winner && <h2>Winner: {winner}</h2>}
                        {!winner && gameOver && <h2>It's a draw!</h2>}
                        <button className="reset-button" onClick={handleReset}>Reset Game</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ApiSection;
