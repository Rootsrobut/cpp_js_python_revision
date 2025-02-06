class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  static printList(head) {
    let temp = head;
    while (temp !== null) {
      process.stdout.write(temp.data + "->");
      temp = temp.next;
    }
    console.log("null");
  }
  static async takeInput() {
    const readline = require("readline");
    const r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    let head = null;
    let tail = null;
    const askData = () => {
      return new Promise((resolve) => {
        const recursiveAsk = () => {
          r1.question("Enter data (enter -1 to stop):", (data) => {
            data = parseInt(data);
            if (data === -1) {
              rl.close();
              resolve(head);
              return;
            }
            if (head === null) {
                head = new Node(data);
                tail = head;
            } else {
                tail.next = new Node(data);
                tail = tail.next;
            }
            recursiveAsk();
          });
        };
        recursiveAsk();
      });
    };
    return await askData();
  }
}

function Insert_node_recursively(head, pos,value){
    if (head == nullptr) {
        return nullptr;
    }
     if (pos == 0) {
        let newNode = new Node(val); 
        newNode.next = head;        
        return newNode;              
    }
    head.next = Insert_node_recursively(head.next, pos - 1, val);
    return head;

}
function Delete_node_recursively(head, pos){
    if(head==nullptr){
        return nullptr;
       }
       if(pos==0){
          let  temp=head;
          head=head.next;
          return head;
       }
       head.next =Delete_node_recursively(head.next, pos - 1);
       return head;
}

(async () => {
    let head = await Node.takeInput();
    Node.printList(head);

    head = Insert_node_recursively(head, 2, 101);
    Node.printList(head);

    head = Delete_node_recursively(head, 1);
    Node.printList(head);
})();