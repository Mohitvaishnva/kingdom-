const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;
var bgimg
var gameState = "wait"
var bgimg1, logo, logoimg, about, level1item1, level1item2, level1item3
var level1item1img, level2item1img, level3item1img
var level1obs1, level1obs2, level1obs3, level1obs4, level1obs5
var level1obs1img, level1obs2img, level1obs3img, level1obs4img, level1obs5img
var player, engine, world, invisibleground
var life = 3
var level1img, heart, collect, start, startimg, gottime, gotbino,resizeCanvas
var lifeprint = "left"
var heartimg
var heartallimg, heartlost1img, heartlost2img, heartlostallimg, l1collectall, l1collectmap, l1collecttime, l1collectbino, l1collectmaptime, l1collectmapbino
var l1collecttimebino, l1collectmap, playerwalk, playerdie, playerwalkleft
var count = 0
var levelup,levelupimg,level2grndimg,wall,wallimg,doorc,dooro,dooropen,doorclose
var fall="no"
var metaldoor,metaldoorimg
var l2ob1,l2ob1img
var l2ob2,l2ob2img
var l2ob3,l2ob3img
var l2ob4,l2ob4img
var l2ob5,l2ob5img
var l2ob6,l2ob6img
var l2ob7,l2ob7img
var l2ob8,l2ob8img
var l2ob9,l2ob9img

var l2ob10,l2ob10img
var l2ob11,l2ob11img
var l2ob12,l2ob12img
var l2ob13,l2ob13img
var l2ob14,l2ob14img
var l2ob15,l2ob15img





