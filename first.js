function reverseStr(str) {
    let newStr = '';
    let i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
function btodex(per){
    let cand = reverseStr(String(per));
    let b = 0;
    let step = 1;
    for (let i=0;i<cand.length;i++){
        if ((cand[i]=='0') || (cand[i]=='1')){
            b += step*Number(cand[i]);
            step=step*2;
        }
        else{
            return undefined;
        }
    }
    return b;
}