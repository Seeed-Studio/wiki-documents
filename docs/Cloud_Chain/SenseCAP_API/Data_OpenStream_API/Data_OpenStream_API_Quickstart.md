---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API Quickstart
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
last_update:
  date: 02/14/2023
  author: Matthew
---

<div class="post-content">
<div class="summary">

This guide will walk you through how to subscribe your devices’ messages as well as how to send a command to a specific device, using Eclipse Mosquitto’s CLIs to subscribe or publish messages.

</div>
<div id="toc"></div>
<h2 id="setup" class="clickable-header top-level-header">Setup</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>Install or <a href="https://mosquitto.org/download/">download</a> Mosquitto.</li>
</ul>
<h2 id="credentials" class="clickable-header top-level-header">Credentials</h2>
<i class="icon-arrow-up back-to-top"></i>Browse SenseCAP Portal, navigate to “Security/Access API keys”, click the “Create Access Key”, and you can get the “Access API keys”, set down it as &lt;Password&gt;, and also “Organization ID” as &lt;OrgID&gt;.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_2.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_3.png" alt="" /></figure>
<h2 id="receive-devices-messages" class="clickable-header top-level-header">Receive Devices’ Messages</h2>
<i class="icon-arrow-up back-to-top"></i>Let’s listen for all of your devices’ messages.

1.Open a terminal window and execute the following command.
<ul>
  <li>OrgID = Organization ID</li>
  <li>Password = Access API keys</li>
</ul>
<div class="language-ruby highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code><span class="n">mosquitto_sub</span> <span class="p">\</span>
    <span class="o">-</span><span class="n">h</span> <span class="n">sensecap</span><span class="o">-</span><span class="n">openstream</span><span class="p">.</span><span class="nf">seeed</span><span class="p">.</span><span class="nf">cn</span> <span class="p">\</span>
    <span class="o">-</span><span class="n">t</span> <span class="s1">'/device_sensor_data/&lt;OrgID&gt;/+/+/+/+'</span> <span class="p">\</span>
    <span class="o">-</span><span class="n">u</span> <span class="s1">'org-&lt;OrgID&gt;'</span> <span class="p">\</span>
    <span class="o">-</span><span class="no">P</span> <span class="s1">'&lt;Password&gt;'</span> <span class="p">\</span>
    <span class="o">-</span><span class="no">I</span> <span class="s1">'org-&lt;OrgID&gt;-quickstart'</span> <span class="p">\</span>
    <span class="o">-</span><span class="n">v</span>
</code></pre>
</div>
</div>
Please replace the Organization ID and Access API Key you just obtained with the &lt;OrgID&gt; and &lt;Password&gt; above.

2.Power up devices, while devices keep sending messages, you should receive the data like:
<div className="language-ruby highlighter-rouge">
  <div className="highlight">
    <pre className="highlight"><code><span className="sr">/device_sensor_data/</span><span className="mi">1234</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12000000001</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4105</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">2</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151824139</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4097</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">23</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4101</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">101629</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151901112</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4098</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">71</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4099</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mf">69.12</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151902224</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4100</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">437</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151922137</span><span className="p" />{"\n"}</code></pre>
  </div>
</div>

<table>
<thead>
<tr>
<th>example</th>
<th>field</th>
<th>description</th>
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
<td>Unique identification of device</td>
</tr>
<tr>
<td>1</td>
<td>Channel</td>
<td>A physical socket on the device for a sensor to be connected</td>
</tr>
<tr>
<td>vs</td>
<td>Reserved</td>
<td>The reserved field</td>
</tr>
<tr>
<td>4105</td>
<td>MeasureID</td>
<td>The type of measurement, 4105 is the Wind Speed</td>
</tr>
<tr>
<td>2</td>
<td>value</td>
<td>Collected measurements, the Wind Speed is 2m/s</td>
</tr>
<tr>
<td>1544151824139</td>
<td>timestamp</td>
<td>The collection timestamp of the data</td>
</tr>
</tbody>
</table>
<h2 id="subscribe-a-specific-key" class="clickable-header top-level-header">Subscribe a Specific Key</h2>
<i class="icon-arrow-up back-to-top"></i>Specifying a specific key enables you to subscribe to data for a particular device or channel.

Example:
Subscribe to the temperature value collected by the Air Temperature and Humidity Sensor (DeviceEUI: 2CF7F12210400083;Channel: 1;).The temperature measurement ID is 4097.
Replace &lt;OrgID&gt; as Organization ID, &lt;Password&gt; as Access API Key, execute the command:
<div className="language-ruby highlighter-rouge">
  <div className="highlight">
    <pre className="highlight"><code><span className="n">mosquitto_sub</span> <span className="p">\</span>{"\n"}{"    "}<span className="o">-</span><span className="n">h</span> <span className="n">sensecap</span><span className="o">-</span><span className="n">openstream</span><span className="p">.</span><span className="nf">seeed</span><span className="p">.</span><span className="nf">cn</span> <span className="p">\</span>{"\n"}{"    "}<span className="o">-</span><span className="n">t</span> <span className="s1">'/device_sensor_data/&lt;OrgID&gt;/2CF7F12210400083/1/vs/4097'</span> <span className="p">\</span>{"\n"}{"    "}<span className="o">-</span><span className="n">u</span> <span className="s1">'org-&lt;OrgID&gt;'</span> <span className="p">\</span>{"\n"}{"    "}<span className="o">-</span><span className="no">P</span> <span className="s1">'&lt;Password&gt;'</span> <span className="p">\</span>{"\n"}{"    "}<span className="o">-</span><span className="no">I</span> <span className="s1">'org-&lt;OrgID&gt;-quickstart'</span> <span className="p">\</span>{"\n"}{"    "}<span className="o">-</span><span className="n">v</span>{"\n"}</code></pre>
  </div>
</div>

Received the data:
```cpp
/device_sensor_data/521853156991/2CF7F12210400083/1/vs/4097 {"value":28,"timestamp":1561373812474}
```
Congratulations! Now you know how to monitor and receive messages via MQTT. Go build something awesome!


</div>
