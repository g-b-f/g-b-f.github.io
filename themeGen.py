# function setTheme(textColour="white", light_bg="black", mild_bg= "#66a", med_bg= "#559", strong_bg= "#227")

themeDict={
# "Default":["#fff","#999";"#666","#333","#000"],
'Dark Blue': ['white', '#66a', '#66a', '#559', '#227'],
'Light Blue': ['black', '#7e7ece', '#7e7ece', '#8f8fef', '#a3a3ff'],
# 'Accessibility Green': ['Black', '#A8F29A', '#A8F29A', '#A8F29A', '#A8F29A'],
# 'Accessibility Yellow': ['Black', '#F8FD89', '#F8FD89', '#F8FD89', '#F8FD89'],
# 'Accessibility Blue': ['Black', '#96ADFC', '#96ADFC', '#96ADFC', '#96ADFC'],
'Black and White': ['white', 'black', 'black', '#282828', 'black'],
'Sunset': ['#fff', '#aa8764', '#aa8764', '#9b6655', '#772222'],
'Ye Olde Theme': ['saddlebrown', 'antiquewhite', 'antiquewhite', 'tan', 'darkgoldenrod'],
'Teal': ['white', '#3AAFA9', '#3AAFA9', '#2B7A78', '#17252a'],
'Plum': ['white', '#895061', '#895061', '#78244c', '#59253a'],
'Candy Floss': ['black', '#83d9dc', '#83d9dc', '#e3c3ff', '#f498c2'],
'Pastels': ['black', '#AEC6CF', '#AEC6CF', '#ffc4c4', '#ae7f9a'],
'Gray': ['#f2f2f2', '#999999', '#999999', '#666666', '#444444']
}


header="""<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="gabe_stylesheet.css">
<title>Themes</title>
<script src="themes.js"></script>

</head>
<body>

<script src="index.js" type="text/javascript"></script>

<h1>Themes</h1>
<h2>Spice up your life, or at least my page</h2>
<div class="mainbox">

"""

with open( "themes.html",'wt') as fo:
    fo.write(header)
    for name, colours in themeDict.items():
        themeBox=[f'\t\t\t<div style="background-color:{colour};" class="box"></div>' for colour in colours]
        setThemeArgs=[f"'{colour}'" for colour in colours]
        themeButton=f"""\t\t<a class="themeItem" href="#" onclick="setTheme({','.join(setThemeArgs)})">{name}</a>\n"""
        
        fo.write('\t<div class="themeItem">\n')
        fo.write(themeButton)
        fo.write('\t\t<div class="boxWrapper">\n')
        fo.write('\n'.join(themeBox))
        fo.write("\n\t\t</div>\n\t</div>\n\t<br>\n\n")
    fo.write("</main>\n</body>\n</html>")