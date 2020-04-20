import React from 'react';
import { shallow } from 'enzyme';
import ArticlePage from './ArticlePage';

describe('<ArticlePage />', () => {
  test('renders', () => {
    const wrapper = shallow(<ArticlePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
