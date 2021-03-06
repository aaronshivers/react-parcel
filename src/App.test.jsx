import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);
  it('should contain the text `Hello!`', async () => {
    await expect(app.text()).toBe('Hello!');
  });
});
