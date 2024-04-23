import { MyFirstPipe } from './my-first.pipe';

describe('MyFirstPipe', () => {
  it('create an instance', () => {
    const pipe = new MyFirstPipe();
    expect(pipe).toBeTruthy();
  });
});
