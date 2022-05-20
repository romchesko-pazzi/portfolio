import React from 'react';
import s from "./Introducion.module.css";
import cont from "../common/styles/Container.module.css";

export const Introducion = () => {
    return (
        <div className={s.introducionBlock}>
            <div className={cont.container}>
                <div className={s.introducionText}>
                    <span>Hi there</span>
                    <h1>I Am Roma Konstantyuk</h1>
                    <span>FrontEnd Developer</span>
                </div>
                <div className={s.introducionPhoto}>
                </div>
            </div>
        </div>
    );
};
