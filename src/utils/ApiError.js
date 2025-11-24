class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null,
        this.message = message
        this.success = false 
        this.errors = errors


        if(stack) {                 //Stack Trace code agar nhi diya to javascript auto generate krdeti hai 
            this.stack = stack
        } 
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export {ApiError}
 