const { json } = require('express');
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

/* ORDERS COUNT */
router.get('/count', function(req, res, next) {
  client.query(`SELECT COUNT(*) from orders;`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* ORDERS COUNT BY STATUS PARAM*/
router.get('/count/:status', function(req, res, next) {
  client.query(`SELECT COUNT(*) from orders where status='${req.params.status}';`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});



/* GET orders listing. */
router.get('/', function(req, res, next) {
  client.query(`select * from orders`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET order products listing. */
router.get('/:id/products', function(req, res, next) {
  client.query(`select products from orders where id=${req.params.id}`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET orders prducts */
router.get('/names', function(req, res, next) {
  client.query(`select products from orders`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET orders IDs */
router.get('/ids', function(req, res, next) {
  client.query(`select id from orders`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});


/* GET order listing by id. */
router.get('/:id', function(req, res, next) {
  client.query(`select * from orders where id=${req.params.id}`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;
  
});




/* POST order listing by postman. */
router.post('/', (req, res)=> {
  const insert = req.body;
  let insertQuery = `INSERT INTO public.orders(
                       client, products, ordertime, couponused, status)
                       VALUES (${insert.client}, '${JSON.stringify(insert.products)}', '${insert.ordertime}', ${insert.couponused}, '${insert.status}');`;
                      console.log(insertQuery)

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
 })
  client.end;
})




/* PUT client listing (update) */
router.put('/:id', (req, res)=> {
  const insert = req.body;
  let insertQuery = `UPDATE public.orders
                        SET products='${JSON.stringify(insert.products)}', couponused=${insert.couponused}, status='${insert.status}'
	                    WHERE id=${req.params.id};`;

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Modification was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})



/* DELETE orders listing (delete) */
router.delete('/:id', (req, res)=> {
  let insertQuery = `delete from orders where id=${req.params.id}`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Deletion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})


module.exports = router;
