class AnimationScene extends Phaser.Scene {

    constructor() {
        super({key: 'animScene'});
    }

    preload(){
    }

    create() {
        const anim = this.add.sprite(400, 300, 'anim_story', 0).setScale(2);

        let infor = this.add.text(30,30,'Clique no espaço para passar',{fontSize:'20px',fill:'black'});

        this.time.addEvent({
            delay: 2000,
            callback: () => {
                infor.destroy();
            }
        });

        this.anims.create({
            key: 'story',
            frames: this.anims.generateFrameNumbers('anim_story', {start: 0}),
            frameRate: 6,
        });

        anim.play('story');

        this.controls = this.input.keyboard.createCursorKeys();

        anim.once('preloadcomplete', () => {
            this.scene.start('chooseScene');
        });

        anim.once('animationcomplete', () => {
            this.scene.start('chooseScene');
        });
    }

    update() {
        if(this.controls.space.isDown){
            this.scene.stop();
            this.scene.start('chooseScene');
        }
    }
}
