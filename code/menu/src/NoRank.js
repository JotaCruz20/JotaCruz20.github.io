class NoRank extends Phaser.Scene{
    constructor() {
        super({key:"noRank"});
    }
    init(data){
        this.theme = data.theme;
    }
    preload(){
        this.scene.bringToTop();
    }
    create(){
        this.helper= this.add.sprite(game.config.width/2,game.config.height/2,'w_400x200_'+this.theme,0).setScale(0.8);
        let textSelec = this.add.bitmapText(game.config.width/2,game.config.height/2,'pixel','Ranking só está Disponivel\nno modo de corrida. ',15).setOrigin(0.5);
        this.add.sprite(game.config.width/2+100,game.config.height/2+30,'close').setInteractive({useHandCursor: true}).on('pointerdown',() => {this.scene.stop()});
        this.controls = this.input.keyboard.createCursorKeys();
    }
    update(){
        if(this.controls.space.isDown){
            this.scene.stop();
        }
    }
}