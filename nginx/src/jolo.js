/* Constants for bricks */
var NUM_ROWS = 8;
var BRICK_TOP_OFFSET = 10;
var BRICK_SPACING = 2;
var NUM_BRICKS_PER_ROW = 10;
var BRICK_HEIGHT = 10;
var SPACE_FOR_BRICKS = getWidth() - (NUM_BRICKS_PER_ROW + 1) * BRICK_SPACING;
var BRICK_WIDTH = SPACE_FOR_BRICKS / NUM_BRICKS_PER_ROW;
var ball;
/* Constants for ball and paddle */
var PADDLE_WIDTH = 80;
var PADDLE_HEIGHT = 15;
var PADDLE_OFFSET = 10;
var dx=4;
var dy=4;
var BALL_RADIUS = 15;
var paddle;
function start(){
    brickNet();
    ballsperm();
    paddleSperm();
    setTimer(moveBall,2);
    mouseMoveMethod(paddlespermMouse);
}

function lumberMill(){
    var elem= getElementAt(ball.getX(), ball.getY()-BALL_RADIUS-1);
    if(elem!=null){
        dy=-dy;
        remove(elem);
    }
}

function paddleSperm(){
     paddle= new Rectangle(PADDLE_WIDTH,PADDLE_HEIGHT);
      paddle.setPosition(getWidth()/2-PADDLE_WIDTH/2, getHeight()-PADDLE_OFFSET-PADDLE_HEIGHT);
    add(paddle);
}
function paddlespermMouse(e){
    remove(paddle);
    if (e.getX()>=0 && e.getX()<=getWidth()-PADDLE_WIDTH/2){
        paddle.setPosition(e.getX()-PADDLE_WIDTH/2, getHeight()-PADDLE_OFFSET-PADDLE_HEIGHT);
    }
    if(e.getX()<=0)
        paddle.setPosition(0,getHeight()-PADDLE_OFFSET-PADDLE_HEIGHT);            
    // }
    // if (e.getX()>=PADDLE_WIDTH){
    //     paddle.setPosition(getWidth()-PADDLE_WIDTH,getHeight()-PADDLE_OFFSET-PADDLE_HEIGHT); 
    // }
    add(paddle);
}


function brickNet(){
    for(var c=0; c<10; c++){
        for (var i=0; i<8; i++ ){
            var brick= new Rectangle(BRICK_WIDTH,BRICK_HEIGHT);
            brick.setPosition(0+c*BRICK_WIDTH+2*c, BRICK_TOP_OFFSET+i*BRICK_HEIGHT+i*BRICK_SPACING )
            if(i%8==1 || i%8==0 ){
            brick.setColor(Color.RED)
            }
            if(i%8==2 || i%8==3 ){
            brick.setColor(Color.ORANGE)
            }
            if(i%8==4 || i%8==5 ){
            brick.setColor(Color.GREEN)
            }
            if(i%8==6 || i%8==7 ){
            brick.setColor(Color.BLUE)
            }    
            add(brick)
        }    
    }    
}



function ballsperm(){
	ball= new Circle(BALL_RADIUS);
	ball.setPosition(getWidth()/2,getHeight()/2);
	add(ball);    
    }

// 

function moveBall(){
    ball.move(dx,dy);
    if (ball.getX()+BALL_RADIUS>=getWidth()){
        dx=-dx;
    }
    if (ball.getY()+BALL_RADIUS>=getHeight()){
        // dy=-dy;
        stopTimer(moveBall)
        remove(ball)
    }
    if (ball.getX()-BALL_RADIUS<=0){
        dx=-dx;
    }    
    if (ball.getY()-BALL_RADIUS<=0){
        dy=-dy;       
    }
    if(ball.getY()>=getHeight()-PADDLE_OFFSET-PADDLE_HEIGHT*2 && ball.getX()>=paddle.getX() && ball.getX()<=paddle.getX()+PADDLE_WIDTH ){
        dy=-dy
    }
     lumberMill();
}