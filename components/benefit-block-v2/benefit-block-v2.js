class BenefitBlockV2 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const icon = this.getAttribute("icon") || "" ;
        const title = this.getAttribute("title") || "" ;
        const widthIcon =  this.getAttribute("widthIcon") || "12";
        const heightIcon =  this.getAttribute("heightIcon") || "12"

        const isDesktop =  window.matchMedia ( "(min-width: 768px)" ).matches;

        if (!isDesktop) {
            this.innerHTML =`
            <div class="benefit-block-v2">
                <object type="image/png" data ="${icon}" width="${widthIcon}" height="${heightIcon}"></object>
                <h2 class="medium-large-text medium mt-16"> ${title}</h2>
            </div>
            `;
        } else {
            this.innerHTML =`
            <div class="benefit-block-v2"> 
                <object type="image/png" data ="${icon}" width="${widthIcon}" height="${heightIcon}"></object>
                <h2 class="medium-large-text medium pt-2 pb-1"> ${title}</h2>
            </div
           
            `;
        }
    }
}

customElements.define("benefit-block-v2", BenefitBlockV2);