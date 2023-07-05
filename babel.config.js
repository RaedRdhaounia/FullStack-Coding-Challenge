module.exports = function(api) {
  api.cache(true);
  const presets = ['babel-preset-expo'];
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        "@genarators": ["./components/generator/index.ts"],
        "@others": ["./components/others/index.ts"],
        "@constants": ["./constants/index.ts"],
        "@hooks": ["./hooks/index.ts"],
        "@navigation": ["./navigation/index.ts"],
        "@screen": ["./screen/index.ts"],
        "@utils": ["./utils/index.ts"],
      },
    ],
  ];
  return {
    presets,
    plugins,
  };
};
