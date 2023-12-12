function cancelsubmit() {
    is_checked = false
    for(let i = 0 ; i < document.form1.genre.length ; i++){
        if (document.form1.genre[i].checked) {
            is_checked = true;   
        }
    }
    if(!is_checked){
        alert("最低一つチェックを入れてください");
        return false;
    }
}