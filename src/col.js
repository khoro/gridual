import styled from 'styled-components';
import config from './config';
import { WIDTH_RATIOS } from './utils';

export default styled.div`
  box-sizing: border-box;

  ${props => {
    const breakKeys = Object.keys(config.breakPoints);

    const widths = breakKeys.map((breakKey, index) => {
      return props[breakKeys.slice(index, breakKeys.length).find(i => props[i])];
    });

    const cssWidths = {
      xl: WIDTH_RATIOS[widths[0]] && WIDTH_RATIOS[widths[0]] + '%' || widths[0] || '100%',
      lg: WIDTH_RATIOS[widths[1]] && WIDTH_RATIOS[widths[1]] + '%' || widths[1] || '100%',
      md: WIDTH_RATIOS[widths[2]] && WIDTH_RATIOS[widths[2]] + '%' || widths[2] || '100%',
      sm: WIDTH_RATIOS[widths[3]] && WIDTH_RATIOS[widths[3]] + '%' || widths[3] || '100%',
      xs: WIDTH_RATIOS[widths[4]] && WIDTH_RATIOS[widths[4]] + '%' || widths[4] || '100%'
    }

    return `
      @media ${config.xl} {
        width: ${cssWidths.xl};
        display: ${cssWidths.xl !== '0' ? 'block' : 'none'};
      }
      @media ${config.lg} {
        width: ${cssWidths.lg};
        display: ${cssWidths.lg !== '0' ? 'block' : 'none'};
      }
      @media ${config.md} {
        width: ${cssWidths.md};
        display: ${cssWidths.md !== '0' ? 'block' : 'none'};
      }
      @media ${config.sm} {
        width: ${cssWidths.sm};
        display: ${cssWidths.sm !== '0' ? 'block' : 'none'};
      }
      @media ${config.xs} {
        width: ${cssWidths.xs};
        display: ${cssWidths.xs !== '0' ? 'block' : 'none'};
      }
    `
  }}
`
