const db = require('../utils/database');

const Brand = class Brand {
  constructor(id, name, remote_url, local_url, link_url) {
    this.id = id;
    this.name = title;
    this.remote_url = remote_url;
    this.local_url = local_url;
    this.link_url = link_url;
  }

  // READ
  static fetchHomepage() {
    return db.execute('select * from brand_99');
  }
};

// test
const testFetchHomepage = async (req, res) => {
  try {
    await Brand.fetchHomepage().then(([rows]) => {
      console.log('testFetchAll', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

// testFetchHomepage();

module.exports = Brand ;
