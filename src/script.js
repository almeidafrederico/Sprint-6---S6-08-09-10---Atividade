let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
}

//console.log(pessoa)

function qualIdade(obj){
    return `${pessoa.nome} tem ${2022 - obj.anoNascimento} anos`
}

let numero = {num: 0};
function mais1(){
    numero.num +=1;
    return numero.num
}

pessoa.valeCombustivel = "R$ 2,00"

numero.num = 2;

//console.log(numero)



//console.log(qualIdade(pessoa));

function normalizaDado(obj){
    return obj.nome[0].toUpperCase();
}

//console.log(normalizaDado(pessoa));

let user = [];

function criandoListaDeUsuarios(obj){
    obj.nomeDeUsuario = obj.nomeDeUsuario.toLowerCase();
    user.push(obj);
    return user
}

//console.log(criandoListaDeUsuarios(pessoa))

function calculaVale(obj){
    if(obj.temCarro){
        pessoa.valeCombustivel = `R$ ${120*6.99*0.7}`
        return pessoa
    }else{
        return `${obj.nome} não tem carro!`
    }
}

//console.log(calculaVale(pessoa));

let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo:[]
}

function adicionarTipo(){
    endereco.tipo.push("Casa")
    return endereco
}

//console.log(adicionarTipo())

function adicionarEnderecoEmPessoa(newEndereco){
    pessoa.endereco.push(newEndereco);
    return pessoa;
}

//console.log(adicionarEnderecoEmPessoa(endereco))



//S6-09| 💪 Atividade - Javascript: Exercitando Objetos - Katas

let carros = [
    {
    modelo:"Ka",
    marca:"Ford",
    ano:"2000",
    cor:"Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 'R$ 6.799,33'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 'R$ 12.199,13'
    },
    {
    modelo:"Palio",
    marca:"Fiat",
    ano:"1995",
    cor:"Verde",
    completo: false,
    acessorios: [],
    preco: 'R$ 11.099,11'
    },
    {
    modelo:"Monza",
    marca:"Chevrolet",
    ano:"1993",
    cor:"Vinho",
    completo: false,
    acessorios: [],
    preco: 'R$ 14.578,25'
    },
    {
    modelo:"Saveiro",
    marca:"VW",
    ano:"2013",
    cor:"Prata",
    completo: false,
    acessorios: [],
    preco: 'R$ 28.399,13'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 14.350,45'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"2013",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 22.109,21'
    },
    {
    modelo:"Montana",
    marca:"Chevrolet",
    ano:"2011",
    cor:"Azul",
    completo: false,
    acessorios: [],
    preco: 'R$ 15.999,13'
    },
    {
    modelo:"Stilo",
    marca:"Fiat",
    ano:"2000",
    cor:"Preto",
    completo: false,
    acessorios: [],
    preco: 'R$ 17.251,36'
    }
  ]
  

function contaTotal(estoque){
    return estoque.length
}

function precoTotal(estoque){
    let valorTotal = 0;
    for(let i in estoque){
        let price = Number(estoque[i].preco.replace(/\D/g, ''))
        valorTotal+=price;
    }
    valorTotal = (valorTotal/100).toFixed(2)
    return `A soma do preço de todos veículos é R$ ${valorTotal}`.replace('.',',');
}

function filtraPorMarca(marca){
    marcaEmEstoque = []
    for(let i in carros){
        if(carros[i].marca===marca){
            marcaEmEstoque.push(carros[i]);
        }
    }
    return marcaEmEstoque;
}

function filtraPorAcessorio(acessorio, estoque){
    let carroAcessario = [];
    for(let i in estoque){
        if(estoque[i].acessorios.find(element => element == acessorio)){
            carroAcessario.push(estoque[i]);
        }
    }
    return carroAcessario
}

function eCarroCompleto(estoque){
    let carrosCompletos = [];
    for(let i in estoque){
        if(estoque[i].completo){
            carrosCompletos.push(estoque[i]);
        }
    }
    return carrosCompletos
}

function adicionaCarro(carroNovo){
    let newCarro = {
        modelo:`${carroNovo.modelo}`,
        marca:`${carroNovo.marca}`,
        ano:`${carroNovo.ano}`,
        cor:`${carroNovo.cor}`,
        completo: carroNovo.completo,
        acessorios: carroNovo.acessorios,
        preco: `R$ ${carroNovo.preco}`
    }
    carros.push(newCarro);
    return carros    
}

let argo = {
    modelo:"Argo",
    marca:"Fiat",
    ano:"2022",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 60.251,36',
}

function removeCarro(estoque, id){
    newEstoque = [];
    for(let i in estoque){
        if(i != id){
            newEstoque.push(estoque[i]);
        };
    };
    carros = newEstoque;
    return carros
}

function contaCarrosNovos(estoque){
    let conta = 0;
    for(let i in estoque){
        if(estoque[i].ano > (2022-10)){
            conta++;
        }
    }
    return conta;
}

function contaCarrosVelhos(estoque){
    let conta = 0;
    for(let i in estoque){
        if(estoque[i].ano < (2022-10)){
            conta++;
        }
    }
    return conta;
}

function insereDono(list,position,person){
    list[position].donos = [person]
}
//Chamada da função
insereDono(carros,1,{nome: 'Jhon Dhoe', cpf: '122-133-144-55'})

//S6-10| 💪 Atividades - JavaScript: Loteria Premiada
// Exercício 1- Pessoa Premiada

let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
};

let ganhadoresFalsos = [];

function eGanhador(pessoa){
    if(ganhador.nome.toUpperCase()===pessoa.nome.toUpperCase() && ganhador.cpf===pessoa.cpf){
        return "É ganhador!"
    }else{
        ganhardores.push(pessoa);
        return "É alarme falso!"
    } 
}
let ganhadorSuposto = {
    nome: 'adamastor', 
    cpf : '123.321.789-98'
}
console.log(eGanhador(ganhadorSuposto))
// O retorno deverá ser 'É ganhador!'

//🧠 Exercício 2- Quem veio atrás do prêmio ?

function naoGanhadores(list){
    let pessoasTentaramPegarPremio = [];
    for(let i in list){
        pessoasTentaramPegarPremio.push(list[i].nome);
    }
    return `${list.length} Pessoa tentou retirar o prêmio. Nomes: ${pessoasTentaramPegarPremio}`
}

let ListTentaramRetirar = [{
    nome: 'adam123', 
    cpf : '123.324.789-98'
},{
    nome: 'a53or', 
    cpf : '123.321.789-98'
},{
    nome: 'a12stor', 
    cpf : '123.321.789-98'
},{
    nome: 'ada567r', 
    cpf : '123.321.789-98'
},{
    nome: 'fred', 
    cpf : '123.321.789-98'
}]
    

