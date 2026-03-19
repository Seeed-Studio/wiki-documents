---
description: Conectar o Seeed Studio IoT Button ao ESPHome
title: Conectar o Seeed Studio IoT Button ao ESPHome
keywords:
  - ESPHOME
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /iot_button_for_esphome
last_update:
  date: 03/14/2025
  author: qiuyu wei, Citric
createdAt: '2024-11-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/iot_button_for_esphome/
---

# Conectar o Seeed Studio IoT Button ao ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>

Neste tutorial, mostraremos como conectar o Seeed Studio IoT Button ao Home Assistant usando o ESPHome. Você aprenderá como configurar o botão para detectar diferentes padrões de pressão (clique simples, clique duplo e pressão longa) e acionar diferentes ações na sua casa inteligente.

:::note
Se você seguir este Wiki para conectar o IoT Button ao ESPHome, esteja ciente da limitação potencial:

**Acordar manualmente e atraso de reconexão:** Sempre que quiser usar o botão, você precisa despertá-lo manualmente pressionando-o. Após acordar, o dispositivo precisará se reconectar à rede, o que pode levar um curto período antes que o botão possa ser usado novamente.

Se você escolher o IoT Button V2, haverá um recurso adicional de detecção de energia no ESPHome em relação à geração anterior.
:::

## Materiais Necessários

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

O Seeed Studio IoT Button é um botão inteligente versátil com chip ESP32-C6 integrado. É um dispositivo completo e independente que pode ser integrado ao Home Assistant para controlar vários dispositivos e acionar automações. Com seu chip ESP32-C6, oferece baixo consumo de energia e conectividade confiável sem exigir placas de desenvolvimento adicionais.

## Instalar o ESPHome no Home Assistant

 **Etapa 1**. Clique em **Settings** --> **Add-on** --> **ADD-ON STORE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 2**. Pesquise por **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 3**. Clique em **INSTALL** e depois clique em **START**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 4**. Instalação bem-sucedida

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png" style={{width:1000, height:'auto'}}/></div>

## Adicionando o IoT Button ao ESPHome

**Etapa 5**. Clique em **+NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 6**. Clique em **NEXT** e dê ao seu dispositivo um nome de sua escolha. Recomendamos usar "seeedstudio-iot-button" ou algo semelhante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:600, height:'auto'}}/></div>

**Etapa 7**. Selecione o tipo do seu dispositivo

Para o IoT Button com seu ESP32-C6 integrado, selecione "ESP32" como o tipo de dispositivo. Iremos modificar a configuração depois para especificar a variante correta do ESP32.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**Etapa 8**. Dispositivo adicionado com sucesso, por fim clique em **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:600, height:'auto'}}/></div>

## Configurando o IoT Button

### Usando o Web Flasher (Método Recomendado)

A maneira mais fácil de começar com o IoT Button é usar a ferramenta Web Flasher para instalar o firmware ESPHome pré-compilado diretamente do seu navegador.

