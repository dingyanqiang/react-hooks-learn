module.exports = {
  "projectName": "CoWorkingHouseClaim",
  "projectType": "react",//项目类型
  "styleType": "less",//Css编译类型
  "author": "dingyanqiang",
  "email": "dingyanqiang@58ganji.com",
  "codeType": "ts",
  "browserlist": [
    "last 4 version",
    //"> 10%",
    //"IE 9"
  ],
  "SPAcon": "mpa",
  //webpack相关配置
  "webpackConfig": {
    "entryPages": "src/pages/*", //指定所需页面*(vue|home)
    "port": "8080",
    "enableCommon": true,//开启提取公共代码
    //开启dll功能
    "enableDll": false,
    "dllArr": ['react','react-dom'],//开启Dll时，被打包到dll
    "cssModule": false,//开启CSSMoudule
    "proxy": false,//是否使用代理
    "minimize": true,//开启代码压缩
  }
}