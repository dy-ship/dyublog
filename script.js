// Scroll effect for header background
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.style.backgroundColor = "#1f2d3a"; // darker when scrolled
  } else {
    header.style.backgroundColor = "#2c3e50"; // default color
  }
});

// Sample script to handle comment form submission
const form = document.querySelector("form");
if(form){
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const commentField = document.querySelector("textarea");
    const comment = commentField ? commentField.value.trim() : "";
    if(comment) {
      alert("Your comment has been submitted!");
      if(commentField) commentField.value = "";
    } else {
      alert("Please enter a comment before submitting.");
    }
  });
}