function preload() {
    bgimg = loadImage("magicbook.gif")
   // metaldoorimg=loadAnimation("dm1.jpg","dm1.jpg","dm1.jpg","dm2.jpg","dm2.jpg","dm2.jpg","dm2.jpg","dm3.jpg","dm3.jpg","dm3.jpg","dm3.jpg","dm3.jpg","dm4.jpg","dm4.jpg","dm4.jpg","dm4.jpg","dm4.jpg")
    dooropen=loadImage("dr1.png")
    doorclose=loadImage("dr2.png")
    level2grndimg=loadImage("bg.png")
    wallimg=loadImage("castleasset4.png")
    levelupimg=loadImage("levelup.gif")
    level1img = loadImage("level1.png")
    level2img = loadImage("level2.png")
    bgimg1 = loadImage("mysterybg.jpg")
    logoimg = loadImage("logo.png")
    playbg = loadImage("bgcastle.jpg")
    level1item1img = loadImage("map.png")
    level1item2img = loadImage("time.png")
    level1item3img = loadImage("bino.png")
    level1obs1img = loadImage("obs2.png")
    level1obs2img = loadImage("obs3.png")
    level1obs3img = loadImage("obs5.png")
    level2obs1img = loadImage("obs1.png")
    heartallimg = loadAnimation("lifeall.png", "lifeall.png", "lifeall.png")
    heartlost1img = loadAnimation("lifelost1.png", "lifelost1.png", "lifelost1.png")
    heartlost2img = loadAnimation("lifelost2.png", "lifelost2.png", "lifelost2.png")
    heartlostallimg = loadAnimation("lifelostall.png", "lifelostall.png", "lifelostall.png")
   
    collectionbar = loadImage("collectionbar.PNG")



    playerwalk = loadAnimation("image/wright/w1.png", "image/wright/w2.png", "image/wright/w3.png", "image/wright/w4.png", "image/wright/w5.png", "image/wright/w6.png", "image/wright/w7.png", "image/wright/w8.png", "image/wright/w9.png", "image/wright/w10.png")
    playerdie = loadAnimation("image/die/d7.png", "image/die/d7.png")
    playerwalkleft = loadAnimation("image/wleft/w1.png", "image/wleft/w2.png", "image/wleft/w3.png", "image/wleft/w4.png", "image/wleft/w5.png", "image/wleft/w6.png", "image/wleft/w7.png", "image/wleft/w8.png", "image/wleft/w9.png", "image/wleft/w10.png")

    startimg = loadImage("image/level1/start.png")

    l2ob1img=loadImage("l2o1.png")
    l2ob2img=loadImage("l2l5.png")
    l2ob3img=loadImage("l2o4.png")
    l2ob4img=loadImage("l2o6.png")
    l2ob5img=loadImage("l2o7.png")
    l2ob6img=loadImage("l2o8.png")
    l2ob7img=loadImage("l2o9.png")
    l2ob8img=loadImage("l3o3.png")
    l2ob9img=loadImage("l3o5.png")
     
    l2ob10img=loadImage("dm1.jpg")
    l2ob11img=loadImage("dm2.jpg")
    l2ob12img=loadImage("dm3.jpg")
    l2ob13img=loadImage("dm4.jpg")
    l2ob14img=loadImage("dr1.png")
    l2ob14img=loadImage("dr2.png")

      

}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 50)
    //  book=createSprite(width/4,height/1.25)
    //book.addImage(bgimg)
    //book.scale=.7

    engine = Engine.create()
    engine = engine.world

    invisibleground = createSprite(width / 2, height - 20, width, 10)
    invisibleground.visible = false

    logo = createSprite(width / 2, height / 2.5)
    logo.addImage(logoimg)
    logo.scale = 1.25

    levelup = createSprite(width / 2, height / 2.5)
    levelup.addImage(levelupimg)
    levelup.scale = 1.25
    levelup.visible=false

    level1item1 = createSprite((Math.round(random(250, width - 100))), (Math.round(random(100, height - 50))))
    level1item1.addImage(level1item1img)
    level1item1.scale = 0.2
    level1item1.visible = false

    

    level1item2 = createSprite((Math.round(random(100, width - 100))), (Math.round(random(100, height - 100))))
    level1item2.addImage(level1item2img)
    level1item2.scale = 0.35
    level1item2.visible = false

    level1item3 = createSprite((Math.round(random(80, width - 80))), (Math.round(random(100, height - 80))))
    level1item3.addImage(level1item3img)
    level1item3.scale = 0.35
    level1item3.visible = false



    level1obs1 = createSprite(100, height - 100)
    level1obs1.addImage(level1obs1img)
    level1obs1.scale = 0.5
    level1obs1.visible = false

    level1obs2 = createSprite((width - 100), height - 100)
    level1obs2.addImage(level1obs2img)
    level1obs2.scale = 0.5
    level1obs2.visible = false


    level1obs3 = createSprite((width / 2 + 100), height - 100)
    level1obs3.addImage(level1obs3img)
    level1obs3.scale = 0.5
    level1obs3.visible = false


    play = createImg("play.png")
    play.position(width / 3, height / 1.3)
    play.size(250, 150)


    about = createImg("about.png")
    about.position(width / 3 + 300, height / 1.3)
    about.size(230, 150)

    level1 = createSprite(150, 60)
    level1.addImage(level1img)
    level1.visible = false
    level1.scale = 0.7

    level2 = createSprite(150, 60)
    level2.addImage(level2img)
    level2.visible = false
    level2.scale = 0.7

    heart = createSprite(width - width / 8, 60)
    heart.addAnimation("all", heartallimg)
    heart.addAnimation("one", heartlost1img)
    heart.addAnimation("two", heartlost2img)
    heart.addAnimation("three", heartlostallimg)
    heart.visible = false
    heart.scale = 0.6

    player = createSprite(width / 4, height - 50, 50, 50)
    player.visible = false

    player.addAnimation("walk", playerwalk)
    player.addAnimation("walkleft", playerwalkleft)
    player.addAnimation("die", playerdie)
    player.setCollider("rectangle", 0, 0, player.width / 4, player.height / 2)


    collect = createSprite(width / 2 - 20, 60)
    collect.addImage(collectionbar)


    collect.visible = false
    collect.scale = 0.6
    //collect.debug=true
    collect.setCollider("rectangle", 0, 0, collect.width, collect.height)

    level1start = createSprite(width / 2, height / 2)
    level1start.addImage(startimg)
    level1start.visible = false


    gotmap = createSprite(collect.x + 50, collect.y + 10)
    gotmap.addImage(level1item1img)
    gotmap.scale = 0.15
    gotmap.visible = false

    gottime = createSprite((collect.x) - 50, collect.y + 10)
    gottime.addImage(level1item2img)
    gottime.scale = 0.3
    gottime.visible = false

    gotbino = createSprite(collect.x, collect.y + 10)
    gotbino.addImage(level1item3img)
    gotbino.scale = 0.3
    gotbino.visible = false


