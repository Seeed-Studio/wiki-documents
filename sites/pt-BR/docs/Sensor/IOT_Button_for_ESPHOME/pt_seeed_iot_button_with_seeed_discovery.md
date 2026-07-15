---
description: Conecte seu Seeed Studio IoT Button V2 ao Home Assistant usando a integração Seeed HA Discovery para um controle de casa inteligente perfeito.
title: Conectar IoT Button ao Home Assistant via Seeed HA Discovery
keywords:
  - IoT Button
  - Home Assistant
  - Seeed HA Discovery
  - ESP32-C6
  - Smart Home
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /iot_button_v2_ha_discovery
last_update:
  date: 12/17/2025
  author: Citric
createdAt: '2025-12-18'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/iot_button_v2_ha_discovery/
---

# Conectar IoT Button V2 ao Home Assistant via Seeed HA Discovery

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:800, height:'auto'}}/></div>

O Seeed Studio IoT Button V2 é um switch inteligente versátil com tecnologia ESP32-C6, oferecendo indicadores LED RGB personalizáveis, disparos de eventos programáveis e capacidade de carregamento via USB-C. Neste projeto, vamos guiá-lo na conexão do seu IoT Button V2 ao Home Assistant usando a integração Seeed HA Discovery – uma solução que facilita a conexão de dispositivos ESP32 ao Home Assistant com descoberta automática e comunicação em tempo real via WebSocket.

Em comparação com o uso de ESPHome, esta solução é projetada especificamente para casos de uso de botão compatíveis com deep sleep. O ESPHome atualmente só oferece suporte a light sleep para o IoT Button V2, o que leva a um maior consumo de energia ao longo do tempo e exige que você acorde o dispositivo com um pressionar dedicado antes que o clique real do botão possa acionar entidades de forma confiável. Com este firmware e a integração Seeed HA Discovery, o botão pode entrar corretamente em deep sleep e acordar diretamente com a interação do botão, evitando essas limitações e proporcionando uma experiência mais responsiva e eficiente em termos de energia.

## Primeiros Passos

Este projeto irá guiá-lo por três fases principais: gravar o firmware no seu IoT Button V2 usando um gravador baseado na web, instalar a integração Seeed HA Discovery via HACS (Home Assistant Community Store) e descobrir o seu botão no Home Assistant para automação residencial inteligente.

### Materiais Necessários

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button V2</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

O Home Assistant Green é a forma mais simples e com maior foco em privacidade de automatizar a sua casa. Ele oferece uma configuração sem esforço e permite controlar todos os dispositivos inteligentes com apenas um sistema, onde todos os dados são armazenados localmente por padrão. Esta placa se beneficia do próspero ecossistema do Home Assistant e será melhorada todos os meses pelo código aberto.

Recomendamos usar o Home Assistant Green como host do Home Assistant para este tutorial, ou você pode usar qualquer host do Home Assistant com Supervisor.

:::tip install Home Assistant
Também escrevemos como instalar o Home Assistant para alguns produtos da Seeed Studio, consulte-os.

- **[Primeiros Passos com Home Assistant no ODYSSEY-X86](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-Home-Assistant/)**
- **[Primeiros Passos com Home Assistant no reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal_Home_Assistant/)**
- **[Primeiros Passos com Home Assistant no LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/pt-br/h68k-ha-esphome/)**

Se você não estiver usando um produto Seeed Studio, também pode verificar e aprender como instalar o Home Assistant para outros produtos no site oficial do Home Assistant.

