import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav'
import {goHome, clickToggle, setFirst} from '../modules/landing'

const NavContainer = () => {
    const isToggled = useSelector(state => state.landing.isToggled)
    const dispatch = useDispatch()
    const clickGoHome = useCallback(() => dispatch(goHome()), [dispatch])
    const clickHamburger = useCallback(() => dispatch(clickToggle()), [dispatch])
    const setFirstNum = useCallback(() => dispatch(setFirst()), [dispatch])
    return (
        <Nav 
            isToggeld={isToggled}
            clickGoHome={clickGoHome}
            clickHamburger={clickHamburger}
            setFirstNum={setFirstNum}
        />
    );
};

export default React.memo(NavContainer);