# Insult checker
Checks input as insult or not using brain.js


Certainly! Here's an example that uses the natural library in Node.js, which provides a range of natural language processing tools including a Naive Bayes classifier for text classification:
```js
// Import natural library
const natural = require('natural');

// Create and configure the NaiveBayes classifier
const classifier = new natural.BayesClassifier();

// Define the training data
const trainingData = [
  { text: "You are stupid", label: "insult" },
  { text: "I like your shirt", label: "non-insult" },
  // Add more labeled examples to your training data
];

// Train the NaiveBayes classifier
trainingData.forEach(data => classifier.addDocument(data.text, data.label));
classifier.train();

// Test the NaiveBayes classifier with some input data
const input = "You are so annoying";
const output = classifier.classify(input);

// Output the prediction
if (output === "insult") {
  console.log("Input is an insult");
} else {
  console.log("Input is not an insult");
}
```
In this example, we create an instance of the natural.BayesClassifier class, which represents a Naive Bayes classifier. The training data is defined with labeled examples of input text samples, where the text property contains the input text and the label property contains the class label (insult or non-insult). The classifier.addDocument() method is used to add each training example to the classifier, and the classifier.train() method is called to train the classifier.

You can then use the classifier.classify() method to make predictions on new input text samples. The predicted class label (insult or non-insult) is returned, and you can use it to output the prediction accordingly.

Note that the Naive Bayes classifier is a simple probabilistic model that assumes independence between features, and may not always capture complex patterns in the input text data. It's important to experiment with different classifiers and fine-tune the model to achieve the best possible results for your specific use case. Additionally, as with any machine learning model, proper text preprocessing techniques may be necessary to achieve better classification accuracy, depending on the specific characteristics of your dataset.