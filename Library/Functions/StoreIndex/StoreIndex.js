const STOREINDEXED = (dbName, storeName, data, callback) => {
    let invoked = false;
    const cb = (success) => {
        if (!invoked && typeof callback === "function") {
            invoked = true;
            callback(success);
        }
    };
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, { keyPath: "Name" });
        }
    };
    request.onsuccess = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
            db.close();
            const newVersion = db.version + 1;
            const upgradeRequest = indexedDB.open(dbName, newVersion);
            upgradeRequest.onupgradeneeded = (e) => {
                const upgradeDb = e.target.result;
                upgradeDb.createObjectStore(storeName, { keyPath: "Name" });
            };
            upgradeRequest.onsuccess = (e) => {
                const upgradeDb = e.target.result;
                const tx = upgradeDb.transaction(storeName, "readwrite");
                const store = tx.objectStore(storeName);
                const addReq = store.add(data);
                addReq.onsuccess = () => {
                    tx.oncomplete = () => cb(true);
                };
                addReq.onerror = (e) => cb(false);
                tx.onerror = (e) => cb(false);
            };
            upgradeRequest.onerror = (e) => cb(false);
        } else {
            const tx = db.transaction(storeName, "readwrite");
            const store = tx.objectStore(storeName);
            const addReq = store.add(data);
            addReq.onsuccess = () => {
                tx.oncomplete = () => cb(true);
            };
            addReq.onerror = (e) => cb(false);
            tx.onerror = (e) => cb(false);
        }
    };
    request.onerror = (e) => cb(false);
};
export{STOREINDEXED};