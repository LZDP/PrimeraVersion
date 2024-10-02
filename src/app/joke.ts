export class Joke {
    punchline: String;
    resp: String;
    hidden: Boolean;

    constructor(texto:string,texto2:string){
        this.punchline= texto;
        this.resp= texto2;
        this.hidden=true;
    }

    toogle(){
        if(this.hidden){
            this.hidden = false;
        }
        else this.hidden = true;
    }

}
