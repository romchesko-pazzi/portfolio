import React from 'react';
import s from './Skills.module.css';
import cont from "../common/styles/Container.module.css";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={cont.container + " " + s.skillsContainer}>
                <h2>My skills</h2>
                <div className={s.skills}>
                    <Skill title={"HTML/CSS"}
                           text={"Free resource that will help nderstand thecv designc process and improve theroi nderstand the design process andisei impro are of vquality."}/>
                    <Skill title={"JS"}
                           text={"process and improve theroi nderstand the design process andisei impro are of vquality."}/>
                    <Skill title={"React"}
                           text={"Free resource that will help nderstand the design process andisei impro are of vquality."}/>
                </div>
            </div>
        </div>
    );
};
