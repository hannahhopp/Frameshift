import React from 'react';
import { Link } from 'react-router-dom';

const MiniDream = (props) => {
  const { dream } = props;
  return (
    <Link to={`/dreams/${dream.id}`}>
      <div className="mini-dream">
        <img src={ dream.imageUrl } className="mini-dream-t" />
        <p className="mini-dream-title">{ dream.title }</p>
      </div>
    </Link>
  )
}

export default MiniDream;
