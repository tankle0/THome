/* 
  两种类型声明都可以
*/
// type funType = (timestamp:String|Date|Number,sign:String) => String

interface funType{
  (timestamp:String|Date|Number,sign:String) : string
}

//获取指定日期的完整时间(默认格式  年-月-日 时:分:秒)
const get_y_m_d_h_m_s:funType = function(timestamp,sign){
  let date_ = timestamp ? new Date(parseInt(String(timestamp))) : new Date()
  let year = date_.getFullYear() + ''
  let month = date_.getMonth() + 1
  let day = date_.getDate()
  let hours = date_.getHours()
  let mins = date_.getMinutes()
  let secs = date_.getSeconds()
  if (month<10) month = Number("0" + month)
  if (day<10) day = Number("0" + day)
  if (hours<10) hours = Number("0" + hours)
  if (mins<10) mins = Number("0" + mins)
  if (secs<10) secs = Number("0" + secs)
  return year + sign + month + sign + day + " " + hours + ":" + mins + ":" + secs
}

//获取指定日期的年月日(默认格式  年-月-日)
,get_y_m_d:funType = function (timestamp,sign){
  let date_ = timestamp ? new Date(String(timestamp)) : new Date()
  let year = date_.getFullYear() + ''
  let month = date_.getMonth() + 1
  let day = date_.getDate()
  if (month<10) month = Number("0" + month)
  if (day<10) day = Number("0" + day)
  
  return year + sign + month + sign + day
}

//获取指定日期的月日(默认格式  月-日)
,get_m_d:funType = function (timestamp,sign){
  let date_ = timestamp ? new Date(String(timestamp)) : new Date()
  let month = date_.getMonth() + 1
  let day = date_.getDate()
  if (month<10) month = Number("0" + month)
  if (day<10) day = Number("0" + day)
  
  return  String(month) + sign + day
}

//获取指定日期的前后几天(默认格式  年-月-日)
,get_recent_day:funType = function (day,sign){
  let currentDay = new Date(),mDay = new Date()
  let beforeDay = currentDay.getTime() + 1000*60*60*24*Number(day);
  mDay.setTime(beforeDay)
  
  // return  utils.get_m_d(mDay,'.') + (sign || " - ") + utils.get_m_d(currentDay,'.')
  return get_y_m_d(String(mDay),sign)
}

//获取指定日期的前一个完整自然周(周一到周日)
,get_lastWeek:funType = function(timestamp,sign){
  let startDay = new Date()
  , endDay = new Date()
  , current = timestamp ? new Date(String(timestamp)) : new Date()
  , currentTime = current.getTime();

  switch (current.getDay()){
    case 0: //周日
      startDay.setTime(currentTime - 1000*60*60*24*13)
      endDay.setTime(currentTime - 1000*60*60*24*7)
      break
    case 1: //周一
      startDay.setTime(currentTime - 1000*60*60*24*7)
      endDay.setTime(currentTime - 1000*60*60*24)
      break
    case 2: //周二
      startDay.setTime(currentTime - 1000*60*60*24*8)
      endDay.setTime(currentTime - 1000*60*60*24*2)
      break
    case 3: //周三
      startDay.setTime(currentTime - 1000*60*60*24*9)
      endDay.setTime(currentTime - 1000*60*60*24*3)
      break
    case 4: //周四
      startDay.setTime(currentTime - 1000*60*60*24*10)
      endDay.setTime(currentTime - 1000*60*60*24*4)
      break
    case 5: //周五
      startDay.setTime(currentTime - 1000*60*60*24*11)
      endDay.setTime(currentTime - 1000*60*60*24*5)
      break
    case 6: //周六
      startDay.setTime(currentTime - 1000*60*60*24*12)
      endDay.setTime(currentTime - 1000*60*60*24*6)
      break
  }

  return get_y_m_d(String(startDay),sign) + '-' + get_y_m_d(String(endDay),sign)
}

,utils = {
  get_y_m_d_h_m_s,
  get_y_m_d,
  get_m_d,
  get_recent_day,
  get_lastWeek
}
export default utils