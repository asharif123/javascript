// // Fronts
// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
// node contains value and a pointer to next array, node ends when next = null
// class Node {
//     // constructor -> init of pythhon
//     constructor(value) { 
//         // this -> self of python
//         this.value = value
//         this.next = null
//     }
// }
// // define head node
// var head = new Node(1)
// // node to update
// node = head
// for (var i of [7,3,5,2]) {
//     new_node = new Node(i)
//     // node.next = new_node
//     node = new_node
// }
// console.log(head.next)
// // console.log(head.next.next.value)

// create a new node from scratch

class Node {
    constructor(value) {
        this.value = value
        this.next = null    
    }
}

// SLL creates a chain of nodes using Node class 
class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        // see if no head exists
        if (this.head == null) {
            this.head = new Node(value)
            // return this chains nodes together
            return this

        }

        else if (this.head != null) {
            // have head point to new node that was added and add old head value to new value
            var new_node = this.head
            this.head = new Node(value)
            this.head.next = new_node
            return this

        }
        }

    removeFront() {
            if (this.head == null) {
                return null
            }
            else {
                this.head = this.head.next
                return this
                
            }
    
        }

    Front () {
        if (this.head == null) {
            return null
        }
        else {
            return this.head.value
        }
    }

    findValue(value) {
        // return whether val is found in any node in the list. (traverse through entire list and confir value in list)
        // to traverse, start from the head node
        // EVERY TIME NODE IS CREATED, a null is assigned to next
        var runner = this.head

        while (runner) {
            if (runner.value == value){
                return "True"
            }
            runner = runner.next

            
            
        }
        return "False"
        }




    }
    
    
    

    


var myList = new SLL()
var x = myList.addFront(2).addFront(3)
var y = myList.findValue(25)
console.log(y)


// // create node and SLL

// class Node {
//     constructor(value) {
//         this.head = value
//         this.next = null
//     }
// }

// var value = new Node(3)

// class SLL {
//     constructor(value) {
//         this.head = null
//     }

//     addFront(value) {
//         if (this.head == null) {
//             this.head = new Node(value)
//             return this
//         }
//         else {
//             var new_node = this.head
//             var head = new Node(value)
//             this.head.next = new_node
//             return this
//         }
//     }
// }


// var x = new SLL()
// x.addFront(5).addFront(7)
// console.log(x)















