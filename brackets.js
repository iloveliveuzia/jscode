function check3(str){
    let ch=true;
    let bstr = str;
    while (ch){
        //console.log(bstr);
        if (bstr.indexOf('()')!=-1){
            bstr=bstr.replace('()','');
            continue;
        }
        if (bstr.indexOf('[]')!=-1){
            bstr=bstr.replace('[]','');
            continue;
        }
        if (bstr.indexOf('{}')!=-1){
            bstr=bstr.replace('{}','');
            continue;
        }
        ch = false;
    }
    if (bstr.length>0) 
        return false
    else 
        return true;
}