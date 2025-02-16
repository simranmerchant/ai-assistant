function localStorageSetItem(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (ignorable) {
    }
}

function localStorageGetItem(key) {
    try {
        return localStorage.getItem(key);
    } catch (ignorable) {
        return null;
    }
}

AI_API_KEY = "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"