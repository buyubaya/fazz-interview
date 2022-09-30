import { IListAccountInfo } from '@/apis/accountList/types';
import { ACCOUNT_CATEGORY } from '@/types/entity/Account/enums';
import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import AccountListTable from './AccountListTable';

describe('<AccountListTable />', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  test('Renders with 0 items', () => {
    const tree = renderer.create(<AccountListTable accountList={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Renders with 100 items', () => {
    const accountList: IListAccountInfo[] = new Array(100).map((item, index) => ({
      id: index,
      transactionDate: '2020-10-10',
      description: '',
      category: ACCOUNT_CATEGORY.OTHER_SERVICES,
      debit: 100,
      credit: null,
    }));
    const tree = renderer.create(<AccountListTable accountList={accountList} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
