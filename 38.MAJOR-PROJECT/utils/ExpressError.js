class ExpressError extends Error {
    constructor() {
        super();
        this.statusCode = statusCode;
        this.message = this.message;
    }
}

module.exports = ExpressError;