let stage = new PIXI.Container()
let ticker = PIXI.ticker.shared
let loader = new PIXI.loaders.Loader()
let renderer = new PIXI.CanvasRenderer(400, 400, {
    transparent: true,
    antialias: true,
    resolution: 1
})
renderer.view.style.border = "1px dashed black";
loader
    .add('test', './test.png')
    .load(() => {
        let test = new PIXI.Sprite(PIXI.utils.TextureCache['test'])
        test.anchor.set(0.5, 0.5)
        test.position.set(200, 200)
        stage.addChild(test)
        ticker.autoStart = true
        document.body.appendChild(renderer.view)
        ticker.add(() => renderer.render(stage))
        document.querySelector('button').addEventListener('click', () => console.log(renderer.plugins.extract.image(stage)))
    })