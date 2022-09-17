export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxc8581494b563c8c0",
    // 公众号appSecret
    appSecret: "d2e7f1ef411be9283284faf4a01d2d85",
    // 模板消息id
    templateId: "NLbR0EpGZijqn26hECEoGCRkLv8rAngXOtDoWkRZUmY",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["okRlz6Ngmn9ap9kyyl8SADzQI0d8"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "湖北",
    // 所在城市
    city: "天门",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小熊", "year": "2001", "date": "03-11", "type": 'new'},
      {"name": "小夏", "year": "2003", "date": "07-03", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-10-12",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
