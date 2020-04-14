export interface IncentivePolicyVO {
  bringRewardsNum: number,
  commission: number,
  desc: string,
  transactionAwardNum: number,
  type: number
}

export interface ResourceVO {
  // urlt: string, //图片或视频地址	 
  // sort: number, //图片或视频位置排序	 
  // resourceType: number, //Integer	 0-图片 1-视频 资源类型	 
  // type: number, //nteger图片类型	 
  // isCover: number,	//是否是封面 0:否 1:是	 
  // coverUrl: string,	//视频封面url地址	 
  // fileName: string, //文件名	 
  // hash: string	//图片hash地址	 
  // host: string //
  url: string,
  sort: number,
  resourceType: 0 | 1,
  type: number,
  isCover: 0 | 1,
  coverUrl: string,
  fileName: string,
  hash: string,
  host: number,
}


export interface OfficeBase {
  tablist?: string[]
  aboveGroundFloor?: any
  buildArea?: number
  businessContact?: string
  communityAddress?: string
  communityFloor?: number
  communityName?: string
  coverUrl?: string | null
  pictureList? : ResourceVO[]
  videoList? : ResourceVO[]
  developerName?: string
  houseTotalNum?: number
  houseRentType?: number
  incentiveType?: number
  mobileType?: number
  money?: null
  officeId?: number
  propertyFee?: number
  propertyName?: null
  rentCommission?: number
  roomRate?: number
  saleCommission?: number
  underGroundFloor?: null
  cityShortName?: string
}

export interface OfficeData extends OfficeBase {
  incentivePolicyVOList: IncentivePolicyVO[]
  pictureList?: ResourceVO[] | null
  videoList?: ResourceVO[] | null
}

export interface StateType {
  loading: boolean,
  officeData: OfficeData,
  defaultSortData?: object,
  // searchParams?: object,
  // siteIds: string[],
  // dataSource: object[]
}