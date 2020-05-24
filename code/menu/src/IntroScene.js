class IntroScene extends Phaser.Scene{
    constructor() {
        super({key: 'introScene'});
    }

    preload() {
        this.anim = this.add.sprite(400,100,'anim',0).setScale(2);

        this.anims.create({
            key: 'intro',
            frames: this.anims.generateFrameNumbers('anim',{start: 0}),
            frameRate: 10,
        });

        this.anim.play('intro');


        this.load.image('backgroundMountain','assets/images/Menus/images/background/background.png');
        this.load.image('backgroundForest','assets/images/Background/florestaa.png');

        //audios
        this.load.audio("catchCoinSound","assets/sounds/media.io_Coin01.mp3");
        this.load.audio("catchCaixaSound","assets/sounds/media.io_Rise01.mp3");
        this.load.audio("themeSong","assets/sounds/themeSong.mp3");
        this.load.audio("1up","assets/sounds/Mario 1up.wav");
        this.load.audio("deathSound","assets/sounds/Legend Of Zelda Death Sound.mp3");
        this.load.audio("bauSound","assets/sounds/Open Chest (Minecraft)  Sound Effect.mp3");

        //region Buttons
        this.load.spritesheet('btn_190x49_mountain','assets/images/Menus/images/elements/mountain/btn_190x49_mountain.png',{ frameWidth: 190, frameHeight: 49 });
        this.load.spritesheet('btn_300x80_mountain','assets/images/Menus/images/elements/mountain/btn_300_80_mountain.png',{ frameWidth: 300, frameHeight: 80 });
        this.load.spritesheet('btn_300x35_mountain','assets/images/Menus/images/elements/mountain/btn_300x35_mountain.png',{ frameWidth: 300, frameHeight: 35 });

        this.load.spritesheet('btn_190x49_forest','assets/images/Menus/images/elements/forest/btn_190x49_forest.png',{ frameWidth: 190, frameHeight: 49 });
        this.load.spritesheet('btn_300x80_forest','assets/images/Menus/images/elements/forest/btn_300_80_forest.png',{ frameWidth: 300, frameHeight: 80 });

        this.load.spritesheet('btn_190x49_desert','assets/images/Menus/images/elements/desert/btn_190x49_desert.png',{ frameWidth: 190, frameHeight: 49 });
        this.load.spritesheet('btn_300x80_desert','assets/images/Menus/images/elements/desert/btn_300_80_desert.png',{ frameWidth: 300, frameHeight: 80 });

        this.load.image('backButton','assets/images/Menus/images/icons/back_arrow.png');
        this.load.image('pauseButton','assets/images/Menus/images/icons/signs.png');
        this.load.image('nextButton','assets/images/Menus/images/icons/next_arrow.png');

        //endregion

        this.load.bitmapFont('pixel','assets/images/Menus/font/font.png','assets/images/Menus/font/font.fnt');

        //region Windows
        this.load.image('w_300x300_mountain','assets/images/Menus/images/elements/mountain/menu_300x300_mountain.png');
        this.load.image('w_400x200_mountain','assets/images/Menus/images/elements/mountain/menu_400x200_mountain.png');
        this.load.image('w_400x450_mountain','assets/images/Menus/images/elements/mountain/menu_400x450_mountain.png');
        this.load.image('w_450x300_mountain','assets/images/Menus/images/elements/mountain/menu_450x300_mountain.png');

        this.load.image('w_400x200_forest','assets/images/Menus/images/elements/forest/menu_400x200_forest.png');
        this.load.image('w_400x450_forest','assets/images/Menus/images/elements/forest/menu_400x450_forest.png');

        this.load.image('w_400x200_desert','assets/images/Menus/images/elements/desert/menu_400x200_desert.png');
        this.load.image('w_400x450_desert','assets/images/Menus/images/elements/desert/menu_400x450_desert.png');
        //endregion

        this.load.image('grupo','assets/images/Menus/images/todos.png');

        this.load.spritesheet('anim_story',"assets/images/Menus/images/animations/anim_play_spritesheet.png",{frameWidth:400   , frameHeight: 300});
        this.load.spritesheet('bau','assets/images/Menus/images/bau_spritesheet.png',{frameWidth: 75, frameHeight: 62});
        this.load.spritesheet('coin','assets/images/Menus/images/animations/coin.png',{ frameWidth: 25, frameHeight: 25 });
        this.load.spritesheet('clock','assets/images/Menus/images/animations/clock.png',{ frameWidth: 25, frameHeight: 25 });
        this.load.spritesheet('hearts','assets/images/Menus/images/animations/coracao_desvanecer_spritesheet.png',{ frameWidth: 60, frameHeight: 25 });

        this.load.image('noVolume','assets/images/Menus/images/icons/no_sound.png');
        this.load.image('Volume','assets/images/Menus/images/icons/sound.png');


        //Tiles Nivel 1
        this.load.image("tile_set","assets/images/ImagemMapas/montanha 1.png");
        this.load.image('background','assets/images/Background/backgroundSemNuvens.png');
        this.load.image('rochas','assets/images/SpriteSheets/spritesheet.png');
        //Tiles Nivel 2
        this.load.image("tiles","assets/maps/Nivel2/TilesExamples.png");
        this.load.image("tiles2","assets/maps/Nivel2/Tileset.png");
        this.load.image("tilesAgua","assets/maps/Nivel2/coldwaterdeepwater.png");
        this.load.image('backgroundFloresta','assets/images/Background/florestaa.png');
        //Tiles Deserto
        this.load.image('backgroundDeserto','assets/images/Background/deserto2.png');
        this.load.image("tile_setD","assets/images/ImagemMapas/902808864.png");
        this.load.image('areia','assets/images/SpriteSheets/hyptosis_tile-art-batch-1.png');
        //sprites objetos
        this.load.spritesheet('sign',"assets/images/SpriteSheets/signpost.png",{ frameWidth: 50, frameHeight: 50 });
        this.load.spritesheet('stairs','assets/images/SpriteSheets/stairs.png',{ frameWidth: 16, frameHeight: 32 });
        this.load.spritesheet('coins','assets/images/SpriteSheets/moedaG_spritesheet.png',{ frameWidth: 30, frameHeight: 30 });
        this.load.spritesheet('cabra','assets/images/SpriteSheets/cabra_spritesheet.png',{ frameWidth: 70, frameHeight: 74 });
        this.load.spritesheet('caixa','assets/images/SpriteSheets/caixa.png',{ frameWidth: 40, frameHeight: 40 });
        this.load.spritesheet('bauF','assets/images/SpriteSheets/bau_flip_spritesheet.png',{ frameWidth: 73, frameHeight: 60 });
        this.load.spritesheet('piranha','assets/images/SpriteSheets/piranha.png',{ frameWidth: 13, frameHeight: 19 });
        this.load.spritesheet('coracao',"assets/images/SpriteSheets/heart_spritesheet.png",{frameWidth:15, frameHeight:15});
        this.load.spritesheet('sapo',"assets/images/SpriteSheets/sapo_sprite.png",{frameWidth:50, frameHeight:50});
        this.load.spritesheet('cacto','assets/images/SpriteSheets/cacto_sprite.png',{ frameWidth: 36,frameHeight: 44 });
        this.load.spritesheet('close','assets/images/Menus/close.png',{ frameWidth: 30, frameHeight: 30 });
        //Mapas
        this.load.tilemapTiledJSON("map","assets/maps/Nivel1/montanhas1v1.json");
        this.load.tilemapTiledJSON("mapSingle","assets/maps/Nivel1/MontanhasSingle.json");
        this.load.tilemapTiledJSON("map2","assets/maps/Nivel2/floresta.json");
        this.load.tilemapTiledJSON("map2S","assets/maps/Nivel2/florestaSingle.json");
        this.load.tilemapTiledJSON("map3","assets/maps/Nivel3/deserto_tiles.json");
        this.load.tilemapTiledJSON("map3S","assets/maps/Nivel3/desertoSingle.json");
        //sprites para colisoes
        this.load.image("CabraAtaque1",'assets/images/cabra/cabra_grande_ataque_1.png');
        this.load.image("CabraAtaque2",'assets/images/cabra/cabra_grande_ataque_flip_1.png');

        this.load.image('Mapa',"assets/images/ImagemMapas/Montanhas1v1.png");
        this.load.image('MapaRochas',"assets/images/ImagemMapas/rochas.png");

        this.load.image('MapaSingle',"assets/images/ImagemMapas/MontanhasSingle.png");
        this.load.image('MapaRochasSingle',"assets/images/ImagemMapas/rochasSingle.png");

        this.load.image('Mapa2',"assets/maps/Nivel2/floresta.png");
        this.load.image('Agua',"assets/maps/Nivel2/agua.png");
        this.load.image("Mapa2S","assets/images/ImagemMapas/florestaSingle.png");
        this.load.image("Agua2","assets/images/ImagemMapas/waterSingle.png");

        this.load.image('MapaD',"assets/images/ImagemMapas/deserto_tiles.png");
        this.load.image('MapaAreia',"assets/images/ImagemMapas/areia.png");
        this.load.image('MapaDS',"assets/images/ImagemMapas/deserto_tiles_single.png");
        this.load.image('MapaAreiaS',"assets/images/ImagemMapas/areia_single.png");

        this.load.image('PiranhaC',"assets/images/Piranha/1.png");
        this.load.image('sapoC',"assets/images/Sapo/sapo1.png");
        this.load.image('cactoC',"assets/images/Cacto/cactos1.png");

        //Texturas Joao
        this.load.spritesheet('playerJoao',"assets/images/SpriteSheets/sprite_sheet_joao.png",{ frameWidth: 63, frameHeight: 63 });
        this.load.spritesheet('cpuJoao',"assets/images/SpriteSheets/sprite_sheet_joao.png",{ frameWidth: 63, frameHeight: 63 });
        this.load.image('PlayerCollisionJoao',"assets/images/Joao/joao_idle_63px_1.png");
        this.load.image("cabecaJoao","assets/images/Joao/Cabeca.png");
        //Texturas Loreto
        this.load.spritesheet('playerLoreto',"assets/images/SpriteSheets/sprite_sheet_loreto.png",{ frameWidth: 63, frameHeight: 63 });
        this.load.spritesheet('cpuLoreto',"assets/images/SpriteSheets/sprite_sheet_loreto.png",{ frameWidth: 63, frameHeight: 63 });
        this.load.image('PlayerCollisionLoreto',"assets/images/Loreto/mariana_loreto_63px.png");
        this.load.image("cabecaLoreto","assets/images/Loreto/cabeca.png");
        //Texturas Mimi
        this.load.spritesheet('playerMimi',"assets/images/SpriteSheets/sprite_sheet_mariana.png",{ frameWidth: 63, frameHeight: 63 });
        this.load.spritesheet('cpuMimi',"assets/images/SpriteSheets/sprite_sheet_mariana.png",{ frameWidth: 63, frameHeight: 63 });
        this.load.image('PlayerCollisionMimi',"assets/images/Mariana/mariana_base_63px1.png");
        this.load.image("cabecaMimi","assets/images/Mariana/cabeca.png");

        //Players
        this.load.image('Joquinha','assets/images/Menus/images/idle/joao_idle.png');
        this.load.image('Loretinho','assets/images/Menus/images/idle/loretinho_idle.png');
        this.load.image('Mimi','assets/images/Menus/images/idle/mimi_idle.png');
    }

    create() {
        this.anim.once('animationcomplete', ()=>{

            this.scene.start('audioManager');
            this.scene.start('background');
            this.scene.start("principalScene");
        });
    }
}