class WinGameScene extends Phaser.Scene {

    constructor() {
        super({key: 'winGameScene'});
    }

    preload(){}

    init(data){
        this.tempoFinal=data.time;
        this.lifes=data.lifes;
        this.score=data.score;
        this.theme=data.theme;
    }

    create(){

        let tempoTemp=this.tempoFinal/1000;
        let tempo=(Math.round(tempoTemp*100)/100).toFixed(2);
        let pontuacao=(tempo-this.score).toFixed(2);
        //region Window
        let window = this.add.sprite(0,0,'w_400x450_'+this.theme).setOrigin(0,0);
        let text = this.add.bitmapText(210,40,'pixel','Passaste o Jogo!\nVamos ver a pontuação Final',25).setOrigin(0.5);
        let highScore = this.add.bitmapText(230,90,'pixel','Pontos: ' + pontuacao,20).setOrigin(0.5);
        let coinsScore = this.add.bitmapText(260,120,'pixel','Total de Moedas: '+this.score,15).setOrigin(0.5);
        let timeScore = this.add.bitmapText(260,150,'pixel','Total de Tempo: '+tempo,15).setOrigin(0.5);

        const coinAnim = this.add.sprite(180,120,'coin',0).setScale(1.5);

        this.anims.create({
            key: 'anim_coin',
            frames: this.anims.generateFrameNumbers('coin',{start: 0}),
            frameRate: 7,
            repeat: -1
        });

        coinAnim.play('anim_coin');

        const clockAnim = this.add.sprite(160,150,'clock',0);

        this.anims.create({
            key: 'anim_clock',
            frames: this.anims.generateFrameNumbers('clock',{start: 0}),
            frameRate: 10,
            repeat: -1
        });

        clockAnim.play('anim_clock');

        const bauAnim = this.add.sprite(100,130,'bau',0).setScale(1.2);

        this.anims.create({
            key: 'anim_bau',
            frames: this.anims.generateFrameNumbers('bau',{start: 0}),
            frameRate: 5
        });

        bauAnim.play('anim_bau');

        this.add.container(200,100,[window,text,highScore,bauAnim,coinAnim,clockAnim,coinsScore,timeScore]);
        //endregion

        //region Voltar Menu
        let btnMenu = this.add.sprite(0,0,'btn_300x80_'+this.theme,0).setScale(1,0.7);
        let textMenu = this.add.bitmapText(0,0,'pixel','Menu Principal',20).setOrigin(0.5);

        this.add.container(400,350,[btnMenu,textMenu])
            .setSize(300,80)
            .setInteractive({useHandCursor:true}, Phaser.Geom.Rectangle.Contains)

            .on('pointerdown',() => {
                btnMenu.setFrame(1);
                textMenu.y = 5;
            })
            .on('pointerup',() => {
                btnMenu.setFrame(0);
                textMenu.y = 0;
                this.scene.start("principalScene");});

        //endregion

        //region Rankig
        let btnCont = this.add.sprite(0,0,'btn_300x80_'+this.theme,0).setScale(1,0.7);
        let textCont = this.add.bitmapText(0,0,'pixel','Ranking',20).setOrigin(0.5);

        this.add.container(400,415,[btnCont,textCont])
            .setSize(300,80)
            .setInteractive({useHandCursor:true}, Phaser.Geom.Rectangle.Contains)

            .on('pointerdown',() => {
                btnCont.setFrame(1);
                textCont.y = 5;
            })
            .on('pointerup',() => {
                btnCont.setFrame(0);
                textCont.y = 0;
                this.scene.start("rankingScene",{prev:"winGameScene",theme: this.theme, pontuacao: pontuacao});
            });
        //endregion

        //region seleção
        let btnSelec = this.add.sprite(0,0,'btn_300x80_'+ this.theme,0).setScale(1,0.7);
        let textSelec = this.add.bitmapText(0,0,'pixel','Menu Seleção Personagem',20).setOrigin(0.5);

        this.add.container(400,485,[btnSelec,textSelec])
            .setSize(300,80)
            .setInteractive({useHandCursor:true}, Phaser.Geom.Rectangle.Contains)

            .on('pointerdown',() => {
                btnCont.setFrame(1);
                textCont.y = 5;
            })
            .on('pointerup',() => {
                btnCont.setFrame(0);
                textCont.y = 0;
                this.scene.stop();
                this.scene.stop("background");
                this.scene.start("chooseScene");
            });
        //endregion
    }


}