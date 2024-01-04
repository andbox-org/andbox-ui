import { compressPagination } from './util';

describe('compressPagination', () => {
  describe('Wide setting (centerMargin = 2, sidePadding = 1)', () => {
    const params = {
      centerMargin: 2,
      sidePadding: 1,
    };

    it('[(1), 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3, 4, 5], [12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 1, ...params });
      expect(result).toEqual([
        [1, 2, 3, 4, 5],
        [12, 13],
      ]);
    });

    it('[1, (2), 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3, 4, 5], [12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 2, ...params });
      expect(result).toEqual([
        [1, 2, 3, 4, 5],
        [12, 13],
      ]);
    });

    it('[1, 2, (3), 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3, 4, 5], [12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 3, ...params });
      expect(result).toEqual([
        [1, 2, 3, 4, 5],
        [12, 13],
      ]);
    });

    it('[1, 2, 3, (4), 5, 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3, 4, 5, 6], [12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 4, ...params });
      expect(result).toEqual([
        [1, 2, 3, 4, 5, 6],
        [12, 13],
      ]);
    });

    it('[1, 2, 3, 4, (5), 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3, 4, 5, 6, 7], [12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 5, ...params });
      expect(result).toEqual([
        [1, 2, 3, 4, 5, 6, 7],
        [12, 13],
      ]);
    });

    it('[1, 2, 3, 4, 5, (6), 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3, 4, 5, 6, 7, 8], [12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 6, ...params });
      expect(result).toEqual([
        [1, 2, 3, 4, 5, 6, 7, 8],
        [12, 13],
      ]);
    });

    it('[1, 2, 3, 4, 5, 6, (7), 8, 9, 10, 11, 12, 13] => [[1, 2], [5, 6, 7, 8, 9], [12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 7, ...params });
      expect(result).toEqual([
        [1, 2],
        [5, 6, 7, 8, 9],
        [12, 13],
      ]);
    });

    it('[1, 2, 3, 4, 5, 6, 7, (8), 9, 10, 11, 12, 13] => [[1, 2], [6, 7, 8, 9, 10, 11, 12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 8, ...params });
      expect(result).toEqual([
        [1, 2],
        [6, 7, 8, 9, 10, 11, 12, 13]
      ]);
    });

    it('[1, 2, 3, 4, 5, 6, 7, 8, (9), 10, 11, 12, 13] => [[1, 2], [7, 8, 9, 10, 11, 12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 9, ...params });
      expect(result).toEqual([
        [1, 2],
        [7, 8, 9, 10, 11, 12, 13],
      ]);
    });

    it('[1, 2, 3, 4, 5, 6, 7, 8, 9, (10), 11, 12, 13] => [[1, 2], [8, 9, 10, 11, 12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 10, ...params });
      expect(result).toEqual([
        [1, 2],
        [8, 9, 10, 11, 12, 13],
      ]);
    });

    it('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, (11), 12, 13] => [[1, 2], [9, 10, 11, 12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 11, ...params });
      expect(result).toEqual([
        [1, 2],
        [9, 10, 11, 12, 13],
      ]);
    });

    it('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, (12), 13] => [1, 2], [9, 10, 11, 12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 12, ...params });
      expect(result).toEqual([
        [1, 2],
        [9, 10, 11, 12, 13],
      ]);
    });

    it('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, (13)] => [[1, 2], [9, 10, 11, 12, 13]]', () => {
      const result = compressPagination({ total: 13, current: 13, ...params });
      expect(result).toEqual([
        [1, 2],
        [9, 10, 11, 12, 13],
      ]);
    });

    it('[1, 2, 3, (4), 5, 6, 7, 8, 9, 10] => [[1, 2, 3, 4, 5, 6], [9, 10]]', () => {
      const result = compressPagination({ total: 10, current: 4, ...params });
      expect(result).toEqual([
        [1, 2, 3, 4, 5, 6],
        [9, 10],
      ]);
    });

    it('[1, 2, 3, 4, (5), 6, 7, 8, 9, 10] => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]', () => {
      const result = compressPagination({ total: 10, current: 5, ...params });
      expect(result).toEqual([
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ]);
    });

    it('[1, 2, 3, 4, 5, (6), 7, 8, 9, 10] => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]', () => {
      const result = compressPagination({ total: 10, current: 6, ...params });
      expect(result).toEqual([
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ]);
    });

    it('[1, 2, 3, 4, 5, 6, (7), 8, 9, 10] => [[1, 2], [5, 6, 7, 8, 9, 10]]', () => {
      const result = compressPagination({ total: 10, current: 7, ...params });
      expect(result).toEqual([
        [1, 2],
        [5, 6, 7, 8, 9, 10]
      ]);
    });

    it('[(1), 2, 3, 4, 5] => [[1, 2, 3, 4, 5]]', () => {
      const result = compressPagination({ total: 5, current: 1, ...params });
      expect(result).toEqual([[1, 2, 3, 4, 5]]);
    });

    it('[1, (2), 3, 4, 5] => [[1, 2, 3, 4, 5]]', () => {
      const result = compressPagination({ total: 5, current: 2, ...params });
      expect(result).toEqual([[1, 2, 3, 4, 5]]);
    });

    it('[1, (2), 3, 4, 5] => [[1, 2, 3, 4, 5]]', () => {
      const result = compressPagination({ total: 5, current: 3, ...params });
      expect(result).toEqual([[1, 2, 3, 4, 5]]);
    });
  });

  describe('Compact setting (total = 13, centerMargin = 1, sidePadding = 0)', () => {
    const params = {
      centerMargin: 1,
      sidePadding: 0,
    };

    it('[(1), 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3], [13]]', () => {
      const result = compressPagination({ total: 13, current: 1, ...params });
      expect(result).toEqual([[1, 2, 3], [13]]);
    });

    it('[1, (2), 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3], [13]]', () => {
      const result = compressPagination({ total: 13, current: 2, ...params });
      expect(result).toEqual([[1, 2, 3], [13]]);
    });

    it('[1, 2, (3), 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3, 4], [13]]', () => {
      const result = compressPagination({ total: 13, current: 3, ...params });
      expect(result).toEqual([[1, 2, 3, 4], [13]]);
    });

    it('[1, 2, 3, (4), 5, 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3, 4], [13]]', () => {
      const result = compressPagination({ total: 13, current: 4, ...params });
      expect(result).toEqual([[1, 2, 3, 4, 5], [13]]);
    });

    it('[1, 2, 3, 4, (5), 6, 7, 8, 9, 10, 11, 12, 13] => [[1, 2, 3, 4], [13]]', () => {
      const result = compressPagination({ total: 13, current: 5, ...params });
      expect(result).toEqual([[1], [4, 5, 6], [13]]);
    });
  });
});
