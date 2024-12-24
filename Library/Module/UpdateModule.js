const APPUPDATER=()=>{

    if (localStorage.getItem("Environment" === 'Development' )) {

        import('../Start/Start.js')
        .then(module =>
            {
                if (typeof module.APPLOAD === 'function') {
                    module.APPLOAD();
                } else {
                    console.error('APPLOAD is not defined in the module');
                };
            }
        )
        .catch(error =>
            {
                console.error('Error loading the module:', error);
            }
        ); 
        
    } else {

        import('https://eroindustries.github.io/Advance/Start/Start.js')
        .then(module =>
            {
                if (typeof module.APPLOAD === 'function') {
                    module.APPLOAD();
                } else {
                    console.error('APPLOAD is not defined in the module');
                }
            }
        )
        .catch(error =>
            {
                console.error('Error loading the module:', error);
            }
        ); 
        
    };

};

export{APPUPDATER}