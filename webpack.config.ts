import type { Configuration } from "webpack";

export default (
  _env: Record<string, string>,
  _args: string[],
): Configuration => ({
  entry: {
    main: "./src/index.js",
  },
  resolve: {
    extensions: [".js", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.m?(js|ts|tsx)$/i,
        exclude: /node_modules(?![\/\\]@openmrs)/,
        use: "swc-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              api: "modern-compiler",
              implementation: "sass-embedded",
            },
          },
        ],
      },
    ],
  },
});
