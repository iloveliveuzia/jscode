function btodex(per){
    let cand = String(per);
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