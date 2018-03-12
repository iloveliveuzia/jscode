function check1(str){
    let bstr = str;
    let k=1, pstr=str[0];
    while (true){
        if (pstr.repeat(k)==bstr){
            return k;
        }
        else{
            if (bstr.indexOf(pstr.repeat(k+1))==0){
                k++;
            }
            else{
                let l=pstr.length;
                pstr=bstr.substr(0,l+1);
                k=1;
            }
        }
    }
}