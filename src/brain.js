// Import brain.js library
const brain = require('brain.js');

// Create the LSTM neural network
const net = new brain.recurrent.LSTM();

// Define the training data
const trainingData = [
  { input: "You are stupid", output: "insult" },
  { input: "I like your shirt", output: "non-insult" },
  // Add more labeled examples to your training data
];

// Train the LSTM neural network
net.train(trainingData, { iterations: 1000, errorThresh: 0.01 });

// Test the LSTM neural network with some input data
const input = "You are so annoying";
const output = net.run(input);

// Output the prediction
if (output === "insult") {
  console.log("Input is an insult");
} else {
  console.log("Input is not an insult");
}
