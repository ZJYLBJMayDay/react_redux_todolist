import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, sortTodo, changeCompleted } from '../redux/actionCreators';




const MemoTodoItem = memo(({ todo }) => {
    const { id, inputText, number, isCompleted } = todo;
    const dispatch = useDispatch();
    // const [sortNumber, setNumber] = useState(number);
    const [isEdit, setEdit] = useState(false);
    const [changeText, setChangeText] = useState(inputText);
    // const [isCompleted, setCompleted] = useState(false);


    // useEffect(() => {
    //     // console.log(e);
    //     // e.preventDefault();
    //     dispatch(sortTodo(id, sortNumber));
    //     // setInputText('');
    // });

    return (
        <div>
            <>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => dispatch(sortTodo(id, e.target.value))}
                />
            </>

            {isEdit ? (
                <>
                    <input type="text" value={changeText} onChange={e => setChangeText(e.target.value)} />
                    <button onClick={() => { dispatch(editTodo(id, changeText)); setEdit(!isEdit) }}>save</button>
                    <button onClick={() => setEdit(!isEdit)}>cancel</button>
                </>

            ) : (
                    <>
                        {/* <span>{inputText}</span> */}
                        <span onClick={() => dispatch(changeCompleted(id))} className={`${isCompleted ? "marked" : null}`}>{inputText}</span>
                        <button onClick={() => setEdit(!isEdit)} disabled={`${isCompleted ? "disabled" : ""}`}>edit</button>
                    </>
                )
            }


            <button onClick={() => dispatch(deleteTodo(id))}>delete</button>
        </div>
    )
});

export default MemoTodoItem;