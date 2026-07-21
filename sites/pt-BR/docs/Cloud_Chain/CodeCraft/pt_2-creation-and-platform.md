---
description: Crie projetos de hardware sem código com o CodeCraft, selecione o hardware, descreva os requisitos e faça gravação e depuração com exemplos de projetos.
title: Criação e Plataforma CodeCraft
keywords:
  - CodeCraft
  - Criação
sidebar_label: 2. Criação e Plataforma
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/creation-and-platform
sidebar_position: 3
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/pt-br/codecraft/creation-and-platform/
createdAt: '2026-06-30'
updatedAt: '2026-06-30'
---

# Criação e Plataforma CodeCraft

## 2.1 Desenvolvimento prático: prática sem código

### 2.1.1 Entendendo o espaço de trabalho conversacional

CodeCraft é uma plataforma de programação conversacional baseada na web. Você não precisa baixar software nem instalar drivers complexos. Basta selecionar seu hardware na página e descrever seus requisitos em linguagem natural para criar rapidamente projetos de hardware.

![Ilustração de conexão e gravação](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Connect-and-Burn-EN.png)

O fluxo de trabalho básico é o seguinte:

1. Acesse https://codecraft.seeed.cc
2. Faça login na sua conta
3. Selecione sua placa de desenvolvimento
4. Descreva a funcionalidade que você deseja implementar
5. Aguarde o CodeCraft gerar o programa
6. Revise o código, grave-o no hardware e faça a depuração

![Ilustração de gravação e depuração](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Flashing-and-Debugging-EN.png)

---

### 2.1.2 Selecionando o hardware

No espaço de trabalho, selecione seu dispositivo. O hardware de entrada recomendado inclui:

- Wio Terminal  
- XIAO ESP32S3 Sense  
- Grove Beginner Kit  

Além dos itens acima, o CodeCraft também oferece suporte a uma gama mais ampla de dispositivos no ecossistema de hardware da Seeed Studio. Você pode escolher placas de desenvolvimento, sensores ou módulos de expansão com base nas necessidades do seu projeto. Após selecionar o hardware, o CodeCraft gera código otimizado e documentação adaptados aos recursos do dispositivo.

![Ilustração da página de seleção de hardware](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/HardwareEco-EN.png)

---

## 2.2 Exemplos de projetos

Esta seção fornece três exemplos de projetos para ajudar você a entender como criar programas para diferentes plataformas de hardware usando o CodeCraft. Cada exemplo inclui objetivos do projeto, prompts de exemplo, instruções de gravação e orientações para iteração.

---

### 2.2.1 Timer Pomodoro

#### 2.2.1.1 Objetivo do projeto

Este exemplo orienta você a criar um timer Pomodoro baseado no Wio Terminal. O projeto exibe uma contagem regressiva em tempo real na tela e usa botões para controlar início, pausa, reinício e troca de modo.

![Ilustração do Timer Pomodoro no Wio Terminal](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Display-EN.png)

---

#### 2.2.1.2 Prompt de exemplo

Você pode inserir:

> Crie um programa de timer Pomodoro para o Wio Terminal. Requisitos:
> 1. Exibir uma contagem regressiva em tempo real no formato mm:ss.
> 2. Definir o tempo de foco para 25 minutos e o tempo de pausa para 5 minutos.
> 3. O botão A inicia ou pausa o timer.
> 4. O botão B reinicia o timer.
> 5. O botão C alterna entre os modos de foco e pausa.
> 6. Mostrar uma mensagem de lembrete quando o timer terminar.

<!--![Pomodoro Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/POMODORO-TIMER-PROMPT-EN.png)-->

---

#### 2.2.1.3 Gravação no hardware

1. Conecte o Wio Terminal ao computador usando um cabo USB.  
2. Siga as instruções na tela para entrar no modo de gravação.  
3. Clique no botão “Connect and Flash” no CodeCraft.  
4. Aguarde a conclusão do upload.

![Ilustração da página de gravação do Wio Terminal](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Pomodoro-Timer-Burning-EN.png)

---

#### 2.2.1.4 Iteração

Se você quiser modificar o projeto, pode continuar dizendo ao CodeCraft:

> Altere o tempo de foco para 45 minutos e o tempo de pausa para 10 minutos.

O CodeCraft atualizará o código e gerará uma nova versão com base no seu pedido.

---

### 2.2.2 Piscar de LED com ESP32

#### 2.2.2.1 Objetivo do projeto

Este exemplo orienta você a criar um projeto de piscar LED baseado em ESP32. O LED onboard alterna a cada 0,2 segundos para obter um piscar rápido. Ao mesmo tempo, o programa envia mensagens de status do LED via saída serial: quando o LED está ON, envia “LED ON”; quando está OFF, envia “LED OFF”.