//level 2
l2ob1=createSprite(width/4,height/2)
l2ob1.addImage(l2ob1img)
l2ob1.visible=false
 
l2ob2=createSprite(width/4,height/2)
l2ob2.addImage(l2ob2img)
l2ob2.visible=false

l2ob3=createSprite(width/4,height/2)
l2ob3.addImage(l2ob3img)
l2ob3.visible=false

l2ob4=createSprite(width/4,height/2)
l2ob4.addImage(l2ob4img)
l2ob4.visible=false

l2ob5=createSprite(width/4,height/2)
l2ob5.addImage(l2ob5img)
l2ob5.visible=false

l2ob6=createSprite(width/4,height/2)
l2ob6.addImage(l2ob6img)
l2ob6.visible=false

l2ob7=createSprite(width/4,height/2)
l2ob7.addImage(l2ob7img)
l2ob7.visible=false

l2ob8=createSprite(width/4,height/2)
l2ob8.addImage(l2ob8img)
l2ob8.visible=false

l2ob9=createSprite(width/4,height/2)
l2ob9.addImage(l2ob9img)
l2ob9.visible=false
 
l2ob10=createSprite(width/4,height/2)
l2ob10.addImage(l2ob10img)
l2ob10.visible=false

l2ob11=createSprite(width/4,height/2)
l2ob11.addImage(l2ob11img)
l2ob11.visible=false


l2ob12=createSprite(width/4,height/2)
l2ob12.addImage(l2ob12img)
l2ob12.visible=false

l2ob13=createSprite(width/4,height/2)
l2ob13.addImage(l2ob13img)
l2ob13.visible=false

l2ob14=createSprite(width/4,height/2)
l2ob14.addImage(l2ob14img)
l2ob14.visible=false

l2ob15=createSprite(width/4,height/2)
l2ob15.addImage(l2ob15img)
l2ob15.visible=false

doorc= createSprite(width-200,height/4+100)
doorc.addImage(doorclose)
doorc.visible=false

dooro= createSprite(width-200,height/4+100)
dooro.addImage(dooropen)
dooro.visible=false

/*metaldoor = createSprite(width/2-200,height/1.25)
metaldoor.addAnimation("metaldooropen",metaldoorimg)
metaldoor.scale=0.5
metaldoor.visible=false*/



}

