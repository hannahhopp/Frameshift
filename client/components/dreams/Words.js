import React, { Component } from 'react';

class Words extends Component {
  constructor (props) {
    super(props);
    this.joinWords = this.joinWords.bind(this);
  }

  getUniqueWords (wordArr) {
    const reduce = wordArr.reduce((acc, word) => {
      if (!acc.seen[word]) {
        acc.seen[word] = true;
        acc.unique.push(word);
      }
      return acc;
    }, {
      seen: {},
      unique: []
    });
    return reduce.unique;
  }

  joinWords (wordArr) {
    const { getUniqueWords } = this;
    const uniqArr = this.getUniqueWords(wordArr);
    return uniqArr.join(' • ');
  }

  render () {
    const { dream } = this.props;
    const { joinWords } = this;
    return (
      <div className="word-boxes">
        <div className="word-box positive-words">
          <p>{ joinWords(dream.positive) }</p>
        </div>
        <div className="word-box negative-words">
          <p>{ joinWords(dream.negative) }</p>
        </div>
      </div>
    );
  }
}

export default Words;
