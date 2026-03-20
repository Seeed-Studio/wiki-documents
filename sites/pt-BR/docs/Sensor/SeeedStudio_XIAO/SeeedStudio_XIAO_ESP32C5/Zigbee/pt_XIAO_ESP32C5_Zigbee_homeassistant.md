---
title: Conectar ao Home Assistant via XIAO ESP32C5 Zigbee
keywords:
  - xiao
  - esp32c5
  - zigbee
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_esp32c5_zigbee_homeassistant
sku: 100010048
last_update:
  date: 1/9/2026
  author: Zeller
createdAt: '2026-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_zigbee_homeassistant/
---

# Conectar ao Home Assistant via XIAO ESP32-C5 Zigbee

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_1_1.png" style={{width:800, height:'auto'}}/></div><br/>

A integração de dispositivos Zigbee em ecossistemas de casa inteligente tornou-se cada vez mais popular devido ao baixo consumo de energia, confiabilidade e facilidade de uso do Zigbee. Neste wiki, vamos guiá‑lo na conexão do **XIAO ESP32-C5** ao **Home Assistant** por meio de sua funcionalidade Zigbee. Ao final deste guia, você terá uma demonstração funcional em que o XIAO ESP32-C5 atua como um dispositivo Zigbee que pode ser controlado diretamente pelo painel do Home Assistant.  

Este tutorial destaca o uso do Zigbee SDK (Arduino) da Espressif e demonstra como desenvolver e integrar seus próprios dispositivos Zigbee ao Home Assistant.  

## Preparação de Hardware

Para acompanhar este guia, você vai precisar do seguinte:

1. **Home Assistant Green**: Um dispositivo de hardware dedicado do Home Assistant para gerenciar sua casa inteligente.  
2. **Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E**: Um coordenador Zigbee para permitir a criação e comunicação da rede Zigbee.  
3. **XIAO ESP32-C5**: Uma placa de desenvolvimento com funcionalidade Zigbee habilitada por meio do SDK da Espressif.  

<div class="table-center">
 <table align="center">
  <tr>
   <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
   <th>XIAO ESP32-C5</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-113991082-sonoff-zigbee-3.0-usb-dongle-plus-feature.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip

