import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    //HeaderCartButton will be re-evaluated by React whenever the context changes
    const cartCtx = useContext(CartContext); //to get access to this cart context which is managed by the closest provider (on App)

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    return(
        <React.Fragment>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </React.Fragment>
    );
}

export default HeaderCartButton;