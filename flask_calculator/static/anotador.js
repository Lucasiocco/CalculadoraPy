class Anotador {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        // Obtener referencias a los elementos existentes en el HTML
        this.textarea = document.getElementById('anotador-texto');
        this.btnBorrar = document.getElementById('btnBorrar');
        this.init();
    }

    init() {
        // Solo agregar los event listeners
        this.addEventListeners();
    }

    addEventListeners() {
        if (this.btnBorrar) {
            this.btnBorrar.addEventListener('click', () => this.borrarTexto());
        } else {
            console.error('No se encontró el botón borrar');
        }
    }

    borrarTexto() {
        if (this.textarea) {
            this.textarea.value = '';
        }
    }

    cargarTexto() {
        if (this.textarea) {
            const textoGuardado = localStorage.getItem('anotador-texto');
            if (textoGuardado) {
                this.textarea.value = textoGuardado;
            }
        }
    }
}