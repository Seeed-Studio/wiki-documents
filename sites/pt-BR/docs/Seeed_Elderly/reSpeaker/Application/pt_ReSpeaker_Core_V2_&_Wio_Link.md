---
description: ReSpeaker Core V2 & Wio Link
title: ReSpeaker Core V2 & Wio Link
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Core_V2_&_Wio_Link
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core_V2_&_Wio_Link/
---

Aqui está o tutorial sobre como usar o ReSpeaker Core V2 para controlar o [Wio Link](https://wiki.seeedstudio.com/pt-br/Wio_Link/) por meio do [IFTTT](https://ifttt.com/).

## 1. Configurar o ReSpeaker Core v2.0

Siga o [Out of Box Demo](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core_v2.0/#out-of-box-demo) do ReSpeaker Core v2.0 para configurar o ReSpeaker Core e fazer login na Alexa com nome de usuário e senha. 

## 2. Configurar o Wio Link pelo Wio APP

Siga o [Wio Link Get Starting](https://wiki.seeedstudio.com/pt-br/Wio_Link/#get-started) para conectar um LED na porta D0 e configurar o Wio APP.

## 3. Configurar o IFTTT

- Passo 1. Crie uma conta [IFTTT](https://ifttt.com/join).
- Passo 2. Selecione **My Applets**
- Passo 3. Selecione **New Applet**
- Passo 4. Clique em **+this**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/this.png)

- Passo 5. Selecione **amazon alexa** e faça login na mesma conta amazon usada no ReSpeaker Core v2.0. 

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/alexa.png)

- Passo 6. Selecione **Say a specific phrase**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/say_a_specific_phase.png)

- Passo 7. Digite o caractere em minúsculo **on** e clique em **Create Trigger**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/key_word.png)

- Passo 8. Clique em **+that**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/that.png)

- Passo 9. Escolha **Seeed Wio** como serviço de ação.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/wio.png)

- Passo 10. Selecione **on, off or trigger Grove**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/choose_action.png)

- Passo 11. Selecione o módulo Grove online correto e **on** como **do**.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/on.png)

- Passo 12. Siga o Passo 3 ~ Passo 11 para adicionar a função **off**. 

## 4. Divirta-se com a Alexa

Diga "Alexa trigger on" e podemos ver que o Grove-LED acende, e o LED apaga quando dizemos "Alexa trigger off". Também podemos usar outras funções no Wio Link, como string de LED e assim por diante. 

:::note
    Também podemos usar o Google Assistant para funcionar com o Wio Link.
:::

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
