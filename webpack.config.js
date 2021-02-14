const taskNumber = "05";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: `./${taskNumber}/app.js`,

    output: {
        path: path.resolve(__dirname, "build"),
   
        filename: "app.min.js"
  
    },
    module: {
        rules: [
            {
                test: /\.js$/,
      
                exclude: /node_modules/,
           
                use: ["babel-loader", "eslint-loader"],
 
            }, 
            {
                test: /\.css$/i,
             
                use: [
                    'style-loader',
          
                    'css-loader', 
            
                ],
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `./${taskNumber}/index.html`,
     
            filename: "index.html"
          
        })
    ]
};

