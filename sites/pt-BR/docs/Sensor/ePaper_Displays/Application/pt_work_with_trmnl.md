---
description: Use TRMNL com qualquer produto Seeed ePaper compatível - reTerminal E1001, E1002, E1003, E1004, TRMNL 7.5" (OG) DIY Kit ou XIAO 7.5" ePaper Panel.
title: Trabalhar com TRMNL
keywords:
  - display ePaper
  - TRMNL
  - reTerminal
  - reTerminal E1003
  - reTerminal E1004
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sidebar_position: 3
last_update:
  date: 08/05/2026
  author: dimo
aliases:
  - /ogdiy_kit_works_with_trmnl
  - /xiao_7_5_inch_epaper_panel_with_trmnl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_trmnl/
updatedAt: '2026-08-05'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

Este guia é a única fonte de verdade para usar o **TRMNL** com qualquer produto Seeed ePaper compatível. Escolha seu hardware uma vez em cada etapa que precisar, e o restante do fluxo de trabalho será idêntico.

:::caution Suporte de hardware
TRMNL oferece suporte oficial ao **reTerminal E1001**, **reTerminal E1002**, **reTerminal E1003**, **reTerminal E1004**, **TRMNL 7.5" (OG) DIY Kit** e **XIAO 7.5" ePaper Panel**. O **E1002** e o **E1004** possuem painéis Spectra™ 6 totalmente coloridos, mas o firmware TRMNL renderiza seu conteúdo em **modo monocromático**. O painel de toque capacitivo do **E1003** está disponível apenas com o firmware SenseCraft HMI; o firmware TRMNL usa os botões físicos do dispositivo.
:::

## O que é o [TRMNL](https://trmnl.app/)?

TRMNL é uma plataforma inovadora projetada para ajudar as pessoas a se manterem focadas e calmas em nosso mundo digital cada vez mais distraído. Fundado em 2023, o TRMNL rapidamente se tornou uma solução líder para gerenciamento de dashboards em E Ink®, oferecendo uma abordagem única para exibir informações sem as notificações constantes e distrações das telas tradicionais.

Em sua essência, o TRMNL é construído sobre a filosofia de que a tecnologia deve melhorar nossas vidas sem exigir atenção constante. A plataforma oferece uma maneira elegante de visualizar informações importantes de relance por meio de displays E Ink®, criando uma experiência tecnológica mais consciente e menos intrusiva.

### Por que usar o TRMNL?

- **Criação simplificada de dashboards**: A crescente biblioteca de aplicativos e integrações do TRMNL torna fácil criar telas de informação personalizadas sem programação complexa.
- **Baixo consumo de energia**: O software eficiente do TRMNL combinado com os requisitos mínimos de energia do E Ink® cria uma solução extremamente eficiente em termos energéticos.
- **Informação sem distrações**: Obtenha as informações de que você precisa sem notificações e sem fadiga visual.
- **Atualizações regulares**: O desenvolvimento ativo do TRMNL significa que novos recursos e integrações são adicionados semanalmente.
- **Amigável para desenvolvedores**: A API aberta e as ferramentas para desenvolvedores do TRMNL permitem plugins e integrações personalizadas.

## Hardware compatível

### reTerminal E Series

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7,5" monocromático<br/>Terminal integrado</td>
      <td align="center">7,3" Spectra 6 (colorido)<br/>Terminal integrado<br/>Modo mono no TRMNL</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">10,3" monocromático<br/>Escala de cinza de 16 níveis<br/>Terminal integrado</td>
      <td align="center">13,3" Spectra 6 (colorido)<br/>Terminal integrado<br/>Modo mono no TRMNL</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### TRMNL DIY Kit & XIAO Panel

<div class="table-center">
  <table align="center">
    <tr>
      <th>TRMNL 7.5" (OG) DIY Kit</th>
      <th>XIAO 7.5" ePaper Panel</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7,5" mono + case DIY<br/>Driver XIAO ESP32-S3 Plus</td>
      <td align="center">Painel nu 7,5" mono<br/>XIAO ESP32-C3 diretamente</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Etapa 1: Configuração da conta TRMNL e acesso BYOD

Antes de conectar seu dispositivo ao TRMNL, você precisa de uma conta TRMNL e acesso BYOD (Bring Your Own Device) — o mesmo fluxo independentemente do hardware.

