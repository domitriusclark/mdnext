import { formatDate } from '../src/utils/format-date';

describe('format date', () => {
  test('converts string date into human-friendly date', () => {
    expect(formatDate('2020-11-20')).toEqual('November 20, 2020');
  });
});
