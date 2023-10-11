const path = require('path');

 module.exports = {
  entry: './src/index.js',
   output: {
    filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
   rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(jpg|jpeg|png|svg|gif)$/i,
      type: 'asset/resource'
    },
    {
      test: /\.(woff|woff2)$/i,
      type: 'asset/resource'
    }
   ],
  // devtool: 'inline-source-map',
  mode: "production"
 };