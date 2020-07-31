// this webpack is only used for cosmos
// library build is done by tsc
module.exports = {
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.svg$/,
        use: "svg-react-loader",
      },
    ],
  },
};
