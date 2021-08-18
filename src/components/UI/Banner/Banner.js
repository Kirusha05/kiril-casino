import React from 'react';
import useWindowSize from '../../../hooks/use-windowSize';

import './Banner.css';

const Banner = (props) => {
  const windowSize = useWindowSize();
  let styles;
  if (props.individual) {
    styles = {
      margin: '2rem auto',
      width: `${900}px`,
      height: `${180}px`,
      borderRadius: '10px'
    };
  } else {
    styles = {
      marginLeft: props.marginLeft || '0',
      flexBasis: `${props.width}px`,
      width: `${props.width}px`,
    };
  }

  styles.height =
    windowSize.width > 1088
      ? `${props.height || 180}px`
      : `auto`;

  return (
    <div className="banner" style={styles}>
      <h1 className="emphasize">{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.details}</p>
    </div>
  );
};

export default React.memo(Banner);
