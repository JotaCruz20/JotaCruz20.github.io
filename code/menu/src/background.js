class background extends Phaser.Scene {

    constructor() {
        super({key: 'background'});
    }
    init(data){
        this.key=data.backKey;
    }

    preload(){
    }

    create(){
        this.add.sprite(0,0,this.key).setOrigin(0,0);
    }
}