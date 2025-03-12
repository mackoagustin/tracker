class FooterBlock extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback () {

        const isDesktop = window.matchMedia("(min-width: 768px)").matches

        if(!isDesktop) {
            this.innerHTML = `
            <footer class="green-bg p-vertical-small pb-2 ">
                <article class="container-col-center pt-4">
                    <object type="image/svg+xml" data="assets/icons/logo.svg" width="161" height="40"></object>

                    <div class="container-cc pt-2 pb-2">
                    <a href="https://www.instagram.com/tracker.realestate?igsh=amNjdHI1NWQ0bTky" target="_blank" rel="noopener noreferrer">
                        <img src="assets/icons/instagram.svg" alt="Instagram">
                    </a>
                    <a href="https://www.linkedin.com/company/tracker-real-estate/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/icons/linkedin.svg" alt="LinkedIn" class="pl-2">
                    </a>
                    </div>
                

                    <a href="https://s3.us-east-1.amazonaws.com/public.tracker/tracker-real-estate_TerminosCondiciones.pdf" target="_blank">Políticas de Privacidad</a>
                    <p class="t-center small-text">© 2025 TRACKER. Todos los derechos reservados.</p>

                </article>
            </footer>
        `    
        } else {
            this.innerHTML = `
            <footer class="green-bg p-vertical-small pb-2 ">
                <article class="container-row-space pt-5" style="max-width: 1560px;
  margin: 0 auto;">
                    <div class="container-row" style="gap: 32px">
                        <object type="image/svg+xml" data="assets/icons/tracker_logo_icon.svg" width="40" height="40"></object>
                        <object type="image/svg+xml" data="assets/icons/line.svg" height="32"></object>
                        <p class="normal-text">© 2025 TRACKER. Todos los derechos reservados.</p>

                    </div>

                    <div class="container-row"  style="gap: 32px">
                        <a href="https://s3.us-east-1.amazonaws.com/public.tracker/tracker-real-estate_TerminosCondiciones.pdf" target="_blank">Políticas de Privacidad</a>                         <object type="image/svg+xml" data="assets/icons/line.svg" height="32"></object>

                        <div class="container-cc pt-2 pb-2">
                            <a href="https://www.instagram.com/tracker.realestate?igsh=amNjdHI1NWQ0bTky" target="_blank" rel="noopener noreferrer">
                                <img src="assets/icons/instagram.svg" alt="Instagram">
                            </a>
                            <a href="https://www.linkedin.com/company/tracker-real-estate/" target="_blank" rel="noopener noreferrer">
                                <img src="assets/icons/linkedin.svg" alt="LinkedIn" class="pl-2">
                            </a>
                        </div>
                    </div>
                </article>
            </footer>
        `    
        }
        
    }
}

customElements.define("footer-block", FooterBlock)