

export interface MessagingResponse {

    /***
     @type boolean
     @default true
     @description Whether the operation succeeded.
     ***/
    success: boolean

    /***
     @type string | null
     @default null
     @description An error message, if any.
     ***/
    error: string | null

}

export interface MessageResponse extends MessagingResponse {

    /***
     @type string
     @description The unique ID of this chat message.
     ***/
    identity: string

}
