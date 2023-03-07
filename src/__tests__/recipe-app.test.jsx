import { describe, expect, test, vi, Vitest } from 'vitest'
import { Route, Routes } from 'react-router-dom'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { render } from '@testing-library/react'
import Home from '../../src/pages/Home'
import PopularRecipes from '../components/PopularRecipes/PopularRecipes'
import Cuisines from '../components/Cuisines/Cuisines'
import Search from '../components/Search/Search'

const mockData = [
  {
    id: 1,
    title: 'Recipe 1',
    image: 'recipe1.jpg',
    imageType: 'jpg',
    sourceUrl:
      'http://www.foodista.com/recipe/JKGPWDDP/steak-with-lemon-and-capers',
  },
  {
    id: 2,
    title: 'Recipe 2',
    image: 'recipe2.jpg',
    imageType: 'jpg',
    sourceUrl:
      'http://www.foodista.com/recipe/JKGPWDDP/steak-with-lemon-and-capers',
  },
  {
    id: 3,
    title: 'Recipe 3',
    image: 'recipe3.jpg',
    imageType: 'jpg',
    sourceUrl:
      'http://www.foodista.com/recipe/JKGPWDDP/steak-with-lemon-and-capers',
  },
]

describe('Component rendering', () => {
  test('testing if Cuisines is rendered', () => {
    expect(render(<Cuisines filtered={mockData} />)).toMatchSnapshot()
  })
})

describe('UI', () => {
  test('testing if Cuisines show recipe title', () => {
    render(<Cuisines filtered={mockData} />)
    expect(screen.getByText('Recipe 1')).toBeTruthy
  })
})
