---
description: Esta placa de áudio de borda detecta choro de bebê, quebra de vidro, disparo de arma de fogo, alarmes e ronco em tempo real, mantendo todos os dados localmente para garantir privacidade. Projetada para integração perfeita com ESPHome e Home Assistant com a série XIAO, é ideal para monitoramento inteligente e automação.
title: Primeiros Passos com o Módulo de Detecção de Eventos Sonoros
keywords:
  - Sound Event Detection Module
  - Sound IoT
image: https://files.seeedstudio.com/wiki/sound_event_detection/sound_event_detection_img_1.png
slug: /sound_event_detection_module
sku: 100049596
last_update:
  date: 3/2/2026
  author: Kasun Thushara
createdAt: '2026-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sound_event_detection_module/
---

## Introdução

Uma placa de áudio de borda compacta fornece detecção de som em tempo real com forte proteção de privacidade de dados locais. Ela detecta cinco eventos sonoros anormais — choro de bebê, quebra de vidro, disparo de arma de fogo, alarmes T3/T4 e ronco — possibilitando resposta imediata e aviso prévio confiável. Projetada para integração nativa com ESPHome, com compatibilidade perfeita com Home Assistant usando a série XIAO, é ideal para monitoramento de segurança residencial ou acionadores de automação responsivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/sound_event_detection_img_1.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Sound-Event-Detection-Module-D1-p-6652.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Especificações

| Recurso | Descrição |
|--------|-------------|
| Chip Principal | XMOS XU316-1024-QF60BC24 |
| Eventos Suportados | Choro de bebê / Quebra de vidro / Disparo de arma de fogo / Alarme de fumaça e Alarme de CO (T3/T4) / Ronco |
| Microfones Digitais | Microfones digitais de alto desempenho × 1 |
| Sensibilidade | -26 dBFS |
| Ponto de Sobrecarga Acústica | 120 dBL |
| SNR | 64 dBA |
| Alimentação | USB 5V, 5V externo |
| Dimensões | 40 × 20 mm |
| Temperatura de Operação | 0℃ – 65℃ |

## Visão Geral de Hardware e Dimensões

**Vista Frontal**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/front.png" alt="pir" width={400} height="auto" /></p>

**Vista Traseira**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/back.png" alt="pir" width={400} height="auto" /></p>

## Uso via USB

Este dispositivo pode operar em modo autônomo e suporta comunicação plug-and-play através da interface USB usando comandos AT.

Primeiro, conecte o dispositivo ao seu computador usando um cabo USB Tipo-C para USB Tipo-A.

