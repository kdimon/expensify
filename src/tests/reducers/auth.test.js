import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'lksjdfi3459jksdfi43'
    };
    const state = authReducer(undefined, action);

    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'klsadjf435lkj234'}, action);

    expect(state).toEqual({});
});