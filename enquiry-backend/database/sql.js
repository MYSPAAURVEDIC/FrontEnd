import mysql from 'mysql2'

const db = mysql

const pool = db.createPool({
    host:process.env.HOST,
    user:'root',
    database:'sonam',
    // password:'sonam',
    port:process.env.DBPORT,
    waitForConnections: true,
})
console.log(pool);
pool.getConnection((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Database connected')
    }
})
 
export default pool