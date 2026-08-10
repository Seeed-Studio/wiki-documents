---
description: Introduction to potential issues that may arise when using the API.
title: FAQ
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_faq
sku: 10003420
sidebar_position: 6
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/recamera_pro_api_faq/
---

# FAQ

## Login

### Login returns iStatus=-1, what should I do?

The password is incorrect. Verify that the username and password are correct. The default username is `admin`.

### Login returns iStatus=-3, what should I do?

Repeated failed logins have triggered an IP-based lockout. Wait for `sWaittime` seconds for the lockout to expire, then try again.

### Login succeeds but subsequent APIs return 401, what should I do?

The Token is missing or expired. Ensure the request header includes `Cookie: token=<JWT_TOKEN>` and that the Token has not exceeded its 24-hour lifetime. If expired, log in again.

### How long is the Token valid?

The Token is valid for 24 hours by default (`Max-Age=86400`). After it expires, log in again to obtain a new one.

## Network

### The device becomes inaccessible after changing network settings, what should I do?

Changing the IP address, gateway, or Wi-Fi parameters may cause the device address to change. Access the device via the new address, or recover via a direct network connection.

### What is the difference between /network/wlan and /network/wifi?

`/network/wlan` is for wireless IPv4 configuration (address, gateway, mask, DNS). `/network/wifi` is for current Wi-Fi connection info, connecting, and disconnecting.

### What should I put in sSsid when connecting to Wi-Fi?

`sSsid` is the unique identifier of the Wi-Fi network. Call `/network/wifi-list` first, then use the `sBssid` value from the list to connect.

## HTTPS

### The browser warns about an untrusted certificate when accessing HTTPS, what should I do?

The device uses a self-signed certificate. For local testing, you can proceed past the warning. For production deployment, install a trusted certificate.

### Cannot access the device via HTTP after enabling HTTPS, what should I do?

After enabling HTTPS, use `https://<DEVICE_IP>` for all subsequent access.

## API Paths

### Why do some paths start with /api/v1/ and others with /cgi-bin/?

Most endpoints require the CGI base path `/cgi-bin/entry.cgi`. Serial port and file endpoints are direct paths that bypass the CGI layer and are accessed at `/api/v1/...`.

### Why does an endpoint return 404?

The current firmware version may not implement that endpoint, or the path may be constructed incorrectly. Verify whether the path needs `/cgi-bin/entry.cgi` and check the firmware version.

## Technical Support and Product Discussion

Thank you for choosing our products! We are here to provide you with various support to ensure your experience with our products is as smooth as possible. We offer multiple communication channels to meet different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
