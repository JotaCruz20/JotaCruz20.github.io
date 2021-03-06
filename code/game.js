var config = {
    type:Phaser.AUTO,
    width:800,
    height:600,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    autoStart: true,
    autoCenter: true,
    physics: {
        default: 'arcade',
        fps:{
            target:60,
            forceSetTimeOut: true
        },
        arcade: {
            gravity:{y:1400},
            debug: false
        }
    },
    //scene:[PlayerScene,montanha1v1,floresta1v1,helperMontanha,helperCaixa,Morte]
    scene:[BootScene,background,IntroScene,MenuPrincipal,audioManager,NoRank,AnimationScene,LoseScene,LoseGameScene,MenuAjuda,MenuRanking,MenuCreditos,MenuOpcoes,PlayerScene,WinGameScene,WinScene,montanha1v1,floresta1v1,deserto1v1,montanhasSinglePlayer,FlorestaSinglePlayer,desertSinglePlayer,helperMontanha,helperCaixa,MenuPausa,ChooseScenario]
};

var game= new Phaser.Game(config);
