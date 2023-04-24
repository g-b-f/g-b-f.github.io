const template = document.createElement('template');

template.innerHTML = `
<br>
<ul class="nav">
  <li><a href="index.html">Home</a></li>
  <li><a href="projects.html">Projects</a></li>
  <li><a href="links.html">Links</a></li>
</ul>
`;

document.body.appendChild(template.content);