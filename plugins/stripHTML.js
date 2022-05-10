import Vue from 'vue'

export default () => {

    Vue.filter("stripHTML", function (value) {
        const div = document.createElement("div")
        div.innerHTML = value
        const res = div.textContent || div.innerText || ""
        return res
    })
}