function changeClass(targetText) {
    const newClass = "gradient";

    const textNodes = getTextNodes(document.body);

    textNodes.forEach((node) => {
        const text = node.nodeValue;
        const newText = text.replace(new RegExp(`\\b${targetText}\\w*`, 'gi'), (match) => {
            return `<span class="${newClass}">${match}</span>`;
        });

        if (newText !== text) {
            const newNode = document.createElement("span");
            newNode.innerHTML = newText;
            node.parentNode.replaceChild(newNode, node);
        }
    });
}

function getTextNodes(node) {
    const textNodes = [];
    if (node.nodeType === Node.TEXT_NODE) {
        textNodes.push(node);
    } else {
        const childNodes = node.childNodes;
        for (const childNode of childNodes) {
            textNodes.push(...getTextNodes(childNode));
        }
    }
    return textNodes;
}

changeClass("IEEE");
