var express = require('express');
var router = express.Router();
const {Client} = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'admin123',
  database: 'sispos'
})

client.connect();


/* PRODUCT COUNT */
router.get('/count', function(req, res, next) {
  client.query(`SELECT COUNT(*) from products;`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});


/* GET products listing. */
router.get('/', function(req, res, next) {
  client.query(`select * from products`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET products names */
router.get('/names', function(req, res, next) {
  client.query(`select name from products`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET product stock */
router.get('/stock/:id', function(req, res, next) {
    client.query(`select stock from products where id=${req.params.id}`, (err, result)=>{
      if(!err){
        res.send(result.rows);
      }
      else console.log(err.message);
    });
    client.end;
  
  });
  

  /* PUT product stock */
router.put('/stock/:id', function(req, res, next) {
    const product = req.body;
    client.query(`update products set stock=${product.stock} where id=${req.params.id}`, (err, result)=>{
      if(!err){
        res.send(result.rows);
      }
      else console.log(err.message);
    });
    client.end;
  
  });
  



/* GET product listing by id. */
router.get('/:id', function(req, res, next) {
  client.query(`select * from products where id=${req.params.id}`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;
  
});




/* POST product listing by postman. */
router.post('/', (req, res)=> {
  const product = req.body;
  let insertQuery = `INSERT INTO public.products(
	                    name, description, price, "categoryID", stock, "isActivated")
	                    VALUES ('${product.name}', '${product.description}', ${product.price}, ${product.categoryID}, ${product.stock}, ${product.isActivated});;`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})




/* PUT product listing (update) */
router.put('/:id', (req, res)=> {
  const product = req.body;
  let insertQuery = `UPDATE public.products
                        SET name='${product.name}', description='${product.description}', price=${product.price}, "categoryID"=${product.categoryID}, "isActivated"=${product.isActivated}
                        WHERE id=${req.params.id};`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Modification was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})



/* DELETE product listing (delete) */
router.delete('/:id', (req, res)=> {
  let insertQuery = `delete from products where id=${req.params.id}`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Deletion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})


module.exports = router;
