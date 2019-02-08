import styled from 'styled-components';
import config from './config';
import { SCREEN_TYPES, WIDTH_RATIOS, reduceScreenTypes } from './utils';

export default styled.div`
  box-sizing: border-box;

  ${props => {
    let widths = { xs: '100%' };

    SCREEN_TYPES.forEach(key => {
      let width = props[key];
      width = WIDTH_RATIOS[width] && WIDTH_RATIOS[width] + '%' || width;
      if (width !== undefined) widths[key] = width;
    });

    widths = reduceScreenTypes(widths);

    return Object.keys(widths).map(type => `
      @media ${config[type]} {
        width: ${widths[type]};
        display: ${widths[type] !== '0' ? 'block' : 'none'};
      }
    `).join('');
  }}
`