**Etapa 1**: Visite o site [Seeed Studio IoT Button Firmware Flasher](https://gadgets.seeed.cc/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/3.png" style={{width:800, height:'auto'}}/></div>

**Etapa 2**: Conecte o seu IoT Button ao computador usando um cabo USB.

**Etapa 3**: Clique no botão "Install" na página do Web Flasher.

**Etapa 4**: Selecione a porta USB correta na janela pop-up.

**Etapa 5**: O navegador fará automaticamente o download e gravará o firmware no seu dispositivo.

**Etapa 6**: Após a conclusão da gravação, o IoT Button criará sua própria rede WiFi. Conecte-se à rede WiFi chamada "seeedstudio-iot-button" a partir do seu computador ou smartphone.

**Etapa 7**: Uma vez conectado, seu dispositivo deve abrir automaticamente uma página de configuração. Se não abrir, abra um navegador e acesse `http://192.168.4.1`.

**Etapa 8**: Na página de configuração:

- Insira o nome (SSID) e a senha da sua rede WiFi doméstica
- Certifique-se de que esta é a mesma rede à qual o seu Home Assistant está conectado
- Clique em "Save" para aplicar as configurações

**Etapa 9**: O IoT Button será reiniciado e se conectará à sua rede WiFi doméstica.

**Etapa 10**: No Home Assistant, vá para Settings > Devices & Services. Você deverá ver uma notificação de que um novo dispositivo ESPHome foi detectado. Clique em "Configure" para adicionar o dispositivo ao Home Assistant.

**Etapa 11**: Siga as instruções para concluir a configuração. O IoT Button agora aparecerá no painel do Home Assistant com três interruptores virtuais correspondentes às diferentes ações do botão.

### Método Alternativo: Usando o painel do ESPHome

Se você preferir usar o painel do ESPHome para ter mais controle sobre a configuração, siga as etapas abaixo.

### Adicionando a configuração do ESPHome

**Etapa 1**. O card correspondente ao dispositivo aparecerá na página do ESPHome, então clique em **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 2**. Substitua toda a configuração pelo seguinte código:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png" style={{width:1000, height:'auto'}}/></div>

Devido às frequentes atualizações de código, clique no botão abaixo para acessar o programa Yaml.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/seeedstudio-iot-button.yaml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>IoT Button V1 Yaml 🖱️</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/blob/main/projects/seeedstudio-iot-button/seeedstudio-iot-button-v2.yaml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>IoT Button V2 Yaml 🖱️</font></span></strong>
    </a>
</div>

:::note
Certifique-se de substituir "Your_WiFi_SSID" e "Your_WiFi_Password" pelas credenciais reais da sua rede WiFi. A configuração de WiFi deve corresponder à rede onde o seu servidor Home Assistant está em execução para garantir a conectividade adequada.
:::

### Entendendo a Configuração

Vamos analisar as partes principais desta configuração:

1. **Configuração do ESP32**:
   - Especifica a variante ESP32-C6 e o tipo de placa para o chip integrado do IoT Button
   - Define o tamanho da flash em 4MB
   - Usa o framework ESP-IDF, que é necessário para o ESP32-C6

2. **Configuração do Botão**:
   - Conecta ao GPIO9, onde o botão físico está ligado internamente
   - Inverted: True significa que o pino é mantido em nível alto quando não pressionado e vai para nível baixo quando pressionado
   - Configura três padrões de pressão diferentes:
     - Clique curto simples (pressionar e soltar rapidamente)
     - Clique duplo (duas pressões rápidas)
     - Pressão longa (manter pressionado por 1–2,5 segundos)

3. **Interruptores Virtuais**:
   - Cria três interruptores template que aparecerão no Home Assistant
   - Cada interruptor corresponde a um padrão de pressão diferente do botão
   - Esses interruptores podem ser usados em automações para controlar outros dispositivos

**Etapa 3**. Após concluir a configuração, clique em **INSTALL** no canto superior direito e selecione **Plug into this computer**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 4**. Aguarde a conclusão do processo de compilação. Depois clique em **Download project**, selecione **Factory format** para baixar o arquivo do projeto e então clique em **Open ESPHome Web**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 5**. Conecte o IoT Button ao computador via USB. Clique em **CONNECT** e selecione a porta serial correta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**Etapa 6**. Clique em **INSTALL** para gravar o firmware no seu IoT Button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**Passo 7**. Se tudo correr bem, você verá uma mensagem de instalação bem-sucedida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

## Adicionando o IoT Button ao Home Assistant

**Passo 16**. Volte para o Home Assistant. Clique em **Settings** e depois selecione **Devices & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**Passo 17**. Você deverá ver uma notificação sobre um novo dispositivo descoberto. Clique em **CONFIGURE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**Passo 18**. Siga as instruções para adicionar o IoT Button ao Home Assistant. Você pode selecionar a qual área o dispositivo pertence e clicar em **FINISH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

**Passo 19**. O IoT Button e seus três interruptores virtuais agora aparecerão no painel do seu Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## Criando Automações com o IoT Button

Agora que seu IoT Button está configurado, você pode criar automações para controlar dispositivos na sua casa inteligente. Vamos criar uma automação simples que liga uma luz quando você pressiona o botão.

**Passo 20**. No Home Assistant, vá em **Settings** > **Automations & scenes**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**Passo 21**. Clique em **CREATE AUTOMATION**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**Passo 22**. Configure sua automação:

1. **Name**: Dê à sua automação um nome descritivo, como "IoT Button Single Press - Turn On Light"
2. **Trigger**: Selecione "State" como o tipo de gatilho
   - Entity: Selecione "Switch 1" (para clique simples)
   - From: "off"
   - To: "on"
3. **Action**: Escolha o dispositivo que você quer controlar
   - Por exemplo, selecione uma luz e configure para ligar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

**Passo 23**. Clique em **SAVE** para criar a automação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

## Uso Avançado: Controlando Diferentes Dispositivos com Diferentes Padrões de Pressão

Um dos recursos poderosos da configuração do IoT Button é a capacidade de detectar diferentes padrões de pressão. Aqui estão algumas ideias para usar cada padrão:

1. **Pressão Única (Switch 1)**:
   - Ligar/desligar as luzes no cômodo atual
   - Alternar um dispositivo usado com frequência

2. **Duplo Clique (Switch 2)**:
   - Ativar uma cena (por exemplo, "Noite de Filme" que diminui as luzes e liga a TV)
   - Controlar um grupo de dispositivos simultaneamente

3. **Pressão Longa (Switch 3)**:
   - Ativar recursos de segurança (acionar/desativar alarme)
   - Disparar rotinas de emergência
   - Desligar vários dispositivos de uma só vez

Para configurar essas automações avançadas, crie automações adicionais seguindo os passos acima, mas selecione o switch apropriado (Switch 1, 2 ou 3) como gatilho e configure as ações desejadas.

## Solução de Problemas

Se você encontrar problemas com o seu IoT Button, aqui estão algumas etapas comuns de solução de problemas:

1. **O botão não está conectando ao WiFi**:
   - Verifique suas credenciais de WiFi na configuração do ESPHome
   - Certifique-se de que sua rede WiFi é 2,4GHz (o ESP32-C6 suporta 2,4GHz e 5GHz, mas 2,4GHz normalmente tem melhor alcance)

2. **O botão não aparece no Home Assistant**:
   - Verifique se o botão e o Home Assistant estão na mesma rede
   - Reinicie o add-on ESPHome e o Home Assistant

3. **Os cliques do botão não são detectados**:
   - Verifique a configuração do pino GPIO (GPIO9 para o IoT Button padrão)
   - Verifique os logs no ESPHome para ver se os cliques do botão estão sendo detectados

4. **As automações não estão disparando**:
   - Verifique se a automação está habilitada
   - Verifique se as condições de gatilho correspondem exatamente (mudanças de estado de "off" para "on")

## Solução de Problemas

### P1: Por que meu dispositivo continua caindo e não consegue se conectar à internet após substituir a bateria? Posso confirmar que a bateria está carregada

Depois que a bateria é removida, devido à estratégia de proteção do chip da bateria 18650, é necessário ser levemente ativada por um cabo de alimentação USB carregado para funcionar corretamente.

## Recursos

- **[GITHUB]** [Repositório Github do Seeed IoT Button](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [PDF do Esquema do Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Esquema & PCB do Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
