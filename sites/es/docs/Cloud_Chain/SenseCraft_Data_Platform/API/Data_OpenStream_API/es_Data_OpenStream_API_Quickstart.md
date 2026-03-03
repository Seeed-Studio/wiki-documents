---
description: Data_OpenStream_API_Quickstart
title: Inicio Rápido de la API Data OpenStream
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /es/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart
aliases:
  - /es/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart
last_update:
  date: 02/14/2023
  author: Matthew
---

<div class="post-content">
<div class="summary">

Esta guía te mostrará cómo suscribirte a los mensajes de tus dispositivos, así como cómo enviar un comando a un dispositivo específico, utilizando las CLIs de Eclipse Mosquitto para suscribirse o publicar mensajes.

</div>
<div id="toc"></div>
<h2 id="setup" class="clickable-header top-level-header">Configuración</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>Instala o <a href="https://mosquitto.org/download/">descarga</a> Mosquitto.</li>
</ul>
<h2 id="credentials" class="clickable-header top-level-header">Credenciales</h2>
<i class="icon-arrow-up back-to-top"></i>Navega por el Portal SenseCAP, ve a "Security/Access API keys", haz clic en "Create Access Key", y podrás obtener las "Access API keys", anótala como &lt;Password&gt;, y también el "Organization ID" como &lt;OrgID&gt;.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_2.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_3.png" alt="" /></figure>
<h2 id="receive-devices-messages" class="clickable-header top-level-header">Recibir Mensajes de Dispositivos</h2>
<i class="icon-arrow-up back-to-top"></i>Escuchemos todos los mensajes de tus dispositivos.

1.Abre una ventana de terminal y ejecuta el siguiente comando.
<ul>
  <li>OrgID = Organization ID</li>
  <li>Password = Access API keys</li>
</ul>

```bash
mosquitto_sub -h sensecap-openstream.seeed.cn -t '/device_sensor_data/<OrgID>/+/+/+/+' -u 'org-<OrgID>' -P '<Password>' -I 'org-<OrgID>-quickstart' -v
```

Por favor reemplaza el Organization ID y Access API Key que acabas de obtener con el &lt;OrgID&gt; y &lt;Password&gt; de arriba.

2.Enciende los dispositivos, mientras los dispositivos siguen enviando mensajes, deberías recibir datos como:
<div className="language-ruby highlighter-rouge">
  <div className="highlight">
    <pre className="highlight"><code><span className="sr">/device_sensor_data/</span><span className="mi">1234</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12000000001</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4105</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">2</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151824139</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4097</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">23</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4101</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">101629</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151901112</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4098</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">71</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4099</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mf">69.12</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151902224</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4100</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">437</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151922137</span><span className="p" />{"\n"}</code></pre>
  </div>
</div>

<table>
<thead>
<tr>
<th>ejemplo</th>
<th>campo</th>
<th>descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>1234</td>
<td>OrgId</td>
<td>Organization ID</td>
</tr>
<tr>
<td>2CF7F12000000001</td>
<td>DeviceEUI</td>
<td>Identificación única del dispositivo</td>
</tr>
<tr>
<td>1</td>
<td>Channel</td>
<td>Un conector físico en el dispositivo para que se conecte un sensor</td>
</tr>
<tr>
<td>vs</td>
<td>Reserved</td>
<td>El campo reservado</td>
</tr>
<tr>
<td>4105</td>
<td>MeasureID</td>
<td>El tipo de medición, 4105 es la Velocidad del Viento</td>
</tr>
<tr>
<td>2</td>
<td>value</td>
<td>Mediciones recopiladas, la Velocidad del Viento es 2m/s</td>
</tr>
<tr>
<td>1544151824139</td>
<td>timestamp</td>
<td>La marca de tiempo de recopilación de los datos</td>
</tr>
</tbody>
</table>
<h2 id="subscribe-a-specific-key" class="clickable-header top-level-header">Suscribirse a una Clave Específica</h2>
<i class="icon-arrow-up back-to-top"></i>Especificar una clave específica te permite suscribirte a datos de un dispositivo o canal particular.

Ejemplo:
Suscribirse al valor de temperatura recopilado por el Sensor de Temperatura y Humedad del Aire (DeviceEUI: 2CF7F12210400083;Canal: 1;).El ID de medición de temperatura es 4097.
Reemplaza &lt;OrgID&gt; como ID de Organización, &lt;Password&gt; como Clave de API de Acceso, ejecuta el comando:

```bash
mosquitto_sub \
  -h sensecap-openstream.seeed.cn \
  -t '/device_sensor_data/<OrgID>/2CF7F12210400083/1/vs/4097' \
  -u 'org-<OrgID>' \
  -P '<Password>' \
  -I 'org-<OrgID>-quickstart' \
  -v
```

Datos recibidos:

```cpp
/device_sensor_data/521853156991/2CF7F12210400083/1/vs/4097 {"value":28,"timestamp":1561373812474}
```

¡Felicitaciones! Ahora sabes cómo monitorear y recibir mensajes a través de MQTT. ¡Ve y construye algo increíble!

</div>
