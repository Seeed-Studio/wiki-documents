---
description: Introduces the use of Canvas, a feature under the SenseCraft HMI platform.
title: Canvas Function
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft_hmi_canvas
sidebar_position: 4
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using Canvas in SenseCraft HMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/98.jpg" style={{width:800, height:'auto'}}/></div>

## Introduction

The Canvas function in [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) is the most powerful and flexible feature of the platform, allowing you to create custom interfaces, dashboards, and data visualizations. With Canvas, you can design beautiful displays that combine static elements with dynamic data from various sources, including device sensors, weather information, stock data, and more.

This comprehensive guide will walk you through using the Canvas function to create professional displays for your Seeed devices. From basic shapes and text to real-time data widgets and pre-made templates, you'll learn everything you need to build customized interfaces that meet your specific needs.

This article will use the [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) as an example to explain how to use this feature on the SenseCraft HMI platform.

## Getting Started with Canvas

### Accessing the Canvas Function

Step 1. Navigate to the SenseCraft HMI platform below.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

Step 2. Connect your device or select an already paired device to use.

Step 3. Click on the "Canvas" tab in the left sidebar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/89.png" style={{width:1000, height:'auto'}}/></div>

### Understanding the Canvas Interface

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/90.png" style={{width:1000, height:'auto'}}/></div>

The Canvas interface consists of several key sections:

1. **Component Sidebar**: Left panel containing all available elements categorized into Basic, Device, Data, and Templates

2. **Canvas Area**: Central workspace where you design your interface

3. **Toolbar**: Top bar with design tools, settings, and formatting options

4. **Property Panel**: Appears when elements are selected, allowing customization of appearance and behavior

5. **Action Buttons**: Save, Preview, and Deploy buttons for testing and applying your design

## Basic Components

The Basic section provides fundamental elements for creating your interface layout:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/91.png" style={{width:1000, height:'auto'}}/></div>

### Text

The Text component allows you to add labels, titles, and other text content to your canvas.

Step 1. Click on the "Text" component in the Basic section. The text is then automatically placed in the center of the canvas

Step 2. Drag the text to the area where you want to place it

Step 3. A default text box appears with the word "Text"

Step 4. Use the properties panel to customize:

  - Font size (default is 30px)

  - Text style (bold, italic, underline)

  - Alignment (left, center, right)

  - Color

  - Font family

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/92.png" style={{width:1000, height:'auto'}}/></div>

#### Making Text Dynamic

You can also configure text to display dynamic data:

Step 1. Select your text element

Step 2. Click the dynamic data link icon in the toolbar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/93.png" style={{width:1000, height:'auto'}}/></div>

Step 3. In the Dynamic Data Settings panel:

  - Switch from "Static" to "Dynamic"

  - Enter the data key path (e.g., "data.custom")

  - Configure formatting options

:::tip
This feature is a Developer Premium feature and is not recommended if you don't know what it is.
:::

### Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/94.png" style={{width:1000, height:'auto'}}/></div>

The Image component lets you add pictures to your canvas.

Step 1. Click on the "Image" component

Step 2. In the properties panel, click "Upload" to add your image or enter an image URL

Step 3. Adjust the size and position as needed

### Shapes

SenseCraft HMI Canvas offers various shape components:

- **Rectangle**: Creates a standard rectangle or square

- **Round Rectangle**: Creates a rectangle with rounded corners

- **Circle**: Creates a perfect circle

- **Ellipse**: Creates an oval shape

- **Triangle**: Creates a three-sided shape

- **Polygon**: Creates multi-sided shapes

- **Line**: Creates straight lines

- **Drawing**: Enables freehand drawing

For each shape:

Step 1. Click on the desired shape component

Step 2. Click and drag on the canvas to determine the final placement

Step 3. Use the properties panel to customize:

  - Fill color

  - Border color and width

  - Opacity

  - Corner radius (for rectangles)

  - Other shape-specific properties

## Device Components

The Device section contains components that automatically display data from your connected Seeed reTerminal E10xx series device sensors:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/95.png" style={{width:400, height:'auto'}}/></div>

<Tabs>
<TabItem value="Battery" label="Battery" default>

The Battery component displays the current battery level of your connected device.

Step 1. Click on the "Battery" component

Step 2. The component will automatically show the battery percentage of your device

