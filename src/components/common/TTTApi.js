// src/ticTacToeApi.js
import axios from 'axios';

const apiUrl = process.env.REACT_APP_TTT_API_URL;

const axiosInstance = axios.create({
    baseURL: apiUrl
});

// Get the current state of the board
export const getBoard = async () => {
    try {
        const response = await axiosInstance.get('/board');
        return response.data;
    } catch (error) {
        console.error('Error fetching board:', error);
        throw error;
    }
};

// Get the current player
export const getCurrentPlayer = async () => {
    try {
        const response = await axiosInstance.get('/currentPlayer');
        return response.data;
    } catch (error) {
        console.error('Error fetching current player:', error);
        throw error;
    }
};

// Make a move
export const makeMove = async (row, column) => {
    try {
        const response = await axiosInstance.post('/makeMove', { row, column });
        return response.data;
    } catch (error) {
        console.error('Error making move:', error);
        throw error;
    }
};

// Reset the game
export const resetGame = async () => {
    try {
        const response = await axiosInstance.post('/reset');
        return response.data;
    } catch (error) {
        console.error('Error resetting game:', error);
        throw error;
    }
};

// Check if the game is over
export const isGameOver = async () => {
    try {
        const response = await axiosInstance.get('/isGameOver');
        return response.data;
    } catch (error) {
        console.error('Error checking if game is over:', error);
        throw error;
    }
};

// Check if the board is full
export const isBoardFull = async () => {
    try {
        const response = await axiosInstance.get('/isBoardFull');
        return response.data;
    } catch (error) {
        console.error('Error checking if board is full:', error);
        throw error;
    }
};

// Get the winner
export const getWinner = async () => {
    try {
        const response = await axiosInstance.get('/getWinner');
        return response.data;
    } catch (error) {
        console.error('Error fetching winner:', error);
        throw error;
    }
};
