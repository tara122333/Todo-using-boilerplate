import React from 'react';
import './taskdesing.component.scss'

export default function TaskDesign(props): React.ReactElement {
    return (
        <>
            <div className='task-design-box'>
                <h4 className='task-design-box-info'>{props.name}</h4>
                <h4 className='task-design-box-info'>{props.date}</h4>
                <h4 className='task-design-box-info'>{props.time}</h4>
            </div>            
        </>
    );
}
