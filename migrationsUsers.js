const fs = require ('fs');
const path = require ('path');
const pool = require ('./db');

const filePath = path.join(__dirname, 'data', 'users.json');
const rawData = fs.readFileSync(filePath);
const users = JSON.parse(rawData);


async function insertUsers(){
    let inserted = 0 ;
    for(const user of users ){
        const {first_name, last_name, email, gender} = user;

        if (!first_name || !last_name || !email || !gender){
            console.warn(`Datos incompletos en el registro: ${JSON.stringify(user)}`);
            continue;

        }
        try{
            await pool.query(
                'INSERT INTO users (first_name, last_name, email, gender) VALUES ($1, $2, $3, $4)',
                [first_name, last_name, email, gender]
            );
            inserted++;
        }catch (error){
            console.error(`Error al insertar el usuario ${JSON.stringify(user)}: ${error.message}`);
        }
    }
    console.log(`Total de usuarios insertados: ${inserted}`);
    pool.end();
}
insertUsers(users);