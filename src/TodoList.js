import React from 'react'
import Delete from './delete.svg';

function TodoList(props) {



    return (
        <div className="item">
            <img onClick={()=>{
                props.onSelect(props.id)
            }} src={Delete} />
            <li>{props.text}</li>
        </div>
    )
}

export default TodoList
