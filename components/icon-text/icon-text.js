class IconText extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const icon = this.getAttribute("icon") || "";
        const text = this.getAttribute("text") || "";
        const type = this.getAttribute("type") || "";
        const widthIcon =  this.getAttribute("widthIcon") || "12";
        const heightIcon =  this.getAttribute("heightIcon") || "12"

        this.innerHTML = `
            <div class = "${type}">
            <object type="image/svg+xml" data="${icon}" width="${widthIcon}" height="${heightIcon}"></object>
            <p class="pl-1 medium small-text">${text}</p>
            </div
        `;
    }
}

customElements.define("icon-text", IconText);
