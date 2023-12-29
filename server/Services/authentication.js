const JWT = require("jsonwebtoken");
const secret= "R@jeev_G@d_@f_Web"


function createTokenForUser(user){
    const payload = {
        _id:user._id,
        fullname : user.fullname,
        username:user.username,
        profileImage : user.profileImage,
        role:user.role,
    }

    const token =  JWT.sign(payload,secret);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token,secret);
    return payload;
}

module.exports = {
    validateToken,
    createTokenForUser,
}