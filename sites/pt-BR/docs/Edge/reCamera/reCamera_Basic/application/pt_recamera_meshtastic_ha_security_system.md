---
description: Construa um sistema de segurança de longo alcance usando reCamera e Meshtastic — envie alertas de detecção de IA sem fio para o Home Assistant via rede mesh LoRa
title: Construindo um Sistema de Segurança de Longo Alcance com reCamera e Meshtastic
keywords:
  - Edge AI
  - reCamera
  - Meshtastic
  - LoRa
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/demo_show.gif
slug: /recamera_meshtastic_ha_security_system
sku: 100029708
sidebar_position: 13
last_update:
  date: 06/29/2026
  author: Sizhao Zhou
createdAt: '2026-06-29'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/pt-br/reCamera/reCamera_Basic/application/recamera_meshtastic_ha_security_system/
---

# Construindo um Sistema de Segurança de Longo Alcance com reCamera e Meshtastic  

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/demo_show.gif" /></div>  

## 1. Introdução  

Como implementar monitoramento de segurança inteligente em áreas selvagens, grandes fazendas ou regiões montanhosas remotas sem cobertura de rede WiFi ou celular?  

Este tutorial fornece uma solução de "segurança sem rede" altamente geek: aproveitar o poderoso poder de computação de IA de borda da **reCamera PoE** para detecção de pessoas em tempo real. Assim que um alvo for detectado, acione imediatamente o **módulo XIAO ESP32S3 + Wio-SX1262 (transmissor)** por meio dos pinos de hardware de baixo nível. O sinal de alerta é convertido em ondas de rádio de baixa frequência, atravessando quilômetros de terreno complexo até ser capturado pelo **receptor Wio-SX1262** interno, e traduzido perfeitamente em mensagens MQTT enviadas para o seu sistema **Home Assistant (HA)** local.  

Toda a cadeia não requer servidores em nuvem, alcançando verdadeiramente a combinação perfeita de privacidade, baixo consumo de energia e alcance ultra longo.  

### Arquitetura de Comunicação do Sistema  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/system_framework.png" /></div>  

O fluxo geral de dados é o seguinte:  

- A reCamera PoE executa o modelo de detecção de pessoas YOLO e gera um sinal de nível baixo através do pino GPIO quando uma pessoa é detectada  
- O XIAO ESP32S3 (transmissor) captura o gatilho de nível baixo através do pino D2 e envia pacotes de rádio LoRa por meio do Wio-SX1262  
- O XIAO ESP32S3 (receptor) recebe pacotes LoRa via Wio-SX1262 e os envia para o Home Assistant via WiFi usando o protocolo MQTT  
- O Home Assistant recebe a mensagem MQTT e aciona alertas automatizados (notificações, acionamento de outros dispositivos inteligentes, etc.)  

---  

## 2. Preparação de Hardware  

<table align="center">
 <tr>
  <th>Kit XIAO ESP32S3 & Wio-SX1262</th>
  <th>reCamera PoE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
   </a>
  </div></td>
  <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
   </a>
  </div></td>
 </tr>
</table>  

- Kit XIAO ESP32S3 & Wio-SX1262: 2 conjuntos (um para transmissor LoRa, outro para receptor LoRa)  
- Host inteligente local: 1 unidade, usada para executar o Home Assistant e o Broker MQTT (qualquer mini host capaz de executar o HA é aceitável)  
- Cabos de extensão Dupont: vários, usados para a fiação física de sinal entre o GPIO da reCamera e o XIAO ESP32S3  

---  

## 3. Configuração da Rede Meshtastic  

Para alcançar comunicação LoRa de longo alcance entre dois dispositivos XIAO ESP32S3, precisamos gravar neles o firmware de código aberto **Meshtastic**.  

### 3.1 Gravação de Firmware e Sincronização Básica de RF (Necessário para Receptor e Transmissor)  

**Passo 1**: Conecte o XIAO ESP32S3 ao computador por meio de um cabo de dados USB-C.  

:::note Note  
Antes de gravar, coloque o ESP32 no modo de download do Bootloader. Método de operação: mantenha pressionado o botão BOOT, pressione o botão RESET uma vez e, em seguida, solte o botão BOOT.  
:::  

