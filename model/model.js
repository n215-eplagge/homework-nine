//this is the model, where all of the website's info is stored

export function reRoute(){
    let fullID = window.location.hash;
    let siteID = fullID.replace("#","");

    if(siteID != ""){
        $.get(`pages/${siteID}.html`, function (data){
            $("#content").html(data);
        });
    } else{
        $.get(`pages/home.html`, function (data){
            $("#content").html(data);
        });

    }
}