1. **Comprar acesso ao TRMNL**

   - Compre acesso ao aplicativo web TRMNL + recursos do dispositivo em: [https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - Isso fornece as credenciais necessárias para usar a plataforma do TRMNL.
   - Acesse [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) para ativar um dispositivo virtual (pode levar até 10 minutos após a compra).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **Criar uma conta TRMNL**

   - Visite o [site do TRMNL](https://usetrmnl.com)
   - Clique em "Sign Up" para criar uma nova conta.
   - Siga o processo de registro.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
Suas credenciais TRMNL são informações sensíveis. Nunca as compartilhe publicamente nem as envie para sistemas de controle de versão.
:::

Se você encontrar qualquer problema, entre em contato diretamente com a equipe TRMNL em [team@usetrmnl.com](mailto:team@usetrmnl.com).

## Etapa 2: Configuração de hardware

O reTerminal E Series e o XIAO 7.5" Panel vêm pré-montados — você só precisa ligá-los. O TRMNL DIY Kit requer montagem.

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

O reTerminal E Series é totalmente integrado. Basta conectar o cabo USB-C, deslizar o interruptor de energia para **ON** e ligá-lo. Nenhuma etapa de montagem é necessária.

:::tip Apenas reTerminal E1003
Se o dispositivo estiver em modo de espera e não responder, pressione o botão **Refresh** na parte superior da unidade para despertá-lo antes de conectar o USB ou entrar no modo de gravação.
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

**Etapa 1. Conectar o display à placa controladora**  
Alinhe o cabo FPC com o conector na XIAO ePaper Display Board e, em seguida, prenda a trava para garantir uma conexão firme.

:::tip
O lado metálico do cabo FPC deve ficar voltado para cima, caso contrário nenhum conteúdo será exibido. Siga o vídeo de instalação abaixo — muitas pessoas erram isso.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Etapa 2. Conectar a bateria**  
Conecte o cabo da bateria ao conector JST na placa controladora, garantindo a polaridade correta (fio vermelho em +, preto em -).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Etapa 3. Montagem do gabinete (opcional)**

:::tip
Observe que o cabo flexível da tela é muito frágil. Tenha cuidado ao manuseá-lo. Se ele for danificado, toda a tela deixará de funcionar.
:::

Imprima as peças do gabinete open source na seção [Resources](#resources) e monte os componentes dentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

Primeiro, monte a placa controladora e a bateria:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Teste o kit TRMNL:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Conecte a tela ao gabinete e passe o cabo FPC para fora:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Conecte o cabo de extensão FPC e monte todo o gabinete:

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

A montagem do gabinete em formato de L é muito semelhante:

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

:::tip
Se o seu kit TRMNL estiver longe do roteador, você pode passar a antena para fora do gabinete para obter um desempenho de sinal melhor.
:::

</TabItem>
<TabItem value="xiao-075-panel" label="Painel XIAO 7.5&quot;">

O painel XIAO 7.5" ePaper é enviado com o XIAO ESP32-C3 conectado diretamente ao painel. Basta conectar via USB-C — nenhuma montagem adicional é necessária.

</TabItem>
</Tabs>

## Etapa 3: Gravar o firmware TRMNL

Três métodos de gravação estão disponíveis. **Método 1 (Web Flasher)** é o mais fácil e funciona para todo o hardware compatível. **Método 2 (reTerminal E-Series Firmware Flasher)** é exclusivo para reTerminal E Series. **Método 3 (Compilar a partir do código-fonte)** é para usuários avançados.

:::tip Kits TRMNL DIY novos já são enviados com o firmware TRMNL
Se você comprou um kit TRMNL 7.5" (OG) DIY novo, ele já vem com o firmware TRMNL pré-instalado — você pode pular totalmente a etapa de gravação e ir direto para a Etapa 4.
:::

### Método 1: TRMNL Web Flasher (recomendado)

O TRMNL Web Flasher funciona diretamente no navegador e oferece suporte a todos os dispositivos desta página.

1. Acesse [https://usetrmnl.com/flash](https://usetrmnl.com/flash).
2. Conecte seu dispositivo via USB-C e siga as instruções na tela.
3. Escolha o firmware que corresponde ao seu hardware:

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **reTerminal E1001 / E1002**: use **FW 1.6.7 ou mais recente** para compatibilidade com a Seeed.
- **reTerminal E1003**: selecione **reTerminal E1003** na lista de firmware e use **FW 1.8.7 ou mais recente**.
- **reTerminal E1004**: selecione **reTerminal E1004** na lista de firmware e use **FW 1.8.10 ou mais recente**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/258.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

Use **FW 1.5.12 ou mais recente** para compatibilidade com a Seeed no TRMNL DIY Kit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/259.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="Painel XIAO 7.5&quot;">

Use **FW 1.5.12 ou mais recente** para compatibilidade com a Seeed no painel XIAO 7.5" ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/260.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Método 2: Gravar via reTerminal E-Series Firmware Flasher (apenas reTerminal E Series)

:::info
Este método é aplicável a **reTerminal E1001 / E1002 / E1003 / E1004**. (**FW 1.8.10** e mais recente).
:::

:::caution Prefira o Método 1 para firmwares TRMNL mais recentes
O reTerminal E-Series Firmware Flasher fornece um canal de firmware TRMNL hospedado pela Seeed para dispositivos reTerminal E Series. A Seeed não atualiza esse canal com a mesma frequência que o TRMNL Web Flasher oficial, e nem todos os lançamentos de firmware TRMNL upstream são sincronizados aqui.

Use primeiro o [Método 1: TRMNL Web Flasher](#método-1-trmnl-web-flasher-recomendado) quando quiser uma versão mais recente do firmware TRMNL. Use este método quando você precisar do fluxo de gravação da reTerminal E Series hospedado pela Seeed.
:::

<details>
<summary>Clique para expandir as etapas do reTerminal E-Series Firmware Flasher</summary>

1. Acesse o [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/). Para um acesso direto ao TRMNL do E1004, você também pode abrir o [link do E1004 TRMNL 1.8.10 Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/?platform=trmnl&device=E1004&firmware=TRMNL_reTerminal_E1004&version=1.8.10).

2. Em **Select platform**, escolha o cartão **TRMNL** na seção de plataformas oficiais.

3. Selecione seu dispositivo:

   - **reTerminal E1001**
   - **reTerminal E1002**
   - **reTerminal E1003**
   - **reTerminal E1004**

4. Na segunda página, revise a versão de firmware TRMNL disponível para o dispositivo selecionado (para E1004, use **1.8.10 ou mais recente**).

5. Conecte seu dispositivo ao computador com um cabo de dados USB.

6. Em **Flash to device**, selecione **Erase flash + flash** para a primeira instalação e clique em **Connect & flash**.

7. Escolha a porta serial do seu dispositivo na janela do navegador e inicie o processo de gravação.

:::tip Primeira gravação
Para a primeira instalação, selecione **Erase flash + flash** para que o dispositivo inicie a partir de um estado de firmware limpo.
:::

:::tip Apenas reTerminal E1003
Certifique-se de que o interruptor de energia esteja **ON**. Se o dispositivo estiver em modo de espera e a gravação não iniciar, pressione o botão **Refresh** na parte superior da unidade para acordá-lo e tente novamente.
:::

:::note Comportamento de exibição do reTerminal E1002 / E1004
O reTerminal E1002 usa uma tela ePaper colorida, mas o firmware TRMNL atualmente renderiza o conteúdo do E1002 em modo monocromático. Durante o provisionamento de Wi-Fi, a tela do AP do E1002 mostra um layout compacto com o logotipo TRMNL no canto inferior direito. Quando você vir essa tela, procure e conecte-se ao hotspot E1002 e continue com o mesmo fluxo de configuração de Wi-Fi dos outros dispositivos.

O reTerminal E1004 também usa um painel Spectra™ 6 totalmente colorido, mas o firmware TRMNL também renderiza seu conteúdo em modo monocromático. Escolha **reTerminal E1004** no flasher para que o painel correto seja usado.
:::

Após a conclusão da gravação, continue para a [Etapa 4: Conectar o dispositivo ao Wi-Fi](#etapa-4-conectar-dispositivo-ao-wi-fi).

</details>

### Método 3: Compilar e gravar a partir do código-fonte (avançado)

1. **Clone o repositório de firmware**

   - Acesse o [repositório oficial de firmware](https://github.com/usetrmnl/trmnl-firmware) e faça o clone:

     ```bash
     git clone https://github.com/usetrmnl/trmnl-firmware.git
     ```

   :::tip
   Às vezes, nossos PRs para o TRMNL upstream ainda estão em revisão. Se você quiser os patches mais recentes do lado da Seeed, use os snapshots de código-fonte mantidos pela Seeed no repositório [OSHW-reTerminal-Series-E-D](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D) em vez disso:

   ```bash
   git clone https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D.git
   ```

   - Para **reTerminal E1001 / E1002 / E1003**, use [`examples/official/TRMNL`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL).
   - Para **reTerminal E1004**, use o projeto dedicado [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004).
   :::

2. **Instale o [PlatformIO](https://platformio.org/)** como uma extensão do VS Code ou via linha de comando.

3. **Abra o projeto**: abra a pasta `firmware` clonada no VS Code.

4. **Selecione o ambiente PlatformIO correto** para o seu hardware:

   <Tabs groupId="trmnl-hardware">
   <TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

   Em `platformio.ini`:

   - Para **reTerminal E1001**, selecione o ambiente `seeed_reTerminal_E1001`.
   - Para **reTerminal E1002**, selecione o ambiente `seeed_reTerminal_E1002` (o TRMNL renderiza o conteúdo em monocromático no E1002).
   - Para **reTerminal E1003**, selecione o ambiente `TRMNL_X_E1003` no [repositório oficial de firmware TRMNL](https://github.com/usetrmnl/trmnl-firmware).
   - Para **reTerminal E1004**, abra o projeto dedicado PlatformIO [`examples/official/TRMNL_E1004`](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004) e selecione o ambiente `seeed_reTerminal_E1004` (ID de firmware `TRMNL_reTerminal_E1004`).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

   Em `platformio.ini`, selecione o ambiente `TRMNL_7inch5_OG_DIY_Kit`.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   <TabItem value="xiao-075-panel" label="Painel XIAO 7.5&quot;">

   Em `platformio.ini`, selecione o ambiente `seeed_xiao_esp32c3`.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. **Conecte seu dispositivo** via USB-C.

6. **Compile e envie**: clique no botão **Upload** do PlatformIO ou execute:

   ```bash
   pio run --target upload
   ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

## Etapa 4: Configurar o Wi‑Fi e provisionar o dispositivo

O fluxo de provisionamento de Wi‑Fi é idêntico para todo o hardware compatível.

> 💡 **Problemas para conectar ao Wi‑Fi?** Veja o [Guia de solução de problemas de Wi‑Fi do dispositivo TRMNL](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting).

### Ligar e entrar no modo de provisionamento

Após gravar o firmware TRMNL e ligar o dispositivo, ele entrará automaticamente no modo de provisionamento se ainda não estiver conectado ao Wi‑Fi.

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="trmnl-diy-kit" label="Kit DIY TRMNL">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="xiao-075-panel" label="Painel XIAO 7.5&quot;">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Conectar ao Wi‑Fi TRMNL

No seu celular ou computador, abra a lista de redes Wi‑Fi disponíveis. Procure por uma rede chamada **TRMNL** e conecte‑se a ela (nenhuma senha é exigida por padrão).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### Abrir o portal cativo

Depois de conectado, abra um navegador. O dispositivo deve redirecionar automaticamente para a página de configuração TRMNL; se isso não acontecer, acesse manualmente [http://4.3.2.1](http://4.3.2.1).

### Inserir as credenciais do Wi‑Fi

- Selecione sua **rede Wi‑Fi de 2,4 GHz** (redes de 5 GHz não são compatíveis).
- Digite a senha do Wi‑Fi e clique em **Save** / **Connect**.

> ⚠️ **Importante:** certifique‑se de usar uma rede Wi‑Fi de 2,4 GHz. Os chips ESP32-C3 / ESP32-S3 nesses dispositivos não suportam redes de 5 GHz.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### Dispositivo entra na sua rede

O dispositivo será desconectado do Wi‑Fi TRMNL e entrará na sua rede doméstica. A janela do portal cativo mostrará o endereço MAC do dispositivo. **Anote o endereço MAC** — você precisará dele na próxima etapa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **Observação:** o endereço MAC fica visível no portal cativo por apenas 1–2 segundos. Se você perder esse momento, também pode:
>
> - Recuperá‑lo nos logs de compilação/envio do VS Code → PlatformIO.
> - Usar o método [usetrmnl.com/flash](https://usetrmnl.com/flash) e verificar o console de desenvolvedor do navegador durante a gravação.
> - Encontrá‑lo na lista de dispositivos conectados do seu roteador ou aplicativo de rede mesh.
>
> Veja o guia oficial: [Encontrando o endereço MAC do seu TRMNL](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address).

## Etapa 5: Registrar o dispositivo no TRMNL

Depois que o dispositivo estiver conectado ao Wi‑Fi e você tiver o endereço MAC, registre‑o na interface web TRMNL:

1. **Abra a interface web TRMNL** em [https://trmnl.app](https://trmnl.app).
2. **Vá para a página Devices**.
3. **Adicione um novo dispositivo** (botão no canto superior direito ou no centro da página).

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **Insira o Device ID** que você recebeu ao comprar o acesso BYOD (isso **não** é o endereço MAC — encontre o Device ID no e‑mail de confirmação da compra ou no painel TRMNL). Clique em **Add new device**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **Vincule o endereço MAC do dispositivo** na página de configurações do dispositivo:

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   Você também pode definir um nome personalizado e ajustar outras configurações aqui.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

Seu dispositivo agora está vinculado à sua conta TRMNL! Agora você pode enviar playlists, imagens e outros conteúdos diretamente pela interface TRMNL.

> 💡 **Dica:** se você tiver vários dispositivos, repita as etapas acima para cada um usando seus Device IDs exclusivos.

:::caution Desativar Firmware Early Release e OTA Updates
Depois de adicionar o dispositivo na interface web TRMNL, vá para a página de configurações do dispositivo e **desative** tanto **Firmware Early Release** quanto **OTA Updates Enabled**.

Se permanecerem ativadas, seu dispositivo poderá baixar automaticamente atualizações de firmware destinadas ao hardware TRMNL oficial que **não são compatíveis com os dispositivos Seeed**. A instalação de firmware incompatível pode fazer com que o dispositivo apresente mau funcionamento ou deixe de responder.

Mantenha sempre ambas as opções desativadas para garantir uma operação estável.
:::

## Uso dos botões

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1004" default>

O reTerminal E1001 e o E1002 expõem um único botão voltado ao usuário sob o firmware TRMNL:

- **Botão verde — pressionar por 5 s**: entrar no modo de reconfiguração de Wi‑Fi.
- **Botão Reset**: clique único para reiniciar o dispositivo.

O reTerminal E1004 usa os botões físicos frontais sob o firmware TRMNL. Use esses botões para ativar ou atualizar o painel e deslize a chave de energia para **OFF** e depois para **ON** para reiniciar. Para reconfiguração de Wi‑Fi, siga o mesmo fluxo de pressionar por longo tempo / provisionamento mostrado na tela do dispositivo após uma gravação de fábrica ou redefinição de rede.

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

O reTerminal E1003 expõe três botões superiores sob o firmware TRMNL:

- **Botão Refresh — clique único**: ativar o dispositivo ou atualizar imediatamente a tela atual.
- **Page Up + Page Down — pressionar e segurar por 2 s**: entrar no modo de reconfiguração de Wi‑Fi.
- **Chave de energia**: deslize para **OFF** e depois para **ON** para reiniciar o dispositivo.

:::note
O toque capacitivo é compatível apenas com o firmware SenseCraft HMI. O firmware TRMNL não usa o painel de toque — toda a interação é feita pelos botões físicos acima.
:::

</TabItem>
<TabItem value="trmnl-diy-kit" label="Kit DIY TRMNL">

A XIAO ePaper Display Board possui 4 botões (RESET / KEY1 / KEY2 / KEY3). **Apenas RESET e KEY3 são usados pelo firmware TRMNL.**

**Uso do KEY3:**

1. **Clique único**: atualizar a página imediatamente.
2. **Clique duplo**: função personalizada — configure‑a na página de configurações do TRMNL.
3. **Pressionar por longo tempo (~5 s)**: reconfigurar a rede.

**Uso do RESET**: clique único para reiniciar o dispositivo.

</TabItem>
<TabItem value="xiao-075-panel" label="Painel XIAO 7.5&quot;">

O XIAO ESP32-C3 possui os botões padrão **RESET** e **BOOT**.

- **Reset → soltar → segurar BOOT por 5 s**: reconfigurar a rede (retorna ao portal de provisionamento TRMNL).
- **Clique único em RESET**: reiniciar o dispositivo.

</TabItem>
</Tabs>

## Entendendo a Playlist TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

A Playlist TRMNL controla exatamente o que é exibido no seu dispositivo ePaper e quando.

### Visão geral da playlist

- **Playlist Title**: o nome do seu dispositivo TRMNL.
- **Display Time Range**: quando a playlist fica ativa (por exemplo, 00:00–23:45).
- **Update Interval**: com que frequência a tela é atualizada (por exemplo, a cada 5 minutos).
- **Add a Group / Add a Plugin**: organizar a playlist em grupos ou adicionar novos plugins de conteúdo.

### Itens da playlist

Cada linha é uma tela ou widget que será exibido no seu dispositivo. Exemplos:

1. **Weather** — informações meteorológicas atuais para a sua localização.
2. **Days Left This Year** — contagem regressiva dos dias restantes no ano atual.
3. **Custom Text** — exibir qualquer mensagem personalizada (por exemplo, "Hello World").

Para cada item:

- **Settings (ícone de engrenagem)**: configurar as opções do plugin.
- **Delete (ícone X)**: remover o item da playlist.
- **Preview (ícone de olho)**: visualizar como a tela ficará.
- **Reorder (ícone de barras)**: arrastar para alterar a ordem.

### Smart Playlist

Na parte inferior você pode escolher pular automaticamente telas cujo conteúdo não tenha mudado. Veja o [post do blog sobre Smart Playlists](https://usetrmnl.com/blog/smart-playlists) para mais detalhes.

## Explorando os plugins TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

Plugins são blocos de conteúdo modulares que podem mostrar clima, eventos de calendário, preços de ações, feeds RSS, frases motivacionais, atividade no GitHub e muito mais.

### Plugins conectados

Na parte superior da página de Plugins você vê todos os plugins já conectados à sua conta TRMNL. Exemplos incluem Weather, Days Left This Year, Stock Price, RSS Feed, Reddit, Hacker News, Language Learning, Motivational Quote, Custom Text, …

### Marketplace de plugins

Abaixo dos seus plugins conectados você encontrará o marketplace. Os plugins são organizados por categorias e tags (#productivity, #news, #ecommerce, …). Navegue, pesquise e clique em qualquer plugin para conectá‑lo à sua conta.

Desenvolvedores também podem criar e publicar seus próprios plugins — veja a [documentação do marketplace de plugins](https://docs.usetrmnl.com/go/plugin-marketplace/introduction) para mais detalhes.

Para recursos mais avançados, consulte a documentação oficial do TRMNL: [https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go).

## FAQ

### P1: Como faço para reconfigurar a rede?

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002" default>

Mantenha pressionado o **Botão Verde** por 5 segundos. O dispositivo retornará à interface inicial do TRMNL e ativará o AP.

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

Mantenha pressionados **Page Up** e **Page Down** juntos por 2 segundos. O dispositivo retornará à interface inicial do TRMNL e ativará o AP.

Se a tela estiver em modo de espera, pressione o botão **Refresh** uma vez primeiro para ativar o dispositivo.

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

Mantenha pressionado o **KEY3** (ao lado do botão Reset) por 5 segundos. O dispositivo retornará à interface inicial do TRMNL e ativará o AP.

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

Pressione o botão **Reset** no XIAO, solte-o e, em seguida, mantenha pressionado o botão **BOOT** por 5 segundos. O dispositivo retornará à interface inicial do TRMNL e ativará o AP.

</TabItem>
</Tabs>

### P2: O que devo fazer se a tela sempre mostrar um aviso de bateria fraca?

Duas situações diferentes podem acionar esta tela:

1. **A tensão da bateria está realmente baixa.** Este é o caso mais comum — o dispositivo realmente precisa ser carregado. Conecte-o à alimentação ou substitua/carregue a bateria e o aviso deve desaparecer assim que a tensão se recuperar.

2. **Um problema no servidor TRMNL.** O nível da bateria é avaliado nos servidores do TRMNL, não apenas no dispositivo. Um bug no servidor ou uma atualização recente da plataforma pode, temporariamente, relatar incorretamente o status da bateria e continuar exibindo o aviso mesmo quando o hardware está em boas condições.

**Se a bateria estiver realmente fraca**, carregue o dispositivo primeiro — não oculte o aviso até confirmar que o pack está em boas condições.

**Se você tiver certeza de que a bateria está boa**, mas o aviso não desaparece, você **não** precisa modificar o firmware. O TRMNL permite suprimir o aviso na tela a partir do painel web:

**Passo 1.** Abra a [interface web do TRMNL](https://trmnl.app) e vá para **Devices**.

**Passo 2.** Selecione o dispositivo afetado e abra as configurações de **Battery**.

**Passo 3.** Ative **Hide Low Battery Screen**. Isso impede que a tela de aviso de bateria fraca apareça no dispositivo enquanto a detecção de bateria no servidor TRMNL se recupera, ou quando você precisa que o display permaneça na sua playlist.

**Passo 4.** (Opcional) Deixe **Low Battery Email Notification** ativado se você ainda quiser alertas por e-mail sem interromper o display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/261.png" style={{width:800, height:'auto'}}/></div>

### P3: O Web Flasher / PlatformIO não encontra o dispositivo ou o upload falha

Às vezes, o programa errado pode fazer com que o XIAO perca sua porta ou não funcione corretamente:

- O XIAO está conectado, mas **nenhum número de porta** é encontrado.
- O XIAO está conectado, a porta aparece, mas o **upload falha**.

Coloque o XIAO em modo BootLoader para recuperar:

- **Passo 1**: mantenha pressionado o botão `BOOT` no XIAO ESP32-S3 / ESP32-C3 sem soltá-lo.
- **Passo 2**: enquanto ainda estiver segurando `BOOT`, conecte o dispositivo ao computador via USB-C. Solte `BOOT` depois que o dispositivo estiver conectado.
- **Passo 3**: execute novamente o upload / flash. A maioria dos problemas de "dispositivo não reconhecido" ou "upload falhou" é resolvida dessa forma.

## Agradecimentos Especiais

Agradecimentos especiais a toda a **equipe TRMNL** pelo forte apoio e ajuda inestimável em toda esta integração. Em particular, queremos agradecer a **Bogdan**, **Ryan Kulp**, **Fr3d**, **Schappi** e a todos os outros membros da equipe por sua dedicação durante o desenvolvimento e a documentação.

A experiência e o conhecimento deles tornaram esta integração possível e melhoraram muito a experiência para as comunidades do reTerminal E Series (E1001, E1002, E1003 e E1004), TRMNL DIY Kit e XIAO 7.5" ePaper Panel.

## Recursos

<Tabs groupId="trmnl-hardware">
<TabItem value="reterminal-e1001" label="reTerminal E1001 / E1002 / E1003 / E1004" default>

- **[GitHub]** [Código-fonte do firmware TRMNL para E1001 / E1002 / E1003](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL)
- **[GitHub]** [Código-fonte do firmware TRMNL para E1004](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/TRMNL_E1004)
- **[GitHub]** [Firmware TRMNL oficial](https://github.com/usetrmnl/trmnl-firmware)
- **[Wiki]** [Primeiros passos com o reTerminal E1003](/pt-br/getting_started_with_reterminal_e1003)
- **[Wiki]** [Primeiros passos com o reTerminal E1004](/pt-br/getting_started_with_reterminal_e1004)

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

- **[Firmware]** [Biblioteca TRMNL ePaper (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [Driver Board SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Printable]** [Base triangular](https://www.printables.com/model/1354873)
- **[Printable]** [Base triangular protegida](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)
- **[Printable]** [Base em L](https://www.printables.com/model/1354879)
- **[Thingiverse]** [Base triangular](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [Base triangular protegida](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [Base em L](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [Base triangular](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [Base triangular protegida](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [Base em L](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

- **[STP]** [Modelo 3D do gabinete](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]** [PDF do esquema da placa controladora ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GitHub]** [Repositório do firmware TRMNL](https://github.com/usetrmnl/firmware)
- **[GitHub]** [Repositório Seeed_TRMNL_Eink_Project](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

</TabItem>
</Tabs>

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
