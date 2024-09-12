function createHeader() {
  const header = document.createElement("header");
  header.className = "dynamic-header"; // Add this line

  const links = [
    { id: "artwork-link", href: "artwork.html", text: "Artwork" },
    { id: "about-link", href: "index.html#about-title", text: "About" },
    { id: "contact-link", href: "index.html#contact-title", text: "Contact" },
  ];

  links.forEach((link) => {
    const a = document.createElement("a");
    a.id = link.id;
    a.href = link.href;
    a.textContent = link.text;
    header.appendChild(a);
  });

  // Insert the header at the beginning of the body
  document.body.insertBefore(header, document.body.firstChild);
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", createHeader);
