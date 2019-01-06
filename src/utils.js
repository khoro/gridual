export const WIDTH_RATIOS = {
  '1': 100
};

for(var i = 1; i <= 50; i++) {
  for (var j = 1; j <= i; j++) {
    WIDTH_RATIOS[j + '/' + i] = j * 100 / i;
  }
}
