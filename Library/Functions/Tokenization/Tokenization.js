const TOKENIZATION = (EMAIL, NAME, DETAILS, AMOUNT, LINK, callback) => {
    const TokenApi = "https://script.google.com/macros/s/AKfycbxkGgol95WSc9YQIqXrQYRFbYQfaN3KM_jG83vjwWRcqZJl1CKVh2gQ3FAuyeX7Jzre3Q/exec";
    const RequestApi = "https://script.google.com/macros/s/AKfycbxNdYSJn1P-BqHzBQ00UWYv8K-FZIkaRHBXSRR-sfBUFryfawtvAA4IwRtJgZm_gty1/exec";
    const ProcessApi = "https://script.google.com/macros/s/AKfycbzLmZe07TqnPzhppMMgd6EdkvAl3f_mj_sh9RMqDqSPvxnRTqH_4yE31ZYuotCKcHnq/exec";
    fetch(TokenApi)
        .then((res) => res.json())
        .then((data) => {
            fetch(RequestApi, { method: "Post", body: JSON.stringify({ token: data.body.token }) })
                .then((res) => res.json())
                .then((datata) => {
                    const Mydata = { token: data.body.token, email: EMAIL, name: NAME, amount: AMOUNT, ipn_id: datata.ipn_id, link: LINK, description: DETAILS };
                    fetch(ProcessApi, { method: "Post", body: JSON.stringify(Mydata) })
                        .then((res) => res.json())
                        .then((info) => {
                            callback(info.redirect_url);
                        })
                        .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
};
export{TOKENIZATION};