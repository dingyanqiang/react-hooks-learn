import * as React from 'react';
import { projectEnvironment } from '@/constant';
import './index.less';

const host = projectEnvironment.host;


export default class Header extends React.Component<{hasNav: boolean}> {
  render() {
    if (this.props.hasNav) {
      return (
        <>
          <nav className="crumbs">
            <ol>
              <li className="crumb"><a href={`${host}/user/brokerhomeV2`} target="_blank">中国网络经纪人</a></li>
              <li className="crumb"><a href={`${host}/sydchug/list/sydc`} target="_blank">商业地产</a></li>
              <li className="crumb"><a href={`${host}/sydchug/kfs`} target="_top">业主房源</a></li>
              <li className="crumb">楼盘详情</li>
            </ol>
          </nav>
          <h1 className="title">楼盘详情</h1>
        </>
      )
    } else {
      return <h1 className="title">楼盘详情</h1>
    }
  }
}