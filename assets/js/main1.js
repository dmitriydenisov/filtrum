document.querySelectorAll(".accordion-btn").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentNode;
    if (parent.classList.contains("active")) {
      parent.classList.remove("active");
    } else {
      document
        .querySelectorAll(".faq__item")
        .forEach((child) => child.classList.remove("active"));
      parent.classList.toggle("active");
    }
  });
});

var elem = document.querySelector(".articles__items");
if (elem) {
  var msnry = new Masonry(elem, {
    // options
    itemSelector: ".articles__item",
    columnWidth: 1,
    gutter: ".gutter-sizer",
    percentPosition: true,
  });
}
