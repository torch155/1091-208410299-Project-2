const db = require('../utils/database');

const Cart = class Cart {
  constructor(id, uid, pid, amount) {
    this.id = id;
    this.uid = uid;
    this.pid = pid;
    this.amount = amount;
  }

  // CREATE
  static create(req, res) {
    return db.execute(
      'INSERT INTO cart_99 (id, uid, pid, amount) VALUES (?, ?, ?, ?)',
      [
        req.body.id,
        req.body.uid,
        req.body.pid,
        req.body.amount,
      ]
    );
  }

  // READ
  static fetchCartInfoByUserId(uid) {
    return db.execute(
      'SELECT U.name as username, P.name, C.amount, P.price, P.local_url FROM cart_99 as C, user_99 as U, phone_99 as P where C.uid = ? and U.id = C.uid and P.id = C.pid;',
      [uid]
    );
  }

  // UPDATE
  static update(req, res) {
    const id = req.body.id;
    const uid = req.body.uid;
    const pid = req.body.pid;
    const amount = req.body.amount;
    return db.execute(
      'UPDATE cart_99 SET uid = ?, pid = ?, amount = ? WHERE id = ?',
      [uid, pid, amount, id]
    );
  }

  // DELETE
  static deleteById(id) {
    return db.execute('DELETE FROM cart_99 WHERE id = ?', [id]);
  }
}

const testFetchCartInfoByUserId = async (req, res) => {
  try {
    await Cart.fetchCartInfoByUserId(1).then(([rows]) => {
      console.log('testFetchCartInfoByUserId', JSON.stringify(rows));
      //   res.json(rows);
    });
  } catch (err) {
    console.log(err);
  }
};

// testFetchCartInfoByUserId();

module.exports = Cart;
