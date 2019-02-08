import styled from 'styled-components';
import config from './config';
import { reduceScreenTypes } from './utils';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ right, center }) => right ? 'flex-end' : center ? 'center' : 'unset'};
  align-items: ${({ bottom, middle }) => bottom ? 'flex-end' : middle ? 'center' : 'unset'};
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'unset'};

  ${({ gutter }) => {
    gutter = gutter || config.gutter;
    if (typeof(gutter) === 'number') gutter = { xl: gutter };

    gutter = reduceScreenTypes(gutter);

    return Object.keys(gutter).map(type => `
      @media ${config[type]} {
        margin-right: ${gutter[type] / -2}px;
        margin-left: ${gutter[type] / -2}px;

        > div {
          padding-left: ${gutter[type] / 2}px;
          padding-right: ${gutter[type] / 2}px;
        }
      }
    `).join('')
  }}
`
