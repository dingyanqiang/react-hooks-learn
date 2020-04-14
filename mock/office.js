const Mockjs = require('mockjs');

module.exports = {
  districtInfoList,
  shangquanInfoList,
  searchoffices,
  allOffice,
  officeTag,
  office,
  dict,
  count
}


//城市区域列表
function districtInfoList(req, res, u) {
  return res.json({
    "code": 0,
    "data": [
      { "id": 1399, "name": "黄浦" },
      { "id": 1403, "name": "静安" },
      { "id": 1401, "name": "徐汇" },
      { "id": 1411, "name": "浦东" },
      { "id": 1402, "name": "长宁" },
    ],
    "message": "批量认领房源"
  });
}
//商圈列表
function shangquanInfoList(req, res, u) {
  return res.json({
    "code": 0,
    "data": [
      { "id": 7088, "name": "洞泾" },
      { "id": 7099, "name": "松江周边" },
      { "id": 7461, "name": "松江大学城" },
      { "id": 16141, "name": "泖港" },
      { "id": 7089, "name": "九亭" },
    ]
  });
}
//关键字搜索楼盘
function searchoffices(req, res, u) {
  return res.json({
    "code": 0,
    "data": [
      { "id": Math.random(), "name": "别名0" },
      { "id": Math.random(), "name": "别名1" },
      { "id": Math.random(), "name": "别名2" },
      { "id": Math.random(), "name": "别名3" },
      { "id": Math.random(), "name": "别名4" },
      { "id": Math.random(), "name": "别名6" },
      { "id": Math.random(), "name": "别名7" },
    ],
    "message": "批量认领房源"
  });
}

//全部楼盘列表
function allOffice(req, res, u) {
  const MockData = Mockjs.mock({
    "code": 0,
    "data": {
      "current": 1,
      "pageSize": 20,
      "total": 3,
      "data|1-10": [
        {
          "officeId|+1": 9892,
          "communityName": () => (Mockjs.Random.csentence(3, 10)), //"楼盘名称",
          "mobileType|1-3": 2, //" 电话类型，1：手机号码；2:400电话；3：座机号",
          //"奖励政策Json"
          "incentivePolicyVOList": {
            "type|1-2": 1,                  //Integer	类型，1：出租；2：出售	 
            "commission|+1": 23,	          //Long	佣金	 
            "bringRewardsNum": "1000元",	    //Integer	带看奖励	 
            "transactionAwardNum": "5000元",	//Integer	成交奖励	 
            "desc": "描述"             //String	说明
          },
          "cityName": "北京",
          "districtName": "朝阳",
          "businessName": "酒仙桥",
          "incentiveType": "2",//"奖励方式，0：无；1：出租；2：出售；3都有",
          "rentCommission": "6.5/M/天", //"出租佣金",
          "saleCommission": "230W", //"出售佣金",
          "coverUrl": "https://pic2.58cdn.com.cn/nowater/fangfe/n_v2f170e454ac5f4c76a4f05330be26b79d.jpg", //"封面图片",
          "houseAreaScope": "300-500m2", //"楼盘下房源建筑面积范围",
          "houseTotalNum": "50套",//"房源总套数",
          "money": "1.9", //"价格/租金",
          "houseRentType|1-3": 1, //"租售类别,1:出租；2：出售；3租售同盘",
          "businessContact|+1": 18911948629, //"招商电话",
          "developerName": ["恒大", "碧桂花", "万科", "万达", "首开"],//"开发商名称",
        }
      ]
    },
    "message": "批量认领房源"
  });
  return res.json(MockData);
}
//标签获取
function officeTag(req, res, u) {
  return res.json({
    "code": 0,
    "data": "",
    "message": "批量认领房源"
  });
}
//楼盘详情
function office(req, res, u) {
  return res.json({
    "code": 0,
    "data": { "aboveGroundFloor": null, "buildArea": 36000.0, "businessContact": "021-23456789", "communityAddress": "松花江路2539号", "communityFloor": 15, "communityName": "复旦大学国家大学科技园科技创新基地", "coverUrl": "https://pic1.ajkimg.com/display/58ajk/31a0bcb838cb473c09aab3419e9d1005/120x120c.jpg?t=1", "developerName": "复旦大学", "distributeHouseNum": 1, "houseRentType": 3, "houseTotalNum": 6, "incentivePolicyVOList": [{ "bringRewardsNum": 200, "commission": 9.99, "desc": "写字楼租赁奖励说明", "transactionAwardNum": 800, "type": 1 }, { "bringRewardsNum": 1200, "commission": 19.99, "desc": "售卖---写字楼奖励说明", "transactionAwardNum": 1800, "type": 2 }], "incentiveType": 3, "mobileType": 2, "money": null, "officeId": 8, "pictureList": [{ "coverUrl": null, "fileName": "美式厨房.jpg_1576469733216", "hash": "31a0bcb838cb473c09aab3419e9d1005", "host": 1, "isCover": 1, "resourceType": 0, "sort": 1, "type": 16, "url": "https://pic1.ajkimg.com/display/58ajk/31a0bcb838cb473c09aab3419e9d1005/120x120c.jpg?t=1" }, { "coverUrl": null, "fileName": "1.jpg_1576469738149", "hash": "e2d7baf93ea8996b034a5bc5d6b0b4af", "host": 1, "isCover": 0, "resourceType": 0, "sort": 1, "type": 16, "url": "https://pic1.ajkimg.com/display/58ajk/e2d7baf93ea8996b034a5bc5d6b0b4af/120x120c.jpg?t=1" }, { "coverUrl": null, "fileName": "2.jpg_1576469738510", "hash": "28885dd76314d13392c50556ed97a9f7", "host": 1, "isCover": 0, "resourceType": 0, "sort": 2, "type": 16, "url": "https://pic1.ajkimg.com/display/58ajk/28885dd76314d13392c50556ed97a9f7/120x120c.jpg?t=1" }], "propertyFee": 162000.0, "propertyName": "上海金文物业管理有限公司", "rentCommission": 10.0, "roomRate": 70.0, "saleCommission": 20.0, "tablist": ["标准写字楼", "近地铁", "多轨交", "甲级", "文化创意"], "underGroundFloor": null, "videoList": [{ "coverUrl": "https://wos2.58cdn.com.cn/JkLgFeDcBJPm/fuxicover/1576836002405_39687.cover.jpg", "fileName": "1576836002405_39687.mp4", "hash": null, "host": 0, "isCover": 0, "resourceType": 1, "sort": 1, "type": 0, "url": "https://wos2.58cdn.com.cn/JkLgFeDcBJPm/fuxitransform/1576836002405_39687.transform.mp4" }] },
    "message": null
  });
}
//获取字典值
function dict(req, res, u) {
  return res.json({
    "code": 0,
    "data": [{
      "key": null,
      "value": "不限"
    },
    {
      "key": null,
      "value": "210-270元/㎡/月"
    },
    {
      "key": null,
      "value": "270-360元/㎡/月"
    },
    {
      "key": null,
      "value": "360元/㎡/月以上"
    }
    ],
    "message": null
  });
}
//获取城市区域 商圈 楼盘数量统计
function count(req, res) {
  return res.json({
    "code": 0,
    "data": {
      cityId: 12345,
      districtCount: 1111,
      businessCount: 2222,
      communityCount: 3333,
    },
    "message": null
  });
}