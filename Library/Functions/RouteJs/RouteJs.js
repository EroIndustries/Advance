const ROUTEJS = (DATA) => {
    const styleElement = document.createElement("script");
    styleElement.textContent = DATA;
    document.head.appendChild(styleElement);
};
export{ROUTEJS};