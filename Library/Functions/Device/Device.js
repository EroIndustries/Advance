const DEVICED = (callback) => {
    const deviceInfo = {
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        language: navigator.language,
        cookiesEnabled: navigator.cookieEnabled,
        screenWidth: screen.width,
        screenHeight: screen.height,
        screenColorDepth: screen.colorDepth,
        onlineStatus: navigator.onLine,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    JSONIFICATION(deviceInfo, (deviceInf) => {
        callback(deviceInf);
    });
};
export{DEVICED};