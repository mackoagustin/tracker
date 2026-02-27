class AppSectionSlotRight extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

     async connectedCallback() {
        
        const title = this.getAttribute("title") || "";
        const titleType = this.getAttribute("titleType") || "";

        const text = this.getAttribute("text") || "";
        const textType = this.getAttribute("textType") || "";

        const question= this.getAttribute("question") || "";
        const questionType= this.getAttribute("questionType") || "";

        const answer= (this.getAttribute("answer") || "")
        .split("|")
        .map(i => i.trim())
        .filter(Boolean);
        
        const answerType= this.getAttribute("answerType") || "";
        
        const imgSrc = this.getAttribute("imgSrc") || "";
        const imgType= this.getAttribute("imgType");

        const styleSheet = await fetch("css/style.css").then(r => r.text());




        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        if(!isDesktop) {
            this.shadowRoot.innerHTML = `
            <style>${styleSheet}</style>
            <section class="container-carac-desktop-left">
                <div class="container-caract-text">
                <slot name="top_slot"></slot>
                <h2 class="${titleType}">${title}</h2>
                <p class="${textType}">${text}</p>
                <p class="${questionType}" style="padding-top: 40px;">${question}</p>
                <ul class="${answerType}">
                    ${answer.map(i => `<li class="mb-05">${i}</li>`).join("")}
                </ul>
                <slot name="bottom_slot"></slot>
                </div>
            </section>
        `;
        } else{
         this.shadowRoot.innerHTML = `
           <style>${styleSheet}</style>
           <section class="container-carac-desktop-left">
            
            <div class="container-caract-text">  
                <slot name="top_slot"></slot>
                <h2 class="${titleType} pb-2">${title}</h2>
                <p class="${textType}">${text}</p>
                <p class="${questionType}">${question}</p>
                <ul class="${answerType}">
                ${answer.map(i => `<li class="mb-05">${i}</li>`).join("")}
                </ul>
                <slot name="bottom_slot"></slot>
            </div> 
            <div class="image-container">
                 <img src="${imgSrc}" alt="App screenshot" class="${imgType}">
            </div>
           </section>
         `
        } 
        
    }
}

customElements.define("app-section-slot-right", AppSectionSlotRight);



