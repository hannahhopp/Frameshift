export const getUniqueWords = (wordArr) => {
  const reduce = wordArr.reduce((acc, word) => {
    if (!acc.seen[word]) acc.seen[word] = true;
    else acc.unique.push(word);
    return acc;
  }, {
    seen: {},
    unique: []
  });
  return reduce.unique;
}

export const joinWords = (wordArr) => {
  const uniqArr = getUniqueWords(wordArr);
  return uniqArr.join(' • ');
}