<!--![ESP32 LED Blinking Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.2.2 Prompt de exemplo

Você pode inserir:

> Crie um programa de piscar LED para ESP32. Requisitos:
> 1. Usar o LED onboard.
> 2. Alternar o LED a cada 0,2 segundos.
> 3. Quando o LED estiver ON, enviar “LED ON” via serial.
> 4. Quando o LED estiver OFF, enviar “LED OFF” via serial.
> 5. Definir a taxa de baud serial para 115200.
> 6. Executar continuamente.

<!--![ESP32 Prompt Input Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Prompt-EN.png)-->

---

#### 2.2.2.3 Gravação no hardware

1. Conecte a placa de desenvolvimento ESP32 ao computador via USB.  
2. Selecione a porta serial ESP32 correta no CodeCraft.  
3. Clique no botão “Connect and Flash”.  
4. Aguarde a conclusão do upload.  
5. Abra o monitor serial e verifique se “LED ON” e “LED OFF” aparecem alternadamente.

![Ilustração da página de gravação do ESP32](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Burning-EN.png)

<!--![ESP32 Serial Monitor Output](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/ESP32-Light-Debugging-EN.png)-->

---

#### 2.2.2.4 Iteração

Se você quiser modificar o projeto, pode continuar dizendo ao CodeCraft:

> Altere o intervalo de piscar do LED para 1 segundo e exiba a contagem de piscadas na saída serial.

O CodeCraft atualizará o código e gerará uma nova versão.

---

### 2.2.3 LED controlado por botão com Grove Beginner Kit

#### 2.2.3.1 Objetivo do projeto

Este exemplo orienta você a criar um projeto de LED controlado por botão usando o Grove Beginner Kit. O botão onboard controla o LED: quando pressionado, o LED acende; quando solto, ele apaga. O programa também imprime o status do botão em tempo real via saída serial: “Pressed” quando pressionado e “Released” quando solto.

<!--![Grove Beginner Kit Button Control Illustration](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/图片路径待替换.png)-->

---

#### 2.2.3.2 Prompt de exemplo

Você pode inserir:

> Crie uma “chave de LED controlada por botão” usando o Grove Beginner Kit. Requisitos:
> 1. Usar o botão onboard para controlar o LED onboard.
> 2. Acender o LED quando o botão for pressionado.
> 3. Apagar o LED quando o botão for solto.
> 4. Imprimir o status do botão via serial em tempo real.
> 5. Enviar “Pressed” quando o botão for pressionado.
> 6. Enviar “Released” quando o botão for solto.

<!--![Grove Beginner Kit Prompt Interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Grove-Beginner-Kit-Prompt-EN.png)-->

---

#### 2.2.3.3 Gravação no hardware

Antes da gravação, verifique se são necessários drivers:

- No Windows, você precisa instalar primeiro o driver do Grove Beginner Kit, caso contrário o dispositivo ou a porta serial podem não ser reconhecidos.  
- No macOS, geralmente não são necessários drivers adicionais.

![Dica 1 de driver do Grove Beginner Kit para Windows](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-driver-download-tips-EN.png)

![Dica 2 de driver do Grove Beginner Kit para Windows](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/beginner-kit-driver-EN.png)

1. Conecte o Grove Beginner Kit ao computador via USB.  
2. Selecione o dispositivo e a porta serial corretos no CodeCraft.  
3. Clique no botão “Connect and Flash”.  
4. Aguarde a conclusão do upload.  
5. Pressione e solte o botão onboard e observe o comportamento do LED.  
6. Abra o monitor serial e confirme se “Pressed” e “Released” aparecem.  
   (Observação: certifique-se de que a taxa de baud no código corresponda à da ferramenta de depuração.)

![Saída do monitor serial do Grove Beginner Kit](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/2-creation-and-platform/Beginner-Kit-Serial-Debugger-EN.png)

---

#### 2.2.3.4 Iteração

Se você quiser modificar o projeto, pode continuar dizendo ao CodeCraft:

> Faça o buzzer tocar uma vez quando o botão for pressionado e exiba o número de pressões do botão na saída serial.

O CodeCraft atualizará o código e gerará uma nova versão.

---

## 2.3 FAQ

**P: Por que a gravação falha?**  
R: Verifique se o cabo USB oferece suporte à transmissão de dados e certifique-se de que a placa de desenvolvimento esteja no modo de gravação correto.

**P: O que devo fazer se ocorrerem erros de compilação?**  
R: Verifique as informações de depuração do espaço de trabalho e certifique-se de que a taxa de baud, o modelo de hardware e a configuração dos sensores estejam corretos.

**P: Onde posso encontrar mais exemplos de projetos?**  
R: Visite a SenseCraft AI Application Gallery: https://sensecraft.seeed.cc/ai/application
