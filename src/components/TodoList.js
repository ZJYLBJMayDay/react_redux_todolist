import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos, selectFilter, selectSearchData, selectSearch } from '../redux/selectors';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todolist = useSelector(selectTodos);
    const searchData = useSelector(selectSearchData);
    const searchText = useSelector(selectSearch);
    const filter = useSelector(selectFilter);
    const todoData = (searchText === null || searchText === '') ? todolist : searchData;
    // console.log(filter);

    return (
        <div>
            {todoData
                .filter(todo => {
                    if (filter === 'All') return true
                    return filter === 'Done' ? todo.isCompleted : !todo.isCompleted
                })
                .map(todo => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            }
        </div>
    )
};

export default TodoList;