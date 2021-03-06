import React from 'react';
import HeaderCartButton from './HeaderCartButton'
import image from '../../assets/meals__.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>Tiago's Restaurant</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}> 
            {/* a css class with a dash inside of it, so I can't use the dot notation */}
                <img src={image} alt={'Restaurant Layout'}/>
            </div>
        </React.Fragment>
    );
}

export default Header;