---
description:   Applications Kit ML101 with Prof. Vijay Course
title:   Applications Kit ML101 with Prof. Vijay Course
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-TinyML-Kit-Course
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/HarvardKit/hardvarddetection2.png" /></div>

## Preface

## Overview

We live in a world dominated by data, and while machine learning has given rise to some daunting implications, there is plenty that can be done with it to make the world better—from simple tasks like staying safe on social media to more complex tasks like detecting patterns in research labs. Regardless of your industry or use case, an understanding of embedded systems and machine learning will prove invaluable moving forward because it's what all these tools come down to; without knowing how things work under the hood, you won't be able to get anywhere with them. And this goes for both people looking for jobs today as well as future generations who understand how these technologies work before they're even born.

Industries like manufacturing and automotive are already benefiting from machine learning in the form of predictive maintenance. Algorithms can be trained to identify typical failure patterns for certain types of machines and components, after which they can send alerts to operators or even take corrective action autonomously. In this way, industrial internet-of-things (IoT) deployments can be used to improve plant uptime and reduce operating costs. The same basic principle can be applied in other settings as well; for example, traffic management systems could use machine learning algorithms to predict congestion and adjust signal timing accordingly.

In the context of embedded systems, tiny machine learning is an important term to understand. It refers to the use of small, lightweight neural networks that can be deployed on resource-constrained devices like microcontrollers. Tiny machine learning algorithms can be used for tasks such as object recognition, classification, and detection. They are well-suited for embedded systems because they require relatively little training data and can achieve good accuracy with a small number of neurons.
Applications for tiny machine learning abound, and some interesting examples include the following:

- Autonomous vehicles: Neural networks can be used to detect obstacles in the environment and make decisions about how to avoid them.
- Home security: Neural networks can be used to identify people and objects in videos captured by home security cameras.
- Healthcare: Algorithms can be used to detect anomalies in medical images or to predict the risk of diseases.
- Industrial IoT: Neural networks can be used to classify different types of data from industrial sensors.
- Retail: Neural networks can be used to identify items in images of merchandise and to recommend products to customers.

Tiny machine learning is a great way to get started with machine learning if you're new to the field. It's also a good way to learn more about embedded systems and how they can be used in conjunction with machine learning algorithms. If you're interested in getting started, there are a few things you need to know. First, you'll need access to a machine that can run Tiny neural network code, such as the Wio Terminal. Second, you'll need training data for the algorithm you'll be using. We will be looking at different example projects to understand training data. Third, you'll need to pick a machine learning algorithm that matches your application. We will be using neural networks for this.

Don’t be alarmed if any of these words sound foreign to you. This handbook is designed for beginners to get started with TinyML. It doesn’t matter how old or young you are, if you want to learn something, you will. You will learn how to train and deploy deep neural network models on ARM Cortex-M core microcontroller devices from Seeed studio, using the latest in cutting edge ML software with tools such as TensorFlow Lite for Microcontrollers and Edge Impulse.

### Who’s This Book For

This book is designed specifically for educators to be able to adopt the Wio Terminal into the classroom or workshops to show learners the power of TinyML. It provides the basic underpinnings that one would have to cover to teach the very basics of ML while keeping the concepts grounded in hands-on exercises.

### Course Structure

This book is specifically designed to serve as a hands-on booklet for teachers and learners for getting started with TinyML. Ideally, one would be able to learn the concepts from this book and be able to teach the fundamental concepts of applied machine learning. The keyword is applied as this course focuses on the application of machine learning concepts, rather than on the technical and theoretical aspects of machine learning.

- Minimum age of students: 12+
- Planned number of classes: 5 lectures, 5 labs and 2 projects
- Duration of hands-on projects: 45 mins

### Course Requirements

Basic knowledge of Arduino IDE and C++

### Course Materials

