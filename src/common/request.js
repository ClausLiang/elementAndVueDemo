import axios from 'axios'
import Vue from 'vue'
import ElementUI from 'element-ui'
axios.defaults.retry = 4
axios.defaults.retryDelay = 5000
axios.interceptors.response.use(undefined, (err) => {
    console.log('err:', err)
    console.log('errConfig:', err.config)
    console.log('errResponse:', err.response)
    if (err.response) {
        switch (err.response.status) {
            case 404:
                // alert('找不见接口')
                ElementUI.Message.error('找不见接口')
                return Promise.reject(err)
        }
    }
    var config = err.config
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(err)
    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0
    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err)
    }
    // Increase the retry count
    config.__retryCount += 1
    // Create new promise to handle exponential backoff
    var backoff = new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, config.retryDelay || 1)
    })
    // Return the promise in which recalls axios to retry the request
    return backoff.then(function () {
        return axios(config)
    })
})
Vue.prototype.axios = axios
