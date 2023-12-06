const express = require('express')
const app = express()
const port = 8082
const cors = require('cors') 
const dbConnection = require ("./db/conection")
const contactModel = require("./model/contact.model")
const signupModel = require("./model/signup.model")
const orderModel = require("./model/order_payment.model")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const moment = require("moment");



app.use(cors())

dbConnection()
app.use(express.json())

//post method for contact us
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new ContactUs instance
    const newContact = new contactModel({
      name,
      email,
      message,
    });

    // Save the new contact to the database
    const savedContact = await newContact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
})

app.get('/contact', async (req, res) => {
  try {
    const newContact = await contactModel.find({});
    res.status(200).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Data not available' });
  }
})

app.listen(port, () => {
  console.log(`your server is start on port ${port}`)
})

// post method for Registration (Sign Up)
app.post('/signup', async (req, res) => {
  try {
    const { lname, fname, email, password, repassword, age } = req.body;

    // Generate a salt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log(hashedPassword);

    const newContact = new signupModel({
      lname,
      fname,
      email,
      password: hashedPassword, // Store the hashed password
      repassword,
      age,
    });

    const savedContact = await newContact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  console.log(">>>>",req.body)
  try {
    const { email, password } = req.body;

    // Find the user in the signup collection
    const user = await signupModel.findOne({ email });
    console.log('Found user:', user);

    if (!user) {
      // User not found
      return res.status(400).json({ error: 'User not found', field: 'email', success: false});
    }
    // Compare the entered password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password,(err,result)=>{
      if(err){
        return res.json(err)
      }
      else if(result){
        // Create a JWT token
    const token = jwt.sign(
      { user_id: user._id, email: user.email },
      'your-secret-key',
      { expiresIn: '2h' }
    );
    res.json({ message: 'User logged in',status:200,success:true, data: user, token });
      }
      else{
        return res.json({message:"Password Is Incorrect",success:false,status:400});
      }

    });
    console.log('Stored Hashed Password:', user.password);
    console.log('Entered Password:', password);
    console.log('After Password Comparison', passwordMatch);
    
  } catch (error) {
    console.error('Error validating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/signup', async (req, res) => {
  try {
    const newContact = await signupModel.find({}, '-password');
    res.status(200).json(newContact);
  } catch (error) {
    res.status(500).json({ error: 'Data not available' });
  }
});


// API to fetch user profile data
app.get('/profile/:id', async (req, res) => {
  try {
      const userId = req.params.id;
      const userProfile = await signupModel.findById(userId);
      res.json(userProfile);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to update user profile data
app.put('/profile/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const updatedData = req.body;
     // Assuming you're sending the updated data in the request body
    // Update the user profile data in the database
    const updatedUserProfile = await signupModel.findByIdAndUpdate(userId, updatedData, { new: true });

    res.json(updatedUserProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//post api for confirming consultation
app.post('/order', async (req, res) => {
  try {
    const {doctorname, consultationdate, consultationtime, reason } = req.body;

    const newOrder = new orderModel({
      doctorname, 
      consultationdate, 
      consultationtime, 
      reason,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/order/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const userOrders = await orderModel.find({ userId: userId }); 
    res.json(userOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

