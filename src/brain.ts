import *  as brain from "brain.js";

// Create and configure the neural network
const net = new brain.NeuralNetwork();
net.train([
  { input: "You are stupid", output: { insult: 1 } },
  { input: "I like your shirt", output: { insult: 0 } },
  // Add more labeled examples to your training data
],{
  iterations:500,
});

// Test the neural network with some input data
const input = "You are stupid";
const output = net.run(input);

// Output the prediction
if (output.insult > 0.5) {
  console.log("Input is an insult",output.insult);
} else {
  console.log("Input is not an insult");
}