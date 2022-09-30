import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import CommonBreadcrumb from './CommonBreadcrumb';

describe('<CommonBreadcrumb />', () => {
  test('Render without crash', () => {
    const tree = renderer.create(<CommonBreadcrumb data={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
