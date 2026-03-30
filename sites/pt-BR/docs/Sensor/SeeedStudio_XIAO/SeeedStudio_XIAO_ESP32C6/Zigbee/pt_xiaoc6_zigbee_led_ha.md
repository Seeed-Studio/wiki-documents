---
description: Apresenta como usar a função Zigbee do XIAO ESP32C6 e conectá-lo ao Home Assistant via Zigbee e zbt-1.
title: Conecte ao Home Assistant via o Zigbee do XIAO ESP32C6
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/0.webp
slug: /xiaoc6_zigbee_led_ha
last_update:
  date: 01/21/2025
  author: Citric
createdAt: '2025-01-22'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/xiaoc6_zigbee_led_ha/
---

# Conecte ao Home Assistant via o Zigbee do XIAO ESP32C6

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/1.png" style={{width:1000, height:'auto'}}/></div>

A integração de dispositivos Zigbee em ecossistemas de casas inteligentes tornou‑se cada vez mais popular devido ao baixo consumo de energia, confiabilidade e facilidade de uso do Zigbee. Neste wiki, iremos guiá‑lo na conexão do **XIAO ESP32C6** ao **Home Assistant** por meio da sua funcionalidade Zigbee. Ao final deste guia, você terá uma demonstração funcional em que o XIAO ESP32C6 atua como um dispositivo Zigbee que pode ser controlado diretamente pelo painel do Home Assistant.  

Este tutorial destaca o uso do Zigbee SDK (Arduino) da Espressif e demonstra como desenvolver e integrar seus próprios dispositivos Zigbee ao Home Assistant.  

## Materiais Necessários

Para acompanhar este guia, você precisará do seguinte:

1. **Home Assistant Green**: Um dispositivo de hardware dedicado do Home Assistant para gerenciar sua casa inteligente.  
2. **Home Assistant Connect ZBT-1**: Um coordenador Zigbee para habilitar a criação e comunicação da rede Zigbee.  
3. **XIAO ESP32C6**: Uma placa de desenvolvimento com funcionalidade Zigbee habilitada via SDK da Espressif.  

<div class="table-center">
 <table align="center">
  <tr>
   <th>Home Assistant Connect ZBT-1</th>
   <th>XIAO ESP32C6</th>
   <th>Home Assistant Green</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:240, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:240, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Guia Passo a Passo

:::tip
Os dois primeiros passos se referem ao tutorial oficial do Home Assistant Connect ZBT-1, e você também pode ler o conteúdo desse tutorial através do link aqui.

