import db from '../database/sql.js';

export const SaveQuery = (req,res)=>{
    console.log(req.body);
    const user_name = req.body.user_name
    const message  = req.body.message
    const contact_number = req.body.contact_number
    const query = "INSERT INTO user_query (`user_name`,`message`,`contact_number`) VALUES (?,?,?);"
    db.query(query,[user_name,message,contact_number],(err,result)=>{
        if(err){
        res.json(err)
        }else{
            console.log(result);
            res.json(result)
        }
    })    
}