The materials include this handbook and the “Getting Started with the TinyML Kit” from SEEED studio. Everything you need to get started is available in this course in a box.

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Grove - Ultrasonic Sensor](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html)
- [Grove - Temp&Humi&Barometer Sensor (BME280)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)
- [Grove cables](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-5-PCs-Pack-p-749.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/HarvardCourse1a.png" alt="pir" width="500" height="auto"/></p>

### What You’ll Learn

Users of this book will learn how to train and deploy deep neural network models on Cortex-M core microcontroller devices from Seeed studio. Course content features XXX detailed step-by-step projects that will allow students to grasp basic ideas about modern Machine Learning and how it can be used in low-power and footprint microcontrollers to create intelligent and connected systems.

After completing the course, the students will be able to design and implement their own Machine Learning enabled projects on Cortex-M core microcontrollers, starting from defining a problem to gathering data and training the neural network model and finally deploying it to the device to display inference results or control other hardware appliances based on inference data. Course content is based on using the Edge Impulse platform, which simplifies data collection/ model training/ conversion pipeline.

## Introduction

### Artificial Intelligence for Beginners

#### What is artificial intelligence?

Artificial Intelligence, or AI, is the intelligence demonstrated by machines. It’s often confused with creativity, intelligence and consciousness. But it’s not any of those things. AI can be found in many modern homes in the form of smart speakers like Amazon Echo or Google Home which are programmed to answer simple questions, give you traffic updates and even control other devices in your home. And while most people believe they know what artificial intelligence is all about-it turns out that most people are wrong! The truth is that AI has been around for a long time (since 1951) but only recently (early 2010) have we seen its potential to change everything from how we drive our cars to how we order takeout food. So let’s take a closer look at AI and see what all the fuss is about.

#### How does AI work?

AI works by using a process called “machine learning,” which we will learn a lot about more soon. Briefly, this is a way for computers to learn from data without being explicitly programmed. For example, if you wanted to teach a computer how to recognize pictures of cats, you would first need to feed it lots of pictures of cats. After that, the computer would be able to analyze new pictures of cats and tell whether they are cats or not. This is done with something called a neural network which is a type of artificial intelligence that can learn on its own by analyzing data. We will learn more about neural networks and how to “train” them later in the course.

#### Why is AI important?  

There are many reasons why AI is but one of the most important is that it has the potential to solve some of the world’s biggest problems. For example, AI can be used to help doctors diagnose diseases, or to help farmers predict crop yields. AI can also be used to create new drugs and improve email spam filters. In fact, there is no area of life that AI cannot touch.

Artificial intelligence offers several benefits over traditional methods such as statistics and linear regression. Some of these benefits include:

- Machine learning models are able to learn on their own, without the need for manual intervention.
- They can handle large amounts of data more efficiently than traditional methods.
- They are able to identify patterns that are too complex for humans to discern.

#### Is AI safe?

One of the main concerns people have about AI is that it might be dangerous. After all, if computers can learn on their own, they could potentially learn how to do bad things. However, experts agree that the risk of computers becoming evil is very low. In fact, the real danger with AI comes from humans themselves. For example, if given too much power to AI systems, humans could find themselves in danger.

#### The AI Revolution

One of the most important things to remember about AI is that it’s not just another cool technology. It’s actually a revolution that has the power to change everything—including our economy, social systems and even how we live. That sounds pretty scary but experts agree that if we work together to harness this incredible technology, artificial intelligence could help solve some of the world’s biggest problems.

Moreover, experts predict that people who embrace AI will be more successful than those who oppose it. The key here is cooperation so join me in learning as much as you can about AI because there are exciting times ahead! Now go out and educate yourself about what artificial intelligence is and how it works so you can be ready for the future of AI!

#### The Conceptual Basis for AI

Artificial Intelligence is not just another technology that has become mainstream in today's society. AI has the power to revolutionize every aspect of the world, including our economy, social system, and even how we live. Artificial intelligence has come a long way over the years revealing that it is more than just a computer science project.

The thoughts underlying artificial intelligence originated in British philosopher Alan Turing's work on the intellectual capabilities of machines. He spent his life studying math and computer science at Cambridge University which he later served as an academic fellow. His paper "Computing Machinery and Intelligence" was published by Mind in 1950, and with many people in attendance. In this paper Turing proposed what came to be known as the 'Turing test' which has become the de facto benchmark for determining whether a given artificial intelligence is achieved.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/HarvardCourse2a.png" alt="pir" width="200" height="auto"/></p>

To pass the Turing test, which involves having artificial intelligence echo personality traits of humans in order to trick them into thinking they are talking to another human instead of an intelligent machine, means that the machines passes itself off as human more than 30% of the time. While this is not perfect, it shows that AI can be be very close to human. "Computing machinery and intelligence" has led the way for future works of literature which deal with artificial intelligence to appear like Daniel H. Wilson's book Robopocalyse where robots take over the world by becoming self aware. Although there are many other pieces of literature and movies which have delved into the topic of artificial intelligence, this is one of the first papers to propose the test that is still used today.

While Turing's paper allowed for further investigations into artificial intelligence, there were other pieces which helped it along. In 1956 John McCarthy organized a summer workshop at Dartmouth College devoted to the subject which came to be known as the Dartmouth Summer Research Project on Artificial Intelligence. This was a new field which explored how computers could be made to 'think' and solve problems just like humans. The question of if a computer can think has been around for many years, however this brought it to new heights by bringing together some of the best minds in mathematics and engineering.

Since then, artificial intelligence has been a growing area which is used in many different ways. One of the main uses for AI within modern society is in controlling home appliances such as smart speakers. These devices have been programmed to answer simple questions, provide alerts and even control other Internet of Things (IoT) devices in your home. The main concern about a smart speaker, for example, is whether it is always listening to you. While there have been cases of some devices being hacked and recording conversations without permission, most companies have taken the proper precautions to ensure that these problems do not occur on their products. This shows that AI can be used in many different ways which are beneficial to society.

Another concern that people have is how artificial intelligence will take over jobs. With the development of driverless cars, for example, many people are worried about the future of transportation jobs. However, it is important to realize that while these technologies may replace certain jobs in the short term, they will also create new opportunities for other types of work. For example, the development of driverless cars will require people who are skilled in programming and repairing these vehicles. Thus, it is important to not be afraid of new technologies but rather to embrace them and learn how to use them to our advantage.

To sum up, artificial intelligence has come a long way since its conception and can be used in many different ways. While there are some concerns around it which need to be addressed, many people are realizing that AI can actually improve their lives in many different ways. As long as the proper precautions are taken by companies to ensure our privacy, artificial intelligence can continue to grow with us and help society improve for many years to come.

### Machine Learning and Deep Learning

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/8.png" alt="pir" width="800" height="auto"/></p>

#### Machine Learning

Machine learning is a branch of artificial intelligence (AI) focused on building applications that learn from data and improve their accuracy over time without being programmed to do so. The foundation of machine learning is that rather than have to be taught to do everything step by step, machines, if they can be programmed to think like us, can learn to work by observing, classifying and learning from their mistakes, just like we do. Machine learning is a type of artificial intelligence that is based on the idea that computer programs can be made to extract from data without being explicitly programmed. It looks at the patterns in large sets of data and extracts from those patterns rules or algorithms that can then be used to make predictions.

#### Deep Learning

Deep Learning is a subset of machine learning that utilizes Deep (hence the name) artificial neural networks for learning from large amounts of data. It is modeled after how the human brain works internally. A software program contains “neurons” (much like our brain) with connections between them. These connections are modified when exposed to new data, so they know how to process input information. Deep Learning is different from Machine Learning because it is not restricted to “supervised learning.” It is like having a teacher standing next to you telling you exactly what you did right or wrong for each math step. He or she is able to “supervise” you only because he/she is an expert in the subject matter. Therefore, by design it assumes supervision. However, deep learning can also use unsupervised data which is where "deep" refers to using algorithms that create complex structures out of unlabeled data, like images or text. As we progress through the course we will learn a lot more abou the details of these different learning methods.

#### Applications of Deep Learning

Deep learning is widely used in many industries today. It is used in finance for things such as stock market prediction, risk assessment, and fraud detection. It is also used in marketing for things such as customer segmentation, personalization, and content optimization. In healthcare, machine learning is used for tasks such as diagnosis, treatment planning, and patient monitoring. It has had a transformational impact on our society.

An example of the transformative impact that machine learning has had on society is how it has saved money and lives. For example, as mentioned earlier, deep learning algorithms can make predictions about stocks, like predicting whether they will go up or down. These predictions guide investment strategies and improve financial decisions. Similarly, deep learning can also make medical predictions to improve patient diagnosis and save lives. One study found that deep neural networks could predict patients with sepsis with over 83% accuracy as opposed to traditional diagnostic tools which had a 55% accuracy rate. The possibilities are endless and the benefits are clear. Machine learning is not only able to make predictions with greater accuracy than humans but it is also able to do so at a much faster pace. So what are you waiting for?

Let’s take another example. Manufacturing has become increasingly reliant on computer technology, providing real-time data about all aspects of production in ways that were previously unimaginable. Nowhere is this more apparent than in the automobile industry, where cars are increasingly being viewed less as physical products and more as computers on wheels.

Deep learning has been applied to manufacturing to great effect. By using software to constantly learn from the vast amounts of data collected throughout the manufacturing process, companies are able to increase productivity while reducing wastage through improved efficiency. Companies are benefiting financially from these effects while customers are receiving better quality products at lower prices. Machine learning enables manufacturers to constantly improve their processes to create higher quality goods faster and more efficiently than ever before.

Deep learning has improved products that we use daily like Netflix recommendations or Google Translate's text translations, but it also allows companies such as Amazon and Uber to save money on customer service costs by quickly identifying unhappy customers. What may surprise people even more is that machine learning is used by many museums to keep track of their paintings and prevent any art thefts from happening.

Deep learning is changing the way we live and work. Companies across a wide range of industries are already using AI to their great advantage, improving productivity while making more accurate predictions than ever before. Whether you want to use deep learning in your business or you simply want to understand how it works, the only thing standing between you and this amazing technology is knowledge. So why not take some time today to learn about one of the most exciting technologies of our time? The use of machine learning is only increasing as the field of artificial intelligence develops. With more data being collected every day, there are endless possibilities for what machine learning can do. The only thing holding us back is our understanding of how it works. So take some time today to learn about this amazing technology and see how you can apply it to your own life and work. You won't regret it!

#### Q&A Session

- What is the difference between AI and machine learning?
- Who is Alan Turing?
- What is the Turing Test?
- Beyond the examples given in this chapter, what are some other big uses for artificial intelligence in businesses or our daily lives today?
- What are some potential dangers or risks that come with artificial intelligence?
- Do you think AI will be self-aware like humans are?

## Machine Learning’s Future is Tiny and Bright

We live in a world dominated by data, and while machine learning has given rise to some daunting implications, there is plenty that can be done with it to make the world better—from simple tasks like staying safe on social media to more complex tasks like detecting patterns in research labs. Regardless of your industry or use case, an understanding of embedded systems and machine learning will prove invaluable moving forward because it's what all these tools come down to; without knowing how things work under the hood, you won't be able to get anywhere with them. And this goes for both people looking for jobs today as well as future generations who understand how these technologies work before they're even born.

Embedded systems are ubiquitous in our lives, and most people don't even realize it. They're in our cars, microwaves, home appliances, and even our clothing. An embedded system is a device that controls another device or group of devices to perform a specific task. Embedded systems are also critical to the functioning of the world around us. They're responsible for things like keeping our cars on the road and our microwaves cooking food. Without embedded systems, our world would be a very different place.

There are many different types of embedded systems. The most common type is the microcontroller. A microcontroller unit (MCU) is a small, embedded computer that can be programmed to control other devices. They're found in everything from cars to home appliances. Take, for example, the ARM Cortex M0+ and the Seeeduino XIAO board, which is as small as a thumb (2017.5mm), consumes just 1.33 mAh of power (which implies it can run for 112 hours on a 150 mA battery, much longer if put in deep sleep), and costs as little as 4.3 USD. Another common type of embedded system is the digital signal processor (DSP). DSPs are used to process digital signals, such as audio and video. They're found in things like smartphones and tablets. You can find additional information in the Appendix section on Embedded Systems.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/Seeeduino-XIAO-pin-out.jpg" alt="pir" width="300" height="auto"/></p>

The future will bring more embedded devices into our lives, such as wearable technology like Smart Watches and Fitbits. embedded systems will also become more complex, with more features and capabilities. As our world becomes increasingly reliant on embedded systems, it's important to understand how they work and the role they play in our lives, especially with the advent of machine learning.

Industries like manufacturing and automotive are already benefiting from embedded machine learning in the form of predictive maintenance. Algorithms can be trained to identify typical failure patterns for certain types of machines and components, after which they can send alerts to operators or even take corrective action autonomously. In this way, industrial internet-of-things (IoT) deployments can be used to improve plant uptime and reduce operating costs. The same basic principle can be applied in other settings as well; for example, traffic management systems could use machine learning algorithms to predict congestion and adjust signal timing accordingly.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/7.png" alt="pir" width="800" height="auto"/></p>

### Cloud Machine Learning

Machine learning is now an established technology that has been leveraged in many industries. Machine learning involves the collection of data, processing it and then extracting algorithmic insights from it to make predictions about future events. Machine learning is a subset of artificial intelligence (AI). Machine learning algorithms typically involve lots of computation and require very large datasets, which limits the number of experiments you can do and makes it hard to validate your findings. Cloud Machine Learning provides a service for machine learning and AI and it takes care of the heavy lifting so businesses don't have to worry about managing complex infrastructure or expensive hardware.

### Edge Machine Learning

The difference between cloud machine learning and edge machine learning is that cloud machine learning typically means that there is a central server that processes all the data and does all the machine learning, while edge machine learning involves processing the data on the edge devices, such as phones, cars or drones. Edge machine learning is important because it allows for local decision-making and avoids sending all the data to a central server for processing, which can be slow and expensive.

### Tiny Machine Learning

The other machine learning approach that is becoming increasingly popular is Tiny Machine Learning (TinyML). Machine learning involves training models with lots of data and computing the model parameters based on the statistical relationships in the data. Machine learning algorithms generally require lots of processing and datasets which makes it really difficult to train a model when there is not much data available. This is especially the case for Machine learning classification algorithms, where the number of possible classes in the dataset needs to be known before training can begin.

Tiny Machine learning (TinyML) is a subset of Machine Learning that focuses on training models with limited data and resources. It's particularly well-suited for applications where traditional machine learning algorithms are too resource-intensive or difficult to implement. Tiny Machine Learning has been used for everything from consumer applications like smart manufacturing to controlling autonomous vehicles.

One of the reasons why Tiny Machine Learning is becoming more popular is that the microcontrollers in edge devices are becoming more powerful and cheaper. Microcontrollers are small computers that are used in a wide range of devices, from cars to drones. They are becoming more powerful and cheaper as the semiconductor industry moves to smaller geometries. This means that Tiny Machine Learning algorithms can be run on edge devices, such as phones, cars or drones, without using too much power or taking up too much space.

#### Tiny Machine Learning for IoT Systems

Microcontrollers are rapidly becoming more powerful, but they still have relatively small memories and compute power compared to traditional servers. AI algorithms that require large data sets or complex computations cannot be implemented on these technologies without overhauling them completely. TinyML can open up new possibilities for machine learning, especially in the Internet of Things (IoT) space where simple control systems are being used for novel applications ranging from intelligent medical implants to self-driving cars.

It has become possible to offer these tiny devices additional intelligence thanks to recent breakthroughs in model optimization and the emergence of frameworks specifically designed for conducting machine learning model inference on microcontrollers. We can now use neural networks on microcontrollers to recognize audio scenes (for example, elephant activity or the sound of breaking glass), detect hot words (to activate a gadget with a specific phrase), and even recognize simple images. The gadgets with integrated microcontrollers can be used to give existing sensors new life and meaning, such as employing an accelerometer mounted on a mechanism for anomaly detection and predictive maintenance – or to discern between different types of liqueurs, as demonstrated in this demo! TinyML's potential is truly limitless.

#### How Does Tiny Machine Learning Work

Tiny machine learning algorithms are designed to work on small data sets that can be processed on a microcontroller or embedded system. These algorithms are often based on linear regression or neural networks, which can be implemented using a very small amount of code. Machine learning models can be trained using a limited amount of data, and they can be adapted to changes in the data set much more easily than traditional machine learning algorithms.

This makes tiny machine learning an ideal choice for applications where data is scarce or difficult to collect, such as in autonomous vehicles or medical devices. It also allows for the development of machine learning models that can be run on low-power devices without requiring a large amount of memory or processing

#### Resources Are Limited, But So Is The Competition

The use of tiny machine learning algorithms is still in its early days, and most of the research in this area has been focused on developing new ways to implement these algorithms on small devices. This leaves plenty of room for innovation, and many opportunities for enterprising entrepreneurs to bring Machine Learning to new markets. At the same time, the competition for resources is likely to be fierce. Large technology companies like Google and Amazon are already investing heavily in machine learning, and they are likely to move into the Tiny Machine Learning market as well. This could present a challenge for small startups trying to compete in this space.

### Q&A Session

Q. Can you explain the differences between cloud, edge and embedded machine learning?
Q. What does a tiny machine need to learn?
Q. Are there any limitations to tiny machine learning?
Q. How can we use tiny machine learning in the home or office?
Q. How do these machines reach conclusions based on their data set and how small is this data set typically?
Q. When is it better to use a big machine over a tiny machine learning system?

## Taxonomy of Machine Learning Algorithms

There are three major classes of machine learning algorithms: supervised, unsupervised and reinforcement machine. In supervised machine learning algorithms, the machine is given a set of training data and then it learns from this data to make predictions about new data. Unsupervised machine learning algorithms help you explore your dataset to find hidden patterns without having a specific outcome in mind. Reinforcement machine learning algorithms are a type of machine learning algorithm where the machine learns from trial and error experiences. Each machine learning algorithm solves a machine learning problem differently and some machine learning problems may only be solvable by certain machine learning algorithms.

### Supervised Learning

#### What Is Supervised Learning?

Supervised machine learning is the machine learning task of finding a function that maps an input to an output based on example input-output pairs. It's also called supervised learning because the machine relies on some form of supervision (e.g., "teacher") in order to learn from its environment and improve performance. The machine is not able to fully learn without help from humans in this case; it needs guidance and feedback about which inputs lead to desired outputs.

#### How Does Supervised Machine Learning Work?

In supervised machine learning, the person who is training the computer performs a task that falls into one of three categories: labeling, categorizing or measuring. Labeling involves assigning a category to an item - for example, red-labeling all apples as being in the apple category. Categorizing entails putting items into groups according to some shared property. For instance, grouping all animals together might be called animal-categorization. Measuring means assessing some property such as size or weight and then providing a quantitative value for it on a scale - like measuring how many apples are in this basket and saying there are 36 apples here.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/6.png" alt="pir" width="800" height="auto"/></p>

The goal of supervised machine learning is always to build models based on historical data which can help predict outcomes and make decisions. Training the algorithms to do this takes a lot of time and effort, but there are many benefits to it. For one thing, the more data that's provided, the better the model becomes at predicting outcomes. The more information that comes in, the closer it gets to anticipating what might happen in the future. Secondly, algorithms can use labels like "healthy" or "diseased." Supervised machine learning is even able to incorporate categorical properties like skin color or sex when making predictions. This not only helps with accuracy, but also ensures that no personal experience or bias influences its decision-making process.

Supervised machine learning is a powerful tool that can be used to great effect in many different areas. Its ability to limit bias and make predictions with increasing accuracy makes it an essential part of the data scientist's toolkit. With the ever-growing availability of data, it's sure to play an even more important role in the years to come.

Examples of how supervised machine learning can be used in the real world:

- Retailers might use it to train models that predict customer behavior and tailor their offerings accordingly.
- Data scientists might use supervised machine learning to model natural language and find patterns in unstructured data.
- The healthcare industry could use it to develop models for predicting health outcomes for certain populations.

#### What Are The Benefits Of Supervised Machine Learning?

Data scientists use this type of machine learning to build models that reflect training data, which is data that has been labeled or categorized in some way. In other words, it must have a label attached, such as "healthy" or "diseased." The purpose of building a model is to train algorithms on what they should look for and how they should behave when classifying data going forward.

#### Who Can Perform Supervised Machine Learning?

Data scientists use this type of machine learning to build models that reflect training data, which is data that has been labeled or categorized in some way. In other words, it must have a label attached, such as "healthy" or "diseased." The purpose of building a model is to train algorithms on what they should look for and how they should behave when classifying data going forward.

#### What Are The Downsides Of Supervised Machine Learning?

Supervised machine learning works best with large amounts of labeled/categorized/measured training data because more information means better results and predictions. If there isn't enough data, it can be difficult to train a model that produces good predictions. Furthermore, algorithms are only as good as the humans who design and oversee them. If there is bias in the training data, it's likely that this bias will be reproduced in the models created by supervised machine learning.

#### What Is An Example Of Supervised Machine Learning In Action?

One common application of supervised machine learning is fraud detection. In this case, credit card companies might use supervised machine learning algorithms to identify patterns in spending behavior that might indicate fraudulent activity. This could involve modeling past data to look for irregularities or unusual activity, like someone suddenly starting to charge a lot of items in a short period of time.

#### What Are The Limitations Of Supervised Machine Learning?

Supervised machine learning can provide accurate training to the algorithm which helps it learn what behavior is expected. If there isn't enough data, it can be difficult to train a model that produces good predictions. Furthermore, algorithms are only as good as the humans who design and oversee them. If there is bias in the training data, this will likely be reproduced in the models created by supervised machine learning.

#### What Is The Future Of Supervised Learning?

Supervised machine learning is likely to become even more important in the future. With the ever-growing amounts of data being generated, it's more important than ever to have a way to accurately make sense of it all. Supervised machine learning is one of the most effective ways to do just that. Additionally, as more and more businesses realize the value of data science, the demand for skilled data scientists will continue to rise. This means that supervised machine learning will become an even more integral part of business operations as organizations seek to gain a competitive edge.

#### What Is The Simplest Example Of Supervised Learning?

The most common form of supervised machine learning is linear regression. Linear regression is a technique for fitting a line to a set of data points, in which each data point is represented by two coordinates (x, y). The machine learning algorithm finds the best line that fits the data points, based on a measure of error called the cost function.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/4.png" alt="pir" width="600" height="auto"/></p>

In supervised learning, each example is a pair consisting of an input object (typically a vector) and a desired output value (also called the supervisory signal). The machine learning algorithm is "trained" by adjusting its parameters so that it produces the closest possible match between the predicted values and the target values.

Supervised machine learning algorithms can be used for classification as well. Classification is the task of identifying which category an input belongs to, from a pre-determined set of categories. For example, you might want to use machine learning to distinguish between images of dogs and cats. In this case, the input would be an image, and the desired output would be the name of the animal depicts: "dog" or "cat”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/2.png" alt="pir" width="600" height="auto"/></p>

### Unsupervised Learning

#### What Is Unsupervised Learning?

Another type of machine learning that is gaining traction in recent years is unsupervised machine learning. This research area combines the power of machines with human ability to organize, label, and interpret data sets. Unsupervised ML techniques are used for tasks such as dimensionality reduction, clustering, visualization, feature selection, etc.

- Dimensionality reduction: Reducing the number of dimensions in a data set. This can be done, for example, by transforming the data into a lower-dimensional space.
- Clustering: The process of grouping similar items together.
- Visualization: The process of displaying data in a way that makes it easy to understand.
- Feature selection: The process of selecting a subset of features from a data set. This can be done, for example, to reduce the size of the data set or to make it easier to train a machine learning algorithm.

#### How Does Unsupervised Learning Work?

In unsupervised machine learning, algorithms are used to find patterns in data sets. There are many different types of unsupervised machine learning algorithms, and each one has its own set of instructions. Example unsupervised machine learning algorithms: k-means, k-nearest neighbor, hierarchical clustering, latent Dirichlet allocation, etc.

To create a successful unsupervised machine learning model, there are three essential components: data, algorithms, and feedback. The data is the input for the model, the algorithms are the tools that are used to find patterns in the data, and the feedback is used to improve the accuracy of the model. The unsupervised machine learning process can be divided into four steps: pre-processing, data exploration, pattern detection, and post-processing.

1. Pre-processing: This step is used to clean and prepare the data for further analysis.
2. Data exploration: This step is used to explore the data and find patterns.
3. Pattern detection: This step is used to detect patterns in the data.
4. Post-processing: This step is used to improve the accuracy of the model and to prepare the data for deployment.

#### What Are The Advantages And Disadvantages Of Unsupervised Machine Learning?

One of the advantages of unsupervised machine learning is that it can be used for tasks that are difficult or impossible for humans to do on their own. For example, clustering data sets can identify patterns that would be hidden to the human eye. Additionally, unsupervised learning can help improve existing supervised machine learning algorithms. By using the clustering techniques on a data set, supervised algorithms can discover groups within those clusters.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/5.png" alt="pir" width="600" height="auto"/></p>

In general, unsupervised ML is used for exploratory analytics. In some cases, the desired outcomes are known and the only goal of using an unsupervised learning algorithm is to find specific patterns. In other cases, there may not be any desired outcomes and the only goal of an unsupervised learning algorithm is to discover undiscovered patterns.

One of the advantages of unsupervised machine learning is that it can be used for tasks that are difficult or impossible for humans to do on their own. For example, clustering data sets can identify patterns that would be hidden to the human eye. Additionally, unsupervised learning can help improve existing supervised machine learning algorithms. By using the clustering techniques on a data set, supervised algorithms can discover groups within those clusters.

Another advantage of using unsupervised ML techniques is that it can provide insight into new applications and problems. For example, if a data scientist wanted to use clustering on a biology data set, he or she might discover that one cluster contains genes that are associated with a particular disease. This could lead to new discoveries in the field of biology.

Despite the advantages of unsupervised machine learning, it is still an emerging research area. There are many challenges that need to be addressed before unsupervised ML can be widely used. For example, current unsupervised learning algorithms are not always able to find all the desired patterns in a data set. Additionally, unsupervised learning algorithms can be slow and computationally expensive.

Nevertheless, unsupervised machine learning is an exciting field that has the potential to make profound contributions in many different research areas. With continued research and development, unsupervised ML will become more powerful and more widely used.

### Reinforcement Learning

#### What Is Reinforcement Learning?

The last of the types is reinforcement learning, which is a type of machine learning that can teach computers to perform tasks by rewarding them for certain behaviors. Reinforcement learning often involves giving the computer a simulated environment in which it can learn, with the eventual goal being to have it complete tasks in the real world.

Reinforcement learning is an area of machine intelligence research concerned with how software agents should take actions in an environment so as to maximize some notion of cumulative reward. The reinforcement signal may be explicit, such as a "reward" delivered after completion of task or subtler such as a 'punishment' following incorrect action; reinforcement signals are not limited to purely positive or negative forms but any feedback that informs behavior and affects future decision-making (e.g., if you are praised for a painting you have done, this might lead you to be more likely to paint in the future).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/1.png" alt="pir" width="600" height="auto"/></p>

#### How Does Reinforcement Learning Work?

In reinforcement learning, reinforcement signals are usually sparse, as in reinforcement learning it is hard to verify if a signal implies reinforcement or not. This means that reinforcement learning algorithms often need to assume the reinforcement signals they receive are valid reinforcement signals and therefore learn a value function that aims at maximizing a weighted sum of future reward estimates instead of only the immediate reward. In the case where this assumption does not hold, Reinforcement Learning algorithms will try to maximize expected discounted future rewards instead.

One of the earliest reinforcement learning methods, developed in the early 1960s, was the Q-learning algorithm. Q-learning is a model-free reinforcement learning technique that works by learning an optimal action-value function (Q) for each state in a Markov decision process (MDP), using a reinforcement signal to update the values. The algorithm starts with an estimate of Q(s) for every state s, and then it iteratively updates these estimates using a reinforcement signal r(s,a) that tells it how good or bad the action taken in state s was. In other words, Q-learning tries to learn a policy that maps states of the world to the best action to take in those states.

In reinforcement learning, sometimes we can define Transfer Learning as a reinforcement learning method where an agent learns from its past experience without human interactions. Punishment involves reducing reward e.g. killing or sending back something to the sender. Reward involves increasing reward e.g hitting play button on media player (this is based on your environment)

#### What Are Some Applications Of Reinforcement Learning?

Reinforcement learning can be applied in game development for reinforcement-based puzzles like Sokoban and real-time strategy games like Age of Empires II: The Age Of Kings; it can also be used in business issues such as employee recruiting and placement (recommendation systems), software agent control, and robot control.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/TinyMLKit.png" alt="pir" width="500" height="auto"/></p>

In the above figure, the input layer yellow node represents a neuron that is receiving an input from a previous layer. Each of these neurons can have weights (in1, in2, in3) applied to it before being passed along as a signal, and the weighted sum of the inputs for that neuron will activate one or more nodes in the next layer. This process repeats with each successive layer until we have determined our output value. As you can see, this makes it very easy to represent complex decision-making rules using mathematically-derived algorithms (although getting them to function correctly is another matter).

In order for ANNs to learn, they need to have a tremendous amount of information thrown at them called a training set. When you are trying to teach an ANN how to differentiate a cat from a dog, the training set would provide thousands of images tagged like a dog so the network would begin to learn. Once it has been trained with a significant amount of data, it will try to classify future data based on what it thinks it’s seeing (or hearing, depending on the data set) throughout the different units. During the training period, the machine’s output is compared to the human-provided description of what should be observed. If they are the same, the machine is validated. If it’s incorrect, it uses backpropagation to adjust its learning—going back through the layers to tweak the mathematical equation. Known as deep learning, this is what makes a network intelligent.

Normally Deep Neural Networks require rather powerful compute resources to be trained and deployed. However recently, a branch of ML on the Edge or Embedded Machine Learning called TinyML have appeared - it represents a technique or field of study in machine learning and embedded systems that explores which machine-learning applications (once reduced, optimized and integrated) can be run on devices as small as microcontrollers.

There are many other Machine learning algorithms that can be used for different tasks. It is important to choose the right algorithm for the job, and not to try and force a Machine learning algorithm to do something that it was not intended for. This can result in poor classification accuracy or incorrect predictions.

## Deep Learning Primer

This section gives a very high level overview of deep learning, specifically as it relates to Artificial Neural Networks, which hereon we will refer to briefly as Neural Networks. An artificial neural network (ANN) is a computing system modeled on the brain.

### What are Neural Networks?

In general, neural networks are a powerful tool for understanding and predicting complex patterns in data. They are composed of a large number of interconnected processing nodes, or neurons, that can learn to recognize patterns of input data. You have a set of nodes that re called the input neurons, followed by a whole collection of hidden layers then ultimately culminate towards some output layer that helps make informed decisions. With the right data, neural networks can be trained to learn and make predictions that are surprisingly accurate. However, they are also very computationally intensive, and can be difficult to train. In addition, neural networks are often opaque in their decision-making, which can be a problem when trying to explain their predictions to humans. Nonetheless, neural networks are a powerful tool that can be used to great effect when applied to the right problem.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/new2.png" alt="pir" width="500" height="auto"/></p>

Neural networks are a powerful tool for understanding and predicting complex patterns in data. However, they are also very computationally intensive, and can be difficult to train. In addition, neural networks are often opaque in their decision-making, which can be a problem when trying to explain their predictions to humans. Nonetheless, neural networks are a powerful tool that can be used to great effect when applied to the right problem.

### What is Deep Learning Training?

To train a neural network, you need to provide it with a training dataset and a set of parameters that determine how the network will learn. The training dataset contains a set of input data along with the desired output for each data point. The neural network will use this data to learn how to recognize patterns in the input data and produce the correct output. The parameters that you need to set will depend on the type of neural network that you are using, but they typically include the learning rate, the number of iterations, and the size of the hidden layer.

Machine learning training weights play a critical role in the success of a machine learning algorithm. The weights that sit at the intersection of the neurons (edges) determine how much influence each input has on the output of the machine learning model. In order to achieve the best results, it is important to choose the correct weights for your data set. One common method for determining the correct weights is called the delta rule. The delta rule is a mathematical formula that calculates the error between the predicted output and the actual output. This error is then used to adjust the weights of the machine learning algorithm.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/new.png" alt="pir" width="500" height="auto"/></p>

There are various other ways to train machine learning models, but the most popular approach is to use a technique called backpropagation. Backpropagation is a type of training algorithm that is used to train neural networks. It works by propagating the error gradient backwards through the network, so that the weights can be updated in order to reduce the error. Backpropagation is an efficient way of training neural networks and has been shown to be successful in a variety of tasks. One of the benefits of backpropagation is that it can be used to train neural networks with multiple layers. This is because the error gradient is propagated backwards through all the layers of the network, so that all the weights can be updated. Backpropagation is also relatively easy to implement, which makes it a popular choice for training neural networks.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/new1.png" alt="pir" width="500" height="auto"/></p>

There are a few drawbacks to backpropagation, however. One is that it can be slow to train large neural networks. Another is that backpropagation can sometimes be unstable, meaning that the weights can diverge instead of converge. Finally, backpropagation requires access to the training data in order to work, which can be a problem if the data is not readily available. Despite these drawbacks, backpropagation is still a popular choice for training neural networks because it is an efficient and relatively easy to use algorithm. If you are interested in training your own neural network, then backpropagation may be a good choice for you.

### What is Deep Learning Inference?

Machine learning inference is the process of using a trained machine learning model to make predictions on new data. In general, there are two types of machine learning inference: online and batch. Online inference is the process of making predictions on new data as it comes in, while batch inference is the process of computing predictions for a large batch of data all at once. Neural networks are well suited for online inference because they can make predictions very quickly. This is important for tasks such as facial recognition, where you need to be able to identify a face in real-time. Batch inference is also important for many applications, such as stock market prediction and weather forecast, where you need to make predictions for a large number of data points all at once.

## The Machine Learning Lifecycle

Machine Learning Lifecycle is defined as a cyclical process which involves three-phase process (Pipeline development, Training phase, and Inference phase) acquired by the data scientist and the data engineers to develop, train and serve the models using the huge amount of data that are involved in various applications like robotics, speech recognition systems, search engine optimization (SEO), medicine, finance  and so on. The aim of this article is to provide an in-depth understanding of the machine learning lifecycle and its importance in the data science field.

The first phase of the machine learning lifecycle is the pipeline development phase. In this phase, the data scientist and the data engineer work together to develop a data processing pipeline which can be used to acquire, cleanse, process and pre-train the data sets. The main goal of this phase is to make sure that the data sets are ready for training and inference. The second phase is the training phase where the models are actually trained using the data sets. This phase requires a lot of time and effort as it involves experimenting with different algorithms and parameters to find the best model that can be used for prediction. The last phase is the inference phase where the models are put into use to make predictions. In this phase, the data scientist and the data engineer work together to deploy the models into production and make sure that they are working correctly.

The machine learning lifecycle is important because it helps the data scientist and the data engineer to develop, train and serve the models using the huge amount of data that are involved in various applications. It also helps them to avoid common pitfalls that can occur during the training and inference phases. The machine learning lifecycle is a cyclical process which means that it can be repeated multiple times to improve the accuracy of the models. Thus, it is an essential tool for anyone who wants to become a data scientist or a data engineer.

The workflow for virtually any machine learning can be streamlined and summarized by following these steps:

1. Gather and clean the data
2. Prepare and configure the parameters
3. Train the machine learning model
4. Evaluate performance of the machine learning model
5. Deploy in a production environment/use for further training, depending on circumstances.

While these steps may seem simple, they can take a significant amount of time to complete. In the coming chapters, we will go deeper into each of these different steps and understand the nuances.

### Data Collection

Data Collection is the first step in the Machine Learning Lifecycle. The data scientist and the data engineer need to collect a huge amount of data in order to develop, train and serve the models. The data are involved in various applications such as image recognition, video analysis, natural language processing, predictive analytics, and many more.

### Pre-processing

Pre-processing is the second data scientist and data engineer need to do in the Machine Learning Lifecycle. The data should be cleaned and prepped for analysis before it is fed into the machine learning algorithm. Data pre-processing is vital for machine learning because it includes tasks such as, Data cleansing, Data exploration, Data visualization, Data reduction, Data transformation. These are important for the development of machine learning models because they are often used on raw datasets. After the data has been processed, it is time to choose an algorithm. The algorithm will determine how the computer will learn from the data.

### Training

Machine learning training is the third step of the Machine Learning Lifecycle. The machine learning training process consists of two phases, Training phase and Inference phase. A data scientist trains a machine learning model, which is then used to predict the outcome on different datasets that are not available to train it with. Training involves selecting a neural network architecture that best fits the task at hand. Once the algorithm has been selected, the next step is to configure the neural network architecture’s parameters. These parameters include the number of layers in the neural network, the type of activation function, and the learning rate. After the parameters have been configured, it is time to train the machine learning model. This process can take a long time, depending on the size and complexity of the data set.

### Optimization

There are various ways in which a machine learning model can be optimized: compressed, pruned, and quantized. Compression is the process of reducing the size of a machine learning model. This is done by eliminating the features that are not important for the task at hand. Pruning is the process of removing the weights of the neurons in a machine learning model that are not important. Quantization is the process of converting a floating-point number to an integer value. This is done in order to save space and time. These optimizations not only make models run faster, but they also help reduce the memory consumption requirements on the system.

### Deployment

The deployment phase is the fourth and final step of the Machine Learning Lifecycle. In this phase, the machine learning model is deployed into an environment where it can be used to make predictions. This might be in the cloud, on-premise, mobile or in our case tiny devices! Once the machine learning model has been trained, it is ready for use on one of the chosen platforms. The model can be deployed in a production environment or used for further training. The final step is to evaluate the performance of the machine learning model. This can be done by comparing the predicted results with actual results.

### Evaluation

Machine learning inference is the process of making predictions on new datasets using a machine learning model that has been trained on a different dataset. Inference is important because it allows us to use the machine learning model to make predictions on datasets that we have not seen before. This helps us to improve our understanding of the data and the machine learning model.

The machine learning lifecycle is a cyclical process that helps us to transform raw data into actionable insights through the use of prediction algorithms. The cycle consists of three phases: (1) data collection, (2) preprocessing and (3) machine learning training. The main goal of this cycle is to improve the accuracy of predictions made by using machine learning models.

### Q&A Session

Q. What are the three phases of the machine learning lifecycle?

Q. Which phase is the most important to give accurate predictions?

Q. How can we evaluate machine learning models?

## Data Collection

### What is Data Collection?

In order for a machine learning model to be effective, it must be trained with high-quality data. The quality of the data is determined by the amount of variation it contains and the correctness of its labels. In order to ensure that a machine learning model is effective, it is important to select data that is representative of the real-world problem you are trying to solve. The process of gathering and measuring information from countless different sources is data collection.

### What Is Training Data?

Training data is the data that is used to train machine learning models. It is the data that is used to teach the algorithm what it needs to know in order to correctly identify relevant patterns in unstructured data. The best way to determine whether or not your data is suitable for a machine learning model, is to have a better understanding of the data itself. If you want to use it as training fuel, then it has several key properties that must be met:

- It must be representative of the population from which it was collected.
- There should be equal representation from multiple classes (e.g. “cats” vs. “dogs”) that could exist within the same group of people or items being studied. This ensures that there's no bias in the data when the machine learning model is making predictions about one class over another.
- The variables in each item should have meaningful levels of measurement. This means that numerical values should be assigned to discrete categories, and not vice versa.

### What are Training Data Splits?

Training data consists of different partitions. When partitioning machine learning data, you need to separate the machine learning dataset into two sets: a training set and a testing set. The machine learning algorithm is first trained on the training set, and then tested on the testing set to see how effective it is in predicting the target variables of interest. The machine learning dataset can be partitioned using a number of techniques, including but not limited to:

- Split the data randomly into two sets.
- Split the data using a stratified approach so that the distribution of data is maintained across both sets.
- Use machine learning algorithms to intelligently partition the data into two sets.

The general rule of thumb is the 80:10:10 rule. 80% of the data is what you train the model on. 10% is what you validate the training on to improve its accuracy. And the holdout 10% is what we ultimately validate the machine learning model’s accuracy before putting it into production.

### What Are The Sources For Training Data?

In order to use the data we collect to develop practical artificial intelligence (AI) and machine learning solutions, it must be collected and stored in a way that makes sense for the business problem at hand and it must be organized efficiently enough to facilitate quick access when your system needs it. There are three main sources of data:

- Internal Data
- Public Data
- External Data

Internal data refers to the data that is already stored within your organization. This could be customer records, purchase information, or product information. The main drawback to using internal data is that it is often incomplete and not available in a format that is compatible with machine learning solutions. However, the main benefit to using internal data is that it can be accessed quickly and easily.

Public data refers to any free data source available over the internet. This data typically comes in large volumes and may require additional processing before it is ready for use in a model. One major caveat here is to make sure that you have the right to use the data to train the models. Just because there is free data available does not mean that you can use it, especially for commercial purposes.

The public data that you choose will depend on the objective of your model. For example, if you are trying to predict the outcome of an election, you could use public data such as previous elections' results or voter registration records. External data is any data that you cannot collect yourself - it may come from third party providers or other companies that specialize in providing information for machine learning purposes.

### How Do You Go About Getting Labeled Training Data?

Labeled training data is crucial for supervised machine learning models. The data is used to teach the algorithm what it needs to know in order to correctly identify relevant patterns in unstructured data. In order to get labeled training data, you'll need to collect it from a source that is willing to provide it. There are several ways to do this:

- Online surveys or experiments can be used to gather data from a large number of people. The participants would then be asked to label the data accordingly.
- Data can also be from social media platforms such as Twitter, where users can tag tweets with specific keywords or hashtags.
- Databases of items that have been pre-labeled can be used as a source of training data. This is often done by companies that specialize in data annotation and labeling.

### How Can You Tell If Your Data Set Is Suitable For A Machine Learning Model?

The best way to determine whether or not your data is suitable for a machine learning model, is to have a better understanding of the data itself. If you want to use it as training fuel, then it has several key properties that must be met:

- It must be representative of the population from which it was collected.
- There should be equal representation from multiple classes that could exist within the same group of people or items being studied. This ensures that there's no bias in any one class over another and results will be more accurate when predicting the likelihood of something based on its characteristics.
- The variables in each item should have meaningful levels of measurement. This means that numerical values should be assigned to discrete categories, and not vice versa.

### What are the Different Types of Data?

There are two types of data- structured and unstructured. Structured data is the data that is organized in tables or grids. This type of data is easy to process and it is used to train machine learning models that use supervised learning algorithms. Unstructured data is the data that is not organized in any specific format. This type of data is difficult to process and it is used to train machine learning models that use unsupervised learning algorithms.

## Pre-processing

### What is Data Pre-processing?

Once you have gathered your data, the next step is to clean it and prepare it for use in your machine learning model. This process is known as data pre-processing. The aim of data pre-processing is to make the data ready for modeling by removing unwanted variation and filling in missing values.

The pre-processing steps that you choose will depend on the type of data you are using and the approach that you plan to take in your model. For example, if your data contains a large proportion of missing values (i.e., missing attributes such as age or gender), it may be possible to extrapolate the missing information from other available information. This will reduce the amount of missing data and allow you to include more records in your model.

### What’s Involved with Data Pre-processing?

Generally, there are a few steps involved in data pre-processing: first, the data has to be cleaned up and made ready for analysis. This includes getting rid of any outliers, noise, or incomplete data. Next, the data needs to be transformed into a form that is suitable for machine learning algorithms. This usually involves converting the data into numerical form and extracting relevant features. For example, we can convert audio signals into images to understand the audio data. That’s in fact how most “Keyword Spotting” algorithms work. When transforming machine learning data into a numerical format, it is recommended that you use either counting or binning techniques. These two techniques can be applied to both categorical and numerical data. Counting is used when there are a limited number of values for each feature, while binning is used when there are a large number of values for each feature. Finally, the data needs to be partitioned into training and testing sets. The training set is used to train the machine learning algorithm, and the testing set is used to evaluate the performance of the algorithm.

### What’s The Importance Of Data Pre-Processing?

Data pre-processing is important because it helps to ensure that the machine learning algorithm is trained on data that is representative of the real world. By cleaning and transforming the data, we can remove any noise or bias that may exist in the data. This helps to improve the accuracy of the machine learning algorithm. Additionally, data pre-processing can also help to improve performance by extracting useful features from the data. By identifying and extracting the most important features, we can reduce the amount of data that needs to be processed by the machine learning algorithm. This can lead to improved performance and faster execution times. Finally, partitioning the data into training and testing sets allows us to evaluate the performance of machine learning algorithms. By testing the machine learning algorithm on data it has not seen before, we can see how well and accurately it performs. We use the results of this test to determine whether our machine learning model is effective or not.

*The first step in data pre-processing is to clean up the input. This involves removing noise and outliers from the data, formatting it properly for machine consumption, and performing any necessary transformations. Noise can be caused by incorrect or inconsistent data values, while outliers are values that are far removed from the rest of the data set.*

*Next, the data should be explored to get a better understanding of what it contains. This can be done by visualizing the data and performing any necessary extractions or transformations based on insights gained from looking at the data. The machine learning algorithm should be able to make use of what was learned when exploring the data.*

Finally, once all of this is done, machine learning can take place. This involves training a machine learning model with the cleaned up and transformed data in order to create a predictive model that can then be used for making predictions about new input values, such as what product will sell best next month or whether or not someone will default on their loan.

*If you want to include a large proportion of the population in your predictive models, but have very few examples from some minority groups, another option is to use statistical techniques such as oversampling or undersampling to create a balanced dataset. Oversampling involves creating an additional number of records for a minority group by randomly selecting other records from the population. Undersampling, on the other hand, involves removing a number of records from a minority group in order to make it more representative of the larger population.*

Once your data is ready, you can start training your machine learning model. This process will involve selecting an algorithm and configuring it to map the data onto a solution by choosing an appropriate loss function and accuracy metric. We will discuss more about this soon.

The final step in machine learning is evaluating your model, which involves running real-world predictions against the historical data you collected earlier. This will allow you to test how well your model has learnt from the training data and ensure that it generalizes well to new data.

## Feature Extraction

Feature extraction is an important step in the machine learning process. It is used to identify a subset of features that are most predictive for the task at hand. This subset is then used to create classification or regression models with better predictive accuracy than the models created using all available features.

There are a number of different algorithms that can be used for feature extraction. Some common algorithms include:

- Principal Component Analysis (PCA)
- Linear Discriminant Analysis (LDA)
- Support Vector Machines (SVM)
- Random Forest

Each of these algorithms has its own strengths and weaknesses. The best algorithm for a given task will depend on the type of data and the problem being solved.

Once the subset of features has been identified, it must be selected. The subset of features that is used to create the final model should not be influenced by which algorithm creates the best predictive accuracy. Algorithms will always produce different maps showing how important each feature is for predicting the task at hand. This can make it difficult to select a subset of features that are believed to be best without first knowing what algorithm will be used for modeling.

Once an algorithm has been chosen, one common technique for choosing a subset of features is called selection by regularization. A random utility-based optimization function is constructed using performance measures computed from larger subgroups containing subsets with progressively fewer attributes (features). The process continues until there are just enough attributes left in each subgroup to model the task.

Once a subset of features has been identified, it must be used to create models that produce better predictive accuracy than the models created using all available features. This is not always easy because there are many different algorithms for creating predictive models, and each algorithm uses different subsets of available features to make its predictions. The best way to compare results between different machine learning algorithms is by using an evaluation metric that can be computed over multiple different types of models. Common performance metrics include training error, testing error, area under curve (AUC), lift chart height, lift chart area under curve (AUAC), log loss score, Matthews correlation coefficient (MCC) and ROC Area Under the Curve (ROC AUC).

Feature extraction is a simple concept that does not always have a clear path to implementation. There are many different algorithms for feature extraction, and each of them has their own strengths and weaknesses. Furthermore, the best features to use often depend on which algorithm will be used for classification or regression. In order to choose good features, it is important to first select an appropriate machine learning task and evaluation metric. Once those decisions have been made, one common technique for choosing a subset of features is called selection by regularization. The process of feature engineering cannot begin until after these three steps have been completed successfully.

Feature engineering is an important step in the machine learning process whose goal is identifying and selecting subset of features from a set that are most predictive for the task at hand.

## Model Training

The first step of training a machine learning model is to select the right data set. This data set is typically the input to the model, based on the earlier stages of data collection, pre-processing and feature extraction that we touched upon in the earlier chapters. The second step of training a machine learning model is to architect its internal parameters and network architecture.

### Selecting a Training Dataset

When selecting a data set for training a machine learning model, it's important to consider a few factors:

1.Purpose of the model

The first question you need to ask yourself is what the purpose of the machine learning model is. What are you trying to predict or identify? Once you know this, you can start looking for a data set that is representative of the population you're studying.

2.Size and complexity of the data set

The size and complexity of the data set is another important consideration. The data set should be large enough to contain a variety of items, with each item containing several variables that can be used for modeling. The more complex the data set, the more time and resources it will take to train the machine learning model.

3.vailability of data

Another thing you need to consider is whether or not the data is available. If you're working with proprietary data, then you'll likely need permission from the owner before you can use it. Publically available data sets can be found online or by contacting the organization that collected the data.

4.Labeling of the data

One of the most important aspects of training data is that it must be labeled. Labeled data means that each item's input variables have been assigned a numerical or categorical value. This allows the machine learning model to identify patterns and make predictions based on what it has learned during training. The more items in your training set, the better the model will perform when making real-time predictions about new data.

5.Linear vs non-linear relationships

Another thing you need to consider is whether or not there are linear relationships, and if so, how many independent and dependent variables there are for each item in the training set. For example: If you're studying people, then weight can be an indicator of height (which could also indicate age). So in this case, there's only one dependent variable (height) and one independent variable (weight). However, if you're studying cars, then weight and speed could be two independent variables that have a linear relationship. This means that as weight increases, speed will also likely increase.

6.Algorithm type

The type of machine learning algorithm you choose will also affect the data set you use for training. Some algorithms are better suited for working with categorical data, while others are better at handling numerical data. You'll need to select an algorithm that is compatible with the type of data you're working with.

7.Availability of resources

The last thing you need to consider is how much time and resources are needed to train the machine learning model. The more data you have, the better the model will perform. However, if you don't have enough data to train the model, you can also supplement it with synthetic data. Synthetic data is data that has been artificially created to resemble the real-world data set. This can be helpful in cases where there's not enough original data available for training.

In summary, when selecting a data set for machine learning, it's important to make sure that:

- The data is representative of the population from which it was collected.
- There are equal representations from multiple classes that could exist within the same group of people or items being studied. This ensures that there's no bias in the data when the machine learning model is making predictions about one class over another.
- The size and complexity of the data set is appropriate for the type of machine learning algorithm you're using.
- The data is labeled so that the machine learning model can identify patterns.
- The data is formatted in a way that is compatible with the algorithm you're using.
- Enough resources are available to train the model.
- The data set is large enough to contain a variety of items, with each item containing several variables.
- There are no linear relationships between more than two independent variables. If there are linear relationships, then they should be simple (i.e., have few independent variables).
- You have an idea of what you're trying to or identify so that you can find an appropriate data set.

The best way to find an appropriate data set is to know what you're trying to accomplish. Once you have a general idea, you can search for data sets that are publicly available and suited for machine learning. There are also many online resources that can help you find the right data set for your needs. For example, the UCI Machine Learning Repository is a website that contains a large collection of public data sets that can be used for machine learning. It's important to note that not all data sets are suitable for every type of machine learning algorithm. So make sure to select an algorithm that is compatible with the data set you're using.

The use of machine learning models has exploded in recent years due in part to the growing availability of data. However, the real winner in the machine learning industry is data itself. It's not just about making predictions anymore; it's also an important tool that can help us better understand how the world works and make better decisions based on that information.

The more data you have, the better your model will perform. But if you don't have enough data to train a machine learning model, you can supply synthetic data for it to work with instead of real-world data (which would be virtually impossible). Another approach is to use a smaller set of labeled training data and combine it with some unsupervised learning techniques. This lets you choose which variables go into creating your final model while still using unstructured data.

It's important to have enough data when you're training a machine learning model. However, sometimes there's just not enough original data available for us to work with. In these cases, we can turn to synthetic data, which is data that has been artificially created to resemble the real-world data set we're working with. This can be helpful in cases where there's not enough original data available for training or if we want to improve the accuracy of our predictions. This is a fairly advanced topic that we will defer to another time, perhaps in another book.

### Neural Network Architectures

There are a few different neural network architectures that are commonly used in deep learning. Convolutional Neural Networks (CNNs), Long Short Term Memory (LSTM) cells, recurrent neural networks (RNNs), and Convolutional Restricted Boltzmann Machine (CBRMs) are some of the most common. Each of these different types of neural networks has its own strengths and weaknesses and can be used for different purposes. In this section, we will touch upon the most widely used neural network architectures so that you have a foundation to get started with them.

#### Multilayer Perceptron (MLP)

Multilayer perceptron (MLP) neural networks are a type of neural network that are used in deep learning. They are a simple, yet powerful type of neural network that can be used to train complex models. MLP networks consist of a number of layers, each of which consists of a number of neurons. The neurons in the first layer are connected to the neurons in the second layer, and so on. Multilayer perceptrons are the most common type of neural network used in deep learning. Multilayer perceptrons can be used to solve a wide range of tasks, including regression and classification. Multilayer perceptron networks achieve high predictive accuracy when they have many hidden layers and many neurons per layer; however, they do not scale very well with increasing numbers of training examples and require tuning of their hyper-parameters which make them difficult to train. Multilayer perceptrons were initially introduced in the 1960s by researchers at Stanford University and later popularized by David Rumelhart, Geoffrey Hinton, and Ronald Williams in 1986 [1].

##### Multilayer Perceptron Architecture

A Multilayer Perceptron is organized into three groups of layers, an input layer, one or more hidden layers (also called the "hidden units" or "feature extraction layer"), and an output layer. Each layer is fully connected to the next layer.

The Multilayer perceptron consists of a number of inputs x1, x2, ....xn for each training example, one or more hidden units h1, h2...hn depending on the number of hidden layers and no outputs (or 1 output representing the class label). One learns the optimal weights W1 ,W2 ...Wm for this architecture by minimizing some error function using gradient descent.

Note that Multilayer Perceptrons are universal function approximators which can approximate any function given sufficient hidden units. Multilayer Perceptrons have been used in many applications, including medical diagnosis [2], handwriting recognition [3][4] and machine translation [5]. Multilayer perceptrons are also popular in robotics. Multilayer perceptrons were initially used for supervised learning only, but now they are mainly used for unsupervised learning such as deep belief networks (DBNs) and deep Boltzmann machines (DBMs).

##### Training Multilayer Perceptron Networks

The Multilayer Perceptron training algorithm is simple by design; it works by starting with the random network weights W1, W2...Wm and then iteratively updating them to reduce some defined error function E on a training set consisting of input-output pairs (x1,y1) ,(x2,y2),....(xn,yn). This is a supervised learning approach where the network is trained to predict the correct class labels y.

The Multilayer Perceptron algorithm used for training has two phases:

- Forward Phase: The output of each neuron in the first hidden layer is computed using the sign rule such as neurons compute f = sgn (w1*inputs+b1)+sgn (w2*hiddens+b2)+...+sgn(wm+bm) and then we apply an activation function such as sigmoid. This gives us synaptic activity levels for each connection between neurons and allow the neurons in the next layer to get activated.
- Backward Phase: In this phase, we take into account the actual class labels y and give a higher weight update to examples that are correctly classified. We compute an error function E for each neuron in the hidden layer based on the differences between these values and propagates it back through all of the neurons. We then learn Wm+1 from this error using a gradient descent rule such as Wm+1 = Wm -(learning rate)*partial E/partial wm [6].

The Multilayer Perceptron algorithm does not have any built-in stopping criteria; however, many experiments stop when they observe that further training has only a minimal impact on network performance or stability, i.e., when further training reduces the mean-squared error - overfitting has occurred.

##### Deep Learning Multilayer Perceptrons

The Multilayer perceptrons are also known as feed-forward neural networks because they have no cycles in their graph of connections; however, Multilayer perceptrons with more than one hidden layer are often called deep learning Multilayer perceptrons (MLP), which allows us to generalize the Multilayer perceptron algorithm to networks with many layers and millions of parameters. A deep feed-forward network is composed by stacking multiple layers on top of each other, resulting in a very wide but shallow network architecture. Deep learning Multilayers perceptrons can be trained with a number of different optimization algorithms such as gradient descent, conjugate gradient, or quasi-Newton methods.

#### Convolutional Neural Networks

Convolutional neural networks (CNNs) are one type of neural network that has been used in the application of computer vision, image recognition, and object detection. They are used to identify small aspects of an image by comparing it with other images that the program has learned about. Convolutional neural networks are generally composed of 3 major layers:

- Convolutional layer
- Pooling layer
- Fully connected layer

The Convolutional layer is where the program recognizes patterns in the image by comparing it to other images in its database. If there is a significant difference between the features in the current image and what the program has learned about, then it moves on to the next section of the Convolutional Layer. While Convolutional neural networks are largely responsible for the advancements in computer vision, they still continue to improve with different types of Convolutional Neural Networks such as Deep Convolutional Neural Networks (DCNNs) and Convolutional Restricted Boltzmann Machine(CBRMs).

Convolutional neural networks learn from experience. Convolutional neural networks are composed of multiple layers where each layer has a different number of neurons called a filter. In order for the network to learn, each layer is presented with a training set where it trains itself to recognize patterns. The more training data you have, the more accurate your Convolutional neural network will be at detecting the patterns within that data. Convolutional neural networks also use a feedforward mechanism that passes data forward through many layers and then measures how close its predictions are to the labels associated with the data.

In order to reach the desired level of accuracy for your Convolutional Neural Network, you would need to create a training set for it by sticking to a defined set of data. The Convolutional Neural Network will then learn how to accurately detect patterns from this data. This is done by adjusting the values of the filters within the Convolutional Neural Network in order to minimize the error between its predictions and the labels associated with the data. You can also use backpropagation to help train your Convolutional Neural Network. Backpropagation helps Convolutional Neural Networks learn faster by feeding information about how well it did on each layer back up to the previous layers. This allows for each layer to adjust its filters accordingly so that the Convolutional Neural Network can learn from its mistakes and improve its accuracy.

#### Recurrent Neural Networks

Recurrent Neural Networks (RNNs) is a type of network that identifies patterns within images or text by using state information from earlier parts in the sequence to influence future predictions regarding where it should look next. RNNs have been used in applications such as Google's translation service and speech recognition technology. Convolutional Restricted Boltzmann Machine(CBRMs), Deep Convolutional Neural Networks (DCNNs), etc. are some types of Convolutional Neural Nets that use Recurrent Neural Networks at their core.

Long short term memory (LSTM) cells is a type of recurrent neural network used to identify patterns and trends within sequences of data. LSTM cells do this by comparing new patterns with those that were learned earlier and then taking into account previous state information when making future predictions. Even though recurrent neural networks have been around for years, Long Short Term Memory cells are largely responsible for making recurrent neural networks more powerful.

#### Transformers

Transformer neural networks are neural networks that use a deep learning algorithm called a transformer to learn how to make inferences on new data sets. The transformer is a neural network that is composed of two main parts: the encoder and the decoder. The encoder takes the input data and transforms it into a vector of numbers. The vector is then passed through the decoder, which reconstructs the input data.

The transformer neural network architecture was first proposed by Google in 2017 and has been shown to be more effective than other neural network architectures like the deep neural network and the recurrent neural network.  Transformer neural networks have been shown to be very effective in natural language processing, which is a branch of artificial intelligence that seeks to create machines that can process and learn from human languages like English. A neural network like the transformer neural network is essentially an approximation of how the brain works, as it takes information and transforms into another form for analysis.

### Back Propagation

Once you have chosen a neural network architecture. You have to train it. Backpropagation is a simple and effective algorithm that can be used for training neural networks. Backpropagation is an algorithm that works on a gradient descent method that allows us to quickly converge towards the optimum neural network weights, as opposed to simply moving in a random direction.

The reason it is so effective is that the error term of each layer propagates backwards through the network, which allows one to compute gradients. This error term at a given node will then adjust the weights of the connections to nodes on either side of it, in order to reduce future errors from those nodes.

Back-props are a powerful tool often employed in deep learning neural networks, which requires large databases to train on. Backpropagation can be applied to many different types of neural network models, in fact all of the neural network architectures we discussed earlier can and do in fact benefit from backpropagation. Backpropagation has in fact been successfully applied in many fields such as optimization, pattern recognition and function approximation.

Backpropagation algorithms are also known as back-prop or back-props.

The reason it is so effective is that the error term of each layer propagates backwards through the network, which allows one to compute gradients. This error term at a given node will then adjust the weights of the connections to nodes on either side of it, in order to reduce future errors from those nodes. Backpropagation algorithms are also known as back-prop or back-props.

Backpropagation works on a gradient descent method that allows backpropagation to quickly converge towards the optimum weights, as opposed to simply moving in a random direction. Backpropagation can be composed of many different types of neural network models. Backprop is a great tool for reducing or breaking dependency between classifiers. back-props are a powerful tool often employed in deep learning neural networks, which requires large databases to train on.

### Convergence

Convergence means how fast the model knows things when it trains more data. For example, if you are using a machine learning model to make predictions about the future, you will want to ensure that the model has good convergence so that your predictions are accurate. Another example is if you are using a machine learning model to improve something, like a product, you will want to use a model with good convergence so that the changes you make are actually better than what you started with.

Slow convergence in machine learning can be bad because it means that the model is not learning as quickly as it could be. This can lead to inaccurate predictions and suboptimal solutions. Additionally, slow convergence can be costly in terms of time and resources.

#### Are there benefits for slow convergence?

The main pro of selecting a model with slow convergence is that it will be more accurate. A slower rate of convergence can lead to more accurate predictions or solutions. Additionally, this type of model may be suited to cases where accuracy is the most important factor.

But when selecting a model with slow convergence, it is important to consider the context in which it will be used. Accuracy is the most important factor in some cases, while speed may be more important in others. Additionally, you need to make sure that you have enough data to train the model using this method. If you do not have enough data, the model may not be able to learn properly and will not produce accurate results.

In sum, when selecting a machine learning model, it is important to consider the rate of convergence. A model with good convergence will be more accurate and efficient than one with slow convergence. It is also important to keep in mind the context in which the model will be used so that you can select one with good convergence for that use case.

### Overfitting and Underfitting

One problem with machine learning is overfitting and underfitting. Overfitting means the algorithm learns how to do things well but it cannot do anything else, because it learned too much about what we wanted it to do. Underfitting means the algorithm was not trained enough so it does not know what we want it to learn about how the world works. When there are lots of mistakes made in training data, this may be due to overfitting or underfitting.

For example, a machine learning algorithm might be able to learn how to identify objects in pictures very well. But because it learned too much about what we wanted it to do, it will not be good at doing anything else, like identifying other objects in different pictures or recognizing objects in different contexts.

Another example is when a machine learning algorithm can only learn very basic things from data. This happens when the algorithm is not trained enough and does not learn what we want it to learn about how the world works. When there are lots of mistakes made in training data, this may be due to overfitting or underfitting.

One way to prevent overfitting is by using a more complex algorithm. This will help the algorithm learn more about the data without learning too much about what we want it to do. Another way to prevent overfitting is by using a smaller amount of training data. This will help the algorithm learn less about what we want it to do. One way to prevent underfitting is by using a less complex algorithm which will help the algorithm learn more from data without being trained too many times. Another way to prevent underfitting is by using a larger amount of training data, so that more parts of how the world works are included in the data.

Overfitting and underfitting are two problems that can happen in machine learning. Overfitting happens when the algorithm learns too much about what we want it to do. Underfitting happens when the algorithm was not trained enough so it does not know what we want it to learn about how the world works. By using a more complex algorithm or a larger amount of training data, we can help prevent these problems.

### Hyperparameters

To adjust and cope with these issues, you can tune a range of different parameters. Here we touch upon the most commonly used ones.

#### Epochs

When training a neural network using backpropagation, there are usually thousands or even millions of connections to adjust. Performing all of these updates simultaneously would require exponentially more compute time, which is infeasible for most applications. This is why backpropagation updates the weights one at a time, in iterations. This way backpropagation doesn't have to recalculate the weights of all incoming connections for each training instance, which would take too long. Instead, backpropagation updates the weights one at a time and keeps track of all changes so it can update the other weights once it completes its current iteration.

Epochs are a unit of measure in machine learning that indicate the number of times all the training data has been processed. They are usually used when the number of data items is very large. Epochs are also useful when there is a need to reset the weights of the neural network back to their initial values.

When epochs are first initialized, the backpropagation algorithm will start at the beginning of the data set and move forward until it reaches the end. It will then back up to the beginning and start processing from there again. This process will continue until it has gone through all the data items in the set.

The number of epochs that should be run will depend on how well the neural network is performing on the training data. If the network is not learning from the data, then more epochs should be run. Conversely, if the network is overfitting or learning too much from the noise in the data, then less epochs should be run.

Epochs can also be used to save time during the training process. When backpropagation runs through the training data, it must back up and then go back to the beginning when it reaches the end of the set. If epochs were not used in this situation, backpropagation would have to process the entire data set every time. This could be very time-consuming. However, since backpropagation backtracks to the beginning of the data set, it only needs to back up a certain number of items. This significantly reduces the amount of time needed for each epoch.

#### Learning Rate

A learning rate determines how fast your model trains (or captures data) - that means that if you set your learning rate too low, your model might not train at all; but if you set it too high, then training can be inefficient because there's no time for error correction. Your goal in setting the right value for your case depends on two things:    1) how much data you have available to train your model on, and 2) how much time you have to train it.

How does the learning rate affect your model? If you're training a neural network, then the higher the learning rate is, the closer each value moves towards 0 or 1 (0 meaning no effect; 1 meaning that it has 100% of its original effect). With a lower learning rate, the network will converge more slowly but it will be more accurate. This makes sense because with a low learning rate, there are more opportunities for the network to adapt its weights to better match the data.

How can I find out what my learning rate should be? There are a few ways that you can do this:   1) trial and error - all models require different amounts of training time to reach the same level of accuracy, so it's difficult to know what learning rate you should use; 2) reading an article like this one! This will provide general guidelines. However, there are even more specific ways that you can set your learning value:  1) run a grid search - this is when you test many different combinations of learning rates in order to find the one that works best for your case; 2) use a validation curve - this is when you plot your model's accuracy against its training time, which will show you how fast or slow it's learning. This is the best option if you want to get the most accurate result possible within a certain timeframe.

