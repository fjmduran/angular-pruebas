import { usuarioLogueado } from "./booleanos"

describe('Pruebas de booleanos', ()=>{
    it('Debe de regrasar true',()=>{
        const res = usuarioLogueado();

        expect( res).toBeTrue();
    })
})