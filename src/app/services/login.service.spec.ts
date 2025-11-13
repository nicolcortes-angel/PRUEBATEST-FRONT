import { TestBed } from "@angular/core/testing";
import { LoginService } from "./login.service";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting, HttpTestingController } from "@angular/common/http/testing";



describe("pruebas de el servicio de Login", ()=> {

    let httpMock = HttpTestingController; 
    let service = LoginService;

    const credencialMock ={
        email: "pepita@gmail.com",
        password: "123"
    }

    const tokenMock = "wroqpwirmsrdfdfdgimgoemfeokdsmieff"

    beforeEach (()=>{
     
        TestBed.configureTestingModule({
            providers: [
                LoginService,
                provideHttpClient,
                provideHttpClientTesting
            ]
        }

        )

    });
})