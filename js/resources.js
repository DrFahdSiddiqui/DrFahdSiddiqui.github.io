game.resources = [

    /* Graphics.
     * @example
     * { name: "example", type:"image", src: "data/img/example.png" },
     */
    { name: "tileset",         type:"image",   src: "data/img/tileset.png" },
    { name: "background",      type:"image",   src: "data/img/background.png" },
    { name: "clouds",          type:"image",   src: "data/img/clouds.png" },
    { name: "L1IRoFS",         type:"image",   src: "data/img/Text/L1IRoFS.png" },
    { name: "1linetext",            type:"image",   src: "data/img/Text/1linetext.png" },
    { name: "flags",            type:"image",   src: "data/img/flags/flags.png" },
    { name: "buildings",            type:"image",   src: "data/img/buildings.png"},
    { name: "Fracking",            type:"image",   src: "data/img/assets/Fracking.png"},


    /* Maps.
     * @example
     * { name: "example01", type: "tmx", src: "data/map/example01.tmx" },
     * { name: "example01", type: "tmx", src: "data/map/example01.json" },
     */
    { name: "Level1",            type: "tmx",    src: "data/map/Level1.tmx" },
    { name: "map2",            type: "tmx",    src: "data/map/map2.json" },


    /* Tilesets.
     * @example
     * { name: "example01", type: "tsx", src: "data/map/example01.tsx" },
     * { name: "example01", type: "tsx", src: "data/map/example01.json" },
     */
    { name: "tileset",         type: "tsx",    src: "data/map/tileset.tsx" },
    { name: "1linetext",      type: "tsx",    src: "data/map/1linetext.tsx" },
    { name: "buildings",      type: "tsx",    src: "data/map/buildings.tsx" },
    { name: "flags",      type: "tsx",    src: "data/map/flags.tsx" },
    { name: "Fracking",      type: "tsx",    src: "data/map/Fracking.tsx" },


    /* Background music.
     * @example
     * { name: "example_bgm", type: "audio", src: "data/bgm/" },
     */
    { name: "dst-gameforest",  type: "audio", src: "data/bgm/" },

    /* Sound effects.
     * @example
     * { name: "example_sfx", type: "audio", src: "data/sfx/" }
     */
    { name: "cling",           type: "audio",  src: "data/sfx/" },
    { name: "die",             type: "audio",  src: "data/sfx/" },
    { name: "enemykill",       type: "audio",  src: "data/sfx/" },
    { name: "jump",            type: "audio",  src: "data/sfx/" },


    /* Atlases
     * @example
     * { name: "example_tps", type: "json", src: "data/img/example_tps.json" },
     */
    // texturePacker
    { name: "texture",         type: "json",   src: "data/img/texture.json" },
    { name: "texture",         type: "image",  src: "data/img/texture.png" },

    /* Bitmap Font
    * @example
    * { name: "example_fnt", type: "image", src: "data/img/example_fnt.png" },
    * { name: "example_fnt", type: "binary", src: "data/img/example_fnt.fnt" },
    */
    { name: "PressStart2P", type:"image", src: "data/fnt/PressStart2P.png" },
    { name: "PressStart2P", type:"binary", src: "data/fnt/PressStart2P.fnt"}
];
