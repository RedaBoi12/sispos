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


/* coupons COUNT */
router.get('/count', function(req, res, next) {
  client.query(`SELECT COUNT(*) from coupons;`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});


/* GET coupons listing. */
router.get('/', function(req, res, next) {
  client.query(`select * from coupons`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET coupons names */
router.get('/names', function(req, res, next) {
  client.query(`select name from coupons`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET coupons IDs */
router.get('/ids', function(req, res, next) {
  client.query(`select id from coupons`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});


/* GET coupon listing by id. */
router.get('/:id', function(req, res, next) {
  client.query(`select * from coupons where id=${req.params.id}`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;
  
});




/* POST coupon listing by postman. */
router.post('/', (req, res)=> {
  const coupon = req.body;
  let insertQuery = `INSERT INTO public.coupons
                    (name, description, expiration) VALUES 
                    ('${coupon.name}', '${coupon.description}', '${coupon.expiration}');`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})




/* PUT coupon listing (update) */
router.put('/:id', (req, res)=> {
  const coupon = req.body;
  let insertQuery = `UPDATE public.coupons SET
                    name='${coupon.name}', description='${coupon.description}', expiration='${coupon.expiration}' WHERE id=${req.params.id};`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Modification was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})



/* DELETE coupon listing (delete) */
router.delete('/:id', (req, res)=> {
  let insertQuery = `delete from coupons where id=${req.params.id}`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Deletion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})


module.exports = router;
