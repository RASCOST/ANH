const setYearFooter = () => {
    const yearSpan = document.getElementById("year")
    console.log(yearSpan)
    const date = new Date()

    yearSpan.innerText = date.getFullYear()
}

setYearFooter()