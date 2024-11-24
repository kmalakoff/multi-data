const assert = require('assert');
const MultiData = require('multi-data/dist/umd/multi-data.min.js');

describe('exports multi-data/dist/umd/multi-data.min.js', () => {
  it('append with headers', () => {
    const boundary = 'test-boundary';
    const form = new MultiData(boundary);
    const options = { headers: { 'some-header': 'header-value' } };
    form.append('section1', 'some data', options);
    assert.ok(~form.toString().indexOf('some-header'));
  });
});
