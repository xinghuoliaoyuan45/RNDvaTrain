
/***************
 * 环境配置
 * ps:热更新相关内容请查看 README.md
 */
/***** 开发环境 */
export const server = 'http://www.bhaupu.polyhome.net/mobile';
export const iosCodePushKey = 'w4B8jK8aHK3SGPhLKnjEzeCo4OcE0a87674c-e589-4854-9df4-a6e6c70de9da'
export const androidCodePushKey = 'i_f3V-u6k-_SszjE0LCAwsqC7bed0a87674c-e589-4854-9df4-a6e6c70de9da'
export const shareServer = 'http://aupu.polyhome.net'; // 产品、案例加载h5地址
export const wxAppId = 'wxf25c6e8a5fc7f20a'; // 微信AppId
export const downLoadAppUrl = 'https://www.pgyer.com/mkdE';//测试老订单地址

/***** 测试环境 */
// export const server = 'http://114.112.96.30:25022/mobile';
// export const server = 'http://aupu.polyhome.net/mobile';
// export const iosCodePushKey = 'w4B8jK8aHK3SGPhLKnjEzeCo4OcE0a87674c-e589-4854-9df4-a6e6c70de9da'
// export const androidCodePushKey = 'i_f3V-u6k-_SszjE0LCAwsqC7bed0a87674c-e589-4854-9df4-a6e6c70de9da'
// export const shareServer = 'http://aupu.polyhome.net'; // 产品、案例加载h5地址
// export const wxAppId = 'wxf25c6e8a5fc7f20a'; // 微信AppId
// export const downLoadAppUrl = 'https://www.pgyer.com/mkdE';//测试老订单地址

/***** 正式环境*/
// export const server = 'http://retail.aupu.net:81/mobile';

// export const server = 'http://101.37.107.16/mobile';
// export const iosCodePushKey = 'jJvzdLqsnUWOfhi4DQeU9mhEe84d0a87674c-e589-4854-9df4-a6e6c70de9da'
// export const androidCodePushKey = 'nP8K2EzPH8t2XQ3OndtpvQAjiiAK0a87674c-e589-4854-9df4-a6e6c70de9da'
// export const shareServer = 'http://101.37.107.16:80'; // 产品、案例加载h5地址
// export const wxAppId = 'wx836b7bb29beebc2f'; // 微信AppId
// export const downLoadAppUrl = 'https://www.pgyer.com/0Ak2';//正式老订单地址
/*****
 * todo: 测试中，暂时不用
 * 自动设置环境变量
 * 暂时仅在开发阶段可用
 *
 * 使用方法：
 * ENVFILE=.env.staging react-native run-ios
 * ENVFILE=.env.staging react-native run-android
 * */
// export const server = Config.API_SERVER;

export const assetsServer = server.replace(/\/mobile/, '');
export const rongjuServer = 'http://api.yuman.polyhome.net';//容居附件接口


