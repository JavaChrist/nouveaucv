$(document).ready(function () {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("id")) {
    $.getJSON("/js/galleries.json", function (data) {
      let galleryToDisplay = data[searchParams.get("id")];
      $("#singleGallery h1").text(galleryToDisplay.title);
      let rootUl = $("#singleGallery ul");
      $.each(galleryToDisplay.images, function (index, image) {
        $(`<li><img src="images/${image}" /></li>`)
          .click(showSinglePict)
          .appendTo(rootUl);
      });
    });
  } else {
    window.location.pathname = "galleries.html";
  }
});
function showSinglePict(evt) {
  $("#galleryContainer")
    .click(closeSinglePict)
    .addClass("visible")
    .children("img")
    .attr("src", evt.target.src);
}

function closeSinglePict() {
  $("#galleryContainer").removeClass("visible");
}
