// Define the ListNode class
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    
    const dummy = new ListNode(0);
    let current = dummy;
    
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    
    return dummy.next;
}

// Helper function to convert a linked list to an array (for printing)
function linkedListToArray(head) {
    const result = [];
    let current = head;
    
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

function mergeTwoLists(list1, list2) {
    // Create a dummy head to simplify edge cases
    const dummy = new ListNode(-1);
    let current = dummy;
    
    // Traverse both lists while comparing values
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Attach remaining nodes of non-empty list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    // Return merged list (excluding dummy head)
    return dummy.next;
}

// Create linked lists from arrays
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);

// Merge the lists
const mergedList = mergeTwoLists(list1, list2);

// Convert the merged list to an array for printing
console.log(linkedListToArray(mergedList)); // Should output [1, 1, 2, 3, 4, 4]
