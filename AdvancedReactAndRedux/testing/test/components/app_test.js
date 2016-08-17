import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similiar tests
describe('App', () => {

  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {

    // create an instance of app
    const component = renderComponent(App);

    // Use 'expect' to make 'assertion' about a target
    // 'expect' is a function that returns an object
    expect(component).to.contain('React simple starter!!');

  });

});
