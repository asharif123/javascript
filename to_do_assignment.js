class Node {
    constructor(value) {
        this.value = value
        this.next = null
    
    }
}

class SLL {
    constructor() {
        this.head = null

    }

    addFront(value) {
        if (this.head == null) {
            this.head = new Node(value)
            return this
        }
        else {
            var newNode = this.head
            this.head = new Node(value)
            this.head.next = newNode
            return this
        }
    }

    delete_Node(value) {
        // if first Node is equal to value to delete
        var runner = this.head
        if (this.head.value == value) {
            this.head = this.head.next
            // return this
       
            var runner = this.head.next

            while (runner) {
                runner = runner.next
            }
            return this
            

        }
        // if value to delete is NOT first Node, iterate from second value 
        else {
            var runner = this.head
            while (runner.next) {
                if (runner.next.value == value) {
                    // once value is found, replace each subsequent node with next ones
                    runner.next = runner.next.next
                    runner = runner.next
                }
                // else if we don't find value, iterate to next one
                runner = runner.next
            }
         }
         return this
    }

//     filter(lowVal, highVal) {
//         var runner = this.head

//         while (runner) {
//             if (runner.next.value < lowVal || runner.next.value > highVal) {
//                 runner.next = runner.next.next
//                 runner = runner.next
//             }
//             runner = runner.next
//         }
//         return this
//     }
// }
// x = new SLL()
// x.addFront(51).addFront(71).addFront(11).filter(21,50)
// console.log(x)

// SList: Move Min to Front
// Create a standalone function that locates the minimum value in a linked list, and moves that node to the front of the list. 
// Return the new list, with all nodes still present, and all (except for the new head node) in their original order.



