import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Profile from '../pages/profile';

const mockStore = configureStore([]);

describe('Profile component', () => {
  test('renders correctly', () => {
    const store = mockStore({
      rocket: { rockets: [{ id: 1, reserved: true }] },
      mission: { missions: [{ id: 1, joined: true }] },
    });

    const { container } = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
