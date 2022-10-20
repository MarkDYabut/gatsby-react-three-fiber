exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /@react-three\/fiber/,
          use: loaders.null(),
        },
        {
          test: /@react-three\/postprocessing/,
          use: loaders.null(),
        },
        {
          test: /@react-three\/drei/,
          use: loaders.null(),
        },
        {
          test: /three/,
          use: loaders.null(),
        },
        {
          test: /postprocessing/,
          use: loaders.null(),
        },
      ],
    },
  })
}
