const setYearFooter = () => {
    const yearSpan = document.getElementById("year")
    console.log(yearSpan)
    const date = new Date()

    yearSpan.innerText = date.getFullYear()
}

const jumpto = (anchor) => {
    window.location.href = "#"+anchor;
    let url = location.href;
    location.href = "#"+anchor;
    history.replaceState(null,null,url);
}

setYearFooter()