export const API = {

  /***************奥普浴霸***********************/
  //门店模块
  storeManager: {
    storeStatisticalNumber: server + '/api/v1/bh/statistics/terminal/scale',
    storeList: server + '/api/v1/bh/sos/store/terminalinfo/list',
    getDeptsNameInDeptS: server + '/api/v1/us/dept/dept/getDeptsNameInDeptS',//机构
    storeDetail: server + '/api/v1/bh/sos/store/terminalinfo/getBhSysTerminal',
    tongjiStore: server + '/api/v1/bh/statistics/terminal/distribution',//统计分布
    getLatLngStore: server + '/api/v1/bh/sos/order/getLatLngStore',//获取周边门店
  },
  //客户模块
  customerManager: {
    customerList: server + '/api/v1/bh/pc/customer/list',
    addCustomer: server + '/api/v1/bh/pc/customer/add',
    customerDetail: server + '/api/v1/bh/pc/customer/coustomer/info',
    updateCustomer: server + '/api/v1/bh/pc/customer/update',
    selectStoreActivites: server + '/api/v1/bh/act/sos/activity/selectStoreActivites',
    placeOrderProduct: server + '/api/v1/bh/pc/product/list',
    addorder: server + '/api/v1/bh/sos/order/addorder',//新增订单
    getRelationList: server + '/api/v1/bh/pc/customer/getRelationList',//代理商下的门店
    findDeptUserList: server + '/api/v1/bh/pc/customer/findDeptUserList',//代理商下的门店的代购
  },
  //订单模块
  orderManager: {
    orderList: server + '/api/v1/bh/sos/order/getStoreOrderList',
    cancelOrder: server + '/api/v1/bh/sos/order/cancelOrder',
    getStoreOrder: server + '/api/v1/bh/sos/order/getStoreOrder',
  },


  // 登录
  login: server + '/api/v1/us/users/login',
  // 登出
  logout: server + '/api/v1/us/users/logout',
  // 登录网页版
  webLoginConfirm: server + '/api/v1/us/qrcode/token/create',
  // 版本更新
  versionCheck: server + '/api/v1/common/appversion/getNewVersion',
  //更新用户在线状态
  updateUserStatus: server + '/api/v1/us/users/update/user/status',
  //更新用户默认回复语
  updateUserAnswer: server + '/api/v1/us/users/addAnswerCodes',
  //展示标签
  showTheLabel: server + '/api/v1/us/labels/users/list',
  //保存个人标签
  modifyDesc: server + '/api/v1/us/users/modifyDesc',
  //意见反馈
  addFeedback: server + '/api/v1/us/users/addFeedback',

  //会话用户列表
  loadSessionUserList: server + '/api/v1/cus/app/findRingUserInfoByRingNames',

  //客户聊天记录
  findCustomerChatLogList: server + '/api/v1/cus/web/findCustomerChatLogList',


//获取部门树
  getDeptTree: server + '/api/v1/us/depts/stores/treelist',
  //通过id获取部门
  getDeptById: server + '/api/v1/us/depts/get',
  //获取部门列表
  getDeptList: server + '/api/v1/us/depts/list',
  //添加部门
  addDept: server + '/api/v1/us/depts/add',
  //添加经销商
  addDealer: server + '/api/v1/us/dealer/add',
  //修改部门
  updateDept: server + '/api/v1/us/depts/modify',
  //删除部门
  deleteDept: server + '/api/v1/us/depts/delete',
  //通过门店ID获取部门列表
  getAssociatedDeptsByStoreId: server + '/api/v1/us/stores/depts/list',
  //通过部门ID获取用户列表
  getUserListByDeptId: server + '/api/v1/us/depts/users/list',

  //获取部门直属的员工和子部门
  getDirectChildDeptAndUser: server + '/api/v1/us/dept/directchild',

  //获取门店列表
  getStoreList: server + '/api/v1/us/stores/list',
  //通过id获取门店
  getStoreById: server + '/api/v1/us/stores/get',
  // 通过用户ID查询门店列表
  getAssociatedStoreByUserId: server + '/api/v1/us/users/stores/list',
  //添加附件
  addAttachment: server + '/api/v1/common/attachment/add',
  //添加附件
  addAttachmentReturn: server + '/api/v1/common/attachment/addReturn',

  //获取业务附件关联列表
  getFilesList: server + '/api/v1/common/bizattachment/list',

  /**
   * 查询部门关联门店
   * @example request body
   * {
   *  id: 0 //部门id
   * }
   */
  getAssociatedStoreByDeptId: server + '/api/v1/us/depts/stores/list',
  //添加门店
  addStore: server + '/api/v1/us/stores/add',
  //修改门店
  updateStore: server + '/api/v1/us/stores/modify',
  //删除门店
  deleteStore: server + '/api/v1/us/stores/delete',

  /**
   * 根据门店查询用户
   * @example request body
   * {
   *  "id": 0
   * }
   */
  getUserListByStoreId: server + '/api/v1/us/stores/users/list',
  //获取用户列表
  getUserList: server + '/api/v1/us/users/list',
  //通过id获取用户
  getUserById: server + '/api/v1/us/users/get',
  //添加用户
  addUser: server + '/api/v1/us/users/add',
  //修改用户
  updateUser: server + '/api/v1/us/users/modify',
  //删除用户
  deleteUser: server + '/api/v1/us/users/batchdelete',
  //修改密码
  updateUserPassword: server + '/api/v1/us/users/password/modify',
  //重置密码
  resetUserPassword: server + '/api/v1/us/users/password/reset',

//获取导购列表
//   getSalesList: server + '/api/v1/us/users/sales/list',

//获取业务员列表
  getSalesManList: server + '/api/v1/us/users/salesman/list',


//获取设计师列表
  getDesignerList: server + '/api/v1/us/users/designer/list',

//获取家装设计师列表
  getHomeDesignerList: server + '/api/v1/cs/customer/homeDesignerInfos/list',


  //将多个角色关联到一个用户
  assignRolesToUser: server + '/api/v1/us/users/roles/modify',

  assignUsersToRole: server + '',

  //将多个用户关联到一个机构
  assignUsersToDept: server + '/api/v1/us/depts/users/associated',
  //将多个门店关联到一个机构
  assignStoresToDept: server + '/api/v1/us/depts/stores/associated',
  //将多个机构关联到一个门店
  assignDeptsToStore: server + '/api/v1/us/stores/depts/associated',
  //将多个用户关联到一个门店
  assignUsersToStore: server + '/api/v1/us/stores/users/associated',
  //将多个门店关联到一个用户
  assignStoresToUser: server + '/api/v1/us/users/stores/associated',
  //将多个机构关联到一个用户
  assignDeptsToUser: server + '/api/v1/us/users/depts/associated',

  //获取角色列表
  getRoleList: server + '/api/v1/us/roles/list',
  //添加角色
  addRole: server + '/api/v1/us/roles/add',
  //修改角色
  updateRole: server + '/api/v1/us/roles/modify',
  //删除角色
  deleteRole: server + '/api/v1/us/roles/delete',

  //获取资源列表
  getResourceList: server + '/api/v1/us/resources/list',
  //添加资源
  addResource: server + '/api/v1/us/resources/add',
  //修改资源
  updateResource: server + '/api/v1/us/resources/update',
  //删除资源
  deleteResource: server + '/api/v1/us/resources/delete',

  //角色权限
  getRoleResourceList: server + '/api/v1/us/roles/resources/list',
  //修改角色权限
  updateRoleResource: server + '/api/v1/us/roles/resources/modify',

  //获取标签列表
  getTagList: server + '/api/v1/us/labels/users/list',
  //添加标签
  addTag: server + '/api/v1/us/labels/add',
  //修改标签
  updateTag: server + '/api/v1/us/labels/update',
  //删除标签
  deleteTag: server + '/api/v1/us/labels/delete',

  //获取字典列表
  getDictList: server + '/api/v1/us/dicts/list',
  //获取字典列表
  getDictListByTypeCode: server + '/api/v1/us/dicts/typecode/list',
//添加字典
  addDict: server + '/api/v1/us/dicts/add',
  //修改字典
  updateDict: server + '/api/v1/us/dicts/modify',
  //删除字典
  deleteDict: server + '/api/v1/us/dicts/delete',
  // POST /api/v1/us/dicts/typecode/list


  /**
   * 省市县
   */
  getDivisionList: server + '/api/v1/us/basedivision/list',
  /**
   * 小区
   */
  getRegionList: server + '/api/v1/common/baseregion/list',
  getQueryRegionList: server + '/api/v1/common/baseregion/query/region/list',


  //奥普

  //获取资源列表
  getUserResourceList: server + '/api/v1/us/users/resources/list',

  getCustomerList: server + '/api/v1/cus/app/findCustomerInfoList',//系统分组（客户列表）
  loadCustomerGroupAndList: server + '/api/v1/cus/app/findCustomerInfoGroupList',//个人分组（客户列表）
  loadUserInfoDictList: server + '/api/v1/cus/app/findUserInfoDictList',//新增编辑客户详情选项数据集合
  addCustomer: server + '/api/v1/cus/app/addCustomerInfo',//新增客户
  getSalesList: server + '/api/v1/cus/app/findDeptUserList',//获取导购列表
  getCustomerGroupList: server + '/api/v1/cus/app/findUserGroupList',//分组列表
  addCustomerGroup: server + '/api/v1/cus/app/addCustomerGroup',//添加分组
  updateCustomerGroup: server + '/api/v1/cus/app/updateCustomerGroup',//修改分组
  deleteCustomerGroup: server + '/api/v1/cus/app/deleteCustomerGroup',//删除分组
  loadCustomerSystemGroupAndList: server + '/api/v1/cus/app/findCustomerInfoAllList',//系统分组（客户分组和所有人的列表）
  addCustomerMass: server + '/api/v1/cus/app/addCustomerMass',//群发
  loadGrabPoolList: server + '/api/v1/cus/app/findCustomerGrabList',//抢单池列表
  loadPotentialPoolList: server + '/api/v1/cus/app/findCustomerPotentialList',//潜客池列表
  loadPoolInfo: server + '/api/v1/cus/app/findGrabPotentialCount',//线索池信息
  grabCustomerInPool: server + '/api/v1/cus/app/receiveCustomerGrab',//抢单
  receiveCustomerInPotential: server + '/api/v1/cus/app/receiveCustomerPotential',//潜客池接待客户
  sendCustomerMessage: server + '/api/v1/cus/app/addAppChatlog',//向客户发送消息
  loadTodoList: server + '/api/v1/cus/app/findCustomerInfoListByDisposeCount',//待办事项

  /**
   * 客户模块
   */


// getCustomerList: server + '/api/v1/cs/customerStores/list',
  getCustomerById: server + '/api/v1/cs/customerStores/get',
  // addCustomer: server + '/api/v1/cs/customerStores/add',
  addCustomerOrder: server + '/api/v1/os/baseorder/add',

  //修改客户
  updateCustomer: server + '/api/v1/cs/customerStores/modify',
  //删除客户
  deleteCustomer: server + '/api/v1/cs/customerStores/delete',
  //变更导购
  addCustomerSaleChangeRecord: server + '/api/v1/cs/customersaleschange/add',
  //导购变更列表
  getCustomerSalesChangeList: server + '/api/v1/cs/customersaleschange/select',
  //客户来源变更列表
  getCustomerSourceChangeList: server + '/api/v1/cs/customer/customerSourceChangeRecords/list',
  //客户地址变更记录列表
  getCustomerAddressChangeRecordList: server + '/api/v1/cs/customer/customerAddressChangeRecords/list',
  // //分组列表
  // getCustomerGroupList: server + '/api/v1/cs/groups/list',
  //通过分组ID获取客户
  getCustomerByGroupId: server + '/api/v1/cs/groups/selectById',
  //通过key获取客户
  getCustomerByKey: server + '/api/v1/cs/groups/selectByKey',
  // //添加分组
  // addCustomerGroup: server + '/api/v1/cs/groups/add',
  // //修改分组
  // updateCustomerGroup: server + '/api/v1/cs/groups/modify',
  // //删除分组
  // deleteCustomerGroup: server + '/api/v1/cs/groups/delete',
  //分配客户到分组
  assignCustomersToGroup: server + '/api/v1/cs/groups/addCustomer',
  //客户跟进列表
  getCustomerFollowRecordList: server + '/api/v1/cs/customerFollowRecords/list',
  //添加客户跟进记录
  addCustomerFollowRecord: server + '/api/v1/cs/customerFollowRecords/add',

  customer: {
    //获取客户详情
    getCustomerDetail: server + '/api/v1/cus/app/findCustomerInfo',
    //添加客户跟进
    addFollow: server + '/api/v1/cus/app/addCustomerFollow',
    //设置提醒时间
    setCustomerFollowHint: server + '/api/v1/cus/web/setCustomerFollowHint',
    //删除跟进记录
    deleteCustomerFollow: server + '/api/v1/cus/app/deleteCustomerFollow',
    //查找客户跟进列表
    getFollowLogList: server + '/api/v1/cus/app/findCustomerFollowList',
    //获取客户足迹列表
    getFootprintList: server + '/api/v1/cus/app/findCustomerTrackList',
    //编辑客户信息
    updateCustomer: server + '/api/v1/cus/app/updateCustomerInfo',
  },

  /**
   * 同事模块
   */
  //获取同事列表
  // getColleagueList: server + '/api/v1/us/users/list',
  //组织架构
  // getOrganList: server + '/api/v1/us/depts/stores/treelist',


  /**
   * 消息模块
   */
//系统通知--奥普系统通知列表公告
  getAopuNotifyList: server + '/api/v1/common/notify/AppFindMyAllNotifyList',

//系统通知--我的公告
  getSystemNotifyList: server + '/api/v1/common/notify/AppFindMyAllNotifyList',
  //系统通知--我的已读
  getReadSystemNotifyList: server + '/api/v1/common/notify/AppFindMyReadNotifyList',
  //系统通知--我的未读
  getUnReadSystemNotifyList: server + '/api/v1/common/notify/AppFindMyUnreadNotifyList',
  //系统通知--删除系统通知
  deleteSystemNotify: server + '/api/v1/common/notify/deleteRecord',
  //系统通知--获取系统通知详情
  getSystemNotify: server + '/api/v1/common/notify/read',
  //系统通知--增加系统通知
  addSystemNotify: server + '/api/v1/common/notify/add',

  //业务通知： firstType: MSG，其他不用传
  //超期提醒： firstType:WAITLIST,  secondType: ORDER_EXP(下单超期)， （MEASURE_EXP）(测量超期))
  getBusinessNotifyList: server + '/api/v1/common/findMyUnRead',
  //设置业务通知、超期提醒 已读
  setBusinessNotifyRead: server + '/api/v1/common/read',
  //删除业务通知、超期提醒
  deleteBusinessNotify: server + '/api/v1/common/delete',
  //业务通知--增加业务通知
  addBusinessNotify: server + '/api/v1/common/easemob/sendTextMsg',


  /**
   * 容居附件图片接口
   */

  selectByCustomerId: server + '/api/v1/cs/customer/customerSchemes/selectByCustomerId',//根据客户id查询客户方案关联表数据

  rongjuAttchsImage: server + '/api/v1/os/baseorder/schemes/allPictures',//获取多个方案的效果图


  //附件列表
  AttachmentList: {
    select: server + '/api/v1/common/bizattachment/list', //不同业务列表 参数不同 (销售、收费、测量、设计师、送货、安装、售后)
    delete: server + '/api/v1/common/bizattachment/batchdelete',
    save: server + '/api/v1/common/bizattachment/add',
    saveMulist: server + '/api/v1/common/bizattachment/addmulit',//附件管理 多种文件上传
    upload: server + '/api/v1/common/attachment/add',//文件上传
    typeCodeList: server + '/api/v1/us/dicts/typecode/list',//根据类型编码查询字典列表
  },


  /*业务系统--预派测量模块*/
  //1、获取预派测量列表
  getMeasureList: server + '/api/v1/os/ordmeasure/list',
  //2、测量任务详情(无用，因为跟测量汇报的第3个接口相同)
  getDetails: server + '/api/v1/os/ordmeasure/details',
  //3、预派测量
  addDesignerChangeRecord: server + '/api/v1/os/ordmeasure/add',
  //4、变更测量
  updateDesignerChangeRecord: server + '/api/v1/os/ordmeasure/orddesignerrecord/add',
  //5、变更记录(预派设计师、变更设计师中的变更记录列表)
  getDesignerChangeRecordList: server + '/api/v1/os/ordmeasure/orddesignerrecord/list',


  /*业务系统--测量汇报模块*/
  //1、获取测量汇报列表
  getMeasureReportList: server + '/api/v1/os/measure/list',
  //2、添加初测汇报
  addFirstMeasure: server + '/api/v1/os/measure/report/add',
  //3、测量管理对话框中的测量汇报列表(初测复测同样的接口)
  getFirstMeasureList: server + '/api/v1/os/measure/report/list',
  //4、添加复测汇报
  addSecondMeasure: server + '/api/v1/os/measure/secondreport/add',
  //5、添加上门时间
  addModifyVisitRecordTime: server + '/api/v1/os/measure/visittime/add',
  //6、修改上门时间对话框中的上门测量记录列表
  getModifyVisitTimeRecordList: server + '/api/v1/os/measure/visittime/list',


  //=========================================奥普===========================================
  /*通讯录模块*/
  //获取同事列表
  getColleagueList: server + '/api/v1/us/users/layer/list',
  //获取组织架构列表
  getOrganizationList: server + '/api/v1/us/depts/stores/treelist',


  findCardInfo: server + '/api/v1/cus/app/findCard',


  //签单捷报列表
  getSignOrderList: server + '/api/v1/mg/home/querySignBillReport',
  //新增日行动目标 （晨会）
  addActionTarget: server + '/api/v1/work/addActionObjectives',
  //更新日行动目标 （夕会）
  updateActionTarget: server + '/api/v1/work/updateActionObjectives',
  //日行动目标历史
  historyActionTarget: server + '/api/v1/work/queryActionObjectives',
  //加载首页 签单捷报、本月回款、日行动目标
  loadHomePageData: server + '/api/v1/mg/home/loadHomePageData',
  // 本月回款额 详情
  loadRepaymentList: server + '/api/v1/mg/home/queryMonthReceipt',
  // 待处理客户数量
  loadDisposeCustomerCount: server + '/api/v1/cus/app/findCustomerInfoListByDisposeCount',


  /*  根据客户id查询报价单列表 */
  searchOfferOrderOfCus: server + '/api/v1/cus/app/queryCustomerQuotationList',
  //基于客户添加新的报价单
  addNewQuoteOrder: server + '/api/v1/cus/app/addCustomerQuotation',
  /*  新增预订单(已废弃，根据status参数区分订单、预订单)  */
  // addNewAdvanceOrder: server + '/api/v1/order/orderForm/addChargeInfo',
  /*  新增订单  */
  addNewOrder: server + '/api/v1/order/addOrder',

  //根据客户查询定金单（已废弃，根据status参数区分订单、预订单）
  // searchEarnestOfCus: server + '/api/v1/order/orderForm/queryChargeInfo',
  //根据客户查询订单
  searchOrderofCus: server + '/api/v1/order/queryOrderList',


  //找回密码-发送短信验证码
  sendVerificationCode: server + '/api/v1/us/users/sms/sendVerificationCode',
  //找回密码-保存接口
  updatePassword: server + '/api/v1/us/users/sms/updatePassword',


  //培训模块
  train: {
    getLoadTrainListList: server + '/api/v1/bh/trainnotice/train/appTrainListForMe',
    loadTrainDetail: server + '/api/v1/bh/trainnotice/train/details',
  },

  //活动模块
  activity: {
    getLoadActivityListList: server + '/api/v1/bh/act/sos/activity/getAppActivityList',//请求活动列表
    loadActivityDetail: server + '/api/v1/bh/act/sos/activity/getActivity',//请求活动详情
    loadAllOrganizationList: server + '/api/v1/us/depts/stores/treelist',//请所有求机构列表
    loadOrganizationList: server + '/api/v1/bh/act/sos/activity/getDepts',//分级请求机构列表
    getTargtDetail: server + '/api/v1/bh/act/sos/activity/getDeptAim',//目标详情
    confirmTargt: server + '/api/v1/bh/act/sos/activity/addAim',//提交指标
    getGoodsKindList: server + '/api/v1/bh/act/sos/activity/selectAppCategorList',//获取品类列表
    confirmGoodsKindList: server + '/api/v1/bh/act/sos/activity/addActivityCategory',//提交品类列表
    loadTargetRankDetail: server + '/api/v1/bh/act/sos/activity/selectCateWcl',//获取指标概览详情


  },

  //通用接口
  loadAttachmentList: server + '/api/v1/common/bizattachment/list',//获取附件列表


};
