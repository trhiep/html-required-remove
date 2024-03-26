chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
      code: `
      const elems = document.querySelectorAll("input[required], select[required], textarea[required]");
      for (const elem of elems) {
        elem.removeAttribute("required");
      }
      alert("Remove all required attribute successfully!");
    `
  }, function(results) {
      if (chrome.runtime.lastError) {
          alert("Error occurred: " + chrome.runtime.lastError.message);
      }
  });
});