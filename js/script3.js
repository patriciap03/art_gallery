//create functions to display user information

export function display_profile_pic(pic){
    $("#profile_pic").attr("src", pic.profile_pic)
}

export function display_user_info(info){
   $("#name").append(info.full_name);
   $("#bio").append(info.bio);
   $("#loc").append(info.location);
}

export function display_contact_info(info){
    $("#phone").append(info.phone_number);
    $("#email").append(info.email)
}