Step 3. Use the properties panel to customize:

  - Font size (default is 30px)

  - Text style (bold, italic, underline)

  - Alignment (left, center, right)

  - Color

  - Font family

</TabItem>
<TabItem value="Temperature" label="Temperature">

The Temperature component displays the current temperature reading from your device's sensor.

Step 1. Click on the "Temperature" component

Step 2. The component will automatically show the temperature reading from your device

Step 3. Use the properties panel to customize:

  - Font size (default is 30px)

  - Text style (bold, italic, underline)

  - Alignment (left, center, right)

  - Color

  - Font family

</TabItem>
<TabItem value="Humidity" label="Humidity">

The Humidity component displays the current humidity reading from your device's sensor.

Step 1. Click on the "Humidity" component

Step 2. The component will automatically show the humidity percentage from your device

Step 3. Use the properties panel to customize:

  - Font size (default is 30px)

  - Text style (bold, italic, underline)

  - Alignment (left, center, right)

  - Color

  - Font family

</TabItem>
</Tabs>


## Data Components

The Data section contains components that connect to external data sources to display information like weather, stocks, and more:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/96.png" style={{width:400, height:'auto'}}/></div>

### Weather

The Weather component displays current weather information for a specified location.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/99.png" style={{width:1000, height:'auto'}}/></div>

Step 1. Click on the "Weather" component in the Data section

Step 2. The component will automatically be placed in the upper left corner of your canvas with the default text "Temperature"

