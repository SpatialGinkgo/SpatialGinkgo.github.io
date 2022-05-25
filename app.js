const express = require('express');

const viewRoutes = require('./routes/views');
const apiRoutes = require('./routes/api');

const app = express();


app.use(express.static('public'));
app.use(express.json());
app.set('view engine','ejs');

app.use(viewRoutes);
app.use('/api',apiRoutes);

//Debe ir de ultima
/*app.use((req,res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404');
});*/

app.listen(60003, () => {
  console.log('Server is running on port 60003');
});