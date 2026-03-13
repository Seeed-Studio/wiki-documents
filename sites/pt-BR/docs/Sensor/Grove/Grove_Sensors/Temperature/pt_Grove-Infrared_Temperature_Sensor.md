---
description: Grove - Sensor de Temperatura Infravermelho
title: Grove - Sensor de Temperatura Infravermelho
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Infrared_Temperature_Sensor
sku: 101020062
last_update:
  date: 1/4/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Temperature_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/main.jpg" /></div>

O sensor de temperatura infravermelho é um modelo de medição de temperatura sem contato. É composto por 116 elementos de termopar em série em uma micromembrana flutuante; a superfície preta do sensor é boa para absorver a radiação infravermelha térmica incidente, o que pode gerar uma resposta de tensão na saída. Este sensor fornece uma tensão analógica (0~1,1 V) de acordo com a temperatura do alvo.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Versão

Versão do Produto | Alterações | Data de Lançamento
--|--|--
Grove - Infrared Temperature Sensor v1.0 | Inicial | 11 Dez. 2015
Grove - Infrared Temperature Sensor v1.1 | Otimizar o layout  | 24 Jul. 2016
Grove - Infrared Temperature Sensor v1.2 | Alterar o chip de alimentação para tornar a fonte mais estável  | 10 Fev. 2018

## Especificações

- Tensão: 3-5 V
- Corrente de Medição: 160-200 uA
- Faixa de Medição: -10~100°C
- Tempo de Retenção: 2 s
- Temperatura de Operação: -10~80 °C
- Temperatura de Armazenamento: -35-80 °C

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas bibliotecas de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros Passos

### Brincar com Arduino

O sketch a seguir demonstra uma aplicação simples para medir a temperatura ambiente ao redor do sensor e a temperatura do alvo que está à frente do sensor, e imprimir o resultado no monitor serial.

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

- **Passo 1.** Prepare os seguintes materiais:

| Seeeduino V4.2 | Base Shield| Grove - Infrared Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/JUH4jM8D85pxTHah3QXYxhe7.jpg" /></div>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|

- **Passo 2.** Conecte o Grove - Infrared Temperature Sensor à porta **A0** do Grove-Base Shield.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/connect.jpg" /></div>

:::note
 Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Temperature and Humidity Sensor Pro ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Infrared Temperature Sensor |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| A1            | Branco                   |
| A0            | Amarelo                  |

#### Software

- **Passo 1.** Baixe o [Demo Code](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip), em seguida clique duas vezes para abrir a demo.

Antes de medir a temperatura, você precisa de uma configuração simples. Siga as instruções abaixo antes do teste e você obterá um resultado preciso.

- **Passo 2.** Regule a tensão do sensor

Após fazer o upload do programa de demonstração, deixe o sensor em ambiente normal por mais de 5 minutos para que a temperatura do sensor fique igual à temperatura ambiente. Em seguida, abra o monitor serial para verificar a tensão que o sensor fornece. Idealmente, quando a temperatura ambiente é igual à do sensor de temperatura, a saída do sensor infravermelho (TP-538U) é 0 V. Devemos regular a tensão de referência, que é deslocada para 0,5 V, por hardware. Como mostrado abaixo, a tensão do sensor é 0,014 V; só precisamos alterar o valor de offset_vol para 0,014, que você obtém no monitor serial, no programa.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_code2.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Serialmonitor.jpg" /></div>

- **Passo 3.** Regule a distância de detecção do sensor

De acordo com nosso experimento, a distância nominal de medição do sensor é 9 cm, mas não podemos garantir que todos os sensores tenham as mesmas características. Portanto, se você quiser obter resultados precisos, precisa regulá-lo com uma mistura de gelo e água para medir 0℃ e usar água fervente para ajustar 100℃. Depois disso, você pode obter a distância efetiva do sensor.

O método específico de medição é encher um recipiente escuro, que tenha uma superfície plana, com gelo e água. Aguarde o recipiente cair para 0℃, mantenha o sensor a 9 cm do objeto, mova o sensor para frente ou para trás e verifique o resultado; se a saída for 0℃, anote o valor da distância. Use o mesmo método para verificar a água fervente. Quando você obtiver um par de valores, faça um cálculo da média. Você pode começar a medir a uma distância nominal que acabou de obter agora.

Agora podemos medir a temperatura ambiente ao redor do sensor. O sensor é aplicado em uma distância nominal; você pode tentar em outras distâncias, mas o diagrama distância-temperatura não foi obtido nem pelo fabricante do sensor nem por nós; você pode desenhá-lo seguindo as duas instruções acima. Reservamos a variável **"temperature_range"** no código de demonstração. Assumimos que a distância do alvo é 3 cm; o coeficiente que você mediu pode ser 5 a mais ou a menos. Desejamos que você se divirta experimentando.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Infrared_Temperature_Sensor_Code_1.jpg" /></div>

:::note
**1**. O código de demonstração não suporta Atmega168.

**2**. Para obter uma medição precisa, a proporção entre a distância (D) e o diâmetro do alvo (S), D:S, deve ser menor que 0,5.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/Dsdiagram.jpg" /></div>

- **Passo 4.** Faça o upload da demonstração. Se você não sabe como enviar o código, consulte [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Abra o **Serial Monitor** da Arduino IDE clicando em **Tool-> Serial Monitor**. Ou pressione as teclas ++ctrl+shift+m++ ao mesmo tempo. Se tudo correr bem, você obterá a temperatura.

O resultado deve ser parecido com:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/img/result_arduino.png" /></div>

# Grove-Infrared Temperature Sensor V1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-Infrared Temperature Sensor V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Arquivo Eagle do Grove-Infrared Temperature Sensor V1.2](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Grove-Infrared_Temperature_Sensor_v1.2.zip)
- **[Zip]** [Arquivo Eagle do Grove-Infrared Temperature Sensor V1.0](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_Temperature_Sensor_V1.0_egale_file.zip)
- **[Zip]** [Datasheet do OTP-538U](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip)
- **[Zip]** [Código de Demonstração](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/MeasureTemperature.zip)
- **[Zip]** [Código de Demonstração de Temperatura Infravermelha com SerialLCD](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/Infrared_temperature_demo_code_with_serialLCD.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Infrared_Temperature_Sensor -->

## Suporte Técnico e Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade luminosa, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
