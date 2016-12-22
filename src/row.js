import React from 'react';

export default ({ children }) => {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: '-10px',
    marginLeft: '-10px'
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}
