let id='no';
//-------------clear data----------------
selectdata();
function clearAll(){
    localStorage.clear();
    document.getElementById('msg').innerHTML='All data Deleted...'
}
//-------------- manage data--------------
function managedata(){
    document.getElementById('msg').innerHTML='';
    let name=document.getElementById('name').value;
    if(name==''){
        document.getElementById('msg').innerHTML='Please enter your name..'
    }
    else{
        if(id=='no'){
            let arr=new Array();
             arr=getcruddata();
            if(arr==null){
                let data=[name];
               setcruddata(data);
                }
            else{
                  arr.push(name); 
                   setcruddata(arr); 
                 }
              document.getElementById('msg').innerHTML="New Data Added.."
         } 
     else{
     let arr=getcruddata();
      arr[id]=name; 
      setcruddata(arr);
      document.getElementById('msg').innerHTML="Data updated succesfully..."
        id='no'
    }
    document.getElementById('name').value=""
selectdata();
}
document.getElementById('name').focus();
}
//-----------select data--------------
function selectdata(){
    arr=getcruddata();
      if(arr!=null){
        let html="";
        let sno=1;
        for(let k in arr){
            html=html+`<tr>
            <td>${sno}</td>
            <td class="nm">${arr[k]}</td>
            <td class="edt"><label for="edit_btn${k}"><i class="material-icons">border_color</i></label><input id="edit_btn${k}" type="button" onclick="editdata(${k})" value="Edit"/></td>
            <td class="dlt"><label for="dlt_btn${k}"><i class="material-icons">delete</i></label><input id="dlt_btn${k}" type="button" onclick="deletedata(${k})" value="Delete"/></td>
            </tr>`
            sno++
        }
        document.getElementById("root").innerHTML=html;
    }
}
//--------------- delete data ---------------
function deletedata(rid){
    let arr=getcruddata();
    arr.splice(rid,1);
    setcruddata(arr);
    selectdata();
}
//------------------ edit data ---------------
function editdata(rid){
    id=rid;
    let arr=getcruddata();
    document.getElementById("name").value=arr[rid];

}
//------------ get data --------------------
function getcruddata(){
    arr=JSON.parse(localStorage.getItem('curd'));
    return arr;
}
//------------ set data ----------------------
function setcruddata(arr){
    localStorage.setItem('curd',JSON.stringify(arr));  

}