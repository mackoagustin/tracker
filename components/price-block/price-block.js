class PriceBlock extends HTMLElement {
    constructor() {
        super();
        this.data = [];
    }

    async  connectedCallback() {

            // cargar datos del JSON
            await this.loadData();

            //text
            const title = this.getAttribute("title") || "";
            const price = this.getAttribute("price") || "";
            const text = this.getAttribute("text") || "";
            const backgroundColor = this.getAttribute("backgroundColor") === "green-bg" ? "green-bg" : "white-bg"; 

            // Input
            const inputField = this.getAttribute("inputField") === "yes" ? `
                            <p class="pt-2">¿Cuántas personas utilizarían TRACKER?</p>
                            <div class="input-container pb-2">
                                <img src="assets/icons/user_outline.svg" class="input-icon" alt="icon">
                                <input style="width: 300px" type="number" id="peopleInput" value="10" placeholder="Escribí el número de personas">
                            </div>
                        ` : "";

            // button
            const buttonText = this.getAttribute("buttonText") || "";
            const buttonType = this.getAttribute("buttonType") || "";
            const buttonIcon = this.getAttribute("buttonIcon") || "";

            //check
            const checkGreen = "assets/icons/check.svg";
            const checkGreenLight = "assets/icons/check_green_light.svg";
            const iconCheck =  this.getAttribute("iconCheck") === "checkGreen" ? checkGreen : checkGreenLight;

            //feature
            const feature1 = this.getAttribute("feature1") || "";
            const feature2 = this.getAttribute("feature2") || "";
            const feature3 = this.getAttribute("feature3") || "";
            const feature4 = this.getAttribute("feature4") || "";


            // white color
            const hasInputField = this.getAttribute("inputField") === "yes";
            const textClass = hasInputField ? "light c-white-color-80" : "c-default-color";
            const ivaColor =  hasInputField ? "c-white-color-80" : "c-grey";

            const isDesktop = window.matchMedia("(min-width: 768px)").matches

            if(!isDesktop) {
                  this.innerHTML = `
            <div class="wraper-planes ${backgroundColor}">
                <div style="  max-width: 532px;" class="pb-2">
                    <h2 class="pt-2 m-0 semi-bold " >${title}</h2>
                    <p class="${textClass} thin">${text}</p>

                        <div>
                            ${inputField}
                        </div>
                        <div class="price-per-person">
                            <h1 class="xxl-text regular m-0" id="priceValue">u$s 12</h1>
                            <div class="iva-price">
                                <p style="margin: 0;">por mes</p>
                                <p class="${ivaColor}" style="margin: 0;">+ IVA</p>
                            </div>
                        </div>
                         <div class="pt-2 pb-2">
                            <h2 class="medium-large-text medium">Qué incluye</h2>
                            <icon-text type="container-row" pType="pl-1 regular normal-text" icon="${iconCheck}" text="${feature1}" heightIcon="20" widthIcon="20"></icon-text>
                            <icon-text type="container-row" pType="pl-1 regular normal-text" icon="${iconCheck}" text="${feature2}" heightIcon="20" widthIcon="20"></icon-text>
                            <icon-text type="container-row" pType="pl-1 regular normal-text" icon="${iconCheck}" text="${feature3}" heightIcon="20" widthIcon="20"></icon-text>
                            <icon-text type="container-row" pType="pl-1 regular normal-text" icon="${iconCheck}" text="${feature4}" heightIcon="20" widthIcon="20"></icon-text>
                        </div>
                    <div>
                    <custom-button text="${buttonText}" type="${buttonType} width-f" icon="${buttonIcon}"></custom-button>
                </div>
               
            </div>
            `;
            } else {
                this.innerHTML = `
                <div class="wraper-planes ${backgroundColor}">
                    <div style="  max-width: 532px;">
                        <h2 class="pt-2 m-0 semi-bold" >${title}</h2>
                        <p class="${textClass} medium-text" style="line-height: 26px;">${text}</p>
                            <div>
                                ${inputField}
                            </div>
                            <div class="price-per-person pt-3 pb-3">
                                <h1 class="xxl-text regular m-0" id="priceValue">u$s 12</h1>
                                <div class="iva-price">
                                    <p style="margin: 0;">por mes</p>
                                    <p class="${ivaColor}" style="margin: 0;">+ IVA</p>
                                </div>
                            </div>
                        <custom-button text="${buttonText}" type="${buttonType}" icon="${buttonIcon}"></custom-button>
                    </div>
                    <div class="pt-2" >
                        <h2 class="medium-large-text medium pb-1">Qué incluye</h2>
                        <div class="pt-1" style="display: flex; flex-direction: column; gap: 8px;">
                            <icon-text type="container-row" pType="pl-1 regular normal-text" icon="${iconCheck}" text="${feature1}" heightIcon="20" widthIcon="20"></icon-text>
                            <icon-text type="container-row" pType="pl-1 regular normal-text" icon="${iconCheck}" text="${feature2}" heightIcon="20" widthIcon="20"></icon-text>
                            <icon-text type="container-row" pType="pl-1 regular normal-text" icon="${iconCheck}" text="${feature3}" heightIcon="20" widthIcon="20"></icon-text>
                            <icon-text type="container-row" pType="pl-1 regular normal-text" icon="${iconCheck}" text="${feature4}" heightIcon="20" widthIcon="20"></icon-text>
                        </div>
                       
                    </div>
                </div>
                `;
            }

           

            //input event
            this.querySelector("#peopleInput")?.addEventListener("input", (e) => this.updatePrice(e.target.value))
            // button event
            this.querySelector("custom-button")?.addEventListener("click", this.scrollToForm);

           
            if (inputField) {
                this.updatePrice(10);  
            }  
        }

        async loadData() {
            try {
                // local const response = await fetch("../../data/db.json");
                const response = await fetch("https://mackoagustin.github.io/tracker/data/db.json");

                this.data = await response.json();
            }catch (error) {
                console.error("Error al cargar los datos del JSON:", error);
            }
        }

        updatePrice(peopleCount) {
            const dataItem = this.data.find(item => item.people_count == peopleCount);
        
            if (dataItem) {
                const totalPrice = Math.round(dataItem.price_per_person * peopleCount);
                this.querySelector("#priceValue").textContent = `u$s ${totalPrice}`;
            } else {
                this.querySelector("#priceValue").textContent = "u$s -";
            }
            
        }

        scrollToForm() {
            const formSection = document.getElementById("form-section");
            if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }

}

customElements.define("price-block", PriceBlock);

