/*----------------------------------
| DIGITAL TENNIS            v0.2   |
|----------------------------------|
| copyright (c) 2016 Daniel Ecker  |
----------------------------------*/

//Set some variables
    let pi=Math.PI,
        started = false

const player = new Player(),
    ai = new Ai(),
    ball = new Ball(),
    keys = new KeyHandler(),
    canvas = new Canvas(window.innerWidth, window.innerHeight)
        
    const init = () => {
        draw()

        //Set up the objects
        player.x = player.width;
        player.y = (canvas.height - player.height)/2;
        
        ai.x = canvas.width - (player.width + ai.width);
        ai.y = (canvas.height - ai.height)/2;
        
        ball.serve(1);

        loop()
    }
    
    const update = () => {
        //Update the objects
        ball.update();
        player.update();
        ai.update();
    }
        
    const draw = () => {
        //Draw some stuff to the canvas
        canvas.ctx.fillStyle = "#000";
        canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        canvas.ctx.save();
        canvas.ctx.fillStyle = "#fff";
        
        ball.draw();
        player.draw();
        ai.draw();
        
        let w = 4;
        let x = (canvas.width - w)*0.5;
        let y = 0;
        let step = canvas.height/15;
        while(y < canvas.height) {
            canvas.ctx.fillRect(x, y+step*0.25, w, step*0.5);
            y += step;
        }
        
        canvas.ctx.restore();
    }

    const loop = () => {
        update()
        draw()
        window.requestAnimationFrame(loop, canvas)
    }

    const start = () => {
        canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);

        canvas.ctx.fillStyle = "#fff";
        canvas.ctx.textAlign = "center";

        let titleAnim = window.setInterval(title, 20),
            size = 10,
            pos = canvas.height/2,
            pressAnim

        function title() {
            canvas.ctx.fillStyle = "#000";
            canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);

            canvas.ctx.fillStyle = "#fff";
            canvas.ctx.font = `${size}px 'Press Start 2P'`;
            canvas.ctx.fillText("DIGITAL TENNIS",canvas.width/2,canvas.height/2);
            size++

            canvas.ctx.font = "25px 'Press Start 2P'";
            canvas.ctx.fillText("-> Click the screen <-", canvas.width/2, canvas.height*.7+pos);

            canvas.ctx.font = "15px 'Press Start 2P'";
            canvas.ctx.fillText("© Daniel Ecker", canvas.width/2, canvas.height*.9+pos);

            pos -= 10

            if(size > 50 && pos < 0) {
                window.clearInterval(titleAnim)
            }
        }

        document.addEventListener('mousedown', e => {
            if(!started) {
                started = true
                init()
            }
        }, false)
    }
    
start()