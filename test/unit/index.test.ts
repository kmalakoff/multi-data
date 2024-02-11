import assert from 'assert';
import MultiData from 'multi-data';
import encodeUTF8 from '../lib/encodeUTF8.cjs';

describe('form-data', () => {
  describe('constructor', () => {
    it('Error: constructor expects a boundary', () => {
      assert.throws(() => new MultiData(undefined));
    });

    it('boundary', () => {
      const boundary = 'test-boundary';
      const form = new MultiData(boundary);
      assert.equal(form.boundary, boundary);
    });
  });

  describe('toString', () => {
    it('no append', () => {
      const boundary = 'test-boundary';
      const form = new MultiData(boundary);
      assert.equal(form.toString(), `--${boundary}--`);
    });
  });

  describe('append', () => {
    it('Error: append expects a name', () => {
      const boundary = 'test-boundary';
      const form = new MultiData(boundary);
      assert.throws(() => form.append(undefined, 'some data'));
    });

    it('Error: append expects data', () => {
      const boundary = 'test-boundary';
      const form = new MultiData(boundary);
      assert.throws(() => form.append('section1', undefined));
    });

    it('append', () => {
      const boundary = 'test-boundary';
      const form = new MultiData(boundary);
      form.append('section1', 'some data');
      assert.equal(form.toString(), [`--${boundary}`, 'Content-Disposition: form-data; name="section1"', '', 'some data', `--${boundary}--`].join('\r\n'));
    });

    it('append binary', () => {
      const boundary = 'test-boundary';
      const form = new MultiData(boundary);
      form.append('section1', encodeUTF8('some data'));
      assert.equal(form.toString(), [`--${boundary}`, 'Content-Disposition: form-data; name="section1"', '', encodeUTF8('some data').toString(), `--${boundary}--`].join('\r\n'));
    });

    it('append with headers', () => {
      const boundary = 'test-boundary';
      const form = new MultiData(boundary);
      form.append('section1', 'some data', {
        headers: { 'some-header': 'header-value' },
      });
      assert.equal(form.toString(), [`--${boundary}`, 'Content-Disposition: form-data; name="section1"', 'some-header: header-value', '', 'some data', `--${boundary}--`].join('\r\n'));
    });
  });
});
