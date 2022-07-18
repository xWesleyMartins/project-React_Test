import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test(`Teste se o topo da aplicação
  contém um conjunto fixo de links de navegação`, () => {
    renderWithRouter(<App />);

    const linkToHome = screen.getByRole('link', { name: /Home/i });
    expect(linkToHome).toBeInTheDocument();

    const linkToAbaut = screen.getByRole('link', { name: /About/i });
    expect(linkToAbaut).toBeInTheDocument();

    const linkToFavPokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkToFavPokemons).toBeInTheDocument();

    // const po
  });
});
