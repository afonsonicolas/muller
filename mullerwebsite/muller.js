const menu = document.querySelector(".burgermenu");
const menuItems = document.querySelector(".menuItem1");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(){
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

document.addEventListener('DOMContentLoaded', () => {
  const ring1Elements = document.getElementsByClassName('ring1');
  const ring2Elements = document.getElementsByClassName('ring2');
  const ring3Elements = document.getElementsByClassName('ring3');
  const ring4Elements = document.getElementsByClassName('ring4');
  const ring5Elements = document.getElementsByClassName('ring5');
  const animate1Element = document.querySelector('.animate1');
  const animate2Element = document.querySelector('.animate2');
  const animate3Element = document.querySelector('.animate3');
  const animate4Element = document.querySelector('.animate4');
  const animate5Element = document.querySelector('.animate5');
  const masterCTAElement = document.querySelector('.masterCTA');

  // Convert the collections to arrays for easier iteration
  const ring1Array = Array.from(ring1Elements);
  const ring2Array = Array.from(ring2Elements);
  const ring3Array = Array.from(ring3Elements);
  const ring4Array = Array.from(ring4Elements);
  const ring5Array = Array.from(ring5Elements);

  // Function to apply the transform
  const applyTransform = (element) => {
    element.style.transition = 'transform 0.3s ease-out';
    element.style.transform = 'translateY(30px)';
  };

  // Function to remove the transform
  const removeTransform = (element) => {
    element.style.transition = 'transform 0.3s ease-out';
    element.style.transform = 'translateY(0)';
  };

  // Add event listeners to each element
  animate1Element.addEventListener('mouseenter', () => {
    ring1Array.forEach((ring1) => applyTransform(ring1));
  });
  animate1Element.addEventListener('mouseleave', () => {
    ring1Array.forEach((ring1) => removeTransform(ring1));
  });

  animate2Element.addEventListener('mouseenter', () => {
    ring1Array.forEach((ring1) => applyTransform(ring1));
    ring2Array.forEach((ring2) => applyTransform(ring2));
  });
  animate2Element.addEventListener('mouseleave', () => {
    ring1Array.forEach((ring1) => removeTransform(ring1));
    ring2Array.forEach((ring2) => removeTransform(ring2));
  });

  animate3Element.addEventListener('mouseenter', () => {
    ring1Array.forEach((ring1) => applyTransform(ring1));
    ring2Array.forEach((ring2) => applyTransform(ring2));
    ring3Array.forEach((ring3) => applyTransform(ring3));
  });
  animate3Element.addEventListener('mouseleave', () => {
    ring1Array.forEach((ring1) => removeTransform(ring1));
    ring2Array.forEach((ring2) => removeTransform(ring2));
    ring3Array.forEach((ring3) => removeTransform(ring3));
  });

  animate4Element.addEventListener('mouseenter', () => {
    ring1Array.forEach((ring1) => applyTransform(ring1));
    ring2Array.forEach((ring2) => applyTransform(ring2));
    ring3Array.forEach((ring3) => applyTransform(ring3));
    ring4Array.forEach((ring4) => applyTransform(ring4));
  });
  animate4Element.addEventListener('mouseleave', () => {
    ring1Array.forEach((ring1) => removeTransform(ring1));
    ring2Array.forEach((ring2) => removeTransform(ring2));
    ring3Array.forEach((ring3) => removeTransform(ring3));
    ring4Array.forEach((ring4) => removeTransform(ring4));
  });

  animate5Element.addEventListener('mouseenter', () => {
    ring1Array.forEach((ring1) => applyTransform(ring1));
    ring2Array.forEach((ring2) => applyTransform(ring2));
    ring3Array.forEach((ring3) => applyTransform(ring3));
    ring4Array.forEach((ring4) => applyTransform(ring4));
    ring5Array.forEach((ring5) => applyTransform(ring5));
  });
  animate5Element.addEventListener('mouseleave', () => {
    ring1Array.forEach((ring1) => removeTransform(ring1));
    ring2Array.forEach((ring2) => removeTransform(ring2));
    ring3Array.forEach((ring3) => removeTransform(ring3));
    ring4Array.forEach((ring4) => removeTransform(ring4));
    ring5Array.forEach((ring5) => removeTransform(ring5));
  });

  masterCTAElement.addEventListener('mouseenter', () => {
    ring1Array.forEach((ring1) => applyTransform(ring1));
    ring2Array.forEach((ring2) => applyTransform(ring2));
    ring3Array.forEach((ring3) => applyTransform(ring3));
  });
  masterCTAElement.addEventListener('mouseleave', () => {
    ring1Array.forEach((ring1) => removeTransform(ring1));
    ring2Array.forEach((ring2) => removeTransform(ring2));
    ring3Array.forEach((ring3) => removeTransform(ring3));
  });
});