import moment from 'moment'
import Vue from 'vue'

Vue.filter('dataString',function (value,formatstr='YYYY-MM-DD HH:mm:ss'){
  return moment(value).format(formatstr)
})
