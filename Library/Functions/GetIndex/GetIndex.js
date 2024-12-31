const GETINDEXED = (dbName, storeName, callback) => {
    const initialRequest = indexedDB.open(dbName);
    initialRequest.onsuccess = function (event) {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
            console.error(`Object store "${storeName}" not found.`);
            db.close();
            return;
        }
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const getAllRequest = store.getAll();
        getAllRequest.onsuccess = function (event) {
            const data = event.target.result;
            callback(data);
        };
        getAllRequest.onerror = function (event) {
            console.error("Error retrieving data", event.target.error);
        };
        transaction.oncomplete = function () {
            console.log("Transaction completed");
        };
        transaction.onerror = function (event) {
            console.error("Transaction error", event.target.error);
        };
        db.close();
    };
    initialRequest.onupgradeneeded = function (event) {
        console.error("Upgrade needed but not handled in this function. Please ensure the object store exists before calling GETINDEXED.");
    };
    initialRequest.onerror = function (event) {
        console.error("Error opening database", event.target.error);
    };
};
export{GETINDEXED};