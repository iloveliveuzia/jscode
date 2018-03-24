function Graph(){
    this.mas = Array();
}
Graph.prototype.add=function(l){
    function findmax(l){
        let mmax = 0;
        for (let i in l){
            if (l[i][0]>mmax){ mmax = l[i][0];}
            if (l[i][1]>mmax){ mmax = l[i][1];} 
        }
        return mmax+1;
    }
    let mm = findmax(l);
    let b = [];
    for (let i=0; i<mm; i++){
        a = [];
        for (let j=0;j<mm;j++){
            a.push(0);
        }
        b.push(a);
    }
    this.mas = b;
    for (i in l){
        let x = l[i][0];
        let y = l[i][1];
        this.mas[x][y] = l[i][2];
        this.mas[y][x] = l[i][2];
    }
}
Graph.prototype.dfs=function(){
    let stack=Array(0);
    let was = Array();
    while (stack.length>0){
        let cur = stack.pop();
        was.push(cur);
        console.log(cur);
        for (let i in this.mas[cur]){
            if (this.mas[cur][i]>0)/*edge is exist*/{
                if (was.indexOf(i)==-1){
                    stack.push(i);
                }
            }
        }
    }
}
Graph.prototype.bfs=function(){
    let stack = Array(0);
    let was = Array();
    while (stack.length>0){
        let stack2 = Array();
        for (let i=0;i<stack.length;i++){
            console.log(stack[i]);
            was.push(stack[i]);
            for (let j=0;j<this.mas[stack[i]];j++){
                if (this.mas[stack[i]][j]>0){
                    if (was.indexOf(j)==-1){
                        stack2.push(j);
                    }
                }
            }
        }
        stack = stack2;
    }
}
Graph.prototype.dijkstra=function(s){
    let matrix = this.mas;
    let N = matrix.length;
    let valid = Array();
    let weight = Array();
    for (let i=0; i<N; i++){
        valid.push(true);
        weight.push(-1);
    }
    weight[s]=0;
    for (let i=0;i<N;i++){
        let min_weight = -1;
        let ID_min_weight = -1;
        for (let j=0;j<weight.length;j++){
            if (min_weight==-1){
                if ((valid[j]) && (weight[j]!=-1)){
                    min_weight = weight[j];
                    ID_min_weight = j;
                }
            }
            else{
                if ((valid[j])&&(weight[j]<min_weight)&&(weight[j]!=-1)){
                    min_weight = weight[j];
                    ID_min_weight = j;
                }
            }
            if (ID_min_weight==-1){
                break;
            }
            /**/
            for (let k=0; k<N;k++){
                if (weight[k]==-1){
                    if (matrix[ID_min_weight][k]>0){
                        weight[k]=weight[ID_min_weight]+matrix[ID_min_weight][k];
                    }
                }
                else{
                    if (weight[ID_min_weight]+matrix[ID_min_weight][k] < weight[k]){
                        if (matrix[ID_min_weight][k]>0){
                            weight[k] = weight[ID_min_weight]+matrix[ID_min_weight][k];
                        }
                    }
                }
            }
            valid[ID_min_weight] = false;
        }
    }
    return weight;
}
Graph.prototype.minway=function(s,e){
    let ww = this.dijkstra(s);
    return ww[e];
}
Graph.prototype.firstTask=function(st){
    let b = st.split("],[");
    let c = Array();
    for (let i=0;i<b.length;i++){
        let j = ((b[i].replace(/\[/g,'')).replace(/\]/g,'')).split(',');
        c.push(j)
    }
    for (i in c){
        for (j in c[i]){
            c[i][j] = Number(c[i][j]);
        }
        c[i][2] = 1;
    }
    return(c)
}
Graph.prototype.secondTask=function(st){
    let b = st.split("],[");
    let c = Array();
    for (let i=0;i<b.length;i++){
        let j = ((b[i].replace(/\[/g,'')).replace(/\]/g,'')).split(',');
        c.push(j)
    }
    for (i in c){
        for (j in c[i]){
            c[i][j] = Number(c[i][j]);
        }
    }
    return(c)
}