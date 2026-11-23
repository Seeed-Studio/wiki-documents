---
description: Guia completo de primeiros passos para o Gateway Wi-Fi HaLow HaLowLink 2 — conexão de hardware, interface web, modos de rede, configuração de link HaLow com dois dispositivos, configuração avançada, manutenção de firmware, dúvidas comuns e solução de problemas
title: Primeiros Passos com o HaLowLink 2
keywords:
  - HaLowLink 2
  - Wi-Fi HaLow
  - Wio-WM8108
  - Primeiros Passos
  - Access Point
  - Extender
  - Pareamento
  - OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /halowlink2_getting_started
sku: 100072966
last_update:
  date: 11/12/2026
  author: Advent Jiang
createdAt: '2026-11-06'
updatedAt: '2026-11-12'
url: https://wiki.seeedstudio.com/pt-br/halowlink2_getting_started/
---

# Primeiros Passos com o HaLowLink 2

<!-- Internal note: all procedures on this page are sourced from the official Morse Micro HaLowLink User Guide, which states it applies to both HaLowLink 1 and HaLowLink 2. Items not yet re-verified on Seeed retail hardware carry internal "Requires Verification" comments — confirm them, with screenshots and the tested firmware version recorded, before publication. No simulated results anywhere on this page. -->
<!-- Internal note (source check 2026-11-11, official HaLowLink User Guide PDF, 58 pp.): default state = "Router with a HaLow Access Point" — §1.3.1 p.9 ("This is the default mode of operation"), §2.5 p.13 ("When you first power on your HaLowLink it will be a Router with a HaLow Access Point"); factory reset returns to it — §5 p.24. USB-C carries Ethernet: §2.1.3 p.10 (initial-connection method), §6.4 p.28 ("A new Ethernet adapter should appear on your computer… DHCP Client"), §12.2.1 Table 6 p.44 (USB-C row: computer gets a 192.168.12.x IP and reaches https://192.168.12.1). Spec-table wording agreed by Seeed product page and Product Brief Rev 9 ("1x USB-C port (power and Ethernet data)"). -->

Do unboxing até um link HaLow de longo alcance funcionando em quatro etapas: conecte o hardware, faça login na interface web, escolha um modo de rede e faça o pareamento de duas unidades. Especificações e recursos: [Introdução](/pt-br/halowlink2_introduction).

As capturas de tela da interface web neste guia foram feitas no **software HaLowLink 2.11.8**; nomes de menus e layouts dos cards podem ser diferentes em outras versões de firmware.

<!-- Video Required: unboxing + first login + two-device pairing walkthrough (Optional, P1). To be produced by Seeed; embed here when available. -->

## Preparação

### O que você precisa

- **Um HaLowLink 2** (Router / Access Point), ou **duas unidades** para um link de longo alcance com um Extender ([configuração com dois dispositivos](#conectar-dois-dispositivos-halowlink-2))
- Itens do pacote de varejo: adaptador de energia, cabo USB-C para USB-C, cabo Ethernet, antena, base
- Um computador ou smartphone para a configuração; opcionalmente, um roteador existente como uplink de Internet

:::tip
A etiqueta na parte inferior traz o **nome de usuário e senha da interface web** e o **SSID/senha padrão do Wi-Fi de 2,4 GHz** (além de um código QR). Você precisa deles para fazer login.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-lan-connection.jpg" alt="HaLowLink 2 em sua base com a antena, um cabo Ethernet LAN e o cabo de alimentação USB-C conectados" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Lado do dispositivo: antena no conector SMA, cabo Ethernet na porta LAN, cabo de alimentação USB-C. A porta WAN está vazia nesta foto; o lado do computador não é mostrado.</em></p>

### Conecte o hardware

1. Rosqueie a **antena** no conector SMA **antes** de ligar o dispositivo.
2. Alimente o dispositivo via **USB-C** com o **adaptador de energia fornecido**. Não use um adaptador USB-A para USB-C.
3. Conecte seu computador — escolha um método:
   - **Cabo Ethernet na porta LAN** — recomendado para a primeira configuração
   - **Wi-Fi de 2,4 GHz** — SSID e senha na etiqueta (conecte após a inicialização)
   - **Cabo USB-C para USB-C** — o dispositivo aparece como um adaptador de rede no seu computador
4. Precisa de Internet a jusante? Conecte seu roteador à porta **WAN**.

**Resultado esperado:** LED de Status **verde fixo** — o dispositivo executa sua **configuração de fábrica de Router com um Wi-Fi HaLow Access Point**.

## Acessar a Interface Web

1. Abra um navegador e acesse:

   ```text
   https://192.168.12.1
   ```

   A interface de gerenciamento é **apenas HTTPS**; digitar `http://` redireciona automaticamente.
2. Na primeira visita aparece um **aviso de certificado** — o dispositivo usa um certificado autoassinado. Aceite-o; a conexão ainda é criptografada.
3. Faça login com o **nome de usuário e senha impressos na etiqueta do dispositivo**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-login.png" alt="Página de login da interface web do HaLowLink 2 com campos de nome de usuário e senha" width={700} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Página de login: insira o nome de usuário e a senha da etiqueta do dispositivo e, em seguida, escolha Log in.</em></p>

4. A **Home page** é aberta com estes cards: **Access Point (HaLow)**, **Access Point (2.4 GHz)**, **Local Network**, **Uplink (Ethernet)**, **Mode**, **Network Interfaces**, **System**. A versão do firmware fica no **canto inferior esquerdo**; o card **System** adiciona modelo, versão do OpenWrt e qualquer aviso de atualização ([Firmware](#atualização-de-firmware-e-reset-de-fábrica)).

**Resultado esperado:** a Home page carrega; a versão do firmware é visível no canto inferior esquerdo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-home-2.11.8.png" alt="Home page da interface web do HaLowLink 2 no software 2.11.8" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Home page (2.11.8), padrão de fábrica: o card Mode mostra "Router with HaLow Access Point", 0 clientes conectados, Uplink (Ethernet) Disconnected (sem cabo WAN). Ela mostra o layout — não um link HaLow em funcionamento.</em></p>

## Configuração de Rede

O HaLowLink 2 opera em uma de três configurações:

- **Router** / **Access Point** — ambos hospedam um **HaLow AP**; eles diferem em onde os clientes obtêm endereços IP. Definido no **Wizard**.
- **Extender** — conecta-se a esse AP por um link cliente HaLow. Definido com o **botão Mode** físico.

Um LED de Status verde sozinho não diferencia Router de Access Point.

| Mode | Status LED | Clientes obtêm endereços IP de | Endereço de gerenciamento | Quando usar |
|:----:|:----:|:----|:----|:----|
| **Router** (padrão de fábrica) | Verde fixo | O próprio dispositivo — `192.168.12.x`, com seu próprio servidor DHCP, NAT e firewall | `https://192.168.12.1` | Uma rede HaLow independente ou um ambiente de teste isolado |
| **Access Point** (recomendado) | Verde fixo | O servidor DHCP do seu roteador existente — sem NAT | O IP atribuído pelo upstream, além de `https://192.168.12.1` na porta LAN | Adicionar dispositivos HaLow a uma LAN existente para que tudo possa se comunicar com tudo |
| **Extender** | Azul-esverdeado fixo | A rede atrás do Access Point, através do link HaLow | Nenhum — gerencie-o através do Access Point | A unidade remota de uma implantação com dois dispositivos |

Quando o dispositivo hospeda o HaLow AP (configuração Router ou Access Point):

- O **endereço de gerenciamento `192.168.12.1` permanece disponível na porta LAN** (e USB-C), mesmo depois que o dispositivo obtém um IP diferente a montante. Exceções: um Extender pareado ou a [configuração totalmente em bridge](#ip-estático-e-dhcp).
- O **Wizard começa a partir da configuração padrão** — executá-lo sobrescreve alterações feitas fora do Wizard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-wizard-2.11.8.png" alt="Página Wizard do HaLowLink 2 com as opções HaLow Mode e Network Mode no software 2.11.8" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Wizard (2.11.8). HaLow Mode: Access Point, EasyMesh Controller ou 802.11s Mesh. Network Mode: onde os dispositivos HaLow obtêm IPs — a captura de tela mostra a seleção padrão (rede local deste dispositivo); a opção recomendada de roteador existente é o segundo botão de opção. As alterações são aplicadas em Save &amp; Apply.</em></p>

Estados transitórios do LED de Status: verde ou azul-esverdeado piscando = inicializando; amarelo piscando = reset de fábrica em andamento; amarelo fixo = bootloader ([Recuperação](#atualização-de-firmware-e-reset-de-fábrica)); **azul piscando = atualização de firmware — não desconecte a alimentação**.

### Modo Router (Padrão)

Fora da caixa o dispositivo faz roteamento de tráfego: própria sub-rede `192.168.12.x`, servidor DHCP e firewall, porta **WAN** como uplink. Nada a configurar. A interface web responde apenas nas redes do próprio dispositivo (LAN, USB-C, Wi-Fi de 2,4 GHz, HaLow) — nunca pelo lado WAN.

### Modo Access Point (Recomendado)

Use este modo para tornar os dispositivos HaLow membros de primeira classe da sua rede existente:

1. Conecte a porta **WAN** ao seu roteador. Na Home page, verifique se **Uplink (Ethernet)** mostra um IP atribuído.
2. Abra o **Wizard**. Selecione *"Wi-Fi HaLow devices will get an IP on your existing router's network"* (marcado como *(Recommended)*).

**Resultado esperado:** clientes HaLow obtêm IPs do seu roteador e alcançam todos os dispositivos na sua LAN. A interface web permanece acessível no endereço a montante e em `https://192.168.12.1` na porta LAN.

### Modo Extender

O modo Extender é para a unidade *remota* de uma implantação com dois dispositivos. Ative-o com o **botão Mode** físico — sem necessidade de interface web:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-mode-button.jpg" alt="Botão Mode na lateral do gabinete do HaLowLink 2" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>O botão Mode na lateral do gabinete, entre as aberturas de ventilação. Ele não é um interruptor de energia.</em></p>

1. Ligue o dispositivo. Aguarde até que o LED de Status fique fixo (verde ou azul-esverdeado).
2. **Mantenha pressionado o botão Mode.** O LED de Status pisca **verde lentamente**, depois **azul-esverdeado rapidamente**. Solte em azul-esverdeado rápido.
   (Soltar durante o verde lento executa um [reset de fábrica](#atualização-de-firmware-e-reset-de-fábrica) em vez disso.)
3. Aguarde até que o LED de Status fique **azul-esverdeado fixo**.

**Resultado esperado:** azul-esverdeado fixo = modo Extender. A unidade agora precisa de pareamento ([próxima seção](#conectar-dois-dispositivos-halowlink-2)). Depois de pareado, ela não tem interface web própria — gerencie-a através do Access Point. Suas portas LAN, WAN, USB-C e o Wi-Fi de 2,4 GHz servem toda a rede estendida.

## Conectar Dois Dispositivos HaLowLink 2

Unidade nº 1 = **HaLow Access Point** ao lado do seu roteador. Unidade nº 2 = **Extender** no local remoto. Qualquer coisa conectada ao Extender — Ethernet, USB-C ou Wi-Fi de 2,4 GHz — entra na sua rede através do link HaLow abaixo de 1 GHz. Todo cenário de aplicação é baseado neste procedimento.

### Topologia de Rede

```text
[ Router / LAN ] --Ethernet(WAN)-- [ HaLowLink 2 #1: HaLow AP (green LED) ]
                                        )))  Wi-Fi HaLow link ( sub-1 GHz )  (((
[ Remote devices ] --Ethernet/USB-C/2.4 GHz Wi-Fi-- [ HaLowLink 2 #2: Extender (aqua LED) ]
```

<!-- Image Required: verified two-device topology diagram with real photos. Priority P1. -->

### Parear os dispositivos

Prepare as duas unidades:

1. A unidade já foi configurada antes? Faça o [reset de fábrica](#atualização-de-firmware-e-reset-de-fábrica) primeiro para que ambas comecem no estado padrão.
2. Unidade nº 1 = **Access Point** perto do seu roteador: porta WAN conectada ao roteador, Assistente executado com a opção recomendada ([etapas](#modo-access-point-recomendado)). LED de Status verde fixo.
3. Unidade nº 2 = **Extender** no local remoto ([etapas](#modo-extender)). LED de Status azul-claro fixo.
4. Mesmo firmware em ambas? Verifique a versão no **canto inferior esquerdo** de cada página Inicial **antes** de a unidade nº 2 entrar em modo Extender e perder sua interface web.

<!-- Requires Verification (internal): confirm whether units from different regional variants can pair, and whether HaLowLink 1 and HaLowLink 2 interoperate. Not stated in the official guide — do not publish an answer until confirmed with Morse Micro or on hardware. -->

Depois, faça o pareamento — configuração por botão, sem precisar digitar credenciais:

1. No **Access Point**: pressione e **solte imediatamente** o botão Mode. O LED Wi-Fi HaLow começa a piscar lentamente.
2. No **Extender**: pressione e **solte imediatamente** o botão Mode. O LED Wi-Fi HaLow dele começa a piscar lentamente.
3. Aguarde a conclusão da troca de credenciais (geralmente alguns segundos).

**Resultado esperado:** o LED Wi-Fi HaLow do Extender fica **roxo fixo** — credenciais recebidas, link conectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-led-indicators.jpg" alt="Front of the HaLowLink 2 showing the labelled Status, Wi-Fi HaLow and 2.4 GHz LEDs" width={400} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Os três LEDs frontais identificados. Aqui: Status azul-claro + Wi-Fi HaLow roxo = um Extender pareado. Uma foto estática mostra apenas as cores, não o padrão de piscadas.</em></p>

O pareamento falhou? Ambos os LEDs HaLow **piscam rapidamente por 120 segundos** — um atraso de nova tentativa por segurança. Espere até que a piscada pare em ambas as unidades e então repita a partir da etapa 1.

:::note
Se o Access Point estiver operando como um **EasyMesh Controller**, os Extenders pareados se tornam EasyMesh Agents automaticamente (mesh: **não suportado na UE ou no Reino Unido**; raramente necessário). Em vez disso, para credenciais manuais: faça o reset de fábrica do Extender e use o portal de configuração dele em `https://192.168.12.1`. Detalhes: o [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) oficial.
:::

## Verificar a conexão

1. **Página Inicial do Access Point → Connected Devices:** o Extender e os dispositivos atrás dele aparecem aqui — clique no cartão para ver a intensidade do sinal.
2. **No Extender:** o LED Wi-Fi HaLow está **roxo fixo** (roxo piscando = atividade de tráfego).
3. **Conecte um dispositivo de teste** ao Extender — Ethernet, USB-C ou o Wi-Fi de 2,4 GHz dele. As credenciais de Wi-Fi estão na **etiqueta do próprio Extender**, não na do Access Point.
4. **Verifique o endereço IP dele:** atribuído por DHCP — na configuração recomendada, vindo do seu roteador principal (veja a tabela de concessões dele).
5. **Dê ping** no seu roteador ou em outro host da LAN a partir do dispositivo de teste, ou use **Network → Diagnostics** na interface web do Access Point.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/WiFi_Halow/Halow_link2/halowlink2-associated-client.jpg" alt="Expanded Access Point (HaLow) card on the Home page listing one associated HaLow client with signal and RX/TX rates" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><em>Cartão Access Point (HaLow) expandido na página Inicial do AP: um cliente HaLow associado — o Extender pareado — com sinal de −32 dBm. Os valores de RX/TX são taxas de link de rádio reportadas pela interface, não throughput de aplicação medido.</em></p>

**Resultado esperado:** o dispositivo de teste mantém um endereço IP da LAN principal e alcança sua rede através do link HaLow.

<!-- Resolved 2026-11-11: screenshot inserted above. The device owner confirmed it shows the successful AP–Extender link and approved publishing the client MAC visible in it (0C:BF:74:00:50:AC). Same screen records firmware context: OpenWrt 23.05.6, hostname halowlink2-74e7, channel 28 (916.0 MHz, 8 MHz), WPA3 SAE. -->

## Configurações avançadas

Além do Assistente: **Quick Config** (configurações comuns, mostradas ao vivo em um diagrama) e **Advanced Config** (acesso granular: interfaces, wireless, firewall, sistema, pacotes, terminal). Com Advanced Config ativado, o indicador **Unsaved Changes** antecipa os comandos `uci` exatos que cada alteração produz antes de você aplicá-la.

:::caution
Uma configuração de rede incorreta pode bloquear seu acesso à interface web. Caminho de resgate: em um computador na porta LAN ou WAN, defina um IP estático `10.22.121.110` (máscara `255.255.255.254`, ou `255.255.255.0` se o seu SO não conseguir definir /31). O dispositivo sempre responde em **`https://10.22.121.111`**. Último recurso: [reset de fábrica](#atualização-de-firmware-e-reset-de-fábrica).
:::

### Configurações de wireless

- **Quick Config → Wireless** define SSID, senha, canal e largura de banda.
- A largura de banda é 1 / 2 / 4 / 8 MHz: mais larga = maior throughput, mais estreita = melhor alcance e robustez.
- **A região regulatória é travada.** Canal, largura de banda e potência de TX seguem a variante regional (UE/Reino Unido: 14 dBm; Japão: 16 dBm; capacidade: até 26 dBm). Sem mesh na UE ou no Reino Unido. Use o dispositivo apenas na região para a qual ele foi vendido.
- Espaço aéreo congestionado? **Status → Channel Analysis** (Advanced Config) encontra um canal mais silencioso; **Status → Realtime Graphs** mostra a qualidade do link em tempo real.

<!-- Requires Verification (internal): capture the actual Quick Config → Wireless options on retail firmware (TX power exposure, bandwidth dropdown per region) before adding screenshots. -->

### IP estático e DHCP

- **Quick Config → Network Interfaces** define cada interface lógica para um IP estático (opcionalmente com um servidor DHCP) ou um cliente DHCP; portas na mesma rede são colocadas em bridge automaticamente. As alterações são aplicadas em **Save & Apply**.
- **Access Point totalmente em bridge (avançado):** remova a sub-rede de gerenciamento `192.168.12.1` separada movendo as interfaces LAN, 2,4 GHz e USB da rede `lan` para `wlan`. Faça isso **a partir do endereço atribuído a montante** (não `192.168.12.1`), ou use **Apply Unchecked** — caso contrário, ele reverte automaticamente. Detalhes: o [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) oficial.
- CLI: `uci set … && uci commit`, depois `reload_config` (sem necessidade de reiniciar); acompanhe o log com `logread -l 100 -f`.

### SSH e diagnósticos

- **SSH vem desativado por padrão.** Ative em **Advanced Config → Administration → SSH Access**; faça login com as credenciais da etiqueta. **Services → Terminal** é um console baseado em navegador (apenas HTTP simples — siga o link de aviso do navegador).
- **Network → Diagnostics** executa ping, traceroute, arp-scan e iperf3 — e mostra o comando exato usado.
- **Services → Range Test** (Advanced Config) automatiza o iperf3 entre dois dispositivos HaLowLink: mesmo firmware em ambos, selecione a unidade remota no menu suspenso, insira a **senha da etiqueta** dela, Start Test. Exporte os resultados como CSV/JSON. Extras de CLI: `morse_cli` (acesso de baixo nível ao chip HaLow) e `wavemon` (monitor de sinal).

:::caution
Os resultados de Range Test são **voláteis** — uma reinicialização os apaga, portanto exporte antes. Um resultado de ~40 Mbps UDP **e** 900+ Mbps TCP significa que o teste foi executado sobre **Ethernet**, não sobre o link HaLow: reposicione os dispositivos e teste novamente.
:::

<!-- Requires Verification (internal): run a real Range Test on Seeed hardware and capture screenshots + a CSV export. Real results only — never publish throughput numbers that were not captured from a real test. -->

### Atualização de firmware e reset de fábrica

**Verifique e atualize o firmware.** A versão instalada fica no **canto inferior esquerdo** da página Inicial. Quando online, o cartão **System** mostra um aviso de atualização (por exemplo, *Upgrade to 3.2.3 available*) — apenas um aviso, até você instalá-la. Instale pela página **Upgrade** na barra lateral: atualização automática (faz download dos servidores oficiais de atualização; Internet necessária) ou envio manual de arquivo. Durante uma atualização o LED de Status **pisca azul — não desconecte a alimentação**.

<!-- Requires Verification (internal): confirm whether Seeed will distribute firmware separately from the Morse Micro servers; only official Morse Micro / Seeed Studio download sources may ever be linked here. -->

**Reset de fábrica.** Retorna o dispositivo à **configuração de Router com um Wi-Fi HaLow Access Point** padrão (verde fixo):

1. Ligue o aparelho. Espere até que o LED de Status fique fixo (verde ou azul-claro).
2. **Mantenha pressionado o botão Mode até o LED de Status piscar lentamente em verde e então solte.** (Segurar até ficar rapidamente azul-claro coloca em modo Extender em vez disso.)
3. O LED pisca amarelo brevemente e depois fica **verde fixo** = concluído. Faça login novamente em `https://192.168.12.1` com as credenciais da etiqueta.

**Recuperação.** Perda de energia durante uma atualização pode corromper o firmware: o LED de Status então permanece **amarelo fixo** e o dispositivo não inicializa normalmente. A recuperação é feita pelo bootloader — siga com atenção a seção "Recovering From Failed Updates" do [HaLowLink User Guide](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) oficial e entre em contato com o suporte da Seeed antes de tentar.

<!-- Requires Verification (internal): the full bootloader recovery procedure (User Guide §14.1: hold Mode while powering on → yellow + 5 white blinks → release → static IP 192.168.12.2/24 on the PC → http://192.168.12.1 → upload firmware → 10+ min LED sequence) is deliberately NOT published as executable steps until it has been reproduced on Seeed retail hardware. The previous full transcription is kept in D:\SeeedWiki\notes\halowlink2\old-drafts\. -->

## FAQ

### O que é Wi-Fi HaLow?

Wi-Fi HaLow (IEEE 802.11ah) é Wi-Fi na faixa sub-1 GHz, projetado para longo alcance e baixo consumo. No HaLowLink 2: até 1 km em linha de visada, melhor penetração de obstáculos que o Wi-Fi de 2,4 GHz, com taxas de dados por link mais baixas.

### Eu preciso de dois dispositivos HaLowLink 2?

Uma unidade é suficiente para adicionar um ponto de acesso Wi‑Fi HaLow para clientes compatíveis com HaLow (por exemplo, nós baseados em Wio-WM6108 / Wio-WM6180). Duas unidades fazem a ponte de dispositivos **não HaLow** — celulares, laptops, equipamentos Ethernet — através de um link de longo alcance: um Ponto de Acesso, um Extensor.

### Qual é o endereço de gerenciamento padrão e o login?

`https://192.168.12.1` (apenas HTTPS; o aviso de certificado na primeira visita é esperado), com o nome de usuário e a senha impressos na etiqueta do dispositivo. No modo Extensor o dispositivo não é acessível neste endereço.

### Qual é a diferença entre o modo Ponto de Acesso e o modo Extensor?

**Ponto de Acesso** (verde sólido): hospeda a rede HaLow, conecta ao seu roteador, interface web completa. **Extensor** (aqua sólido): um cliente HaLow que estende a rede do AP via Ethernet, USB‑C e seu próprio Wi‑Fi de 2,4 GHz; não possui interface web própria depois de pareado. Mude para o modo Extensor com o botão Mode; um reset de fábrica retorna a unidade ao modo Ponto de Acesso.

### Um smartphone comum pode se conectar diretamente ao Wi‑Fi HaLow?

Não — celulares de consumo não possuem rádio 802.11ah abaixo de 1 GHz. Use um segundo HaLowLink 2 como **Extensor**: ele retransmite o link como um hotspot Wi‑Fi comum de 2,4 GHz (credenciais em sua própria etiqueta) e em suas portas Ethernet/USB‑C.

### 43,3 Mbps é a taxa de transferência real?

Não — é a taxa máxima de **PHY (camada física)** do rádio MM8108 em largura de banda de 8 MHz. A taxa de transferência real é menor e depende da largura de banda, distância, qualidade do sinal e interferência. Meça seu próprio link com as [ferramentas de Diagnóstico / Teste de Alcance](#ssh-e-diagnostics).

### Posso alterar a região de operação?

Não. O dispositivo é certificado para a região em que foi vendido (EUA, Canadá, Austrália, Reino Unido, Europa, Japão); faixas, canais e limites de potência de transmissão seguem essa região. Alterar ou contornar a região não é suportado e violaria os regulamentos de rádio.

<!-- Requires Verification (internal): confirm with Morse Micro whether any region-selection mechanism exists in retail firmware at all before expanding this answer. -->

## Solução de Problemas

| Sintoma | Verificação | Correção |
|:----|:----|:----|
| **Não é possível acessar a interface web** em `https://192.168.12.1` | Cor do LED de Status? Computador na **LAN ou USB‑C** (não na WAN)? Computador possui um endereço `192.168.12.x` (cliente DHCP)? | Aqua **sólido** = modo Extensor — esperado; gerencie a rede a partir do AP ou faça um [reset de fábrica](#firmware-update-and-factory-reset) para sair do modo Extensor. Verde sólido mas inacessível: [reset de fábrica](#firmware-update-and-factory-reset). Bloqueado após uma alteração de configuração: use o [IP de diagnóstico](#advanced-settings) `10.22.121.111`. |
| **Dispositivos não conseguem parear** (LEDs HaLow piscam rapidamente) | Ambos os botões *pressionados e imediatamente soltos* (não mantidos pressionados)? AP verde sólido, Extensor aqua sólido? Dispositivos dentro do alcance? | Piscar rápido = o **atraso de nova tentativa de 120 segundos** — espere até parar em ambas as unidades e então tente parear novamente. Modo AP alterado após o pareamento: desligue e ligue o Extensor (mudança de Network Mode) ou refaça o [pareamento](#pair-the-devices) (mudança de HaLow Mode). |
| **Sem endereço IP** em um cliente conectado | Em qual modo o dispositivo está? Quem executa o DHCP? (Veja a [tabela de comparação](#network-configuration).) | Modo Router: o dispositivo fornece `192.168.12.x`. Modo Ponto de Acesso: seu **roteador principal** fornece IPs — verifique sua tabela de concessões; clientes *não* aparecem no cartão Local Network do dispositivo. Clientes do Extensor: atendidos pela rede do AP — desligue e ligue o Extensor se o AP tiver sido reconfigurado. |
| **Conectado mas sem Internet** | Página inicial do AP: **Uplink (Ethernet)** mostra um IP? Porta WAN conectada ao roteador? | Corrija primeiro o uplink WAN. Se a Internet só piora enquanto um computador está conectado por cabo a um Extensor/AP: seu sistema operacional está preferindo o link cabeado — ajuste a prioridade/métrica de rota para que sua conexão usual mantenha a rota padrão. |
| **Baixa taxa de transferência** no link HaLow | Força do sinal (cartão Connected Devices), Gráficos em Tempo Real, Análise de Canal; distância e obstáculos; configuração de largura de banda | Reposicione ou reoriente os dispositivos; escolha um canal menos congestionado; revise a configuração de largura de banda. Cada salto extra em malha reduz a taxa de transferência pela metade. Em Range Test, ~40 Mbps UDP + 900+ Mbps TCP = o tráfego passou por **Ethernet**, não por HaLow. Um LED HaLow piscando rapidamente o tempo todo = **loop de rede** — remova qualquer segundo cabo entre os dois lados. |

Para qualquer coisa não coberta aqui: atualize primeiro o firmware e depois tente um reset de fábrica. Para relatar um problema, abra **Help → Support → Create Archive** na interface web e mantenha o arquivo para o suporte. Mais detalhes: o [Guia do Usuário HaLowLink](https://www.morsemicro.com/resources/user_guides/HaLowLink-User-Guide.pdf) oficial.

<!-- Requires Verification (internal): reproduce each troubleshooting row on retail hardware and record the firmware version. Full 11-entry Symptom/Checks/Resolution/Verification version is kept in D:\SeeedWiki\notes\halowlink2\old-drafts\ for reference. -->

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
