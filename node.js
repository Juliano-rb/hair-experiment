class Node{
    constructor(canvas, x, y){
        this.children = null;
        this.canvasctx = canvas;

        this.x = x;
        this.y = y;

        this.lineWidth = 3;
        this.color = "rgb(214,67,60)";

        this.speed = 0.4;
        //TO DO:
        //O nó mantém um movimento q pode ser acelerado/desacelerado e
        //influenciado por outros movimentos
        this.dx = 0;
        this.dy = 0;
    }

    //Desenha o fio de cabelo
    //Recebe a transparência do trecho do cabelo atual.
    draw(alpha){
        if(!alpha)
            alpha = 1;

        this.canvasctx.beginPath();
        //Começo da linha: ponto atual
        this.canvasctx.moveTo(this.x,this.y);
        this.canvasctx.lineWidth = this.lineWidth;

        var color_alpha = this.color.replace(/rgb/i, "rgba");
        color_alpha = color_alpha.replace(/\)/i,',' + alpha);
        this.canvasctx.strokeStyle=color_alpha;
        //Se tem um nó filho, faz uma linha até ele, se não finaliza a linha (com stroke)
        if(this.children)
            this.canvasctx.lineTo(this.children.x,this.children.y);

        this.canvasctx.stroke();

        //Executa o mesmo procedimento para o nó filho, reduz o alpha
        //Com isso, a ponta do fio é transparente
        if(this.children){
            this.children.draw(alpha-0.03);
        }
    }

    //Liga dois nós
    father(children){
        this.children = children;
    }

    //Atuliza a posição do 'nó' atual e faz o mesmo com os nós filhos:
    //Recebe um vetor (uma direção para onde seguir)
    update(dx,dy){
        if(this.children){
            var distance = this._calc_dist(dx,dx, this.children.x,this.children.y);

            //Para impedir dos nós ficarem muito próximos
            if (distance > 50)
                //Os nós filhos se movem na direção do nó pai
                this.children.update(this.x - this.children.x,this.y-this.children.y);
        }

        this.x = this.x + dx*this.speed;
        this.y = this.y + dy*this.speed;
    }

    //Retorna a quantidade de pontos conectados.
    get chain_size(){
        if(!this.children){
            return 0;
        }
        else{
            return 1 + this.children.chain_size;
        }
    }

    // queue_to(x,y){

    // }

    //Calculo de distancia entre dois pontos... auxiliar
    _calc_dist(x1,y1,x2,y2){
        var powx = Math.pow(x2-x1,2);
        var powy = Math.pow(y2-y1,2);
        //console.log(x2 + " " + y2 +" - " +powx  + " " + powy);
        var distance = Math.sqrt( powx + powy  );
        return distance;
    }
}
