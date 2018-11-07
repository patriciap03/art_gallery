//display on a div called "content"
//export all the functions

export function display_post(post){
    $("#content_pic").attr("src", post.image);
    $("#description").append(post.description);
}