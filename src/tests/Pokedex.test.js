import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test(`Teste se a página contém um heading h2
  com o texto Encountered pokémons`, () => {
    renderWithRouter(<App />);
    const pokedexText = screen
      .getByRole('heading', { level: 2, name: /Encountered pokémons/i });
    expect(pokedexText).toBeInTheDocument();
  });
  test(`Teste se é exibido o próximo pokémon da lista quando
  o botão Próximo pokémon é clicado:`, () => {
    renderWithRouter(<App />);
    const buttonNext = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(buttonNext).toBeInTheDocument();

    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();

    userEvent.click(buttonNext);

    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();

    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);
    userEvent.click(buttonNext);

    const dragonair = screen.getByText(/Dragonair/i);
    expect(dragonair).toBeInTheDocument();
    userEvent.click(buttonNext);
    expect(pikachu).toBeInTheDocument();
  });
  test('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);

    const pokeById = screen.getAllByTestId('pokemon-name');
    expect(pokeById).toHaveLength(1);
    const numTypes = 7;
    const type = screen.getAllByTestId('pokemon-type-button');
    expect(type).toHaveLength(numTypes);
  });
  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const all = screen.getByRole('button', { name: /All/i });
    userEvent.click(all);

    
    const type = screen.getByRole('button', { name: /Fire/i });
    userEvent.click(type);
    const charmander = screen.getByText(/Charmander/i);
    expect(charmander).toBeInTheDocument();

    userEvent.click(all);
    const pikachu = screen.getByText(/Pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
