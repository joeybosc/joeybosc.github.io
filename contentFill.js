async function loadServerText(filePath, elementID) {
    try {
        const response = await fetch(filePath)
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const textContent = await response.text();
        document.getElementById(elementID).innerHTML = textContent;
    }
    catch(error) {
        console.error("Unable to load text content:", error)
        document.getElementById(elementID).textContent = "Error: Unable to fetch text content from server."
    }
    
}

if (isBuckPage) {
    loadServerText('textContent/buckContent.txt', 'buckContent');
}

if (isReceiverPage) {
    loadServerText('textContent/receiverContent.txt', 'receiverContent')
}