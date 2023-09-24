themeDict={
    "Dark": ["#66a", "#66a", "#559", "#227"],
    "Light": ["#7e7ece", "#7e7ece", "#8f8fef","#a3a3ff"],
    "Accessibility Green": ["#A8F29A", "#A8F29A", "#A8F29A", "#A8F29A"],
    "Accessibility Yellow": ["#F8FD89", "#F8FD89", "#F8FD89", "#F8FD89"],
    "Accessibility Blue": ["#96ADFC", "#96ADFC", "#96ADFC", "#96ADFC"],
    "Black and White": ["black", "black", "#282828", "black"],
    "Sunset": ["#aa8764", "#aa8764", "#9b6655", "#772222"],
    "Ye Olde Theme": ["antiquewhite", "antiquewhite", "tan", "darkgoldenrod"],
    "Teal": ["#3AAFA9", "#3AAFA9", "#2B7A78", "#17252a"],
    "Plum":["#895061", "#895061", "#78244c", "#59253a"],
    "Candy Floss": ["#83d9dc", "#83d9dc", "#e3c3ff", "#f498c2"],
    "Pastels": ["#AEC6CF", "#AEC6CF", "#ffc4c4", "#ae7f9a"],
    "Gray": ["#999999", "#999999", "#666666", "#444444"]
}

header="""
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="gabe_stylesheet.css">
<title>Themes</title>

</head>
<body>

<script src="index.js" type="text/javascript"></script>

<h1>Themes</h1>
<h2>Spice up your life, or at least my page</h2>
<div class="mainbox">
"""


"""
<div class="themeItem">
    <a class="themeItem" href="#" onclick="setTheme('white','black','#66a','#559','#227')">Dark</a>
    <div class="boxWrapper">
        <div style="background-color:white;" class="box"></div>
        <div style="background-color:black;" class="box"></div>
        <div style="background-color:#66a;" class="box"></div>
        <div style="background-color:#559;" class="box"></div>
        <div style="background-color:#227;" class="box"></div>
    </div>
</div>
<br>
"""

for name, colours in themeDict.items():
    test=[f'<div style="background-color:{colour};" class="box"></div>' for colour in colours]
    
    print(test)
    break