---
description: Set_AI_With_A1102
title: Configurando Modelos de IA no SenseCAP A1102 Usando o SenseCraft APP
keywords:
  - Sensor Vision_AI_V2
  - SenseCAP A1102
  - SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /setting_ai_with_a1102
sidebar_position: 2
last_update:
  date: 12/31/2025
  author: Twelve
createdAt: '2025-01-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/setting_ai_with_a1102/
---

# Configurando Modelos de IA no SenseCAP A1102 Usando o SenseCraft APP

O SenseCAP A1102 é um poderoso dispositivo sensor que combina recursos avançados de IA com facilidade de implantação. Este guia irá orientá-lo na implantação de modelos de IA no A1102 usando o aplicativo **SenseCraft**, oferecendo instruções passo a passo para pareamento, configuração e testes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" style={{width:800, height:'auto'}}/></div>

## **Primeiros Passos com o SenseCAP A1102**

### **O que é o SenseCAP A1102?**

O SenseCAP A1102 é um sensor de câmera inteligente projetado para aplicações de IA na borda. Equipado com 8GB de memória, ele pode:

- Implantar modelos de IA personalizados.
- Salvar automaticamente imagens reconhecidas.
- Permitir reconhecimento em tempo real com alta precisão.

### **Requisitos**

Antes de começar, certifique-se de ter:

- O dispositivo SenseCAP A1102.
- O aplicativo **SenseCraft AI** instalado no seu smartphone.
- Qualquer modelo de IA pré-treinado para implantação.

## **Configurando o SenseCAP A1102**

### Ligar a câmera Vision AI

:::tip
Se você precisar modificar as configurações da câmera de IA, deverá seguir as etapas abaixo para ligar a câmera de IA.

Se você só precisa modificar configurações relacionadas à transmissão LoRaWAN, pode pular esta seção.
:::

Conecte a porta Type-C do A1102 ao seu computador de acordo com as instruções a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:700, height:'auto'}}/></div>

Se estiver conectado corretamente, você verá dois indicadores acesos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" style={{width:400, height:'auto'}}/></div>

### **Acessar Configurações Avançadas**

Selecione “User” na barra de navegação inferior e clique em “Device Bluetooth Configuration”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" style={{width:400, height:'auto'}}/></div>

Deslize até o final e selecione “SenseCAP A1102”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" style={{width:400, height:'auto'}}/></div>

Pressione e segure o botão liga/desliga no SenseCAP A1102 por **três segundos** para ativar o modo de pareamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" style={{width:400, height:'auto'}}/></div>

Após o pareamento, clique em **Advanced Settings** no aplicativo SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" style={{width:400, height:'auto'}}/></div>

Navegue para opções de configuração adicionais clicando em **Advanced Settings** novamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" style={{width:400, height:'auto'}}/></div>

Selecione as opções do A1102 clicando em **AI Camera** novamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/picture10.png" style={{width:400, height:'auto'}}/></div>

## **Implantando um Modelo de IA**

### **Selecionando um Modelo de IA**

No menu de configurações, selecione o modelo de IA desejado para implantação. Escolha entre modelos pré-carregados ou envie um modelo personalizado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" style={{width:400, height:'auto'}}/></div>

### **Configurando os Parâmetros do Modelo**

