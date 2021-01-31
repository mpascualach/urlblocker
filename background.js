const forbiddenLinks = [
    'https://www.youtube.com/',
    'https://www.reddit.com/'
]

const redirectedTab = {
    active: true,
    url: 'https://www.randomdoggiegenerator.com/'
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (forbiddenLinks.indexOf(tab.url) !== -1) {
        chrome.tabs.remove(tabId);
        // chrome.tabs.create(redirectedTab, () => {
        //     console.log("Success");
        //     return;
        // })
    }
})