- **Passo 1** :Em seguida, abra o **PuTTY** ou qualquer outro software de terminal serial. Se você ainda não instalou um, pode baixar o PuTTY no seguinte [link](https://putty.org/index.html):

- **Passo 2** :Depois de abrir o terminal serial, selecione a **porta COM correta** e ajuste a taxa de transmissão para **115200**. Após a conexão, você poderá interagir com o dispositivo através da interface USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/putty.png" alt="pir" width={600} height="auto" /></p>

Como o dispositivo escuta continuamente eventos sonoros, você pode testá-lo gerando eventos sonoros suportados próximo ao dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/putty_2.png" alt="pir" width={600} height="auto" /></p>

Além disso, você pode ajustar os parâmetros do dispositivo usando comandos AT. Abaixo estão alguns comandos que você pode usar para interagir com o dispositivo.

| Comando | Descrição | Exemplo |
|---|---|---|
| `AT+GETDETECT` | Obter os tipos de detecção atualmente habilitados (1–5 tipos). | `AT+GETDETECT` → `+GETDETECT:baby_cry,glass_break` |
| `AT+SETDETECT=<types>` | Definir os tipos de eventos a serem detectados (separados por vírgula, máximo de 5). | `AT+SETDETECT=baby_cry,snore` |
| `AT+GETEVENTTHRESHOLD=<type>` | Obter o limite de confiança para um evento específico. | `AT+GETEVENTTHRESHOLD=baby_cry` → `+GETEVENTTHRESHOLD:baby_cry,70` |
| `AT+SETEVENTTHRESHOLD=<type>,<val>` | Definir o limite de confiança para um evento específico. | `AT+SETEVENTTHRESHOLD=baby_cry,75` |
| `AT+GETSUPPORTEDLIST` | Listar todos os tipos de eventos suportados pelo dispositivo. | `AT+GETSUPPORTEDLIST` → `+GETSUPPORTEDLIST:doorbell,glass_break,baby_cry,...` |
| `AT+SETOUTPUTTYPE=<type>` | Definir o que é enviado quando um evento é detectado. | `AT+SETOUTPUTTYPE=highest_confidence` |
| `AT+GETINTMODE` | Obter o modo de interrupção atual. | `AT+GETINTMODE` → `+GETINTMODE:single` |
| `AT+SETINTMODE=<mode>` | Definir o modo de operação da interrupção. | `AT+SETINTMODE=continuous` |
| `AT+RESETINT` | Redefinir o status da interrupção e colocar o pino INT_N em nível ALTO. | `AT+RESETINT` |
| `AT+SAVECONFIG` | Salvar a configuração atual para que persista após reiniciar. | `AT+SAVECONFIG` |
| `AT+GETFWVERSION` | Obter a string da versão do firmware. | `AT+GETFWVERSION` → `+GETFWVERSION:1.0.2` |
| `AT+RESET` | Restaurar as configurações padrão e reiniciar o dispositivo (apaga toda a configuração personalizada). | `AT+RESET` |


Quando um evento é detectado, o dispositivo envia automaticamente:

```
+EVENT: <event_id>,<confidence>
```

**Exemplo:** `+EVENT: 1,87` → ID de evento 1 (`baby_cry`), 87% de confiança

---

 `AT+SETOUTPUTTYPE` valores

| Valor | Comportamento |
|---|---|
| `highest_confidence` | Apenas o único evento com maior confiança é reportado |
| `all_events` | Todos os eventos detectados são reportados a cada ciclo de detecção |

 `AT+SETINTMODE` valores

| Valor | Comportamento |
|---|---|
| `single` | INT_N dispara uma vez, depois deve ser redefinido com `AT+RESETINT` |
| `continuous` | INT_N dispara continuamente enquanto o evento é detectado |



## Uso com Arduino 

### Conectar o XIAO

Este dispositivo é compatível com módulos XIAO e pode ser conectado a quaisquer pinos UART disponíveis na placa. É compatível com os módulos ESP32S3, ESP32C6 e ESP32C3, portanto você só precisa modificar as definições dos pinos RX e TX no código de acordo. Conecte o dispositivo na mesma orientação mostrada nas imagens.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/with_esp.jpg" alt="pir" width={800} height="auto" /></p>

###  Baixar a Biblioteca

- Acesse o repositório no GitHub [Link](https://github.com/Seeed-Projects/AudioEventSensor_Library)
- Clique no botão verde "Code"
- Selecione "Download ZIP"
- Salve o arquivo (por exemplo, AudioEventSensor-main.zip) no seu computador

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/library_download.png" alt="pir" width={800} height="auto" /></p>

### Instalar a Biblioteca na Arduino IDE

#### Usando a Arduino IDE (Recomendado)

- Abra a Arduino IDE
- Vá em Sketch → Include Library → Add .ZIP Library...
- Navegue até o arquivo ZIP baixado
- Clique em "Open" para instalar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/arduino_add_library.png" alt="pir" width={800} height="auto" /></p>

### Verificar a Instalação

Vá em File → Examples → AudioEventSensor para ver os exemplos de sketches

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/verify_arduino.png" alt="pir" width={800} height="auto" /></p>

### Alterar os Pinos UART

De acordo com a sua placa XIAO, você deve alterar as definições dos pinos UART no código. Neste exemplo, usamos o XIAO ESP32S3.

```c
#define UART1_TX 43
#define UART1_RX 44
```

## Uso Básico

Depois que você fizer o upload para o ESP32, este código inicializa um Sensor de Eventos de Áudio via UART e o configura para detectar eventos sonoros específicos, como disparo de arma de fogo e quebra de vidro. Durante a configuração, ele reinicia o dispositivo, lê a versão do firmware, obtém a lista de eventos sonoros suportados e define os limites de detecção para cada evento selecionado. A configuração é então salva para que as definições persistam após reinicializar. No loop principal, o programa escuta continuamente os eventos sonoros detectados e os imprime no monitor serial em tempo real. Isso permite que o sistema atue como uma solução de monitoramento e aviso antecipado para eventos acústicos anormais.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/basic_usage.png" alt="pir" width={800} height="auto" /></p>

## Bônus : Notificações por E-mail 

- Primeiro, você precisa criar uma Senha de App. Consulte este [guia](https://support.google.com/accounts/answer/185833?hl=en)
- Em seguida, baixe e instale as bibliotecas de suporte necessárias. Instale a biblioteca ESP Mail Client pelo Gerenciador de Bibliotecas da Arduino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/email_client.png" alt="pir" width={800} height="auto" /></p>

### Código

<details>
<summary>Email Ino</summary>

```c
#include <WiFi.h>
#include <ESP_Mail_Client.h>
#include <AudioEventSensor.h>

// WiFi credentials
#define WIFI_SSID "WIFI-SSID"
#define WIFI_PASSWORD "PASSWORD"

// Email credentials
#define SENDER_EMAIL "xyz@gmail.com"
#define SENDER_PASSWORD "abcd efgh ijkh xvyz"
#define RECIPIENT_EMAIL "abc@gmail.com"

#define SMTP_HOST "smtp.gmail.com"
#define SMTP_PORT 587

// UART pins for audio sensor
#define UART1_TX 43
#define UART1_RX 44

// Cooldown period in milliseconds (30 seconds)
#define EVENT_COOLDOWN_MS 30000

// Event tracking structure
struct EventTracker {
  String eventType;
  unsigned long lastTriggerTime;
  int detectionCount;
};

// Track multiple event types
EventTracker events[] = {
  {"baby_cry", 0, 0},
  {"glass_break", 0, 0},
  {"gunshot", 0, 0},
  {"snore", 0, 0},
  {"T3", 0, 0},
  {"T4", 0, 0}
};
const int EVENT_COUNT = 6;

SMTPSession smtp;
AudioEventSensor audio(Serial1);

void setup() {
  Serial.begin(115200);
  delay(1000);

  Serial1.begin(115200, SERIAL_8N1, UART1_RX, UART1_TX);
  audio.begin(115200);

  Serial.println("=================================");
  Serial.println("Audio Event Email Alert System");
  Serial.println("=================================\n");

  // Connect to WiFi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }

  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  // Initialize audio sensor
  Serial.println("Initializing audio sensor...");
  delay(2000);

  audio.resetDevice();
  delay(500);

  // Get firmware version
  String firmwareVersion;
  if (audio.getFirmwareVersion(firmwareVersion)) {
    Serial.print("Firmware version: ");
    Serial.println(firmwareVersion);
  }

  // Configure detection
  Serial.println("Setting detection types...");
  if (audio.setDetectTypes("gunshot,glass_break,baby_cry,snore,T3")) {
    Serial.println("✓ Detection types set: gunshot, glass_break");
  } else {
    Serial.println("✗ Failed to set detection types");
  }
  delay(500);

  // Set thresholds
  audio.setEventThreshold("glass_break", 60);
  audio.setEventThreshold("gunshot", 65);
  delay(500);

  // Save configuration
  audio.saveConfig();
  delay(500);

  Serial.println("\n=================================");
  Serial.println("System ready. Monitoring events...");
  Serial.println("=================================\n");
}

void loop() {
  // Check for audio events
  if (audio.available()) {
    String eventData = audio.readEvent();

    if (eventData.length() > 0) {
      Serial.print("[" + getTimestamp() + "] ");
      Serial.println(eventData);

      // Extract event type from the event string
      String eventType = extractEventType(eventData);
      int confidence = extractConfidence(eventData);

      // Check if we should send an email for this event
      if (shouldSendEmail(eventType)) {
        Serial.println("\n>>> ALERT: New " + eventType + " detected!");
        Serial.println(">>> Sending email notification...");

        sendEventEmail(eventType, confidence);

        Serial.println(">>> Email sent. Cooldown active for " + 
                      String(EVENT_COOLDOWN_MS/1000) + " seconds.\n");
      }
    }
  }

  delay(100);
}

// Extract event type from event string (e.g., "glass_break 95% confidence")
String extractEventType(String eventData) {
  int spaceIndex = eventData.indexOf(' ');
  if (spaceIndex > 0) {
    return eventData.substring(0, spaceIndex);
  }
  return eventData;
}

// Extract confidence from event string
int extractConfidence(String eventData) {
  int percentIndex = eventData.indexOf('%');
  if (percentIndex > 0) {
    // Find the last space before %
    int lastSpace = eventData.lastIndexOf(' ', percentIndex);
    if (lastSpace > 0) {
      String confStr = eventData.substring(lastSpace + 1, percentIndex);
      return confStr.toInt();
    }
  }
  return 0;
}

// Check if enough time has passed since last email for this event type
bool shouldSendEmail(String eventType) {
  unsigned long currentTime = millis();

  for (int i = 0; i < EVENT_COUNT; i++) {
    if (events[i].eventType == eventType) {
      // Check if cooldown period has passed
      if (currentTime - events[i].lastTriggerTime >= EVENT_COOLDOWN_MS) {
        // Update last trigger time
        events[i].lastTriggerTime = currentTime;
        events[i].detectionCount++;
        return true;
      } else {
        // Still in cooldown period
        unsigned long timeRemaining = EVENT_COOLDOWN_MS - (currentTime - events[i].lastTriggerTime);
        Serial.println("    ⏳ Cooldown active. " + String(timeRemaining/1000) + "s remaining.");
        return false;
      }
    }
  }

  return false; // Unknown event type
}

// Send email notification
void sendEventEmail(String eventType, int confidence) {
  // Prepare email subject and body
  String subject = "🚨 ALERT: " + formatEventName(eventType) + " Detected!";

  String body = "SECURITY ALERT\n";
  body += "═══════════════════════════════\n\n";
  body += "Event Type: " + formatEventName(eventType) + "\n";
  body += "Confidence: " + String(confidence) + "%\n";
  body += "Time: " + getTimestamp() + "\n";
  body += "Device: ESP32 Audio Sensor\n";
  body += "Location: [Your Location]\n\n";
  body += "═══════════════════════════════\n";
  body += "This is an automated alert from your audio monitoring system.\n";

  // Send the email
  gmail_send(subject, body);
}

// Format event name for display
String formatEventName(String eventType) {
  if (eventType == "glass_break") return "Glass Breaking";
  if (eventType == "gunshot") return "Gunshot";
  if (eventType == "baby_cry") return "Baby Crying";
  if (eventType == "snore") return "Snoring";
  return eventType;
}

// Get formatted timestamp
String getTimestamp() {
  unsigned long seconds = millis() / 1000;
  unsigned long minutes = seconds / 60;
  unsigned long hours = minutes / 60;

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  char timestamp[12];
  sprintf(timestamp, "%02lu:%02lu:%02lu", hours, minutes, seconds);
  return String(timestamp);
}

// Gmail send function
void gmail_send(String subject, String textMsg) {
  MailClient.networkReconnect(true);

  smtp.debug(0); // Set to 1 for debug output
  smtp.callback(smtpCallback);

  Session_Config config;
  config.server.host_name = SMTP_HOST;
  config.server.port = SMTP_PORT;
  config.login.email = SENDER_EMAIL;
  config.login.password = SENDER_PASSWORD;
  config.login.user_domain = F("127.0.0.1");
  config.time.ntp_server = F("pool.ntp.org,time.nist.gov");
  config.time.gmt_offset = 3;
  config.time.day_light_offset = 0;

  SMTP_Message message;
  message.sender.name = F("ESP32 Security System");
  message.sender.email = SENDER_EMAIL;
  message.subject = subject;
  message.addRecipient(F("Security Admin"), RECIPIENT_EMAIL);
  message.text.content = textMsg;
  message.text.transfer_encoding = "base64";
  message.text.charSet = F("utf-8");
  message.priority = esp_mail_smtp_priority::esp_mail_smtp_priority_high;
  message.addHeader(F("Message-ID: <esp32.security@gmail.com>"));

  if (!smtp.connect(&config)) {
    Serial.printf("✗ Connection error, Status Code: %d, Error Code: %d, Reason: %s\n", 
                  smtp.statusCode(), smtp.errorCode(), smtp.errorReason().c_str());
    return;
  }

  if (!MailClient.sendMail(&smtp, &message)) {
    Serial.printf("✗ Send error, Status Code: %d, Error Code: %d, Reason: %s\n", 
                  smtp.statusCode(), smtp.errorCode(), smtp.errorReason().c_str());
  } else {
    Serial.println("✓ Email sent successfully!");
  }
}

void smtpCallback(SMTP_Status status) {
  Serial.println(status.info());

  if (status.success()) {
    Serial.println("────────────────────");
    Serial.printf("✓ Message sent: %d\n", status.completedCount());
    Serial.printf("✗ Message failed: %d\n", status.failedCount());
    Serial.println("────────────────────\n");
    smtp.sendingResult.clear();
  }
}



```

</details>

Em seguida, substitua os seguintes parâmetros no código pelos seus próprios valores: o endereço de e-mail do remetente, os pinos UART, a App Password, o endereço de e-mail do destinatário e o SSID e a senha da sua rede Wi‑Fi.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/sound_event_detection/credentials.png" alt="pir" width={800} height="auto" /></p>

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/Fq126JCoQTo"
          title="Sensor de Evento de Áudio"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>


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
