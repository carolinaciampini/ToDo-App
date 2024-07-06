import app from './app.js'
import { connectDB } from './db.js';

connectDB();
app.listen(3002);
console.log('server linstening on port', 3002)
