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


/* CLIENT COUNT */
router.get('/count', function(req, res, next) {
  client.query(`SELECT COUNT(*) from categories;`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});


/* GET categories listing. */
router.get('/', function(req, res, next) {
  client.query(`select * from categories`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET categories names */
router.get('/names', function(req, res, next) {
  client.query(`select name from categories`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET categories IDs */
router.get('/ids', function(req, res, next) {
  client.query(`select id from categories`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});


/* GET category listing by id. */
router.get('/:id', function(req, res, next) {
  client.query(`select * from categories where id=${req.params.id}`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;
  
});




/* POST category listing by postman. */
router.post('/', (req, res)=> {
  const category = req.body;
  let insertQuery = `INSERT INTO public.categories
                    (name, description, createdat) VALUES 
                    ('${category.name}', '${category.description}', '${category.createdat}');`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})




/* PUT category listing (update) */
router.put('/:id', (req, res)=> {
  const category = req.body;
  let insertQuery = `UPDATE public.categories SET
                    name='${category.name}', description='${category.description}' WHERE id=${req.params.id};`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Modification was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})



/* DELETE category listing (delete) */
router.delete('/:id', (req, res)=> {
  let insertQuery = `delete from categories where id=${req.params.id}`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Deletion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})


module.exports = router;
