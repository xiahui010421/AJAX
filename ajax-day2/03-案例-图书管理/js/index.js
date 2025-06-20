/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = 'xiahui'
function getBookList(){
    axios({
        url: 'http://hmajax.itheima.net/api/books',    
        params: {
            creator:creator
        }
    }).then(result=>{
        const booklist = result.data.data
        console.log(booklist);
        // console.log('xiahui')
        const htmlStr = booklist.map((item,index)=>{
            return`<tr>
                <td>${index+1}</td>
                <td>${item.bookname}</td>
                <td>${item.author}</td>
                <td>${item.publisher}</td>
                <td>
                    <span class="del">删除</span>
                    <span class="edit">编辑</span>
                </td>
            </tr>`
        }).join('')
        console.log(htmlStr);
        document.querySelector('.list').innerHTML=htmlStr
        
    })
}
getBookList()

/**
 * 目标2：新增图书
 *  2.1 新增弹框->显示和隐藏
 *  2.2 收集表单数据，并提交到服务器保存
 *  2.3 刷新图书列表
 */
 



/**
 * 目标3：删除图书
 *  3.1 删除元素绑定点击事件->获取图书id
 *  3.2 调用删除接口
 *  3.3 刷新图书列表
 */

/**
 * 目标4：编辑图书
 *  4.1 编辑弹框->显示和隐藏
 *  4.2 获取当前编辑图书数据->回显到编辑表单中
 *  4.3 提交保存修改，并刷新列表
 */