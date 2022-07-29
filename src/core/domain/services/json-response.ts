import serialize from 'serialize-javascript';
import { Message } from "src/core/data/models/entities/message";

export class JsonResponse {
    static from(content : any) : string {
        // return serialize(content)
        // new Message()
        // return serialize({});
        return 'new response'
    }
}