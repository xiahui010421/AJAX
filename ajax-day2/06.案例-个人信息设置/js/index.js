/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
axios({
    url:'http://hmajax.itheima.net/api/settings',
    params:{
        creator:'xiahui'
    }
}).then(result=>{
    const userobj = result.data.data
    // console.log(Object.keys(userobj))
    // console.log(Object.values(userobj))
    Object.keys(userobj).forEach(key =>{
        // console.log(key)
        if(key === 'avatar'){
            document.querySelector('.prew').src=userobj[key]
        }else if(key ==='gender'){
            const gRadioList = document.querySelectorAll('.gender')
            const gNum = userobj[key]
            // console.log(gRadioList[gNum])
            gRadioList[gNum].checked=true
        }else{
            document.querySelector(`.${key}`).value = userobj[key]
        }
    })
})
/**
 * 目标2：头像修改
 *  
 * */
