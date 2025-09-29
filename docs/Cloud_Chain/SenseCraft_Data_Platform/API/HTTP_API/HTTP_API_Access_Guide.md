---
sidebar_position: 2
description: HTTP API Access Guide
title: HTTP API Access Guide
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/api/http-api/http-api-access-guide
aliases:
  - /Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## HTTP Request and Response

  Requests are authenticated with the HTTP Basic Authentication.

### HTTP HOST

- China Station: https://sensecap.seeed.cn/openapi
- Global Station: https://sensecap.seeed.cc/openapi


### HTTP HEADER
 #### Request
<table >
<tr>
<th> key </th>
<th> description </th>
</tr>
<tr>
<td width="300"> API-VERSION </td>
<td width="300"> api version </td>
</tr>
</table>

 #### Response
<table >
<tr>
<th> key </th>
<th> description </th>
</tr>
<tr>
<td width="300"> api-gateway-excute-second </td>
<td width="300"> Time in seconds to execute the api </td>
</tr>
<tr>
<td width="300"> api-gateway-mpuo-consume </td>
<td width="300"> The quota consumed by executing the api </td>
</tr>
</table>

 #### HTTP Basic Authentication
  [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)is one of the most common ways for RESTfull API authentication. We use Access ID as username and Access Key as password. Every HTTP client library should have its built-in support for Basic Authentication, in this documentation we use curl, which uses the –user option to specify Basic Authentication credential.

  you can create access keys via SenseCAP Portal. Please refer to quickstart to see how to get an access key.

 #### API Response
 All response key follow the lowercase and underscore convention.

  #### Successful Response with String
  ```cpp
    {
       "code":"0",
       "data":"
           // string
       "
   }
  ```
  #### Successful Response with Object
  ```cpp
      {
       "code":"0",
       "data":{
           // object
       }
   }
  ```
  #### Successful response with Array
  ```cpp
      {
       "code":"0",
       "data":[
           // Array
       ]
   }
  ```
  #### Error Response
  ```cpp
   {
       "code":"1001",
       "msg":"error message"
   }
  ```
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
