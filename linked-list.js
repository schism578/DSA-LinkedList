'use strict';
class _Node{
  constructor( data = null){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(data){
    let newNode = new _Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtIndex(index, data){
    let currentNode = this.head;
    for(let i = 1; i < index; i++){
      if(currentNode === null){
        console.log('index out of bounds');
        return;
      }
      currentNode = currentNode.next;
    }
    let newNode = new _Node(data);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  insertAtTail(data){
    if(this.isEmpty()){
      this.insertAtHead(data);
    } 
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = new _Node(data);
  }

  insertBefore(key, data){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    if(this.head.data === key){
      this.insertAtHead(data);
      return;
    }
    let currentNode = this.head.next;
    let prevNode = this.head;
    while(currentNode !== null){
      if(currentNode.data === key){
        let newNode = new _Node(data);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    console.log('element is not in the linked list');
  }
  isEmpty(){
    if(this.head === null){
      return true;
    }
    return false;
  }
  
  insertAfter(key, data){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    let currentNode = this.head;
    while(currentNode !== null){
      if(currentNode.data === key){
        let newNode = new _Node(data);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
    console.log('element is not in linked list');
  }
  
  printList(){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    let currentNode = this.head;
    let nodeString = '';
    while(currentNode !== null){
      currentNode.next === null ? nodeString += (`${currentNode.data}`) :nodeString += (`${currentNode.data} -> `);
      currentNode = currentNode.next;
    }
    console.log(nodeString);
  }

  findLast(){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    let currentNode = this.head;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findSize(){
    let currentNode = this.head;
    let i = 0;
    while(currentNode !== null){
      i++;
      currentNode = currentNode.next;
    }
    return i;
  }

  reverseList(){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    let nextNode = this.head.next;
    let nextNextNode;
    let currentNode = this.head;
    currentNode.next = null;
    while(nextNode !== null){
      nextNextNode = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = nextNextNode;
    }
    this.head = currentNode;
  }

  findMiddle(){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    let size = this.findSize();
    size = Math.floor(size/2);
    let currentNode = this.head;
    for(let i = 0; i < size; i++){
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  thirdFromEnd(){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    let currentNode = this.head;
    if(currentNode.next === null){
      console.log('list is not long enough');
      return;
    }
    if(currentNode.next.next === null){
      console.log('list is not long enough');
      return;
    }
    let lastNodeFinder = currentNode.next.next;
    while(lastNodeFinder.next !== null){
      currentNode = currentNode.next;
      lastNodeFinder = lastNodeFinder.next;
    }
    return currentNode;
  }

  findPrevious(key){
    if(this.isEmpty()){
      console.log('list is empty');
      return;
    }
    if(this.head.data === key){
      console.log('that key has no previous element');
      return;
    }
    let currentElement = this.head.next;
    let previousElement = this.head;
    while(currentElement !== null){
      if(currentElement.data === key){
        return previousElement;
      }
      previousElement = currentElement;
      currentElement = currentElement.next;
    }
    console.log('the key does not exist in the list');
  }
}

const linkedList = new LinkedList();
linkedList.insertAtHead(5);
linkedList.insertAtTail(7);
linkedList.insertAtTail(9);
linkedList.insertAtTail(9);
linkedList.insertAtTail(50);
linkedList.insertAtIndex(2, 30);
linkedList.printList();
linkedList.insertBefore(50, 10);
linkedList.insertBefore(5, 100);
linkedList.insertBefore(5, 20);
linkedList.insertAfter(50, 123);
linkedList.insertAfter(100, 1231);
linkedList.insertAtIndex(2, 131);
linkedList.printList();
linkedList.reverseList();
linkedList.insertAtHead(10);
linkedList.printList();
//console.log(linkedList.findPrevious(50));
//console.log(linkedList.thirdFromEnd());
console.log(linkedList.findPrevious(50));
//console.log(linkedList.findMiddle());