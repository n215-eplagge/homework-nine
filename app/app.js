//this serves primarily as the controller for the website

import * as EXPORTS from "../model/model.js";

function firstListen(){
    $(window).on("hashchange", EXPORTS.reRoute);
    EXPORTS.reRoute();
}


//once pages loads, this runs
$(document).ready(function (){
    firstListen();
})