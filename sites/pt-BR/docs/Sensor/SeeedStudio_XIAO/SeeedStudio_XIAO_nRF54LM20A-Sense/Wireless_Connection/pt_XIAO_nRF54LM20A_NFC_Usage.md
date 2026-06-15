---
title: NFC para XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - nfc
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.webp
slug: /xiao_nrf54lm20a_with_nfc
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-25'
updatedAt: '2026-05-25'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_nfc/
---

# NFC para XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_NFC.png" style={{width:400, height:'auto'}}/></div>
<br/>
Near Field Communication (NFC) é uma tecnologia para transferência sem fio de pequenas quantidades de dados entre dois dispositivos. Ela usa protocolos de comunicação muito simples e, portanto, permite uma conexão mais rápida do que Bluetooth® Low Energy. No entanto, como a NFC usa indução magnética para possibilitar a comunicação, os dispositivos devem estar muito próximos (< 10 cm) para se conectar.】

- *Para tutoriais e referências de NFC para chips da série Nordic, consulte [Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-3.2.0/page/nrf/protocols/nfc/index.html)*
- *As especificações técnicas para NFC estão disponíveis em [NFC Forum specification overview](https://nfc-forum.org/build/specifications)*.

O XIAO nRF54LM20A está equipado com uma interface NFC reservada para que você possa explorar e utilizar ainda mais as funções de NFC.

:::tip

Este tutorial é baseado no VS Code e na extensão nRF Connect. Se você é iniciante neles, pode consultar [XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_ncs/)

:::

## Preparação de hardware

Antes de iniciar o experimento, você precisa preparar um XIAO nRF54LM20A e uma antena NFC da Nordic.

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

:::tip

A antena NFC da Nordic não é vendida separadamente no Seeed Studio Bazaar, portanto você precisará comprá-la de outras fontes.

:::

### Solde a antena

No XIAO nRF54LM20A, os pinos padrão para a antena NFC externa são P1.01 e P1.02, marcados como N1 e N2 na serigrafia. Veja o exemplo de soldagem abaixo.

- Diagrama de pré-conexão

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_1.png" style={{width:600, height:'auto'}}/></div>
<br/>
- Diagrama de conexão física

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_2.jpg" style={{width:600, height:'auto'}}/></div>
<br/>
:::caution

Este processo de soldagem é relativamente difícil e requer habilidades de soldagem proficientes. Por favor, preste atenção às precauções de segurança para evitar ferimentos pessoais e danos ao dispositivo.

:::

## Software

:::tip

- Esta seção demonstra como usar NFC com base em código de exemplo do Nordic Connect SDK.
<!-- - 由于 Platfrom IO 下我们没有编写NFC的设备树支持，所以无法使用 -->

:::

### NFC Records text

Este exemplo demonstra a leitura de informações de texto via NFC.

1. Dentro da extensão, crie uma rotina em branco e escolha copiar uma rotina existente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. Digite nfc, selecione NFC Records text

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_5.png" style={{width:800, height:'auto'}}/></div>

3. Selecione o caminho de armazenamento

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_4.png" style={{width:800, height:'auto'}}/></div>

4. Abra o projeto, adicione a configuração do XIAO nRF54LM20A na extensão correspondente e compile.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_6.png" style={{width:800, height:'auto'}}/></div>

5. Abra o terminal e insira o comando `west flash` para gravar o firmware no XIAO nRF54LM20A.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_7.png" style={{width:800, height:'auto'}}/></div>

#### Resultado

Selecione um celular com funcionalidade NFC para tentar este experimento.

1. Para visualizar as informações lidas por NFC com mais detalhes, você precisa baixar o aplicativo correspondente ao seu sistema.

- iOS :[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Coloque a área NFC do seu telefone próxima à antena NFC para ler informações detalhadas de NFC.

As informações de texto exibidas no seu telefone são:

```txt
Hello World!
Hallo Verden!
Witaj świecie!
```

<div className="table-center">
<table align="center">
<tr>
      <td>NFC Tools</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_8.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_9.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

### NFC Launch App

Esta seção aborda a função NFC. Pesquise por **nRF Toolbox for Bluetooth LE**.

1. Dentro da extensão, crie um projeto de exemplo em branco, selecione copiar um exemplo existente e escolha **NFC Launch App**. Configure e compile consultando [NFC Records text](#NFC-Records-text).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_10.png" style={{width:800, height:'auto'}}/></div>

2. 打开终端，输入 `west flash`指令烧录到 XIAO nRF54LM20A 上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_11.png" style={{width:800, height:'auto'}}/></div>

#### Resultado

1. Para visualizar as informações lidas por NFC com mais detalhes, você precisa baixar o aplicativo correspondente ao seu sistema.

- iOS :[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Aproxime o sensor NFC do seu telefone da antena NFC. O navegador será iniciado e pesquisará por "no.nordicsemi.android.nrftoolbox", e o registro de leitura será exibido no nRF NFC Toolbox.

<div className="table-center">
<table align="center">
<tr>
      <td>Chrome</td>
      <td>nRF NFC Toolbox</td>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_12.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_13_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

## Resumo

Os recursos de NFC podem ser reutilizados em vários cenários, como gravação de dados e despertar de baixo consumo de energia. O nRF Connect SDK fornece códigos de exemplo correspondentes. Você pode estender esses exemplos para aplicações práticas. Por exemplo, combinar o despertar de baixo consumo de energia por NFC com controle de motor permite um simples cadeado inteligente para uso diário.

Além disso, acreditamos que você obteve uma compreensão básica da implementação de NFC no XIAO nRF54LM20A por meio dos exemplos acima. Aguardamos suas ideias criativas e contribuições para a comunidade de código aberto.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
