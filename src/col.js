import React, { Component } from 'react';
import { BREAKS_POINTS } from './helpers';

var WIDTH_RATIOS = {
  '1': 100
};

for(var i = 1; i <= 50; i++) {
  for (var j = 1; j <= i; j++) {
    WIDTH_RATIOS[j + '/' + i] = j * 100 / i;
  }
}

export default class Col extends Component {
  render() {
    const { square, children, ...rest } = this.props;

    const breakKeys = Object.keys(BREAKS_POINTS);

    const widths = breakKeys.map((breakKey, index) => {
      return this.props[breakKeys.slice(index, breakKeys.length).find(i => this.props[i])];
    });

    const cssWidths = {
      xl: WIDTH_RATIOS[widths[0]] && WIDTH_RATIOS[widths[0]] + '%' || widths[0] || '100%',
      lg: WIDTH_RATIOS[widths[1]] && WIDTH_RATIOS[widths[1]] + '%' || widths[1] || '100%',
      md: WIDTH_RATIOS[widths[2]] && WIDTH_RATIOS[widths[2]] + '%' || widths[2] || '100%',
      sm: WIDTH_RATIOS[widths[3]] && WIDTH_RATIOS[widths[3]] + '%' || widths[3] || '100%',
      xs: WIDTH_RATIOS[widths[4]] && WIDTH_RATIOS[widths[4]] + '%' || widths[4] || '100%'
    }

    return (
      <div>
        {children}

        <style jsx>{`
          box-sizing: border-box;
          @media (max-width: ${BREAKS_POINTS.xl}px) {
            width: ${cssWidths.xl};
            display: ${cssWidths.xl !== '0' ? 'block' : 'none'};
          }
          @media (max-width: ${BREAKS_POINTS.lg}px) {
            width: ${cssWidths.lg};
            display: ${cssWidths.lg !== '0' ? 'block' : 'none'};
          }
          @media (max-width: ${BREAKS_POINTS.md}px) {
            width: ${cssWidths.md};
            display: ${cssWidths.md !== '0' ? 'block' : 'none'};
          }
          @media (max-width: ${BREAKS_POINTS.sm}px) {
            width: ${cssWidths.sm};
            display: ${cssWidths.sm !== '0' ? 'block' : 'none'};
          }
          @media (max-width: ${BREAKS_POINTS.xs}px) {
            width: ${cssWidths.xs};
            display: ${cssWidths.xs !== '0' ? 'block' : 'none'};
          }
        `}</style>
      </div>
    )
  }
}
