import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const SingleDream = (props) =>  {
  const { dream } = props;
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
          <p className="dream-text">
          {
            dream.dream.split('\n').map(par => (
                <div>
                  {par}<br/>
                </div>
              )
            )
          }
          </p>
        </div>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    dream: state.dreams.find(dream => dream.id === +id) || {}
  }
}

export default withRouter(connect(mapStateToProps)(SingleDream));
