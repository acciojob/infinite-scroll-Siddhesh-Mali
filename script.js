//your code here!

const infi_container = document.getElementById("infi-list");
let itemCount = 20; // Number of items initially displayed

infi_container.addEventListener('scroll', () => {
  const scrollTop = infi_container.scrollTop; // User's current scroll position
  const scrollHeight = infi_container.scrollHeight; // Total height of the container
  const clientHeight = infi_container.clientHeight; // Visible height of the container

  // Check if the user is near the bottom (considering a buffer)
  const isNearBottom = scrollTop >= clientHeight ;

  if (isNearBottom) {
    infi_container.innerHTML += `<li>Item ${itemCount + 1}</li> <li>Item ${itemCount + 2}</li>`;
      itemCount += 2;
    }

//   console.log("scrolled", scrollTop); // Scrolled from top
//   console.log(clientHeight); // Visible part of screen
});