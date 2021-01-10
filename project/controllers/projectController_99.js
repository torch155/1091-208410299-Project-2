const Brand = require('../models/brandModel_99');
const Phone = require('../models/phoneModel_99');
const Cart = require('../models/cartModel_99');

// CREATE
exports.createCart = async (req, res) => {
  console.log('createCart', req.body);
  try {
    await Cart.create(req, res).then(([rows]) => {
      res.redirect('/project_99');
    });
    // res.json(req.body);
  } catch (err) {
    console.log(err);
  }
};

// READ
exports.getHomepage = async (req, res) => {
  let data = {};
  try {
    await Brand.fetchHomepage().then(([rows]) => {
      // console.log('getDashboard', JSON.stringify(rows));
      data.brand = rows;
      // res.json(rows);
    });

    res.render('project_99', { title: 'Homepage', data: data.brand });
  } catch (err) {
    console.log(err);
  }
};

exports.getCartInfo = async (req, res) => {
  let data = {};
  data.uid = 1;
  try {
    await Brand.fetchHomepage().then(([rows]) => {
      // console.log('getDashboard', JSON.stringify(rows));
      data.brand = rows;
      // res.json(data);
    });

    await Cart.fetchCartInfoByUserId(data.uid).then(([rows]) => {
      // console.log('fetchCartInfoByUserId', JSON.stringify(rows[0]));
      data.cartInfo = rows;
      data.total = 0;
      data.username = rows[0].username;
      data.cartInfo.forEach((p) => {
        data.total += p.amount * p.price;
      });
      res.json(data);
    });

    // res.render('homepageCart_99', {
    //   title: 'Homepage with Cart Info',
    //   username: data.username,
    //   brandData: data.brand,
    //   cartData: data.cartInfo,
    //   total: data.total,
    // });
  } catch (err) {
    console.log(err);
  }
};

// // UPDATE
exports.updateCart = async (req, res) => {
  console.log('updateCart', req.body);
  try {
    await Cart.update(req, res).then(([rows]) => {
      res.redirect('/project_99');
    });
  } catch (err) {
    console.log(err);
  }
};

// DELETE
exports.deleteCart = async (req, res) => {
  console.log('deleteCart', req.params.id);
  try {
    await Cart.deleteById(req.params.id).then(([rows]) => {
      res.redirect('/project_99');
    });
  } catch (err) {
    console.log(err);
  }
};
