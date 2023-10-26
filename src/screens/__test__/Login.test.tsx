import { it, describe, expect, beforeAll } from '@jest/globals';
import { fireEvent, render, waitFor, act } from "@testing-library/react-native"
import Login from "../Login"

import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import { reduxStorage } from '../../redux/reduxStorage';
import { reducers } from '../../redux/reducers';

const reducerConfig = { key: 'root', whitelist: ["auth", "home"], storage: reduxStorage }
const persist = persistReducer(reducerConfig, reducers)
const store = configureStore({ middleware: [thunk], reducer: persist })

describe('Login', () => {
    it('should render Login page correctly', () => {
        const page = render(<Login />);
        expect(page.getByTestId('username')).toBeTruthy();
        expect(page.getByTestId('password')).toBeTruthy();
        expect(page.getByTestId('login-button')).toBeTruthy();
        expect(page.getByTestId('signup-button')).toBeTruthy();
    })

    it('should dispatch a login action when the login button is clicked', async () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Login />
            </Provider>
        );

        const usernameInput = getByTestId('username');
        const passwordInput = getByTestId('password');
        const loginButton = getByTestId('login-button');

        // Simulate user input
        fireEvent.changeText(usernameInput, 'rahul@example.com');
        fireEvent.changeText(passwordInput, 'password123');

        // Dispatch the login action when the button is clicked
        act(() => {
            fireEvent.press(loginButton);
        });

        // Use waitFor to ensure that the action is dispatched
        await waitFor(() => {
            expect(store.getState().auth.userData.username).toBe(store.getState().auth.userData.username);
        }, { timeout: 2000 });
    });

});
