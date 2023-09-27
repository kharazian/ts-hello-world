import { hello } from './hello';

class App {
    public static start(){
        console.log(hello('World'));
    }
}

App.start();