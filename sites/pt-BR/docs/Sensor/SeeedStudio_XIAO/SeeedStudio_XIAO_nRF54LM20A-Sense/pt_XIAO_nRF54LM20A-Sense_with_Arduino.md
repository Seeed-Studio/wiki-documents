---
title: XIAO nRF54LM20A Sense com Arduino
description: Este artigo apresenta como desenvolver com o Seeed Studio XIAO nRF54LM20A Sense usando a IDE Arduino.
keywords:
  - xiao
  - nrf54lm20a
  - Arduino
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_with_arduino
sku: 100018440
last_update:
  date: 06/22/2026
  author: Brandy
createdAt: '2025-07-15'
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_arduino/
---

# Seeed Studio XIAO nRF54LM20A Sense com Arduino

Esta seção orienta você pela preparação de hardware e software necessária para o desenvolvimento com Arduino. Seguindo as etapas abaixo, você configurará seu ambiente de desenvolvimento, ajustará a IDE Arduino e preparará sua placa XIAO para programação. Quando a configuração estiver concluída, você poderá compilar, enviar e testar rapidamente os sketches de exemplo fornecidos.

## Introdução

### Preparação de hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x Computador
- 1 x Cabo USB Tipo-C

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>


### Software

O XIAO nRF54LM20A oferece suporte ao desenvolvimento com a IDE Arduino. Antes de começar, instale e configure a IDE Arduino.

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Introdução ao Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

- **Passo 1.** Baixe e instale a versão estável da IDE Arduino de acordo com o seu sistema operacional.

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **Passo 2.** Inicie o aplicativo Arduino.

- **Passo 3.** Abra **Arduino IDE** > **Settings**, encontre **Additional Boards Manager URLs** e adicione o seguinte URL:

```shell
https://raw.githubusercontent.com/lolren/nrf54-arduino-core/main/package_nrf54l15clean_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/1.png" style={{width:800, height:'auto'}}/></div>

- **Passo 4.** Vá em **Tools** > **Board** > **Boards Manager**, procure por **nRF54L15 Boards** e instale.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/2.png" style={{width:800, height:'auto'}}/></div>

- **Passo 5.** Após conectar a placa, selecione a seguinte placa na IDE Arduino:

**Tools** > **Board** > **nRF54L15 Boards** > **XIAO nRF54LM20A**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/3.png" style={{width:800, height:'auto'}}/></div>

### Enviar programa

O exemplo a seguir usa um programa simples de piscar LED.

**Passo 1.** Selecione o código de exemplo **Blink** para teste.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/4.png" style={{width:800, height:'auto'}}/></div>

**Passo 2.** Clique em **Upload** para compilar e enviar o sketch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/6.png" style={{width:800, height:'auto'}}/></div><br/>

Demonstração do efeito:

Depois de enviar o programa e pressionar o botão de reset, o indicador L piscará em intervalos de 1 segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/M20A_ARDUINO/7.gif" style={{width:800, height:'auto'}}/></div>

## Agradecimentos especiais

Agradecimentos especiais a **lolren** por contribuir com a adaptação do Arduino para o XIAO nRF54LM20A. O código e o README são claros e úteis. Se você quiser saber mais sobre como usar o XIAO nRF54LM20A com Arduino, consulte os links do GitHub abaixo.

- [Repositório do Arduino Core](https://github.com/lolren/nrf54-arduino-core)
- [Página inicial do autor no GitHub](https://github.com/lolren)


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
