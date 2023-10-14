import {helloWorld} from './index';

it('returns hello world', () => {
    expect(helloWorld()).toBe('Hello world!');
});