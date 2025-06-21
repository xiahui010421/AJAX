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
                <td data-id=${item.id}>
                    <span class="del">删除</span>
                    <span class="edit">编辑</span>
                </td>
            </tr>`
        }).join('')
        // console.log(htmlStr);
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
const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)

document.querySelector('.add-btn').addEventListener('click',()=>{
    // 1. 收集表单数据
    const addform = document.querySelector('.add-form')
    const bookobj = serialize(addform, { hash: true, empty: true })
    // console.log(getBookList);
    //author: "xiahui" bookname: "WEB" publisher: "WIT"
    axios({
        url: 'http://hmajax.itheima.net/api/books',    
        method:'post',    
        data:{
            ...bookobj,
            creator:"xiahui"
        }
    }).then(result=>{
            console.log(result);
            getBookList(result)
            alert(result.data.message)
            addform.reset()
            addModal.hide()
        })


})

/**
 * 目标3：删除图书
 *  3.1 删除元素绑定点击事件->获取图书id
 *  3.2 调用删除接口
 *  3.3 刷新图书列表
 */
 //事件委托给tbody
 document.querySelector('.list').addEventListener('click',e=>{
    if(e.target.classList.contains('del')){
        // console.log(e.target)
        const theId = e.target.parentNode.dataset.id
        console.log(theId);
        axios({
            url:`http://hmajax.itheima.net/api/books/${theId}`,
            method:'DELETE'
        }).then(()=>{
            getBookList()
        })
    }

 })

/**
 * 目标4：编辑图书
 *  4.1 编辑弹框->显示和隐藏
 *  4.2 获取当前编辑图书数据->回显到编辑表单中
 *  4.3 提交保存修改，并刷新列表
 */
const editModalDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editModalDom)
document.querySelector('.list').addEventListener('click',e=>{
    if(e.target.classList.contains('edit')){
        editModal.show()
        const theId = e.target.parentNode.dataset.id
       
        axios({
            url:`http://hmajax.itheima.net/api/books/${theId}`,
           
        }).then(result=>{
            // console.log(result)
            const bookobj = result.data.data
            // document.querySelector('.edit-form .bookname').value=bookobj.bookname
            // document.querySelector('.edit-form .author').value=bookobj.author
            // document.querySelector('.edit-form .publisher').value=bookobj.publisher
            const keys = Object.keys(bookobj)//['id', 'bookname', 'author', 'publisher']
            keys.forEach(key => {
                document.querySelector(`.edit-form .${key}` ).value=bookobj[key]
            });

        })

    }
 
})
document.querySelector('.edit-btn').addEventListener('click',()=>{
    const editform = document.querySelector('.edit-form')
    const {id,bookname,author,publisher} = serialize(editform, { hash: true, empty: true })
    // console.log(bookobj)
    axios({
        url:`http://hmajax.itheima.net/api/books/${id}`,
        method:'PUT',
        data:{
            bookname,
            author,
            publisher,
            creator:"xiahui"
        }

    }).then(()=>{
        getBookList()
    })

    editModal.hide()

})

