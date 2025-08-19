---
description: Introduces the use of Web, a feature under the SenseCraft HMI platform.
title: Web Function
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft_hmi_web
sidebar_position: 7
last_update:
  date: 07/21/2025
  author: Citric
---

# Using Web Function in SenseCraft HMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/88.jpg" style={{width:800, height:'auto'}}/></div>

## Introduction

The Web function in [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) allows you to display web content directly on your screen-based devices. This powerful feature transforms your device into a dedicated web display, capable of showing dashboards, monitoring systems, documentation, or any web content you need. Unlike traditional browsers, SenseCraft HMI's Web function is optimized for embedded displays and IoT devices, making it perfect for creating information kiosks, status monitors, or dedicated web interfaces.

This tutorial will guide you through using the Web function in SenseCraft HMI, covering setup, preview, and deployment of web content to your device.

This article will use the [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) as an example to explain how to use this feature on the SenseCraft HMI platform.

## Getting Started with Web Function

### Accessing the Web Function

Step 1. Navigate to the SenseCraft HMI platform below.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

Step 2. Connect your device or select an already paired device to use.

Step 3. Click on the "Web" tab in the left sidebar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/83.png" style={{width:1000, height:'auto'}}/></div>

### Understanding the Web Interface

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/82.png" style={{width:1000, height:'auto'}}/></div>

The Web interface consists of three main sections:

1. **URL Configuration Panel**: Located on the right side, where you can enter web addresses

2. **Display Area**: The main section where web content will be displayed after preview or deployment

3. **Control Buttons**: Located at the top, including Preview, Save, and Deploy options

When first accessing the Web function, the display area will be empty until you configure and preview a web page.

## Configuring Web Content

### Adding a Web Page

Step 1. Locate the Web Configuration panel on the right side of the screen

Step 2. Find the "URL" input field

