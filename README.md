# SON - Iniciando com Angular2 - Versão 7 - Componentes
  Angular é uma plataforma de desenvolvimento para a construção de aplicativos Web e dispositivos móveis usando TypeScript / JavaScript e outros linguagens. Foco em componentização.
  - Site ```https://angular.io```
  - Documentação ```https://angular.io/api```
  - Repositório ```https://github.com/angular/angular```
  - Repositório Team ```https://github.com/angular/angular```
  - ChangeLo - ```https://github.com/angular/angular/blob/master/CHANGELOG.md```
  - Quick Start ```https://angular.io/start```

## Repositórios do projeto
- Repositório GIT ```https://github.com/emiliojva/emiliojva-angular2-sete-componentes```  
- Repositório GIT ANGULAR7 STARTED ```https://github.com/emiliojva/emiliojva-angular2-sete```  
  

## Notas da Versão 
  - Lançada meado de outubro
  - Adição da feature virtual scroll
  - Adição da feature CLI prompts / angular material commands
  - Adição da Drag and Drop feature
  
## Instalação - Criação de novo projeto (Gerando aplicação Angular)
  - Referencia ```https://angular.io/guide/setup-local```
  - Pré-requisitos
    - NodeJS instalado
      * Em nodejs.org/en/download 
      * Windows - Baixar pacote .exe
      * Linux - executar apt get install nodejs -y  
      * Checar versão do node e do gerenciador de pacotes
        ```
        node -v
        npm -v 
        ```
  - Instalação do Angular (via node npm cli / need root user)
    ```
    npm install -g @angular/cli
    ```
  - Checar versão e listar particularidades
    ```
    ng version
    ```
  - Update - Caso esteja com um projeto em uma versão anterior. varre aplicação e lista dependencias legadas
    ```
    ng update --all 
    // em caso de erro rodar novamente
    ```
  - Usando Angular CLI
    ```
    ng new <nome-do-projeto>
    ```
    - irá perguntar ?
      * Trabalhar com Rotas?
      * Qual tipo de folha de estilos trabalhar
  - Testando aplicação (build and run http://localhost:4200)
    ```
    ng serve
    ||
    ng serve --open
    ```


## Conhecimento prévio desejável:
  * TypeScript ```https://www.typescriptlang.org/docs/home.html```
  * Javascript ```https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript```
  * HTML ```https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML```
  * CSS ```https://developer.mozilla.org/docs/Learn/CSS/First_steps```
  * Getstared ```https://angular.io/start```
  
## Componentes
  Um componente controla um pedaço de tela chamado ```view```. Por exemplo, componentes individuais definem e controlam suas próprias views
  - Referência ```https://angular.io/guide/architecture-components```
  - Metadados @Component define uma simples classe como um Componente em angular:
    ```
    @Component({
      selector:    'app-hero-list',
      templateUrl: './hero-list.component.html',
      providers:  [ HeroService ]
    })
    export class HeroListComponent implements OnInit {
    /* . . . */
    }
    ```
  - Angular sempre trabalha com uma hieraquia de componentes:
    ```
      -- AppComponent
        -- EmployeeListComponent
          -- EmployeeAddComponent
        -- NavbarComponent
          (...)
    ```
  
  - Criando um componente (via ng cli) (nome dos Components no kebab-style) (g: generation)
    ```
    ng g component employee-list
    ```
  - View Html do Component Employee-list
    ```
    <section>
      <employee-list>1</employee-list>
      <employee-list>2</employee-list>
      <employee-list>3</employee-list>
      <employee-list>4</employee-list>
    </section>
    ```
  - Dentro do html do component employee-list, edito o html e o mesmo será replicado onde o componente for chamado na forma:
    ```
    <employee-list></employe-list>
    ```
  - O componente Raiz chama-se <app-root></app-root> contido no index.html por default. E pode ser manipulado através do arquivo app.component.(html|scss|ts) na pasta src/app. O app.component é importado e inicializado pelos módulo ```platformBrowserDynamic().bootstrapModule(AppModule)``` que dá sentido a aplicação

## Entendendo melhor os componentes
  - Bootstrap do Angular:
    * Um arquivo typescript importa e carrega os módulos da platformBrowser browser dentro de ```main.ts```
    * Que por sua vez chama o ```app.module``` com o método ````platformBrowserDynamic().bootstrapModule(AppModule```
    * Importa o @decoration ```ngModule``` no package ```@angular/core```
    * Configura e importa o app.module(modulo principal)
    * E no ```@ngModule()``` ele carrega na chave bootstrap o ```AppComponent```

## Integração com bootstrap
  - Referência ```https://getbootstrap.com/docs/4.4/getting-started/download/#npm```
  - npm package ```https://www.npmjs.com/package/bootstrap```
  - Integração com bibliotecas de terceiros (bootstrap, materialize, material lite e etc)
    ```
    npm install bootstrap jquery popper.js --save
    ```
  - Posso importar somente um módulo/componente da biblioteca(bootstrap)
  - Configurando globalmente o bootstrap no angular.json:
    *  Na parte de arquitetura(architect json)
    ```
    "architect": {
      "build": {
        "options": {
          "styles": [
            "src/styles.scss",
            "node_modules/bootstrap/dist/css/bootstrap.min.css"
          ],
          "scripts": [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/popper.js/dist/umd/popper.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js"
          ]
        }
      }
    }
    ```
  - Testando se importaçao global funcionou. Acrestar class 'table' na tag table e ver efeito:
    ```
    <table class='table'>
    ```  

## Verificando integração com Bootstrap
  - Componentizando com modal. Ao colocar o Component Visual do Bootstrap ele já é automaticamente importado 
    ```
    ver exemplo modal
    https://getbootstrap.com/docs/4.4/components/modal/#live-demo
    ```
## Iniciando com diretivas (attribute directives)
  Uma diretiva de atributo altera a aparência ou o comportamento de um elemento DOM.
  Algumas vezes criar um componente séra custoso e desnecessário. Para atingir propriedades com regras e efeitos especiais,
  usamos diretivas. 
  - Referencia ```https://angular.io/guide/attribute-directives```

  - @Directive() Decorador que marca uma classe como uma diretiva Angular. Você pode definir suas próprias diretivas para anexar um comportamento personalizado aos elementos no DOM.

  - Criando uma diretiva com angular-cli
    ```
    npm run ng g directive salary-color
    ```
  - Exemplo de uma diretiva que aplica cor de acordo com valor do salario
    ```
    // model
    import { Directive, ElementRef, Input } from '@angular/core';

    @Directive({
      selector: '[salaryColor]'
    })
    export class SalaryColorDirective {

      @Input()
      salaryColor: string;

      @Input()
      x:any;

      constructor(private element: ElementRef) {
        setTimeout(()=>{
          // console.log(this.salaryColor);
          const activeElementDOM: HTMLElement = this.element.nativeElement; // DOM Element com diretiva aplicada
          const salary:number = parseFloat(this.salaryColor); // const valor:number = parseFloat(activeElementDOM.innerHTML);
          activeElementDOM.style.color = salary > 1000 ? 'green' : 'black';
          console.log(this.x);
        },1000)

      }

    }

    // view
    <p [innerHTML]="emp.salary" salaryColor="{{emp.salary}}" x="10"></p>
    ```

## Decorator ViewChild (Views Aninhadas ou filhas)
  Decorator de propriedades que configura uma consulta de exibição. O detector de alterações procura o primeiro elemento ou a diretiva correspondente ao seletor na visualização DOM. Se o DOM da exibição for alterado e um novo filho corresponder ao seletor, a propriedade será atualizada.
  - Referencia ```https://angular.io/api/core/ViewChild#description```
  - Pegar referencia de um elemento, no caso o EmployeeNewModalComponent. No caso de mais de diretiva dentro list Ele pega todas as instancias indexadas por array.
  - Exemplo de declaração do view child na view pai/caller
    ```
    export class EmployeeListComponent implements OnInit {
      @ViewChild('myModal') 
      employeeNewModal: EmployeeNewModalComponent;
    }

    /// conteudo do EmployeeNewModalComponent
    import { Component, OnInit, ElementRef } from '@angular/core';
    import { EmployeeService, Employee } from 'src/app/services/employee-service';

    declare const $;

    @Component({
      selector: 'employee-new-modal',
      templateUrl: './employee-new-modal.component.html',
      styleUrls: ['./employee-new-modal.component.scss']
    })
    export class EmployeeNewModalComponent implements OnInit {

      employee: Employee;

      constructor(private element: ElementRef) {
        this.employee = {name:'',salary:0};
      }


      ngOnInit(): void {
      }

      show(){
        const divModal = this.getDivModal();
        $(divModal).modal('show');
      }

      getDivModal(): HTMLElement{
        const elementDOM:HTMLElement = this.element.nativeElement;
        return elementDOM.firstElementChild as HTMLElement;
      }
    }
    ```

## Integração com formulários HTML
  - Ao utilizar a diretiva estrutural ```[(ngModel)]``` dentro de um formulário, se faz obrigatório incluir a propriedade ```name=""``` em todos os inputs/elements dentro da tag ```form```
  - Ignorarando erro do compilador, no uso do jQuery (por exemplo)
    ```
    declare const $;
    ```
## Decorator Output
  Decorador que marca um campo de classe como uma propriedade de saída e fornece metadados de configuração. A propriedade DOM vinculada à propriedade de saída é atualizada automaticamente durante a detecção de alterações
  - Referencia: ```https://angular.io/api/core/Output```
  - O decorator Output precisa de um tipo EventEmitter para lidar com saídas de evento:
    ```
    @Output()
    onSubmit:EventEmitter<Employee> = new EventEmitter<Employee>();
    ```
  - O EventEmitter dispõe do método ```emit()```, para ser coloca do fluxo final desejado, podendo enviar por parametro alguma informação definida no Generics do EventEmitter. Neste caso Employee.
    ```
    this.onSubmit.emit(copy);
    ```
  - Declaração de um Output para escutar gravação de um formulário 
    ```
    import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
    import { EmployeeService, Employee } from 'src/app/services/employee-service';

    declare const $;

    @Component({
      selector: 'employee-new-modal',
      templateUrl: './employee-new-modal.component.html',
      styleUrls: ['./employee-new-modal.component.scss']
    })
    export class EmployeeNewModalComponent implements OnInit {

      employee: Employee;

      @Output()
      onSubmit:EventEmitter<Employee> = new EventEmitter<Employee>();

      constructor(private element: ElementRef, public employeeService: EmployeeService) {
        this.employee = {name:'',salary:0};
      }

      addEmployee(event: Event){
        let copy:Employee = Object.assign({}, this.employee);
        copy.bonus = copy.salary >= 1000 ? 0 : copy.bonus;
        this.employeeService.addEmployee(copy);
        this.onSubmit.emit(copy);
        this.hide();
      }
    }

    // na view
    <employee-new-modal #myModal (onSubmit)="onNewEmployee($event)"></employee-new-modal>
    ```

## Componetizando Alert Bootstrap
  - Criar um novo componente
  - Inserir html do componente bootstrap e permitir interação com ```innerHTML``` através ```<ng-content>```
    ```
    <div class="alert alert-success" role="alert">
      <ng-content></ng-content>
    </div>
    ```
  - Uso do componente em qualquer outra parte do projeto, como um tag(webComponent)
    ```
    <alert-success [hidden]="!showMessageSuccess">Empregado {{ newEmployeeAdded?.name }} cadastrado!</alert-success>
    ```

## Modal para edição
  - Uso do ```object?.prop``` em caso, onde o ```component``` já foi declarado e carregado no ```NgModule``` mas ainda não possui a instância do objeto. https://angular.io/guide/template-syntax#the-safe-navigation-operator----and-null-property-paths Ex:
    ```
    <h5 class="modal-title" id="exampleModalLabel">Editar {{employee?.name}}</h5>
    ```
  -  Formulários com campos ```[(ngModel)]``` irão emitir erro se buscarem valores nulos nas propriedades com bind. Com isso usa-se ```*ngIf``` para verificar se a instancia de objeto existe. ex:
    ```
    <div class="modal-body" *ngIf="employee">
    ``` 
  - ViewsChilds/Inputs - Em listagem de dados onde cada iteração pode ser editada, podemos estabelecer comunicação entre os webComponents, combinando @Input,@Output e @ViewChild. A cada clique no botão editar, modificar um valor no componente da lista, que pode ser inserido em um @input de outro component.
    ```
    <section class="container">
      <alert-success [hidden]="!showMessageSuccess">Empregado {{ newEmployeeAdded?.name }} cadastrado!</alert-success>

      <div class="row">

        <h1>Nossos Empregados</h1>

        <div class="col-12">
          <button type="button" class="btn btn-primary" (click)="showNewEmployeeModal($event)">Adicionar Empregado</button>
        </div>
      
        <div class="card employee-card"  *ngFor="let emp of employees">
          <p [innerHTML]="emp.salary"
          salaryColor="{{emp.salary}}" x="10"></p>
          <div class="card-body">
            <h5 class="card-title"  [innerHTML]=" 'Name:'+ emp.name ">Card title</h5>
            <p class="card-text" [innerHTML]=" 'Salary:'+ emp.salary "
            [style.color]="getSalaryColor(emp)"
            [ngClass]="{
                        'salary-expansive':emp.salary>1000,
                        'salary-cheap':emp.salary<1000
                      }">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p *ngIf="emp.bonus"
            [innerHTML]=" 'Bonus:'+ emp.bonus "></p>
            <a href="javascript:void(0)" class="btn btn-primary" (click)="showEditEmployeeModal(emp)">Editar</a>
          </div>
        </div>
      </div>

    </section>

    <employee-new-modal #employeeNewModal (onSubmit)="onNewEmployee($event)"></employee-new-modal>
    <employee-edit-modal #employeeEditModal [employee]="editEmployee" (onSubmit)="onEditEmployee($event)"></employee-edit-modal>
    ```
      * No source do component de listagem:
        ```
        showEditEmployeeModal(employee:Employee){
          this.editEmployee = employee;
          this.employeeEditModal.show();
        }
        ```
## Modal para exclusao
  ```
  <form action="" (submit)="destroyEmployee($event)">
    <div class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Excluir Empregado?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">

            {{employee.name}}

          </div>


          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-danger">Confirmar</button>
            <!-- <button type="button" (click)="addEmployee($event)">adicionar</button> -->
          </div>
        </div>
      </div>
    </div>
  </form>

  ```

## @Input com metódos usando setters
  Decorador que marca um campo de classe como uma propriedade de entrada e fornece metadados de configuração. A propriedade de entrada está vinculada a uma propriedade DOM no modelo. Durante a detecção de alterações, o Angular atualiza automaticamente a propriedade data com o valor da propriedade DOM. https://angular.io/guide/template-syntax#input-and-output-properties
  - @Input () e @Output () permitem que o Angular compartilhe dados entre o contexto pai e as diretivas ou componentes filhos. Uma propriedade @Input () é gravável enquanto uma propriedade @Output () é observável.
  - Reatribuição/reatividade de diretivas. Criar uma variavel manipulada pelo metodo setter. Permitindo entrada por atribuição e tratada no método.  
    ```
    // diretiva salary-color
    @Input()
    set salaryColor(value){
      const activeElementDOM: HTMLElement = this.element.nativeElement; // DOM Element com diretiva aplicada
      const salary:number = parseFloat(value); // const valor:number = parseFloat(activeElementDOM.innerHTML);
      activeElementDOM.style.color = salary > 1000 ? 'green' : 'black';
    }
    
    // view usando diretiva
    <p class="card-text" [innerHTML]=" 'Salary:'+ emp.salary " [salaryColor]="emp.salary"></p>
    ```

## Pipes

  - Criação via angular-cli
    ```
    npm run ng g pipe my-currency
    ```
  - Interface de transformação PipeTransform
    ```
    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
      name: 'myCurrency'
    })
    export class MyCurrencyPipe implements PipeTransform {

      transform(value: unknown, ...args: unknown[]): unknown {
        return `R$${value}`;
      }

    }
    ```
    * Na view
    ```
    {{data | date:'dd/MM/yyyy'}}
    {{data | date:'fullDate' | uppercase}}
    ```
