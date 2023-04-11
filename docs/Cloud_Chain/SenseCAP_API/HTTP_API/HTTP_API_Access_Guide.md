---
description: HTTP API Access Guide
title: HTTP API Access Guide
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
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
<th> key
</th>
<th> description
</th></tr>
<tr>
<td width="300"> API-VERSION
</td>
<td width="300"> api version
</td></tr></table>

 #### Response
<table >
<tr>
<th> key
</th>
<th> description
</th></tr>
<tr>
<td width="300"> api-gateway-excute-second
</td>
<td width="300"> Time in seconds to execute the api
</td>
</tr>
<tr>
<td width="300"> api-gateway-mpuo-consume
</td>
<td width="300"> The quota consumed by executing the api
</td></tr></table>

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
## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
