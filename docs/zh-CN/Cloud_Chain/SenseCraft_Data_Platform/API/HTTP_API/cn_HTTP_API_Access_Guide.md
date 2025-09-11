---
sidebar_position: 2
description: HTTP API 访问指南
title: HTTP API 访问指南
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecraft-data-platform/api/http-api/http-api-access-guide
aliases:
  - /cn/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## HTTP 请求和响应

  请求使用 HTTP 基本身份验证进行认证。

### HTTP HOST

- 中国站：https://sensecap.seeed.cn/openapi
- 全球站：https://sensecap.seeed.cc/openapi


### HTTP HEADER
 #### 请求
<table >
<tr>
<th> key </th>
<th> description </th>
</tr>
<tr>
<td width="300"> API-VERSION </td>
<td width="300"> api 版本 </td>
</tr>
</table>

 #### 响应
<table >
<tr>
<th> key </th>
<th> description </th>
</tr>
<tr>
<td width="300"> api-gateway-excute-second </td>
<td width="300"> 执行 api 的时间（秒） </td>
</tr>
<tr>
<td width="300"> api-gateway-mpuo-consume </td>
<td width="300"> 执行 api 消耗的配额 </td>
</tr>
</table>

 #### HTTP 基本身份验证
  [HTTP 基本身份验证](https://en.wikipedia.org/wiki/Basic_access_authentication)是 RESTfull API 身份验证最常见的方式之一。我们使用 Access ID 作为用户名，Access Key 作为密码。每个 HTTP 客户端库都应该内置支持基本身份验证，在本文档中我们使用 curl，它使用 –user 选项来指定基本身份验证凭据。

  您可以通过 SenseCAP Portal 创建访问密钥。请参考快速入门了解如何获取访问密钥。

 #### API 响应
 所有响应键都遵循小写和下划线约定。

  #### 成功响应（字符串）
  ```cpp
    {
       "code":"0",
       "data":"
           // string
       "
   }
  ```
  #### 成功响应（对象）
  ```cpp
      {
       "code":"0",
       "data":{
           // object
       }
   }
  ```
  #### 成功响应（数组）
  ```cpp
      {
       "code":"0",
       "data":[
           // Array
       ]
   }
  ```
  #### 错误响应
  ```cpp
   {
       "code":"1001",
       "msg":"error message"
   }
  ```
## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>