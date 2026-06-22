const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateSliceIndexes = () => {
  const min = 1;
  const max = 6;
  const startIndex = randomIntBetween(min, max - 2);
  const endIndex = startIndex + 3;
  return [startIndex, endIndex];
};

const randomBetweenIndex = (min, max, exclude) => {
  let num;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (exclude.includes(num));
  return num;
};

export const generateUniqueIndexes = () => {
  const min = 1;
  const max = 6;
  let indexes = [];
  for (let i = 0; i < 3; i++) {
    const index = randomBetweenIndex(min, max, indexes);
    indexes.push(index);
  }
  return indexes;
};

export function toMoneyRP(money) {
  if (typeof money === 'undefined') return 'Rp 0';
  return new Number(money).toLocaleString('id-ID', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

// Compact "mulai dari" label from a full-rupiah amount.
// >= 1 juta -> "Rp 7,2jt" / "Rp 1,095jt"; below that -> "Rp 750rb" / "Rp 80rb".
export const formatPaketPrice = (p) => {
  if (!p) return '';
  if (p >= 1000000) {
    const jt = Number((p / 1000000).toFixed(3));
    return `Rp ${jt.toString().replace('.', ',')}jt`;
  }
  return `Rp ${Math.round(p / 1000)}rb`;
};

export const formatDateString = (dateString) => {
  const date = new Date(dateString);
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};

export function removeSurroundingQuotes(str) {
  if (str?.startsWith('"') && str?.endsWith('"')) {
    return str.slice(1, -1);
  }
  return str;
}
