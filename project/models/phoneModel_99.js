const db = require('../utils/database');

const Clothing = class Clothing {
  constructor(id, name, cat_id, price, remote_url, local_url) {
    this.id = id;
    this.name = title;
    this.cat_id = cat_id;
    this.price = date;
    this.remote_url = article;
    this.local_url = article;
  }

  // CREATE
  static create(req, res) {
    return db.execute(
      'INSERT INTO clothing_99 (id, name, cat_id, price, remote_url, local_url) VALUES (?, ?, ?, ?, ?, ?)',
      [
        req.body.id,
        req.body.name,
        req.body.cat_id,
        req.body.price,
        req.body.remote_url,
        req.body.local_url,
      ]
    );
  }

  // READ
  static fetchHomepage() {
    return db.execute('select * from clothing_99 where cat_id = 0');
  }

  static fetchProductsByCategory(cid) {
    return db.execute('select * from clothing_99 where cat_id = ?', [cid]);
  }

  // UPDATE
  static updateById(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const cat_id = req.body.cat_id;
    const price = req.body.price;
    const remote_url = req.body.remote_url;
    const local_url = req.body.local_url;
    return db.execute(
      'UPDATE clothing_99 SET name = ?, cat_id = ?, price = ?, remote_url = ?, local_url = ? WHERE id = ?',
      [name, cat_id, price, remote_url, local_url, id]
    );
  }

  // DELETE
  static deleteById(id) {
    return db.execute('DELETE FROM clothing_99 WHERE id = ?', [id]);
  }
};

// test
const testFetchHomepage = async (req, res) => {
  try {
    await Clothing.fetchHomepage().then(([rows]) => {
      console.log('testFetchAll', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

const testFetchProductsByCategory = async (req, res) => {
  try {
    await Clothing.fetchProductsByCategory(5).then(([rows]) => {
      console.log('testFetchProductsByCategory', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

// testFetchHomepage();

// testFetchProductsByCategory();

module.exports = Clothing;
