const { decode } = require("punycode");


const authMw = (req,res,next)=>{
    const token = req.headers.authorization.split(" ");
    if (token){
// it should be decoded

var decoded = jwt.verify(token, 'shhhhh');
//   what to decode ?
//   userid and role
req.user.id = decode.userid 
req.role = decode.role
 next();

    }else{
        res.send("user not found")
    }
}

module.exports =authMw