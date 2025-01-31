class AppSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute("title") || "";
        const titleType = this.getAttribute("titleType") || "";
        const text = this.getAttribute("text") || "";
        const textType = this.getAttribute("textType") || "";
        const imgSrc = this.getAttribute("imgSrc") || "";
        const bgColor = this.getAttribute("bgColor") || "#AEB5B4"; // Color por defecto

        this.innerHTML = `
            <section>
                <h2 class="${titleType}">${title}</h2>
                <p class="${textType}">${text}</p>
                <div class="image-container">
                    <div class="${bgColor}"></div>
                    <img src="${imgSrc}" alt="App screenshot" class="image-overlay">
                </div>
                <slot></slot>
            </section>
        `;
    }
}

customElements.define("app-section", AppSection);

