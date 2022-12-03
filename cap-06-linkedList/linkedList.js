const defaultEquals = (a,b) => {
    return a === b;
}

class Node {
    constructor(element) {
        this.val = element;
        this.next = undefined;
    }
}


export class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next != null) {
                current = current.next;
            }
            current.next = node;
       
        }
        this.count++
    }
    
}

const list = new LinkedList()


list.push(11)
list.push(12)
list.push(13)
list.push(14)
list.push(15)
console.log(list.head.next.next);
