$(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function (result) {
            $.each(result, function (index, item) {
                $(".container").append("<div class='card' style='width: 18rem;'>" +
                "<div class='card-body'>" + 
                  "<h5 class='card-title'>" + item.title + "</h5>" +
                  "<p class='card-text'>" + item.body + "</p>" +
                  "<a href='#' class='card-link'>Blog Link</a>" +
                "</div>" +
                "</div>");
            });
        }
    });
});

// "<div class="card" style="width: 18rem;">" +
// "<div class="card-body">" + 
//   "<h5 class="card-title">" + item.title + "</h5>" +
//   "<p class="card-text">" + item.body + "</p>" +
//   "<a href="#" class="card-link">Blog Link</a>" +
// "</div>" +
// "</div>"