class Tabs extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Obtén los atributos del componente, si es necesario
        const tab1Text = this.getAttribute("tab1-text") || "Quiénes somos";
        const tab2Text = this.getAttribute("tab2-text") || "Qué es TRACKER";
        const tab3Text = this.getAttribute("tab3-text") || "Por qué y para qué";
        const tabContent1 = this.getAttribute("tab-content1") || "Quiénes somos";
        const tabContent2 = this.getAttribute("tab-content2") || "Qués tracker";
        const tabContent3 = this.getAttribute("tab-content3") || "Por qué y para qué";


        const isDesktop = window.matchMedia("(min-width: 768px)").matches;

        if(!isDesktop) {
            this.innerHTML = `
            <div class="green-bg br-24" style="height: 430px">
                <div class="container-cc b-b-green pt-3 container-benefit-desktop ml-2 mr-2 ">
                    <icon-text type="container-row " icon="assets/icons/dot.svg" text="Detrás de TRACKER" heightIcon="12" widthIcon="12"></icon-text>
                </div>
                <div class="tabs pt-8">
                    <div class="tab-text tab active" data-tab="tab1">${tab1Text}</div>
                    <div class="tab-text tab" data-tab="tab2">${tab2Text}</div>
                    <div class="tab-text tab" data-tab="tab3">${tab3Text}</div>
                </div>
                <div class="content container-cc pt-3 pb-8" id="content">${tabContent1}</div>
            </div>
        `;

        } else {
            this.innerHTML = `
            <div class="green-bg br-24 tabs-height">
                <div class="container-cc b-b-green pt-6 container-benefit-desktop ">
                    <icon-text type="container-row " icon="assets/icons/dot.svg" text="Detrás de TRACKER" heightIcon="12" widthIcon="12"></icon-text>
                </div>
                <div class="tabs pt-8">
                    <div class="tab-text tab active" data-tab="tab1">${tab1Text}</div>
                    <div class="tab-text tab" data-tab="tab2">${tab2Text}</div>
                    <div class="tab-text tab" data-tab="tab3">${tab3Text}</div>
                </div>
                <div class="content container-cc pt-6 pb-128" id="content">${tabContent1}</div>
            </div>
        `;
        }
     
        
        

        // Agregar los event listeners
        this.addEventListeners();
    }

    // Añadir event listeners a las pestañas
    addEventListeners() {
        const tabs = this.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.changeContent(e.target);
            });
        });
    }

    // Cambiar el contenido cuando se hace clic en una pestaña
    changeContent(tab) {
        // Eliminar la clase 'active' de todas las pestañas
        const tabs = this.querySelectorAll('.tab');
        tabs.forEach(t => t.classList.remove('active'));

        // Agregar la clase 'active' a la pestaña seleccionada
        tab.classList.add('active');

        // Cambiar el contenido en función de la pestaña seleccionada
        const contentId = tab.getAttribute('data-tab');
        const content = this.querySelector('#content');

        // Cambiar el texto de acuerdo con la pestaña activa
        if (contentId === 'tab1') {
            content.innerHTML = this.getAttribute('tab-content1') || "Quiénes somos"; ;
        } else if (contentId === 'tab2') {
            content.innerHTML = this.getAttribute('tab-content2')|| "Qués tracker"; ;
        } else if (contentId === 'tab3') {
            content.innerHTML = this.getAttribute('tab-content3') || "Por qué y para qué";
        }
    }
}

// Definir el custom element
customElements.define("tabs-preguntas", Tabs);
