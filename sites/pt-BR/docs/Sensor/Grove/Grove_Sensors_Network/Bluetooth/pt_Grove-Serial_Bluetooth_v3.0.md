---
title: Grove - Serial Bluetooth v3.0
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Serial_Bluetooth_v3.0/
slug: /Grove-Serial_Bluetooth_v3.0
sku: 113020008
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2022-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Serial_Bluetooth_v3.0/
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove-Serial_Bluetooth_v3.0.jpg)

Grove - Serial Bluetooth é um módulo fácil de usar compatível com o Grove Base Shield existente e projetado para configuração de conexão serial sem fio transparente. O módulo Bluetooth de porta serial é totalmente qualificado como Bluetooth V2.0+EDR (Enhanced Data Rate) com modulação de 2 Mbps com transceptor de rádio completo de 2,4 GHz e banda base. Ele usa o sistema Bluetooth de chip único CSR Bluecore 04-External com tecnologia CMOS e com AFH (Adaptive Frequency Hopping Feature). Tem a menor área de 12,7 mm x 27 mm. Esperamos que isso simplifique o seu ciclo geral de projeto/desenvolvimento.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Bluetooth-v3.0-p-2475.html)

Especificações
--------------

- Tensão de operação: 5,0 VDC
- Taxa de dados: 2 Mbps
- Potência de transmissão de RF (Máx)：+4 dBm
- Sensibilidade：-80 dBm
- Bluetooth V2.0+EDR totalmente qualificado, modulação 3 Mbps
- Taxa de baud selecionável
- Reconexão automática em 30 min quando desconectado devido a estar fora do alcance da conexão

:::tip
Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Demonstração
-------------

Dois módulos Bluetooth funcionam como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt5.JPG)

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Ppt6.JPG)

### Instalação de Hardware

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_3_.jpg.png)

### Baixar Código e Fazer Upload

1. Você pode baixar o código no GitHub, clique [aqui](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip), depois extraia-o para a pasta libraries do Arduino.
2. Abra a IDE do Arduino, vá em File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Master_Button, então você abre o código de Master e modifica o código como segue:

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/img/Grove_serial_bluetooth_4_.jpg.png)

1. Abra a IDE do Arduino, vá em File -> Examples -> Bluetooth_Shield_V2_Demo_Code -> Slave_led, então você abre o código de Slave e modifica o código também como acima.
2. Salve a modificação e clique em Upload para enviar o código. Se você tiver qualquer problema sobre como começar com Arduino, clique <a href="/pt-br/Getting_Started_with_Seeeduino"><span><font color={'8DC215'} size={"3"}> here </font></span></a> para obter alguma ajuda.

### Verificar o Resultado

1. Depois de terminar o Upload do código para Master e Slave, reinicie os dois dispositivos ao mesmo tempo
2. Você pode ver o LED piscar, indicando que os dispositivos estão inicializando e conectando.
3. Após alguns segundos, o LED acende, indicando que Master e Slave foram conectados.

<div class="admonition note">
<p class="admonition-title">Note</p>
Se o fenômeno acima não for observado, tente desconectar a alimentação e conectar novamente.
</div>

Referência
---------

### Comandos para alterar a configuração padrão

**1. Definir MODE de trabalho**

| Command  | Description                                 |
|----------|---------------------------------------------|
| AT+ROLES | Set device working mode as client (slave).  |
| AT+ROLEM | Set device working mode as server (master). |

**2.Set BAUDRATE**

| Command  | Description                                 |
|----------|---------------------------------------------|
| AT+BAUD4 | Set baudrate 9600. Save and Reset.  |
| AT+BAUD5 | Set baudrate 19200. Save and Reset.  |
| AT+BAUD6 | Set baudrate 38400. Save and Reset.  |
| AT+BAUD7 | Set baudrate 57600. Save and Reset.  |
| AT+BAUD8 | Set baudrate 115200. Save and Reset.  |
| AT+BAUD9 | Set baudrate 230400. Save and Reset.  |
| AT+BAUDA | Set baudrate 460800. Save and Reset.  |

**3. Definir NAME do dispositivo**

| Command        | Description                                    |
|----------------|------------------------------------------------|
| AT+NMAEabcdefg | Set device name as “abcdefg”.Max length is 12. |

**4. Definir PINCODE**

| Command    | Description                          |
|------------|--------------------------------------|
| AT+PIN2222 | Set pincode “2222”,Max length is 12. |

**5.Restaurar todos os valores de configuração para o padrão de fábrica**

| Command    | Description                              |
|------------|------------------------------------------|
| AT+DEFAULT | Restore all setup value to factory setup |

**6. Consultar endereço do módulo**

| Command | Description          |
|---------|----------------------|
| AT+ADDR | Query module address |

**7. Consultar endereço do último dispositivo conectado**

| Command | Description          |
|---------|----------------------|
| AT+RADD | Query module address |

<!-- ## Schematic Online Viewer -->

<!-- <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} -&gt; < div>
</div> -->
## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/<div>
  Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivo Eagle do Serial Bluetooth](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Grove-Serial_Bluetooth_eagle_file.zip)
- [Instruções de Software Bluetooth](https://files.seeedstudio.com/wiki/Bluetooth_Shield_V2/res/Bluetooth_en.pdf)
- [Bluetooth - Datasheet do Módulo](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth_v3.0/res/Bluetooth_module.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth_v3.0 -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
