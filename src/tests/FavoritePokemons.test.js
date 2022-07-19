import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('', () => {
    renderWithRouter(<FavoritePokemons />);

    const textNoFoundPokemon = screen
      .getByText(/No favorite pokemon found/i);

    expect(textNoFoundPokemon).toBeInTheDocument();
  });
});
