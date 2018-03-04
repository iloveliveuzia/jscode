function Node(value){
    this.data=Number(value);
    this.previous = null;
    this.next = null;
}
function DoublyList(){
    this._length = 0;
    this.head=null;
    this.tail=null;
}
DoublyList.prototype.add=function(value){
    let node = new Node(value);
    if (this._length){
        this.tail.next=node;
        node.previous = this.tail;
        this.tail=node;
    }
    else{
        this.head=node;
        this.tail=node;
    }
    this._length++;
    return node;
}
DoublyList.prototype.searchNodeAt = function(position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
};
DoublyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
    if (position === 1) {
        this.head = currentNode.next;
        if (!this.head) {
            this.head.previous = null;
        } else {
            this.tail = null;
        }
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    } else {
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;
 
        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }
    this._length--;
    return message.success;
};
function reverseString(str) {
    return str.split("").reverse().join("");
}
function toList(num){
    let a = new DoublyList();
    let str = reverseString(String(num));
    for (let i in str){
        console.log(str[i]);
        a.add(str[i]);
    }
    return a;
}
/*second task*/
let b = 3423,
    a = 0;
let l1 = toList(b);
    l2 = toList(a);
    
function addList(l1,l2){
    let l = null;
    let g = null;
    if (l1._length>l2._length){
        l = l2;
        g = l1;
    }
    else{
        l=l1;
        g=l2;
    }
    /*we need to sum*/
    let rez = new DoublyList();
    let sl = l.head;
    let sg = g.head;
    let left = 0;
    for (let i=0;i<l._length;i++){
        rez.add((sl.data+sg.data+left) % 10);
        left = Math.trunc((sl.data+sg.data)/10);
        sl = sl.next;
        sg = sg.next;
    }
    for (let j=0;j<g._length-l._length;j++){
        rez.add((sg.data+left) % 10);
        left = Math.trunc((sg.data)/10);
        sg = sg.next;
    }
    return rez;
}