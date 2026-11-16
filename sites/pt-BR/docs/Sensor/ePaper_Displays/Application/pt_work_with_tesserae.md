---
description: Use Tesserae, o servidor de dashboard e‑ink auto-hospedado e open source, com o reTerminal E1001, E1002, E1003, E1004 e reTerminal Sticky. Cores completas no Spectra 6, escala de cinza em 16 níveis no E1003, toque no E1003 e no Sticky.
title: Trabalhar com Tesserae
keywords:
  - Display ePaper
  - Tesserae
  - Home Assistant
  - reTerminal
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - reTerminal E1004
  - reTerminal Sticky
image: https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/cover.webp
slug: /reterminal_e10xx_tesserae
sidebar_position: 12
last_update:
  date: 11/13/2026
  author: Kayden D'Mello
createdAt: '2026-11-09'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_tesserae/
updatedAt: '2026-11-13'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com Tesserae

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/cover.jpg" style={{width:700, height:'auto'}}/></div>

Este guia leva um dispositivo reTerminal E Series ou um reTerminal Sticky da caixa até um dashboard na parede com o **Tesserae**. Você grava o firmware uma vez a partir do navegador, conecta o dispositivo ao seu próprio servidor Tesserae e projeta suas páginas no editor web. As etapas são as mesmas em todos os dispositivos. Onde forem diferentes, escolha seu dispositivo nas abas.

:::tip Cores completas e escala de cinza
Tesserae dirige cada painel em toda a sua capacidade. O **E1002** e o **E1004** pintam em todas as seis cores Spectra™ 6, o **E1003** pinta em 16 níveis de cinza e o **Sticky** em 4. O servidor renderiza cada quadro nos bytes exatos que o painel espera, então o dispositivo só precisa pintá-lo.
:::

## O que é o [Tesserae](https://tesserae.ink/)?

Tesserae é um servidor de dashboard para displays de papel eletrônico, open source e auto-hospedado. Você o executa em casa como um App do Home Assistant, um contêiner Docker ou uma instalação simples em macOS, Linux, Windows ou um Raspberry Pi. Você compõe dashboards a partir de widgets no navegador, e cada dispositivo busca seu quadro, o pinta e volta a dormir. Nada sai da sua rede a menos que você escolha isso.

O projeto começou com a reTerminal E Series e cresceu junto com ela. O E1001 foi um dos primeiros dispositivos que o Tesserae suportou, e a E Series continua entre o hardware mais utilizado no web flasher do projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/15-editor-html-view.png" style={{width:700, height:'auto'}}/></div>

### Por que usar o Tesserae?

