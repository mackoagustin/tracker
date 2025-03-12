class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() { 
        const type = this.getAttribute("type") || "fill";
        const text = this.getAttribute("text") || "Button";
        const icon = this.getAttribute("icon") || "";
        const href = this.getAttribute("href"); // Si no hay href, será null

        try {
            const styleSheet = await fetch("./components/button/button.css")
                                .then(res => res.text());

            this.shadowRoot.innerHTML = `
                <style>${styleSheet}</style>
                <button class="${type}" ${href ? `data-href="${href}"` : ""}>
                    ${text}
                    ${icon ? `<span class="icon"><img src="./assets/icons/${icon}" alt="${icon}"></span>` : ""}
                </button>
            `;

           
            const button = this.shadowRoot.querySelector("button");
            if (href) {
                button.addEventListener("click", () => {
                    window.location.href = href;
                });
            }

        } catch (error) {
            console.error("Error loading button.css:", error);
        }
    }
}

customElements.define("custom-button", CustomButton);