[Home Assistant Connect ZBT-1 Tutorial](https://connectzbt1.home-assistant.io/new-zigbee/)
:::

### Passo 1. Instale o Connect ZBT-1 no Home Assistant Green

Conecte o Home Assistant Connect ZBT-1 ao cabo de extensão USB. Conecte o cabo de extensão ao seu Home Assistant Green.

:::caution
Portas USB 3.0 e unidades USB 3.0 podem causar interferência com protocolos de 2,4 GHz, incluindo aqueles fornecidos pelo Home Assistant Connect ZBT-1. É importante usar o cabo de extensão USB e posicionar o Home Assistant Connect ZBT-1 longe de possíveis fontes de interferência.
:::

1. Navegue até **Settings** na interface do Home Assistant.
2. Vá para **Devices & Services** e localize a integração Zigbee.
3. O Connect ZBT-1 agora deve ter sido descoberto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/2.png" style={{width:1000, height:'auto'}}/></div>

4. Selecione **ADD**.
5. Na caixa de diálogo, selecione **Zigbee**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/3.png" style={{width:600, height:'auto'}}/></div>

6. Selecione **Submit** para concluir a configuração da integração Connect ZBT-1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/4.png" style={{width:600, height:'auto'}}/></div>

7. Seu Connect ZBT-1 agora é um coordenador Zigbee.

### Passo 2. Crie uma Nova Rede Zigbee Usando o Connect ZBT-1

1. Navegue até **Settings** na interface do Home Assistant.  
2. Vá para **Devices & Services** e localize a integração Zigbee.  
3. O Connect ZBT-1 será mostrado na sua integração Zigbee Home Automation. Selecione **ADD**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

4. Para confirmar, selecione **Submit**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/6.png" style={{width:400, height:'auto'}}/></div>

5. Selecione **Create network**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/7.png" style={{width:350, height:'auto'}}/></div>

4. Siga as instruções para inicializar o coordenador Zigbee e prepará‑lo para o pareamento com dispositivos Zigbee.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/8.png" style={{width:1000, height:'auto'}}/></div>

### Passo 3. Grave o XIAO ESP32C6 com o Programa de Exemplo Zigbee

1. **Configure a Arduino IDE**:

- Instale a versão mais recente da Arduino IDE e adicione suporte ao XIAO ESP32C6 incluindo o pacote de placas da Espressif.

:::note
Se você estiver usando o XIAO ESP32C6 pela primeira vez, leia o link do wiki abaixo para adicionar corretamente a placa de desenvolvimento.

[Getting Started with XIAO ESP32C6](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/)
:::

2. **Carregue o Exemplo Zigbee_On_Off_Light**:

- Selecione o modelo correto de placa de desenvolvimento: **XIAO_ESP32C6**.
- Abra o exemplo `Zigbee_On_Off_Light` na Arduino IDE.

:::tip
Recomendamos que você use o pacote de placas esp32-arduino mais recente para obter os exemplos Zigbee mais atuais e estáveis.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/9.png" style={{width:800, height:'auto'}}/></div>

- Neste exemplo, utilizaremos os LEDs monocromáticos integrados na placa XIAO ESP32C6, então precisamos fazer alterações nos pinos do LED no programa. Modifique o código para substituir `RGB_BUILTIN` por `LED_BUILTIN` para utilizar o LED indicador onboard.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/10.png" style={{width:800, height:'auto'}}/></div>

3. **Configure as Definições Zigbee**:

- Defina o modo Zigbee para **ZIGBEE_MODE_ED** (End Device).  
- Ajuste o esquema de partição para Zigbee:  
    Navegue até `Tools -> Partition Scheme` e selecione **Zigbee 4MB with spiffs**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/11.png" style={{width:700, height:'auto'}}/></div>

4. **Envie o Programa**:

- Conecte o XIAO ESP32C6 ao seu computador por meio de um cabo USB-C.  
- Compile e envie o programa de exemplo modificado para o XIAO ESP32C6.
- Se o XIAO estiver funcionando corretamente, você deverá ver a mensagem serial mostrada abaixo. Se você vir o XIAO reiniciando constantemente, verifique se as configurações Zigbee estão corretas ou atualize a versão do pacote de placas da placa de desenvolvimento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/12.png" style={{width:700, height:'auto'}}/></div>

### Passo 4. Descubra o XIAO ESP32C6 no Home Assistant

1. Na interface do Home Assistant, navegue até **Settings -> Devices & Services**.  
2. Selecione a integração Zigbee (nome: ZHA).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/13.png" style={{width:800, height:'auto'}}/></div>

3. Clique em **Nabu Casa HA Connect ZBT-1**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/14.png" style={{width:1000, height:'auto'}}/></div>

4. Dentro da página de detalhes do dispositivo Connect ZBT-1, você pode ver **ADD DEVICE VIA THIS DEVICE**, clique nele para ir para a página de descoberta e pareamento de dispositivos Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

5. Aguarde um momento, e o XIAO ESP32C6 aparecerá na lista de dispositivos Zigbee descobertos.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/16.png" style={{width:1000, height:'auto'}}/></div>

Você pode definir um nome e uma localização para ele nesta página.

6. Você pode então encontrar este dispositivo na página de dispositivos do ZHA e adicionar sua entidade ao painel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/17.png" style={{width:1000, height:'auto'}}/></div>

### Passo 5. Adicione o XIAO ESP32C6 ao Painel

1. Depois que o XIAO ESP32C6 for descoberto, adicione‑o ao painel do seu Home Assistant.  
2. Agora você pode controlar o XIAO ESP32C6 (por exemplo, alternar o LED onboard) diretamente a partir do Home Assistant.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/18.png" style={{width:1000, height:'auto'}}/></div>

## Conclusão

A Espressif oferece uma ampla variedade de tipos de dispositivos Zigbee e um extenso Zigbee SDK, permitindo que os desenvolvedores criem seus próprios dispositivos Zigbee com facilidade. Seguindo este tutorial, você aprendeu como integrar o XIAO ESP32C6 ao Home Assistant usando Zigbee, adicionando um dispositivo personalizado ao seu ecossistema de casa inteligente.  

Com a flexibilidade do Zigbee SDK da Espressif, você pode começar a construir seus próprios dispositivos Zigbee para uma variedade de aplicações e recursos, e adicioná‑los perfeitamente ao Home Assistant para controle centralizado. Boas construções!

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
