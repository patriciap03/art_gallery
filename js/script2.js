//display on a div called "content"
//export all the functions

export function display_post(post){
    //$("#content").attr("src", post.image); post.description
    $("#content").append(
        "<div class='content_pic_containter'>" +
            "<img class='content_pic' src=" + post.image + ">" +
        "</div>" + 
        "<div>" + 
            "<h4 class='description'>" + post.description+ "</h4>" + 
        "</div>" 
    );
}
