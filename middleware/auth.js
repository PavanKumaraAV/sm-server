import jwt from "jsonwebtoken"

export const verifyToken = async ( req, res ) => {
    try {
        let token = req.header("Authorization");

        if ( !token ) {
            return res.status(403).send("Access denied");
        }
        
        if (token.startsWith("Bearer ")) {
            token = token.splice( 7, token.length).trimLeft();
        }

        const verified = jwt.verify( token, process.env.SECRET_KEY)
        req.user = verified;
        next();
        
    }
    catch ( err ) {
        res.status(400).json({ error: err.message })
    }
}