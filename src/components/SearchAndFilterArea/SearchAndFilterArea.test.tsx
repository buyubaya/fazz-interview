import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchAndFilterArea from './SearchAndFilterArea';

describe('<SearchAndFilterArea />', () => {
  test('Render without crash', () => {
    const tree = renderer.create(<SearchAndFilterArea />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
