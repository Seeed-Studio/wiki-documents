---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API Reference
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
last_update:
  date: 02/14/2023
  author: Matthew
---

<div class="post-content">
<div id="toc">

&nbsp;

</div>
<h2 id="the-connection-information" class="clickable-header top-level-header">The Connection Information</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>Host: China Station: sensecap-openstream.seeed.cn Global Station: sensecap-openstream.seeed.cc</li>
  <li>Port: 1883 for MQTT, or 8083 for MQTT Over WebSocket</li>
  <li>ClientID: org-&lt;Organization ID&gt;-&lt;Random ID&gt;, replace &lt;Orgnization ID&gt; with you got from SenseCAP Portal, and replace &lt;Random ID&gt; with you randomly generated Numbers and lowercase letters.</li>
  <li>Username: org-&lt;Organization ID&gt;, replace &lt;Organization ID&gt; with you got from dashboard (refer to the quickstart).</li>
  <li>Password: Get Access API keys on your SenseCAP Portal “security /API Access Key” (refer to the quickstart).</li>
</ul>
<h2 id="publish-and-subscribe-model" class="clickable-header top-level-header">Publish And Subscribe Model</h2>
<i class="icon-arrow-up back-to-top"></i>SenseCAP OpenStream API implements “Publish And Subscribe Model”, as the MQTT protocol does. You can connect your server to SenseCAP OpenStream API through MQTT or MQTT Over WebSocket to communicate with the standard pub-sub protocol.

You can “subscribe” to receive messages. “subscribe” is the most common way to continuously monitor the telemetry data from devices.
<h2 id="message-topic" class="clickable-header top-level-header">Message Topic</h2>
<i class="icon-arrow-up back-to-top"></i>
<h3 id="receive-devices-telemeasuring-data">Receive Device’s Telemeasuring Data</h3>
Topic Format: /device_sensor_data/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Channel&gt;/&lt;Reserved&gt;/&lt;MeasurementID&gt;
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>Your “Organization ID”, you can find this on SenseCAP Portal. You own a unique Organization ID, and all the topics will need it.</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>Unique identification of device</td>
</tr>
<tr>
<td>Channel</td>
<td>A physical socket on the device for a sensor to be connected</td>
</tr>
<tr>
<td>Reserved</td>
<td>Reserved</td>
</tr>
<tr>
<td>MeasurementID</td>
<td>Please refer to “List of Measurement IDs” in this documentation</td>
</tr>
</tbody>
</table>
<div class="alert alert-info" role="alert"><i class="fa fa-info-circle"></i> <b>Note:</b> “+” means that there is no filtering condition for this field, matching all possible configurations. So, “/+/+/+/+” means to listen for all “&lt;DeviceEUI&gt;”, “&lt;Channel&gt;”, “&lt;SensorEUI&gt;”, “&lt;MeasurementID&gt;”</div>
Topic can specify filtering conditions to implement listening on specified devices, channels and measurement types. For example, you can only listen for Device whose device ID is “2F000000000000”, then you can replace the &lt;DeviceEUI&gt; field with 2F000000000000.

The “2F000000000000” in this example must be a device that you have already bound to your account. And you should always remember to replace &lt;OrgID&gt; with your own “Organization ID”.
<h4 id="message-body">Message Body</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

This is a sensor measurement data uploaded by a device, which conforms to the JSON format and can be parsed by JSON parser. In general, for most functional requirements, a body needs to be used in conjunction with some fields in the topic.
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>Sensor’s Measurement Value</td>
</tr>
<tr>
<td>timestamp</td>
<td>The collection timestamp of the data, unit millisecond</td>
</tr>
</tbody>
</table>
<h3 id="receive-devices-status-data">Receive Device’s Status Data</h3>
Topic Format: /device_status_event/&lt;OrgID&gt;/&lt;DeviceEUI&gt;/&lt;Reserved&gt;/&lt;StatusID&gt;
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>OrgID</td>
<td>Your “Organization ID”, you can find this on SenseCAP Portal. You own a unique Organization ID, and all the topics will need it.</td>
</tr>
<tr>
<td>DeviceEUI</td>
<td>Unique identification of device</td>
</tr>
<tr>
<td>Reserved</td>
<td>Reserved</td>
</tr>
<tr>
<td>StatusID</td>
<td>Please refer to “List of Device Status IDs” in this documentation</td>
</tr>
</tbody>
</table>
Subscribe to the required StatusID according to the list of device state IDs to avoid subscribing to unexpected IDs
<h4 id="message-body-1">Message Body</h4>

```
{
    "value": "437",
    "timestamp": "1544151922137"
}
```

<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>Sensor’s Status Value</td>
</tr>
<tr>
<td>timestamp</td>
<td>The collection timestamp of the data, unit millisecond</td>
</tr>
</tbody>
</table>
</div>
