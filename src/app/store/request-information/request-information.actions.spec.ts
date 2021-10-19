import * as fromRequestInformation from './request-information.actions';

describe('loadRequestInformations', () => {
  it('should return an action', () => {
    expect(fromRequestInformation.loadRequestInformations().type).toBe('[RequestInformation] Load RequestInformations');
  });
});
