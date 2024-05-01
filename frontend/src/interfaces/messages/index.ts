export interface IMessage {
    _id:string
    content:string
    sender:{
        _id:string
        username:string
        avatar:string
    }
    chat:string
    attachments:Array<string> | []
    createdAt:Date
    updatedAt:Date
}