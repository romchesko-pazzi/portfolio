import React from 'react';
import s from './Footer.module.css';
import cont from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={cont.container + " " + s.footerContainer}>
                <h4>Contacts</h4>
                <div className={s.contacts}>
                    <div className={s.contact}>
                        <span>telegram</span>
                    </div>
                    <div className={s.contact}>
                        <span>Github</span>
                    </div>
                    <div className={s.contact}>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
