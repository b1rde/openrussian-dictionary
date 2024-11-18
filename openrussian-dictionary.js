browser.contextMenus.create({
  id: "openrussian",
  title: "Search selected text on OpenRussian",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openrussian") {
    const selectedText = info.selectionText;
		
    const searchUrl = `https://en.openrussian.org/list/all?search=${encodeURIComponent(selectedText)}`;

    browser.tabs.create({ url: searchUrl });
  }
});
