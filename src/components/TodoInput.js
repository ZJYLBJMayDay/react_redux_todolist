import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actionCreators';

const TodoInput = () => {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    // const handOnKeyDown = useCallback(e => {
    //     const { keyCode } = e;

    //     if (keyCode === 13) {
    //         console.log(e);
    //         e.preventDefault();
    //         dispatch(addTodo(inputText));
    //         setInputText('');
    //     }
    // }, []);

    // useEffect(() => {
    //     document.addEventListener('keydown', handOnKeyDown);

    //     return () => {
    //         document.removeEventListener('keydown', handOnKeyDown);
    //     };
    // }, [handOnKeyDown]);

    // useEffect(() => {
    //     function handOnKeyDown(e) {
    //       const { key, keyCode } = e;
    //       if (keyCode === 13) {
    //         console.log(e);
    //         e.preventDefault();
    //         dispatch(addTodo(inputText));
    //         setInputText('');
    //     }
    //     }

    //     document.addEventListener('keyup', handOnKeyDown)
    //     return () => {
    //       document.removeEventListener('keyup', handOnKeyDown)
    //     }
    //   }, [])


    return (
        <div>
            <input id="TodoInput" type="text" placeholder="come on!!!" value={inputText} onChange={e => setInputText(e.target.value)}
                onKeyDown={useEffect(() => {
                    function handOnKeyDown(e) {
                        const { keyCode } = e;
                        // console.log(e.path[0].id);
                        if (e.path[0].id ==='TodoInput' && keyCode === 13) {
                            // console.log(e);
                            e.preventDefault();
                            dispatch(addTodo(inputText));
                            setInputText('');
                        }
                    }

                    document.addEventListener('keyup', handOnKeyDown)
                    return () => {
                        document.removeEventListener('keyup', handOnKeyDown)
                    }
                }, [inputText,dispatch])} />
        </div>
    )
}
export default TodoInput;