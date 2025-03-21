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
        const imgType= this.getAttribute("imgType")

        const bgColor = this.getAttribute("bgColor") || "#AEB5B4"; // Color por defecto

        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        if(!isDesktop) {
            this.innerHTML = `
            <section>
                <h2 class="${titleType}">${title}</h2>
                <p class="${textType}">${text}</p>
                <div class="image-container">
                    <img src="${imgSrc}" alt="App screenshot" class="image-overlay">
                </div>
                <slot></slot>
            </section>
        `;
        } else{
         this.innerHTML = `
         <section class="container-carac-desktop">
            <div class="container-caract-text">
                <h2 class="${titleType}">${title}</h2>
                <p class="${textType}">${text}</p>
            </div>
            <div>
                <img src="${imgSrc}" alt="App screenshot" class="${imgType}">
            </div>
         </section>
         `
        } 
        
    }
}

customElements.define("app-section", AppSection);



