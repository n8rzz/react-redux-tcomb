import request from 'axios';

const ENDPOINT = 'http://localhost:3002/books';

export default {
    getBookList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    }
};
