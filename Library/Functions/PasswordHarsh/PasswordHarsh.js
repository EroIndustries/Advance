const PASSWORDHASH = async (password, callback) => {
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
        callback(hashHex);
    } catch (error) {
        console.log(error);
    }
};
export{PASSWORDHASH};