var req = require("readline-sync")
var data = new Date();

class usuario {
    constructor (id, nome, email, hist) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.hist = hist;
    }

    alterarnome(newusername) {
        this.nome = newusername;
    }

    alteraremail (newemail) {
        this.email = newemail;
    }
}

class propriedade {
    constructor (id, nome, end, maxhosp, numquartos, noite, disp){
        this.id = id;
        this.nome = nome;
        this.end = end;
        this.maxhosp = maxhosp;
        this.numquartos = numquartos;
        this.noite = noite;
        this.disp = disp;
    }
}

class reserva {
    constructor (id, propid, iduser, datacin, datacout, valor, statuspag) {
        this.id = id;
        this.propid = propid;
        this.iduser = iduser;
        this.datacin = datacin;
        this.datacout = datacout;
        this.valor = valor;
        this.statuspag = statuspag;
    }
}

class anuncio {
    constructor(id, iddono, idprop, titulo, desc, status)  {
        this.id = id;
        this.iddono = iddono;
        this.idprop = idprop;
        this.titulo = titulo;
        this.desc = desc;
        this.status = status;
    }
}

class avaliacao{
    constructor(id, nomeuser, nomeprop, nota, comentario) {
        this.id = id;
        this.nomeuser = nomeuser;
        this.nomeprop = nomeprop;
        this.nota = nota;
        this.comentario = comentario;
    }
}

class sistema {
    constructor (listausers, listaprops, listareservas, listaanuncios, listaavaliacoes, usuariolog) {
        this.listausers = listausers;
        this.listaprops = listaprops;
        this.listareservas = listareservas;
        this.listaanuncios = listaanuncios;
        this.listaavaliacoes = listaavaliacoes;
        this.usuariolog = usuariolog;
    }

    logar(newlogin) {
        //Função para logar no sistema
        this.usuariolog = newlogin;
    }

    novoiduser(){
        //Fornece um ID diferente dos usuários existentes
        if (this.listausers.length == 0) {
            return 0;
        }
        let newid = 0;
        //Primeiro checar se existe algum ID faltando
        for (let user of this.listausers) {
            if (user.id != newid){
                return newid;
            }
            newid++;
        }
        //Caso não, usar o último id
        return newid;
    }

    novoidprop(){
        //Fornece um ID diferente das propriedades existentes
        if (this.listaprops.length == 0) {
            return 0;
        }
        let newid = 0;
        //Primeiro checar se existe algum ID faltando
        for (let prop of this.listaprops) {
            if (prop.id != newid){
                return newid;
            }
            newid++;
        }
        //Caso não, usar o último id
        return newid;
    }

    novoidanuncio(){
        //Fornece um ID diferente dos anúncios existentes
        if (this.listaanuncios.length == 0) {
            return 0;
        }
        let newid = 0;
        //Primeiro checar se existe algum ID faltando
        for (let anun of this.listaanuncios) {
            if (anun.id != newid){
                return newid;
            }
            newid++;
        }
        //Caso não, usar o último id
        return newid;
    }

    novoidreserva(){
        //Fornece um ID diferente dos anúncios existentes
        if (this.listareservas.length == 0) {
            return 0;
        }
        let newid = 0;
        //Primeiro checar se existe algum ID faltando
        for (let res of this.listareservas) {
            if (res.id != newid){
                return newid;
            }
            newid++;
        }
        //Caso não, usar o último id
        return newid;
    }

    novoidavaliacao(){
        //Fornece um ID diferente das avaliações existentes
        if (this.listaavaliacoes.length == 0) {
            return 0;
        }
        let newid = 0;
        //Primeiro checar se existe algum ID faltando
        for (let av of this.listaavaliacoes) {
            if (av.id != newid){
                return newid;
            }
            newid++;
        }
        //Caso não, usar o último id
        return newid;
    }

