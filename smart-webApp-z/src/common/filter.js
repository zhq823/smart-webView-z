// filters/index.js
import Vue from 'vue'
import formatDataTime from './formatDataTime'

Object.keys(formatDataTime).forEach(key => {
    Vue.filter(key, formatDataTime[key])
})