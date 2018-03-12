function check2(text){
    var ll = text.split(/[ \s\t,\.!?\:;\(\)]/);
    var dict = {};
    for (let i=0; i<ll.length;i++){
        if (ll[i] in dict){
            dict[ll[i]]++;
        }
        else{
            dict[ll[i]]=1;
        }
    }
    let max = 0, ww = '';
    for (j in dict){
        if (dict[j]==max){
            ww='---';
        }
        if (dict[j]>max){
            max=dict[j];
            ww=j;
        }
    }
    //console.log(max);
    //console.log(ww);
    return ww;
}