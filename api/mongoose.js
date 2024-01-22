const mongoose = require("mongoose");

// Replace with your MongoDB connection string
const mongoURI = "mongodb://localhost:27017/Test";

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for your collection
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a Mongoose model based on the schema
const User = mongoose.model("User", userSchema);

// Function to perform the MongoDB query
async function performQuery() {
  try {
    // Perform the query (replace the query condition as needed)
    const queryCondition = { name: "John" };
    const queryResult = await User.find(queryCondition);

    // Log or process the query result
    console.log("Query result:", queryResult);
  } catch (error) {
    console.error(error);
  } finally {
    // Close the MongoDB connection
    mongoose.disconnect();
  }
}

// Call the function to perform the query
performQuery();