**Passo 2**: Acesse o [Meshtastic Web Flasher](https://flasher.meshtastic.org/), selecione `Seeed Xiao ESP32-S3` como o tipo de dispositivo, marque **Full Erase** e clique em **Flash** para gravar o firmware.  

**Passo 3**: Após a gravação do firmware, acesse o [Meshtastic Web Client](https://client.meshtastic.org/), clique em **Add Connection** para adicionar um novo dispositivo, selecione **Serial** como método de conexão, selecione o dispositivo serial correspondente e clique em **Connect**.  

**Passo 4**: Vá para **Settings → Radio Config → LoRa**, ajuste `Region` para a faixa de frequência legal em sua localização (por exemplo, `CN` ou `US`), e defina `Modem Preset` como **`Short Turbo`** para uma velocidade de resposta mais rápida.  

### 3.2 Configuração do Receptor (Colocado em Ambiente Interno para Conectar ao HA)  

O receptor é responsável por receber pacotes LoRa e enviá-los ao Home Assistant via MQTT sobre WiFi.  

**Passo 1 — Gerar e Salvar a Chave**: Na aba **Channels**, gere uma `Pre-Shared Key` de 128 bits para o canal Primário.  

:::note Note  
Certifique-se de copiar e salvar esta chave offline; ela precisará ser inserida no transmissor posteriormente, e as chaves em ambas as pontas devem ser idênticas.  
:::  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_Meshtastic_password.png" /></div>  

**Passo 2 — Conectar à Rede Local**: Em **Device Config → Network**, ative o WiFi e insira o SSID e a senha do seu WiFi doméstico.  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_connect_wifi.png" /></div>  

**Passo 3 — Ativar Encaminhamento MQTT**: Em **Module Config → MQTT**, marque `Enable MQTT Client`, ative `JSON Enabled` e insira corretamente o endereço IP local do seu host HA em `Address` (por exemplo, `192.168.4.7`).  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_mqtt_config.png" /></div>  

**Passo 4**: Após concluir todas as configurações, clique em **Save** no canto superior direito para salvar e aguarde o reinício do dispositivo.  

### 3.3 Configuração do Transmissor (Colocado em Ambiente Externo para Conectar à reCamera)  

O transmissor é responsável por monitorar as mudanças de nível do pino GPIO e enviar pacotes de alerta LoRa quando um nível baixo é detectado.  

:::note Note  
**Não** ative WiFi e MQTT no transmissor; ele só precisa se concentrar em receber gatilhos GPIO e enviar sinais de rádio LoRa.  
:::  

**Passo 1**: Desconecte o ESP32 receptor, substitua-o pelo ESP32 do transmissor e clique diretamente em **Connect** no Meshtastic Web Client para conectar.  

**Passo 2 — Sincronizar Parâmetros de RF**: Vá para **Radio Config → LoRa** e certifique-se de que estejam consistentes com o receptor (Region e Modem Preset exatamente iguais); não há necessidade de ativar MQTT.  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_lora_config.png" /></div>  

**Passo 3 — Inserir a Pre-Shared Key**: Na aba **Channels**, cole integralmente a `Pre-Shared Key` gerada pelo receptor.  

**Passo 4 — Configurar o Gatilho de Hardware GPIO**: Ative o módulo em **Module Config → Detection Sensor** e configure-o com os seguintes parâmetros:  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/xiao_shut_detect_config.png" /></div>  

| Parâmetro | Configuração | Descrição |
| :--- | :--- | :--- |
| Minimum Broadcast Seconds | 15 | Intervalo mínimo de transmissão para evitar congestionamento do canal causado por gatilhos frequentes |
| Friendly Name | Human | Nome de alerta personalizado, que será usado como identificador da mensagem MQTT |
| Monitor Pin | 3 | Correspondente ao pino D2 do XIAO ESP32S3 |
| Detection Triggered Type | LOGIC_LOW | Gatilho em nível baixo (a reCamera gera nível baixo quando uma pessoa é detectada) |  

**Passo 5**: Clique em **Save** no canto superior direito para salvar e aguarde o reinício do dispositivo.  

---  

## 4. Configuração do Endpoint reCamera e Fiação Física  

### 4.1 Liberar Recursos do Sistema  

Por padrão, os serviços em segundo plano Node-RED e SSCMA da reCamera ocupam recursos da câmera. Faça login na reCamera via SSH (o IP padrão é `192.168.42.1`, nome de usuário e senha são ambos `recamera`), e execute os seguintes comandos no terminal para parar os serviços em segundo plano:  

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```  

### 4.2 Iniciar o Script de Encaminhamento de Fluxo de Vídeo  

:::note Note  
O host que executa o script deve estar na **mesma rede local** que a reCamera PoE. A versão reCamera PoE só precisa estar conectada ao mesmo roteador ou switch para obter um endereço IP.  
:::  

No host de monitoramento que você usa para receber o fluxo de vídeo, execute o script Python para receber os quadros de vídeo enviados pela reCamera:  

```bash
python udp_client.py
```  

### 4.3 Iniciar o Programa de Detecção de Pessoas  

Execute o seguinte comando no terminal da reCamera para iniciar o modelo de detecção de pessoas YOLO integrado. O primeiro parâmetro é o caminho do arquivo de modelo (você pode usar diretamente o modelo que vem com a reCamera), e o segundo parâmetro é o endereço IP do host que executa o script de encaminhamento de fluxo de vídeo:  

```bash
sudo ./model_detector ./Models/model.cvimodel 192.168.4.7
```  

### 4.4 Conectar o Transmissor ESP32 à reCamera  

Após concluir as configurações de software acima, use cabos Dupont para conectar fisicamente o XIAO ESP32S3 (transmissor) à reCamera:  

- Cabo preto: Conecte o pino **GND** do ESP32 → pino **GND** da reCamera  
- Cabo verde: Conecte o pino **D2** do ESP32 → pino de saída de sinal GPIO da reCamera  

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/reCamera_xiao_connect_line.png" /></div>  

:::note Note  
Forneça uma fonte de alimentação separada para o transmissor ESP32 (via cabo USB ou bateria) para garantir que o módulo LoRa tenha potência de transmissão suficiente.  
:::  

---  

## 5. Recebendo alertas no Home Assistant  

### 5.1 Confirmar se o receptor está funcionando normalmente  

Antes de começar, certifique-se de que o ESP32 receptor esteja ligado e em execução, conectado à mesma rede WiFi que o host do HA, e que o endereço MQTT esteja configurado corretamente.  

### 5.2 Ouvir mensagens MQTT no HA  

Abra um navegador, insira o endereço IP do Home Assistant e acesse a **interface de gerenciamento MQTT**. Ative a opção **Listen to all** na configuração.  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/reCamera_Meshtastic_HA/ha_show_result.png" /></div>  

Quando a reCamera detecta uma pessoa, o transmissor Meshtastic envia informações de alerta via LoRa para o receptor, que então envia uma mensagem contendo `Human` (o Friendly Name configurado no transmissor) para o HA via MQTT. Você verá a mensagem de alerta em tempo real na interface de escuta MQTT:  

```json
{
  "payload": {
    "text":"Human detect"
  }
}
```  

### 5.3 Configurar alertas automatizados no HA  

Crie uma regra de automação no Home Assistant para acionar ações de alerta (como notificações móveis, acionamento de alarmes, registro em log, etc.) quando `payload.text` na mensagem MQTT for `Human detect`, completando o ciclo fechado de todo o sistema de "segurança sem rede".  

---  

## 6. Observações  

- O `Region` e o `Modem Preset` LoRa do transmissor e do receptor devem ser exatamente iguais; caso contrário, a comunicação falhará  
- A `Pre-Shared Key` do transmissor e do receptor deve ser a mesma; caso contrário, os pacotes não poderão ser descriptografados corretamente  
- Definir `Minimum Broadcast Seconds` muito curto pode causar congestionamento no canal LoRa; é recomendado mantê-lo acima de 15 segundos  
- O pino GPIO da reCamera é de nível 3,3 V, o que é compatível com o nível do pino D2 do XIAO ESP32S3, não sendo necessária conversão de nível  
- O transmissor deve ser colocado em uma posição aberta e elevada tanto quanto possível para obter a melhor distância de comunicação LoRa  

---  

## 7. Perguntas frequentes  

### P1: E se o receptor e o transmissor não conseguirem se comunicar?  

Verifique se o `Region` e o `Modem Preset` LoRa em ambas as extremidades são exatamente iguais e se a `Pre-Shared Key` é idêntica. Além disso, confirme se a distância entre os dois dispositivos está dentro do alcance efetivo de comunicação LoRa e verifique se a antena está instalada corretamente.  

### P2: A reCamera detecta uma pessoa, mas o HA não recebe o alerta?  

Faça a solução de problemas na seguinte ordem: se a saída de sinal GPIO da reCamera é normal (pode ser medida com um multímetro); se o Monitor Pin do módulo Detection Sensor no transmissor está corretamente configurado para 3 (D2); se as configurações de WiFi e MQTT do receptor estão corretas e se o MQTT Address está preenchido com o IP do host do HA.  

### P3: Como confirmar que o receptor Meshtastic se conectou com sucesso ao WiFi e ao MQTT?  

Verifique o painel de status do dispositivo do receptor no Meshtastic Web Client para confirmar que o status do WiFi está como Connected e o status do MQTT está como Connected.  

---  

## 8. Recursos  

- [Guia de início rápido da reCamera](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/)  
- [Documentação oficial do Meshtastic](https://meshtastic.org/docs/)  
- [Meshtastic Web Flasher](https://flasher.meshtastic.org/)  
- [GitHub do reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)  
- [Wiki do XIAO ESP32S3](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/)  

---  

## Suporte técnico e discussão sobre o produto  

Obrigado por escolher nossos produtos! Fornecemos diferentes níveis de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.  

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>  

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>