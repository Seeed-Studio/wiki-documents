---
description: Provides an in-depth look at the various applications and use cases for Watcher, showcasing its versatility and potential in different monitoring scenarios.
title: Use Case
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /use_case
sidebar_position: 1
last_update:
  date: 07/08/2024
  author: Citric
---

# What does SenseCAP Watcher do

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg" style={{width:800, height:'auto'}}/></div>

Prepare to embark on a journey that will redefine your perception of intelligent spaces. Watcher, a groundbreaking physical AI agent, seamlessly integrates into your environment, transforming the way you interact with and experience the world around you. By harnessing the power of advanced technologies like facial recognition, object detection, and multi-scenario sensing, Watcher creates smarter, more intuitive, and highly adaptable spaces.

In this wiki, we will explore three transformative applications that showcase the vast potential of Watcher as a physical AI agent. These applications will not only demonstrate Watcher's capabilities but also inspire you to envision and develop your own innovative solutions.

- **Watcher Application #1: Giving Directions to Visitors**: Witness how Watcher revolutionizes the visitor experience by serving as an intelligent guide. With its facial recognition capabilities, Watcher can identify visitors and provide them with personalized directions and assistance, enhancing the efficiency and accessibility of your space.

- **Watcher Application #2: The Virtual Cashier for Your Flower Shop**: Discover how Watcher can transform the retail landscape by acting as a virtual cashier in unmanned flower shops. By detecting when customers are ready to make a purchase, Watcher can promptly display QR codes for seamless self-checkout, ensuring a smooth and secure transaction process while optimizing store operations.

- **Watcher Application #3: Your All-In-One Sensor - Fall Detection, Pet Monitoring, and Lost Property Alert**: Unlock the versatility of Watcher as an all-in-one sensor solution. From detecting falls to monitoring pets and alerting you of lost property, Watcher adapts to various long-tail scenarios, creating safer, more secure, and highly responsive environments.

As you delve into these applications, you will gain a deeper understanding of how Watcher, as a physical AI agent, can reshape and optimize the spaces we inhabit. Whether you're an innovator, a business owner, or simply someone passionate about the future of technology, this wiki will equip you with the knowledge and inspiration needed to leverage Watcher's capabilities and create smarter, more adaptable spaces.

Join us on this transformative journey as we redefine the boundaries of intelligent environments with Watcher!


## Demo 1. Giving Directions to Visitors

In this application, we will explore how Watcher can be utilized to enhance the visitor experience, particularly in the context of guiding delivery personnel in a villa setting. By strategically placing two Watcher devices and configuring them with specific commands, we can create a seamless and efficient process for directing visitors and ensuring accurate package delivery.

### Step 1. Placement of the First Watcher

The first Watcher should be installed at the entrance of the villa, in a location that is easily visible to delivery personnel. This Watcher will serve as the initial point of contact, recognizing the presence of visitors carrying packages and providing them with clear instructions on where to deposit their deliveries.

### Step 2. Placement of the Second Watcher

The second Watcher should be positioned at the designated package storage area within the villa. This Watcher will be responsible for confirming the accurate placement of the packages and expressing gratitude to the delivery personnel for their service.

### Step 3. Configuring Commands for the First Watcher

Using the SenseCraft APP, issue the following command to the first Watcher:

**If someone is holding a parcel, please say, "Hello, courier parcels please take them to the table on the right, 3 metres straight ahead, thank you."**

This command ensures that the Watcher provides clear and concise directions to the delivery personnel, guiding them to the appropriate package storage area.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/51.png" style={{width:600, height:'auto'}}/></div>

### Step 4. Configuring Commands for the Second Watcher

Using the SenseCraft APP, issue the following command to the second Watcher:

**If someone puts a parcel on the table, say "thank you".**

This command enables the second Watcher to acknowledge the successful placement of the package and express appreciation to the delivery personnel for their effort.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/52.png" style={{width:600, height:'auto'}}/></div>

Watcher Application #1 demonstrates how the strategic deployment of Watcher devices, combined with carefully crafted commands, can significantly enhance the visitor experience and streamline the package delivery process in a villa setting.

This application serves as a testament to the versatility and potential of Watcher as a physical AI agent, showcasing its ability to transform and optimize various aspects of our daily lives and interactions within intelligent spaces.

## Demo 2. The Virtual Cashier for Your Flower Shop

In this application, we will explore how Watcher can revolutionize the shopping experience in a flower shop by acting as a virtual cashier. By leveraging Watcher's object detection capabilities and the SenseCraft APP, we can create a seamless and efficient self-checkout process, enhancing customer experience and streamlining store operations.

### Step 1. Generating a Payment QR Code

