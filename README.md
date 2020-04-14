# 一二手联动--三网后台

## 页面
* houseList 开发商房源列表
* houseDetail 楼盘详情页
* officeHouseList 写字楼房源列表页



## 环境

* 三网首页地址：http://vip.anjuke.com/user/brokerhomeV2
* 商业地产房源库地址：http://vip.anjuke.com/sydchug/list/sydc

## README
* 添加 'file-handler-loader': Done
* 环境支持image引用本地图片: TODO
    * 解决方案: 运用webpack-copy插件, 使http://shangban.jikejia.cn:8080/assets/imgs/telephone.png地址有效
* 本地开发环境替换成ff: TODO

* 问题
    * Post请求问题
    stringify转成成string,会是Axios发送FormData; 
    Json格式发送PayLoad格式, 
	且优先级大于instance|axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
