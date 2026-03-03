---
sidebar_position: 2
description: Guía de Acceso a la API HTTP
title: Guía de Acceso a la API HTTP
keywords:
- HTTP API 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecraft-data-platform/api/http-api/http-api-access-guide
aliases:
  - /es/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## Solicitud y Respuesta HTTP

  Las solicitudes se autentican con la Autenticación Básica HTTP.

### HOST HTTP

- Estación China: https://sensecap.seeed.cn/openapi
- Estación Global: https://sensecap.seeed.cc/openapi


### ENCABEZADO HTTP
 #### Solicitud
<table >
<tr>
<th> clave </th>
<th> descripción </th>
</tr>
<tr>
<td width="300"> API-VERSION </td>
<td width="300"> versión de la api </td>
</tr>
</table>

 #### Respuesta
<table >
<tr>
<th> clave </th>
<th> descripción </th>
</tr>
<tr>
<td width="300"> api-gateway-excute-second </td>
<td width="300"> Tiempo en segundos para ejecutar la api </td>
</tr>
<tr>
<td width="300"> api-gateway-mpuo-consume </td>
<td width="300"> La cuota consumida al ejecutar la api </td>
</tr>
</table>

 #### Autenticación Básica HTTP
  [La Autenticación Básica HTTP](https://en.wikipedia.org/wiki/Basic_access_authentication) es una de las formas más comunes para la autenticación de API RESTfull. Usamos el ID de Acceso como nombre de usuario y la Clave de Acceso como contraseña. Cada biblioteca de cliente HTTP debería tener soporte integrado para la Autenticación Básica, en esta documentación usamos curl, que utiliza la opción –user para especificar las credenciales de Autenticación Básica.

  puedes crear claves de acceso a través del Portal SenseCAP. Por favor consulta la guía de inicio rápido para ver cómo obtener una clave de acceso.

 #### Respuesta de la API
 Todas las claves de respuesta siguen la convención de minúsculas y guiones bajos.

  #### Respuesta Exitosa con Cadena
  ```cpp
    {
       "code":"0",
       "data":"
           // string
       "
   }
  ```
  #### Respuesta Exitosa con Objeto
  ```cpp
      {
       "code":"0",
       "data":{
           // object
       }
   }
  ```
  #### Respuesta exitosa con Array
  ```cpp
      {
       "code":"0",
       "data":[
           // Array
       ]
   }
  ```
  #### Respuesta de Error
  ```cpp
   {
       "code":"1001",
       "msg":"error message"
   }
  ```
## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
