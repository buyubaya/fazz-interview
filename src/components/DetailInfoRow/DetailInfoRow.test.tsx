import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import DetailInfoRow from './DetailInfoRow';

describe('<DetailInfoRow />', () => {
  test('Render without crash', () => {
    const tree = renderer.create(<DetailInfoRow label="TITLE" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
