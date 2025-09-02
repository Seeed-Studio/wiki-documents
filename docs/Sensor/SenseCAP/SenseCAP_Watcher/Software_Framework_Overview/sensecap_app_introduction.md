---
description: Delves into the customization options available for Watcher's appearance and explores the various tools provided by the SenseCraft platform.
title: SenseCraft APP Introduction
image: https://files.seeedstudio.com/wiki/watcher_getting_started/sensecraft_app.webp
slug: /sensecap_app_introduction
sidebar_position: 1
last_update:
  date: 10/18/2024
  author: Citric
---

# SenseCraft APP Guideline

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/30.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher's Video</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github Repository</font></span></strong>
    </a>
</div><br />

Welcome to the world of Watcher customization and SenseCraft tools! In this article, we'll dive into the exciting possibilities of personalizing your Watcher device and explore the powerful features offered by the SenseCraft APP. Whether you're a new user looking to give your Watcher a unique look or an experienced enthusiast seeking to unlock the full potential of your device, this guide will provide you with the knowledge and inspiration to make your Watcher truly your own. Get ready to embark on a creative journey as we uncover the secrets of Watcher expression design and SenseCraft APP settings.

## Watcher Bluetooth-based settings

This part of the setting must be available with Bluetooth enabled on both the device and the phone.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/31.png" style={{width:250, height:'auto'}}/></div>

### Wi-Fi

The Wi-Fi settings on your Watcher device allow you to connect to available wireless networks, enabling access to online services. This is particularly useful when you need to update your Watcher's firmware, sync data with the SenseCraft APP, or stream real-time monitoring data to the cloud.

To set up Wi-Fi on your Watcher, simply navigate to the Wi-Fi settings menu and scan for available networks. Select the desired network and enter the corresponding credentials (SSID and password) when prompted. Once connected, your Watcher will automatically reconnect to the saved network whenever it is in range, ensuring a stable and reliable connection.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/32.png" style={{width:700, height:'auto'}}/></div>

:::note
Note that Watcher only supports connection to 2.4GHz networks, not 5GHz.
:::

### Basic Settings

The Basic Settings menu on your Watcher device provides a range of options to customize your user experience. One of the key features is the ability to control the RGB LED on your Watcher. You can easily turn the RGB LED on or off, depending on your preference or the environment you're in. This can be useful when you want to conserve battery life or minimize visual distractions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/33.png" style={{width:250, height:'auto'}}/></div>

Sound settings are also accessible within the Basic Settings menu. Here, you can adjust the volume of your Watcher's audio output to suit your needs. Whether you prefer loud and clear notifications or a more subtle audio experience, you can fine-tune the sound settings to your liking.

Display brightness is another crucial aspect of your Watcher's user experience. The Basic Settings menu allows you to adjust the brightness of your Watcher's display, ensuring optimal visibility in various lighting conditions. By customizing the display brightness, you can make your Watcher easier to read in bright sunlight or dimmer in low-light situations, all while conserving battery life when needed.

Lastly, the Basic Settings menu enables you to set and manage your Watcher's date, time, and time zone. Accurate timekeeping is essential for proper data logging and synchronization with other devices and services. By setting the correct date, time, and time zone, you can ensure that your Watcher's monitoring data is accurately timestamped and aligned with your local time.

To access and modify these settings, simply navigate to the Basic Settings menu on your Watcher device and use the intuitive interface to make your desired changes.

### SenseCraft Remote Control

The SenseCraft Remote Control feature is a crucial setting that determines how your Watcher device communicates with the SenseCraft cloud services. When enabled, this feature establishes a connection channel between your Watcher and the SenseCraft cloud, allowing you to access a wide range of advanced features and services, such as cloud-based Large Language Models (LLMs) and remote notification capabilities.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/34.png" style={{width:250, height:'auto'}}/></div>

