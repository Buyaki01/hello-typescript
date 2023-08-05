// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

const year = document.getElementById("year") as HTMLInputElement
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear.toString())
year.textContent = thisYear.toString()