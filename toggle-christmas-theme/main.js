const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const events = [christmasBtn, snowBtn]

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
function switchTheme(event) {
  const theme = event.target

  if(theme === christmasBtn) {
    body.classList.add('christmas')
    body.classList.remove('snow')
    greeting.textContent = `🎅 Merry Christmas!`;
  } else if (theme === snowBtn) {
    body.classList.add('snow')
    body.classList.remove('christmas')
    greeting.textContent = `☃️ Snow Time!`;
  }
}

events.forEach((event) => {
  event.addEventListener('click', switchTheme)
})

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.

