const INSPECTION=()=>{
    if (localStorage.getItem("Environment") === 'Development' ) {
        console.log('App Page Ca n be Inspected');        
    } else {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J'))) {
                e.preventDefault();
            };
        });
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
            };
        });
    };
};
export{INSPECTION};