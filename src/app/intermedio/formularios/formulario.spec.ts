import { FormularioRegister } from "./formulario";
import { FormBuilder } from '@angular/forms'

describe('Formularios', ()=>{

    let componente: FormularioRegister;

    beforeEach(()=>{
        componente = new FormularioRegister(new FormBuilder());
    });

    it('Debe de crear un formulario con dos campos, email y password', ()=>{

        expect(componente.form.contains('email')).toBeTrue();
        expect(componente.form.contains('password')).toBeTrue();

    });

    /* it('email debe ser obligatorio',()=>{

        const control = componente.form.get('email');
        control.setValue('');

        expect(control.valid).toBeFalsy();
    })

    it('email debe ser un email válido',()=>{

        const control = componente.form.get('email');
        control.setValue('fernando@gmail.com');

        expect(control.valid).toBeTrue();
    }) */

})