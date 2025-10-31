---
description: This article describes how to use the reTerminal E Series ePaper Display with TRMNL.
title: reTerminal E Series ePaper Display Works with TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sidebar_position: 1
last_update:
  date: 09/19/2025
  author: Citric
---

:::caution
Version 1.6.7 of TRMNL now officially supports the reTerminal E1001. Due to software architecture limitations, support for the reTerminal E1002 full-color e-ink display **is not** yet available.
:::

# reTerminal E Series ePaper Display Works with TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

## What is [TRMNL](https://trmnl.app/)?

TRMNL is an innovative platform designed to help people stay focused and calm in our increasingly distracting digital world. Founded in 2023, TRMNL has quickly become a leading solution for E Ink® dashboard management, offering a unique approach to displaying information without the constant notifications and distractions of traditional screens.

At its core, TRMNL is built on the philosophy that technology should enhance our lives without demanding constant attention. The platform provides an elegant way to view important information at a glance through E Ink® displays, creating a more mindful and less intrusive technological experience.

### Why use TRMNL?

The integration of TRMNL will bring several compelling benefits:

- **Simplified Dashboard Creation**: TRMNL's growing library of apps and integrations makes it easy to create custom information displays without complex programming
- **Low Power Consumption**: The combination of TRMNL's efficient software with our E Ink® display's minimal power requirements creates an extremely energy-efficient solution
- **Distraction-Free Information**: Get the information you need without the constant notifications and eye strain associated with traditional screens
- **Regular Updates**: TRMNL's active development means new features and integrations are added weekly, continuously expanding the possibilities for your display
- **Developer-Friendly**: With TRMNL's open API and developer tools, you can create custom plugins and integrations for your specific needs

By combining TRMNL's powerful platform with our high-quality E Ink® reTerminal E Series ePaper Display display, we're offering users an elegant solution for creating personalized, low-power information dashboards that respect both their attention and their time.

## Getting Started with TRMNL

### TRMNL Account Setup and TRMNL Access

Before connecting your kit to TRMNL, you'll need to:

