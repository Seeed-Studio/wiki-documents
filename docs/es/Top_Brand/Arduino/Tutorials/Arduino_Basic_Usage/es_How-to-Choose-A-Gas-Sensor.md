---
description: Cómo Elegir un Sensor de Gas
title: Cómo Elegir un Sensor de Gas

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How-to-Choose-A-Gas-Sensor
last_update:
  date: 02/02/2023
  author: w0x7ce

no_comments: false # for Disqus

---

Si buscas "sensor de gas" en [www.seeedstudio.com](https://www.seeedstudio.com), puedes encontrar muchos sensores de gas. Sabemos que los componentes del aire son diversos, y un determinado sensor de gas puede detectar uno o más componentes del aire, por lo que diseñamos una serie de sensores de gas.

Hay aproximadamente 10 tipos de sensores de gas a la venta. Tienen nombres similares, lo que puede causar confusión. Esperamos que a través de la siguiente presentación, podamos ayudarte a elegir el sensor de gas apropiado fácilmente.

Es obvio que diferentes sensores pueden detectar el mismo gas. Como MQ-2, MQ-3, MQ-5 Alcohol Sensor, Grove – HCHO Sensor pueden detectar Alcohol. Entonces, si quieres un sensor de alcohol, ¿cuál deberías elegir? Aunque la mayoría de los sensores anteriores son capaces de detectar Alcohol, debes saber que tienen diferentes rangos para el Alcohol.

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-l5ls{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;font-weight:bold;text-align:center;
  vertical-align:top}
.tg .tg-q7v3{background-color:#ffffff;border-color:#000000;color:#000000;font-size:16px;text-align:center;vertical-align:top}
</style> -->

<table className="tg" style={{tableLayout: 'fixed', width: 800}}>
  <colgroup>
    <col style={{width: 119}} />
    <col style={{width: 259}} />
    <col style={{width: 271}} />
    <col style={{width: 151}} />
  </colgroup>
  <thead>
    <tr>
      <th className="tg-l5ls">Gas</th>
      <th className="tg-l5ls">Rango</th>
      <th className="tg-l5ls">Nombre del Producto</th>
      <th className="tg-l5ls">SKU</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-q7v3">Polvo</td>
      <td className="tg-q7v3">0~8000pcs/0.01cf</td>
      <td className="tg-q7v3">Grove-Sensor de Polvo</td>
      <td className="tg-q7v3">101020012</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">20~2000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0~1000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas Multicanal</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />Alcohol</td>
      <td className="tg-q7v3">200~10000pp</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">100ppm~2000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">10~500ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas Multicanal</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">20~1000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Alcohol</td>
      <td className="tg-q7v3">101020044</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">O2</td>
      <td className="tg-q7v3">0~25%VOL<br />(0~25000ppm)</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(O2)</td>
      <td className="tg-q7v3">101020002</td>
    </tr>
    <tr>
      <td className="tg-q7v3">HCHO</td>
      <td className="tg-q7v3">5~40ppm</td>
      <td className="tg-q7v3">Grove-Sensor HCHO</td>
      <td className="tg-q7v3">101020001</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />CH4</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">5000~20000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">500~10000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">&gt;1000mmp</td>
      <td className="tg-q7v3">Grove-Sensor de Gas Multicanal</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Hexano</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={2}>Propeno</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas Multicanal</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~5000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Butano</td>
      <td className="tg-q7v3">3000~5000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Bencina</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ3)</td>
      <td className="tg-q7v3">01020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={4}><br />GLP</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~5000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">500~10000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ3)</td>
      <td className="tg-q7v3">01020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={3}>H2</td>
      <td className="tg-q7v3">300~5000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">1~1000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas Multicanal</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Humo</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NO2</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas Multicanal</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NH3</td>
      <td className="tg-q7v3">1~500ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas Multicanal</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Iso-butano</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
      <td className="tg-q7v3">Grove-Sensor de Gas Multicanal</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CO2</td>
      <td className="tg-q7v3">0~2000ppm</td>
      <td className="tg-q7v3">Grove-Sensor CO2</td>
      <td className="tg-q7v3">101020067</td>
    </tr>
  </tbody>
</table>

Y a veces, queremos probar muchos gases en un sensor, entonces ¿cómo deberíamos elegirlo?

<table className="tg" style={{tableLayout: 'fixed', width: 799}}>
  <thead>
    <tr>
      <th className="tg-l5ls">Nombre del Producto</th>
      <th className="tg-l5ls">SKU</th>
      <th className="tg-l5ls">Gases Medibles</th>
      <th className="tg-l5ls">Rango</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />Grove-Sensor de Gas Multicanal</td>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />101020088</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">0~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Alcohol</td>
      <td className="tg-q7v3">10~500ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Propano</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NO2</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NH3</td>
      <td className="tg-q7v3">1~500p</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Iso-butano</td>
      <td className="tg-q7v3">&gt;1000pm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">1~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />Grove-Sensor de Gas(MQ2)</td>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />101020055</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Alcohol</td>
      <td className="tg-q7v3">100~2000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">5000^20000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Propano</td>
      <td className="tg-q7v3">200~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">200~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Butano</td>
      <td className="tg-q7v3">3000~5000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">300~500pp</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Humo</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />Grove-Sensor de Gas(MQ3)</td>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />101020006</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Alcohol</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Hexano</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Bencina</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />Grove-Sensor de Gas(MQ5)</td>
      <td className="tg-q7v3" rowSpan={5}><br /><br />101020056</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Alcohol</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={3}>Grove-Sensor de Gas(MQ9)</td>
      <td className="tg-q7v3" rowSpan={3}>101020045</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">20~2000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">500~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">LPG</td>
      <td className="tg-q7v3">500~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Sensor de Polvo</td>
      <td className="tg-q7v3">101020012</td>
      <td className="tg-q7v3">Polvo</td>
      <td className="tg-q7v3">0~8000pcs/0.01cf</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Sensor de Alcohol</td>
      <td className="tg-q7v3">101020044</td>
      <td className="tg-q7v3">Alcohol</td>
      <td className="tg-q7v3">20~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Sensor de Gas(O2)<br /></td>
      <td className="tg-q7v3">101020002</td>
      <td className="tg-q7v3">O2</td>
      <td className="tg-q7v3">0~25%VOL<br />(0~25000pp)</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Sensor HCHO</td>
      <td className="tg-q7v3">101020001</td>
      <td className="tg-q7v3">HCHO</td>
      <td className="tg-q7v3">5~40ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Sensor CO2</td>
      <td className="tg-q7v3">101020067</td>
      <td className="tg-q7v3">CO2</td>
      <td className="tg-q7v3">0~200ppm</td>
    </tr>
  </tbody>
</table>

A continuación está el enlace de todos los gases a Bazaar, ¡elige el que necesites!

- [Grove - Gas Sensor(MQ-2)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ2.html)

- [Grove - Gas Sensor(MQ-3)](https://www.seeedstudio.com/Grove-MQ3-Grove-Gas-Sensor.html)

- [Grove - Gas Sensor(MQ-5)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ5.html)

- [Grove - Gas Sensor(MQ-9)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ9.html)

<!-- - [Grove - Gas Sensor(O2)](https://www.seeedstudio.com/depot/grove-gas-sensoro2-p-1541.html?cPath=25_27) 未找到相应链接-->

- [Grove - HCHO Sensor](https://www.seeedstudio.com/Grove-HCHO-Sensor.html)

- [Grove - Alcohol Sensor](https://www.seeedstudio.com/Grove-Alcohol-Sensor.html)

- [Grove - CO2 Sensor](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z16.html)

- [Grove - Multichannel Gas Sensor](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor.html)

- [Grove - Dust Sensor](https://www.seeedstudio.com/Grove-Dust-Sensor-PPD42NS.html)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