    adduser(usuario) {
        //Obter o último ID
        let ultimoid = 0;
        for (let user of this.listausers) {
            ultimoid = user.id;
        }
        //Verificar se o usuário tem um ID para ser colocado no final
        if (usuario.id == ultimoid++) {
            this.listausers.push(usuario);
        }
        else {
            //Usuário tem um ID que deve ficar no meio do array
            let indexbusca = 0;
            for (let user of this.listausers) {
                if (user.id != indexbusca) {
                    //Encontramos o espaço desejado
                    break;
                }
                indexbusca++;
            }
            this.listausers.splice(indexbusca, 0, usuario);
        }
    }

    addprop(propriedad) {
        //Obter o último ID
        let ultimoid = 0;
        for (let prop of this.listaprops) {
            ultimoid = prop.id;
        }
        //Verificar se a propriedade tem um ID para ser colocado no final
        if (propriedad.id == ultimoid++) {
            this.listaprops.push(propriedad);
        }
        else {
            //Propriedade tem um ID que deve ficar no meio do array
            let indexbusca = 0;
            for (let prop of this.listaprops) {
                if (prop.id != indexbusca) {
                    //Encontramos o espaço desejado
                    break;
                }
                indexbusca++;
            }
            this.listaprops.splice(indexbusca, 0, propriedad);
        }
    }

    addanun(anuncio) {
        //Obter o último ID
        let ultimoid = 0;
        for (let anun of this.listaanuncios) {
            ultimoid = anun.id;
        }
        //Verificar se o anúncio tem um ID para ser colocado no final
        if (anuncio.id == ultimoid++) {
            this.listaanuncios.push(anuncio);
        }
        else {
            //Anúncio tem um ID que deve ficar no meio do array
            let indexbusca = 0;
            for (let anun of this.listaanuncios) {
                if (anun.id != indexbusca) {
                    //Encontramos o espaço desejado
                    break;
                }
                indexbusca++;
            }
            this.listaanuncios.splice(indexbusca, 0, anuncio);
        }
    }

    addreserva(reserva) {
        //Obter o último ID
        let ultimoid = 0;
        for (let res of this.listareservas) {
            ultimoid = res.id;
        }
        //Verificar se a reserva tem um ID para ser colocado no final
        if (reserva.id == ultimoid++) {
            this.listareservas.push(reserva);
        }
        else {
            //Reserva tem um ID que deve ficar no meio do array
            let indexbusca = 0;
            for (let res of this.listareservas) {
                if (res.id != indexbusca) {
                    //Encontramos o espaço desejado
                    break;
                }
                indexbusca++;
            }
            this.listareservas.splice(indexbusca, 0, reserva);
        }
    }

    addavaliacao(avaliacao) {
        //Obter o último ID
        let ultimoid = 0;
        for (let av of this.listaavaliacoes) {
            ultimoid = av.id;
        }
        //Verificar se a reserva tem um ID para ser colocado no final
        if (avaliacao.id == ultimoid++) {
            this.listaavaliacoes.push(avaliacao);
        }
        else {
            //Reserva tem um ID que deve ficar no meio do array
            let indexbusca = 0;
            for (let av of this.listaavaliacoes) {
                if (av.id != indexbusca) {
                    //Encontramos o espaço desejado
                    break;
                }
                indexbusca++;
            }
            this.listaavaliacoes.splice(indexbusca, 0, avaliacao);
        }
    }

    buscaruser (userreq) {
        //Função para buscar um usuário desejado no sistema
        for (let user of this.listausers) {
            if (user.nome == userreq) {
                return user;
            }
        }
        return 0;
    }
    buscaruserid (userreq) {
        //Função para buscar um usuário desejado no sistema
        for (let user of this.listausers) {
            if (user.id == userreq) {
                return user;
            }
        }
        return 0;
    }

    buscapropriedade(propreq) {
        //Função para buscar uma propriedade desejada no sistema
        for (let prop of this.listaprops) {
            if (prop.nome == propreq) {
                return prop;
            }
        }
        return 0;
    }
    buscapropriedadeid(propreq) {
        //Função para buscar uma propriedade desejada no sistema
        for (let prop of this.listaprops) {
            if (prop.id == propreq) {
                return prop;
            }
        }
        return 0;
    }