What are the factors that determine the correct learning rate for my case? The first factor is how much data you have available to train your model on. If you're working with a lot of data, then it makes sense to use a higher value (because this means that there are more examples for your model to learn from - thus allowing it to learn faster). On the other hand, if you have a small amount of data available to train your model on, then set a lower value.

The second factor is how much time you have available to train your model. As mentioned previously, it's impossible for trial and error or reading an article to reveal what learning rate will work best for a specific case. This is because the best option for one person might not be the best option for another. However, if you want to train your model as quickly as possible, then don't use a very high value; whereas if you have more time on your hands, then you can afford to use a higher learning rate (and find out what works best).

As you can see, there are multiple factors that determine the right value for your learning rate. Luckily, there are also many ways to find out what works best!

##### Is the learning rate too low or too high?

If your model is not training at all, then this indicates that your learning rate is too low and you should increase it (but make sure that it's not too high either). Another way to check if your model is set correctly is to use a validation curve on your data set. If you set your learning rate correctly, then the curve will look similar to a graph that looks like a straight line going through the points near to 1. If it's not, then you should consider changing your learning rate and running another validation curve.

##### How can I speed up my model?

If you set a higher learning rate, your model will learn more quickly but it might also be less accurate. Conversely, if you set a lower learning rate, your model will learn more slowly but it will be more accurate. This makes sense because with a low learning rate, there are more opportunities for the network to adapt its weights to better match the data. On the other hand, if you are using a very high learning rate, then your model might quickly learn how to make predictions based on the noise in the dataset instead of the actual data. This won't be very helpful because it's not looking at its predictions critically or understanding why they are wrong (it will just keep making similar mistakes).

If you decrease the learning rate too much, then your model might also take a very long time to train. This is because the weights are updating so slowly that it might not be able to adapt fast enough when new data comes in.

##### Choosing an optimal learning rate

As you can see, there are multiple factors that determine your model's learning rate and the best option is different for every person. If you have plenty of time on your hands but want to train quickly, then use a lower value for your learning rate. However, if you want to train accurate models quickly, then use a higher learning rate.

### Transfer Learning

#### What is Transfer Learning?

Transfer learning is a process where knowledge is learned on one model and can be transferred to another model. This is done in order to fill in the gaps in the knowledge base of the other model. The use of transfer learning has proved to be very successful, especially in the field of machine learning. One great example of this is the application of deep neural networks to improve speech recognition for mobile phones.

#### Why Is Transfer Learning Important?

The primary reason transfer learning is important is because it helps to fill the gaps that exist between different models. Because this fills in these gaps, transfer-learning can help us to use information that we would not have otherwise been able to use if two models were not combined. Another great reason transfer learning is important is because it can speed up the learning process. This is because transfer learning can reuse knowledge that has already been learned on a different model. Finally, transfer learning is important because it can improve the accuracy of our models. By filling in the gaps between different models, transfer-learning can help to improve the accuracy of our models by allowing us to use more information.

Transfer learning has become a powerful tool for machine learning (ML) systems in recent years. Its popularity is due to the fact that transfer learning can help reduce the amount of training data needed and also improves performance. In addition, transfer learning is easier to implement and debug than traditional machine learning algorithms.

#### What Are Some Applications Of Transfer Learning?

Transfer learning has found a number of important applications in fields such as computer vision, natural language processing, and machine learning. Some of the most notable applications include:

- Using transfer learning to improve speech recognition for mobile phones
- Using transfer learning to improve object recognition
- Using transfer learning to improve facial recognition
- Using transfer learning to improve machine learning
- Using transfer learning to improve text classification

In summary, transfer learning is becoming a popular tool for machine learning systems, due to its ability to minimize the amount of training data needed and improve performance. Transfer learning is widely used in speech recognition, machine translation and computer vision applications and has become a valuable tool for researchers and developers who share source code between different tasks within different domains.

#### Optimizers

### Summary

Convolutional neural networks, Long Short Term Memory cells, recurrent neural networks, and Convolutional Restricted Boltzmann Machine (CBRMs) are some of the different types of neural networks that are currently being used in the field of deep learning. These different types of neural networks are responsible for powering many of today's most successful applications. While Convolutional Neural Networks were originally designed for the task of computer vision, they have been adapted to other tasks such as speech recognition and natural language processing with much success. Recurrent Neural Networks and Long Short Term Memory cells are largely responsible for making recurrent neural networks more powerful than ever before. With continued advancements in Convolutional Neural Nets and Recurrent Neural Networks, we can only expect these types of neural networks to become more and more powerful.

## Model Optimizations

In machine learning, the size of a machine learning model is a measure of its degree of complexity. The larger a machine learning model is, the higher the risk that it will not converge during optimization algorithms, and that it will have a higher degree of overfitting.

To counteract these drawbacks, machine learning optimization techniques can be employed to reduce the size of machine learning models while keeping their predictive power. These techniques, such as quantization, pruning, knowledge distillation and more, which we will discuss in this section, are designed to improve the performance of machine learning algorithms by making them more computationally efficient for a variety of tasks.

Broadly, machine Learning optimization techniques address two aspects:

1. reducing model size;
2. increasing computational efficiency.

These can be achieved by either performing software optimizations or by relying on hardware support.

### Software Optimizations

#### Compression

Model compression is a machine learning optimization technique that uses machine learning model ensembles to reduce the size of machine learning models. Model compression works by training multiple machine learning models based on different subsets of machine learning examples and then using voting or averaging to produce a single machine learning model. Because each machine learning model is smaller than the original machine learning model, there are fewer machine learning model parameters to compute and store.

The machine learning data itself may also be compressed in order to make it more manageable. This can be done in a number of ways, such as by using a lossy compression algorithm or by subsampling the data. Lossy compression algorithms discard some of the machine learning data in order to reduce its size, while subsampling the data reduces the number of machine learning examples that are used for training.

#### Quantization

Quantization is a machine learning optimization technique that reduces the size of machine learning model parameters by replacing them with integer values. This is done by rounding the machine learning model parameters to the nearest integer value. The advantage of quantization is that it often leads to machine learning models that are more computationally efficient than their unquantized counterparts.

#### Weight Pruning

Weight pruning is a machine learning optimization technique that reduces the size of machine learning model parameters by removing some of their weights. This is done by setting machine learning model weights or activations to zero if they were determined to have no effect on machine learning model predictions. By removing machine learning model weights, machine learning models can be made smaller, which reduces the time that is needed to train them and the memory space that is required for storing them.

#### Knowledge Distillation

Knowledge distillation is a machine learning optimization technique that can be used to improve the performance of machine learning models. It is a two-step process: first, a more complex machine learning model is trained on a large dataset; second, the machine learning model is distilled into a simpler machine learning model that can be used to make predictions on smaller datasets. The advantage of knowledge distillation is that machine learning models that have been distilled on large datasets can be applied to smaller datasets without the need for retraining. In particular, knowledge distillation often gives rise to machine learning models with more accurate predictions than their complex counterparts before they were distilled.

### Hardware Acceleration

Machine learning is a field of artificial intelligence that focuses on teaching machines to behave in more human-like ways. Hardware acceleration is a term used to describe the use of specific hardware devices to improve the performance of a computer system. When it comes to machine learning, hardware acceleration can play a very important role in improving the performance and efficiency of the system.

The following content will focus on hardware acceleration for machine learning and how it can be leveraged by engineers who are working with this technology. The first section will provide an overview of hardware acceleration, detailing its history and defining what hardware accelerators really are before moving onto how they can help with machine learning specifically. This article should serve as an introductory guide into one particular aspect of machine learning that has hardware acceleration at its core.

A hardware accelerator, in this sense of the word, is an integrated circuit that is designed to perform a specific task more efficiently than would be possible on a general-purpose CPU. This is because hardware accelerators are custom-designed to carry out the necessary computations quickly and efficiently. What this means for hardware acceleration in machine learning specifically is that these hardware devices can improve both performance and efficiency of the system.

#### Graphics Processing Units

GPUs (graphical processing units) are hardware accelerators that are designed specifically for carrying out calculations related to computer graphics. These hardware devices offer significant improvements over traditional CPUs when it comes to machine learning because they are optimized for floating point arithmetic operations related to matrix manipulations which are common in machine learning algorithms. For this reason, GPUs are often used in machine learning for tasks such as training and inference.

#### Tensor Processing Units

Most recently, hardware accelerators known as TPUs (tensor processing units) have been produced by Google specifically to accelerate machine learning computations. These hardware devices were designed based on an understanding of the unique requirements of machine learning, and they offer a significant performance advantage over both CPUs and GPUs.

#### Neural Processing Units

Overall, hardware acceleration is an important tool that can be used to improve the performance and efficiency of machine learning systems. When it comes to GPUs specifically, they have been shown to be a particularly effective hardware accelerator for these types of systems. However, as the field of machine learning evolves, it is likely that other hardware devices will be produced that are specifically designed to meet the needs of this technology. To this end, we are seeing a rich flavor of different devices specialized as Neural Processing Units that cater for machine learning training and inference. In any case, hardware acceleration should be considered an important tool for anyone working with machine learning algorithms.

## ML Model Deployment

There are many factors that affect the accuracy and latency of machine learning models. Some of these factors are intrinsic to the machine learning algorithm, while others depend on the specific implementation or environment. In general, however, there are three main factors that influence the performance of machine learning algorithms:

The size and complexity of the data set
The complexity of the algorithm
Hyperparameters like number of layers, type of layers, activation function, etc.

## Conclusion

Machine Learning is an integral part of the future of Artificial Intelligence (AI), and will play a role in many emerging technologies, including self-driving cars, virtual assistants and smart appliances. Machine Learning Engineers are needed to help develop Machine learning algorithms that will allow these technologies to reach their full potential. To that end, we hope with the material you’ve learned in this course has sparked a deep interest in you to learn more about machine learning.

## Appendix

### Embedded Systems

In embedded systems, a microcontroller is a small computer on a single integrated circuit containing all the circuitry needed to control embedded devices. These embedded devices are usually embedded in other products such as appliances or vehicles and can take various forms from simple logic gates to microcomputers with input/output ports. The PICmicro for example is one of many examples of an embedded controller system that interfaces between your computer and peripheral hardware like printers, scanners, keyboards, mice, digital cameras etc. This type of device can be used to monitor environmental conditions or control industrial processes. The first programmable controllers were embedded systems designed in the 1960s by General Electric for use inside their washing machines and dryers which would sense when clothes had been washed sufficiently and then stop the machine.

Today embedded systems can be found in a vast array of products and appliances and embedded computers are used as the main computing unit for most modern household devices like microwaves, washing machines, dishwashers and even coffee makers. These embedded computers transmit information to the user through various forms of output such as digital displays and LED's. Embedded computers can also receive input from their surroundings such as buttons or switches on the outside of the device which allows users to control functions like time settings or temperature. There is an embedded computer inside your car to run all your vehicle controls such as turn signals, horn, speedometer etc; essentially giving you full control over your car without having to interface directly with its engine components.

Embedded systems can also perform complex calculations or data manipulation in order to monitor and control based on environmental conditions. An embedded system based around a digital signal processor (DSP) can be used to collect climate data for research, detect changes in factors like wind speed, humidity etc which can then be used to make predictions about the environment. The embedded computers within vehicles are using this type of technology for example to sense when parts are close to breaking or overheating. These embedded systems are crucial for the efficient function of our world today however embedded system development has historically been limited due to their size and required level of functionality.

But embedded computing is advancing rapidly! Thanks to recent developments in microelectronics, embedded systems can do more while being smaller than ever before. Systems on chip (SoC) technology has allowed embedded systems to be combined with RF, analog and digital circuitry onto a single chip which can then be embedded into other products. This has made product development easier and faster, as well as lowered production costs. With the ever-growing demand for embedded systems in all aspects of our lives, it's safe to say that embedded systems are critical to the functioning of the world around us!

### The History of Embedded Systems

Embedded systems have been in use for nearly as long as there have been electronic devices. One of the earliest examples is the vacuum tube controller which was used in WWII bombers like the B-17 Flying Fortress to help with navigation and bomb targeting. These embedded systems were essentially small computer that was embedded into the larger system to provide additional functionality.

In the early 1960s, General Electric developed the first embedded controllers for use in their washing machines and dryers. These controllers would sense when clothes had been washed sufficiently and then stop the machine. This was a ground-breaking development at the time as it showed the potential for embedded systems to control and interact with peripheral hardware.

The late 1960s saw a proliferation of embedded systems being used in all sorts of products. The Apollo 11 mission which put the first man on the moon employed embedded systems extensively in its guidance and control systems. In fact, embedded systems were so critical to the success of the mission that if one had failed, it's likely that the mission would have been aborted.

As embedded systems continued to proliferate, so did the need for standardization of how these systems interact with their surroundings. In 1981, a group of engineers gathered together to form the Embedded Systems Conventional (ESC). This organization aimed to develop and promote standards for embedded systems development. One of their most notable achievements was the development of the common embedded bus, which allows embedded systems to communicate with each other easily.

Embedded systems have come a long way since their early days and they continue to play a critical role in our world today. With advances in technology, embedded systems are becoming smaller and more powerful than ever before, making them an essential part of product development. As embedded systems become even more embedded in our daily lives, embedded systems development is expected to continue advancing rapidly!

Specific traditional examples of embedded systems include:

- digital watches/clocks
- microwaves
- cars
- routers
- embedded lighting control systems like those found in LED signs or airports
- embedded smart home appliances like voice assistants and networked door locks
- embedded industrial automation controllers like those found in assembly lines for cars

The list goes on! As long as it uses embedded technology, it counts as an embedded system. See the 'Further Reading' section for some good embedded technology articles that you can use as sources if needed. You don't have to limit yourself to these examples though! If you know about other embedded systems that do interesting things, put them in too :)

One thing you can mention is how new technologies are pushing embedded systems into new areas. For example, embedded systems are now being used in the development of autonomous vehicles. As embedded systems become more and more ubiquitous, their importance will only continue to grow!

### Further Reading

- [What is an embedded system](http://www.edn.com/electronics-blogs/digest/4427211/What-is-an-embedded-system)

- [An Embedded Systems Primer](https://www.cs.utah.edu/~gk/papers/embedded_primer.pdf)

- [The State of Embedded Systems Development](https://www.eetimes.com/document.asp?doc_id=133)

*We will continue updating / modifying this course series. All rights reserved by Seeed Studio and Prof. Vijay Janapa Reddi.*
