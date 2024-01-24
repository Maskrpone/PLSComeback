import React from 'react';

const Arrow = ({ className, onClick, direction }) => (
    <div className={className} onClick={onClick}>
        {direction === 'prev' ? <span className="material-symbols-outlined">
            keyboard_double_arrow_left
        </span> : <span className="material-symbols-outlined">
            keyboard_double_arrow_right
        </span>}
    </div>
);

export default Arrow;
