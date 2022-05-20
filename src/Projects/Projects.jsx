import React from 'react';
import s from "./Projects.module.css";
import cont from "../common/styles/Container.module.css";
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={cont.container + " " + s.projectsContainer}>
                <h2>My Projects</h2>
                <div className={s.projects}>
                    <Project projectName={"Todolist"} text={"Free resource that will help nderstand thecv designc process and improve impro are of vquality."}/>
                    <Project projectName={"Counter"} text={"Understand thecv designc process and improve impro are of vquality."}/>
                </div>
            </div>
        </div>
    );
};