Step 3. Enter a valid web address in the field (e.g., https://weather.gov/)

:::tip
Make sure to include the complete URL including the https:// or http:// prefix.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/84.png" style={{width:1000, height:'auto'}}/></div>

Step 4. Click the "Set" button to validate the URL

### Previewing Web Content

Unlike other functions in SenseCraft HMI, the Web function requires an explicit preview step to display content:

Step 1. After entering and setting a URL, click the "Preview" button in the top toolbar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/86.png" style={{width:1000, height:'auto'}}/></div>

Step 2. Wait for the web page to load in the display area

Step 3. Check if the web content displays correctly and is appropriate for your device's screen size

:::note
The preview step is crucial as it allows you to verify that the web content will display properly on your device before deployment.
:::

### Saving and Deploying Web Content

Once you've previewed and confirmed the web content looks good:

Step 1. Click the "Save" button to store your web configuration

Step 2. Click "Deploy" to send the configuration to your connected device

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/87.png" style={{width:1000, height:'auto'}}/></div>

Step 3. Wait for the deployment confirmation message

After successful deployment, your device will display the configured web page.

## Optimizing Web Content for Devices

Not all websites are designed for small displays or embedded devices. Here are tips for selecting and optimizing web content:

### Selecting Web-Friendly Content

1. **Choose mobile-responsive websites**:

  - Sites designed for mobile devices will typically display better on smaller screens

  - Look for sites with adaptive layouts that work well at your device's resolution

2. **Consider simple, lightweight pages**:

  - Complex websites with heavy JavaScript may load slowly or consume more resources

  - Static pages typically perform better than dynamic web applications

3. **Avoid sites requiring authentication**:

  - Login sessions may expire, requiring manual intervention

  - Some authentication methods may not work well on embedded devices

### Recommended Web Content Types

Here are some web content types that work particularly well with SenseCraft HMI's Web function:

1. **Weather dashboards**:

  - [Weather.gov](https://weather.gov)

  - [Windy.com](https://www.windy.com/)

  - [AccuWeather](https://www.accuweather.com/)

2. **Monitoring dashboards**:

  - Grafana dashboards

  - Home automation control panels

  - System status pages

3. **Information displays**:

  - Transit schedules

  - Flight information

  - Meeting room availability

4. **Documentation or reference**:

  - Local wikis

  - Procedure guides

  - Quick reference information

## Creating Custom Web Content

For the best experience, consider creating custom web pages specifically designed for your device's display:

### Simple HTML Pages

You can create basic HTML pages optimized for your device's resolution. Here's a simple example:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Device Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            font-size: 18px;
        }
        .container {
            padding: 15px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .info-box {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">Device Status</div>
        <div class="info-box">Temperature: 22.5°C</div>
        <div class="info-box">Humidity: 45%</div>
        <div class="info-box">Battery: 87%</div>
    </div>
</body>
</html>
```

### Hosting Options for Custom Pages

To display custom web content, you'll need to host it somewhere accessible to your device:

1. **Local network server**:

  - Set up a simple web server on your local network

  - Use tools like XAMPP, NGINX, or a Raspberry Pi running a web server

2. **Free static hosting services**:

  - [GitHub Pages](https://pages.github.com/)

  - [Netlify](https://www.netlify.com/)

  - [Vercel](https://vercel.com/)

3. **Cloud services with free tiers**:

  - [Firebase Hosting](https://firebase.google.com/products/hosting)
   
  - [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

## Special Use Cases

### Displaying Local Network Resources

The Web function can be used to display resources on your local network:

1. **Home automation dashboards**:

  - Home Assistant: `http://homeassistant.local:8123`

  - OpenHAB: `http://openhab.local:8080`

2. **Network monitoring tools**:

  - Router admin panels

  - Network monitoring dashboards

3. **Local media servers**:

  - Plex status page

  - NAS web interfaces

:::warning
For security reasons, be cautious when displaying administrative interfaces on publicly visible devices.
:::

### Automatic Page Rotation

If you want to display multiple web pages in rotation:

1. Create a simple HTML page with JavaScript to cycle through URLs:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Rotator</title>
    <style>
        body, html, iframe {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            border: none;
            overflow: hidden;
        }
    </style>
    <script>
        // Array of URLs to rotate through
        const urls = [
            'https://weather.gov',
            'https://example.com/dashboard',
            'https://example.com/calendar'
        ];
        
        let currentIndex = 0;
        
        function rotatePages() {
            document.getElementById('display-frame').src = urls[currentIndex];
            currentIndex = (currentIndex + 1) % urls.length;
            setTimeout(rotatePages, 30000); // Change page every 30 seconds
        }
        
        window.onload = rotatePages;
    </script>
</head>
<body>
    <iframe id="display-frame" src="about:blank"></iframe>
</body>
</html>
```

2. Host this page using one of the methods mentioned above

3. Enter the URL of this rotator page in SenseCraft HMI's Web function

## Troubleshooting

### Common Web Display Issues and Solutions

1. **Web page doesn't load**:

  - Verify the URL is correct and includes the http:// or https:// prefix. Sometimes obviously entered the correct URL, but still can not preview, you can try to add “/” at the end of the URL, there may be a miraculous effect.

  - Check if the page is accessible by testing in a regular browser

  - Ensure your device has internet connectivity

  - Some websites may block embedding or have security restrictions

2. **Content displays incorrectly**:

  - The website may not be optimized for your device's screen size

  - Try a mobile-specific version of the site if available

  - Consider creating a custom page specifically for your display dimensions

3. **Performance issues**:

  - Complex websites with animations or heavy JavaScript may run slowly

  - Try simpler pages or custom-built alternatives

  - Some websites may use more memory than your device can handle

4. **Deployment fails**:

  - Ensure your device is properly connected to SenseCraft HMI
   
  - Check your device's internet connection
  
  - Restart your device and try deploying again

5. **Content needs frequent refresh**:

  - Some dynamic content may not auto-update
  
  - Consider setting a refresh interval in a custom page, or
  
  - Periodically redeploy the configuration

## Best Practices

### Security Considerations

When using the Web function, keep these security considerations in mind:

1. **Avoid sensitive information**:

  - Don't display pages containing personal or confidential information on publicly visible devices
  
  - Be cautious with admin panels or control interfaces

2. **Use HTTPS when possible**:

  - Prefer secure (https://) URLs over non-secure (http://) ones
  
  - This helps protect the data transmitted to your device

3. **Consider network isolation**:

  - For displays showing internal resources, consider using a separate network
  
  - Use firewall rules to limit what your device can access

### Maintenance Tips

To keep your web displays running smoothly:

1. **Periodic checks**:

  - Regularly verify that the displayed content is still working correctly

  - Websites can change their layouts or URLs without notice

2. **Update bookmarks**:

  - Keep a list of useful URLs for your displays

  - Test alternatives in case your preferred sites change

3. **Create backups**:

  - For critical displays, create and host backup pages that can be quickly deployed

  - This ensures continuity if a primary web resource becomes unavailable

## Conclusion

The Web function in SenseCraft HMI provides a flexible way to display web content on your screen-based devices. By following this guide, you can configure, preview, and deploy web pages to create information displays, dashboards, or reference screens tailored to your needs.

Remember that not all web content is suited for small displays or embedded devices. For the best experience, consider using mobile-responsive websites or creating custom web pages specifically designed for your device's dimensions and capabilities.

## Resources

- [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi)
- [Compatible Devices - reTerminal E10xx](https://wiki.seeedstudio.com/reterminal_e10xx_main_page/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
