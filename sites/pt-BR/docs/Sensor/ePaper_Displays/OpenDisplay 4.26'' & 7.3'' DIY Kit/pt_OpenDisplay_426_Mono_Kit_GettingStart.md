---
description: Introdução ao OpenDisplay 4.26" Mono Kit — um display e-paper BLE pronto para uso, co-desenvolvido pela Seeed Studio e OpenDisplay
title: Introdução ao OpenDisplay 4.26" Mono Kit
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.webp
slug: /opendisplay_426_mono_kit
sku: 100036064
last_update:
  date: 10/22/2026
  author: Nemo
createdAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/opendisplay_426_mono_kit/
updatedAt: '2026-10-22'
---

# Introdução ao OpenDisplay 4.26" Mono Kit

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.webp" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OpenDisplay-4-26-Mono-Kit-p-7032.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O OpenDisplay 4.26" Mono Kit é um display e-paper pronto para uso, co-desenvolvido pela Seeed Studio e OpenDisplay. Ele vem **totalmente montado** com um painel preto e branco de 4,26 polegadas e 800×480, uma placa Seeed [XIAO ePaper Display Board EN05](https://wiki.seeedstudio.com/pt-br/epaper_en05/) (XIAO nRF52840 Plus), uma bateria de 2000 mAh e um gabinete impresso em 3D — firmware já instalado.

Use-o via **Bluetooth Low Energy** a partir do seu navegador ou do Home Assistant. Não é necessário Wi-Fi. O rádio permanece em modo de escuta de baixo consumo, para que você possa enviar uma nova imagem sempre que o display estiver ligado e ao alcance. A atualização parcial está disponível no modo preto e branco. Com aproximadamente uma atualização a cada 15 minutos, é possível estimar até cerca de **dois anos** entre recargas.

### O que você precisa

- O kit, ligado e dentro do alcance do Bluetooth
- Um telefone ou computador com Bluetooth
- Chrome ou Edge (desktop/Android), ou Bluefy em iPhone/iPad

## Visão geral

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>MCU</th>
      <td>Seeed <a href="https://wiki.seeedstudio.com/pt-br/epaper_en05/">XIAO ePaper Display Board EN05</a> (XIAO nRF52840 Plus)</td>
    </tr>
    <tr>
      <th>Display</th>
      <td>ePaper monocromático de 4,26 polegadas</td>
    </tr>
    <tr>
      <th>Cores</th>
      <td>Preto e branco (padrão); opcional 4 tons de cinza</td>
    </tr>
    <tr>
      <th>Atualização parcial</th>
      <td>Suportada apenas no modo preto e branco</td>
    </tr>
    <tr>
      <th>Resolução</th>
      <td>800 × 480</td>
    </tr>
    <tr>
      <th>Bateria</th>
      <td>Íon de lítio recarregável de 2000 mAh</td>
    </tr>
    <tr>
      <th>Conectividade</th>
      <td>Apenas Bluetooth Low Energy (sem Wi-Fi)</td>
    </tr>
    <tr>
      <th>Gabinete</th>
      <td>Gabinete impresso em 3D incluído</td>
    </tr>
  </tbody>
</table>

## Ligar

1. Tire o kit da caixa e ligue-o.
2. Aguarde a atualização de boot — geralmente **alguns segundos** para preto e branco. O efeito de cintilação é normal.
3. Quando terminar, a tela de boot mostra o nome do seu dispositivo (começa com **OD**), **KEY1:** / **KEY2:** e um código QR.

A criptografia vem **desativada**, então as linhas de chave mostram **not set**. Você não precisa de uma chave para o uso normal logo após tirar da caixa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/4.26.png" style={{width:800, height:'auto'}}/></div>

## Envie sua primeira imagem

Escaneie o código QR no display. Ele abre uma página personalizada em [opendisplay.org](https://opendisplay.org/l/) com atalhos para este dispositivo:

<table>
  <thead>
    <tr>
      <th>Atalho</th>
      <th>O que faz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Send an image</th>
      <td>Abre o BLE Tester para enviar uma imagem de teste a partir do seu navegador</td>
    </tr>
    <tr>
      <th>Add to Home Assistant</th>
      <td>Inicia a adição do dispositivo ao Home Assistant</td>
    </tr>
    <tr>
      <th>Advanced → Toolbox</th>
      <td>Altera configurações ou regrava o firmware (desenvolvedores / recuperação)</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Landing_page.png" style={{width:600, height:'auto'}}/></div>

### Suporte de navegador

<table>
  <thead>
    <tr>
      <th>Navegador</th>
      <th>Suporte</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Chrome ou Edge (desktop, Android)</th>
      <td>Suportado</td>
    </tr>
    <tr>
      <th>iPhone / iPad</th>
      <td>Use Bluefy (App Store id1492822055)</td>
    </tr>
    <tr>
      <th>Firefox</th>
      <td>Não suportado</td>
    </tr>
  </tbody>
</table>

Na landing page, escolha **Send an image** (ou abra [opendisplay.org](https://opendisplay.org/firmware/display/index.html)). Clique em **Connect**, selecione seu dispositivo na lista do navegador (o nome começa com **OD** — por exemplo, **OD592B4A**), depois escolha uma foto ou desenhe e toque em **Send to device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/BLE_Tester.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Browser_Bluetooth_pairing.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/BLE_Tester_connected.png" style={{width:600, height:'auto'}}/></div>

:::note
O BLE Tester pode rotular o painel como 4.3"; o nome do produto do kit é 4.26" Mono Kit.
:::

**Concluído quando: a imagem aparecer no display e-paper.**

## Home Assistant (opcional)

Este kit usa **apenas BLE**. O Home Assistant precisa de um caminho Bluetooth funcional:

- **Bluetooth no host do Home Assistant** — adaptador integrado ou dongle USB
- **Proxy Bluetooth ESPHome** — se o display estiver longe do host do HA (deve suportar conexões ativas / conectáveis)

:::note
Proxies Shelly BLE **não são suportados** — eles não conseguem estabelecer a conexão ativa de que este display precisa. Use um adaptador local ou um proxy ESPHome.
:::

Ligue o display dentro do alcance do Bluetooth. O Home Assistant deve descobri-lo automaticamente — procure um nome começando com **OD** em **Settings → Devices & Services → Discovered**, depois toque em **Add** e **Submit**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_1.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_2.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_3.png" style={{width:600, height:'auto'}}/></div>

A página do dispositivo mostra bateria, botões, status do firmware e conteúdo do display. Mais detalhes: [integração com Home Assistant](https://github.com/OpenDisplay/Home_Assistant_Integration)

## Indo além

### Ativar criptografia

A criptografia vem **desativada**. Em Toolbox → More options, defina Encryption como **Locked**, depois **Configure over Bluetooth**. Após a reinicialização, a chave aparece em **KEY1:** / **KEY2:** e na landing page do QR. Desligue e ligue o display novamente para mostrar a chave se você a perder.

### Regravar ou recuperar

1. Abra o Toolbox — preset 4.26" Mono Kit: [Toolbox](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-426-mono-kit)
2. **Install firmware (USB)** — Chrome ou Edge em um desktop/notebook
3. **Configure over Bluetooth** — grave novamente as configurações após o flash

### py-opendisplay

Para projetos Python personalizados, instale com pip install py-opendisplay — [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)

### Vida útil da bateria

Com a bateria de 2000 mAh incluída e aproximadamente uma atualização a cada 15 minutos, é possível estimar até cerca de **dois anos** entre recargas em uso típico. O tempo real de operação depende da frequência de atualização, tamanho da imagem, uso de atualização parcial e temperatura.

Modele sua programação em [Battery calculator](https://opendisplay.org/firmware/battery/index.html) (selecione 4.26" Mono Kit / nRF52840 / 2000 mAh).

## Recursos

- **[Web]** [Site OpenDisplay](https://opendisplay.org)
- **[Tool]** [Toolbox (preset 4.26" Mono Kit)](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-426-mono-kit)
- **[Tool]** [BLE Tester](https://opendisplay.org/firmware/display/index.html)
- **[Tool]** [Battery calculator](https://opendisplay.org/firmware/battery/index.html)
- **[GitHub]** [OpenDisplay Firmware](https://github.com/OpenDisplay/Firmware)
- **[GitHub]** [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)
- **[GitHub]** [Home Assistant Integration](https://github.com/OpenDisplay/Home_Assistant_Integration)
- **[Discord]** [OpenDisplay Discord](https://discord.gg/XmTHz8RfJE)
- **[Wiki]** [Guia detalhado do OpenDisplay](https://wiki.seeedstudio.com/pt-br/EN04_opendisplay/)
- **[ZIP]** [Arquivos do gabinete impresso em 3D](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Resources/OpenDisplay_4.26_Mono_Kit_3D_Files.zip)
- **[UF2]** [Firmware de fábrica (4.26" Mono Kit)](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/Resources/OpenDisplay_4.26_Mono_Kit_Factory_Firmware.uf2)

## Solução de problemas

**P1: Preciso ver novamente a tela de boot ou o código QR.**

*   **Reinicie o display (power-cycle)**: Desligue, espere 10 segundos e ligue novamente. A tela de boot — com o nome do dispositivo, linhas KEY1:/KEY2: e código QR — só aparece após uma atualização completa de energização.
*   **Espere a atualização terminar**: Uma atualização de boot monocromática geralmente leva alguns segundos. Cintilação e padrões de cinza intermediários são normais. Não desligue o display durante a atualização.
*   **Escaneie o código QR novamente** ou leia KEY1:/KEY2: diretamente na tela se você precisar da chave de criptografia.
*   **Não é necessário regravar ou reconfigurar** — a tela de boot sempre reaparece após um ciclo de energia.
*   **Observação**: O display permite apenas uma conexão Bluetooth ativa por vez. Se outro dispositivo ainda estiver conectado, desconecte-o primeiro.

**P2: O display não liga ou não responde.**

*   **Primeiro, carregue via USB**: Uma bateria muito fraca pode fazer parecer que o dispositivo está morto ou travado. Conecte o kit a uma fonte de alimentação USB, carregue por um tempo e tente novamente.
*   **Após carregar**: Desligue, espere 10 segundos, ligue e aguarde a tela de boot.
*   **Confirme se a chave liga/desliga está ligada**: Deslize a chave firmemente para a posição ON.
*   **Verifique o conector da bateria**: Abra o case e confirme que o conector JST da bateria está totalmente encaixado. O fio vermelho deve ficar voltado para a marcação "+" e o fio preto deve ficar voltado para a marcação "−". Um conector invertido pode danificar a placa.
*   **Certifique-se de que nenhum outro dispositivo ainda mantém uma conexão BLE aberta** — o display só suporta uma conexão ativa por vez.

**P3: O Home Assistant não descobre o display.**

*   **Verifique a versão da integração**: Home Assistant 2026.4 e posteriores incluem a integração OpenDisplay embutida. Para versões mais antigas ou para o fluxo de trabalho drawcustom, instale a integração personalizada do HACS (copie a pasta `opendisplay` para `custom_components/`), depois reinicie o Home Assistant.
*   **Desconecte primeiro outros clientes Bluetooth**: Feche o BLE Tester, abas do navegador e o Bluefy — o display permite apenas uma conexão BLE ativa por vez. Se outro dispositivo estiver conectado, o Home Assistant não conseguirá descobrir nem conectar.
*   **Verifique o caminho do Bluetooth**: Use um adaptador Bluetooth interno ou USB no host do Home Assistant, ou um proxy Bluetooth ESPHome que suporte conexões ativas / conectáveis. Proxies Shelly BLE não são compatíveis — eles não conseguem estabelecer a conexão ativa de que este display precisa.
*   **Ainda não apareceu?** Aguarde um minuto, aproxime o display e verifique em Settings → Devices & Services → Discovered por um nome começando com "OD".
*   **Adicionar manualmente**: Se o display não for descoberto automaticamente, vá em Settings → Devices & Services, clique em Add Integration, pesquise por "OpenDisplay" e siga o fluxo de configuração.

**P4: Meu navegador não encontra ou não conecta ao display.**

*   **Use um navegador compatível**: Web Bluetooth funciona no Chrome e Edge (desktop e Android). No iPhone ou iPad, use o navegador Bluefy (App Store id 1492822055). Firefox e Safari (desktop) não suportam Web Bluetooth.
*   **Ative o Bluetooth**: Certifique-se de que o Bluetooth está ativado no seu celular ou computador. No Android, ative também a Localização — o Chrome precisa disso para fazer a varredura BLE.
*   **Mantenha o dispositivo próximo ao kit**.
*   **Desconecte todos os outros clientes primeiro**: O display permite apenas uma conexão BLE ativa. Se o Home Assistant ou outro navegador já estiver conectado, desconecte-o antes de tentar novamente.
*   **Escolha o nome de dispositivo que começa com "OD"** (por exemplo, OD592B4A).
*   **Se ele não estiver aparecendo**: Pressione um botão no display uma vez ou desligue e ligue o kit (desligado por 10 segundos → ligado) e tente novamente depois que a atualização de boot terminar.
*   **Se nada responder**: Primeiro carregue o kit via USB.

**P5: O envio de imagem falha ou expira.**

*   **Confirme que o display está ligado e dentro do alcance**: O kit permanece pronto para BLE sem janela de despertar de deep-sleep, mas ele precisa estar ligado e dentro do alcance do Bluetooth.
*   **Desconecte todos os outros clientes**: Apenas uma conexão BLE ativa por vez. Reconecte somente a partir do BLE Tester e tente novamente.
*   **Se a criptografia estiver ativada**: Digite a chave da tela de boot ou da página de destino do QR.
*   **Tente uma imagem menor**, ou espere a atualização completa terminar antes de enviar a próxima.
*   **O dispositivo parou de responder no meio da sessão**: Carregue via USB e depois desligue e ligue (desligado por 10 segundos → ligado).

**P6: A chave de criptografia é rejeitada ou mostra "not set".**

*   **Kits de fábrica vêm com criptografia desativada**: KEY1: e KEY2: mostram "not set" de fábrica — deixe o campo de chave em branco.
*   **Ativou a criptografia mas perdeu a chave?** Desligue e ligue o display (desligado por 10 segundos → ligado) — a chave aparece na tela de boot após a reinicialização. Você também pode escanear o código QR; a página de destino mostra a mesma chave.
*   **Perdeu a chave e não consegue ler a tela**: Abra o Toolbox → defina Encryption como Unlocked → Configure over Bluetooth. Isso remove a criptografia para que você possa configurá-la novamente. Se isso não funcionar, regrave o firmware e reconfigure.

**P7: A tela parece travada, mostra artefatos ou fica em branco após um envio.**

*   **Espere a atualização terminar**: Não desligue o display no meio da atualização. Uma atualização completa em preto e branco leva alguns segundos.
*   **A atualização parcial é apenas em preto e branco**: A atualização parcial funciona no modo monocromático. Se você estiver usando o modo opcional de 4 tons de cinza, a atualização parcial não é compatível — use sempre a atualização completa para evitar ghosting ou pixels travados.
*   **Desligue por 10 segundos → ligue** para voltar à tela de boot e então confirme se o BLE responde.
*   **Verifique se há outros dispositivos conectados**: Se outro dispositivo estiver conectado ao mesmo tempo, desconecte-o e tente novamente com um único cliente.
*   **Ainda não inicia ou conecta?** Primeiro carregue via USB e depois desligue e ligue novamente.
*   **Regrave o firmware**: Se o display continuar travado ou em branco depois de tudo isso, regrave via USB usando o Toolbox (veja "Reflash or recover" na seção Going further).

## Suporte Técnico e Discussão sobre o Produto

*Co-desenvolvido pela Seeed Studio e OpenDisplay.*

Obrigado por escolher nossos produtos! Estamos aqui para oferecer suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
