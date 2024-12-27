const INSPECTION = () => {
    if (localStorage.getItem("Environment") === 'Development') {
        console.log('App Page Can be Inspected');
    } else {
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J'))) {
                e.preventDefault();
            };
        });
        document.addEventListener('keydown', function (e) {
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
            };
        });
        const detectDevTools = () => {
            const threshold = 160; 
            const devToolsOpen = window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold;
            if (devToolsOpen) {
                window.resizeTo(window.outerWidth - 1, window.outerHeight - 1);  
                window.resizeTo(window.outerWidth + 1, window.outerHeight + 1);  
            };
        };
        setInterval(detectDevTools, 100);
    };
};
export { INSPECTION };
