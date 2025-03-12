class Form extends HTMLElement {
    constructor() {
        super ();
    }

    connectedCallback() {
             this.innerHTML = `
                <form action="#" method="post" class="form-green-border pb-3 ">
                    <label for="nombre">Nombre</label><br>
                    <span class="error-message" id="error-nombre"></span>
                    <input type="text" id="nombre" name="nombre" required><br><br>
                    
                    <label for="empresa">Empresa <span class="c-grey">(opcional)</span></label><br>          <input type="text" id="empresa" name="empresa"><br><br>
                    
                    <label for="email">Email:</label><br>
                    <span class="error-message" id="error-email"></span>
                    <input type="email" id="email" name="email" required><br><br>
                    
                    <label for="whatsapp">WhatsApp:</label><br>
                    <span class="error-message" id="error-whatsapp"></span>
                    <input type="tel" id="whatsapp" name="whatsapp" required><br><br><br>
                    
                    <custom-button id="submit-btn" type="fill width-f" text="Enviar" icon="arrow-tail.svg"></custom-button>
                </form>

                <style>
                    .error-message {
                        color: red;
                        font-size: 12px;
                        display: block;
                        margin-top: 5px;
                    }
                    .input-error {
                        border: 1px solid red;
                    }
                </style>
            `;
    this.addEventListener();
    }

    addEventListener() {
        const form = this.querySelector("form");
        const submitbutton = this.querySelector("#submit-btn");

        submitbutton.addEventListener("click", (event) => {
            this.validationForm();
        })
    }

    validationForm() {
        const nombre = this.querySelector("#nombre");
        const email = this.querySelector("#email");
        const whatsapp = this.querySelector("#whatsapp");

        const errorNombre = this.querySelector("#error-nombre");
        const errorEmail = this.querySelector("#error-email");
        const errorWhatsapp = this.querySelector("#error-whatsapp");

        let isValid = true;

        // Validar nombre
        if (nombre.value.trim() === "") {
            errorNombre.textContent = "El nombre es obligatorio";
            nombre.classList.add("input-error");
            isValid = false;
        } else {
            errorNombre.textContent = "";
            nombre.classList.remove("input-error");
        }

        // Validar email
        if (email.value.trim() === "") {
            errorEmail.textContent = "El email es obligatorio";
            email.classList.add("input-error");
            isValid = false;
        } else if (!this.validateEmail(email.value)) {
            errorEmail.textContent = "El email no es válido";
            email.classList.add("input-error");
            isValid = false;
        } else {
            errorEmail.textContent = "";
            email.classList.remove("input-error");
        }

       // Validar WhatsApp
        const whatsappRegex = /^\+?[1-9]\d{7,14}$/;
        if (whatsapp.value.trim() === "") {
            errorWhatsapp.textContent = "El número de WhatsApp es obligatorio";
            whatsapp.classList.add("input-error");
            isValid = false;
        } else if (!whatsappRegex.test(whatsapp.value)) {
            errorWhatsapp.textContent = "El número de WhatsApp no es válido";
            whatsapp.classList.add("input-error");
            isValid = false;
        } else {
            errorWhatsapp.textContent = "";
            whatsapp.classList.remove("input-error");
}

        if (isValid) {
            alert("Formulario enviado correctamente 🎉");
            form.submit();
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}
customElements.define("form-input", Form)
