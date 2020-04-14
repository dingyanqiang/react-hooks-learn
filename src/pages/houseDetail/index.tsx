import '@/polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import { postMessage } from '@/utils/tools';

import Context from '@/components/Context/index';
import { fetchPost } from '@/services/index';

import { StateType } from './Interface';

import './index.less';

let params: object = new URLSearchParams(location.search);
const contextData = {
  token: (params['token'] && `${params['token']}`) || '',
  officeId: (params['officeId'] && `${params['officeId']}`) || '',
  panshiId: (params['officeId'] && `${params['officeId']}`) || '',
  searchType: 1,
  leaseType: 0,
  from: 1//业主房源(所有经纪人房源) 2.开发商绑定经纪人房源
};

class App extends React.Component<{}, StateType>{

  constructor(props, context, updater) {
    super(props, context);

    this.state = {
      loading: false,
      officeData: {
        incentivePolicyVOList: []
      }
    }
  }

  componentDidMount() {
    this.fetchData(contextData);
    postMessage();
  }

  async fetchData(params: object) {
    const res = await fetchPost(params);
    const officeData = res.data;
    // if(officeData.houseRentType == 2) contextData['leaseType'] = 2;

    if (!officeData) return;

    contextData['leaseType'] = officeData.houseRentType;
    this.setState({
      officeData
    }, () => {
      postMessage();
    });
  }
  // 更改筛选项
  changeSearchKey = (params): void => {
    if (params.pageNum === undefined) {
      params.pageNum = 1
    }
  }

  render() {
    const { loading, officeData } = this.state;
    const { incentivePolicyVOList, ...baseData } = officeData;
    
    return (
      <div className="container">
        <Context.Provider value={contextData}>
          I Love React
          {
            contextData.leaseType
          }
        </Context.Provider>
      </div>
    )
  }

}
hot(module)(App)
ReactDOM.render(<App />, document.getElementById('root'))