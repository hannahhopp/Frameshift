import React from 'react';
import { connect } from 'react-redux';
import MiniDream from './MiniDream';

const Gallery = (props) => {
  const { dreams } = props;
  return (
    <div className="dream-gallery">
      {
        dreams.map(dream => (
          <MiniDream key={dream.id} dream={dream} />
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  dreams: state.dreams
});

export default connect(mapStateToProps)(Gallery);
