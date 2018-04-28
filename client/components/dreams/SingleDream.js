import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Words from './Words';

class SingleDream extends Component {

  splitParagraph (dream) {
    return dream.split('\n').map((p, i) => (
      <p key={i} className="dream-text">{p}</p>
    ));
  }

  render () {
    const { dream } = this.props;
    const { splitParagraph } = this;
    return !dream.title
      ? (
        <h1>Loading</h1>
      ) : (
        <div className="dream">
          <div className="dream-header">
            <h1>{ dream.title }</h1>
            <h2>{ dream.dreamType.toLowerCase() }</h2>
          </div>
          <div className="dream-text-container">
            { splitParagraph(dream.dream) }
          </div>
          <Words dream={ dream } />
        </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    dream: state.dreams.find(dream => dream.id === +id) || {}
  }
}

export default withRouter(connect(mapStateToProps)(SingleDream));