Begin by generating a payment QR code using a platform like PayPal or other preferred payment providers. This QR code will serve as the key element in the self-checkout process, allowing customers to easily make payments for their flower purchases.

### Step 2. Uploading the QR Code to Watcher via SenseCraft APP

Access the SenseCraft APP and navigate to the **Animation** section. Locate the **Watching Space** and replace the existing animation with the generated payment QR code. This step ensures that Watcher will display the QR code when triggered, enabling a smooth self-checkout process.

### Step 3. Mounting Watcher on a Tripod

To ensure optimal performance and stability, mount Watcher on a tripod using a 1/4 Thread Tripod Bracket. This setup allows for easy adjustment of Watcher's position and angle, ensuring clear visibility of the checkout area.

### Step 4. Positioning Watcher at the Checkout Counter

Place the tripod-mounted Watcher at the checkout counter, facing the area where customers are expected to approach for payment. Ensure that Watcher has a clear view of the counter and can easily detect customers holding flowers.

### Step 5. Configuring Watcher's Task through SenseCraft APP

Using the SenseCraft APP, issue the following command to Watcher:

**When you detect a person holding flowers and facing you, say "Please scan the QR code to complete your purchase."**

This command instructs Watcher to monitor for customers holding flowers, display the uploaded payment QR code, and prompt them to initiate the self-checkout process by scanning the code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/53.png" style={{width:600, height:'auto'}}/></div>

### Step 6. Implementing the Self-Checkout Process

Upon detecting a customer holding flowers, Watcher will automatically display the payment QR code and trigger the pre-configured voice prompt, guiding the customer to scan the code for payment.

Once the customer scans the QR code, they will be directed to a mobile payment interface where they can complete the transaction using their preferred payment method.


Watcher Application #2 showcases the transformative potential of Watcher as a virtual cashier in a flower shop setting. By combining Watcher's object detection capabilities with the SenseCraft APP, flower shop owners can create a seamless and efficient self-checkout experience, enhancing customer satisfaction and optimizing store operations.

This application demonstrates Watcher's versatility and adaptability, highlighting its potential to revolutionize various retail environments. As a physical AI agent, Watcher can be customized and configured to meet the specific needs of different businesses, driving innovation and improving the overall shopping experience.

## Demo 3. Your All-In-One Sensor -- fall detection, pet monitoring and lost property alert

In this application, we will explore the versatility and adaptability of Watcher as an all-in-one sensor solution, capable of handling a wide range of long-tail scenarios. By strategically placing multiple Watcher devices in different locations and configuring them to address specific situations, we can demonstrate Watcher's potential to enhance safety, security, and convenience in various settings.

### Scenario 1: Lost Property Alert in the Conference Room

Step 1: Mount the first Watcher on the conference room wall using a 360° Rotate Bracket, ensuring optimal coverage of the entire room.

Step 2: Using the SenseCraft APP, issue the following command to Watcher:

**When you detect that the conference room is empty and there is a computer on the table, send a notification to the app.**

This task enables Watcher to monitor the conference room and alert users through the app if any valuable property, such as a computer, is left unattended.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/54.png" style={{width:600, height:'auto'}}/></div>

### Scenario 2: Pet Monitoring and Deterrence

Step 1: Install the second Watcher on a tripod using a 1/4 Thread Tripod Bracket, and position it near a vase or any area where cats are prone to cause damage.

Step 2: Configure the following task using the SenseCraft APP:

**If you detect a cat, play the audio message "Danger, please stay away"**

to deter the cat from approaching.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/55.png" style={{width:600, height:'auto'}}/></div>

Step 3: Adjust Watcher's volume to the highest setting to effectively startle and discourage the cat from entering the restricted area.

### Scenario 3: Fall Detection at Parents' Home

Step 1: Install the third Watcher on the wall at the parents' home, ensuring it has a clear view of the main living areas.

Step 2: Assign the following task through the SenseCraft APP:

**If you detect a person lying on the ground, please notify me immediately.**

This setup allows Watcher to monitor for potential falls or accidents and promptly alert the user, ensuring quick response and assistance when needed.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/56.png" style={{width:600, height:'auto'}}/></div>

Watcher Application #3 showcases the incredible versatility and adaptability of Watcher as an all-in-one sensor solution. By addressing a wide range of long-tail scenarios, such as fall detection, pet monitoring, and lost property alerts, Watcher demonstrates its potential to revolutionize safety, security, and convenience in various settings.

This application highlights Watcher's ability to be customized and configured to meet specific needs, making it an invaluable tool for individuals, families, and businesses alike. As a physical AI agent, Watcher seamlessly integrates into different environments, providing proactive monitoring, real-time alerts, and peace of mind to its users.

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

