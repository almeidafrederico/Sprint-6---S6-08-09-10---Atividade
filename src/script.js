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

const carros = [
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
        console.log(price);
        valorTotal+=price;
        console.log(valorTotal/100)
    }
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BR' }).format(valorTotal)
    return valorTotal/100;
}