function draw() {
    if(gameState==="wait"){
    background(bgimg1)


}
    //player.display()

    player.collide(invisibleground)

    play.mousePressed(() => {
        gameState = "Level 2"

    })

    if (gameState === "Level 1") {
        background(playbg)
        logo.visible = false
        play.hide()
        about.hide()
        level1item1.visible = true
        level1item2.visible = true
        level1item3.visible = true

        level1obs2.visible = true
        level1obs3.visible = true
        level1.visible = true
        collect.visible = true
        player.visible = true
        heart.visible = true

        if(count===3){
            gameState="levelup"
        }


        if (keyIsDown(RIGHT_ARROW)) {
            player.x += 5
            player.changeAnimation("walk", playerwalk)
        }

        if (keyIsDown(LEFT_ARROW)) {
            player.x -= 5
            player.changeAnimation("walkleft", playerwalkleft)
        }

        if (keyDown("space")) {
            player.velocityY = -15
        }

        player.velocityY += 0.8
        if (player.x > width) {
            player.x = 50
        }

        if (player.x < 0) {
            player.x = width - 100
        }




        if (player.isTouching(level1item1) || player.isTouching(level1item2) || player.isTouching(level1item3)) {
            if (player.isTouching(level1item1) && keyDown("t")) {
                gotmap.visible = true
                level1item1.destroy()
                count += 1
                console.log("got : ", count)
            }

            if (player.isTouching(level1item2) && keyDown("t")) {
                gottime.visible = true
                level1item2.destroy()
                count += 1
                console.log("got : ", count)
            }

            if (player.isTouching(level1item3) && keyDown("t")) {
                gotbino.visible = true
                level1item3.destroy()
                count += 1
                console.log("got : ", count)
            }
        }




        if (player.isTouching(level1obs2) || player.isTouching(level1obs3)) {
            level1start.visible = true
            

            if (player.isTouching(level1obs2)) {
                level1obs2.destroy()


            }

            if (player.isTouching(level1obs3)) {
                level1obs3.destroy()
            }
            life = life - 1
            if (life == 2) {
                heart.changeAnimation("one", heartlost1img)
            }

            if (life == 1) {
                heart.changeAnimation("two", heartlost2img)
            }

            player.changeAnimation("die", playerdie)
            if (life > 0) {
                lifeprint = "lifelost"
            }

        }
        if (keyDown("s")) {
            lifeprint = "left"
            player.changeAnimation("walk", playerwalk)
            level1start.visible = false


        }


    }


    //level up codes

    if(gameState==="levelup"){
        //background(levelupimg)
        background(playbg)
        logo.visible = false
        play.hide()
        about.hide()
        level1item1.visible = false
        level1item2.visible = false
        level1item3.visible = false

        level1obs2.visible = false
        level1obs3.visible = false
        level1.visible = false
        collect.visible = false
        player.visible = false
        heart.visible = false
        levelup.visible=true
    gotmap.visible=false
    gotbino.visible=false
    gottime.visible=false

    }
    //move to next level
    if(gameState==="levelup"&& keyDown("c")){
        gameState="Level 2"
    }

//level 2 codes

if (gameState==="Level 2"){
    background(level2grndimg)
    player.velocityY += 0.8
   // player.visible=true
    //player.changeAnimation("walk", playerwalk)
    level2.visible = true
    level2.depth= l2ob1.depth+1
    level1.visible = false
    levelup.visible=false
    l2ob1.visible=true
    dooro.visible=true
    //metaldoor.visible=true
    logo.visible = false
    play.hide()
    about.hide()
    collect.visible = true
    heart.visible = true

    if(count===3){
        gameState="levelup"
    }


    if (keyIsDown(RIGHT_ARROW)) {
        player.x += 5
        player.changeAnimation("walk", playerwalk)
    }

    if (keyIsDown(LEFT_ARROW)) {
        player.x -= 5
        player.changeAnimation("walkleft", playerwalkleft)
    }

    if (keyDown("space")) {
        player.velocityY = -15
    }

    player.velocityY += 0.8
    if (player.x > width) {
        player.x = 50
    }

    if (player.x < 0) {
        player.x = width - 100
    }



   /* if (player.isTouching(level1obs2) || player.isTouching(level1obs3)) {
        level1start.visible = true
        

        if (player.isTouching(level1obs2)) {
            level1obs2.destroy()


        }

        if (player.isTouching(level1obs3)) {
            level1obs3.destroy()
        }*/
      //  life = life - 1
        if (life == 2) {
            heart.changeAnimation("one", heartlost1img)
        }

        if (life == 1) {
            heart.changeAnimation("two", heartlost2img)
        }

        player.changeAnimation("die", playerdie)
        if (life > 0) {
            lifeprint = "lifelost"
        }

   /* }
    if (keyDown("s")) {
        lifeprint = "left"
        player.changeAnimation("walk", playerwalk)
        level1start.visible = false


    }*/


}

    drawSprites()

    if (gameState === "Level 1") {



        if (lifeprint === "lifelost") {
            fill("green")
            //text(, (width / 4), height / 2)
            player.changeAnimation("die", playerdie)
        }


    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
