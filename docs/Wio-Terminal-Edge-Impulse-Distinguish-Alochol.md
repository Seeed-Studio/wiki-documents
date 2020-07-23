# Using Wio Terminal with Edge Impulse to Distinguish Alcohol

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"/></div>

In this wiki, we will introduce how to use [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) with [**Edge Impulse**](http://edgeimpulse.com/) to simply deploy a machine learning project. Wio Terminal with the [**Grove systems**](https://www.seeedstudio.com/tag/Grove.heml) can be very powerful, which brings hundreds of sensor data in for analysis and to possible evaluate different scenarios!

This is a project inspired by [Benjamin Cabé's Artificial nose project](https://twitter.com/kartben/status/1258791793073815552). With this wiki, you will get a understanding of the workflow of Edge Impulse using Wio Terminal.

## Hardware Required

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Grove - Multichannel Gas Sensor v2**](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)

- Some Alcohol

## Get Started

Let's work you through the workflow of Edge Impulse with Wio Terminal.

### 1. Preparations

First, you will need to follow the [**Wio Terminal Edge Impulse Get Started**](http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse) to upload the Edge Impulse firmware to the Wio Terminal.

Once you have the Edge Impulse Firmware, connect Wio Terminal to your PC and run the Edge Impulse serial tool to establish connections. Run the following in your Terminal:

```sh
edge-impulse-daemon
```

!!!Note
        Login your Edge Impulse account. You also need to name your device.

Terminal should look something like this:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/EI-serial.png"/></div>

Now, navigate to [**Edge Impulse homepage**](https://studio.edgeimpulse.com/studio/4578/devices) and login the same account. Navigate to **Devices** and you should see the device:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/device.png"/></div>

Now your Wio Terminal is all set and ready to collect data!

### 2. Collecting Data

Connect the **Grove - Multichannel Gas Sensor v2 to Wio Terminal's Grove I2C port**. Place the Grove - Multichannel Gas Sensor v2 onto the alcohol that you are going to test, in my case it's Beer first.

One thing to be pointed here, the **Grove - Multichannel Gas Sensor v2 can be affected by the surrounding easily, you may want to use a cover to make sure it's sensing the only test content**.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.jpg"/></div>

On the **Edge Impulse dashboard**, navigate to **Data acquisition**, choose your device, and name your **Label**. As it implies, the label should name according to your test content so here will also be **Beer**.

**Sample length (ms.)** will be the length of your sampling time in ms, **Sensor** choose **External multichannel gas** and **Frequency** choose **100Hz**.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/Beer.png"/></div>

Click **Start Sampling** and it will start to collect data, which the terminal should look something like this:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/sending.png"/></div>

In my test, I have obtained Beer data for **10s** for **6 time** and each time they have similar results. You will need to have data sets are fairy similar to each other.

!!!Note
    If you have data fluctuating a lot and this may caused by the surrounding.

Once you have enough data for one label you can do the exact same step for other labels! In my test, I have two more data sets Maotai and Liqueur:

- **Maotai data set:**

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/Maotai.png"/></div>

- **Liqueur data set:**

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/Liqueur.png"/></div>

You should see that different alcohol will have different gas values which makes it perfect for machine learning! To add more, it is always better to have more data for it to be trained later, and so please feel free to collect more data!

!!!Note
    Feel free to do more categories of alcohol!

### 3. Designing Impulse

Next up, we will need to design the impulse by clicking **Impulse Design** -> **Create Impulse**. An impulse takes raw data, uses signal processing to extract features, and then uses a learning block to classify new data. In this example, I added a processing block of **raw data** with all the input axis and added a **Neural Network (Keras)** learning block as followed:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/impulse.png"/></div>

Click **Save Impulse** and under Impulse design click **Raw data** and you should see the raw features of the data sets:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/features.png"/></div>

Click **Save parameters** then it will navigate to another page. Click **Generate Features**.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/generate.png"/></div>

This will generate features from the previous data sets and you will see a graph on the right. If data sets are separated with each other meaning that the data sets are unique to each other which makes it better for machine learning the differences.

### 4. Training Data

Under **Impulse Design**, click **NN Classifier** to configure settings for Neural Network, the following are my settings:

<div align=center><img width = 400 src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/NN.png"/></div>

You may want to adjust these settings according to your needs and configure your **Neural network architecture**, then click **Start training**! This will perform the training and may take a while.

Once trained, you will see a table of training performance. If your data sets are unique to each other you should get pretty good results! Here is my performance:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/perf.png"/></div>

From this, you can see that the accuracy is not bad, this is because there is only 3 cases. You may want to add more cases/tests to this example.

### 5. Live Classification

Now we have the model trained, we can test the model with new data. Navigate to **Live classification**, and sample new sets of data for testing.

- Testing Example 1:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/result-1.png"/></div>

- Testing Example 2:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/result-2.png"/></div>

As we can see from the results, this is pretty good results where you are able to distinguish alcohol using the Grove - Multichannel Gas Sensor v2 with the help of Edge Impulse!

## Further Development

**For now, implementing the model back into Wio Terminal as a library is still being developed**. It will be released very soon, and then you can detect alcohol 'offline' with the trained model loaded onto Wio Terminal!

## Resources

- [Benjamin Cabé's Artificial nose project](https://twitter.com/kartben/status/1258791793073815552)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>