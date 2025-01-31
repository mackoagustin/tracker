class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    async connectedCallback() { 
        const type = this.getAttribute("type") || "fill";
        const text = this.getAttribute("text") || "Button";
        const icon = this.getAttribute("icon") || "";

        try {
            const styleSheet =  await fetch("./components/button/button.css")
                                .then(res => res.text());

            this.shadowRoot.innerHTML = `
                <style>${styleSheet}</style>
                <button class="${type}">
                ${text}
                ${icon ? `<span class="icon"><img src="./assets/icons/${icon}" alt="${icon}"></span>` : ""}
                </button>
            `;
        } catch (error) {
            console.error("Error loading button.css:", error);
        }
    }
}

customElements.define("custom-button", CustomButton);
