---
description: Primeiros passos com o Seeeduino
title: Primeiros passos com o Seeeduino
keywords:
  - Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_Started_with_Seeeduino
last_update:
  date: 1/12/2022
  author: hushuxu
createdAt: '2023-01-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Seeeduino/
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Hello_world.jpg" alt="pir" width={600} height="auto" /></p>

### **0. Hello world**

Geralmente, o professor nos ensina a escrever um simples exemplo de Hello World quando começamos a aprender uma linguagem de programação. Este é apenas um introdutório básico, mas é um processo muito importante. Embora você não esteja familiarizado com Arduino, não se preocupe. Você pode aprender o hello world do Arduino: acender um LED.
Agora vamos tomar o Seeeduino como exemplo para aprender como acender um LED que é controlado pelo pino Digital 13. Antes de fazer isso, certifique-se de que você baixou o Ambiente Arduino e instalou o Driver do Seeeduino com sucesso. Caso contrário, clique aqui para aprender as etapas específicas.

### 1. Conecte o Seeeduino ao PC

Conecte a placa Seeeduino ao seu computador usando o cabo USB. O LED verde de alimentação (rotulado PWR) deve acender.
(Quando o Seeeduino funciona de forma independente, você pode selecionar USB ou adaptador de energia para alimentar o Seeeduino.)

### 2. Abra o exemplo Blink

Abra o sketch de exemplo de piscar o LED: **File&gt;Examples&gt;01.Basics&gt;Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started1.png" alt="pir" width={600} height="auto" /></p>

### 3. Selecione sua placa

Você precisará selecionar a entrada no menu Tools &gt; Board que corresponda ao seu Arduino. 在Here precisamos selecionar ATmega328.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started2.png" alt="pir" width={600} height="auto" /></p>

### 4. Selecione sua Porta Serial

Selecione o dispositivo serial da placa Arduino no menu Tools | Serial Port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started3.png" alt="pir" width={600} height="auto" /></p>

### 5. Envie o programa

Agora, simplesmente clique no botão "Upload" no ambiente. Espere alguns segundos - você deverá ver os LEDs RX e TX na placa piscando. Se o envio for bem-sucedido, a mensagem "Done uploading." aparecerá na barra de status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started4.png" alt="pir" width={600} height="auto" /></p>

### 6. Resultado

Alguns segundos após o término do envio, você deverá ver o LED do pino 13 (L) na placa começar a piscar (em laranja). Se isso acontecer, parabéns! Você colocou o Arduino em funcionamento.

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
