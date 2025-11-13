import { TestBed } from "@angular/core/testing";
import { LoginService } from "./login.service";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting, HttpTestingController } from "@angular/common/http/testing";



describe("pruebas de el servicio de Login", ()=> {

    let httpMock : HttpTestingController; 
    let service : LoginService;

    const credencialMock ={
        email: "pepita@gmail.com",
        password: "123"
    }

    const tokenMock = "wroqpwirmsrdfdfdgimgoemfeokdsmieff"

    beforeEach (()=>{
     
        TestBed.configureTestingModule({
            providers: [
                LoginService,
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        })

        httpMock = TestBed.inject(HttpTestingController);
        service = TestBed.inject(LoginService)

    });

    it("caso 1: Simular la la peticion POST para iniciar sesion", ()=>{
        const apiUrl = "http://localhost:9000/iniciarSesion"
        const responseMock = {"mensaje": "inicio de sesion exitoso"}

        service.login(
            credencialMock.email, credencialMock.password
        ).subscribe(
            (res) => {
                expect(res).toEqual(responseMock);
            }
        )

        // simulacion de peticion a backend 

        const req = httpMock.expectOne(apiUrl) //esa simulacion se espera que sea igual a la url dada 
        expect(req.request.method).toBe("POST")
        req.flush(responseMock)
    })


    it("caso 2: Obtener token", ()=>{
        localStorage.setItem("token", tokenMock);
        expect(service.getToken()).toBe(tokenMock)


    });



    it("caso 3: Verificar si esta logeado o no", ()=>{
        localStorage.setItem("token", tokenMock);
        expect(service.isLoggedIn()).toBeTrue();

    });



    it("caso 4: Verificar si se cierra sesion", ()=>{
         localStorage.setItem("token", tokenMock);
         service.logout();
         expect(localStorage.getItem("token")).toBeNull();

    });
})