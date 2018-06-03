game.MyObjEntity = me.Entity.extend({
    /**
     * constructor
     */
    init: function (x, y, settings) {
        // call the super constructor
        me.Entity.prototype.init.apply(this, [x, y, settings]);


        this.fade = settings.fade;
        this.duration = settings.duration;
        this.fading = false;

        // Collect the defined level settings
        this.loadLevelSettings = {};
        [ "container", "onLoaded", "flatten", "setViewportBounds" ].forEach(function (v) {
            if (typeof(settings[v]) !== "undefined") {
                this.loadLevelSettings[v] = settings[v];
            }
        }.bind(this));

        //this.body.collisionType = me.collision.types.COLLECTABLE_OBJECT;
        this.body.collisionType = me.collision.types.ACTION_OBJECT;
    },
    getlevelSettings : function () {
        // Lookup for the container instance
        if (typeof(this.loadLevelSettings.container) === "string") {
            this.loadLevelSettings.container = me.game.world.getChildByName(this.loadLevelSettings.container)[0];
        }
        return this.loadLevelSettings;
    },
    onFadeComplete : function () {


        me.game.viewport.fadeOut(this.fade, this.duration*50);
    },
    /**
     * collision handling
     */
    onCollision : function (/*response*/) {

        // do something when collide
        //me.audio.play("cling", false);
        // give some score
        //game.data.score += 250;

        //avoid further collision and delete it
        //this.body.setCollisionMask(me.collision.types.NO_OBJECT);

        //me.game.world.removeChild(this);

        // Implement url redirection here
        me.game.world.removeChild(this);
        //window.parent.location.href= "http://www.google.com";
        //window.location.href = 'http://www.fahdsiddiqui.com/contact';
        window.top.location.href = 'http://www.fahdsiddiqui.com/contact';
        if (this.fade && this.duration) {
            if (!this.fading) {
                this.fading = true;
                me.game.viewport.fadeIn(this.fade, this.duration,
                        this.onFadeComplete.bind(this));
            }
        }

        return false;
    }
});
