/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { calculateSum } from '../src/constants';

it('renders correctly', () => {
  renderer.create(<App />);
});


it('Calculate Sum is working fine',()=>{
  const result = calculateSum(5,4);

  expect(result).toBe(9)
})