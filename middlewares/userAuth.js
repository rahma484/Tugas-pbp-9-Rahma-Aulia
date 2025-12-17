validateAPI = '12345'

const auth = (req, res, next) =>{
    const key = req.headers['x-api-key']

    if (key==undefined){
        res.status(500).json({
            msg : "not autorize"
        })
        return
    }
    else if(key != validateAPI){
        res.status(500).json({
            msg: "not valid API key"
        })
        return
    }
    next()
}
module.exports = auth