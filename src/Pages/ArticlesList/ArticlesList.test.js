import React from 'react';
import { shallow } from 'enzyme';
import ArticlesList from './ArticlesList';

describe('<ArticlesList />', () => {
  test('renders', () => {
    const wrapper = shallow(<ArticlesList />);
    expect(wrapper).toMatchSnapshot();
  });
});
