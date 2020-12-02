import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchList } from '../redux/actionCreators';

const Search = ({ todolist }, {searchText}) => {
    console.log(todolist);
    console.log(searchText);
    // const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    return <input type="text" placeholder="search the to do list" value={searchText} onChange={(e) => dispatch(searchList(e.target.value))}/>;
};
export default Search;