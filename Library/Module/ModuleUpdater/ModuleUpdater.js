const MODULEUPDATER=()=>{
    import('../Start/Start.js')
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
export{MODULEUPDATER};