- **[Instalação do Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Preparação Preliminar

Antes de começar este projeto, certifique-se de ter o seguinte:

- Uma instância em execução do Home Assistant (Home Assistant OS, Container ou Core)
- HACS (Home Assistant Community Store) instalado no seu Home Assistant
- Um computador com navegador Google Chrome ou Microsoft Edge (necessário para gravação de firmware baseada na web)
- O nome da sua rede WiFi (SSID) e a senha
- Seu IoT Button V2 e um cabo USB-C para conexão

:::tip
Se você ainda não instalou o HACS, siga o [guia oficial de instalação do HACS](https://hacs.xyz/docs/setup/download/) para configurá-lo primeiro. O HACS é necessário para instalar a integração Seeed HA Discovery.
:::

## Gravar Firmware no IoT Button V2

[Seeed HA Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery) é uma solução completa para conectar facilmente dispositivos ESP32/nRF52840 ao Home Assistant, e o primeiro passo é gravar o firmware apropriado no seu IoT Button V2.

:::caution
O gravador de firmware baseado na web é **compatível apenas com o IoT Button V2**. Atualmente não há suporte para uso com o IoT Button V1.
:::

### Etapa 1. Acessar o Gravador Web

Abra o navegador Google Chrome ou Microsoft Edge e acesse o Seeed HA Discovery Web Flasher:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Gravar Agora 🖱️</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/2.png" style={{width:1000, height:'auto'}}/></div>

:::note
Web Serial está disponível nos [navegadores Google Chrome e Microsoft Edge (mas não no seu dispositivo iOS)](https://esphome.github.io/esp-web-tools/). Certifique-se de usar um navegador compatível em um computador desktop ou laptop.
:::

### Etapa 2. Conectar seu IoT Button V2

:::caution
Se você estiver usando firmware Zigbee/ESPHome, observe se o dispositivo entra automaticamente em modo de suspensão. Se o dispositivo entrar em modo de suspensão, talvez você não consiga localizar sua porta serial. Certifique-se de que o LED azul do dispositivo esteja aceso e que ele permaneça ativo antes de gravar o firmware.
:::

**Etapa 2.1.** Conecte seu IoT Button V2 ao computador usando um cabo USB-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/3.jpg" style={{width:600, height:'auto'}}/></div>

**Etapa 2.2.** Na página do gravador web, localize a opção de firmware **IoT Button V2** e clique no botão **"Connect"**.

**Etapa 2.3.** Uma janela pop-up do navegador aparecerá mostrando as portas seriais disponíveis. Selecione a porta correspondente ao seu IoT Button V2 (geralmente identificada como USB JTAG ou serial) e clique em **"Connect"**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/5.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 3. Gravar o Firmware

**Etapa 3.1.** Depois de conectado, clique no botão **"Install IoT Button V2"** para iniciar o processo de envio do firmware.

**Etapa 3.2.** Em seguida, você precisa escolher se deseja apagar o dispositivo. Se você apenas quiser atualizar o firmware do dispositivo sem perder as credenciais de rede, pode deixar essa opção desmarcada e clicar em Next. Se estiver trocando de outro firmware, recomendo fortemente marcar esse botão durante a sua primeira gravação de firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/7.png" style={{width:600, height:'auto'}}/></div>

O gravador irá apagar o firmware existente e enviar o novo firmware Seeed HA Discovery. Este processo normalmente leva de 1 a 2 minutos. Não desconecte seu dispositivo durante este processo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/8.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 3.3.** Quando você vir a mensagem "Installation complete!", o firmware terá sido gravado com sucesso.

### Entendendo os Recursos do Firmware

O firmware do IoT Button V2 com funcionalidade de deep sleep oferece vários recursos principais:

**Gerenciamento de Energia:**

- O componente deep_sleep pode ser usado para entrar automaticamente em modo de deep sleep no ESP32 após um determinado período de tempo. Isso é especialmente útil para nós que operam com baterias e, portanto, precisam economizar o máximo de energia possível[[1]](https://esphome.io/components/deep_sleep/).
- O botão entra em modo de light sleep após 3 minutos de inatividade para economizar energia da bateria
- O despertar do modo de suspensão é acionado ao pressionar o botão

**Eventos de Botão:**

- **Pressionar uma vez**: Aciona o evento de clique único no Home Assistant
- **Pressionar duas vezes**: Aciona o evento de clique duplo no Home Assistant  
- **Pressão longa**: Aciona o evento de pressão longa (normalmente 1+ segundos)
- **Pressionar três vezes**: Entra no modo de desenvolvedor, em que o dispositivo permanece ativo por 3 minutos, permitindo que você grave firmware sem perder a conexão da porta serial
- **Pressão longa (6+ segundos)**: Após o LED piscar, solte o botão para iniciar o modo de reconfiguração de rede, permitindo que você configure uma nova rede Wi‑Fi

**Feedback por LED:**

- LED RGB fornece feedback visual para pressionamentos de botão e status de conexão
- Cores de LED personalizáveis para diferentes estados

**Monitoramento de Bateria:**

- Leitura de tensão baseada em ADC para estimativa do nível de bateria
- Relato em tempo real do status da bateria para o Home Assistant

<svg
viewBox="0 0 800 450"
width="100%"
height="auto"
style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', display: 'block' }}
>
{/* Background for Dark Mode Support */}
<rect x="0" y="0" width="800" height="450" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

{/* Header */}
<text x="400" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">
    IoT Button V2: Lifecycle & Events
</text>

{/* --- ACTIVE STATE (Top Center) --- */}
<g transform="translate(300, 60)">
    <rect x="0" y="0" width="200" height="90" rx="10" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
    <text x="100" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a8a">ESTADO ATIVO</text>
    <line x1="20" y1="35" x2="180" y2="35" stroke="#93c5fd" strokeWidth="1" />
    <text x="100" y="55" textAnchor="middle" fontSize="11" fill="#1e40af">Avaliar Tipo de Pressionamento</text>
    <text x="100" y="70" textAnchor="middle" fontSize="11" fill="#1e40af">Enviar Evento de API para o HA</text>
</g>

{/* --- DEEP SLEEP STATE (Bottom Center) --- */}
<g transform="translate(300, 320)">
    <rect x="0" y="0" width="200" height="80" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="2" />
    <text x="100" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#ffffff">MODO DE SUSPENSÃO PROFUNDA</text>
    <text x="100" y="50" textAnchor="middle" fontSize="11" fill="#94a3b8">Ultrabaixo Consumo de Energia</text>
    <text x="100" y="65" textAnchor="middle" fontSize="10" fill="#94a3b8">Aguardando o GPIO para Acordar</text>
</g>

{/* --- WIFI CONFIG (Left Side) --- */}
<g transform="translate(50, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6b21a8">CONFIGURAÇÃO DO WIFI</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#d8b4fe" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#7e22ce">Modo AP Ativo</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#7e22ce">Reconfigurar Rede</text>
</g>

{/* --- DEVELOPER MODE (Right Side) --- */}
<g transform="translate(570, 180)">
    <rect x="0" y="0" width="180" height="90" rx="10" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" />
    <text x="90" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9a3412">MODO DESENVOLVEDOR</text>
    <line x1="20" y1="35" x2="160" y2="35" stroke="#fdba74" strokeWidth="1" />
    <text x="90" y="55" textAnchor="middle" fontSize="10" fill="#c2410c">Atualizações OTA Ativadas</text>
    <text x="90" y="70" textAnchor="middle" fontSize="10" fill="#c2410c">Tempo Limite: 3 Minutos</text>
</g>

{/* --- TRANSITIONS --- */}

{/* Active -> Config (Left) */}
<path d="M300 105 L230 105 L230 160 L140 160 L140 180" fill="none" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowPurple)" />
<rect x="160" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#9333ea" strokeWidth="1"/>
<text x="190" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7e22ce">Segurar 6s</text>

{/* Active -> Dev (Right) */}
<path d="M500 105 L570 105 L570 160 L660 160 L660 180" fill="none" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowOrange)" />
<rect x="580" y="130" width="60" height="20" rx="4" fill="#ffffff" stroke="#ea580c" strokeWidth="1"/>
<text x="610" y="144" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c2410c">Clicar 3x</text>

{/* Active -> Sleep (Center Down) */}
<path d="M380 150 L380 310" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="350" y="240" textAnchor="middle" fontSize="10" fill="#64748b">Tarefa Concluída</text>

{/* Sleep -> Active (Wakeup) */}
<path d="M420 320 L420 160" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />
<rect x="380" y="200" width="80" height="20" rx="4" fill="#ecfdf5" stroke="#10b981" />
<text x="420" y="214" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">Despertar</text>

{/* Config -> Sleep */}
<path d="M140 270 L140 360 L290 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="140" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(-90, 130, 320)">Finalizado</text>

{/* Dev -> Sleep */}
<path d="M660 270 L660 360 L510 360" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowGrey)" />
<text x="675" y="320" textAnchor="middle" fontSize="10" fill="#64748b" transform="rotate(90, 675, 320)">Tempo Esgotado</text>

{/* LED Legend */}
<g transform="translate(50, 420)">
    <circle cx="10" cy="5" r="4" fill="#22c55e" />
    <text x="20" y="9" fontSize="10" fill="#475569">Pressionar (Verde)</text>
    <circle cx="100" cy="5" r="4" fill="#f97316" />
    <text x="110" y="9" fontSize="10" fill="#475569">Modo Dev (Laranja)</text>
</g>

<defs>
    <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
    </marker>
    <marker id="arrowGrey" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
    </marker>
    <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#ea580c" />
    </marker>
    <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L0,6 L9,3 z" fill="#9333ea" />
    </marker>
</defs>
</svg>

## Instalar Integração Seeed HA Discovery

Agora que o seu IoT Button V2 está com o firmware apropriado, o próximo passo é instalar a integração Seeed HA Discovery no Home Assistant via HACS.

### Etapa 4. Instalar o HACS (se ainda não estiver instalado)

Se você ainda não instalou o HACS:

**Etapa 4.1.** Instale o Home Assistant Community Store (HACS) para habilitar a instalação dos plugins Seeed HA Discovery dentro do Home Assistant.

**Etapa 4.2.** Siga o guia oficial de instalação do HACS em https://www.hacs.xyz/docs/use/download/download/#to-download-hacs

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/11.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 4.3.** Pode ser necessário reiniciar o Home Assistant para que o HACS seja totalmente integrado ao seu sistema.

### Etapa 5. Adicionar Repositório Seeed HA Discovery

**Etapa 5.1.** Navegue até o repositório GitHub do Seeed HA Discovery:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Ir para o Repositório</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Etapa 5.2.** Na seção README, localize a área ⚡ **One-Click Installation** e clique no botão **OPEN HACS REPOSITORY ON MY HA**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/9.png" style={{width:800, height:'auto'}}/></div>

:::tip
Esse botão irá redirecionar você automaticamente para a sua instância do Home Assistant e abrir a página de adição do repositório no HACS.
:::

**Etapa 5.3.** Uma página de redirecionamento aparecerá mostrando a URL do seu Home Assistant. Verifique se o endereço do Home Assistant detectado está correto (ele deve corresponder ao endereço IP ou nome de domínio do seu Home Assistant).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/10.png" style={{width:600, height:'auto'}}/></div>

- Se o endereço estiver correto, clique em **Open link** para continuar

- Se o endereço estiver incorreto, insira manualmente a URL correta do seu Home Assistant no formato: `http://YOUR_HA_IP:8123` ou `https://YOUR_HA_DOMAIN`

**Etapa 5.4.** O Home Assistant será aberto e exibirá a caixa de diálogo de adição de repositório do HACS com a URL do repositório Seeed HA Discovery já preenchida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/4.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 5.5.** Clique em **Download** no canto inferior direito para adicionar o repositório ao HACS. Certifique-se de que está usando a versão mais recente do plugin. Após o término do script de instalação, você precisa reiniciar o Home Assistant para aplicar as alterações. Você pode reiniciar o Home Assistant pela interface acessando Settings > System > Restart

:::note
Se o botão de instalação com um clique não funcionar, você pode adicionar o repositório manualmente:

1. Abrindo o HACS na barra lateral do seu Home Assistant

2. Clicando no botão de menu (três pontos) no canto inferior direito

3. Selecionando "Custom repositories"

4. Inserindo `https://github.com/limengdu/Seeed-Homeassistant-Discovery` e selecionando a categoria "Integration"
:::

## Configurar WiFi e Descobrir o IoT Button

Com a integração instalada, agora você pode configurar o seu IoT Button V2 para se conectar à sua rede WiFi e descobri-lo no Home Assistant.

### Etapa 6. Configurar o WiFi no IoT Button V2

**Etapa 6.1.** Após gravar o firmware, o seu IoT Button V2 criará um ponto de acesso WiFi (AP) para a configuração inicial. O nome do AP normalmente será `Seeed_IoT_Button_V2_AP`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/12.png" style={{width:400, height:'auto'}}/></div>

**Etapa 6.2.** Usando seu smartphone ou computador, conecte-se a esse ponto de acesso WiFi.

**Etapa 6.3.** Um portal cativo deve abrir automaticamente. Caso isso não aconteça, abra um navegador da web e acesse `http://192.168.4.1`.

**Etapa 6.4.** No portal de configuração, insira as credenciais da sua rede WiFi doméstica:

:::note
Observe que o IoT Button atualmente não oferece suporte a redes que operam em bandas de frequência 5G.
:::

- **SELECTED NETWORK**: Nome da sua rede WiFi
- **PASSWORD**: Sua senha do WiFi

**Step 6.5.** Clique em **"Connect"** para salvar a configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/17.png" style={{width:400, height:'auto'}}/></div>

**Step 6.6.** O IoT Button V2 será reiniciado e se conectará à sua rede WiFi. O LED RGB ficará azul.

### Step 7. Adicionar IoT Button no Home Assistant

**Step 7.1.** Após a reinicialização, clique em Settings na barra lateral para abrir o menu de configurações. Dentro do menu de configurações, navegue até **Devices & Services**.

**Step 7.2.** Se o seu IoT Button V2 estiver conectado com sucesso à sua rede WiFi, o dispositivo será detectado automaticamente pelo Home Assistant após a conexão ao WiFi. Se o dispositivo não for detectado automaticamente, você também pode adicioná-lo manualmente clicando em “Add Integration” no canto inferior direito, pesquisando por “Seeed HA Discovery” e inserindo o endereço IP do dispositivo.

:::tip
O endereço IP do dispositivo pode ser obtido no log da porta serial ou no painel do roteador.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/20.png" style={{width:1000, height:'auto'}}/></div>

**Step 7.3.** Siga as instruções na tela para concluir a configuração da integração. Talvez seja necessário atribuir o botão a uma área da sua casa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/21.png" style={{width:500, height:'auto'}}/></div>

**Step 7.4.** Depois de configurado, seu IoT Button V2 aparecerá no painel do Home Assistant com entidades disponíveis para eventos de botão, status da bateria e controle do LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/1.png" style={{width:1000, height:'auto'}}/></div>

### Step 8. Criar Automações

Agora que o seu IoT Button está conectado, você pode criar automações no Home Assistant:

**Step 8.1.** Navegue até **Settings > Automations & Scenes**.

**Step 8.2.** Clique em **"Create Automation"** e selecione **"Start with an empty automation"**.

**Step 8.3.** Para o **Trigger**, selecione o seu dispositivo IoT Button e escolha o tipo de evento (clique único, clique duplo ou clique longo).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Button_HA_Discovery/22.png" style={{width:1000, height:'auto'}}/></div>

**Step 8.4.** Para a **Action**, escolha o que você quer que aconteça (por exemplo, acender luzes, acionar cenas, enviar notificações).

**Step 8.5.** Salve a sua automação e teste-a pressionando o seu IoT Button!

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



