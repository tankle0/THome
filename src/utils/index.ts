type funType = (timestamp:string) => string

const GetDateTime:funType = function (timestamp:string):string {
  let date_ = timestamp ? new Date(timestamp) : new Date()
  let year = date_.getFullYear()
  let month = date_.getMonth() + 1
  let day = date_.getDate()
  if (month<10) month = Number("0" + month)
  if (day<10) day = Number("0" + day)
  
  return year + "-" + month + "-" + day

  // let hours = date_.getHours()
  // let mins = date_.getMinutes()
  // let secs = date_.getSeconds()
  // if (hours<10) hours = "0" + hours
  // if (mins<10) mins = "0" + mins
  // if (secs<10) secs = "0" + secs
  // return year + "-" + month + "-" + day + " " + hours + ":" + mins + ":" + secs
}

let utils = {
  GetDateTime
}

export default utils