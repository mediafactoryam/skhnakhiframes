$(document).ready(function () {
  const ROOT_EL = $("#root");
  $(`<div class="flip-container">
      <h1>${INFO.title}</h1>
      <p>${INFO.text}</p>
  </div>`).appendTo($(".with-title"));
  for (const { name, dateOfDeath, description, link, photo } of DATA) {
    const linkHTML = (link) ? `<a href="${link}" target="_blank" >Կարդալ ավելին</a>` : "";    
    $(`
    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
	    <div class="flipper">
		    <div class="front">
          <img src="${photo}" alt="${name}" />
          <div>
            <h2>${name}</h2>
            <p>${dateOfDeath}</p>
          </div>
        </div>
        <div class="back">
          <p>${description}</p>
          ${linkHTML}
        </div>
      </div>
    </div>
    `).appendTo(ROOT_EL);
  }
});
