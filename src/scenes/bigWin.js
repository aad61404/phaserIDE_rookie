
// You can write more code here

/* START OF COMPILED CODE */

class bigWin extends Phaser.Scene {

	constructor() {
		super("bigWin");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// big_win_bg
		this.add.image(373, 339, "big_win_bg");

		// text_big
		this.add.image(380, 269, "text_big");

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
