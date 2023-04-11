---
description: HTTP API Quickstart
title: HTTP API Quickstart
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## Prerequisite
  if you do not have an account, please register for the SenseCAP Portal.
  - [China Station](https://sensecap.seeed.cn)
  - [China Station](https://sensecap.seeed.cc)

:::note
   LoRaWAN devices are used with Global Station
:::

## Get an Access Key

1. Login the SenseCAP Portal.
2. Navigate to “Security/Access API keys”
3. Click “Create Access Key”
4. Click “API ID”, and get the “API ID” and “Access API keys” after entering the password.

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png)

![](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png)


## Get all the Device Groups
Use curl to make an HTTP request.The following example calls the API to get all the Device Groups under the account.

- username = API ID
- password = Access API keys

curl --user "username":"password" \
     https://sensecap.seeed.cc/openapi/list_groups

You should replace and with the one you got before. The command will output like the following

```cpp
{
    "code": "0",
    "data": [
        {
            "group_name": "Default",
            "group_uuid": ""
        },
        {
            "group_name": "test group",
            "group_uuid": "80523B280630E611"
        },
        {
            "group_name": "demo",
            "group_uuid": "EBAD5387C4FC8711"
        }
    ]
}
```

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

<div>
 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
