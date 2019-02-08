export const WIDTH_RATIOS = {
  '1': 100
};

for(var i = 1; i <= 50; i++) {
  for (var j = 1; j <= i; j++) {
    WIDTH_RATIOS[j + '/' + i] = j * 100 / i;
  }
}

export const SCREEN_TYPES = ['xl', 'lg', 'md', 'sm', 'xs'];

const reduceScreenType = (obj, type) => {
  const typeIndex = SCREEN_TYPES.findIndex(i => i === type);
  if (typeIndex < 0) return;
  return obj[type] || reduceScreenType(obj, SCREEN_TYPES[typeIndex + 1])
}

// generating xl, lg, md, sm, xs properties
export const reduceScreenTypes = obj => {
  const newObj = {};

  SCREEN_TYPES.forEach(type => {
    const item = reduceScreenType(obj, type);
    if (item !== undefined) newObj[type] = item;
  });

  return newObj;
}
