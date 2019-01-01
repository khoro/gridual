export const BREAKS_POINTS = {
  xl: 9999999,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576
}

const breakPointCss = {};

for(let breakPoint in BREAKS_POINTS) {
  breakPointCss[breakPoint] = `(max-width: ${BREAKS_POINTS[breakPoint]}px)`;
}

export const xs = breakPointCss.xs;
export const sm = breakPointCss.sm;
export const md = breakPointCss.md;
export const lg = breakPointCss.lg;
export const xl = breakPointCss.xl;
