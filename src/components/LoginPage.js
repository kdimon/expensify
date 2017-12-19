import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";

export const LoginPage = ({startLogin}) => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className='button button--login' id='google' onClick={startLogin}>Log in with Google <img className='social-icon' src="/images/icons/gmail.svg" /></button>
            <button className='button button--login' id='facebook' onClick={startLogin}>Log in with Facebook <img className='social-icon' src="/images/icons/facebook.svg" /></button>
            <button className='button button--login' id='github' onClick={startLogin}>Log in with GitHub <img className='social-icon' src="/images/icons/github.svg" /></button>
            <button className='button button--login' id='twitter' onClick={startLogin}>Log in with Twitter <img className='social-icon' src="/images/icons/twitter.svg" /></button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: e => dispatch(startLogin(e))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);