---
sidebar_position: 2
description: Guia de Acesso à API HTTP
title: Guia de Acesso à API HTTP
keywords:
  - HTTP API
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/api/http-api/http-api-access-guide
aliases:
  - /Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-03-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/api/http-api/http-api-access-guide/
---

## Requisição e Resposta HTTP

  As requisições são autenticadas com HTTP Basic Authentication.

### HTTP HOST

- Estação China: https://sensecap.seeed.cn/openapi
- Estação Global: https://sensecap.seeed.cc/openapi


### HTTP HEADER
 #### Request
<table >
<tr>
<th> key </th>
<th> description </th>
</tr>
<tr>
<td width="300"> API-VERSION </td>
<td width="300"> versão da api </td>
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
<td width="300"> Tempo em segundos para executar a api </td>
</tr>
<tr>
<td width="300"> api-gateway-mpuo-consume </td>
<td width="300"> A cota consumida ao executar a api </td>
</tr>
</table>

 #### HTTP Basic Authentication
  [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) é uma das maneiras mais comuns de autenticação de API RESTfull. Usamos Access ID como nome de usuário e Access Key como senha. Toda biblioteca de cliente HTTP deve ter suporte integrado para Basic Authentication; nesta documentação usamos curl, que utiliza a opção –user para especificar as credenciais de Basic Authentication.

  você pode criar chaves de acesso via SenseCAP Portal. Consulte o quickstart para ver como obter uma chave de acesso.

 #### Resposta da API
 Todas as chaves de resposta seguem a convenção de letras minúsculas com sublinhado.

  #### Resposta bem-sucedida com String
  ```cpp
    {
       "code":"0",
       "data":"
           // string
       "
   }
  ```
  #### Resposta bem-sucedida com Objeto
  ```cpp
      {
       "code":"0",
       "data":{
           // object
       }
   }
  ```
  #### Resposta bem-sucedida com Array
  ```cpp
      {
       "code":"0",
       "data":[
           // Array
       ]
   }
  ```
  #### Resposta de Erro
  ```cpp
   {
       "code":"1001",
       "msg":"error message"
   }
  ```
## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
