class BenefitBlock extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const icon = this.getAttribute("icon") || "";
        const title = this.getAttribute("title") || "";
        const text = this.getAttribute("text") || "";
        const widthIcon =  this.getAttribute("widthIcon") || "12";
        const heightIcon =  this.getAttribute("heightIcon") || "12"

        const isDesktop = window.matchMedia("(min-width: 768px)").matches

        if(!isDesktop) {
            this.innerHTML = `
            <object type="image/svg+xml" data="${icon}" width="${widthIcon}" height="${heightIcon}"></object>
            <h2 class="medium-large-tex medium"> ${title}</h2>
            <p class="normal-text c-grey light fh-24 pb-3">${text}</p>
        `;
        } else {
            this.innerHTML = `
            <object type="image/svg+xml" data="${icon}" width="${widthIcon}" height="${heightIcon}"></object>
            <h2 class="medium-large-tex medium pt-2 pb-1"> ${title}</h2>
            <p class="normal-text c-grey light fh-24 pb-3">${text}</p>
        `;
        }
        
    }
}

customElements.define("benefit-block", BenefitBlock
    
);
