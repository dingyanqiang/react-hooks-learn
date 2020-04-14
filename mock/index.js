const delay = require('mocker-api/utils/delay');
const noProxy = process.env.NO_PROXY === 'true';


const { getHouseList, claimHouseBatch, claimHouse, claimFirst, getCount} = require('./house');
const { districtInfoList, shangquanInfoList, searchoffices, allOffice, officeTag, office, dict, count} = require('./office');


// 测试环境 http://192.168.35.225:8001

const proxy = {
  // Priority processing.
  _proxy: {
    proxy: {
      '/house/': 'http://192.168.20.136:8001/',
      '/office/(.*)': 'http://192.168.20.136:8001/',
    },
    changeHost: true,
  },
  'GET /office/districtInfoList': districtInfoList,
  'GET /office/shangquanInfoList': shangquanInfoList,
  'GET /office/searchoffices': searchoffices,
  //房源
  'POST /house/getHouseList': getHouseList,
  'GET /house/claimHouseBatch': claimHouseBatch,
  'GET /house/getCount': getCount,
  'GET /house/claimHouse': claimHouse,
  'GET /house/getClaimFirstFlag': claimFirst,
  //楼盘
  'POST /office/allOffice': allOffice,
  'GET /officeTag': officeTag,
  'GET /office': office,
  'GET /office/dict': dict,
  'GET /office/count': count,

}

module.exports = (noProxy ? {} : delay(proxy, 1000));

//module.exports = proxy;