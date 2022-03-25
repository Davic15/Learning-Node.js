const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            return cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title) {
        //* a property in this class
        this.title = title;
    }

    save() {
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            });
        });
    }

    static fetchAll(cb) {
        getProductFromFile(cb)
    }
}