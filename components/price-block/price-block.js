class PriceBlock extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute("title") || "";
        const price = this.getAttribute("price") || "";
        const text = this.getAttribute("text") || "";
        const backgroundColor = this.getAttribute("backgroundColor") === "green-bg" ? "green-bg" : "white-bg"; 

        // Botón
        const buttonText = this.getAttribute("buttonText") || "";
        const buttonType = this.getAttribute("buttonType") || "";
        const buttonIcon = this.getAttribute("buttonIcon") || "";

        this.innerHTML = `
            <article class="p-vertical-smal pt-4 ">
                <div class=" p-vertical-small b-all br-24 pt-36 pb-36 ${backgroundColor}">
                    <object type="image/svg+xml" data="assets/icons/circle.svg" width="56" height="56"></object>
                        <h2 class="pt-3 m-0 regular">${title}</h2>
                        <div class="container-row pt-16 pb-2">
                            <h1 class="xxl-text regular  m-0">$${price} </h1>
                            <p class="medium-large-text pl-2">por mes</p> 
                        </div>

                        <p class="thin">${text}</p>
                         <custom-button text="${buttonText}" type="${buttonType}" icon="${buttonIcon}"></custom-button>
                </div>
            </article>
        `;
    }
}

customElements.define("price-block", PriceBlock);

