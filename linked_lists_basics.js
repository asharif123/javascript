
// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
// USE while(runner) to consider the last node!!!!!!
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
        }

        else
        {
            var restOfList = this.head;
            this.head = new Node(value);
            this.head.next = restOfList;
        }
        
        return this
    }

    removeFront() {
        if (this.head.next == null || this.head == null) {
            return null
        }
        else {
            this.head = this.head.next
            return this
        }
    }

    front() {
        console.log("Front", this.head.value)
        return this
    }

    contains(value) {
        var runner = this.head;
        while(runner) {
            if(runner.value == value) {
                return true
            }
            runner = runner.next
        }
        return false
    }

    length() {
        var total = 0
        var runner = this.head
        while (runner) {
            total += 1
            runner = runner.next
        }
        return total
    }

    display() {
        var runner = this.head
        while (runner) {
            console.log(runner.value)
            runner = runner.next
        }
    }

    max() {
        var max= this.head
        var min = this.head
        var runner = this.head
        var total = 0
        while (runner) {
            if (max.value < runner.value) {
                max = runner
            }
            else if (min.value > runner.value) {
                min = runner
            }
            total += runner.value
            // console.log(total)
            runner = runner.next
    
        }
        console.log("Max", max.value, "Min", min.value, "Average", (total/(this.length())))

    }
    back() {
        var runner = this.head
        while (runner.next) {
            runner = runner.next
        }
        return runner.value
    }

    removeBack() {
        var runner = this.head
        var i = 0
        while (i < this.length() - 2) {
            runner = runner.next
            i++
        }
        runner.next = null
        return this
    }

    addBack(value) {
        var runner = this.head
        while (runner.next) {
            runner = runner.next
        }
        runner.next = new Node(value)
        return this
    }
    second_to_last() {

        if (this.length() < 2) {
            return "Too short!"
        }
        var runner = this.head
        while (runner.next.next) {
            runner = runner.next
        }
        console.log("SECOND", runner.value)

    }

    delete_node(value) {
        if (this.length() == 1 && this.head.value == value) {
            return null
        }

        else if (this.length() == 1 && this.head.value != value) {
            return this
        }
        // if value to delete is in head
        var runner = this.head.next
        if (this.head.value == value) {
            this.head = this.head.next

            while (runner) {
                {
                    runner = runner.next

                }
            }
        }
        
        else {
             var runner = this.head
             while (runner.next) {
                 if (runner.next.value == value) {
                     runner.next = runner.next.next
                     runner = runner.next
                 }
                 else {
                    runner = runner.next

                 }
             }

            }
            return this

        }

        filter_node(lowVal,highVal) {
            if (this.head == null) {
                return null
            }

            else if (this.length() == 1 && (this.head.value < lowVal || this.head.value > highVal)) {
                this.head = this.head.next
                return null
            }

            var runner = this.head
            // while (runner.next) {
            //     if (runner == this.head && (runner.value < lowVal || runner.value > highVal)) {
            //         this.head = this.head.next
            //     }
            //     else {
            //         if (runner.next.value < lowVal || runner.next.value > highVal) {
            //             runner.next = runner.next.next
            //             runner = runner.next
            //             console.log(this)
            //         }
            //         else {
            //             runner = runner.next
            //         }
            //     }
            // }
            // return this

            // remove head value if NOT in range
            if (this.head.value < lowVal || this.head.value > highVal) {
                while (this.head.value < lowVal || this.head.value > highVal) {
                    this.head = this.head.next
                }
                var runner = this.head.next
                while (runner) {
                    runner = runner.next
                }
    
            }
        

            var runner = this.head
            while (runner.next) {
                if (runner.next.value < lowVal || runner.next.value > highVal)  {
                    runner.next = runner.next.next
                }
                else {
                    runner = runner.next

                }
            } 
            return this

        }
    }
var x = new SLL()
x.addFront(15).addFront(10).addFront(11).addFront(13).filter_node(6,12)
console.log(x)

    

            // var runner = this.head
            // while (runner.next) {
            //     if (runner.next < lowVal || runner.next > highVal) {
            //         runner.next = runner.next.next
            //         runner = runner.next
            //     }
            //     else {
            //         runner = runner.next

            //     }
            // }
            // return this
        // }


        // }


