---
name: Google Assistant
category: Tutorial
bzurl: 
oldwikiname: 
prodimagename: 
bzprodimageurl: 
surveyurl: 
sku: 
tags: 
---

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Front.jpg)


This wiki is for ReSpeaker Core v2.0, we recommend you to read the [Wiki of ReSpeaker Core v2.0](http://wiki.seeedstudio.com/ReSpeaker_Core_v2.0/#preparation) first.

## Before the start

You need to make the following preparations:

- ReSpeaker Core v2.0 with the latest image
- Wi-Fi Network (make sure you can ping google with this network)
- PC or Mac
- One Micro-USB cables
- [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

We assume that you have read the [Preparetion](http://wiki.seeedstudio.com/ReSpeaker_Core_v2.0/#preparation) and set up the WiFi and Serial already. 

Now let's play 😃

## Geting Started

### Hardware

This part is simple and easy, just plug your ReSpeaker Core v2.0 into your computer via the `OTG` port.

### Software

#### Set Up Your Project

- **Step 1.Add your Project** 

Open the [link](https://console.actions.google.com/?pli=1) to add your project.

Note!!!
    If you do not have a google account, please sign in at google.com at first. 


Click `Add/Import project`

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_0.png)


Then tap your `Project name` and pick the `Country/region`. Then click `CREATE PROJECT` to continue.

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_1.png)


- **Step 2.Register Model** 


Click `Connected properties ->DEVICE MODELS ->REGISTER MODEL` as the picture below.

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_2.png)



Fill in your product info. then click `REGISTER MODEL` to continue.

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_3.png)



Just click `NEXT`

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_4.png)



Please make sure you have selected this option `ALL 7 traits`, so that you can turn on all the permissiions. Then click `SAVE TRAITS`.

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_5.png)



Now please click the Project Name you have just created. For this demo, as you can see, we use `ReSpeaker Core v2.0`.

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_6.png)



You will see some info. as the following picture shown.

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_7.png)


Please mark down the `Model Id` which is `respeaker-xxxx-respeaker-core-v2.0-xxxxx` in this demo, it is important and you will use it later.



Now let's download the json file. Click the button in the upper right corner, then click `Download credentials.json` to download the json file into your computer.

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_8.png)

Then use the [WinCP](https://winscp.net/eng/docs/lang:chs) or other transmission tools to copy the json file to your ReSpeaker Core v2.0. 
For example, we copy it to the path `/home/respeaker`.


Next, please click the gear in the upper left conner, click `Project settings`, remember the `Project ID` which is `` in this demo.
![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_9.png)
![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/Google_10.png)


Ok, let's check again, in this section you will get two IDs. 

The  Model ID `respeaker-xxxx-respeaker-core-v2.0-xxxxx`

The Project ID `respeaker-440eb`

They will be used later.


#### Enable the Google Assistant API

Enable the Google Assistant API on the project you selected (see the [Terms of Service](https://developers.google.com/assistant/sdk/terms-of-service)). You need to do this in the Cloud Platform Console.

Just click [Here](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview) to enable the Google Assistant API.


Ensure the following toggle switches are enabled (blue):

- `Web & App Activity`
- In addition, be sure to select the `Include Chrome browsing history and activity from websites and apps that use Google services` checkbox.
- `Device Information`
- `Voice & Audio Activity`



#### Install the SDK and Sample Code

You can refer ro [google doc](https://developers.google.com/assistant/sdk/guides/service/python/embed/install-sample) for more detail about this part.

You can do this part with python2.7 and python3, in this demo we use python2.7.

**For python2.7**

**Step 1.**

Tap the following command:
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install python-dev python-virtualenv
sudo virtualenv env --no-site-packages  
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate

```


**Step 2. Get the package**

The Google Assistant SDK package contains all the code required to get the Google Assistant running on the device, including the sample code.

Install the package's system dependencies:

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
Use pip to install the latest version of the Python package in the virtual environment:
sudo python -m pip install --upgrade google-assistant-sdk[samples]

```



**Step 3. Generate credentials**

Install or update the authorization tool:

```
sudo python -m pip install --upgrade google-auth-oauthlib[tool]==0.2
```

Make the target folder.

```
sudo mkdir –p /path/to/assistant-sdk/
```

Use the command below to copy `credentials.json` to the target location.

```
sudo cp /home/respeaker/credentials.json /path/to/assistant-sdk/ 
```

Tap the command below to get the token generate code.

```
google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \
          --save --headless --client-secrets /path/to/assistant-sdk/credentials.json

```

Note!!!
    By using the command above, Every time you get a different authorize code. Please make sure


Then you will get the code, please copy the code after the note `Please visit this URL to authorize this application:`.

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/code0.png)


Paste the code into your Internet browser, then tap the `Enter` key.

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/code1.png)


If everything goes well, the following window will pops up. Choose your Google account and select `ALLOW`

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/code2.png)
![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/code3.png)


Ok, then, you will get the authorize code as the following picture shown.


![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/code4.png)


Cope this code into your console
![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/code5.png)


Then you will see the notice `credentials saved: /path/to/.config/google-oauthlib-tool/credentials.json`. That means everything goes well so far.




#### Install Respeakerd

Tap the commands to install respeakerd

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
git clone https://github.com/respeaker/googleassistant_respeakerd
cd googleassistant_respeakerd
sudo python setup.py install
sudo cp script/io.respeaker.respeaker.conf /etc/dbus-1/system.d/
# set respeakerd to pulse mode
sudo vim /etc/respeaker/respeakerd.conf 
# reboot to make it work
sudo reboot
```


#### Activate the Google Assistant.

Remember the two IDs we marked before? Now it's time to use them. 

Change the command `googlesamples-assistant-respeakerd --project-id my-dev-project --device-model-id my-model` with your own IDs.


For the command above, change `my-dev-project` into your `project-id` and change `my-model` into your `Model ID`.

For this demo, it should be like

```
googlesamples-assistant-respeakerd --project-id respeaker-440eb --device-model-id respeaker-xxxx-respeaker-core-v2.0-xxxxx
```

Now, cheers!!!

![](https://github.com/SeeedDocument/Google-Assitant/raw/master/img/codel.png)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>