1. **Purchase TRMNL Access**

   - Buy access to the TRMNL web app + device capabilities at: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - This provides you with the necessary credentials to use TRMNL's platform
   - Go to [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) to activate a virtual device (may take up to 10 minutes following purchase)

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Create a TRMNL Account**

   - Visit [TRMNL's website](https://usetrmnl.com)
   - Click on "Sign Up" to create a new account
   - Follow the registration process

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Your TRMNL credentials are sensitive information. Never share them publicly or commit them to version control systems.
:::

Once you have your materials and purchased TRMNL access, you can proceed with connecting your device to TRMNL's platform. If you encounter any issues or have questions, you can contact the TRMNL team directly at team@usetrmnl.com.

### Materials Required

Starting immediately. Please prepare any of the following reTerminal to complete the tutorial content afterwards.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Firmware Flashing

If you are still using the factory firmware for the reTerminal E Series, then you will need to burn the TRMNL firmware using the following method before you can plug the device into the TRMNL.

#### Method 1: Flash via TRMNL Web Flasher (Easiest)

:::tip
Please use **FW 1.6.7** or newer firmware for Seeed compatibility.
:::

1. **Go to the TRMNL Web Flasher**

   - Visit [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
   - This tool allows you to flash your device directly from your browser.
   - Follow the on-screen instructions to complete the flashing process.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/160.png" style={{width:700, height:'auto'}}/></div>

---

#### Method 2: Flash via Sensecraft HMI platform

1. Visit [Sensecraft HMI platform](https://sensecraft.seeed.cc/hmi/device)

2. Select your device

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/164.jpg" style={{width:700, height:'auto'}}/></div>

3. Select TRMNL firmware. If you want to flash HMI firmware, you can also select them. After that, click **Full Flash** and **Flash**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/162.jpg" style={{width:700, height:'auto'}}/></div>

4. Connect your device to computer and select serial port.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/163.jpg" style={{width:700, height:'auto'}}/></div>

5. If goes well, the screen will refresh and display TRMNL logo and MAC address. Now you can play with it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/165.jpeg" style={{width:700, height:'auto'}}/></div>

---

#### Method 3: Build and Flash from Source (For Advanced Users/Developers)

1. **Clone the Firmware Repository**

- Visit the [official firmware repository](https://github.com/usetrmnl/trmnl-firmware) and clone it:

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

There are times when we update our code and need to submit PR to TRMNL and review it before it is displayed, if you want to be the first to use the latest firmware version, you can also use the TRMNL repository under Seeed Project.

- Visit the [Seeed repository](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) and clone it:

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **Install PlatformIO**

   - Install [PlatformIO](https://platformio.org/) as a VSCode extension or via the command line.

3. **Open the Project**

   - Open the cloned `firmware` folder in VSCode.

4. **Select the Correct Environment**

- In `platformio.ini`,
  
  - If you are using reTerminal E1001, select the `seeed_reTerminal_E1001` environment.

  <!-- - If you are using reTerminal E1002, select the `seeed_reTerminal_E1002` environment. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

5. **Connect Your Device**

   - Plug in your reTerminal E Series ePaper Display device.

6. **Build and Upload**

   - In PlatformIO, click the "Upload" button, or run:

    ```
    pio run --target upload
    ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - The firmware will be compiled and uploaded to your device.

## Configure Wi-Fi and Send Playlists to TRMNL

To use your reTerminal E Series ePaper Display with TRMNL and send playlists, you first need to connect the device to your Wi-Fi network. This process is called "WiFi pairing mode" and is done through a simple captive portal. Please follow the steps below:

> 💡 **Troubleshooting Wi-Fi?** If you encounter issues connecting your device to Wi-Fi, please refer to the [TRMNL Device Wi-Fi Troubleshooting Guide](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) for solutions to common networking and router compatibility issues.

### Power On and Enter Provisioning Mode

- After flashing the TRMNL firmware and powering on your device, it will automatically enter provisioning mode if it is not yet connected to Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

### Connect to the TRMNL Wi-Fi

- On your **phone** or **computer**, open the list of available Wi-Fi networks.
- Look for a network named **TRMNL** and connect to it. (No password is required by default.)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Open the Captive Portal

- Once connected, open a web browser (such as Chrome or Edge).
- The device should automatically redirect you to the TRMNL configuration page. If it does not, manually visit [http://4.3.2.1](http://4.3.2.1) in your browser.

### Enter Your Wi-Fi Credentials

- On the configuration page, you will see a list of available Wi-Fi networks.
- **Select your 2.4GHz Wi-Fi network** (reTerminal E Series ePaper Display does not support 5GHz networks).
- Enter your Wi-Fi password.
- Click **Save** or **Connect**.

> ⚠️ **Important:** Make sure to use a 2.4GHz Wi-Fi network. 5GHz networks are not supported by the reTerminal E Series.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### Device Connects to Your Network

- The device will attempt to connect to your Wi-Fi.
- Once successful, it will disconnect from the TRMNL Wi-Fi and join your home network.
- The window will show the device's MAC address. **Please record the MAC address**, as you will need it in a later step.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Note:** The MAC address is only visible in the captive portal for 1-2 seconds. If you miss it, you can also:
>
> - Retrieve it from the VS Code > PlatformIO build/upload logs.
> - Use the [usetrmnl.com/flash](https://usetrmnl.com/flash) method and check the Chrome/Edge/Firefox developer console for the MAC address during flashing.
> - Find it in your router or Mesh network app's list of connected devices.
>
> For more details and screenshots, see the official guide: [Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### Access the TRMNL Web Interface

After your reTerminal E Series ePaper Display is connected to your Wi-Fi and you have recorded its MAC address (Device ID), you can add it to your TRMNL account:

1. **Open the TRMNL Web Interface**  
   - On your computer or mobile device, open a browser and go to the [TRMNL web interface](https://trmnl.app).

2. **Go to the Devices Page**  
   - In the TRMNL interface, navigate to the **Devices** section.

3. **Add a New Device**  
   - Click the **Add new device** button, which is usually found at the top right corner or in the center of the Devices page.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Enter Device ID**  
   - In the pop-up window, enter the Device ID you received when you purchased TRMNL access (this is not the MAC address). Use the Device ID from your purchase confirmation email or TRMNL dashboard.
   - Click **Add new device** to complete the process.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Register reTerminal E Series ePaper Display MAC Address**

   In order to build a connection between the reTerminal E Series ePaper Display and TRMNL, we need to bind the correct device MAC address inside the TRMNL settings page.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - You can retrieve the MAC address during the PlatformIO upload process (check the upload logs), or from the provisioning portal (it will be displayed after Wi-Fi setup).
   - Adding your MAC address early helps ensure a smooth onboarding process and device management.

   - Then you can set a custom name for your reTerminal E Series ePaper Display and adjust other settings as needed.

Your reTerminal E Series ePaper Display is now linked to your TRMNL account! You can now send playlists, images, or other content to your display directly from the TRMNL interface.

> 💡 **Tip:** If you have multiple reTerminal E Series, repeat the above steps for each device using their unique Device IDs.

:::caution
After adding your device in the TRMNL web interface, please go to the device's settings page and **turn off** both **Firmware Early Release** and **OTA Updates Enabled**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

If these options are left enabled, your device may automatically download and install firmware updates from TRMNL when connected to the internet. These updates are intended for official TRMNL hardware and **are not compatible with the reTerminal E Series**. Installing incompatible firmware may cause your device to malfunction or become unresponsive.

Always keep both options disabled to ensure stable operation of your reTerminal E Series.
:::

## Understanding the TRMNL Playlist Feature

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

The TRMNL Playlist feature allows you to control exactly what is displayed on your reTerminal E Series ePaper Display and when. Here's a breakdown of the main sections and controls, as shown in the screenshot above:

### Playlist Overview

- **Playlist Title**: At the top, you see the name of your TRMNL device (e.g., "MengDu's TRMNL").
- **Display Time Range**: You can set the time range for when the playlist is active (e.g., from 00:00 to 23:45).
- **Update Interval**: Choose how often the display updates (e.g., every 5 minutes).
- **Add a Group / Add a Plugin**: Use these buttons to organize your playlist into groups or add new content plugins (such as weather, calendar, or custom text).

### Playlist Items

Each row in the playlist represents a screen or widget that will be shown on your reTerminal E Series ePaper Display (for reference only):

1. **Weather**
   - Shows current weather information for your selected location.
   - The green "Displayed now" label indicates this screen is currently being shown on your device.
2. **Days Left This Year**
   - Displays a countdown of days remaining in the current year (e.g., "2025").
   - The label (e.g., "9 days ago") shows when this screen was last updated or displayed.
3. **Custom Text**
   - Lets you display any custom message (e.g., "Hello World").
   - Also shows when it was last updated.

For each item, you have several controls:

- **Settings (gear icon)**: Configure the plugin's options.
- **Delete (X icon)**: Remove the item from your playlist.
- **Preview (eye icon)**: Preview what the screen will look like.
- **Reorder (bars icon)**: Drag to change the order in which screens are displayed.

### Smart Playlist

- **Smart Playlist Option**: At the bottom, you can choose whether to automatically skip screens whose content hasn't changed (e.g., "Never skip screens").

> 📖 Want to learn more? Read the [Smart Playlists blog post](https://usetrmnl.com/blog/smart-playlists) for advanced tips and details.

This flexible playlist system lets you fully customize what your reTerminal E Series, how often it updates, and in what order. You can mix and match different plugins to create a personalized dashboard that fits your needs.

## Exploring TRMNL Plugins

TRMNL's plugin system is what makes your reTerminal E Series ePaper Display truly powerful and customizable. Plugins are modular apps or widgets that you can add to your device to display a wide variety of information and content.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### What are Plugins?

Plugins are individual content blocks that can show things like weather, calendar events, stock prices, RSS feeds, motivational quotes, GitHub activity, and much more. You can mix and match plugins to create a dashboard that fits your needs.

### Connected Plugins

At the top of the Plugins page, you'll see all the plugins you've already connected to your TRMNL account. These are ready to be added to your playlist and displayed on your reTerminal E Series. Examples include:

- **Weather**: Show current weather conditions.
- **Days Left This Year**: Countdown to the end of the year.
- **Stock Price**: Track your favorite stocks.
- **RSS Feed**: Display news or blog updates.
- **Reddit, Hacker News**: Show trending posts.
- **Language Learning, Motivational Quote, Custom Text**: Personalize your display with learning tools or custom messages.

### Plugin Marketplace

Below your connected plugins, you'll find the plugin marketplace. Here you can browse, search, and discover new plugins to add to your device. Plugins are organized by categories and tags (such as #productivity, #news, #ecommerce, etc.), making it easy to find what you need.

- **Browse & Search**: Use the search bar or tags to quickly find plugins that interest you.
- **Add Plugins**: Click on any plugin to connect it to your account and start using it in your playlist.

Developers can even create and publish their own plugins for others to use, making the ecosystem continually expand with new possibilities ([learn more about plugin creation](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)).

---

If you have any questions about using TRMNL or want to explore more advanced features, you are welcome to read the official TRMNL documentation for more information: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## Special Thanks

Special thanks to the entire **TRMNL team** for their strong support and invaluable help with this project. In particular, we would like to thank **Bogdan**, **Ryan Kulp**, **Fr3d** and all other team members for their dedication and assistance throughout the development and documentation process.

Your expertise and commitment have made this integration possible and greatly improved the user experience for the reTerminal E Series ePaper Display community.

## Troubleshooting

### How to reconfigure the network?

Press and hold the Green Button for five seconds. The device will return to the initial TRMNL interface and activate the AP.

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
