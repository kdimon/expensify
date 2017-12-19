import {
    firebase,
    googleAuthProvider,
    facebookAuthProvider,
    githubAuthProvider,
    twitterAuthProvider
} from '../firebase/firebase';

export const login = uid => ({
    type: 'LOGIN',
    uid
});

export const startLogin = e => {
    return () => {
        const provider = e.target.id;
        let identifier = undefined;

        if(provider === 'google') {
            identifier = googleAuthProvider;
        }else if(provider === 'facebook') {
            identifier = facebookAuthProvider;
        }else if(provider === 'github') {
            identifier = githubAuthProvider;
        }else if(provider === 'twitter') {
            identifier = twitterAuthProvider;
        }

        return firebase.auth().signInWithPopup(identifier);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};