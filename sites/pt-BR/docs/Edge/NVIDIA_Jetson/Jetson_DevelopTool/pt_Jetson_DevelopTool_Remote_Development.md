---
description: Acesse VS Code Server, Jupyter Lab, área de trabalho remota VNC, terminal SSH e ferramentas de agente de IA no seu dispositivo Jetson — além de Compartilhamento de Rede do PC e Jetson Init na primeira inicialização — usando o Seeed Jetson DevelopTool.
title: Desenvolvimento remoto
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - desenvolvimento remoto
  - VS Code Server
  - Jupyter Lab
  - VNC
  - compartilhamento de rede
  - Jetson Init
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_remote_development
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/jetson_developtool_remote_development/
---

O módulo **Remote Dev** oferece acesso via navegador a um ambiente de desenvolvimento completo em execução diretamente no seu Jetson — sem precisar conectar um monitor ou teclado ao dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-remote-dev.png" style={{width:800, height:'auto'}}/></div>

## Ferramentas disponíveis

| Ferramenta | Método de acesso | Descrição |
|------|--------------|-------------|
| VS Code Server | Navegador | IDE VS Code completo em execução no Jetson, acessado via navegador |
| Jupyter Lab | Navegador | Ambiente interativo de notebooks Python |
| Área de trabalho remota VNC | Navegador (noVNC) ou cliente VNC | Área de trabalho gráfica completa do Jetson |
| Terminal SSH | Terminal embutido | Acesso rápido ao terminal dentro do DevelopTool |
| Instalação de agente de IA | Um clique | Instale Claude Code, Codex ou OpenClaw CLI no Jetson |

## VS Code Server

1. Conecte-se ao seu dispositivo Jetson.
2. Na aba **Remote Dev**, clique em **Launch VS Code Server**.
3. A ferramenta instala o `code-server` no Jetson (apenas na primeira vez) e o inicia.
4. Clique no botão **Open in Browser** — o VS Code será aberto no seu navegador padrão conectado ao Jetson.

Você pode abrir qualquer pasta no sistema de arquivos do Jetson, instalar extensões, executar terminais e depurar código como faria em um VS Code local.

## Jupyter Lab

1. Clique em **Launch Jupyter Lab** na aba Remote Dev.
2. O Jupyter Lab é iniciado no Jetson e a URL de acesso (com token) é exibida.
3. Clique em **Open in Browser** para se conectar.

## Área de trabalho remota VNC

1. Clique em **Launch VNC** na aba Remote Dev.
2. A ferramenta configura um servidor VNC no Jetson (apenas na primeira vez).
3. Acesse por meio do visualizador de navegador integrado **noVNC**, ou conecte-se usando qualquer cliente VNC com o endereço e a porta exibidos.

:::tip
Para o melhor desempenho de VNC em uma rede local, um cliente VNC dedicado (por exemplo, TigerVNC) é mais rápido do que o visualizador noVNC baseado em navegador.
:::

## Instalação de agente de IA

A seção **AI Agent** permite instalar assistentes de codificação com IA diretamente no seu Jetson:

| Agente | Descrição |
|-------|-------------|
| Claude Code | Agente de codificação em CLI da Anthropic |
| OpenClaw | Framework de agente open-source da Seeed |

Clique em **Install** ao lado do agente desejado. A ferramenta cuida de toda a configuração de dependências para o ambiente ARM do Jetson.

---

## Compartilhamento de rede do PC

O módulo **PC Network Sharing** permite compartilhar a conexão de internet do seu PC host com o dispositivo Jetson por meio de um cabo Ethernet direto — útil quando o Jetson não possui placa Wi-Fi instalada ou quando se trabalha em um ambiente de laboratório sem um roteador local.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-network-share.png" style={{width:800, height:'auto'}}/></div>

### Como funciona

O PC atua como um roteador: ele faz a ponte entre sua interface de internet ativa (Wi-Fi ou outra porta Ethernet) e a interface Ethernet conectada ao Jetson. A ferramenta também detecta automaticamente suas configurações de proxy e as encaminha para o Jetson, para que ferramentas como `apt`, `pip` e `docker pull` funcionem de forma transparente.

### Configuração

**O que você precisa:**

- Um cabo Ethernet conectando o PC host e o Jetson
- O PC host deve ter uma conexão de internet ativa (Wi-Fi ou segunda Ethernet)

**Passos:**

1. Conecte o cabo Ethernet entre o PC e o Jetson.
2. Abra a aba **PC Network Sharing** no DevelopTool.
3. Selecione a **interface de saída** (a conexão do PC voltada para a internet, por exemplo, `wlan0` ou `eth0`).
4. Selecione a **interface de entrada** (a porta Ethernet conectada ao Jetson, por exemplo, `eth1`).
5. Clique em **Enable Sharing**.
6. A ferramenta configura o NAT, atribui um IP ao Jetson via DHCP e exibe o endereço IP do Jetson.

Quando estiver ativo, o Jetson terá acesso total à internet por meio do PC.

:::tip
Se você estiver atrás de um proxy corporativo, ative a chave **Auto Proxy Forward**. A ferramenta detectará as configurações de proxy do seu PC e definirá automaticamente as variáveis de ambiente `http_proxy` / `https_proxy` na sessão do Jetson.
:::

### Desativando o compartilhamento de rede

Clique em **Disable Sharing** para interromper a ponte e restaurar a configuração de rede original no PC.

---

## Jetson Init

O módulo **Jetson Init** fornece um assistente guiado em terminal serial que conduz você pela configuração de primeira inicialização da NVIDIA (configuração OEM) sem precisar conectar um monitor ou teclado ao Jetson. Este é o método recomendado para inicializar um dispositivo Jetson recém-gravado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-jetson-init.png" style={{width:800, height:'auto'}}/></div>

### Quando usar o Jetson Init

- Após gravar uma nova imagem JetPack em um dispositivo Jetson
- Quando o Jetson não tem um monitor conectado e você precisa concluir a configuração inicial OOBE (Out-of-Box Experience)
- Para configurar o hostname do sistema, nome de usuário, senha, fuso horário e rede Wi-Fi na primeira inicialização

### Configuração

**O que você precisa:**

- Um cabo USB-para-serial (UART) conectado à porta serial de depuração do Jetson (geralmente um conector de 3 ou 4 pinos na placa carrier)
- O DevelopTool em execução no PC host

**Passos:**

1. Conecte o cabo serial entre o PC host e a porta de depuração UART do Jetson.
2. Ligue o Jetson.
3. Abra a aba **Jetson Init** no DevelopTool.
4. Selecione a **porta serial** correta (por exemplo, `COM3` no Windows, `/dev/ttyUSB0` no Linux) e defina a taxa de transmissão para **115200**.
5. Clique em **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/connect-jetson-init.png" style={{width:800, height:'auto'}}/></div>

6. O assistente detecta o prompt de primeira inicialização e guia você por:
   - Aceitar o contrato de licença da NVIDIA
   - Definir o idioma e a localidade do sistema
   - Criar o nome de usuário e senha padrão
   - Configurar a rede (Ethernet DHCP ou Wi-Fi)
   - Definir o hostname e o fuso horário
7. Quando a configuração estiver concluída, o Jetson será reiniciado e o endereço IP atribuído será exibido.

:::tip
Após a conclusão do Jetson Init, você pode imediatamente alternar para o [Gerenciamento de dispositivo](/pt-br/jetson_developtool_device_management) ou usar as ferramentas **Remote Dev** acima com o endereço IP exibido.
:::

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