However, if you choose to disable the SenseCraft Remote Control feature, your Watcher will only communicate with your mobile device via Bluetooth. While this can be useful for local control and configuration, it also means that you will lose access to the powerful cloud-based services and remote notification capabilities. Additionally, if your Watcher moves out of Bluetooth range from your mobile device, you risk losing control of your Watcher altogether.

To manage the SenseCraft Remote Control setting, simply navigate to the corresponding menu on your Watcher device and toggle the feature on or off as desired. By carefully considering your needs and weighing the benefits of cloud connectivity, you can make an informed decision on how to configure this essential setting for your Watcher.

### HTTP Message Block

The HTTP Message Block feature in Watcher is a localized alarm service that operates alongside other alarm methods such as RGB alarms, APP alarms, and UART alarms. Its primary purpose is to provide users with a fully localized message pushing service, aimed at protecting user privacy. Unlike other alarm services that may rely on external platforms or servers, the HTTP Message Block is designed to work exclusively with the user's own HTTP endpoint, ensuring that all data and notifications remain within the user's local environment.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/83.png" style={{width:250, height:'auto'}}/></div><br />

To set up the HTTP Message Block, users need to configure two essential pieces of information: the **HTTP URL** and the **HTTP Token**. These details are provided either by your own HTTP server or by the locally deployed software, such as the [Watcher APP](https://wiki.seeedstudio.com/watcher_local_deploy/#software-preparation). If you choose to use your own HTTP server, ensure that it is set up correctly and provides the necessary URL and token. Alternatively, if you opt for the Watcher APP, the software will generate and manage these configuration details for you. By keeping the configuration data either on your own server or local to the Watcher APP, Watcher maintains a high level of privacy and security for its users, ensuring that sensitive information remains within your control.

:::caution
If you want to use completely local notification service without going through SenseCraft, then when you configure the message notification, please **don't** tick **APP Push Notification**, otherwise your notification will still go through SenseCraft and then pushed to your app. and remember to **tick the HTTP Push Notification option**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/84.jpg" style={{width:300, height:'auto'}}/></div>
:::

### Device AI Server

The Device AI Service in Watcher is a powerful feature that allows users to deploy AI capabilities directly on their local devices, such as PCs or high-performance machines like Jetson. To set up the Device AI Service, users need to provide the URL and the Watcher Service Token, which are displayed in the user interface of the accompanying Device AI Service software.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/82.png" style={{width:250, height:'auto'}}/></div>

Once configured, the Device AI Service enables Watcher to leverage the user's local computing resources for a variety of AI-powered functionalities, including voice interaction, task decomposition, image analysis, and chatbot services.

For users who value the flexibility and control of running AI services locally, the Device AI Service in Watcher offers a comprehensive and customizable solution. Detailed information on setting up and configuring the Device AI Service, along with in-depth explanations of each AI capability, can be found in the **[Deploy Watcher's AI capabilities locally](https://wiki.seeedstudio.com/watcher_local_deploy/)**.

:::caution
If you have previously clicked Private Watcher Service, then you will not be able to use SenseCraft's cloud service. When you suddenly find that you can't get messages from the cloud service, please check if **SenseCraft** is not selected.
:::

### Restore Device Setting

The Restore Device Setting feature allows you to reset your Watcher to its default factory settings, which can be useful when encountering an issue that cannot be resolved through other means or when you want to start fresh with a clean slate.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/35.png" style={{width:250, height:'auto'}}/></div>

However, it's crucial to exercise caution when using this feature, as all of your Watcher's settings, including customizations, historical alert records, and custom expressions, will be permanently lost. There is no built-in backup functionality, so once you initiate the restoration process, your previous settings and data cannot be recovered.

To access the Restore Device Setting feature, navigate to the corresponding menu on your Watcher device. Before confirming the restoration process, carefully consider whether resetting your Watcher to its factory defaults is absolutely necessary. If you proceed, your Watcher will be restored to its original state, ready for you to reconfigure and customize according to your needs.

:::tip
After Restore Device, you need to manually delete the corresponding device in the app and then add it again.
:::

## Other Settings

The following settings do not rely on a Bluetooth connection to the phone, just make sure that both the Watcher and the phone are connected to the Internet and that the SenseCraft Remote Control feature is turned on.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription2.png" style={{width:250, height:'auto'}}/></div>

### Device Name & Device Group

The Device Name & Device Group settings allow you to personalize your Watcher and organize multiple devices for easier management. By assigning a unique name to your Watcher, you can quickly identify it when connecting via Bluetooth or managing it through the SenseCraft APP. This is particularly helpful if you have multiple Watcher devices in your possession.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/37.png" style={{width:250, height:'auto'}}/></div>

Additionally, you can assign your Watcher to a specific Device Group, which is useful when managing a large number of devices for different purposes or locations. For example, you might create separate Device Groups for home, office, or outdoor monitoring. By grouping your Watcher devices logically, you can easily locate, configure, and control them based on their designated purpose or location.

### Subscription

By subscribing, you gain access to our advanced language model capabilities. Whether you want to analyze images or engage in intelligent conversations, our platform has you covered. Explore the full range of features and see how our technology can enhance your experience. Click to learn more!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price.png" style={{width:250, height:'auto'}}/></div>

### Check Update

The Check Update feature ensures that your Watcher is always running the latest firmware and software versions. By regularly checking for updates, you can access new features, performance improvements, bug fixes, and security enhancements as soon as they become available.

To check for updates, simply navigate to the Check Update menu on your Watcher device or within the SenseCraft APP. If an update is available, you will be prompted to download and install it. It is recommended to keep your Watcher updated to ensure optimal performance, stability, and security.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/57.png" style={{width:250, height:'auto'}}/></div>

:::tip
Some OTA versions may require Watcher users to force an update to continue using it. This may be due to fixing a major software bug or a service upgrade in the background.
:::

### Delete Detected History

The Delete Detected History feature allows you to clear the historical alert data stored within the SenseCraft APP. This can be useful when you want to declutter your alert history or maintain a more focused view of recent events.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/38.png" style={{width:250, height:'auto'}}/></div>

To delete the detected history, access the Delete Detected History menu within the SenseCraft APP. Before confirming the deletion, carefully review the implications, as this action is irreversible, and all historical alert data will be permanently erased from the APP.

### Delete Device

The Delete Device feature is used when you want to remove a Watcher device from your SenseCraft account or Bluetooth connections. This can be necessary when you no longer need to use a particular Watcher, when you want to transfer ownership of the device, or when you encounter persistent issues that require starting anew.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/39.png" style={{width:250, height:'auto'}}/></div>

To delete a device, locate the Delete Device option within the Watcher's settings or the SenseCraft APP. Before confirming the deletion, ensure that you have known this process is irreversible. Once you delete a device, it will no longer be associated with your account, and you will need to re-add it if you wish to use it again in the future.

:::note
After the app deletes the device and you want to rebind the device, you also need to do a Factory Reset in the device's settings.
:::

## Watcher Animation

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/44.png" style={{width:650, height:'auto'}}/></div>

The Watcher device offers a unique and engaging way to personalize your monitoring experience through custom animations. By uploading your own images, you can create bespoke expressions that reflect your style, convey specific messages, or simply add a touch of fun to your Watcher's status indicators.

### Creating Custom Animations

There are several ways to create custom animations for your Watcher, depending on your skills and preferences:

- **Using Animation Software**: If you're familiar with animation software like Adobe After Effects or Lottie, you can create your own animations from scratch. Design your animation with up to 5 frames, keeping in mind that each frame will be displayed for approximately 500ms. Once you've created your animation, select up to 5 key frames, take screenshots, and upload them using the SenseCraft APP.

- **Using Graphic Design Software**: If you prefer working with graphic design software like Figma or Adobe Illustrator, you can create a series of static images to form your animation. Design up to 5 frames, keeping in mind that each frame will be displayed for around 500ms. Export your designs as individual PNG images and upload them using the SenseCraft APP.

- **Using Existing GIFs**: If you find a GIF online that you'd like to use for your Watcher's custom animation, you can easily convert it into a series of PNG images. Use a free online tool like [EZGif](https://www.ezgif.com/split) to split your GIF into individual frames. Select up to 5 frames that best represent the animation you want to achieve, then upload these PNG images using the SenseCraft APP.

Regardless of the method you choose, each image should be in **PNG** format and have a resolution of **412x412** pixels to ensure optimal display quality on the Watcher's screen. When uploaded, these images will be combined to form a seamless animation, bringing your Watcher to life with your personalized expressions.

### Converting and Resizing Images

If your desired images are not already in the PNG format or don't meet the required 412x412 resolution, you can easily convert and resize them using various tools:

- **Adobe Photoshop**: Open your image in Photoshop, go to "Image" > "Image Size", set the width and height to 412 pixels (maintaining aspect ratio), and save the image as a PNG file.

- **GIMP**: Open your image in GIMP, navigate to "Image" > "Scale Image", enter 412 in both the width and height fields (maintaining aspect ratio), and export the image as a PNG file.

- **Online Tools**: Use websites like [Resize Image](https://www.resizeimage.net) or [CloudConvert](https://www.cloudconvert.com) to resize your images to 412x412 pixels and convert them to PNG format.

### Uploading Your Custom Animation

Once you have your series of PNG images ready, it's time to bring your custom animations to life on your Watcher. Connect your Watcher to the SenseCraft APP and navigate to the "Animation" page. Here, you'll find several Watcher states that allow for animation customization, including **Standby**, **Listening**, **Speaking**, **Watching Space**, and **Greeting**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/43.png" style={{width:250, height:'auto'}}/></div>

To replace the animations for the Watching Space or Greeting states, simply select the desired state and follow the prompts to upload your PNG images. Make sure to **upload the same number of images as shown in the examples** for each state to ensure a seamless animation experience.

:::caution
When uploading your custom animations, keep in mind that each image should be in **PNG** format and have a resolution of **412x412** pixels for optimal display quality on the Watcher's screen. Your uploaded images will replace the default animations for the selected Watcher states, allowing you to personalize your device's expressions and add a unique touch to your monitoring experience.
:::

## A Call to Designers: Let Your Creativity Shine

At SenseCraft, we believe that the power of creativity and collaboration can lead to incredible innovations. That's why we're inviting designers from all backgrounds to contribute their unique perspectives and skills to help expand the animation possibilities for the Watcher.

If you're a designer with a passion for creating engaging and expressive animations, we encourage you to take part in this exciting opportunity. By sharing your creative ideas and designs, you can help shape the future of the Watcher's animation capabilities and contribute to a more vibrant and personalized user experience.

Whether you specialize in character animation, motion graphics, or any other style, your expertise and imagination can make a significant impact. We welcome animations that convey a wide range of emotions, from joy and excitement to calm and contemplation, as well as designs that showcase the Watcher's unique capabilities and potential.

To participate, simply create your custom animations following the guidelines outlined above and share them with the SenseCraft community. You can upload your designs directly through the SenseCraft APP or share them on social media using the hashtag `#WatcherAnimations`. We can't wait to see the incredible ideas and designs that our talented community of designers will bring to life!

By working together and leveraging the power of collaboration, we can push the boundaries of what's possible with the Watcher's animation features. So let your creativity run wild, share your unique vision, and join us in shaping the future of Watcher animations. Together, we can create a more expressive, engaging, and personalized monitoring experience for Watcher users around the world.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/42.png" style={{width:250, height:'auto'}}/></div>

### Showcase and Inspiration

Discover a world of creativity and inspiration in our Watcher Animation Showcase! This is where we celebrate the incredible talent and imagination of our designer community, featuring some of the most stunning and innovative custom animations created for the Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/45.png" style={{width:1000, height:'auto'}}/></div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
