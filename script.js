function menuvisible(){
    document.getElementById('lower_part').style.transform = "translateY(-71.2vh)";
    document.getElementById('nav_icons_list1').style.opacity = "0";
    document.getElementById('nav_icons_list2').style.opacity = "0";
    document.getElementById('nav_icons_list3').style.opacity = "0";
    document.getElementById('nav_icons_list4').style.opacity = "0";
    document.getElementById('nav_icons_list5').style.opacity = "0";
    //document.getElementById('lower_part').style.transform = "translateY(-91.2vh)";
    document.getElementById('menu_opener_arrow').style.opacity = "0";

    document.getElementById('inner_upper_home_icons_container').style.opacity = "0";
    document.getElementById('upper_search_container').style.opacity="0";


    document.getElementById('menu_full').style.transform = "translateY(-86vh)";
    document.getElementById('menu_full').style.height = "86vh";
    document.getElementById('search_for_apps_input').style.display = "block";
    document.getElementById('body').style.height = "200vh";

    document.getElementById('one_outer_div_rec').style.display = "block";
    
}



function back(){
    document.getElementById('search_for_apps_input').style.display = "none";
    document.getElementById('menu_full').style.transform = "translateY(0vh)";
    document.getElementById('menu_full').style.height = "0vh";
    

    document.getElementById('one_outer_div_rec').style.display = "none";
    document.getElementById('menu_opener_arrow').style.opacity = "1";

    
    document.getElementById('inner_upper_home_icons_container').style.opacity = "1";
    document.getElementById('lower_part').style.transform = "translateY(0vh)";
    document.getElementById('upper_search_container').style.opacity="1";
    document.getElementById('nav_icons_list1').style.opacity = "1";
    document.getElementById('nav_icons_list2').style.opacity = "1";
    document.getElementById('nav_icons_list3').style.opacity = "1";
    document.getElementById('nav_icons_list4').style.opacity = "1";
    document.getElementById('nav_icons_list5').style.opacity = "1";


    document.getElementById('google_search').placeholder ="Google";
    document.getElementById('searched').style.backgroundColor = "#ffffff00";
    document.getElementById('searched').style.height = "7vh";
    document.getElementById('searched').style.marginTop = "4.5vh";
    document.getElementById('searched').style.boxShadow = "0px 0px 10px #33333300";

    document.getElementById('keyboard').style.height = "0vh";
    document.getElementById('keyboard').style.transform = "translateY(0vh)";
    document.getElementById('extra_for_search').style.display = "none";
    document.getElementById('search_button').style.display = "none";
    document.getElementById('space_button').style.display = "none";

    document.getElementById('last_searched1').style.display = "none";
    document.getElementById('last_searched2').style.display = "none";
    document.getElementById('last_searched3').style.display = "none";
    document.getElementById('last_searched4').style.display = "none";
    document.getElementById('last_searched5').style.display = "none";
    document.getElementById('last_searched6').style.display = "none";

    document.getElementById('threed_touch').style.display = "none";
}

function searching(){
    document.getElementById('google_search').placeholder ="Search...";
    document.getElementById('searched').style.backgroundColor = "#fffffffa";
    document.getElementById('searched').style.height = "55vh";
    document.getElementById('searched').style.marginTop = "53vh";
    document.getElementById('searched').style.boxShadow = "0px 0px 10px #33333390";

    document.getElementById('keyboard').style.height = "34vh";
    document.getElementById('keyboard').style.transform = "translateY(-15.5vh)";
    document.getElementById('extra_for_search').style.display = "block";
    document.getElementById('search_button').style.display = "block";
    document.getElementById('space_button').style.display = "block";

    document.getElementById('last_searched1').style.display = "block";
    document.getElementById('last_searched2').style.display = "block";
    document.getElementById('last_searched3').style.display = "block";
    document.getElementById('last_searched4').style.display = "block";
    document.getElementById('last_searched5').style.display = "block";
    document.getElementById('last_searched6').style.display = "block";
}
function myfun(){
    
    
}

function threedtouch(){
    document.getElementById('threed_touch').style.transform = "translateY(2vh)";
    document.getElementById('threed_touch').style.height = "30vh";
    document.getElementById('threed_touch').style.display = "block";
}