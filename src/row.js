import React from 'react';

export default ({ center, right, middle, bottom, reverse, children }) => {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: '-10px',
    marginLeft: '-10px',
    justifyContent: right ? 'flex-end' : center ? 'center' : null,
    alignItems: bottom ? 'flex-end' : middle ? 'center' : null,
    flexDirection: reverse ? 'row-reverse' : null
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}
