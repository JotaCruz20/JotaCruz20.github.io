class AnimationScene extends Phaser.Scene {

    constructor() {
        super({key: 'animScene'});
    }

    preload(){
        //remove as cenas e volta a adicionar
        this.scene.remove("montanha1v1");
        this.scene.add("montanha1v1",montanha1v1,false);
        this.scene.remove("floresta1v1");
        this.scene.add("floresta1v1",floresta1v1,false);
        this.scene.remove("montanhaSingle");
        this.scene.add("montanhaSingle",montanhasSinglePlayer,false);
        this.scene.remove("FlorestaSinglePlayer");
        this.scene.add("FlorestaSinglePlayer",FlorestaSinglePlayer,false);
        //remover animations
        this.anims.remove('left');
        this.anims.remove('right');
        this.anims.remove('holdR');
        this.anims.remove('holdL');
        this.anims.remove('leftArmor');
        this.anims.remove('holdRArmor');
        this.anims.remove('rightArmor');
        this.anims.remove('leftArmorPerder');
        this.anims.remove('rightArmorPerder');
        this.anims.remove('holdRArmorPerder');
        this.anims.remove('holdLArmorPerder');
        this.anims.remove('rightCPU');
        this.anims.remove("leftCPU");
        this.anims.remove('holdRCPU');
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