    buscaanuncio(anunreq) {
        //Função para buscar um anuncio desejado no sistema
        for (let anun of this.listaanuncios) {
            if (anun.titulo == anunreq) {
                return anun;
            }
        }
        return 0;
    }

    buscareserva(resreq) {
        //Função para buscar uma reserva desejada no sistema
        for (let res of this.listareservas) {
            if (res.nome == resreq) {
                return res;
            }
        }
        return 0;
    }
    buscareservaidesp(resreq) {
        //Função para buscar uma reserva desejada no sistema
        if (this.listareservas.length == 1) {
            return this.listareservas[0];
        }
        for (let res of this.listareservas) {
            if (res.id == resreq) {
                return res;
            }
        }
        return 0;
    }

    removeranuncio(titanun){
        //Buscar index do anuncio que deseja apagar
        let indanun = 0;
        for (let anun of this.listaanuncios) {
            if (anun.titulo == titanun) {
                break;
            }
            indanun++;
        }
        this.listaanuncios.splice(indanun, 1);
    }
    removeranunciosdeprop(idprop) {
        //Buscar cada anúncio que deseja apagar relacionado a propriedade pelo ID da mesma
        let anunpararem = [];
        for (let anun of this.listaanuncios) {
            if (anun.idprop == idprop){
                anunpararem.push(anun);
            }
        }

        //Agora, removemos cada um desses anúncios
        for(let anun of anunpararem) {
            this.removeranuncio(anun.titulo);
        }
    }

    removerpropriedade(idprop) {
        //Remove uma propriedade com base no ID da mesma
        let indprop = 0;
        for (let prop of this.listaprops) {
            if (prop.id == idprop) {
                break;
            }
            indprop++;
        }
        this.listaprops.splice(indprop, 1);
    }

    removerreservaid(idres){
        //Buscar index da reserva que deseja apagar
        let indres = 0;
        if (this.listareservas.length == 1) {
            this.listareservas = [];
            return;
        }
        else {
            for (let res of this.listareservas) {
                if (res.id == idres) {
                    break;
                }
                indres++;
            }
        }
        this.listareservas.splice(indres, 1);
    }

    fornecerpropsalfab () {
        //Função para recebermos as propriedades em ordem alfabética, o comando sort faz o trabalho de organizar
        let propalf = []
        for (let prop of this.listaprops) {
            propalf.push(prop.nome);
        }
        return propalf.sort();
    }

    forneceranunciosalfab () {
        //Para recebermos os anúncios em ordem alfabética, o comando sort faz o trabalho
        let anunalf = []
        for (let anun of this.listaanuncios) {
            anunalf.push(anun.titulo);
        }
        return anunalf.sort();
    }

    fornecerrescrono () {
        //Primeiro verificar se tem algo na lista, se não houver nada ou apenas uma, podemos criar excessões para otimizar
        if (this.listareservas.length == 0) {
            return [];
        }
        else if(this.listareservas == 1) {
            return this.listareservas;
        }
        //Função para ordenar as reservas em ordem cronológica, o sort ordena em etapas, ano->mês->dia->hora->minutos
        let tdsres = this.listareservas;
        tdsres.sort(function (x, y){
            return x.datacin[4] - y.datacin[4];
        });

        tdsres.sort(function (x, y){
            return x.datacin[3] - y.datacin[3];
        });

        tdsres.sort(function (x, y){
            return x.datacin[2] - y.datacin[2];
        });

        tdsres.sort(function (x, y){
            return x.datacin[1] - y.datacin[1];
        });

        tdsres.sort(function (x, y){
            return x.datacin[0] - y.datacin[0];
        });

        return tdsres;
    }

    fornecerres () {
        //Função apenas para obtermos a lista de reservas
        return this.listareservas;
    }

