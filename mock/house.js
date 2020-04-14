const Mockjs = require('mockjs');

//房源、楼盘数据列表
function getHouseList(req, res, u) {
  const MockData = Mockjs.mock({
    "code": 0,
    "message": "房源、楼盘的列表数据",
    "data": {
      "data|0-10": [
        {
          "houseId|+1": 111,
          "coverUrl": "https://pic2.58cdn.com.cn/nowater/fangfe/n_v2f170e454ac5f4c76a4f05330be26b79d.jpg",
          "title": Mockjs.Random.csentence(3, 10),
          "panshiId|+1": 1,
          "about": Mockjs.Random.csentence(3, 10),
          "salePrice|500-5000": 5000,
          "rentPrice|500-5000": 5000,
          "commission|500-5000": 5000,
          "commissionType|1-2": 1,
          'rentPriceUnit': '1.2元/m2/天',
          'changeHandsAward': '3000元', //成交奖励
          'takeLookAward': '300元带看', //带看奖励
          'claimedCount': "200人", //'认领人数',
          'expandCount': "123人", //'推广人数',
          'isClaimed|0-1': 0,
          'claimedTime': '2019-10-31',
          'contact': '18911948629'
        }
      ]
    }
  });
  return res.json(MockData);
}

//批量认领房源
function claimHouseBatch(req, res, u) {
  return res.json({
    "code": 0,
    "data": "",
    "message": "批量认领房源"
  });
}

//查询经纪人认领房源数量
function getCount(req, res, u) {
  return res.json({
    "code": 0,
    "data": 20,
    "message": "认领房源数量"
  });
}

//认领单个房源
function claimHouse(req, res, u) {
  return res.json({
    "code": 0,
    "data": "",
    "message": "认领单个房源"
  });
}

function claimFirst(req, res, u) {
  return res.json({
    "code": 0,
    "data": "1", //data=1首次认领 data=0非首次认领
    "message": "认领单个房源"
  });
}

module.exports = {
  getHouseList,
  claimHouseBatch,
  getCount,
  claimHouse,
  claimFirst
}