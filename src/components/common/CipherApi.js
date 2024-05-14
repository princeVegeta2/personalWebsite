// src/components/common/CipherApi.js
import axios from 'axios';

const cipherApiUrl = process.env.REACT_APP_CIPHER_API_URL;

export const encryptText = async (text, language) => {
    try {
        const response = await axios.post(cipherApiUrl, {
            text: text,
            language: language
        });
        return response.data.encryptedText;
    } catch (error) {
        console.error('There was an error!', error);
        throw new Error('Failed to encrypt the text. Please try again.');
    }
};
