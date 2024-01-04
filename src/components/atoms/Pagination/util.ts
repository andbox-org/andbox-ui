export const compressPagination = ({
  current,
  total,
  centerMargin = 2,
  sidePadding = 1,
}: {
  current: number;
  total: number;
  centerMargin?: number;
  sidePadding?: number;
}): number[][] => {
  // All params must be positive integer
  if (
    !Number.isInteger(current) ||
    !Number.isInteger(total) ||
    !Number.isInteger(centerMargin) ||
    !Number.isInteger(sidePadding)
  ) {
    throw new Error('All params must be positive integer');
  }

  // Total must be greater than current
  if (total < current) {
    throw new Error('Total must be greater than current');
  }

  const left: number[] = [];
  for (let i = 1; i <= 1 + sidePadding; i++) {
    if (i > total) break;
    left.push(i);
  }

  const right: number[] = [];
  for (let i = total - sidePadding; i <= total; i++) {
    if (i < 1) break;
    right.push(i);
  }

  const center: number[] = [];
  const rightShift = Math.max(1 + centerMargin - current, 0);
  const leftShift = Math.max(centerMargin + current - total, 0);
  const centerStart = current - centerMargin + rightShift - leftShift;
  const centerEnd = current + centerMargin + rightShift - leftShift;
  for (let i = centerStart; i <= centerEnd; i++) {
    if (i < 1) continue;
    if (i > total) break;
    center.push(i);
  }

  const all = [...left, ...center, ...right];
  const result: number[][] = [];
  let tmp: number[] = [];
  for (let i = 0; i < all.length; i++) {
    const n = all[i];
    if (tmp.length === 0) {
      tmp.push(n);
      continue;
    }

    const last = tmp[tmp.length - 1];
    if (last >= n) continue;
    if (n - last > 2) {
      result.push(tmp);
      tmp = [n];
      continue;
    } else if (n - last === 2) {
      tmp.push(last + 1);
    }
    tmp.push(n);
  }
  result.push(tmp);

  return result;
};