:::warning note
Se você precisar modificar as configurações da câmera de IA, deverá seguir as etapas para ligar a câmera de IA.  
Por favor, consulte [Ligar a câmera Vision AI](#ligar-a-câmera-vision-ai).
:::

Defina parâmetros como:

- **Nível de Confiança**: Ajuste o limite para reconhecimento de objetos (por exemplo, 80% de confiança).
- **Salvar Imagens Reconhecidas**: Ative ou desative o salvamento de imagens reconhecidas no cartão de memória.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" style={{width:400, height:'auto'}}/></div>

## **Testando e Executando o Modelo**

### **Visualizar Captura da Câmera**

Após implantar o modelo, visualize as imagens capturadas pela câmera diretamente no aplicativo para garantir que o modelo esteja funcionando conforme o esperado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" style={{width:400, height:'auto'}}/></div>

### **Ver Informações do Dispositivo**

Escaneie o código QR no Sensor LoRaWAN S2100 para vincular o dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture1.png" style={{width:400, height:'auto'}}/></div>

Retorne à página inicial do aplicativo para verificar as informações do dispositivo A1102, como status do modelo e conectividade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" style={{width:400, height:'auto'}}/></div>

### **Revisar Resultados de Reconhecimento**

Visualize os dados e registros de reconhecimento. Por exemplo, defina um intervalo de relatório (por exemplo, a cada 5 minutos) para rastrear os objetos reconhecidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" style={{width:400, height:'auto'}}/></div>

### **Acessando o Cartão SD**

Localize a abertura na unidade A1102 e insira cuidadosamente uma chave de fenda. Aplique uma leve força para fazer alavanca e abrir.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" style={{width:400, height:'auto'}}/></div>

Localize os quatro orifícios dos parafusos e gire os botões para abri-los. Certifique-se de aplicar pressão constante enquanto gira para garantir que eles se soltem.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" style={{width:400, height:'auto'}}/></div>

Depois que os parafusos estiverem soltos, remova a tampa para acessar o slot do cartão SD. Você pode então retirar o cartão SD para ler as informações armazenadas nele.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" style={{width:400, height:'auto'}}/></div>

### **Salvamento Automático de Imagens**

Com 8GB de memória interna, o A1102 pode salvar automaticamente imagens reconhecidas em um cartão de memória. Acesse e recupere essas imagens posteriormente para análise ou geração de relatórios.

:::tip
Equipado com 8GB de memória, o A1102 é capaz de salvar automaticamente imagens no cartão de memória quando um alvo é reconhecido. Quando precisarmos acessar essas informações de imagem, podemos extrair e acessar diretamente os dados de imagem necessários a partir do cartão de memória.
:::

## **Solução de Problemas**

### Problemas Comuns

1. **Dois métodos para configurar modelos de IA**
  - Usando o SenseCraft APP para configurar os modelos integrados da câmera de IA
    - Conecte à porta inferior ESP32, que é usada para fornecer energia ao dispositivo.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:400, height:'auto'}}/></div>
  - [Using the SenseCraft AI website](https://sensecraft.seeed.cc/ai) para configurar modelos de IA que não vêm pré-carregados de fábrica
    - Conecte à porta superior Himax, que é usada para gravar o modelo no chip Himax.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:300, height:'auto'}}/></div>

2. **A câmera de IA está conectada, mas o aplicativo mostra que não está**
  - verifique o status do datalogger e certifique-se de configurá-lo primeiro em Settings antes de retornar a Information.
  - explicação: Para economizar energia, o datalogger só fornece energia para a câmera de IA ao entrar na página Settings.

3. **Luz respirante vs. luz piscando**
  - Um efeito de luz respirante indica que o dispositivo está **procurando uma rede**.
  - Uma luz piscando indica que o dispositivo entrou no **modo de configuração Bluetooth**.
  - Se o dispositivo estiver no modo de luz respirante, pressione o botão uma vez para alternar para a luz vermelha, depois pressione e segure o botão para entrar no **modo de configuração Bluetooth** (luz piscando).

4. **A câmera de IA liga com sucesso, mas não pode ser encontrada pela configuração Bluetooth do APP**
  - Quando a câmera de IA está ligada, mas:
    - O SenseCraft APP não consegue encontrar o dispositivo.
    - Tente procurar por **Vision AI V2**, e ainda assim não detecta o dispositivo. 
  - Isso indica que o **firmware do ESP32 pode não estar funcionando corretamente** (o ESP32 é responsável pela transmissão via Bluetooth).
  - **Solução:**  
    - Conecte o cabo à **porta ESP32** e abra um monitor serial para verificar se o ESP32 está em execução normalmente.  
    - Se aparecerem logs anormais ou erros de inicialização, entre em contato com o suporte técnico para obter instruções sobre **regravar o firmware do ESP32**.

## **Suporte Técnico & Discussão sobre o Produto**

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