    forneceravaliacoes() {
        //Função para obtermos a lista de avaliações
        return this.listaavaliacoes;
    }

    verificarresempropid(idprop) {
        //Função para verificar alguma reserva em uma propriedade específica com base no ID da propriedade. Retorna 1 caso haja, retorna 0 caso não.
        for (let res of this.listareservas) {
            if (res.propid == idprop) {
                return 1;
            }
        }
        return 0;
    }
}

function iniciarprog () {
    let sist = new sistema([], [], [], [], []);
    let baseloop = 1;
    while (baseloop == 1) {
        //Loop para login/cadastro
        console.log("Pousada Eclipse. Selecione uma opção para administrar o programa:");
        console.log("1 - Fazer Login");
        console.log("2 - Fazer Cadastro");
        console.log("3 - Sair");
        let opcao = req.question("");
        if (opcao == "1") {
            //Login, peço um nome para o cliente e verifico na lista de usuários
            let usuariodes = req.question("Digite um nome de usuário registrado:\n");
            let busca = sist.buscaruser(usuariodes);
            if (busca == 0) {
                //Usuário não foi encontrado
                console.log("Opa! Não encontramos esse usuário, verifique se escreveu corretamente ou é um usuário cadastrado!");
            }
            else {
                //Usuário existe, login autorizado
                sist.logar(busca);
                console.log("Login realizado com sucesso!");
                baseloop = 2;
            }
        }
        else if (opcao == "2") {
            //Cadastro, peço um nome para o cliente, verifico se já existe, caso não, peço informações extras
            let usuarionov = req.question("Digite o seu nome para começarmos o cadastro:\n");
            let busca = sist.buscaruser(usuarionov);
            if (busca == 0) {
                //Usuário não existe, vamos realizar o cadastro
                let emailinf = req.question("Digite o seu email para contato:\n");
                let novocadastro =  new usuario(sist.novoiduser(), usuarionov, emailinf, []);
                sist.adduser(novocadastro);
                console.log("Cadastro realizado com sucesso! Realize o login.");
                //console.log(sist)
            }
            else {
                //Usuário existe, não é possível o cadastro
                console.log("O usuário já existe, por favor, tente outro usuário ou realize o login!")
            }
        }
        else if (opcao == "3") {
            //Sair
            console.log("Saindo do programa...");
            baseloop = 0;
        }
        else {
            //Caso não tenha escolhido uma das opções disponíveis
            console.log("Insira uma opção válida!");
        }
        while (baseloop == 2) {
            //Loop para administrar o programa
            console.log("Pousada Eclipse. Você está logado como", sist.usuariolog.nome, "selecione uma opcão:");
            console.log("1 - Ver meus dados");
            console.log("2 - Modificar meus dados");
            console.log("3 - Ver Lista de Propriedades (Ordem Alfabética)");
            console.log("4 - Ver Lista de Reservas (Ordem Cronológica)");
            console.log("5 - Ver Lista de Anúncios (Ordem Alfabética)")
            console.log("6 - Reservar Propriedade");
            console.log("7 - Cancelar Reserva (Exige pelo menos 24h de antecedência)");
            console.log("8 - Adicionar Propriedade");
            console.log("9 - Excluir Propriedade");
            console.log("10 - Fazer Anúncio");
            console.log("11 - Excluir Anúncio");
            console.log("12 - Avaliar Estadia");
            console.log("13 - Visualizar Avaliações");
            console.log("14 - Voltar para a tela de Login");
            let opcao = req.question("");
            if (opcao == "1"){
                //Visualizar dados do cliente logado
                console.log("Estes são seus dados:");
                console.log("Nome do usuário:", sist.usuariolog.nome);
                console.log("Email do usuário:", sist.usuariolog.email);
                console.log("Histórico do usuário:", sist.usuariolog.hist);
                req.question("Pressione ENTER para continuar...");
            }
            else if (opcao == "2") {
                console.log("Qual dado deseja alterar?");
                console.log("1 - Nome de usuário");
                console.log("2 - Email do usuário");
                let opcao1 = req.question("");
                if (opcao1 == "1") {
                    //Caso o usuário deseje alterar o nome do usuário logado
                    let novonome = req.question("Digite o novo nome de usuário:\n");
                    sist.listausers[sist.usuariolog.id].alterarnome(novonome);
                    sist.usuariolog.alterarnome(novonome);
                    console.log("Nome de usuário alterado com sucesso!")
                }
                else if (opcao1 == "2") {
                    //Caso o usuário deseje alterar o email do usuário logado
                    let novoemail = req.question("Digite o novo email do usuário:\n");
                    sist.listausers[sist.usuariolog.id].alteraremail(novoemail);
                    sist.usuariolog.alteraremail(novoemail);
                    console.log("Email do usuário alterado com sucesso!")
                }
                else {
                    //Caso nenhuma das opções válidas tenha sido inserida
                    console.log("Erro. Digite uma opção válida.")
                }
            }
            else if (opcao == "3") {
                //Listar as propriedades em ordem alfabética
                let props = sist.fornecerpropsalfab();
                console.log("Essas são as propriedades registradas:");
                for (prop of props) {
                    let propinfo = sist.buscapropriedade(prop);
                    let propdispo = "";
                    if (propinfo.disp == true) {
                        propdispo = "OK";
                    }
                    else {
                        propdispo = "Não";
                    }
                    console.log("Nome:", propinfo.nome, "; Endereço:", propinfo.end);
                    console.log("Cap. de hóspedes:", propinfo.maxhosp, "; Núm. de quartos:", propinfo.numquartos, "; Disponibilidade:", propdispo);
                }
                req.question("Pressione ENTER para continuar...");
            }
            else if (opcao == "4") {
                //Listar as reservas em ordem cronológica
                let listares = sist.fornecerrescrono();
                console.log("Essas são as reservas registradas:");
                for (res of listares) {
                    let propinfo = sist.buscapropriedadeid(res.propid);
                    let userinfo = sist.buscaruserid(res.iduser);
                    let resdatacin = res.datacin[2]+"/"+res.datacin[3]+"/"+res.datacin[4];
                    let horacin = res.datacin[0]+":"+res.datacin[1];
                    let resdatacout = res.datacout[2]+"/"+res.datacout[3]+"/"+res.datacout[4];
                    let horacout = res.datacout[0]+":"+res.datacout[1];
                    console.log("Reserva em", propinfo.nome, "no nome de", userinfo.nome);
                    console.log("Data de Check-in:", resdatacin, "às", horacin, "; Data de Check-out:", resdatacout, "às", horacout);
                    console.log("Valor total da reserva:", res.valor, "; Status de pagamento:", res.statuspag);
                }
                req.question("Pressione ENTER para continuar...");
            }
            else if (opcao == "5") {
                //Listar os anúncios em ordem alfabética
                let anuns = sist.forneceranunciosalfab();
                console.log("Esses são os anúncios registrados:");
                for (anun of anuns) {
                    let anuninfo = sist.buscaanuncio(anun);
                    let donoinfo = sist.buscaruserid(anuninfo.iddono);
                    let propinfo = sist.buscapropriedadeid(anuninfo.idprop);
                    let anuncstatus = true;
                    if (anuninfo.status == true) {
                        anuncstatus = "OK";
                    }
                    else {
                        anuncstatus = "Indisponível";
                    }
                    console.log("Nome do proprietário:", donoinfo.nome, "; Nome da propriedade:", propinfo.nome);
                    console.log("Título do anúncio:", anuninfo.titulo);
                    console.log("Descrição:", anuninfo.desc, "; Status do anúncio:", anuncstatus);
                }
                req.question("Pressione ENTER para continuar...");
            }
            else if (opcao == "6") {
                //Reservar propriedade
                let nomeprop = req.question("Digite o nome da nova propriedade que deseja reservar:\n");
                let propbusca = sist.buscapropriedade(nomeprop);
                if (propbusca == 0) {
                    //Erro na busca da propriedade
                    console.log("Erro. Propriedade não encontrada.");
                }
                else {
                    //Propriedade encontrada, solicitar os dados da reserva e registrar a reserva
                    //Solicitar o nome do usuário que está fazendo a reserva, verificar num loop se ele existe
                    let loopquest = 0;
                    while ( loopquest == 0) {
                        let usuariores = req.question("Digite o nome do usuário que fará a reserva:\n");
                        var usuarioresbusca = sist.buscaruser(usuariores);
                        if (usuarioresbusca != 0) {
                            //O usuário existe, podemos seguir com a reserva
                            loopquest = 1;
                        }
                        else {
                            console.log("Usuário não existe, insira um nome de usuário válido para a reserva!");
                        }
                    }
                    //Solicitar os dados do check-in
                    let horacin = req.question("Insira a hora do check-in (apenas a hora, sem um h ou algo do tipo. ex: 17 para 17h):\n");
                    let minutoscin = req.question("Insira os minutos do check-in (se for 00 escreva apenas 0):\n");
                    let diacin = req.question("Insira o dia do check-in:\n");
                    let mescin = req.question("Insira o mês do check-in (o número que equivale ao mês):\n");
                    let anocin = req.question("Insira o ano do check-in (ano completo, não abrevie 2024 para 24, por exemplo):\n");
                    //Agora os dados do check-out
                    let horacout = req.question("Insira a hora do check-out (apenas a hora, sem um h ou algo do tipo. ex: 17 para 17h):\n");
                    let minutoscout = req.question("Insira os minutos do check-out (se for 00 escreva apenas 0):\n");
                    let diacout = req.question("Insira o dia do check-out:\n");
                    let mescout = req.question("Insira o mês do check-out (o número que equivale ao mês):\n");
                    let anocout = req.question("Insira o ano do check-out (ano completo, não abrevie 2024 para 24, por exemplo):\n");
                    //Agora informações adicionais
                    let valorres = req.question("Insira o valor total da reserva:\n");
                    let statuspagres = req.question("Insira o status do pagamento da reserva:\n");
                    //Agora arrumar esses dados na classe reserva e finalizar
                    sist.addreserva(new reserva(sist.novoidreserva(), propbusca.id, usuarioresbusca.id, 
                    [horacin, minutoscin, diacin, mescin, anocin], [horacout, minutoscout, diacout, mescout, anocout], valorres, statuspagres));
                    console.log("Reserva feita com sucesso!");
                }
            }
            else if (opcao == "7") {
                //Cancelar reserva (min de 24h antes)
                //Primeiro listamos as reservas com seus ids correspondentes, adicionamos 1 para melhorar o visual
                let tdsres = sist.fornecerres();
                console.log("Essas são as reservas registradas:");
                for (res of tdsres){
                    propres = sist.buscapropriedadeid(res.propid);
                    userres = sist.buscaruserid(res.iduser);
                    console.log(res.id+1, "- Reserva em", propres.nome, "de", userres.nome);
                    let resdatacin = res.datacin[2]+"/"+res.datacin[3]+"/"+res.datacin[4];
                    let horacin = res.datacin[0]+":"+res.datacin[1];
                    let resdatacout = res.datacout[2]+"/"+res.datacout[3]+"/"+res.datacout[4];
                    let horacout = res.datacout[0]+":"+res.datacout[1];
                    console.log("Data de Check-in:", resdatacin, "às", horacin, "; Data de Check-out:", resdatacout, "às", horacout);
                    console.log("Valor total da reserva:", res.valor, "; Status de pagamento:", res.statuspag);
                }
                let resremov = req.question("Digite o valor correspondente a reserva que deseja cancelar (0 se não quiser cancelar nenhuma):\n");
                if (resremov == -1) {
                    //O usuário não desejou apagar nenhuma reserva
                    console.log("Nenhuma reserva foi cancelada.");
                }
                else if (resremov++ <= tdsres.length || resremov > -1) {
                    //Obter a reserva
                    let rescancel = sist.buscareservaidesp(resremov);
                    //Agora verificar se o mínimo de 24 horas para cancelar está sendo cumprido
                    if (data.getFullYear() < rescancel.datacin[4]) {
                        //Um ano de antecedência é o suficiente
                        sist.removerreservaid(resremov);
                        console.log("A reserva foi cancelada com sucesso.");
                    }
                    else if (data.getFullYear() == rescancel.datacin[4]) {
                        //No mesmo ano, verificar o mês
                        if (data.getMonth() < rescancel.datacin[3]) {
                            //Um mês de antecedência é o suficiente
                            sist.removerreservaid(resremov);
                            console.log("A reserva foi cancelada com sucesso.");
                        }
                        else if(data.getMonth() == rescancel.datacin[3]) {
                            //Mesmo mês, devemmos verificar o dia
                            if (data.getDate() < rescancel.datacin[2]--) {
                                //Mais de 1 dia de antecedência é o suficiente
                                sist.removerreservaid(resremov);
                                console.log("A reserva foi cancelada com sucesso.");
                            }
                            else if (data.getDate() == rescancel.datacin[2]--) {
                                //Um dia de antecedência, verificamos o horário
                                if (data.getHours() < rescancel.datacin[1]) {
                                    //24 de antecedência cumpridas, reserva cancelada
                                    sist.removerreservaid(resremov);
                                    console.log("A reserva foi cancelada com sucesso.");
                                }
                                else {
                                    //Exigência de mínimo de 24h não foi cumprido
                                    console.log("É necessário um mínimo de 24h para cancelar sua reserva!");
                                }
                            }
                            else {
                                //Não é possível cancelar uma reserva que já passou
                                console.log("Não é possível cancelar uma reserva que já passou.");
                            }
                        }
                        else{
                            //Não é possível cancelar uma reserva que já passou
                            console.log("Não é possível cancelar uma reserva que já passou.");
                        }
                    }
                    else {
                        //Não é possível cancelar uma reserva que já passou
                        console.log("Não é possível cancelar uma reserva que já passou.");
                    }
                }
                else {
                    //Valor inválido
                    console.log("Digite um valor válido.");
                }

            }
            else if (opcao == "8") {
                //Adicionar propriedade
                let nomeprop = req.question("Digite o nome da nova propriedade:\n");
                if (sist.buscapropriedade(nomeprop) == 0) {
                    let endereco = req.question("Digite o endereço da nova propriedade:\n");
                    let cap = req.question("Digite a capacidade de hóspedes da nova propriedade:\n");
                    let numq = req.question("Digite o número de quartos da nova propriedade:\n");
                    let pnoite = req.question("Digite o preço da noite da nova propriedade:\n");
                    sist.addprop(new propriedade(sist.novoidprop(), nomeprop, endereco, cap, numq, pnoite, true));
                    console.log("Propriedade criada com sucesso!");
                }
                else {
                    console.log("Essa propriedade já existe, insira um novo nome!");
                }
            }
            else if (opcao == "9") {
                //Excluir propriedade
                let nomeprop = req.question("Digite o nome da propriedade que deseja excluir:\n");
                let propbusca = sist.buscapropriedade(nomeprop);
                if (propbusca == 0) {
                    //Erro na busca da propriedade
                    console.log("Erro na busca da propriedade. Verifique se digitou o nome corretamente ou se ela está registrada.");
                }
                else {
                    //Agora, verificar se existe alguma reserva nessa propriedade
                    let existeres = sist.verificarresempropid(propbusca.id);
                    if (existeres == 0) {
                        //Agora, confirmação de remoção dessa propridade
                        let resprem = req.question("Tem certeza que deseja remover a propriedade? Isso também apagará anúncios relacionados a mesma. s/n");
                        if (resprem == "s") {
                            //Apagando propriedade e anúncios relacionados a mesma
                            sist.removeranunciosdeprop(propbusca.id);
                            sist.removerpropriedade(propbusca.id);
                            console.log("Propriedade e anúncios relacionados a mesma exclúidos com sucesso.");
                        }
                        else if (resprem == "n") {
                            //Não apagando propriedade.
                            console.log("A propriedade não foi apagada.")
                        }
                        else {
                            //Resposta inválida, a propriedade não foi apagada
                            console.log("Erro. Resposta inválida inserida, por favor, responda com 's' caso queira que a propriedade seja removida.");
                        }
                    }
                    else {
                        //Existem reservas nessa propriedade, não é permitada a exclusão da mesma
                        console.log("Foi encontrada uma reserva na propriedade que se deseja excluir. Exclusão impossibilitada.");
                    }
                }
            }
            else if (opcao == "10") {
                //Fazer anúncio
                let nomeprop = req.question("Digite o nome da propriedade que deseja fazer anúncio:\n");
                let propbusca = sist.buscapropriedade(nomeprop);
                if (propbusca == 0) {
                    //Erro na busca da propriedade
                    console.log("Propriedade não encontrada.");
                }
                else {
                    //Propriedade encontrada, agora as informações do anúncio
                    let tituloanun = req.question("Digite o título do anúncio:\n");
                    let descanun = req.question("Digite a descrição do anúncio:\n");
                    sist.addanun(new anuncio(sist.novoidanuncio, sist.usuariolog.id, propbusca.id, tituloanun, descanun, true));
                    console.log("Anúncio feito com sucesso!");
                }
            }
            else if (opcao == "11") {
                //Excluir anúncio
                let tituloanun = req.question("Digite o título do anúncio que deseja remover:\n");
                let anunbusca = sist.buscaanuncio(tituloanun);
                if (anunbusca == 0){ 
                    //Erro na busca do anúncio
                    console.log("Erro. Anúncio não encontrado.");
                }
                else {
                    //Confirmação para excluir o anúncio
                    console.log("Tem certeza que deseja apagar:", anunbusca.titulo);
                    let resp = req.question("Responda com s/n:");
                    if (resp == "n") {
                        //Não apagar anúncio
                        console.log("O anúncio não foi excluído.");
                    }
                    else if(resp == "s") {
                        //Apagar anúncio
                        sist.removeranuncio(tituloanun);
                        console.log("Anúncio removido com sucesso!");
                    }
                    else {
                        //Erro na resposta
                        console.log("Uma resposta inválida foi inserida. O anúncio não foi excluído.");
                    }
                }
            }
            else if (opcao == "12") {
                //Avaliar estadia
                let nomeprop = req.question("Digite o nome da propriedade que deseja avaliar:");
                let notaav = req.question("Avalie a estadia com uma nota de 0 a 10:");
                let comentarioav = req.question("Insira um comentário para sua avaliação:");
                sist.addavaliacao(new avaliacao(sist.novoidavaliacao, sist.usuariolog.nome, nomeprop, notaav, comentarioav));
                console.log("Avaliação adicionada com sucesso! Muito obrigado!");
            }
            else if (opcao == "13") {
                //Visualizar avaliações
                let avs = sist.forneceravaliacoes();
                console.log("Essas são as avaliações registradas:");
                for (av of avs) {
                    console.log("O usuário", av.nomeuser, "fez uma avaliação sobre", av.nomeprop, "com nota", av.nota);
                    console.log("Comentário:", av.comentario);
                }
                req.question("Pressione ENTER para continuar...");
            }
            else if (opcao == "14") {
                //Voltar para a tela de login
                baseloop = 1;
                sist.logar(null);
            }
            else {
                //Caso nenhuma das opções válidas tenha sido inserida
                console.log("Erro. Digite uma opção válida.");
            }
        }
    }
}

iniciarprog();