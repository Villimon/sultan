import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import App from './App';
import store from './redux/store';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

describe('test route', () => {
  test('move to another page', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const link = container.querySelector('.bottom-header__icon-basket');
    // @ts-ignore
    fireEvent.click(link)
    expect(container.querySelector('.basket__title')).toBeInTheDocument();
  });

  test('rederect page test', () => {
    render(<Provider store={store}>
      <MemoryRouter initialEntries={['/asdasdsadsa']}>
        <App />
      </MemoryRouter>
    </Provider>
    );
    const title = screen.getByTestId('title-elem');
    expect(title).toBeInTheDocument();
  });


})


