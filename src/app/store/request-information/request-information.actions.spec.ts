import * as fromRequestInformation from './request-information.actions';

describe('loadRequestInformations', () => {
  it('should return an action', () => {
    expect(fromRequestInformation.loadRequestInformation.type).toBe('[RequestInformation] Load RequestInformation');
  });
});
