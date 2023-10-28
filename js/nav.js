let navelements = ["Home", "About", "Contact", "Atractions"];

let navlinks = ["index.html", "about.html",  "contact.html", "atractions.html"];

let navtext = '<ul class="flex">';

let navlength = navelements.length;
for(i=0; i<navlength; i++){
    navtext += '<li><a href="'+navlinks[i]+'">' + navelements[i] + "</a></li>";
    console.log(navtext);
}
navtext += "</ul>";

document.getElementById("nav").innerHTML = navtext;