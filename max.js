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
// SList: Back
// Create a function that accepts a ListNode pointer and returns the last value in the list.
    back() {
        var total = 0
        var runner = this.head

        while (runner.next) {
            total += 1
            runner = runner.next
        }
        return runner.value
    }
// To delete the last node of a linked list, find the second last node and make the next pointer of that node null.
    removeBack() {
        var runner = this.head
        while (runner.next) {
            runner = runner.next
        }
        runner = null
        console.log(runner)
        
    }
    addBack(value) {
        var runner = this.head
        while (runner.next) {
            runner = runner.next
        }
        runner.next = new Node(value)
        return this 
    }

    min_to_front() {
        var runner = this.head
        var min = this.head
        while (runner) {
            if (runner.value < min.value) {
                min = runner
                runner = runner.next
            }
            else {
                runner = runner.next
            }
    
    
        }
            return min.value
    }
}

var LinkedList = new SLL()
var y = LinkedList.addFront(-1).addFront(-2).addFront(1)
console.log(y.min_to_front())
