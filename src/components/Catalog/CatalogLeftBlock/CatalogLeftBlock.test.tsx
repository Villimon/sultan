import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import store from '../../../redux/store';
import CatalogLeftBlock from './CatalogLeftBlock';

describe('test events', () => {

  test('renders learn react title', () => {
    render(
      <Provider store={store}>
        {/* @ts-ignore */}
        <CatalogLeftBlock />
      </Provider>
    );
    const title = screen.getByText(/ПОДБОР ПО ПАРАМЕТРАМ/i);
    expect(title).toBeInTheDocument();
  });


  test('click event', () => {
    render(
      <Provider store={store}>
        {/* @ts-ignore */}
        <CatalogLeftBlock />
      </Provider>
    );
    const btn = screen.getByTestId('toggle-btn');
    const toggleElem = screen.queryByTestId('toggle-elem');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();

  });
})


