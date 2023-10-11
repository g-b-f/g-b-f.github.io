const template = document.createElement('template');

template.innerHTML = `
<br>
<ul class="nav">
  <li class="topLinks"><a href="/index.html">Home</a></li>
  <li class="topLinks"><a href="/projects.html">Projects</a></li>
  <li class="topLinks"><a href="/links.html">Links</a></li>
  <li class="topLinks"><a href="/themes.html">Themes</a></li>
</ul>
`;

document.body.appendChild(template.content);