- **Auto-hospedado e privado**: o servidor roda no seu próprio hardware, sem conta e sem assinatura. Uma opção hospedada, [Tesserae Cloud](https://cloud.tesserae.ink), está disponível se você preferir não executar um servidor.
- **Feito para Home Assistant**: Tesserae é instalado como um App do Home Assistant. Ele mostra suas entidades no painel e, em dispositivos com toque, pode chamar serviços de volta. Com a descoberta MQTT ativada, cada painel aparece no Home Assistant como um dispositivo.
- **Todas as cores que o painel tem**: cor Spectra™ 6 no E1002 e E1004, escala de cinza em 16 níveis no E1003. As fotos são ditherizadas no servidor, para que pareçam corretas em cada painel.
- **Widgets e modelos**: clima, calendários, transporte, tarefas, fotos, Home Assistant e mais, além de widgets da comunidade, temas e modelos completos de dashboard do catálogo.
- **Toque e botões**: os botões frontais e as telas sensíveis ao toque podem girar páginas, pular para um dashboard, forçar uma atualização ou disparar um webhook. No Sticky e no E1003, regiões de toque em uma página atuam como controles.
- **Firmware com foco em bateria**: o dispositivo permanece em deep sleep entre as atualizações. As atualizações de firmware são assinadas e entregues pelo ar pelo seu próprio servidor, então você só grava a partir do navegador uma vez.
- **Open source**: o [servidor](https://github.com/dmellok/tesserae) e o [firmware do dispositivo](https://github.com/dmellok/tesserae-device-firmware) estão no GitHub.

## Hardware compatível

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
      <td align="center">7,5" Monocromático<br/>800 × 480</td>
      <td align="center">7,3" Spectra™ 6 (Cor)<br/>800 × 480<br/>Cores completas no Tesserae</td>
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
      <td align="center">10,3" Monocromático<br/>Escala de cinza em 16 níveis, 1872 × 1404<br/>Toque suportado</td>
      <td align="center">13,3" Spectra™ 6 (Cor)<br/>1200 × 1600<br/>Cores completas no Tesserae</td>
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

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal Sticky</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-product.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">Escala de cinza em 4 níveis, 480 × 800 em retrato<br/>Toque suportado</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-Sticky-p-6861.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
O mesmo firmware também roda na família XIAO ePaper, incluindo o kit EE02 13,3" Spectra™ 6, o kit EE03 10,3", o XIAO 7,5" ePaper Panel e o kit TRMNL 7,5" (OG) DIY. Veja a [lista de compatibilidade do Tesserae](https://docs.tesserae.ink/compatibility/) para todas as placas suportadas.
:::

## O que você precisa

- Um dispositivo reTerminal E Series ou reTerminal Sticky
- Um cabo USB-C que transmita dados (um cabo apenas de carga alimenta o dispositivo, mas o computador não o enxerga)
- Chrome ou Edge para desktop (o gravador usa Web Serial, que o Firefox e o Safari não suportam)
- Uma rede Wi‑Fi de 2,4 GHz
- Um computador, Raspberry Pi ou instalação do Home Assistant para executar o servidor Tesserae

## Etapa 1: Instalar o servidor Tesserae

Escolha o caminho que se adapta à sua configuração. Cada um termina com a interface web do Tesserae aberta no seu navegador na porta **8765**. Anote esse endereço, por exemplo `http://192.168.1.50:8765`, porque o dispositivo precisa dele na Etapa 3.

| Caminho | Melhor para |
|---|---|
| [Home Assistant App](#home-assistant-app) | Você já executa Home Assistant OS ou Supervised |
| [Docker](#docker) | Um Raspberry Pi, NAS ou máquina Linux que já executa contêineres |
| [Proxmox VE](#proxmox-ve) | Um servidor homelab executando Proxmox |
| [macOS, Linux ou Raspberry Pi](#macos-linux-ou-raspberry-pi) | Um computador que fica ligado, sem contêineres |
| [Windows](#windows) | Um PC com Windows que fica ligado |
| [Tesserae Cloud](#tesserae-cloud) | Nenhum servidor próprio |

:::caution Mantenha-o na sua rede doméstica
Tesserae é protegido por uma única senha e foi projetado para uma rede doméstica confiável. Não o exponha diretamente à internet. Para acesso remoto, use uma VPN como Tailscale ou WireGuard.
:::

### Home Assistant App

1. No Home Assistant, abra **Settings → Apps → App store**.
2. Abra o menu no canto superior direito, escolha **Repositories** e adicione:

```text
https://github.com/dmellok/homeassistant-tesserae-addon
```

3. Encontre **Tesserae** na App store, clique em **Install**, depois em **Start**, e abra-o a partir da barra lateral. O Home Assistant faz seu login.

Seus dispositivos alcançam o Tesserae no próprio endereço do Home Assistant na porta 8765, por exemplo `http://homeassistant.local:8765`. Se você executar o App do broker Mosquitto, o Tesserae o usa automaticamente, para que seus painéis possam aparecer no Home Assistant depois (veja a Etapa 5).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/26-ha-app-store-tesserae.png" style={{width:400, height:'auto'}}/></div>

### Docker

Em um Raspberry Pi, NAS ou máquina Linux com Docker instalado:

```bash
mkdir ~/tesserae && cd ~/tesserae
curl -fsSLO https://raw.githubusercontent.com/dmellok/tesserae/main/docker-compose.yml
docker compose up -d
```

Antes de salvar quaisquer credenciais, defina uma chave secreta para que elas permaneçam legíveis se o contêiner for recriado algum dia. Gere uma:

```bash
python3 -c "import secrets; print(secrets.token_hex(32))"
```

Adicione-a a `docker-compose.yml` em `environment:`:

```yaml
TESSERAE_SECRET_KEY: "<the key>"
```

Execute `docker compose up -d` novamente, acesse o endereço da máquina na porta 8765 e escolha uma senha.

### Proxmox VE

Um único comando no host Proxmox cria um contêiner Debian 13 sem privilégios, instala a versão mais recente do Tesserae e o inicia como um serviço:

```bash
COMMUNITY_SCRIPTS_URL=https://raw.githubusercontent.com/dmellok/tesserae/main/scripts/proxmox \
  bash -c "$(curl -fsSL https://raw.githubusercontent.com/dmellok/tesserae/main/scripts/proxmox/ct/tesserae.sh)"
```

1. Quando for perguntado sobre o canal de release, pressione Enter ou aguarde dez segundos para escolher **stable**.
2. Na caixa de diálogo do contêiner, escolha **Default** para usar os tamanhos do script, ou **Advanced** para definir você mesmo CPU, RAM, disco e rede. Mantenha os tamanhos de recursos padrão do script, incluindo o disco de 16 GB; o Tesserae também instala o Chromium para renderização. Se usar **Advanced**, reserve espaço em disco suficiente para o aplicativo, dependências do navegador e futuras atualizações.
3. Quando terminar, o script mostra o endereço do contêiner. Abra `http://<container-ip>:8765` e escolha uma senha.

Para atualizar depois, execute `update` dentro do contêiner.

### macOS, Linux ou Raspberry Pi

Em um terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/dmellok/tesserae/main/install.sh | bash
```

Acesse o endereço da máquina na porta 8765 e escolha uma senha. Em um Raspberry Pi, recomenda-se um sistema operacional de 64 bits e pelo menos 2 GB de RAM.

### Windows

No PowerShell:

```powershell
iwr https://raw.githubusercontent.com/dmellok/tesserae/main/install.ps1 -UseBasicParsing | iex
```

Acesse o endereço do PC na porta 8765 e escolha uma senha. Se o dispositivo não conseguir alcançar o servidor depois, permita a porta 8765 no Firewall do Windows em redes privadas.

### Tesserae Cloud

[Tesserae Cloud](https://cloud.tesserae.ink) executa o servidor para você e funciona com os mesmos dispositivos. Entre com seu e-mail e, em seguida, crie um código de reivindicação em **Settings → Panels → Add a panel**. Na Etapa 3, escolha **Cloud** e insira o código de reivindicação em vez de um endereço de servidor.

### Primeira execução

Na primeira vez que você abrir o Tesserae (exceto como um App do Home Assistant, que faz login para você), escolha uma senha. Um breve assistente de configuração será exibido:

1. **Help out**: escolha se deseja enviar uma contagem de instalações anônima para o projeto Tesserae ou manter a instalação offline.
2. **Timezone**: confirme o fuso horário detectado, para que os agendamentos sejam executados no seu horário local.
3. **Transport**: deixe **REST API** selecionado. É a escolha certa para dispositivos alimentados por bateria como o reTerminal e o Sticky.
4. **Device**: a página aguarda um painel se anunciar. Clique em **Skip for now** e aprove o dispositivo na Etapa 4, ou deixe esta página aberta enquanto você faz o flash: quando o dispositivo aparecer em **Discovered**, dê um nome a ele e clique em **Register**. Você não precisa de um código de pareamento.
5. **Dashboard**: escolha **I'll set this up later** ou volte depois da Etapa 4 para criar um dashboard inicial vinculado ao seu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/01-first-run-set-password.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/02-wizard-welcome.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/05-wizard-transport.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/06b-wizard-device-discovered.png" style={{width:700, height:'auto'}}/></div>

## Etapa 2: Grave o Firmware do Tesserae

<Tabs groupId="tesserae-hardware">
<TabItem value="e-series" label="reTerminal E Series" default>

:::caution macOS: instale primeiro o driver CH340
O reTerminal E Series se conecta por meio de um chip USB-serial WCH CH340, e o macOS não possui um driver nativo para ele. Instale o [driver CH34x da WCH](https://github.com/WCHSoftGroup/ch34xser_macos) e, em seguida, ative-o em **System Settings → General → Login Items & Extensions → Driver Extensions**. O Linux e as versões atuais do Windows geralmente instalam automaticamente um driver compatível. Se o Windows não detectar uma porta serial, instale o [driver WCH CH341SER](https://www.wch-ic.com/downloads/CH341SER_EXE.html); o Windows 10 e anteriores podem exigi-lo. No Linux, se a porta não aparecer, execute `sudo usermod -aG dialout $USER` e saia e entre novamente.
:::

1. Conecte o dispositivo ao computador com o cabo de dados USB-C.
2. Abra **[tesserae.ink/flash](https://tesserae.ink/flash)** no Chrome ou Edge.
3. Em **Choose your panel**, selecione o modelo do seu reTerminal e, em seguida, escolha a versão mais recente em **Firmware build**.
4. Clique em **Next: plug it in**, depois em **Connect & flash**, e selecione a porta serial do dispositivo.
5. Aguarde de 60 a 90 segundos. Deixe o cabo conectado até que o gravador confirme o sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/20-flasher-reterminal-selected.png" style={{width:700, height:'auto'}}/></div>

Quando a gravação terminar, a etapa **Connect it** do gravador pode enviar seus dados de Wi-Fi e o endereço do servidor para o dispositivo pelo mesmo cabo. Escolha **My own Tesserae server**, insira o endereço da Etapa 1 e avance para a Etapa 4.

</TabItem>
<TabItem value="sticky" label="reTerminal Sticky">

Quem possui um Sticky pode gravar o Tesserae diretamente a partir do Sticky Playground.

1. Abra a [página do Tesserae no Sticky Playground](https://www.seeedstudio.com/sticky/playground/tesserae/) ou encontre o card **Tesserae** no Playground e clique em **Flash Now**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/21-playground-tesserae-card.png" style={{width:300, height:'auto'}}/></div>

2. Conecte o Sticky ao computador com o cabo de dados USB-C e mantenha-o conectado até que a gravação seja concluída.
3. Em **Version and setup**, selecione a versão do firmware Tesserae exibida na página.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/22-playground-tesserae-page.png" style={{width:700, height:'auto'}}/></div>

4. Em **Flash to device**, escolha um modo de gravação:
   - **Standard flash** grava o firmware e mantém as configurações de Wi-Fi salvas no Sticky.
   - **Erase flash + flash** apaga toda a flash primeiro. Use-o quando estiver vindo de um firmware diferente.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/23-playground-flash-mode.png" style={{width:500, height:'auto'}}/></div>

5. Clique em **Connect & flash**. Quando o Chrome ou Edge perguntar, selecione a porta serial do Sticky, que aparece como **USB Single Serial**, e clique em **Connect**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/24-playground-serial-port.png" style={{width:300, height:'auto'}}/></div>

6. Aguarde até que a barra de progresso e o **Device Log** indiquem que a gravação foi concluída. O Playground reinicia o dispositivo para você.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/25-playground-device-log.png" style={{width:350, height:'auto'}}/></div>

O Playground usa o mesmo pacote de firmware que o [tesserae.ink/flash](https://tesserae.ink/flash), então você pode usar qualquer um dos dois.

</TabItem>
</Tabs>

:::note
Gravar o Tesserae substitui o firmware que está atualmente no dispositivo. Você pode voltar a qualquer momento gravando outro firmware.
:::

## Etapa 3: Conectar ao Wi-Fi

Após a gravação, o dispositivo mostra uma tela de **Setup mode** com um código QR, o nome da rede de configuração e sua senha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-setup-mode.jpg" style={{width:300, height:'auto'}}/></div>

1. No seu telefone ou computador, conecte-se à rede Wi-Fi **Tesserae-Setup** (senha `tesserae`), seja escaneando o código QR ou escolhendo-a na lista.
2. A página de configuração será aberta automaticamente. Se isso não acontecer, acesse `http://192.168.4.1`.
3. Insira o nome e a senha da sua rede Wi-Fi de 2,4 GHz ou escolha sua rede na lista que o dispositivo escaneou.
4. Escolha como o dispositivo alcança o Tesserae:
   - **Local** (padrão): insira o endereço do seu servidor Tesserae, por exemplo `http://192.168.1.50:8765`. Deixe **Pairing code** em branco e você aprovará o dispositivo na Etapa 4.
   - **Cloud**: insira o código de reivindicação de oito dígitos de **Settings → Panels → Add a panel** no Tesserae Cloud.
   - **Relay**: para um dispositivo em uma rede diferente da do seu servidor. Insira o código de pareamento de **Settings → Cloud relay → Add a remote panel** no seu servidor.
5. Toque em **Save & restart**. O dispositivo entra na sua rede Wi-Fi e se anuncia ao servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/07-device-setup-portal-phone.png" style={{width:300, height:'auto'}}/></div>

:::tip
A rede de configuração permanece ativa por 15 minutos após a saída do último visitante. Se ela tiver expirado, reinicie o dispositivo ou pressione um botão frontal nas placas que tiverem um, para trazer a tela de configuração de volta.
:::

## Etapa 4: Registrar o Dispositivo no Tesserae

Novos dispositivos aguardam sua aprovação, para que o dispositivo de mais ninguém possa se conectar ao seu servidor. Até que você o aprove, o dispositivo mostra **Almost done** e pede que você o aprove no Tesserae em **Settings → Devices**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-almost-done.jpg" style={{width:300, height:'auto'}}/></div>

1. Na interface web do Tesserae, um selo **New device** aparece na barra lateral. Abra **Settings → Devices**, onde um banner informa "1 device has been heard but is not registered".
2. Clique em **Register** no banner. O Tesserae mostra o modelo do dispositivo, o tamanho do painel e a versão do firmware, com o modelo já selecionado.
3. Dê a ele um nome de exibição, como "Cozinha" ou "Corredor", e clique em **Register**.
4. O dispositivo coleta seu token de acesso na próxima verificação e é movido para a lista **Devices**. Seu card mostra o que ele está exibindo, bateria, versão do firmware e a próxima atualização agendada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/08-devices-discovered.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/09-register-name-device.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/10-device-registered.png" style={{width:700, height:'auto'}}/></div>

## Etapa 5: Crie um Dashboard e Envie-o

1. Abra **Dashboards → New dashboard**, ou instale um modelo pronto em **Settings → Widgets → Browse catalog**.
2. Preencha o layout com widgets. Altere a visualização para **Panel view** para ver exatamente o quadro que seu dispositivo irá desenhar, com suas cores ou tons de cinza.
3. Marque seu dispositivo em **Target devices** e clique em **Push**. O dispositivo desenha o novo quadro no próximo despertar.

:::tip Primeiro dashboard mais rápido
De volta à etapa **Dashboard** do assistente de configuração, **Create a starter dashboard** cria um relógio dimensionado para o seu dispositivo e vinculado a ele. Clique em **Push to panel** para confirmar que tudo está conectado e depois abra-o no editor para deixá-lo do seu jeito.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/16-editor-panel-view.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/13-device-card-after-push.png" style={{width:700, height:'auto'}}/></div>

Algumas dicas para cada painel:

- **E1001 e Sticky**: tipos em negrito e com alto contraste têm a melhor leitura.
- **E1002 e E1004**: dê a cada elemento seu próprio bloco de cor. Uma atualização completa Spectra™ 6 leva cerca de 30 segundos no E1002 e cerca de 40 no E1004. Isso é normal para o painel.
- **E1003**: fotos e gradientes são renderizados em 16 níveis de cinza, e a tela alta é adequada para listas e agendas.

Para mudar o que um dispositivo mostra ao longo do dia, abra **Lineups** e escolha **Set up a display**. Você pode escolher as páginas, com que frequência elas são atualizadas e quando o dispositivo permanece em silêncio durante a noite. Para dispositivos alimentados por bateria, o **Smart sync** renderiza cada quadro pouco antes de o dispositivo acordar, para que ele sempre desenhe conteúdo novo sem desperdiçar bateria.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-dashboard-desk.jpg" style={{width:700, height:'auto'}}/></div>

### Conecte seus dados

- **Home Assistant**: adicione um token de acesso de longa duração e a URL do seu Home Assistant em **Settings → Widgets → Home Assistant Core**. Para que cada painel apareça como um dispositivo no Home Assistant, ative **Home Assistant discovery** em **Settings → Server**. O App já usa o broker Mosquitto do Home Assistant se você tiver um em execução.
- **Calendários**: adicione URLs iCal em **Settings → Widgets → Calendar Feeds**.
- **Mais widgets**: widgets, temas e modelos da comunidade estão em **Settings → Widgets → Browse catalog**.

## Botões e Toque

<Tabs groupId="tesserae-hardware">
<TabItem value="e-series" label="reTerminal E Série" default>

Os três botões frontais funcionam imediatamente:

| Botão | Ação padrão |
|---|---|
| Esquerda | Dashboard anterior |
| Direita | Próximo dashboard |
| Refresh | Renderizar e desenhar o dashboard atual novamente |

Altere o mapeamento para cada dispositivo em **Controls → Button map** no cartão do dispositivo. Um botão também pode ir diretamente para um dashboard específico ou disparar um webhook. Mantenha o **Refresh** pressionado por cerca de **3 segundos** e solte para alternar para a configuração Bluetooth por meio do app companheiro Tesserae. Mantenha-o pressionado por **20 segundos** para restaurar as configurações de fábrica, o que apaga as configurações salvas de Wi-Fi e servidor e retorna o dispositivo à tela de configuração.

O **E1003** também oferece suporte a toque. Veja a seção Touch na aba Sticky; ele funciona da mesma forma em ambos os dispositivos.

</TabItem>
<TabItem value="sticky" label="reTerminal Sticky">

- Pressione o **botão de energia** uma vez para acordar o Sticky e buscar a página atual imediatamente.
- Mantenha o botão de energia pressionado por cerca de **3 segundos** e solte para alternar para a configuração Bluetooth por meio do app companheiro Tesserae.
- Mantenha o botão de energia pressionado por **20 segundos** para restaurar as configurações de fábrica. Isso apaga as configurações salvas de Wi-Fi e servidor e retorna o Sticky à tela de configuração.

### Toque

O toque vem desativado por padrão para economizar bateria. Para ativá-lo, abra o cartão do dispositivo, vá para **General** e ative **Touch input**. Regiões de toque em uma página passam a agir como botões. Elas podem alternar luzes do Home Assistant, trocar páginas ou acionar ações, e o painel confirma cada toque com uma atualização parcial em menos de um segundo.

O toque mantém o controlador de toque alimentado durante o modo de sono profundo. Para uma vida útil de bateria maior, defina **Touch wake** como **Double tap or swipe**, que consome cerca de 1 mA. Com essa configuração, um único toque não acorda o painel, mas um toque duplo ou um gesto de deslizar acorda. O toque funciona melhor com alimentação USB.

Ative **Beep on interaction** se quiser que o buzzer confirme cada toque ou pressão antes de o painel redesenhar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/sticky-touch-lights.png" style={{width:300, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Atualizações de Firmware

As atualizações de firmware chegam pelo ar. **Settings → Firmware** na interface web do Tesserae mostra a versão instalada e a disponível para cada dispositivo. Clique em **Queue update**, ou ative **Auto**, e o dispositivo baixa, verifica e instala a atualização assinada no próximo despertar. Você só precisa fazer o flash pelo navegador novamente para uma instalação do zero ou para recuperação.

O Tesserae verifica se há novo firmware quando os recursos online estão ativados (**Settings → System → Online features**). Em uma instalação offline, baixe o arquivo `descriptor-<kind>.json` da [versão de firmware](https://github.com/dmellok/tesserae-device-firmware/releases) e importe-o em **Manual import**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_Tesserae/img/19b-firmware-update-available-crop.png" style={{width:700, height:'auto'}}/></div>

## FAQ

### P1: O flasher não consegue encontrar meu dispositivo

- Use um cabo USB-C que transmita dados e uma porta USB que ofereça suporte a dados. Portas do painel frontal em alguns desktops não oferecem.
- Use Chrome ou Edge. Firefox e Safari não oferecem suporte a Web Serial.
- No macOS com um reTerminal E Series, instale e ative o driver CH340 (veja a Etapa 2).
- Feche qualquer outro programa que possa estar usando a porta serial.

### P2: O dispositivo não aparece em Discovered

- Verifique se o dispositivo saiu do modo de configuração. Se ele ainda mostrar a tela de configuração, insira os dados de Wi-Fi novamente.
- Certifique-se de que sua rede Wi-Fi é de 2,4 GHz.
- Verifique se o endereço do servidor funciona a partir de outro dispositivo na mesma rede, por exemplo abrindo `http://<your-server>:8765` em um navegador.

### P3: O dispositivo mostra "Can't reach the server" ou "Wi-Fi unavailable"

O dispositivo mostra o problema no painel e tenta novamente por conta própria. Se o Wi-Fi cair, ele tenta novamente a cada minuto por cerca de 12 minutos e então abre o portal de configuração uma vez por 15 minutos. Depois disso, ele continua tentando a rede salva em segundo plano e se reconecta quando a rede voltar. Para abrir o portal de configuração novamente, reinicie o dispositivo ou pressione um botão frontal.

### P4: O quadro é baixado, mas o painel não desenha

A bateria pode estar muito fraca para uma atualização do painel. Conecte a alimentação USB, deixe carregar por uma hora e tente novamente.

## Agradecimentos Especiais

Agradecimentos especiais à equipe da **Seeed Studio** pelo suporte durante todo o desenvolvimento do reTerminal E Series e do Sticky, em particular a **Mason Cao** e **Lily Li**.

Agradecimentos também aos contribuidores do Tesserae que ajudaram a tornar o projeto possível, em particular **[skynet01](https://github.com/skynet01)**, **[charmmmz](https://github.com/charmmmz)**, **[theiereman](https://github.com/theiereman)**, **[vaibhav8a](https://github.com/vaibhav8a)**, **[partridgeworks](https://github.com/partridgeworks)**, **[bablokb](https://github.com/bablokb)**, **[varanu5](https://github.com/varanu5)** e **[Frankynov](https://github.com/Frankynov)**, e à comunidade em geral pelos widgets, testes de firmware e relatos de hardware que sustentam esta integração.

## Recursos

- **[Website]** [Tesserae](https://tesserae.ink): página do projeto, lista de compatibilidade e o flasher no navegador
- **[Docs]** [Documentação do Tesserae](https://docs.tesserae.ink/): instalação do servidor, dispositivos, toque, botões, Lineups e Home Assistant
- **[Docs]** [Guia rápido do Seeed ePaper](https://docs.tesserae.ink/quickstart/seeed-unified/): os mesmos passos, com notas para cada dispositivo
- **[GitHub]** [Servidor Tesserae](https://github.com/dmellok/tesserae)
- **[GitHub]** [Firmware de dispositivo Tesserae](https://github.com/dmellok/tesserae-device-firmware): código-fonte, releases e rastreador de issues
- **[GitHub]** [App Tesserae para Home Assistant](https://github.com/dmellok/homeassistant-tesserae-addon)
- **[Community]** [Discussões no GitHub](https://github.com/dmellok/tesserae/discussions)
- **[Wiki]** [Primeiros Passos com o reTerminal E1003](/pt-br/getting_started_with_reterminal_e1003)
- **[Wiki]** [Primeiros Passos com o reTerminal E1004](/pt-br/getting_started_with_reterminal_e1004)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