Step 3. Using the toolbar at the top, configure the weather display options:

   - Select a location (e.g., "New York") from the location field

   - Choose what weather data to display from the dropdown menu:

     * Current Weather (temperature, conditions)

     * Today (today's forecast)

     * Day 2 through Day 7 (future forecasts)

Step 4. Use the property panel to further customize the appearance

:::note
The weather data shown in the Canvas is only for display purposes and doesn't represent real-time weather. The actual weather information will only be displayed after deploying the design to your device, which will then fetch real data from weather services.
:::

### Weather Icon

The Weather Icon component displays a visual representation of the current weather conditions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/100.png" style={{width:1000, height:'auto'}}/></div>

Step 1. Click on the "Weather Icon" component in the Data section

Step 2. The component will automatically be placed in the upper left corner of your canvas with a default sun icon

Step 3. Using the toolbar at the top, select the location (e.g., "New York") from the location field

Step 4. Use the property panel to customize:
   - Size and position
   - Icon style

:::note
The icon displayed in the Canvas is only a placeholder. After deployment to your device, the component will fetch and display the appropriate weather icon based on the actual weather conditions for the specified location.
:::

### Stock

The Stock component displays real-time stock market information for specified symbols.

Step 1. Click on the "Stock" component in the Data section

Step 2. The component will automatically be placed in the upper left corner of your canvas with a default text "AAPL" (Apple's stock symbol)

Step 3. Click the "Config" button in the toolbar to open the Stock Configuration panel

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/101.png" style={{width:1000, height:'auto'}}/></div>

Step 4. In the Stock Configuration panel:

   - Enter a stock symbol (e.g., "AAPL", "MSFT", "GOOGL") in the Stock Symbol field

   - Click "Search" to validate the symbol

   - Enter your Twelve Data API key in the provided field

Step 5. From the "Symbol" dropdown menu in the toolbar, select what stock data to display:

   - Symbol (just shows the stock ticker symbol)

   - Current Price (shows the latest stock price)

   - Change (shows the price change since previous close)

   - Change Percent (shows the percentage change)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/102.png" style={{width:1000, height:'auto'}}/></div>

Step 6. Use the property panel to customize the appearance of the stock component

#### Getting a Twelve Data API Key

To use the Stock component, you'll need a free API key from Twelve Data:

Step 1. Visit [twelvedata.com](https://twelvedata.com/)

Step 2. Click on "Get Started Free" or "Sign Up"

Step 3. Create an account with your email address and password

Step 4. Once registered and logged in, navigate to your dashboard

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/103.png" style={{width:1000, height:'auto'}}/></div>

Step 5. Locate and copy your API key

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/104.png" style={{width:800, height:'auto'}}/></div>

Step 6. Paste this API key into the "Twelve Data API Key" field in the Stock Configuration panel

:::note
- The free tier of Twelve Data allows for a limited number of API calls per minute and per day.

- The stock data shown in the Canvas is only for display purposes. Real-time stock information will only be displayed after deploying the design to your device, which will then fetch current data from Twelve Data's servers.

- For the most reliable experience, consider upgrading to a paid Twelve Data plan if you need frequent stock updates.
:::

:::tip
For testing purposes, you can use common stock symbols like:

- AAPL (Apple)

- MSFT (Microsoft)

- GOOGL (Alphabet/Google)

- AMZN (Amazon)

- TSLA (Tesla)
:::

### Date

The Date component displays a date, time, or timestamp that can be configured in various formats.

Step 1. Click on the "Date" component in the Data section

Step 2. The component will automatically be placed in the upper left corner of your canvas with a default date format (usually MM/DD/YYYY)

Step 3. Click the calendar icon in the toolbar to open the Date Settings panel

Step 4. In the Date Settings panel:

   - Set a specific date using the date picker or input field

   - Select a date format from the dropdown menu (e.g., MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/105.png" style={{width:1000, height:'auto'}}/></div>

Step 5. Use the property panel to further customize:

   - Font size and style

   - Text color

   - Alignment

   - Background (if desired)

:::note
The date shown in the Canvas is static and represents what you've configured in the Date Settings. When deployed to your device, the Date component can either:

- Display the static date you configured (useful for deadlines, event dates, etc.)

- If set to dynamic mode, display the current date/time which will update automatically on the device
:::

### GitHub

The GitHub component displays information about a GitHub user profile.

Step 1. Click on the "GitHub" component in the Data section

Step 2. The component will automatically be placed in the upper left corner of your canvas with default text showing "Seeed Studio" or another placeholder

Step 3. In the toolbar, you'll see a GitHub username field (e.g., "seeed-studio") and a dropdown menu

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/106.png" style={{width:1000, height:'auto'}}/></div>

Step 4. Enter a valid GitHub username in the field and click "Validate" in the GitHub User Configuration panel that appears

Step 5. From the dropdown menu labeled "Display Name" (or similar), select what GitHub user information you want to display:

   - Display Name (shows the user's display name)

   - Username (shows the user's GitHub handle)

   - Followers (shows the number of followers)

   - Following (shows the number of users being followed)

   - Public Repos (shows the number of public repositories)

   - Public Gists (shows the number of public gists)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/107.png" style={{width:1000, height:'auto'}}/></div>

Step 6. Use the property panel to customize the appearance of the GitHub component

:::note
- The GitHub component requires internet access on your device to fetch real-time GitHub data.

- What you see in the Canvas is just a placeholder. The actual GitHub information will be displayed after deploying to your device.

- GitHub API has rate limits, so excessive refreshing may temporarily disable the component.
:::

:::tip
Try these GitHub usernames for testing:

- seeed-studio (Seeed Studio's official GitHub)

- torvalds (Linus Torvalds, creator of Linux)

- microsoft (Microsoft's official GitHub)

- google (Google's official GitHub)
:::

### GitHub Repo

The GitHub Repo component displays information about a specific GitHub repository.

Step 1. Click on the "GitHub Repo" component in the Data section

Step 2. The component will automatically be placed in the upper left corner of your canvas with default text showing "wiki-documents"

Step 3. In the GitHub Repository Configuration panel that appears:

   - You can see the current user and repository status

   - Search for repositories by entering keywords or leaving the field empty to show all repositories for a user

   - Manually enter a specific repository in the format "Username/Repository" (e.g., "Seeed-Studio/wiki-documents")

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/108.png" style={{width:1000, height:'auto'}}/></div>

Step 4. Click "Search" to find and validate the repository

Step 5. From the dropdown menu in the toolbar, select what repository information you want to display:

   - Name (shows the repository name)

   - Full Name (shows the username/repository format)

   - Stars (shows the number of stars)

   - Forks (shows the number of forks)

   - Watchers (shows the number of watchers)

   - Description (shows the repository description)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/109.png" style={{width:1000, height:'auto'}}/></div>

Step 6. Use the property panel to customize the appearance of the GitHub Repo component

:::note
- Like the GitHub user component, the GitHub Repo component requires internet access on your device to fetch data.

- The Canvas displays placeholder text. Actual repository information will only appear after deployment to your device.

- GitHub API has rate limits that may affect how frequently the data can be updated.
:::

### YouTube

The YouTube component displays information and statistics about a YouTube channel.

Step 1. Click on the "YouTube" component in the Data section

Step 2. The component will automatically be placed in the upper left corner of your canvas with default text showing "No API key configured"

Step 3. In the YouTube Configuration panel that appears:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/110.png" style={{width:1000, height:'auto'}}/></div>

   - Enter a YouTube Channel ID (e.g., "UC_x5XG1OV2P6uZZ5FSM9Ttw") in the YouTube Channel field

   - Click "Search" to validate the channel

   - Enter your YouTube Data API Key in the provided field

   - Click the "Google Cloud Console" link to get a free API key if you don't have one

Step 4. From the dropdown menu in the toolbar, select what channel information you want to display:

   - Channel Name (shows the YouTube channel name)

   - Channel ID (shows the YouTube channel ID)

   - Description (shows the channel description)

   - Subscribers (shows the subscriber count)

   - Views (shows the total view count)

   - Videos (shows the number of uploaded videos)

   - Published At (shows the channel creation date)

   - Custom URL (shows the custom URL if available)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/111.png" style={{width:1000, height:'auto'}}/></div>

Step 5. Use the property panel to customize the appearance of the YouTube component

#### Getting a YouTube Data API Key

:::note
If you don't know how to get an API Key, you can also read [Google's official documentation](https://developers.google.com/youtube/v3/getting-started).
:::

To use the YouTube component, you'll need a free API key from Google Cloud Console:

Step 1. Visit [Google Cloud Console](https://console.cloud.google.com/)

Step 2. Create a new project or select an existing one

Step 3. Navigate to "APIs & Services" > "Library"

Step 4. Search for "YouTube Data API v3" and enable it

Step 5. Go to "APIs & Services" > "Credentials"

Step 6. Click "Create Credentials" > "API Key"

Step 7. Copy your new API key

Step 8. Paste this API key into the "YouTube Data API Key" field in the YouTube Configuration panel

:::note
- The YouTube component requires internet access on your device to fetch channel data.

- The Canvas displays "No API key configured" until you provide a valid API key and channel ID.

- Google's YouTube Data API has quotas and rate limits that may affect usage.

- Some statistics (like exact subscriber counts) may be rounded or approximated based on YouTube's policies.
:::

## Templates

Templates provide pre-designed layouts that combine multiple components into a cohesive, ready-to-use display. They save time and ensure professional results without having to design layouts from scratch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/113.png" style={{width:350, height:'auto'}}/></div>

### Weather Display Template

The Weather Display Template offers a complete weather dashboard showing current conditions and a 7-day forecast for any city.

Step 1. Click on the "Weather Display" template in the Templates section

Step 2. In the "Configure Template: Weather Display" dialog that appears:

   - Select your preferred temperature unit (Celsius °C or Fahrenheit °F)

   - Enter a city name in the "City Name" field

   - Click "Search" to verify the city exists in the weather database

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/114.png" style={{width:800, height:'auto'}}/></div>

Step 3. After a successful search, click "OK" to proceed

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/115.png" style={{width:700, height:'auto'}}/></div>

Step 4. A "Template Preview" window will appear showing:

   - Left panel with current date, weather condition, temperature, high/low, and humidity

   - Right panel with city name and 7-day forecast including condition icons and temperature ranges


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/116.png" style={{width:700, height:'auto'}}/></div>

Step 5. Review the preview and note:

   - The template will replace all current elements on your canvas

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 6. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/117.png" style={{width:1000, height:'auto'}}/></div>

Step 7. The Weather Display template is now on your canvas, ready for deployment or further customization

:::note
- The Weather Display template uses real-time weather API data that requires internet connectivity on your device.

- The template is fully customizable after being applied to your canvas - you can resize, reposition, or modify any element.

- Weather data automatically updates according to the refresh interval set in your project settings.
:::

### Stock Dashboard Template

The Stock Dashboard Template provides a clean, professional display of real-time stock market data including price, daily change, and percentage change.

Step 1. Click on the "Stock Dashboard" template in the Templates section

Step 2. In the "Configure Template: Stock Dashboard" dialog that appears:

   - Enter your [Twelve Data API Key](#getting-a-twelve-data-api-key) in the field provided (masked for security)

   - Enter a stock symbol (e.g., "AAPL" for Apple Inc.) in the Stock Symbol field

   - Click "Search" to find the stock

Step 3. After searching, a list of matching stocks appears. Select your desired stock from the results (e.g., "AAPL Apple Inc.")

Step 4. Click "OK" to confirm your selection

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/118.png" style={{width:700, height:'auto'}}/></div>

Step 5. A "Template Preview" window will appear showing:

   - Left panel with the stock symbol in large text

   - Right panel displaying the current stock price, price change, and percentage change

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/119.png" style={{width:700, height:'auto'}}/></div>

Step 6. Review the preview and note:

   - The template will replace all current elements on your canvas

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 7. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/120.png" style={{width:1000, height:'auto'}}/></div>

:::note
- The Stock Dashboard template requires internet access on your device to fetch real-time market data.

- Stock market data is delayed by at least 15 minutes on the free tier of Twelve Data.

- Data refreshes according to your project's refresh interval settings.

- Market data is only available during trading hours for the respective exchanges.
:::

### GitHub Profile Template

The GitHub Profile Template creates a comprehensive dashboard displaying a GitHub user's profile information and selected repositories with their statistics.

Step 1. Click on the "GitHub Profile" template in the Templates section


Step 2. In the "Configure Template: GitHub Profile" dialog that appears:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/121.png" style={{width:800, height:'auto'}}/></div>

   - Enter a GitHub username in the required field (e.g., "seeed-studio")

   - Optionally enter keywords in the Repository Search field to filter repositories

   - Leave the search field empty to show all repositories from the user

Step 3. Click the "Search all '[username]' repositories" button to retrieve the user's repositories

Step 4. From the list of repositories displayed, select up to 3 repositories you want to showcase

   - Each repository shows its name, description, primary programming language, and star count

   - You can use the filter field to narrow down the repository list

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/122.png" style={{width:700, height:'auto'}}/></div>

Step 5. Click "OK" to confirm your selections

Step 6. A "Template Preview" window will appear showing:

   - The GitHub user's display name at the top

   - "Github" label with follower count

   - A horizontal divider line

   - Selected repositories with their names and star counts

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/123.png" style={{width:700, height:'auto'}}/></div>

Step 7. Review the preview and note:

   - The template will replace all current elements on your canvas

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 8. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/124.png" style={{width:1000, height:'auto'}}/></div>

:::note
- Unlike other templates that may require API keys, the GitHub Profile template uses GitHub's public API and doesn't require authentication.

- The template has two search modes clearly explained in the interface:

  1. User only: Enter just the username to show all repositories

  2. User + keywords: Enter username and specific keywords to filter repositories

- Repository selection is limited to 3 to ensure optimal display on smaller screens.

- Some GitHub statistics may be approximated (like follower counts over 1,000 shown as "1.0K").
:::

### YouTube Channel Stats Template

The YouTube Channel Stats Template showcases a YouTube channel's branding, slogan, and subscriber count in a clean, modern design.

Step 1. Click on the "YouTube Channel Stats" template in the Templates section

Step 2. In the "Configure Template: YouTube Channel Stats" dialog that appears:

   - Enter your [YouTube Data API Key](#getting-a-youtube-data-api-key) (masked for security)

   - Enter a YouTube Channel Identifier in one of the supported formats:

     * Channel ID: 24-character string starting with "UC" (e.g., UC_x5XG1OV2P6uZZ5FSM9Ttw)
     * @Handle: Channel handle starting with @ (e.g., @seeedstudioSZ)
     * Channel URL: Full YouTube URL (e.g., youtube.com/@seeedstudioSZ)

Step 3. Click "Validate Channel" to verify the channel exists and retrieve its data

Step 4. If validation is successful, you'll see a confirmation message (e.g., "Found channel: SeeedStudioSZ • 20K")

Step 5. Click "OK" to proceed

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/125.png" style={{width:800, height:'auto'}}/></div>

Step 6. A "Template Preview" window will appear showing:

   - Left panel with the channel name and slogan/description in a stylish black background

   - Right panel with "YouTube" label, subscriber count, and "Subscribers" text

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/126.png" style={{width:800, height:'auto'}}/></div>

Step 7. Review the preview and note:

   - The template will replace all current elements on your canvas

   - All template elements will be given unique IDs to avoid conflicts

   - You can modify the template after applying it to the canvas

Step 8. Click "Apply to Canvas" to add the template to your workspace

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/127.png" style={{width:1000, height:'auto'}}/></div>


:::note
- The YouTube Channel Stats template requires internet access on your device to fetch channel data.

- YouTube Data API has quotas and rate limits that may affect usage.

- The template automatically retrieves the channel's slogan or description when available.

- For channels with a large number of subscribers, the count may be abbreviated (e.g., "1.2M" for 1,200,000).
:::

## Advanced Canvas Features

### Debugging and JSON Editing

SenseCraft HMI Canvas provides advanced debugging capabilities:

Step 1. Click the debug icon in the toolbar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/128.png" style={{width:400, height:'auto'}}/></div>

Step 2. A modal will open showing the current layout data in JSON format

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/129.png" style={{width:700, height:'auto'}}/></div>

Step 3. You can:

   - View the JSON structure of your layout

   - Click "Manual Edit JSON" to directly modify the layout code

   - Click "Copy to Clipboard" to save the JSON for backup or sharing

   - Click "Generate HTML" to create an HTML version of your layout

This feature is particularly useful for:

- Understanding how your layout is structured

- Making precise adjustments that might be difficult in the visual editor

- Creating backups of complex layouts

- Sharing layouts with others

### AI Layout Generator

SenseCraft HMI Canvas includes an AI-powered layout generator:

Step 1. Click on the "AI Generator" button in the top right

Step 2. Enter a description of the layout you want to create

Step 3. Click "Generate" to have the AI create a layout based on your description

Step 4. Customize the generated layout as needed

This feature is excellent for quickly creating layouts without starting from scratch.

:::tip
For detailed instructions on using this section, please refer to **[Using AI Generation in SenseCraft HMI](https://wiki.seeedstudio.com/sensecraft_hmi_ai_generation/)**.
:::

## Deploying to Your Device

Once you've created your canvas design, you'll want to deploy it to your Seeed device:

### Preview Before Deployment

Step 1. Click the "Preview" button in the top toolbar

Step 2. Review how your layout will appear on the device

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/130.png" style={{width:700, height:'auto'}}/></div>

Step 3. Make any necessary adjustments

### Save Your Layout

Step 1. Click the "Save" button to store your current layout

Step 2. Your layout will be saved to the SenseCraft HMI cloud

### Deploy to Device

Step 1. Ensure your device is connected and shows "Online" status

Step 2. Click the "Deploy" button

Step 3. Wait for the deployment process to complete

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/131.png" style={{width:1000, height:'auto'}}/></div>

Step 4. Your layout will appear on your connected device

### Deployment Considerations

For successful deployment to Seeed devices:

1. **Device Compatibility**: Ensure your layout is optimized for your specific device's screen resolution

2. **Connection Status**: Make sure your device shows "Online" status before deploying

3. **Data Components**: If using data components (Weather, Stock, etc.), ensure your device has internet connectivity

4. **Device Sensors**: Components like Battery, Temperature, and Humidity will only work with compatible Seeed reTerminal E10xx series devices that have the appropriate sensors

5. **Refresh Rate**: Set an appropriate interval time based on how frequently your data needs updating and your device's capabilities

## Troubleshooting

### Common Canvas Issues and Solutions

1. **Components not displaying data**:
   - Check your device's internet connection
   - Verify that the data source is available
   - Ensure the data key path is correct for dynamic components
   - Try refreshing the canvas or redeploying

2. **Layout issues on device**:
   - Use the Preview function to test before deployment
   - Avoid placing elements too close to the edges of the canvas

3. **Deployment fails**:
   - Ensure your device is properly connected to SenseCraft HMI
   - Check your device's internet connection
   - Try saving your layout and then deploying again
   - Restart your device and try deploying again

4. **Device sensor data not showing**:
   - Verify that your device has the required sensors
   - Check that your device's firmware is up to date
   - Make sure the device is properly connected to SenseCraft HMI

5. **Text or images appear distorted**:
   - Adjust the size and position of the components
   - Check font settings for text components
   - For images, ensure they have an appropriate resolution for your display

## Conclusion

The Canvas function in SenseCraft HMI provides a powerful platform for creating custom interfaces and dashboards for your Seeed devices. By combining basic design elements with dynamic data components and pre-made templates, you can create professional-looking displays that serve a wide range of purposes.

Whether you're building a weather station, device monitor, information display, or control panel, Canvas gives you the tools to bring your vision to life. The intuitive drag-and-drop interface combined with advanced features like dynamic data binding and debugging tools makes it accessible to beginners while still offering the depth that experienced users need.

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
