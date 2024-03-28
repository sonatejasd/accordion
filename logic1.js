const ref = document.getElementsByClassName("sections")[0];

ref.addEventListener("click", function(e){
    const target = e.target;
    console.log(target);
    const content = target.nextElementSibling;
    content.classList.toggle('display')
});

// The provided code is an example of event delegation.

// Here's why:

// Event Delegation Principle: Event delegation is when you attach a single event listener to a parent element to handle events for multiple child elements. In the code provided, the event listener is attached to the parent element with the class name "sections" (ref), and it listens for click events.

// Handling Events for Multiple Elements: When a click event occurs within the parent element (ref), the event bubbles up to the parent element, and the event listener is triggered. Inside the event listener, the e.target property is used to determine which specific child element within the parent was clicked.

// Toggle Class: Based on the clicked element (target), the code toggles a class on the next sibling element (content). This demonstrates the concept of handling events for multiple elements efficiently using event delegation.

// Therefore, the provided code exemplifies the event delegation principle by utilizing a single event listener on a parent element to handle events for multiple child elements.