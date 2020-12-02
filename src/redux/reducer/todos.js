import {
    ADD_TODO,
    CHANGE_COMPLETED,
    DELETE_TODO,
    EDIT_TODO,
    SORT_TODO,
    SEARCH_LIST
} from '../actionTypes';

const initialState = {
    todos: [],
    searchText: '',
    searchData: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const inputText = action.payload.inputText.trim();
            if (inputText) {
                return {
                    ...state,
                    todos: [...state.todos, {
                        id: Math.random() * 100,
                        inputText,
                        number: "1",
                        isCompleted: false
                    }].sort((a,b) => {return a.number - b.number})
                }
            }
            return state;
        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        }
        case EDIT_TODO: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            inputText: action.payload.inputText
                        }
                    }
                    return todo;
                })
            }
        }

        case SORT_TODO: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            number: action.payload.sortNumber
                        }
                    }
                    return todo;
                }).sort((a,b) => {return a.number - b.number})
            }
        }

        case CHANGE_COMPLETED: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            isCompleted: !todo.isCompleted
                        }
                    }
                    return todo;
                })
            }
        }

        case SEARCH_LIST: {
            // const searchList = state.todos;
            return {
                ...state,
                searchText: action.payload.searchText,
                searchData: state.todos.filter(todo => todo.inputText.includes(action.payload.searchText))
            }
        }

        default:
            return state;

    };
}

export default reducer;