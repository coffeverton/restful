module.exports = (app)=>{

  app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.statusCode = 200;
    res.end('<h1>Ola</h1>');
  });

};
