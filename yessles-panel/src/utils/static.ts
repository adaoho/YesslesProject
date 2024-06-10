const randomIntBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateSliceIndexes = () => {
  const min = 1;
  const max = 6;
  const startIndex = randomIntBetween(min, max - 2); // Ensuring a difference of 2
  const endIndex = startIndex + 3;

  return [startIndex, endIndex];
};

const randomBetweenIndex = (min: number, max: number, exclude: any) => {
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

export function toMoneyRP(money: number) {
  if (typeof money === "undefined") {
    return "Rp 0";
  }
  let moneyFormat = new Number(money).toLocaleString("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return moneyFormat;
}

export const formatDateString = (dateString: string | any): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

export const formatDateShortString = (dateString: string | any): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

export const getAuthorLeaderboard = (articles: any) => {
  const authorCounts = articles.reduce((acc: any, article: any) => {
    acc[article.User.email] = (acc[article.User.email] || 0) + 1;
    return acc;
  }, {});

  const leaderboard = Object.keys(authorCounts).map((authorId) => {
    return {
      email: authorId,
      count: authorCounts[authorId],
    };
  });

  leaderboard.sort((a, b) => b.count - a.count);

  return leaderboard;
};

export function removeSurroundingQuotes(str: string) {
  if (str.startsWith('"') && str.endsWith('"')) {
    return str.slice(1, -1);
  }
  return str;
}
