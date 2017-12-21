import {AUDIO_OPTIONS} from "./Constants";

export default class Audio {
    constructor() {
        this.loadSounds();
    }

    loadSounds() {
        this.listener = new THREE.AudioListener();
        this.audioLoader = new THREE.AudioLoader();

        this.loadMainSound();
        this.loadFightersFly();
        this.loadFailSound();
    }

    loadMainSound() {
        this.mainSound = new THREE.Audio( this.listener );
        this.audioLoader.load( AUDIO_OPTIONS.mainAudioLink, ( buffer ) => {
            this.mainSound.setBuffer( buffer );
            this.mainSound.setLoop( true );
            this.mainSound.setVolume( 0.3 );
        });
    }

    loadFightersFly() {
        this.fightersFly = new THREE.Audio( this.listener );
        this.audioLoader.load( AUDIO_OPTIONS.fightersFlyAudioLink, ( buffer ) => {
            this.fightersFly.setBuffer( buffer );
            this.fightersFly.setLoop( false );
            this.fightersFly.setVolume( 0.2 );
        });
    }

    loadFailSound() {
        this.failSound = new THREE.Audio( this.listener );
        this.audioLoader.load( AUDIO_OPTIONS.failAudioLink, ( buffer ) => {
            this.failSound.setBuffer( buffer );
            this.failSound.setLoop( false );
            this.failSound.setVolume( 1 );
        });
    }

    playMainSound() {
        this.mainSound.play();
    }

    stopMainSound() {
        this.mainSound.stop();
    }

    playFightersFly() {
        this.fightersFly.play();
    }

    playFailSound() {
        this.failSound.play();
    }
}
