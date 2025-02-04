class FAQItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const question = this.getAttribute("question");
        const answer = this.innerHTML;
        // locasl this.innerHTML = `
        //     <div class="faq-item">
        //         <div class="faq-question">
        //             <span class="p-16 regular">${question}</span>
        //             <img src="/assets/icons/plus.svg" class="faq-icon">
        //         </div>
        //         <div class="faq-answer small-text thin c-grey ">${answer}</div>
        //     </div>
        // `;

        this.innerHTML = `
        <div class="faq-item">
            <div class="faq-question">
                <span class="p-16 regular">${question}</span>
                <img src="https://mackoagustin.github.io/tracker/assets/icons/plus.svg" class="faq-icon">
            </div>
            <div class="faq-answer small-text thin c-grey ">${answer}</div>
        </div>
    `;

        const item = this.querySelector(".faq-item");
        const icon = this.querySelector(".faq-icon");

        item.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            document.querySelectorAll("faq-item .faq-item").forEach(faq => {
                faq.classList.remove("active");
                // local faq.querySelector(".faq-icon").src = "/assets/icons/plus.svg";
                faq.querySelector(".faq-icon").src = "https://mackoagustin.github.io/tracker/assets/icons/plus.svg";

               
            });

            if (!isActive) {
                item.classList.add("active");
                // local icon.src = "/assets/icons/less.svg";
                icon.src = " https://mackoagustin.github.io/tracker/assets/icons/less.svg";
            }
        });
    }
}

class FAQList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add("faq-container");
    }
}

customElements.define("faq-item", FAQItem);
customElements.define("faq-list", FAQList);