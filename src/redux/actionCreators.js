import { ADD_TODO, DELETE_TODO, EDIT_TODO, SORT_TODO, CHANGE_COMPLETED, PICK_FILTER, SEARCH_LIST } from './actionTypes';

export const addTodo = (inputText) => {
    return {
        type: ADD_TODO,
        payload: {
            inputText
        }
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    };
};

export const editTodo = (id, inputText) => {
    return {
        type: EDIT_TODO,
        payload: {
            id,
            inputText
        }
    };
};

export const sortTodo = (id, sortNumber) => {
    return {
        type: SORT_TODO,
        payload: {
            id,
            sortNumber
        }
    };
};

export const changeCompleted = (id) => {
    return {
        type: CHANGE_COMPLETED,
        payload: {
            id
        }
    };
};

export const pickFilter = (filter) => {
    return {
        type: PICK_FILTER,
        payload: {
            filter
        }
    }
};

export const searchList = (searchText) => {
    return {
        type: SEARCH_LIST,
        payload: {
            searchText
        }
    }
};