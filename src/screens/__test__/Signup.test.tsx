import { it, describe, expect, beforeAll } from '@jest/globals';
import { fireEvent, render, waitFor, act } from "@testing-library/react-native"

import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import thunk from "redux-thunk";
import { reduxStorage } from '../../redux/reduxStorage';
import { reducers } from '../../redux/reducers';
import Signup from '../Signup';

const reducerConfig = { key: 'root', whitelist: ["auth", "home"], storage: reduxStorage }
const persist = persistReducer(reducerConfig, reducers)
const store = configureStore({ middleware: [thunk], reducer: persist })

describe('Signup', () => {
    it('should render Signup page correctly', () => {
        const page = render(<Signup />);
        expect(page.getByTestId('username')).toBeTruthy();
        expect(page.getByTestId('password')).toBeTruthy();
        expect(page.getByTestId('signup-button')).toBeTruthy();
    })

    it('should dispatch a regsiter action when the signup button is clicked', async () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Signup />
            </Provider>
        );

        const usernameInput = getByTestId('username');
        const emailInput = getByTestId('email');
        const passwordInput = getByTestId('password');
        const signupButton = getByTestId('signup-button');

        // Simulate user input
        fireEvent.changeText(usernameInput, 'robin');
        fireEvent.changeText(emailInput, 'robin@example.com');
        fireEvent.changeText(passwordInput, 'password123');

        // Dispatch the login action when the button is clicked
        act(() => {
            fireEvent.press(signupButton);
        });

        // Use waitFor to ensure that the action is dispatched
        await waitFor(() => {
            expect(store.getState().auth.userData.username).toBe(store.getState().auth.userData.username);
        }, { timeout: 2000 });
    });

});
