import React from 'react';
import s from './Skill.module.css';


export const Skill = (props) => {

    const {title,text} = props;

    return (
        <div className={s.skillBlock}>
            <div className={s.skillIcon}>
            </div>
            <h3>{title}</h3>
            <span className={s.skillText}>
                {text}
            </span>
        </div>
    );
};
