const app = {
    data() {
        return {
            firstname : "Thanawin",
            lastname : "Vattraseth",
            career : 'Student',
            image:'./images/profile.jpg',
            show: true,
            // url: 'http://www.sit.kmutt.ac.th'
        }
    },
    // created(){
    //     console.log('message is ' + this.msg)
    // },
    // update(){
    //     console.log('message is changed to ' + this.msg)
    // },

}
mountedApp = Vue.createApp(app).mount('#app')