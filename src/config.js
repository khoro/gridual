const config = {
  breakPoints: {
    xl: 9999999,
    lg: 1200,
    md: 992,
    sm: 768,
    xs: 576
  },
  maxWidth: '1180px',
  gutter: 30
}

export const configure = values => {
  Object.assign(config, values);

  for(let bp in config.breakPoints) {
    config[bp] = `(max-width: ${config.breakPoints[bp]}px)`;
  }
}

export default config;

configure({});
