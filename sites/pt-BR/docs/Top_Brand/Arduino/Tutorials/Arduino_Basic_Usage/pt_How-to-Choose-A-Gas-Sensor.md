---
description: Como Escolher um Sensor de Gás
title: Como Escolher um Sensor de Gás
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How-to-Choose-A-Gas-Sensor
last_update:
  date: 02/02/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/How-to-Choose-A-Gas-Sensor/
---

Se você pesquisar “gas sensor” em [www.seeedstudio.com](https://www.seeedstudio.com) , poderá encontrar muitos sensores de gás. Sabemos que a composição do ar é diversa e que um determinado sensor de gás pode detectar um ou mais componentes do ar, por isso projetamos uma série de sensores de gás.

Existem cerca de 10 tipos de sensor de gás à venda. Eles têm nomes semelhantes, o que provavelmente causará confusão. Esperamos que, por meio da apresentação a seguir, possamos ajudá‑lo a escolher facilmente o sensor de gás apropriado.

É óbvio que sensores diferentes podem detectar o mesmo gás. Por exemplo, MQ-2, MQ-3, MQ-5 Alcohol Sensor, Grove – HCHO Sensor podem detectar álcool. Então, se você quer um sensor de álcool, qual deles deve escolher? Embora a maioria dos sensores acima seja capaz de detectar álcool, você deve saber que eles têm faixas diferentes para álcool.

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
      <th className="tg-l5ls">Gás</th>
      <th className="tg-l5ls">Faixa</th>
      <th className="tg-l5ls">Nome do Produto</th>
      <th className="tg-l5ls">SKU</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-q7v3">Poeira</td>
      <td className="tg-q7v3">0~8000pcs/0.01cf</td>
      <td className="tg-q7v3">Grove-Dust Sensor</td>
      <td className="tg-q7v3">101020012</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">20~2000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0~1000ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />Álcool</td>
      <td className="tg-q7v3">200~10000pp</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">100ppm~2000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">10~500ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">20~1000ppm</td>
      <td className="tg-q7v3">Grove-Alcohol Sensor</td>
      <td className="tg-q7v3">101020044</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">O2</td>
      <td className="tg-q7v3">0~25%VOL<br />(0~25000ppm)</td>
      <td className="tg-q7v3">Grove-Gas Sensor(O2)</td>
      <td className="tg-q7v3">101020002</td>
    </tr>
    <tr>
      <td className="tg-q7v3">HCHO</td>
      <td className="tg-q7v3">5~40ppm</td>
      <td className="tg-q7v3">Grove-HCHO Sensor</td>
      <td className="tg-q7v3">101020001</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />CH4</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">5000~20000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">500~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">&gt;1000mmp</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr]
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Hexano</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">101020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={2}>Propeno</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~5000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Butano</td>
      <td className="tg-q7v3">3000~5000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Benzeno</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">01020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={4}><br />GLP</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~5000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">500~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ9)</td>
      <td className="tg-q7v3">101020045</td>
    </tr>
    <tr>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3">01020006</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={3}>H2</td>
      <td className="tg-q7v3">300~5000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">1~1000ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3">101020056</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Fumaça</td>
      <td className="tg-q7v3">200~10000ppm</td>
      <td className="tg-q7v3">Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3">101020055</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NO2</td>
      <td className="tg-q7v3">0.05~10ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">NH3</td>
      <td className="tg-q7v3">1~500ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Iso-butano</td>
      <td className="tg-q7v3">&gt;1000ppm</td>
      <td className="tg-q7v3">Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3">101020088</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CO2</td>
      <td className="tg-q7v3">0~2000ppm</td>
      <td className="tg-q7v3">Grove-CO2 Sensor</td>
      <td className="tg-q7v3">101020067</td>
    </tr>
  </tbody>
</table>

E às vezes queremos testar muitos gases em um único sensor, então como devemos escolhê‑lo?

<table className="tg" style={{tableLayout: 'fixed', width: 799}}>
  <thead>
    <tr>
      <th className="tg-l5ls">Nome do Produto</th>
      <th className="tg-l5ls">SKU</th>
      <th className="tg-l5ls">Gases Mensuráveis</th>
      <th className="tg-l5ls">Faixa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />Grove-Multichannel Gas Sensor</td>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />101020088</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">0~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Álcool</td>
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
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />Grove-Gas Sensor(MQ2)</td>
      <td className="tg-q7v3" rowSpan={8}><br /><br /><br /><br /><br />101020055</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Álcool</td>
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
      <td className="tg-q7v3">GLP</td>
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
      <td className="tg-q7v3">Fumaça</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />Grove-Gas Sensor(MQ3)</td>
      <td className="tg-q7v3" rowSpan={6}><br /><br /><br />101020006</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Álcool</td>
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
      <td className="tg-q7v3">Benzeno</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">GLP</td>
      <td className="tg-q7v3">0.05~10ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={5}><br /><br />Grove-Gas Sensor(MQ5)</td>
      <td className="tg-q7v3" rowSpan={5}><br /><br />101020056</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Álcool</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">GLP</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">H2</td>
      <td className="tg-q7v3">200~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3" rowSpan={3}>Grove-Gas Sensor(MQ9)</td>
      <td className="tg-q7v3" rowSpan={3}>101020045</td>
      <td className="tg-q7v3">CO</td>
      <td className="tg-q7v3">20~2000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">CH4</td>
      <td className="tg-q7v3">500~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">GLP</td>
      <td className="tg-q7v3">500~10000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Dust Sensor</td>
      <td className="tg-q7v3">101020012</td>
      <td className="tg-q7v3">Poeira</td>
      <td className="tg-q7v3">0~8000pcs/0.01cf</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Alcohol Sensor</td>
      <td className="tg-q7v3">101020044</td>
      <td className="tg-q7v3">Álcool</td>
      <td className="tg-q7v3">20~1000ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-Gas Sensor(O2)<br /></td>
      <td className="tg-q7v3">101020002</td>
      <td className="tg-q7v3">O2</td>
      <td className="tg-q7v3">0~25%VOL<br />(0~25000pp)</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-HCHO Sensor</td>
      <td className="tg-q7v3">101020001</td>
      <td className="tg-q7v3">HCHO</td>
      <td className="tg-q7v3">5~40ppm</td>
    </tr>
    <tr>
      <td className="tg-q7v3">Grove-CO2 Sensor</td>
      <td className="tg-q7v3">101020067</td>
      <td className="tg-q7v3">CO2</td>
      <td className="tg-q7v3">0~200ppm</td>
    </tr>
  </tbody>
</table>

A seguir está o link de todos os gases para o Bazaar, escolha o que você precisa!

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

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
