export class Baselogger{

    log(data){
        console.log('Logged to Default' +data);
    }
    doSomething(){
        console.log('To do Something');
    }
}
export class ElasticLogger extends Baselogger{
    log(data){
        console.log('Logged to ElasticLogger'+ data);
    }
}

export class MongoLogger extends Baselogger{
    log(data){
        console.log('Logged to MongoLogger'+ data);
    }
}