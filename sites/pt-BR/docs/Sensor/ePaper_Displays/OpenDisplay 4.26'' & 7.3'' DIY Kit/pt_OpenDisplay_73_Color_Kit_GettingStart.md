---
description: Introdução ao OpenDisplay 7.3" Color Kit — um display e-paper colorido Spectra 6 pronto para uso, co-desenvolvido pela Seeed Studio e OpenDisplay
title: Introdução ao OpenDisplay 7.3" Color Kit
sidebar_position: 2
image: https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/7.3.webp
slug: /opendisplay_73_color_kit
sku: 100091514
last_update:
  date: 10/22/2026
  author: Nemo
createdAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/opendisplay_73_color_kit/
updatedAt: '2026-10-22'
---

# Introdução ao OpenDisplay 7.3" Color Kit

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/7.3.webp" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/OpenDisplay-7-3-Color-Kit-p-7031.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O OpenDisplay 7.3" Color Kit é um display e-paper pronto para uso, co-desenvolvido pela Seeed Studio e OpenDisplay. Ele vem **totalmente montado** com um painel colorido Spectra 6 de 7,3 polegadas e 800×480, uma placa Seeed [XIAO ePaper Display Board EN04](https://wiki.seeedstudio.com/pt-br/epaper_EN04/) (XIAO nRF52840 Plus), uma bateria de 2000 mAh e um case impresso em 3D — firmware já instalado.

Use-o via **Bluetooth Low Energy** a partir do seu navegador ou do Home Assistant. Não é necessário Wi-Fi. O rádio permanece em modo de escuta de baixo consumo, para que você possa enviar uma nova imagem sempre que o display estiver ligado e ao alcance (sem janela de despertar de deep-sleep). Com aproximadamente uma atualização a cada duas horas, estime cerca de **um ano** entre recargas.

### O que você precisa

- O kit, ligado e dentro do alcance do Bluetooth
- Um celular ou computador com Bluetooth
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
      <td>Seeed <a href="https://wiki.seeedstudio.com/pt-br/epaper_EN04/">XIAO ePaper Display Board EN04</a> (XIAO nRF52840 Plus)</td>
    </tr>
    <tr>
      <th>Display</th>
      <td>ePaper colorido Spectra 6 de 7,3 polegadas</td>
    </tr>
    <tr>
      <th>Cores</th>
      <td>Preto, branco, amarelo, vermelho, azul, verde (dithered; não é RGB completo)</td>
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
      <td>Case impresso em 3D incluído</td>
    </tr>
  </tbody>
</table>

## Ligar

1. Tire o kit da caixa e ligue-o.
2. Aguarde a atualização de boot — normalmente cerca de **15–20 segundos** para o Spectra 6. A cintilação é normal.
3. Quando terminar, a tela de boot mostra o nome do seu dispositivo (começa com **OD**), **KEY1:** / **KEY2:** e um código QR.

A criptografia vem **desativada**, então as linhas de chave mostram **not set**. Você não precisa de uma chave para o uso normal logo após tirar da caixa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/7.3.png" style={{width:800, height:'auto'}}/></div>

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Landing_page.png" style={{width:600, height:'auto'}}/></div>

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

Na landing page, escolha **Send an image** (ou abra [opendisplay.org](https://opendisplay.org/firmware/display/index.html)). Clique em **Connect**, selecione seu dispositivo na lista do navegador (o nome começa com **OD** — por exemplo, **ODCA6020**), depois escolha uma foto ou desenhe e toque em **Send to device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/BLE_Tester.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Browser_Bluetooth_pairing.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/BLE_Tester_connected.png" style={{width:600, height:'auto'}}/></div>

**Concluído quando: a imagem aparecer no display e-paper.**

## Home Assistant (opcional)

Este kit usa **apenas BLE**. O Home Assistant precisa de um caminho Bluetooth funcional:

- **Bluetooth no host do Home Assistant** — adaptador embutido ou dongle USB
- **Proxy Bluetooth ESPHome** — se o display estiver longe do host do HA (deve suportar conexões ativas / conectáveis)

:::note
Os proxies Shelly BLE **não são suportados** — eles não conseguem estabelecer a conexão ativa de que este display precisa. Use um adaptador local ou um proxy ESPHome.
:::

Ligue o display dentro do alcance do Bluetooth. O Home Assistant deve descobri-lo automaticamente — procure um nome começando com **OD** em **Settings → Devices & Services → Discovered**, depois toque em **Add** e **Submit**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_1.png" style={{width:300, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_2.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/4.26/HA_3.png" style={{width:600, height:'auto'}}/></div>

A página do dispositivo mostra bateria, botões, status do firmware e conteúdo do display. Mais detalhes: [Home Assistant integration](https://github.com/OpenDisplay/Home_Assistant_Integration)

## Indo além

### Ativar criptografia

A criptografia vem **desativada**. Em Toolbox → More options, defina Encryption como **Locked**, depois **Configure over Bluetooth**. Após a reinicialização, a chave aparece em **KEY1:** / **KEY2:** e na landing page do QR. Desligue e ligue o display novamente para mostrar a chave se você a perder.

### Regravar ou recuperar

1. Abra o Toolbox — preset do 7.3" Color Kit: [Toolbox (7.3" Color Kit preset)](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-73-color-kit)
2. **Install firmware (USB)** — Chrome ou Edge em um desktop/notebook
3. **Configure over Bluetooth** — grave as configurações de volta após o flash

### py-opendisplay

Para projetos Python personalizados, instale com pip install py-opendisplay — [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)

### Vida útil da bateria

Com a bateria de 2000 mAh incluída e aproximadamente uma atualização a cada duas horas, estime cerca de **um ano** entre recargas em uso típico. O tempo real de operação depende da frequência de atualização, tamanho da imagem e temperatura.

Modele sua programação em [Battery calculator](https://opendisplay.org/firmware/battery/index.html) (selecione 7.3" Color Kit / nRF52840 / 2000 mAh).

## Recursos

- **[Web]** [Site OpenDisplay](https://opendisplay.org)
- **[Tool]** [Toolbox (7.3" Color Kit preset)](https://opendisplay.org/firmware/toolbox/index.html?driver=opendisplay-73-color-kit)
- **[Tool]** [BLE Tester](https://opendisplay.org/firmware/display/index.html)
- **[Tool]** [Battery calculator](https://opendisplay.org/firmware/battery/index.html)
- **[GitHub]** [OpenDisplay Firmware](https://github.com/OpenDisplay/Firmware)
- **[GitHub]** [py-opendisplay](https://github.com/OpenDisplay/py-opendisplay)
- **[GitHub]** [Home Assistant Integration](https://github.com/OpenDisplay/Home_Assistant_Integration)
- **[Discord]** [OpenDisplay Discord](https://discord.gg/XmTHz8RfJE)
- **[Wiki]** [Guia detalhado do OpenDisplay](https://wiki.seeedstudio.com/pt-br/EN04_opendisplay/)
- **[ZIP]** [Arquivos do case impresso em 3D](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Resources/OpenDisplay_7.3_Color_Kit_3D_Files.zip)
- **[UF2]** [Firmware de fábrica (7.3" Color Kit)](https://files.seeedstudio.com/wiki/OpenDisplay_diy_kit/7.3/Resources/OpenDisplay_7.3_Color_Kit_Factory_Firmware.uf2)

## Solução de problemas

**P1: Preciso da tela de boot ou do código QR novamente.**

*   **Desligue e ligue o display**: Desligue, espere 10 segundos e ligue novamente. A tela de boot — com o nome do dispositivo, linhas KEY1:/KEY2: e código QR — só aparece após uma atualização completa de energização.
*   **Espere a atualização terminar**: Uma atualização de boot colorida Spectra 6 leva cerca de 15–20 segundos. Cintilação e padrões de cores intermediários são normais. Não desligue o display durante a atualização.
*   **Escaneie o código QR novamente** ou leia KEY1:/KEY2: diretamente da tela se você precisar da chave de criptografia.
*   **Não é necessário regravar ou reconfigurar** — a tela de boot sempre reaparece após um ciclo de energia.
*   **Observação**: O display permite apenas uma conexão Bluetooth ativa por vez. Se outro dispositivo ainda estiver conectado, desconecte-o primeiro.

**P2: O display não liga ou não responde.**

*   **Primeiro, carregue via USB**: Uma bateria muito fraca pode fazer parecer que o dispositivo está morto ou travado. Conecte o kit a uma fonte de alimentação USB, carregue por um tempo e tente novamente.
*   **Após carregar**: Desligue, espere 10 segundos, ligue e aguarde a tela de boot.
*   **Confirme se a chave de liga/desliga está ligada**: Deslize a chave firmemente para a posição ON.
*   **Verifique o conector da bateria**: Abra o case e confirme se o conector JST da bateria está totalmente encaixado. O fio vermelho deve ficar voltado para a marcação "+" e o fio preto para a marcação "−". Um conector invertido pode danificar a placa.
*   **Certifique-se de que nenhum outro dispositivo ainda esteja mantendo uma conexão BLE aberta** — o display só suporta uma conexão ativa por vez.

**P3: O Home Assistant não descobre o display.**

*   **Verifique a versão da integração**: Home Assistant 2026.4 e posteriores incluem a integração OpenDisplay integrada. Para versões mais antigas ou para o fluxo de trabalho drawcustom, instale a integração personalizada do HACS (copie a pasta `opendisplay` para `custom_components/`), depois reinicie o Home Assistant.
*   **Desconecte primeiro outros clientes Bluetooth**: Feche o BLE Tester, abas do navegador e o Bluefy — o display permite apenas uma conexão BLE ativa por vez. Se outro dispositivo estiver conectado, o Home Assistant não conseguirá descobrir nem conectar.
*   **Verifique o caminho do Bluetooth**: Use um adaptador Bluetooth interno ou USB no host do Home Assistant, ou um proxy Bluetooth ESPHome que suporte conexões ativas / conectáveis. Proxies Shelly BLE não são compatíveis — eles não conseguem estabelecer a conexão ativa de que este display precisa.
*   **Ainda não apareceu?** Aguarde um minuto, aproxime o display e verifique em Settings → Devices & Services → Discovered por um nome começando com "OD".
*   **Adicionar manualmente**: Se o display não for descoberto automaticamente, vá em Settings → Devices & Services, clique em Add Integration, pesquise por "OpenDisplay" e siga o fluxo de configuração.

**P4: Meu navegador não encontra ou não conecta ao display.**

*   **Use um navegador compatível**: Web Bluetooth funciona no Chrome e Edge (desktop e Android). No iPhone ou iPad, use o navegador Bluefy (App Store id 1492822055). Firefox e Safari (desktop) não suportam Web Bluetooth.
*   **Ative o Bluetooth**: Certifique-se de que o Bluetooth esteja ativado no seu telefone ou computador. No Android, ative também a Localização — o Chrome precisa disso para a varredura BLE.
*   **Mantenha o dispositivo próximo ao kit**.
*   **Desconecte todos os outros clientes primeiro**: O display permite apenas uma conexão BLE ativa. Se o Home Assistant ou outro navegador já estiver conectado, desconecte-o antes de tentar novamente.
*   **Escolha o nome de dispositivo que começa com "OD"** (por exemplo, OD592B4A).
*   **Se ele não estiver aparecendo**: Pressione um botão no display uma vez ou desligue e ligue o dispositivo (desligado por 10 segundos → ligado) e tente novamente depois que a atualização de boot terminar.
*   **Se nada responder**: Carregue o kit via USB primeiro.

**P5: O envio de imagem falha ou expira.**

*   **Confirme que o display está ligado e dentro do alcance**: O kit permanece pronto para BLE sem janela de despertar de deep-sleep, mas ele precisa estar ligado e dentro do alcance do Bluetooth.
*   **Desconecte todos os outros clientes**: Apenas uma conexão BLE ativa por vez. Reconecte somente a partir do BLE Tester e tente novamente.
*   **Se a criptografia estiver ativada**: Digite a chave da tela de boot ou da página de destino do QR.
*   **Tente uma imagem menor**, ou espere a atualização completa terminar antes de enviar a próxima.
*   **O dispositivo parou de responder no meio da sessão**: Carregue via USB e depois desligue e ligue (desligado por 10 segundos → ligado).

**P6: A chave de criptografia é rejeitada ou mostra "not set".**

*   **Kits de fábrica vêm com a criptografia desativada**: KEY1: e KEY2: mostram "not set" de fábrica — deixe o campo de chave em branco.
*   **Ativou a criptografia mas perdeu a chave?** Desligue e ligue o display (desligado por 10 segundos → ligado) — a chave aparece na tela de boot após a reinicialização. Você também pode escanear o código QR; a página de destino mostra a mesma chave.
*   **Perdeu a chave e não consegue ler a tela**: Abra o Toolbox → defina Encryption como Unlocked → Configure over Bluetooth. Isso remove a criptografia para que você possa configurá-la novamente. Se isso não funcionar, regrave o firmware e reconfigure.

**P7: A tela parece travada, mostra cores erradas ou fica em branco após um envio.**

*   **Espere a atualização terminar**: Não desligue o display no meio da atualização. Uma atualização completa Spectra 6 leva cerca de 15–20 segundos.
*   **Atenção à renderização de cores**: As imagens são convertidas (dithered) para seis cores (não RGB completo) — textos e gráficos simples ficam melhores; fotos exibem um padrão granulado. Isso é um comportamento esperado, não uma falha.
*   **Desligue por 10 segundos → ligue** para voltar à tela de boot e então confirme se o BLE responde.
*   **Verifique se há outros dispositivos conectados**: Se outro dispositivo estiver conectado ao mesmo tempo, desconecte-o e tente novamente com um único cliente.
*   **Ainda não inicia ou conecta?** Carregue via USB primeiro e depois desligue e ligue novamente.
*   **Regrave o firmware**: Se o display continuar travado ou em branco após todas as etapas acima, regrave via USB usando o Toolbox (veja "Reflash or recover" na seção Going further).

## Suporte Técnico e Discussão de Produto

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
