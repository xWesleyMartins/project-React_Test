import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test(`Teste se é renderizado um
  card com as informações de determinado pokémon:`, () => {
    renderWithRouter(<App />);

    const pikachu = screen.getByTestId('pokemon-name', /Pikachu/i);
    expect(pikachu).toBeInTheDocument();

    const electric = screen.getByTestId('pokemon-type', /Electric/i);
    expect(electric).toBeInTheDocument();

    const weight = screen.getByTestId('pokemon-weight', /Average weight: 6.0 kg/i);
    expect(weight).toBeInTheDocument();

    const pokeImg = screen.getByAltText('Pikachu sprite');
    expect(pokeImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(electric).toContainHTML('Electric');
  });
  test(`Teste se o card do pokémon indicado na Pokédex contém um link de
  navegação para exibir detalhes deste pokémon.`, () => {
    renderWithRouter(<App />);
    const detailsPoke = screen.getByRole('link', { name: /More details/i });
    userEvent.click(detailsPoke);
    const favPokemons = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(favPokemons);
    const favIconimg = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(favIconimg).toHaveAttribute('src', '/star-icon.svg');
  });
});
