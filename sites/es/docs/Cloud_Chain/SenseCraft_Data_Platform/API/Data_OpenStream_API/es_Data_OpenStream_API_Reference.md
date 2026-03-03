---
description: Inicio_Rápido_API_OpenStream_de_Datos
title: Referencia de la API OpenStream de Datos
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /es/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_reference
aliases:
  - /es/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference
last_update:
  date: 02/14/2023
  author: Matthew
---

<div class="post-content">
<div id="toc">

&nbsp;

</div>
<h2 id="the-connection-information" class="clickable-header top-level-header">La Información de Conexión</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>Host: Estación China: sensecap-openstream.seeed.cn Estación Global: sensecap-openstream.seeed.cc</li>
  <li>Puerto: 1883 para MQTT, o 8083 para MQTT sobre WebSocket</li>
  <li>ClientID: org-&lt;ID de Organización&gt;-&lt;ID Aleatorio&gt;, reemplaza &lt;ID de Organización&gt; con el que obtuviste del Portal SenseCAP, y reemplaza &lt;ID Aleatorio&gt; con números y letras minúsculas generados aleatoriamente.</li>
  <li>Nombre de usuario: org-&lt;ID de Organización&gt;, reemplaza &lt;ID de Organización&gt; con el que obtuviste del panel de control (consulta el inicio rápido).</li>
  <li>Contraseña: Obtén las claves de API de acceso en tu Portal SenseCAP "seguridad /Clave de Acceso API" (consulta el inicio rápido).</li>
</ul>
<h2 id="publish-and-subscribe-model" class="clickable-header top-level-header">Modelo de Publicación y Suscripción</h2>
<i class="icon-arrow-up back-to-top"></i>La API OpenStream de SenseCAP implementa el "Modelo de Publicación y Suscripción", como lo hace el protocolo MQTT. Puedes conectar tu servidor a la API OpenStream de SenseCAP a través de MQTT o MQTT sobre WebSocket para comunicarte con el protocolo estándar pub-sub.

Puedes "suscribirte" para recibir mensajes. "suscribirse" es la forma más común de monitorear continuamente los datos de telemetría de los dispositivos.
<h2 id="message-topic" class="clickable-header top-level-header">Tema del Mensaje</h2>
<i class="icon-arrow-up back-to-top"></i>
<h3 id="receive-devices-telemeasuring-data">Recibir Datos de Telemedición del Dispositivo</h3>
Formato del Tema: /device_sensor_data/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Channel&gt;/&lt;Reserved&gt;/&lt;MeasurementID&gt;
<table>
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>Tu "ID de Organización", puedes encontrar esto en el Portal SenseCAP. Posees un ID de Organización único, y todos los temas lo necesitarán.</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>Identificación única del dispositivo</td>
</tr>
<tr>
<td>Channel</td>
<td>Un socket físico en el dispositivo para que se conecte un sensor</td>
</tr>
<tr>
<td>Reserved</td>
<td>Reservado</td>
</tr>
<tr>
<td>MeasurementID</td>
<td>Por favor consulta "Lista de IDs de Medición" en esta documentación</td>
</tr>
</tbody>
</table>
<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>Nota:</b> "+" significa que no hay condición de filtrado para este campo, coincidiendo con todas las configuraciones posibles. Entonces, "/+/+/+/+" significa escuchar todos los "&lt;DeviceEUI&gt;", "&lt;Channel&gt;", "&lt;SensorEUI&gt;", "&lt;MeasurementID&gt;"</div>
El tema puede especificar condiciones de filtrado para implementar la escucha en dispositivos, canales y tipos de medición especificados. Por ejemplo, puedes escuchar solo el Dispositivo cuyo ID de dispositivo es "2F000000000000", entonces puedes reemplazar el campo &lt;DeviceEUI&gt; con 2F000000000000.

El "2F000000000000" en este ejemplo debe ser un dispositivo que ya hayas vinculado a tu cuenta. Y siempre debes recordar reemplazar &lt;OrgID&gt; con tu propio "ID de Organización".
<h4 id="message-body">Cuerpo del Mensaje</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

Estos son datos de medición de sensor subidos por un dispositivo, que se ajustan al formato JSON y pueden ser analizados por un analizador JSON. En general, para la mayoría de los requisitos funcionales, un cuerpo necesita ser usado en conjunto con algunos campos en el tema.
<table>
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>Valor de Medición del Sensor</td>
</tr>
<tr>
<td>timestamp</td>
<td>La marca de tiempo de recolección de los datos, unidad milisegundo</td>
</tr>
</tbody>
</table>
<h3 id="receive-devices-status-data">Recibir Datos de Estado del Dispositivo</h3>
Formato del Tema: /device_status_event/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Reserved&gt;/&lt;StatusID&gt;
<table>
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>Tu "ID de Organización", puedes encontrar esto en el Portal SenseCAP. Posees un ID de Organización único, y todos los temas lo necesitarán.</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>Identificación única del dispositivo</td>
</tr>
<tr>
<td>Reserved</td>
<td>Reservado</td>
</tr>
<tr>
<td>StatusID</td>
<td>Por favor consulta "Lista de IDs de Estado del Dispositivo" en esta documentación</td>
</tr>
</tbody>
</table>
Suscríbete al StatusID requerido según la lista de IDs de estado del dispositivo para evitar suscribirte a IDs inesperados
<h4 id="message-body-1">Cuerpo del Mensaje</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

<table>
<thead>
<tr>
<th>Campo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>Valor de Estado del Sensor</td>
</tr>
<tr>
<td>timestamp</td>
<td>La marca de tiempo de recolección de los datos, unidad milisegundo</td>
</tr>
</tbody>
</table>
</div>
