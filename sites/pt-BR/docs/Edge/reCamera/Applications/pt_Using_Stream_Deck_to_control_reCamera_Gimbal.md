---
title: Usando o Stream Deck para controlar o reCamera Gimbal 
description: Este wiki demonstra como controlar o reCamera Gimbal usando um Stream Deck.
keywords:
  - reCamera Gimbal
  - Controle sensorial
slug: /using_stream_deck_to_control_recamera_gimbal
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
  date: 2026-05-22T00:00:00.000Z
  author: Sizhao zhou
createdAt: '2026-05-22'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/using_stream_deck_to_control_recamera_gimbal/
---

## Introdução

Este wiki demonstra como controlar o reCamera Gimbal usando um Stream Deck. Enviando comandos via protocolo HTTP a partir do Stream Deck, você pode controlar o reCamera Gimbal para girar para ângulos específicos, ligar/desligar a luz de preenchimento, reproduzir áudio e executar outras operações.

---

## Demonstração

Gire o dial no Stream Deck para controlar o eixo X do reCamera Gimbal para rotação à esquerda e à direita e pressione o dial para alternar o LED.

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-demo_show.gif" alt="demo" />
</div>

---

## Preparação de hardware

- um reCamera Gimbal
- um Stream Deck

<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <tr>
      <table align="center">
        <tr>
          <th>reCamera Gimbal</th>
        </tr>
        <tr>
          <td>
            <div style={{textAlign:'center'}}>
              <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
              <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
              </a>
            </div>
          </td>
        </tr>
      </table>
    </tr>
  </table>
</div>

## Configuração da reCamera

Digite o endereço IP do reCamera Gimbal no seu navegador para fazer login no Dashboard. Em seguida, configure os nós de comunicação HTTP para receber comandos enviados pelo Stream Deck.

### 1. Tratamento de eventos do dial (Webhook da reCamera)

#### Processamento do eixo de guinada (Process Yaw)

- **Tipo de nó**: `http in` -> `function` -> `set-motor-angle`

- **Resumo da lógica**:
  - O ângulo padrão é definido como `180°`.
  - Incrementa ou decrementa o ângulo em **passos de 10°** ao receber ações no sentido horário (cw) ou anti-horário (ccw).
  - Redefine o ângulo para zero quando um gatilho de reset é recebido.
  - Restringe a faixa de movimento seguro entre **0° ~ 345°**.

#### Processamento do eixo de inclinação (Process Pitch)

- **Tipo de nó**: `http in` -> `function` -> `set-motor-angle`

- **Resumo da lógica**:
  - O ângulo padrão é definido como `90°`.
  - Incrementa ou decrementa o ângulo em **passos de 10°** ao receber ações no sentido horário (cw) ou anti-horário (ccw).
  - Redefine o ângulo para zero quando um gatilho de reset é recebido.
  - Restringe a faixa de movimento seguro entre **0° ~ 180°**.

#### Processamento de zoom digital (Process Zoom)

- **Tipo de nó**: `http in` -> `function` -> `ui-template`

- **Resumo da lógica**:
  - A taxa de zoom padrão é `1.0`.
  - Ajusta o nível de zoom em **passos de 0.1** durante a rotação (incremento para cw / decremento para ccw) e o restaura para `1.0` quando pressionado para resetar.
  - Limita a faixa de zoom entre **0.5x ~ 5.0x**.
  - Passa o coeficiente de zoom final para o template Vue de front-end para dimensionar dinamicamente o canvas SVG no Dashboard via CSS `scale()`.

#### O diagrama final de configuração de nós do Node-RED é mostrado abaixo:

<div style={{textAlign: 'center'}}>
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_stream-deck-node_red-config.png" alt="node-red" />
</div>

### 2. Tratamento básico de eventos de botão

| Função do botão | Link do tipo de nó | Descrição do resumo da lógica |
| :--- | :--- | :--- |
| **Alternar LED** | `http in` -> `function` -> `exec` | Mantém uma variável interna `ledState` para **alternar entre 0 e 1**. Quando o estado é 1, grava em `brightness` via linha de comando do Linux para ligar o LED branco e o desliga quando o estado é 0. |
| **Gravar áudio** | `http in` -> `exec` | Invoca a ferramenta de sistema `arecord` para **gravar 5 segundos de áudio** a uma taxa de amostragem de 16000Hz em formato mono, salvando-o localmente em `/home/recamera/test.wav`. |
| **Reproduzir áudio** | `http in` -> `exec` | Invoca a ferramenta de sistema `aplay` para **reproduzir** diretamente o arquivo de áudio `test.wav` recém-gravado. |

