class MenuRanking extends Phaser.Scene {

    constructor() {
        super({key:"rankingScene"});
    }

    preload(){}

    init(data){
        this.prev = data.prev;
        this.theme = data.theme;
        this.pontuacao = data.pontuacao;
    }

    create(){
        this.scene.bringToTop();

        //region Opções
        let buttonOpcoes = this.add.sprite(0,0,'btn_190x49_'+this.theme,0).setScale(0.8);
        let textOpcoes = this.add.bitmapText(0,0,'pixel','Opções',10).setOrigin(0.5);

        this.add.container(700,50,[buttonOpcoes,textOpcoes])
            .setSize(200,50)
            .setInteractive({useHandCursor:true}, Phaser.Geom.Rectangle.Contains)

            .on('pointerdown',() => {
                buttonOpcoes.setFrame(1);
                textOpcoes.y = 3;
            })
            .on('pointerup',() => {
                buttonOpcoes.setFrame(0);
                textOpcoes.y = 0;
                this.scene.start("opcoesScene",{prev:"rankingScene",theme:this.theme});});
        //endregion

        let window = this.add.sprite(0,0,'w_400x450_'+this.theme).setOrigin(0,0);

        let title = this.add.bitmapText(200,25,'pixel','Ranking',30).setOrigin(0.5);
        let backButton = this.add.sprite(25,20,'backButton')
            .setInteractive({useHandCursor: true})
            .on('pointerdown',() => {
                this.scene.run(this.prev);
                this.scene.sleep();
            });

        let text = this.add.bitmapText(100,70,'pixel','1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n',20).setOrigin(0.5,0);

        let pontos = this.add.bitmapText(200,365,'pixel','A sua pontuação: ' + this.pontuacao,20).setOrigin(0.5,0);

        let vetor = this.points(this.flag);

        let top10 = this.add.bitmapText(215,70,'pixel',vetor[0],20).setOrigin(0.5,0);

        let entrar = this.add.bitmapText(200,390,'pixel',vetor[1],20).setOrigin(0.5,0);

        this.add.container(200,75,[window,title,text,pontos, top10, entrar, backButton]);



    }

    points(){
        if(localStorage) {

            var final = "";
            var entrou;

            let indice = 0;

            var aux =  localStorage.getItem("lugar0");
            for(let i = 0; aux != null; i++){
                if(this.pontuacao < parseInt(aux, 10)){
                    for(let j = i; aux != null; j++){
                        let aux2 = localStorage.getItem("lugar" + j + 1);
                        localStorage.setItem("lugar" + j, aux);
                        aux = aux2;
                    }
                    break;
                }
                aux =  localStorage.getItem("lugar" + i+1);
                indice = i+1;
            }

            if (indice < 10){
                localStorage.setItem("lugar" + indice, this.pontuacao);
                entrou = "Parabéns, entraste para o top 10 :D\n";
            }
            else{
                entrou = "Ohhh, não chegaste ao top 10 :(\n";
            }

            for(let i = 0; i<10; i++ ){
                let teste = localStorage.getItem("lugar" + i);
                if (teste != null){
                    final += teste + "\n";
                }
                else{
                    break;
                }
            }
        }
        else {
            alert("Sorry, your browser do not support local storage.");
        }

        return [final, entrou]
    }


}

