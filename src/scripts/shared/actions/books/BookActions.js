import BookRepository from '../../domain/book/BookRepository';

export const GET_BOOK_LIST_START = 'GET_BOOK_LIST_START';
export const GET_BOOK_LIST_SUCCESS = 'GET_BOOK_LIST_SUCCESS';
export const GET_BOOK_LIST_FAIL = 'GET_BOOK_LIST_FAIL';

const getBookListStart = () => ({
    type: GET_BOOK_LIST_START
});

const getBookListSuccess = payload => ({
    type: GET_BOOK_LIST_SUCCESS,
    payload: payload
});

const getBookListError = errors => ({
    type: GET_BOOK_LIST_SUCCESS,
    payload: null,
    errors
});

export const getBookList = () => {
    return dispatch => {
        dispatch(getBookListStart());

        return BookRepository.getBookList()
        .then(response => dispatch(getBookListSuccess(response)))
        .catch(error => {
            dispatch(getBookListError(error));
            throw error;
        });
    };
};
