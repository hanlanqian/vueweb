// 配置Vuex
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex)

const actions = {
    get_data(context) {
        context.state.fileSelectedList = []
        axios
            .get(context.state.server_host + context.state.apis.get_file_list)
            .then((response) => {
                var receieve_data = response.data.data;
                context.commit("getData", receieve_data)
            });
    },
    delete_selected_file(context) {
        console.log(context.getters.fileNameList)
        axios.post(context.state.server_host + context.state.apis.delete_file, context.getters.fileNameList)
            .then((response) => {
                console.log(response);
                context.dispatch("get_data")
            });
    },
    download_selected_file(context, value) {

    },
    login_auth(context, value) {
        axios({
            method: 'post',
            url: context.state.server_host + context.state.apis.login_auth,
            data: {
                username: value.username,
                password: value.password
            }
        }).then((response) => {
            console.log(response)
        })
    },
    register(context, value) {
        console.log({
            username: value.userName,
            password: value.passWord,
            email: value.email,
            phoneNumber: value.phoneNumber,
            sex: value.sex 
        })
        axios({
            method: 'post',
            url:context.state.server_host + context.state.apis.register,
            data: {
                username: value.userName,
                password: value.passWord,
                email: value.email,
                phoneNumber: value.phoneNumber,
                sex: value.sex 
            }
        })
    },

}
const mutations = {
    getData(state, value) {
        state.files = value
    }
}
const state = {

    // 用户状态
    isLogin: false,



    // 文件上传状态
    fileSelectedList: [],
    server_host: "http://124.223.105.216:2333",
    apis: {
        get_file_list: "/api/file/get",
        delete_file: "/api/file/delete",
        upload_file: "/api/file/upload",
        download_file: "/api/files",
        login_auth: '/api/login',
        register: '/api/register',

    },
    files: []
}

const getters = {
    fileNameList(state) {
        var file_name_list = []
        state.fileSelectedList.forEach((select) => {
            file_name_list.push(select.file_name)
        })
        return file_name_list
    }
}


export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

