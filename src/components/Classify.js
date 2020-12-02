import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pickFilter } from '../redux/actionCreators'

const MemoClassify = memo(() => {
    const dispatch = useDispatch();
    const [isClickedAll, setClickedAll] = useState(true);
    const [isClickedProcessing, setClickedProcessing] = useState(false);
    const [isClickedDone, setClickedDone] = useState(false);
    return (
        <div>
            <span onClick={() => {dispatch(pickFilter("All")); setClickedAll(true);setClickedDone(false);setClickedProcessing(false)}} className={`${isClickedAll ? "clickAll" : null}`}>All</span>
            <span onClick={() => {dispatch(pickFilter("Processing")); setClickedProcessing(true); setClickedDone(false); setClickedAll(false)}} className={`${isClickedProcessing ? "clickProcessing" : null}`}>Processing</span>
            <span onClick={() => {dispatch(pickFilter("Done")); setClickedDone(!isClickedDone); setClickedAll(false);setClickedProcessing(false)}} className={`${isClickedDone ? "clickDone" : null}`}>Done</span>
        </div>
    );
});
export default MemoClassify;