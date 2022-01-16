function getRegistration() {
    return (localStorage.getItem("_registration") ? JSON.parse(localStorage.getItem("_registration")) : false);
}

function createRegistration() {
    const skeleton = {
        currentStep: 1,
        data: {
            stepOne: {
                email: null,
                password: null
            }
        }
    }

    localStorage.setItem("_registration", JSON.stringify(skeleton));
}

function modifyRegistration(obj) {
    const currentObj = localStorage.getItem("_registration");


}

export {
    getRegistration as SessionGetRegistration,
    createRegistration as SessionCreateRegistration,
    modifyRegistration as SessionModifyRegistration
}