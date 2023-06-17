import { Fragment } from 'react';
import style from './Nav.module.css';
const Nav = () => {

    return (
        <Fragment>
            <ul className={style.flexWrapper}>
                <li className={style.flex}>Computer Science</li>
                <li>Database</li>
                <li>Linux</li>
                <li>Front-End</li>
                <li>Back-End</li>
                <li>Others</li>  
            </ul>
        </Fragment>
    )
}

export default Nav