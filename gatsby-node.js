exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
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
}