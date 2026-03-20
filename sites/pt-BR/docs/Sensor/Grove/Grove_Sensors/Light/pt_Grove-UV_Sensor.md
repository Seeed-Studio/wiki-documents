---
description: Grove - Sensor UV
title: Grove - Sensor UV
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-UV_Sensor
sku: 101020043
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-UV_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/UV_Sensor_01.jpg" /></div>

O Grove – Sensor UV é usado para detectar a intensidade da radiação ultravioleta (UV) incidente. Essa forma de radiação eletromagnética tem comprimentos de onda menores do que a radiação visível. O Grove - Sensor UV é baseado no sensor GUVA-S12D, que possui uma ampla faixa espectral de 200 nm a 400 nm. O módulo gera um sinal elétrico que varia com a intensidade de UV, o que lhe dá uma indicação se é uma boa ideia ir à praia hoje.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Recursos
--------

- Alta estabilidade
- Boa sensibilidade
- Baixo consumo de energia
- Sensor fotodiodo tipo Schottky
- Ampla faixa de resposta
- Interface Grove

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
--------------

| Item                | Min | Típico | Máx | Unidade |
|---------------------|-----|---------|-----|------|
| Tensão de operação  | 3.0 | 5.0     | 5.1 | VDC  |
| Corrente            |     | 0.31    |     | mA   |
| Tensão de saída     |     |         |     | mV   |
| Comprimento de onda de resposta | 240 | ~       | 370 | nm   |
| Temperatura de trabalho | -30 | ~       | 85  | ℃    |

Plataformas compatíveis
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

Ideias de aplicação
-----

- Sensores UV são usados em muitas aplicações diferentes, incluindo produtos farmacêuticos, automóveis e robótica.
- Sensores UV também são usados na indústria gráfica para manuseio de solventes e processos de tingimento.
- Além disso, sensores UV são utilizados na indústria química para a produção, armazenamento e transporte de produtos químicos.

A teoria do sensor UV é: à luz do sol, o índice UV e a fotocorrente têm uma relação linear.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/The%20theory%20of%20UV%20sensor.png" /></div>

No nosso Grove - Sensor UV, convertemos a fotocorrente em valor de tensão correspondente coletado pelo Arduino/Seeeduino. A tensão de saída e o índice UV são lineares:

**intensidade de iluminação = 307 * Vsig**

Vsig é o valor da tensão medida a partir do pino SIG da interface Grove, unidade V.
Unidade da intensidade de iluminação: mW/m<sup>2</sup> para a força combinada da luz UV com faixa de comprimento de onda: 240 nm ~ 370 nm

:::note
Para calcular o valor do índice UV, consulte a <a href="http://www2.epa.gov/sunwise/uv-index">US EPA</a>. É difícil afirmar que a medição deste sensor pode ser convertida para o índice UV padrão da EPA, mas pode ser estimada grosseiramente.
:::

Índice UV = intensidade de iluminação / 200

Primeiros passos
--------------

:::note
    Este capítulo é baseado em Win10 e Arduino IDE 1.6.9
:::

Mostraremos como este Grove - Sensor UV funciona através de uma demonstração simples. Antes de tudo, você precisa preparar os itens abaixo:

| Seeeduino V4 | Grove - UV Sensor | Base Shield |
|--------------|----------------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

  **Conexão**

  Graças aos benefícios dos módulos da série Grove, você não precisa fazer solda nem usar protoboard, o que você precisa fazer é conectar os módulos à porta correta do Base Shield. Para esta demonstração, precisamos de apenas um módulo Grove.

- Conecte o Grove UV Sensor à porta A0 do Grove - Base Shield.
- Conecte o Grove - Base Shield ao Arduino/Seeeduino e conecte-os ao PC usando um cabo USB.
- O código de demonstração é mostrado abaixo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/img/connection.jpg" /></div>

  **Carregue o sketch para o Arduino e abra a porta serial para monitorar os dados**

```
// modified by Victor
// to calculate UV index directly
void setup(){

    Serial.begin(9600);
}

void loop()
{
    int sensorValue;
    long  sum=0;
    for(int i=0;i<1024;i++)// accumulate readings for 1024 times
    {
        sensorValue=analogRead(A0);
        sum=sensorValue+sum;
        delay(2);
    }
    long meanVal = sum/1024;  // get mean value
    Serial.print("The current UV index is:");
    Serial.print((meanVal*1000/4.3-83)/21);// get a detailed calculating expression for UV index in schematic files.
    Serial.print("\n");
    delay(20);

}
```

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Grove - UV Sensor v1.1 PCB e esquemáticos (versão atual) em formato Eagle](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1.zip)
- [Grove - UV Sensor v1.1 PCB (versão atual) em formato PDF](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1%20brd.pdf)
- [Grove - UV Sensor v1.1 esquemáticos (versão atual) em formato PDF](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove%20-%20UV%20Sensor%20v1.1sch.pdf)
- [Grove - UV Sensor v1.1 Sensor Datasheets (versão atual)](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.1_Datasheets.zip)
- [Sugestões da US EPA sobre radiação UV](https://www.epa.gov/sunsafety/uv-index-scale-1)
- [Grove - UV Sensor v1.0 esquemáticos e folhas de dados (versão antiga)](https://files.seeedstudio.com/wiki/Grove-UV_Sensor/res/Grove-UV_Sensor_v1.0_Datasheets.zip)

<!-- Este arquivo Markdown foi criado a partir de https://www.seeedstudio.com/wiki/Grove_-_UV_Sensor -->

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [data logger S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
