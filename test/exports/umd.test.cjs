const assert = require('assert');
const MultiData = require('multi-data/dist/umd/multi-data.cjs');

describe('exports multi-data/dist/umd/multi-data.cjs', () => {
  it('append with headers', () => {
    const boundary = 'test-boundary';
    const form = new MultiData(boundary);
    const options = { headers: { 'some-header': 'header-value' } };
    form.append('section1', 'some data', options);
    assert.ok(~form.toString().indexOf('some-header'));
  });
});
