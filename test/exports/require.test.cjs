/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const MultiData = require('multi-data');

describe('exports .cjs', function () {
  it('append with headers', function () {
    const boundary = 'test-boundary';
    const form = new MultiData(boundary);
    const options = { headers: { 'some-header': 'header-value' } };
    form.append('section1', 'some data', options);
    assert.ok(~form.toString().indexOf('some-header'));
  });
});
