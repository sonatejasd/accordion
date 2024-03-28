const ref = document.getElementsByClassName("sections")[0];

ref.addEventListener("click", function(e){
    //close other sections if open
    const open = document.getElementsByClassName("display")[0];
    console.log(open);
    if (open !== undefined){
        open.classList.remove('display') 
    }
    //handle the section clicked on
    const target = e.target;
    const content = target.nextElementSibling;
    if(open !== content){
        content.classList.toggle('display')
    }
});

// The provided code is an example of event delegation.

// Here's why:

// Event Delegation Principle: Event delegation is when you attach a single event listener to a parent element to handle events for multiple child elements. In the code provided, the event listener is attached to the parent element with the class name "sections" (ref), and it listens for click events.

// Handling Events for Multiple Elements: When a click event occurs within the parent element (ref), the event bubbles up to the parent element, and the event listener is triggered. Inside the event listener, the e.target property is used to determine which specific child element within the parent was clicked.

// Toggle Class: Based on the clicked element (target), the code toggles a class on the next sibling element (content). This demonstrates the concept of handling events for multiple elements efficiently using event delegation.

// Therefore, the provided code exemplifies the event delegation principle by utilizing a single event listener on a parent element to handle events for multiple child elements.