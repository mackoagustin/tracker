class Textblock extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const title = this.getAttribute("title") || "";
        const highlightTitle =  this.getAttribute("highlightTitle") || "";
        const typeTitle =  this.getAttribute("typeTitle") || "black";
        const text = this.getAttribute("text") || "";
        const typeText =  this.getAttribute("typeText") || "black";
        const highlight = this.getAttribute("highlight") || "";
  

        try {
            const styleSheet = await fetch("./components/text-block/text-block.css")
                .then(res => res.text());

            this.shadowRoot.innerHTML = `
            <style>${styleSheet}</style>
            <h1 class="${typeTitle}">${title.replace("[highlightTitle]", `<strong class="regular">${highlightTitle}</strong>`)}</h1>
            <p class="${typeText}">${text.replace("[highlight]", `<strong>${highlight}</strong>`)}</p>
            `;
        } catch (error) {
            console.error("Error loading text-block.css:", error);
        }
    }
}

customElements.define("text-block", Textblock);
