/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param mystr string字符串 
 * @return string字符串
 */
function change( mystr ) {
    // write code here
    // return mystr[0]
    for(let i=0;i<=mystr.length;i++){
        if(mystr[i]==='r'){
            mystr[i]='e'
        }else if(mystr[i]==='e'){
            mystr[i]='d'
        }else if(mystr[i]==='d');{
            mystr[i]='r'
        }
        return mystr
    }
}
module.exports = {
    change : change
}