import React from 'react';
import injectSheet from 'react-jss';
import styles from './ie-mask.styles';

const IeMask = (props) => {
  const classes = props.classes;
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <div className={classes.holder}>
          <span className={classes.info}>
            THIS PORTFOLIO IMPLEMENTS
            <br/>
            CUTTING EDGE TECHNOLOGIES
          </span>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.holder}>
          <h2 className={classes.heading}>Sorry</h2>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.holder}>
          <span className={classes.info}>
            IT WORKS IN ANY MODERN BROWSER
            <br/>
            OTHER THAN <span className={classes.ie}>INTERNET EXPLORER</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default injectSheet(styles)(IeMask);
