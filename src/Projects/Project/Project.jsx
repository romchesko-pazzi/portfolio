import React from 'react';
import s from './Project.module.css';


export const Project = (props) => {

    const {projectName, text} = props;

    return (
        <div className={s.projectBlock}>
            <div className={s.image}>
                <div className={s.btn}>
                    take a look
                </div>
            </div>
            <h3>
                {projectName}
            </h3>
            <span>
                {text}
            </span>
        </div>
    );
};
