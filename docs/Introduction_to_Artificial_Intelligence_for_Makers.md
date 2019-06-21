**Word count:** 2000

**Reading time:** 30 minutes


**Audience:**

- A beginners guide to Artificial Intelligence (AI) for makers with no prior training in computer science.

**INDEX**

A quick overview of the sections of this article.

- 1.What is ‘Artificial Intelligence (AI)’ ?
- 2.Some interesting application of Artificial Intelligence (AI)
- 3.List of Artificial Intelligence (AI) products
- 4.Recommended books, courses and video tutorials

## Summary

AI is a hot topic nowadays, and relevant AI products sell well in our [online shop](https://www.seeedstudio.com/). But we find some of our customers:traditional hardware developers, often do not have a solid background in computer science. The purpose of this article to build interest and provide a general understanding for makers who want to start their deep learning journey. I will point some of the common use cases and potential pitfalls. Also at the end of this article,  I'll recommend some courses and books to learn more about this topic.

## 1. What is ‘Artificial Intelligence (AI)’?
AI is pervasive today. "Data Mining", "Artificial Intelligence", "Artificial Neural Network"… it gets pretty confusing ,huh?. Companies and computer scientists create thousands of new terms every year, but never explain to you ***what they actually are**.

According to Wikipedia:
 >Artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals.

 However, unless it is used as a rigorously academic terminology, we generally use this term to refer to the Artificial Neural Network. Because the explosive development of this technology in recent years has resulted in too many computing products and commercial publicity, gradually replacing the meaning of the term 'AI' itself. So now when businesses say "AI products", they generally refer to products used to speed up neural network operations.

Some advertisements and ‘tutorals' will show you picture like the following one, which reminds you of neurons in our brains. But in fact,  neurons are just a graceful analogy. The term Neural Networks' in computer science is a totally mathematical problem. And if you do not comprehend the algorithm, this picture means **nothing.**


![](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1554974523222.png)



So if you want to get into deep learning, the first thing you need do is to comprehend the mathematical principles behind the term. I do not want to explain the algorithm detailed today, what you should know is that Neural Networks models are distant relatives of a simple problem in your Algebra Class at Senior High School. In the last part of this passage. I'll recommend some courses and books for the novice learners.
Deep learning is a young experimental subject, and with regular updates every day. If you want to master it, the most important thing is to choose a topic or a real problem and read relevant research papers as much as possible.

## 2. Some interesting applications of Artificial Intelligence (AI)

### Computer Vision
Humans can identify any object by just gazing at it for few seconds, it's really easy for them. But for machines on the other hand, identification of an object was really complex task until Hinton and Alex Krizhevsky won the ImageNet competition in 2012.

Then Neural Network dominated Vision field, especially the problem of classification and segmentation, and the convolutional neural network is one of the most prominent approaches which won numerous competitions in recent years. It has outstanding results in image recognition.
Nvidia has built a lot of [Vision Demos](https://github.com/dusty-nv/jetson-inference) for Jetson Nano, and we have tested two of them for classification and face detection:
<iframe width="800" height="450" src="https://www.youtube.com/embed/U0rNdI9pl_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Art

**[Google Magenta](https://magenta.tensorflow.org/)** An open-source research project is exploring the role of machine learning as a tool in the creative process. This project group is known to the public because of AI-powered Doodle [Celebrating-Johann-Sebastian-Bach](https://www.google.com/doodles/celebrating-johann-sebastian-bach)
![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555056026898.png)

And here are some demo of the interaction:

[Magic Sketchpad](https://magic-sketchpad.glitch.me/) Every time you start drawing a doodle, Sketch RNN tries to finish it and match the category you’ve selected.

![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555059163496.png)

[Piano Genie](http://piano-genie.glitch.me/) Have some fun pretending you’re a piano virtuoso using machine learning.

![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555059135929.png)

[Latent Loops](https://goo.gl/magenta/latent-loops) Sketch melodies on a matrix tuned to different scales, explore a palette of generated melodic loops, and sequence longer compositions using them. Built by Google’s Pie Shop using

![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555059104497.png)




### IOT and Sensors

**Smart Parking** Parking a vehicle in dense traffic environments often leads to an excess time of driving in search of free space which leads to congestion and environmental pollution. Lack of guidance information to vacant parking spaces is one reason for inefficient parking behaviour. Smart parking sensors and technologies facilitate guidance of drivers to free parking spaces thereby improving parking efficiency. Currently, no such sensors or technologies are in use for the open parking lot. So there is still something to be done.
[Deep Learning for Decentralized Parking Lot Occupancy](https://github.com/fabiocarrara/deep-parking)

![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555055835602.png)

[**LSTMs for Human Activity Recognition**](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition)Human Activity recognition (HAR) is an important area of research in ubiquitous computing and Human-Computer Interaction. To recognize activities using mobile or wearable sensor, data are collected using appropriate sensors, segmented, needed features extracted and activities categories using discriminative models (SVM, HMM, MLP etc.). In this project, the developers used LSTM and outstandingly, the final accuracy is of 91% with the peak to values such as 93.25%.

![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555057001717.png)

### Natural Language Processing(NLP)

In the age of knowledge, Natural Language Processing (NLP) express its demand by a huge range of utilization. Previously NLP was dealing with statically data. Contemporary time NLP is doing considerably with the corpus, lexicon database, pattern reorganization. Considering Deep Learning (DL) method recognize artificial Neural Network (NN) to nonlinear process, NLP tools become increasingly accurate and efficient that begin a debacle.
[NLP-progress](https://github.com/sebastianruder/NLP-progress) This is a project aims to track the progress in Natural Language Processing (NLP) and give an overview of the state-of-the-art (SOTA) across the most common NLP tasks and their corresponding datasets.



#### Medicine

Artificial Intelligence is transforming the world of medicine. AI can help doctors make faster, more accurate diagnoses. It can predict the risk of a disease in time to prevent it. It can help researchers understand how genetic variations lead to disease. It enhances doctors’ ability to analyze medical images. It’s advancing the future of personalized medicine.
Currently, substantial efforts are developed for the enrichment of medical imaging applications using these algorithms to diagnose the errors in disease diagnostic systems which may result in extremely ambiguous medical treatments. Machine and deep learning algorithms are important ways in medical imaging to predict the symptoms of early disease. Deep learning techniques, in specific convolutional networks, have promptly developed a methodology of particular for investigating medical images. It carries consideration concerning the suite of these algorithms which can be used for the investigation of diseases and automatic decision-making.

[**Deep Learning Toolkit (DLTK) for Medical Imaging**](https://github.com/DLTK/DLTK)
DLTK is a neural networks toolkit written in python, on top of TensorFlow. It is developed to enable fast prototyping with a low entry threshold and ensure reproducibility in image analysis applications, with a particular focus on medical imaging. Its goal is to provide the community with state of the art methods and models and to accelerate research in this exciting field.
![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555056241911.png)


#### Others
[**LotteryPredict**](https://github.com/chengstone/LotteryPredict) This demo used lstm and TensorFlow to predict lottery.


## 3. List of Artificial Intelligence (AI) products
AI is pervasive today, from consumer to enterprise applications. Developers began to try to apply it to the embedded and robotic field, but the performance of traditional embedded development board is obviously insufficient. Multinational companies such as Intel, Nvidia, Google and Huawei have all launched their deep-learning products, of which Jetson Nano has received the most attention recently, which makes it possible to deploy medium-sized neural networks in embedded systems at affordable prices and ultra-low power consumption. Small companies such as Sipeed and Firefly, also launched their own products for specific subdivision field. Here are some examples.

[**NVIDIA Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-p-2916.html)
>The NVIDIA® Jetson Nano™ Developer Kit delivers the compute performance to run modern AI workloads at an unprecedented size, power, and cost. Developers, learners, and makers can now run AI frameworks and models for applications like image classification, object detection, segmentation, and speech processing.
>![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555050651109.png)


[**Google Coral Dev Board**](https://www.seeedstudio.com/Coral-Dev-Board-p-2900.html)
>The Coral Dev Board is a single-board computer with a removable system-on-module (SOM) that contains eMMC, SOC, wireless radios, and Google’s Edge TPU. It’s perfect for IoT devices and other embedded systems that demand fast on-device ML inferencing.
>![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555050567750.png)


[**Sipeed MAix Go Suit for RISC-V AI+IoT**](https://www.seeedstudio.com/Sipeed-MAix-GO-Suit-for-RISC-V-AI-IoT-p-2874.html)
>MAIX is Sipeed’s purpose-built module designed to run AI at the edge, we called it AIoT. It delivers high performance in a small physical and power footprint, enabling the deployment of high-accuracy AI at the edge, and the competitive price makes it possible embed to any IoT devices. As you see, Sipeed MAIX is quite like Google edge TPU, but it acts as the master controller, not an accelerator like edge TPU, so it is more low cost and low power than AP+edge TPU solution.!
>![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555051060453.png)


[**Intel Movidius MA245X AI Kit Compatible w/ Intel Movidius Stick**](https://www.seeedstudio.com/Intel-Movidius-MA245X-AI-Kit-Compatible-w-Intel-Movidius-Stick-p-3146.html)
>With Plug and AI in mind, Horned Sungem (HS) is dedicated to being the simplest and wieldiest AI device to allow all developers, students, AI hobbyist and enthusiasts to create their own AI applications with ease. Without any dependency on deep learning frameworks or complex libraries, your device will be ready to see and understand the world after you plug Horned Sungem into the USB port and run a short installation script.
>![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555050985486.png)



[**HiKey 970 Development Board**](https://www.seeedstudio.com/HiKey-970-Development-Board.html)
>Hikey970 is Super Edge AI Computing Platform Powered by Kirin970 SOC with 4 x Cortex A73,4 x Cortex A53. Hikey970 has 6GB LPDDR4 RAM, 64GB UFS storage, Gigabit Ethernet, GPS,PCIE Gen2 and CAN on board. As the world’s first dedicated NPU AI platform, Hikey970 integrates Huawei HiAI computing architecture and popular neural network frameworks which supports CPU, GPU AI and Neural Processing Unit dedicated to AI acceleration. Also, It also comes with Huawei’s HiAI SDK. Hikey 970 can be used in the most application in build Deep Learning, Robots, Automobile and Smart City.
>![Alt text](https://raw.githubusercontent.com/SeeedDocument/Introduction_to_Artificial_Intelligence_for_Maker/master/1555051309338.png)

## 4. Recommended books, courses and video tutorials

### Books

1. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/) This is one of the most friendly textbook of Neural Networks over the world without any annoying terms, and it's totally free and online. But the code in this book is a little bit over time, and if you are familiar with c++, you can just use them to comprehend the principle.
2. [Deep Learning with Python](https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438) This book was written for anyone who wishes to explore deep learning from scratch or broaden their understanding of deep learning. Whether you’re a practicing machine-learning engineer, a software developer, or a college student, you’ll find value in these pages.
3. [Python For Data Analysis](https://www.cin.ufpe.br/~embat/Python%20for%20Data%20Analysis.pdf)  Classic tutorial for Data Analysis, and it's not out of date yet.

### Courses

1. [Creative Applications of Deep Learning with TensorFlow](https://link.zhihu.com/?target=https://www.class-central.com/mooc/6679/kadenze-creative-applications-of-deep-learning-with-tensorflow) This course introduces you to deep learning: the state-of-the-art approach to building artificial intelligence algorithms.

2. [Stanford CS231n: Convolutional Neural Networks for Visual Recognition](https://link.zhihu.com/?target=http://cs231n.stanford.edu/) This course is a deep dive into details of the deep learning architectures with a focus on learning end-to-end models for these tasks, particularly image classification.

3. [UC Berkeley AI-Sys Spring 2019](https://ucbrise.github.io/cs294-ai-sys-sp19/) This course describes from the classic structure like AlexNet to the latest trends in systems designs to better support the next generation of AI applications, and applications of AI to optimize the architecture and the performance of systems. The most valuable part for students online is the Required Reading List it provided.

### Video tutorials

1. [ScaledML 2019](https://www.youtube.com/playlist?list=PLRM2gQVaW_wWXoUnSfZTxpgDmNaAS1RtG)
2. [A New Golden Age for Computer Architecture History, Challenges, and Opportunities.](https://www.youtube.com/watch?v=uyc_pDBJotI&t=767s)
3. [SysML 18: Perspectives and Challenges.](https://www.youtube.com/watch?v=4inIBmY8dQI&t=26s)
4. [RL Course by David Silver](https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLzuuYNsE1EZAXYR4FJ75jcJseBmo4KQ9-)
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>