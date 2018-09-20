const React = require('react-native');

export default {
  DEFAULT_GROUP_ID: 0,//默认群组Id
  DEFAULT_GROUP_NAME: "默认分组",//默认群组名称

  NAME_LENGTH_LIMIT: 15, //名字长度限制 中文占两个字节，设置为30时，添加客户中使用中文报错
  // SEARCH_LENGTH_LIMIT:15,
  REMARK_LENGTH_LIMIT: 200,   //输入框长度限制


  /*门店类型   1=非家装 2=家装 */
  STORE_TYPE_NOHOME: 1,
  STORE_TYPE_HONE: 2,

  /*客户来源类型   1=自然来源 2=家装推荐 3:家装设计师推荐 4：外部推荐 5 渠道客户 */
  CUSTOMER_SOURCE_NORMAL: '1',
  CUSTOMER_SOURCE_HOME: '2',
  CUSTOMER_SOURCE_DESIGNER: '3',
  CUSTOMER_SOURCE_OUTER: '4',
  CUSTOMER_SOURCE_CHANNEL: '5',

  /* 客户类型 */
  CUSTOMER_TYPE_POTENTIAL: 0, //潜在客户
  CUSTOMER_TYPE_INTENTION: 1, //意向客户
  CUSTOMER_TYPE_DEPOSIT: 2, //定金客户
  CUSTOMER_TYPE_DEAL: 3, //成交客户
  CUSTOMER_TYPE_OLD: 4, //老客户

  DEFAULT_PAGE_SIZE: 10,//每页默认请求的数量


  /********** 角色：根据登录获得的：labelIds 判断 *************/
  /**  1 导购     2 店长     3 设计师   4 设计总监   5 安装工   6 折扣特批   7 工期特批   8 业务员   9 家装店长    10 家装业务员   11 销售助理
   **  12 家装对接人   13 家装总监   14 审单员   15 下单员   16 经销商财务   17 总部财务   18 储运调度    19 库管  20 送货员   21 安装调度   22 客服
   **  23 售后主管    24 售服员    25 定责   26 总经理 )
   **/
  AUTH_GUIDE_ID: 1,//导购
  AUTH_STORE_ID: 2,//店长


  /********** 部门类型 ： 根据登录获得的：deptType 判断 *************/
  /********* @ApiModelProperty(value = "部门类型：0: 总部、1：部门 、2：经销商 、3：门店、4：代理商、5：分公司、6：分销商")  (经销商、门店、分销商都隶属于代理商) **********/
  DEPT_TYPE_HEAD: 0,
  DEPT_TYPE_DEPT: 1,
  DEPT_TYPE_DEALER: 2,
  DEPT_TYPE_STORE: 3,
  DEPT_TYPE_AGENT: 4,
  DEPT_TYPE_COMPANY: 5,//分公司（大区）
  DEPT_TYPE_DISTRIBUTOR: 6,


  //日期type
  DATE_FIRST_TYPE: 1,//今天
  DATE_SECOND_TYPE: 2,//三天内
  DATE_THIRD_TYPE: 3, //一周内
  DATE_FOURTH_TYPE: 4,//一月内
  DATE_FIFTH_TYPE: 5,//自定义
  //日期name
  DATE_FIRST_NAME: "今天",
  DATE_SECOND_NAME: "三天内",
  DATE_THIRD_NAME: "一周内",
  DATE_FOURTH_NAME: "一月内",
  DATE_FIFTH_NAME: "自定义",

  /********** 进入聊天 Chat 传的字段*************/
  CHAT_ID: "contactId",//单聊：人的环信id,群聊：群组环信id,群发：所有人的环信id，英文逗号相隔，String类型
  CHAT_TYPE: "sessionType", //三种类型：Chat(单聊)，GroupChat(群聊)，ChatRoom(聊天室)，String类型
  CHAT_NAME: 'name',//单聊：人的名字，群聊：群组名称，群发：所有人的name逗号相隔，String类型
  CHAT_MASS: "masschat",//群发：只有群发时才传此字段,String类型:只能小写
  CHAT_USE_ID: "userId",//单聊：人的id ,群发：所有人的id英文逗号相隔，


  /********** ChatType*************/
  CHAT: 'Chat', //单聊
  GROUP_CHAT: 'GroupChat', //群聊
  CHAT_ROOM: 'ChatRoom', //聊天室

  /********** Message Type*************/

  TYPE_TEXT: "0", //String类型
  TYPE_IMAGE: "1",//String类型
  TYPE_VOICE: "2",//String类型
  TYPE_VIDEO: "3",//String类型

  /**********  给环信Obj里封装的字段 *************/
  USER_ID: 'userId', //单聊：人userId，群发：人的userId 逗号相隔
  USER_HEAD: "userHead",//单聊：人的头像， 群发：空
  USER_NAME: "userName",//单聊：人的名字，群发：人的名字逗号相隔
  IS_CUST: 'isCust',//同事客户单聊，true:客户，false:同事
  MASS_ID: 'massId',//群发id
  TYPE: "type",//这是接收到的admin发的消息增加的字段(分为足迹track,跟进follow,预警follow_alarm,抢单池：apply)
  IS_SHARE: 'isShare',//是否是分享

  /**********  通知待办 *************/
  ADMIN: "admin",
  TRACK: "track",//足迹
  FOLLOW: "follow",//跟进
  FOLLOW_ALARM: "follow_alarm",//跟进预警
  APPLY: "apply",//抢单
  TRACK_SYSTEM: "track_system",//客户通知
  COMPANY_NOTIFY: "company_notify",//企业通知
  LOGIN_OUT: 'login_out',//强制退出
  CUSTOMER_INQUIRY:"customerInquiry",//客户询价
  CUSTOMER_QUOTATION:"customerQuotation",//客户报价
  ORDER:"order",//订单
  CLUE:'customer',//线索




  WX_APP_ID_OLD: 'wxf25c6e8a5fc7f20a',//微信appId(测试)
  WX_APP_ID: 'wx836b7bb29beebc2f',//正式微信appId(仅限ios)

  /*********  订单  **************/
  ORDER_TYPE_DEPOSIT: 1, //预订单
  ORDER_TYPE_NORMAL: 2, //订单

  ORDER_STATUS_PRE: 1, //预订单
  ORDER_STATUS_UNFINISHED: 2, //订单未完成
  ORDER_STATUS_REVISIT_UNFINISHED: 3, //回访未完成
  ORDER_STATUS_REVISIT_FINISHED: 4, //回访完成
  ORDER_STATUS_MAP: {
    1: '预订单',
    2: '待回访',
    3: '回访未完成',
    4: '回访完成'
  },
  /************ 资源列表，默认显示未设置code的菜单 ***********/
  resourceMap: {
    /** footerTab */
    INDEX: '12001', //首页
    CUSTOMER: '12002', //客户
    ORDER: '12003', //订单
    /**业绩*/
    ACHIEVEMENT: '12004102',
    ACHIEVEMENTSETCODE:'12004101',//用于判断设置目标

    WORK: '12005', //工作
    /** 工作 */
    //销售
    SALE: '12005001',
    CARD: '12005001001', //名片
    CASE: '12005001002', //案例
    PRODUCT: '12005001003', //产品
    HEROIC_LIST: '12005001005', //英雄榜
    //营销
    MARKETING: '12005002',
    ACTIVITY_CENTER: '12005002101', //活动中心
    SELL_CARD: '12005002102', //售卡
    //办公
    OFFICE: '12005003',
    ENTERPRISE_NOTIFY: '12005003101', //企业通知
    ADDRESS_LIST: '12005003102', //通讯录
    SPEECHCRAFT: '12005003103', //话术
    TRAINING:'12005003104',//培训

    //推客
    TUIKE:'12005005',//推客标题栏
    TUIKE_LIST:'12005005103',//推客列表
    TUIKE_INVITE:'12005005102',//邀请推客
    TUIKE_COMMEND:'12005005101',//推荐客户

    //工作台--订单
    ORDER_WORK:'12005004',
    WORK_ORDER_MANAGER : "12005004103",//订单管理
    WORK_ORDER_APPROVE : "12005004106",//订单审核
    WORK_SHOPKEEPER_APPROVE : "12005004104",//店长审核
    WORK_DISCOUNT_APPROVE : "12005004105",//折扣特批
    WORK_CHARGE_APPROVE : "12005004101",//收费审核
    WORK_MEASURE_REPORT : "12005004102",//测量汇报
    WORK_DELIVERY_REPORT : "12005004107",//送货汇报
    WORK_INSTALL_REPORT : "12005004108",//安装汇报
    WORK_QUESTION_MANAGER : "12005004109",//问题管理
    WORK_REPAIR_REPORT : "12005004110",//维修汇报
    WORK_ORDER_CENTER : "12005004111",//订单管理中心
    WORK_CLUE_MANAGE: "12005004112",//线索消息查询管理
    WORK_INVENTORY_SEARCH: "12005004113",//库存查询

  },
  /*********  分享  **************/
  SHARE_CASE:0,//案列
  SHARE_SERIES:1,//产品系列
  SHARE_PRODUCT:2,//产品
  SHARE_ACTIVITY:3,//活动
  SHARE_SPEECH:4,//话术
  SHARE:'share',
};


