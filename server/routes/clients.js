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
  client.query(`SELECT COUNT(*) from clients;`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});



/* GET clients listing. */
router.get('/', function(req, res, next) {
  client.query(`select * from clients`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET client names */
router.get('/names', function(req, res, next) {
  client.query(`select firstname , lastname from clients`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});

/* GET clients IDs */
router.get('/ids', function(req, res, next) {
  client.query(`select id from clients`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;

});


/* GET client listing by id. */
router.get('/:id', function(req, res, next) {
  client.query(`select * from clients where id=${req.params.id}`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    else console.log(err.message);
  });
  client.end;
  
});




/* POST client listing by postman. */
router.post('/', (req, res)=> {
  const insert = req.body;
  let insertQuery = `INSERT INTO public.clients(
                      firstname, lastname, email, avatar, locationstreet, locationcity, locationcountry, ccnumber, ccv, expiry, type, plan, joinedin, "isActive", mobile)
                      VALUES ('${insert.firstname}', '${insert.lastname}', '${insert.email}', '${insert.avatar}', '${insert.locationstreet}', '${insert.locationcity}', '${insert.locationcountry}', '${insert.ccnumber}', ${insert.ccv}, '${insert.expiry}', '${insert.type}', '${insert.plan}', '${insert.joinedin}', '${insert.isActive}', '${insert.mobile}');`;

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
  let insertQuery = `UPDATE public.clients
	                    SET firstname='${insert.firstname}', lastname='${insert.lastname}', email='${insert.email}', avatar='${insert.avatar}', locationstreet='${insert.locationstreet}', locationcity='${insert.locationcity}', locationcountry='${insert.locationcountry}', ccnumber='${insert.ccnumber}', ccv=${insert.ccv}, expiry='${insert.expiry}', type='${insert.type}', plan='${insert.plan}', joinedin='${insert.joinedin}', "isActive"='${insert.isActive}', mobile='${insert.mobile}'
	                    WHERE id=${req.params.id};`;

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Modification was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})



/* DELETE client listing (delete) */
router.delete('/:id', (req, res)=> {
  let insertQuery = `delete from clients where id=${req.params.id}`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Deletion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})


module.exports = router;
