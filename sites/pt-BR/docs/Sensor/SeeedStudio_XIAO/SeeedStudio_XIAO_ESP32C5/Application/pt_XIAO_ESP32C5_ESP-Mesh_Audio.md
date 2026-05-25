---
description: ''
title: XIAO ESP32C5 ESP-Mesh Áudio
keywords:
  - xiao esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_esp-mesh_audio
last_update:
  date: 12/12/2025
  author: Zeller
createdAt: '2025-12-15'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_esp-mesh_audio/
---

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_0.png" style={{width:800, height:'auto'}}/></div>

## [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)

A seguir está a introdução oficial do **ESP-WIFI-MESH** pela Espressif Systems:

ESP-WIFI-MESH é uma rede de comunicação sem fio com nós organizados em uma topologia mesh usando o recurso simultâneo AP-STA nos SoCs da Espressif. Ela fornece uma rede de autoformação e autorrecuperação, com fácil implantação. A topologia de rede do ESP-WIFI-MESH pode escalar até 1000 nós em grandes áreas, sem exigir qualquer suporte específico de infraestrutura Wi-Fi. ESP-WIFI-MESH também pode ser usado para cobrir pontos cegos de Wi-Fi em cenários de implantação doméstica onde o sinal Wi-Fi não consegue alcançar.

Ela apresenta as seguintes características:

1. **Configuração Fácil e Segura** : É suportada a configuração de rede via aplicativo móvel + Bluetooth LE, permitindo a adição rápida de novos nós e a entrega segura de configurações.
2. **Autoformação e Autorrecuperação** : Os nós irão se conectar/reconectar automaticamente, e a rede pode se formar automaticamente e se autorrecuperar quando um nó falhar.
3. **Sem Necessidade de Gateways Extras** : Não são necessários gateways ou infraestrutura adicionais. A rede Mesh pode escalar até milhares de nós, tornando-a adequada para implantações em grande escala.
4. **Conectividade IP** : Todos os nós suportam comunicação IP, permitindo tanto a interconexão entre si quanto o acesso a redes externas (via NAT do nó raiz ou bridge).
5. **Seguro por Conceito** : Com base no Wi-Fi padrão, as comunicações entre os nós podem adotar criptografia WPA2 para garantir a transmissão segura de dados.
6. **Aplicações** : É aplicável a vários cenários, como iluminação inteligente, casas inteligentes, controle de automação e redes em locais de grande escala (por exemplo, estacionamentos, fábricas, espaços compartilhados).

Para obter informações mais detalhadas, consulte o link oficial da Espressif Systems:

- [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/esp-wifi-mesh.html)

## ESP-Mesh_Audio

Em seguida, usaremos um XIAO ESP32-C5, um roteador que suporta a faixa de frequência de 5 GHz e um computador para simular a transmissão de áudio na faixa de 5 GHz em um cenário de nó Mesh.<br/>
Aqui, o seu computador atua como um **nó filho Mesh**, enviando dados por meio de um roteador de 5 GHz; o C5 atua como um **nó raiz Mesh**, recebendo dados.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
Se você não tiver em casa um roteador que suporte a faixa de frequência de 5 GHz, pode ativar o hotspot do seu celular, configurá-lo para a faixa de 5 GHz e garantir que o seu computador esteja conectado a esse hotspot.
:::

### Criar um Projeto Arduino

Copie o código a seguir e modifique o **ssid** e a **password** para o nome e a senha do roteador de faixa de 5 GHz que você está usando.

```cpp
#include <WiFi.h>
#include <WiFiUdp.h>

const char* ssid = "Your_5G_Router_SSID";
const char* password = "Your_Router_Password";
#define UDP_PORT 4444

WiFiUDP udp;
uint8_t packetBuffer[1024]; // Buffer for storing received UDP packets

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  Serial.print("Connecting to 5GHz WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  // Start UDP listening
  udp.begin(UDP_PORT);
  Serial.printf("Listening on UDP port %d\n", UDP_PORT);
}

void loop() {
  int packetSize = udp.parsePacket();
  if (packetSize) {
    // Read received data
    int len = udp.read(packetBuffer, 1024);

    // Statistics and print: size of received packet, and signal strength (RSSI)
    // Signal strength is crucial for 5GHz audio transmission
    Serial.printf("[RECV] %d bytes from %s, RSSI: %d dBm\n", 
                  len, udp.remoteIP().toString().c_str(), WiFi.RSSI());

    // If you have an I2S speaker, you can call i2s_write here for playback
  }
}
```

### Obter o Endereço IP

Carregue o código no XIAO ESP32-C5, abra o Monitor Serial, e o endereço IP conectado será impresso se ele se conectar com sucesso ao roteador WiFi de 5 GHz.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_1.png" style={{width:800, height:'auto'}}/></div>

### Criar um Script em Python

Antes de usar o script em Python, você precisa primeiro instalar o ambiente Python 3. Você pode pesquisar na internet os tutoriais de instalação correspondentes para obter detalhes.<br/>

Crie um arquivo chamado send_audio.py em qualquer pasta no Windows e copie para ele o código Python a seguir.<br/>

Preencha o endereço IP impresso pelo Monitor Serial da Arduino IDE na variável **TARGET_IP** do código.

```py
import socket
import time
import random

# Set the target IP (View the IP printed out by the serial port of C5)
TARGET_IP = "192.168.x.x" # <--- Modify here!!!
TARGET_PORT = 4444

# Simulated Audio Parameters
# 16kHz sampling, 16-bit, mono -> 32000 bytes per second
# Send one packet every 20ms -> Each packet is 640 bytes
PACKET_SIZE = 640 
INTERVAL = 0.02 # 20ms

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
print(f"Start sending simulated audio to {TARGET_IP}:{TARGET_PORT}...")

sequence = 0

try:
    while True:
        # Generate simulated data (add serial numbers to facilitate packet loss detection)
        # The first 4 bytes are the serial numbers, followed by random noise
        payload = sequence.to_bytes(4, byteorder='big') + random.randbytes(PACKET_SIZE - 4)

        sock.sendto(payload, (TARGET_IP, TARGET_PORT))
        print(f"Sent packet #{sequence}, size: {len(payload)}")

        sequence += 1
        time.sleep(INTERVAL) # Control the transmission frequency

except KeyboardInterrupt:
    print("Stopped.")
    sock.close()
```

### Executar o Arquivo de Script

Clique com o botão direito na pasta onde `send_audio.py` está armazenado e abra o terminal nessa pasta.<br/>
Digite `python send_audio.py` para executar o script. Após uma conexão bem-sucedida, ele enviará dados de áudio para o XIAO ESP32-C5 a cada 20 ms.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_3.png" style={{width:800, height:'auto'}}/></div>

A janela do monitor da Arduino IDE retornará o endereço IP e os dados em bytes do seu computador, bem como a intensidade do sinal do WiFi de 5 GHz conectado.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/mesh_4.png" style={{width:800, height:'auto'}}/></div>

Parabéns! Neste ponto, você aprendeu como transmitir áudio pela faixa WiFi de 5 GHz, e mais inovações estão esperando para ser realizadas por você!

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
