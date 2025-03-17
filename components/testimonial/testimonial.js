class Testimonial extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

            const text = this.getAttribute("text") || "" ;
            const image =  this.getAttribute("image") || "";
            const name = this.getAttribute("name") || "";
            const role =  this.getAttribute("role") || "";
            const idTestimonial = this.getAttribute('idTestimonial');

            const isDesktop = window.matchMedia("(min-width: 768px)").matches;
            if(!isDesktop){
                this.innerHTML = `
                <article class="testimony-container pt-5">
                    <div class="testimony-background-shape"></div>
                        <div class="testimony-card pt-5 pb-5" id="${idTestimonial}"    >
                            <p class="p-16 thin t-center testimony-body  fs-32px ">${text}</p>
                            <div class="pt-4 testimonial-flex">
                            <img src="${image}" height="70" width="70" alt="">
                            <p class="medium-large-text m-0 ">${name}</p>
                            <p class="medium-text light c-grey m-0">${role}</p>
                        </div>
                    </div>
                </article>
            `
            } else {
                this.innerHTML = `
                <article class="testimony-container pt-5">
                    <div class="testimony-background-shape"></div>
                        <div class="testimony-card pt-5 pb-5" id="${idTestimonial}"    >
                            <p class="p-16 thin t-center testimony-body pt-24 fs-32px ">${text}</p>
                            <div class="pt-4 testimonial-flex">
                            <img src="${image}" height="70" width="70" alt="">
                            <p class="medium-large-text m-0 ">${name}</p>
                            <p class="medium-text light c-grey m-0">${role}</p>
                        </div>
                    </div>
                </article>
            `
            }
           
    }
}

customElements.define("testimonial-block", Testimonial)