Se você não tiver um Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E em mãos, também pode escolher o [**Home Assistant Connect ZBT-2**](https://www.seeedstudio.com/Home-Assistant-Connect-ZBT-2-p-6573.html).
:::

## Integrando Zigbee com o Home Assistant

Vamos mostrar como usar o XIAO ESP32-C5 como um dispositivo Zigbee para se conectar ao Home Assistant.

### Conectar o ZBDongle-E

Insira o **Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E** em um cabo de extensão USB. Conecte o cabo de extensão ao **Home Assistant Green**.

:::caution
Portas USB 3.0 e unidades USB 3.0 podem causar interferência com protocolos de 2,4 GHz, incluindo aqueles fornecidos pelo Home Assistant Connect ZBDongle-E. É importante usar o cabo de extensão USB e posicionar o Home Assistant Connect ZBDongle-E afastado de possíveis fontes de interferência.
:::

**Etapa 1.** Descobrir Dispositivos Zigbee

- Setting -> Devices & services

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_1.png" style={{width:800, height:'auto'}}/></div><br/>

-Em Integrations, você encontrará o dispositivo SONOFF Zigbee 3.0 USB Dongle Plus V2, que é o Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_2.png" style={{width:800, height:'auto'}}/></div><br/>

**Etapa 2.** Adicionar Dispositivos Zigbee

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_3.png" style={{width:800, height:'auto'}}/></div><br/>

**Etapa 3.** Criar uma Rede Zigbee

- Depois de clicar em Submit, será solicitado que você selecione o modo de dispositivo Zigbee. Escolha criar uma rede Zigbee no Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_4.png" style={{width:800, height:'auto'}}/></div><br/>

- Quando concluído com sucesso, você verá que o dispositivo Zigbee foi adicionado em Configured.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_5.png" style={{width:800, height:'auto'}}/></div><br/>

- O ZBDongle-E é definido como o coordenador, que pode controlar dispositivos finais Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_6.png" style={{width:800, height:'auto'}}/></div><br/>

### Gravar o Exemplo Zigbee

Usaremos o exemplo Zigbee `HA_On_Off_Light` da Arduino IDE para esta demonstração.<br/>
Se você nunca usou a Arduino IDE antes, consulte [Getting Started with Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_getting_started/#software) para começar.

**Etapa 1.** selecione o exemplo na Arduino IDE pelo caminho: **File** -> **Examples** -> **Zigbee** -> **Zigbee_On_Off_Light**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_light.png" style={{width:800, height:'auto'}}/></div><br/>

**Etapa 2.** Definir o End Device e o Partition Scheme

- Clique em **Tools** -> **Zigbee Mode** e selecione o modo como **Zigbee ED (End Device)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_1.png" style={{width:800, height:'auto'}}/></div>

- Selecione Partition Scheme indo em **Tools** -> **Partition Scheme** -> **Zigbee 8MB with spiffs**

A memória FLASH do XIAO ESP32-C5 é de 8MB. Ao selecionar um esquema de partição, é recomendado escolher **Zigbee 8MB with spiffs**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_arduino_2.png" style={{width:800, height:'auto'}}/></div><br/>

**Etapa 3.** Modificar o Pino e o Nome do LED

- Localize o código relacionado à configuração de pinos no exemplo.

```cpp
uint8_t led = RGB_BUILTIN;
```

- No XIAO ESP32-C5, o LED USER onboard corresponde ao pino GPIO27, que precisa ser modificado.

```cpp
uint8_t led = 27;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n2.png" style={{width:800, height:'auto'}}/></div><br/>

- No XIAO ESP32-C5, o LED USER onboard corresponde ao pino GPIO27, que precisa ser modificado.

```cpp
zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

- Modificado

```cpp
zbLight.setManufacturerAndModel("XIAO-ESP32-C5", "ZBLightBulb");
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**Etapa 4.** Upload

Envie o código de exemplo com os pinos modificados para o XIAO ESP32-C5.

### Conectar à Rede Zigbee

Conecte o XIAO ESP32-C5 (configurado como um Zigbee End Device) à rede Zigbee criada no Home Assistant.

**Etapa 1.** Descobrir Dispositivos Finais

- Após gravar o código de exemplo no XIAO ESP32-C5, ele entrará automaticamente na rede Zigbee. Abra a página Integrations e você verá dois dispositivos Zigbee aparecerem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_7.png" style={{width:800, height:'auto'}}/></div><br/>

- Um é o dispositivo Coordinator (o ZBDongle-E conectado ao Home Assistant Green) e o outro é o End Device (XIAO-ESP32-C5 ZBLightBulb).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Para entrar na rede Zigbee de forma mais rápida e estável, você pode conectar a antena flexível FPC do pacote ao XIAO ESP32-C5.
:::

**Etapa 2.** Adicionar ao Dashboard

- Clique no dispositivo **XIAO-ESP32-C5 ZBLightBulb** e adicione‑o ao dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_9.png" style={{width:800, height:'auto'}}/></div><br/>

- Você pode encontrar o dispositivo **XIAO-ESP32-C5 ZBLightBulb** no dashboard, onde pode enviar comandos de controle para ele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_10.png" style={{width:800, height:'auto'}}/></div><br/>

### Demonstração do Efeito

- Quando o dispositivo final XIAO ESP32-C5 entrar na rede Zigbee com sucesso, isso será exibido no Serial Monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_ha_11.png" style={{width:800, height:'auto'}}/></div><br/>

- Efeito Real

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>

## Conclusão

A Espressif oferece uma ampla variedade de tipos de dispositivos Zigbee e um extenso Zigbee SDK, permitindo que desenvolvedores criem facilmente seus próprios dispositivos Zigbee. Seguindo este tutorial, você aprendeu como integrar o XIAO ESP32-C5 ao Home Assistant usando Zigbee, adicionando dispositivos personalizados ao seu ecossistema de casa inteligente.

Com a flexibilidade do Espressif Zigbee SDK, você pode começar a construir seus próprios dispositivos Zigbee para diversas aplicações e recursos, e adicioná-los perfeitamente ao Home Assistant para controle centralizado. Boas construções!

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
