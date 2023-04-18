/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx87c6927317e395f1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c804cd0e9eff96f1b1ade955bbc0f504',

  PROVINCE: '广东',
  CITY: '惠州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ocawh5qC0W0CQPjeUjlt2JHYQ1m0','ocawh5ve3n4oAOPZussvC4mzgMjI'
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'pI0jwWHdlPumB6kJd-iWVzrJCYgUqljz0Sw8O4ZERys',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-04',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2004', date: '04-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2004', date: '06-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2018', date: '10-14',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-02-14' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'pI0jwWHdlPumB6kJd-iWVzrJCYgUqljz0Sw8O4ZERys',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ocawh5ve3n4oAOPZussvC4mzgMjI',
    }
  ],

}

module.exports = USER_CONFIG

