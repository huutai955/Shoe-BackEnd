import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'huutaishoe',
    password: '123456'
});


const getAllShoe = () => {
    connection.query(
        'SELECT * FROM `shoe`',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}


export const shoeDatabase = {
    getAllShoe
}