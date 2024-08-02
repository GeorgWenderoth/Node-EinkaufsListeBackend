const pool = require('../config/dbConfig');

exports.getAllGrocerys = async () => {
    

    try {
        const res = await pool.query('SELECT * FROM grocerys')
        return res.rows;
    } catch (err) {
        throw err
    };
};

exports.createGrocery = async(groceryData) => {
    const {itId, einkaufsPunkt, amount, notizen, done} = groceryData;
    console.log(groceryData);
    console.log(itId, einkaufsPunkt, amount);
    try {
        const res = await pool.query(
          'INSERT INTO grocerys (id, name, quantity, notes, done) VALUES ($1, $2, $3, $4, $5) RETURNING *',
          [itId, einkaufsPunkt, amount, notizen, done]
        );
        return res.rows[0];
      } catch (err) {
        throw err;
      }
}; 