---

## Configuração do Stream Deck

Para garantir operações suaves no Stream Deck sem abrir uma nova janela do navegador sempre que uma ação for acionada, usaremos a ação integrada **"System -> Website"** e habilitaremos a execução silenciosa em segundo plano.

> **⚠️ Pré-requisito**: Certifique-se de que seu computador consiga dar ping com sucesso no endereço IP do dispositivo: `192.168.31.198` (lembre-se de substituir este pelo endereço IP real do seu dispositivo).

### 1. Configuração da área do dial (Stream Deck)

Na seção de dial do software do Stream Deck, arraste **3 ações separadas "System -> Website"** para cada dial e configure-as da seguinte forma:

#### Dial 1: Controlar eixo de guinada (Yaw)

- **Rotação no sentido horário (operação do dial):**
  - **URL:** `http://192.168.31.198:1880/deck/yaw?action=cw`
  - **Configuração:** Marque `GET request in background`

- **Rotação no sentido anti-horário (operação do dial):**
  - **URL:** `http://192.168.31.198:1880/deck/yaw?action=ccw`
  - **Configuração:** Marque `GET request in background`
- **Pressionar (operação de pressionar):**
  - **URL:** `http://192.168.31.198:1880/deck/yaw?action=reset`
  - **Configuração:** Marque `GET request in background`

#### Dial 2: Controlar eixo de inclinação (Pitch)

- **Rotação no sentido horário:**
  - **URL:** `http://192.168.31.198:1880/deck/pitch?action=cw`
  - **Configuração:** Marque `GET request in background`

- **Rotação no sentido anti-horário:**
  - **URL:** `http://192.168.31.198:1880/deck/pitch?action=ccw`
  - **Configuração:** Marque `GET request in background`
- **Pressionar:**
  - **URL:** `http://192.168.31.198:1880/deck/pitch?action=reset`
  - **Configuração:** Marque `GET request in background`

#### Dial 3: Zoom digital (Zoom)
>
> **Observação**: O mecanismo de zoom controla a proporção da caixa de exibição SVG no Dashboard usando CSS.

- **Rotação no sentido horário:**
  - **URL:** `http://192.168.31.198:1880/deck/zoom?action=cw`
  - **Configuração:** Marque `GET request in background`
- **Rotação no sentido anti-horário:**
  - **URL:** `http://192.168.31.198:1880/deck/zoom?action=ccw`
  - **Configuração:** Marque `GET request in background`
- **Pressionar (restaurar para o padrão):**
  - **URL:** `http://192.168.31.198:1880/deck/zoom?action=reset`
  - **Configuração:** Marque `GET request in background`

### 2. Configuração da área de botões (LED, Gravar, Reproduzir)

Na seção básica de botões do Stream Deck, arraste **3 ações "System -> Website"** e configure-as da seguinte forma:

| Função do botão | URL da requisição | Configurações necessárias |
| :--- | :--- | :--- |
| **Alternar LED** | `http://192.168.31.198:1880/deck/led` | Marque `GET request in background` |
| **Gravar áudio** *(pressione para gravar por 5s)* | `http://192.168.31.198:1880/deck/record` | Marque `GET request in background` |
| **Reproduzir áudio** | `http://192.168.31.198:1880/deck/play` | Marque `GET request in background` |

---

## Implantando o fluxo Node-RED na reCamera

Primeiro, siga este guia para atualizar sua reCamera para a versão mais recente 0.2.4: [Tutorial de atualização do reCamera OS](https://wiki.seeedstudio.com/cn/recamera_os_version_control/). Se o seu dispositivo já estiver executando a versão 0.2.4, você pode pular esta etapa. Em seguida, clique no botão **"Deploy"** no canto superior direito para implantar nossos nós recém-criados na placa.

---

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Se você precisar de orientação sobre metas específicas de personalização ou desejar estender ainda mais seu fluxo de trabalho, sinta-se à vontade para entrar em contato conosco. Oferecemos múltiplas opções de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Fornecemos uma variedade de canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
