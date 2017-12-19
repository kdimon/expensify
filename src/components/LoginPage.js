import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";

export const LoginPage = ({startLogin}) => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className='button' id='google' onClick={startLogin}>Log in with Google</button>
            <button className='button' id='facebook' onClick={startLogin}>Log in with Facebook</button>
            <button className='button' id='github' onClick={startLogin}>Log in with GitHub</button>
            <button className='button' id='twitter' onClick={startLogin}>Log in with Twitter</button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: e => dispatch(startLogin(e))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);