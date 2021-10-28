import * as fromSessionInformation from './session-information.actions';

describe('loadSessionInformations', () => {
  it('should return an action', () => {
    expect(fromSessionInformation.loadSessionInformations().type).toBe('[SessionInformation] Load SessionInformations');
  });
});
