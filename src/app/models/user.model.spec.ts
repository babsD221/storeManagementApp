import { CurrentUser } from './user.model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new CurrentUser()).toBeTruthy();
  });
});
