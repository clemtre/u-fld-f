import Vue from 'vue'

export default () => {

    Vue.filter("stripHTML", function (value) {
        // attention pas ouf 
        const res = value.replace('<p>',"").replace('</p>',"")
        return res
    })
}