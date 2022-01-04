;(function () {
    const form = document.querySelector("#lp-smart-form-2")
    // const inputName = document.querySelector("#lp-field-1-name")
    // const inputCard = document.querySelector("#lp-field-1-card")
    // const inputExpiry = document.querySelector("#lp-field-1-expiry-date")
    // const inputCvv = document.querySelector("#lp-field-1-cvv")

    // inputName.addEventListener("keypress", (e) => {
    //     console.log(e.target.value)
    // })

    // inputCard.addEventListener("keypress", (e) => {
    //     return false
    // })

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log("LP Smart Field 2 -- Submitted")
    })
})()
