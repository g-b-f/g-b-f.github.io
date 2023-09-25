// Get the root element
var r = document.querySelector(':root');
// var s = sessionStorage;
var s = localStorage;

function setTheme(textColour="white", light_bg="#66a", mild_bg= "#66a", med_bg= "#559", strong_bg= "#227") {

    // Set value of colour variables
    r.style.setProperty('--textColour', textColour);
    r.style.setProperty('--light_bg', light_bg);
    r.style.setProperty('--mild_bg', mild_bg);
    r.style.setProperty('--med_bg', med_bg);
    r.style.setProperty('--strong_bg', strong_bg);

    // Saving selection to session storage
    s.setItem("textColour", textColour);
    s.setItem("light_bg", light_bg);
    s.setItem("mild_bg", mild_bg);
    s.setItem("med_bg", med_bg);
    s.setItem("strong_bg", strong_bg);
}

function getTheme(){
    
    // retrieve colours from storage
    let textColour = sessionStorage.getItem("textColour");
    let light_bg = sessionStorage.getItem("light_bg");
    let mild_bg = sessionStorage.getItem("mild_bg");
    let med_bg = sessionStorage.getItem("med_bg");
    let strong_bg = sessionStorage.getItem("strong_bg");
    
    // set theme
    setTheme(textColour, light_bg, mild_bg, med_bg, strong_bg)    
}

if (s.getItem("textColour")){      // if there's anything in storage
    getTheme()                                  // retrieve the theme
}
else{
    setTheme()                                  // otherwise set it to default
}