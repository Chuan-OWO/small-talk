//從第一支程式 所以JS匯入 你要的檔案 =>進入點
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path"); //匯入path 模組
console.log(__dirname);//確認進入點路徑
//require 匯入匯出語法 path node.js語法  path 路徑的意思

module.exports = {
    entry:'./main.js',//進入點
    output:{
        filename:'bundle.[hash].js',
        //_dirname 取得程式執行位置的實際路徑
        //C:\Users\iii\20220330\small-talk (開始)
        path: path.resolve(__dirname,'dist')
        //C:\Users\iii\20220330\small-talk\dist (結果)
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./template.html', //指定檔案
        //filename:'./site.html', //設定成這個檔案名字
        abc:'webpack demo123', //
        inject:'body'
    })],
    devServer:{
        port:9000,
        open:true
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            }
        ]
    }
    
}