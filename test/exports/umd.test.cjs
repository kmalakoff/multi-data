const assert = require('assert');

let umd = null;
try {
  umd = require('multi-data/umd');
} catch (_) {
  umd = require('multi-data/dist/umd/multi-data.cjs');
}
const multiData = typeof window !== 'undefined' ? window.multiData : umd.default || umd;

describe('exports umd', () => {
  it('append with headers', () => {
    const boundary = 'test-boundary';
    const form = new multiData(boundary);
    const options = { headers: { 'some-header': 'header-value' } };
    form.append('section1', 'some data', options);
    assert.ok(~form.toString().indexOf('some-header'));
  });
});
