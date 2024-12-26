const PASSWORDDEHASH = async (hashedPassword, inputPassword, callback) => {
    try {
        const encoder = new TextEncoder();
        const inputData = encoder.encode(inputPassword);
        const inputHashBuffer = await crypto.subtle.digest("SHA-256", inputData);
        const inputHashArray = Array.from(new Uint8Array(inputHashBuffer));
        const inputHashHex = inputHashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
        const match = hashedPassword === inputHashHex;
        callback(match);
    } catch (error) {
        console.log(error);
    }
};
export{PASSWORDDEHASH};