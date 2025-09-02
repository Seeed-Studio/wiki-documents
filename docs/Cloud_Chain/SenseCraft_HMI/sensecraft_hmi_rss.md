---
description: Introduces the use of RSS, a feature under the SenseCraft HMI platform.
title: RSS Function
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft_hmi_rss
sidebar_position: 6
last_update:
  date: 07/21/2025
  author: Citric
---

# Using RSS in SenseCraft HMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/80.jpg" style={{width:800, height:'auto'}}/></div>

## Introduction

The RSS function in [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) allows you to transform your screen-based devices into real-time information displays. By connecting to RSS feeds from news outlets, blogs, weather services, and more, you can create dynamic displays that automatically update with the latest content. This feature is perfect for creating news tickers, information boards, or personal dashboards that keep you informed without manual intervention.

This tutorial will guide you through understanding RSS feeds and using the RSS function in SenseCraft HMI to display content on your device.

This article will use the [reTerminal E1002](https://wiki.seeedstudio.com/getting_started_with_reterminal_e1002/) as an example to explain how to use this feature on the SenseCraft HMI platform.

## Understanding RSS

### What is RSS?

RSS (Really Simple Syndication) is a standardized web feed format used to publish frequently updated content such as:

- News articles

- Blog posts

- Podcasts

- Video updates

- Weather forecasts

- Stock market data

RSS feeds allow users to stay updated without having to visit each website individually. Instead, new content is automatically delivered to your RSS reader or, in this case, your SenseCraft HMI-enabled device.

### How RSS Works

1. **Content publishers** (websites, blogs, news outlets) create RSS feeds that contain their latest content in a standardized XML format

2. **Feed readers** (like the RSS function in SenseCraft HMI) regularly check these feeds for updates

3. When new content is published, the feed reader **retrieves and displays** the updates

### Benefits of Using RSS

- **Real-time updates**: Get the latest information without manual refreshing

- **Content aggregation**: Combine multiple sources in one display

- **Filtered information**: Only receive the content you're interested in

- **Bandwidth efficient**: RSS feeds contain only essential content, not full web pages

- **No advertisements**: RSS typically delivers clean content without ads

## Getting Started with RSS in SenseCraft HMI

### Accessing the RSS Function

Step 1. Navigate to the SenseCraft HMI platform below.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

Step 2. Connect your device or select an already paired device to use.

Step 3. Click on the "RSS" tab in the left sidebar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/77.png" style={{width:1000, height:'auto'}}/></div>

### Understanding the RSS Interface

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/85.png" style={{width:1000, height:'auto'}}/></div>

The RSS interface consists of three main sections:

1. **Configuration Panel**: Located on the right side, where you can enter and validate RSS feed URLs

2. **Display Area**: The main section where RSS content will be displayed after configuration

3. **Control Buttons**: Located at the top, including Preview, Save, and Deploy options

When first accessing the RSS function, you'll see a message indicating "No RSS Feed Configured" with instructions to configure settings in the right panel.

## Configuring RSS Feeds

### Adding an RSS Feed

Step 1. Locate the "RSS Configuration" panel on the right side of the screen

Step 2. Find the "RSS URL" input field

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/78.png" style={{width:1000, height:'auto'}}/></div>

Step 3. Enter a valid RSS feed URL in the field (e.g., https://news.google.com/rss)

Step 4. Click the "Set" button to validate and apply the RSS feed

Step 5. If the URL is valid, the system will begin fetching and displaying content from the feed

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/79.png" style={{width:1000, height:'auto'}}/></div>

### Display Settings and Customization

Once your RSS feed is configured, you can adjust how content is displayed:

Step 1. Use the same interval and dither mode settings found in the Gallery function:

- **Interval(min)**: Sets how frequently the display refreshes with new content

- **Dither Mode**: Choose between "Full Color" or "Black and White" based on your display type

Step 2. Click "Save" to store your configuration

Step 3. Click "Preview" to see how the RSS content will display on your device

Step 4. Click "Deploy" to send the configuration to your connected device

## Finding and Using RSS Feeds

### Popular RSS Feed Sources

Here are some popular and reliable RSS feeds you can use with SenseCraft HMI:

**News:**

- BBC News: https://feeds.bbci.co.uk/news/world/rss.xml

- Reuters: https://www.reutersagency.com/feed/

- CNN: https://rss.cnn.com/rss/edition.rss

- The New York Times: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml

**Technology:**

- Wired: https://www.wired.com/feed/rss

- TechCrunch: https://techcrunch.com/feed/

- Ars Technica: https://feeds.arstechnica.com/arstechnica/index

- Hackaday: https://hackaday.com/blog/feed/

**Weather:**

- National Hurricane Center: https://www.nhc.noaa.gov/index-at.xml

**Science:**

- NASA Breaking News: https://www.nasa.gov/rss/dyn/breaking_news.rss

- Science Daily: https://www.sciencedaily.com/rss/all.xml

### How to Find RSS Feeds for Websites

Many websites offer RSS feeds, but they're not always easy to find. Here are some methods to locate RSS feeds:

#### Method 1: Look for RSS Icons

Many websites display an RSS icon (usually orange) or links labeled "RSS," "Feed," or "Subscribe" in their footer or sidebar.

#### Method 2: Add "/feed" to Blog URLs

For many WordPress-based sites, adding "/feed" to the end of the URL often works:

```
https://example.com/feed
```

#### Method 3: Use Browser Extensions

Browser extensions like "RSS Feed Reader" for Chrome or "Awesome RSS" for Firefox can detect available feeds on websites you visit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/81.png" style={{width:1000, height:'auto'}}/></div>

#### Method 4: Check Source Code

1. Visit the website

2. Right-click and select "View Page Source"

3. Search (Ctrl+F) for "rss" or "feed"

4. Look for links with "application/rss+xml" in the type attribute

#### Method 5: Use RSS Feed Finders

Services like:

- [Feed Finder](https://feedfinder.mackerron.com/)

- [RSS.app](https://rss.app/rss-feed)

These can help discover RSS feeds for websites that don't advertise them prominently.

## Creating Custom RSS Feeds

If you can't find an RSS feed for content you want to display, you can create your own using various tools:

### RSS Feed Creation Services

1. **RSS.app**: https://rss.app/

- Create RSS feeds from websites, social media, or other sources

- No coding required

- Free and paid options available

2. **Feedly**: https://feedly.com/

- Create boards of content that can be exported as RSS

- Good for content curation

3. **Zapier**: https://zapier.com/

- Create automated workflows that can generate RSS feeds from various triggers

- Requires a paid subscription for advanced features

### Feed Aggregators

You can also combine multiple RSS feeds into a single feed using aggregators:

1. **FeedBlendr**: http://feedblendr.com/

- Combine multiple feeds into one

- Simple to use

2. **RSSMix**: http://www.rssmix.com/

- Merge multiple RSS feeds

- Free service

## Advanced RSS Display Tips

### Optimizing RSS Content for Your Display

For the best experience with RSS feeds on your SenseCraft HMI device:

1. **Choose feeds with appropriate content length**:

- Feeds with short titles and descriptions work best for small displays

- Full-article feeds may be too text-heavy for e-paper displays

2. **Consider update frequency**:

- Match your interval setting to the feed's update frequency

- News feeds may update hourly, while blog feeds might update daily

3. **Test different dither modes**:

- "Black and White" mode works best for text-heavy RSS feeds on e-paper displays

- "Full Color" is better for feeds with images on LCD displays

4. **Be mindful of image content**:

- Some RSS feeds include images that may not display well on all devices

- Feeds with large images may load slower

## Troubleshooting

### Common RSS Issues and Solutions

1. **"Invalid RSS Feed" Error**:

- Verify the URL is correct and includes the http:// or https:// prefix

- Check if the feed is accessible by pasting the URL in a browser

- Some feeds may require authentication or have access restrictions

2. **Feed Loads but No Content Appears**:

- The feed may be empty or not currently publishing content

- The feed format might not be compatible (try an alternative feed)

- Try a different, more active feed

3. **Content Appears Garbled or Incorrectly Formatted**:

- Try a different dither mode

- The feed might contain special characters or formatting that isn't supported

- Consider using a feed filtering service to clean up the content

4. **Feed Stops Updating**:

- The source website may have changed their feed URL

- There might be temporary server issues

- Try removing and re-adding the feed

5. **Deployment Fails**:

- Ensure your device is properly connected to SenseCraft HMI

- Check your device's internet connection

- Restart your device and try deploying again

## Conclusion

The RSS function in SenseCraft HMI provides a powerful way to turn your screen-based devices into dynamic information displays. By connecting to RSS feeds, you can create automatically updating displays for news, weather, technical updates, or any other content available via RSS.

Remember that the quality of your RSS display depends largely on the feeds you choose. Experiment with different feeds, update intervals, and display settings to create the perfect information display for your needs.

## Resources

- [SenseCraft HMI Platform](https://sensecraft.seeed.cc/hmi)
- [Compatible Devices - reTerminal E Series](https://wiki.seeedstudio.com/reterminal_e10xx_main_page/)

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
