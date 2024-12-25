const CALL = (NUMBER) => {
    const phoneNumber = NUMBER;
    window.location.href = "tel:" + phoneNumber;
};
export{CALL};