import React from 'react';

export default ({ center, right, middle, bottom, children }) => {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: '-10px',
    marginLeft: '-10px',
    justifyContent: right ? 'flex-end' : center ? 'center' : null,
    alignItems: bottom ? 'flex-end' : middle ? 'center' : null
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}
