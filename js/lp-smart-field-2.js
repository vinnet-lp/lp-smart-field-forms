;(function () {
    const LP_FORM_APPEND = "lp-field-2-"
    const form = document.querySelector("#lp-smart-form-2")
    const inputName = document.querySelector(`#${LP_FORM_APPEND}name`)
    const inputCard = document.querySelector(`#${LP_FORM_APPEND}card`)
    const inputExpiry = document.querySelector(`#${LP_FORM_APPEND}expiry-date`)
    const inputCvv = document.querySelector(`#${LP_FORM_APPEND}cvv`)

    inputCard.addEventListener("input", (e) => {
        let inputValue = Array.from(e.target.value)
        let thisInput = parseInt(inputValue.pop())
        if (Number.isInteger(thisInput) && inputValue.length <= 22) {
            inputValue.push(thisInput)
            if (inputValue.filter((i) => i !== " ").length % 4 === 0) inputValue.push(" ")
        }
        e.target.value = inputValue.join("")
    })

    inputExpiry.addEventListener("input", (e) => {
        let inputValue = Array.from(e.target.value)
        let thisInput = parseInt(inputValue.pop())
        if (Number.isInteger(thisInput) && inputValue.length <= 4) {
            inputValue.push(thisInput)
            if (inputValue.length === 2) inputValue.push("/")
        }
        e.target.value = inputValue.join("")
    })

    inputCvv.addEventListener("input", (e) => {
        let inputValue = Array.from(e.target.value)
        let thisInput = parseInt(inputValue.pop())
        if (Number.isInteger(thisInput) && inputValue.length <= 2) {
            inputValue.push(thisInput)
        }
        e.target.value = inputValue.join("")
    })

    const createErrorLabel = (message) => {
        let error = document.createElement("span")
        error.classList.add("lp-error-message")
        error.innerHTML = message
        return error
    }

    const EMPTY_FIELD_ERRORS = {
        name: "Enter your name exactly as it appears on your card.",
        card: "Enter your credit card number.",
        expiryDate: "Enter your credit card expiration.",
        cvv: "Enter your credit card CVV.",
    }

    const getFieldName = (inputField) => {
        let idValue = inputField.getAttribute("id")
        if (idValue && idValue.split(LP_FORM_APPEND).length > 1) {
            let fieldName = idValue.split(LP_FORM_APPEND)[1].split("-").join("")
            return fieldName === "expirydate" ? "expiryDate" : fieldName
        }

        return false
    }

    const validateInput = (input) => {
        // give an error if the form input is input and return true
        if (!input.value && !input.classList.contains("lp-has-error")) {
            input.classList.add("lp-has-error")
            input.parentNode.appendChild(createErrorLabel(EMPTY_FIELD_ERRORS[getFieldName(input)]))
            return true
        }

        // check if the form input has a valid string
        input.classList.remove("lp-has-error")
        let errorElement = input.parentNode.children[2]
        if (errorElement) errorElement.remove()
        return false
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        validateInput(inputName)
        validateInput(inputCard)
        validateInput(inputExpiry)
        validateInput(inputCvv)
    })
})()
