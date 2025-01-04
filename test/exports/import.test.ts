import assert from 'assert';
// @ts-ignore
import MultiData, { type Options } from 'multi-data';

describe('exports .ts', () => {
  it('append with headers', () => {
    const boundary = 'test-boundary';
    const form = new MultiData(boundary);
    const options: Options = { headers: { 'some-header': 'header-value' } };
    form.append('section1', 'some data', options);
    assert.ok(~form.toString().indexOf('some-header'));
  });
});
