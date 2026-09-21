---
description: Uso de hardware e interfaces do reComputer Rugged J401
title: Uso de Hardware e Interfaces do reComputer Rugged J401
keywords:
  - reComputer Rugged
  - reComputer Rugged J401
  - IP66
  - Jetson
  - hardware interface
image: https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png
slug: /ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage
sku: 100046979,100002634
last_update:
  date: 09/18/2026
  author: Dongxu Jin
createdAt: '2026-08-14'
updatedAt: '2026-09-18'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage/
---

# Uso de Hardware e Interfaces do reComputer Rugged J401

Este wiki apresenta os diversos hardwares e interfaces do reComputer Rugged J40 e explica como usá-los para expandir suas ideias de projeto. A maioria das interfaces no reComputer Rugged J40 utiliza conectores M12, oferecendo resistência à água e poeira com classificação IP66, bem como excelente resistência a vibrações. Isso o torna adequado para implantação de longo prazo em ambientes externos severos, como embarcações e sistemas de monitoramento em portos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png" alt="Image" width={800} height="auto" /></p>

## Visão Geral do Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw1.png"/>
  <p>Vista Lateral 1</p>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw2.png"/>
  <p>Vista Lateral 2</p>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw3.png"/>
  <p>Vista Inferior</p>
</div>

## Especificações da Placa Carrier

<table>
  <thead>
    <tr>
      <th colSpan={2}>Item</th>
      <th>Especificação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td>1× M12 GbE + 4× M12 GbE PSE (IEEE 802.3af, 15 W, 10/100/1000 Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4× USB 3.2 Type-A (conectores à prova d'água) + 1× USB 3.0 Type-C (dispositivo / gravação) + 1× USB 2.0 Type-C (debug)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1× HDMI 2.1 (tampa à prova d'água)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2× CAN-FD (isolado) via M12 A-code</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td>1× RS-232/422/485 via M12 A-code</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>2× DI + 2× DO via M12 A-code</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td>1× slot para cartão Nano-SIM</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td>4× conectores de antena SMA à prova d'água</td>
    </tr>
    <tr>
      <td>Armazenamento</td>
      <td>M.2 Key M</td>
      <td>1× M.2 Key M para SSD NVMe 2280 (SSD de 128 GB incluído)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Expansão</td>
      <td>M.2 Key E</td>
      <td>1× M.2 Key E para módulo Wi-Fi M.2 2230 (módulo Wi-Fi 6 incluído)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1× M.2 Key B para módulo 5G</td>
    </tr>
    <tr>
      <td rowSpan={4}>Onboard</td>
      <td>SPI / I2C</td>
      <td>1× SPI, 1× I2C (conector interno de pinos)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>Soquete RTC, conector de 2 pinos</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1× LED PWR (verde), 1× LED SSD (verde)</td>
    </tr>
    <tr>
      <td>Botão</td>
      <td>1× botão de Recovery, 1× botão RST</td>
    </tr>
    <tr>
      <td>Alimentação</td>
      <td>Entrada</td>
      <td>M12 A-code DC 19–48 V</td>
    </tr>
  </tbody>
</table>

## Alimentação

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/2.jpg" alt="Image" width={800} height="auto" /></p>

O reComputer Rugged J401 está equipado com uma interface de alimentação M12 A-code DC 19–48 V, compatível com uma ampla faixa de tensão de entrada, tornando-o adequado para diversos ambientes de fornecimento de energia. A definição da interface é mostrada na tabela abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/3.png" alt="Image" width={400} height="auto" /></p>

|Pin|Uso|Tipo|Cor do fio|
|---|---|---|---|
|1|Entrada de alimentação DC|Alimentação|Marrom|
|2|||Branco|
|3|Terra|Terra|Azul|
|4|||Preto|

## Display

Remova os dois parafusos que fixam a tampa lateral à prova d'água e abra-a para acessar a porta HDMI 2.1, que fornece saída de vídeo de alta qualidade.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/4.jpg" alt="Image" width={800} height="auto" /></p>

## M.2 Key M para SSD e M.2 Key E para Wi-Fi e Bluetooth

O reComputer Rugged J401 possui uma interface M.2 Key E, por meio da qual você pode expandir os recursos de Bluetooth e Wi-Fi do dispositivo. Recomendamos o uso da placa de rede sem fio Intel Dual Band RTL8822CE.

M.2 Key M é uma interface projetada para unidades de estado sólido (SSDs) de alta velocidade, oferecendo velocidades de transferência de dados ultrarrápidas, ideal para aplicações de alto desempenho.

A localização da interface é mostrada na figura abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/5.jpg" alt="Image" width={800} height="auto" /></p>

### **Instruções de Uso**

Se você quiser remover o SSD incluído e instalar um novo, precisa garantir que seu SSD atenda às duas condições a seguir:

- Suportar o **slot M.2 Key M com interface x4 PCIe Gen3**.

- Estar em conformidade com a especificação de tamanho **2242**.



Abra o terminal no dispositivo Jetson e insira o seguinte comando para testar a velocidade de leitura e gravação do SSD.

```Bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/6.png" alt="Image" width={800} height="auto" /></p>

Execute o comando `sudo rm tempfile` para excluir os arquivos de cache após a conclusão do teste.

Após instalar o módulo Wi-Fi e ligar o dispositivo, podemos configurar as definições de Wi-Fi e Bluetooth do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/7.gif" alt="Image" width={800} height="auto" /></p>

Claro, também podemos verificar o status de operação do dispositivo usando os seguintes comandos.

```Bash
ifconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/8.png" alt="Image" width={800} height="auto" /></p>

```Bash
bluetoothctl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/9.png" alt="Image" width={800} height="auto" /></p>

## M.2 Key B para Módulo 4G/5G

O slot M.2 Key B oferece suporte a módulos celulares 4G/5G com suporte a cartão Nano SIM.

### Conexão de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/10.png" alt="Image" width={800} height="auto" /></p>

### Instruções de Uso

**Passo 1.** Verificar Reconhecimento de Hardware

```Bash
lsusb 
```

Este comando exibe uma lista de todos os dispositivos USB conectados ao sistema, juntamente com seu fabricante (ID), tipo e outras informações. Por exemplo, a saída pode mostrar um dispositivo da Quectel Wireless Solutions Co., Ltd. EM12-G, indicando que o módulo 5G está presente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/11.png" alt="Image" width={800} height="auto" /></p>

**Passo 2.** Confirmar Carregamento do Driver

É essencial garantir que o driver option, necessário para o módulo 5G, esteja carregado. Podemos usar o comando lsmod para verificar.

```Bash
lsmod | grep option 
```

Se o driver option for carregado com sucesso, informações relevantes sobre o driver serão exibidas na saída.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/12.png" alt="Image" width={800} height="auto" /></p>

**Passo 3.** Configurar o ModemManager

ModemManager é uma ferramenta para gerenciar dispositivos modem, e precisa ser instalado e reiniciado.

```Bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

O comando apt install é usado para instalar o pacote ModemManager, enquanto systemctl restart reinicia o serviço ModemManager para garantir que as novas configurações entrem em vigor.

**Passo 4.** Verificar Identificação do Módulo

Podemos usar o comando mmcli -L para verificar se o ModemManager consegue identificar corretamente o módulo 5G.

```Bash
mmcli -L 
```

Se o módulo 5G for reconhecido, será exibida uma saída semelhante a /org/freedesktop/ModemManager1/Modem/0, indicando o caminho para o dispositivo modem detectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/13.png" alt="Image" width={800} height="auto" /></p>

**Passo 5.** Definir o APN

APN (Access Point Name) é fundamental para conectar um dispositivo móvel à rede. Usaremos o comando nmcli para criar um perfil de portadora. Tomando a China Mobile como exemplo, podemos criar um arquivo de configuração com os seguintes comandos:

```Bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

Este comando adiciona uma nova conexão do tipo GSM (Global System for Mobile Communications), especificando o APN como "CMNET" e usando configuração IPv4 automática.

**Passo 6.** Ativar a Conexão

Após criar o perfil de portadora, precisamos ativar a conexão.

```Bash
sudo nmcli con up "gsm" 
```

Este comando ativa a conexão GSM e, se for bem-sucedido, uma mensagem de confirmação será exibida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/14.png" alt="Image" width={800} height="auto" /></p>

**Passo 7.** Reverificar a Identificação do Módulo

Execute novamente o comando mmcli -L para garantir que o módulo continue sendo reconhecido após a configuração do APN.

```Bash
mmcli -L 
```

**Passo 8.** Verificar o Status do Módulo

Por fim, podemos usar o comando mmcli -m 0 para visualizar informações detalhadas sobre o módulo, como alocação de IP, operadora e status da conexão de rede.

```Bash
mmcli -m 0 
```

Este comando fornece detalhes abrangentes sobre o módulo 5G, incluindo seu fabricante, modelo, tecnologias de rede suportadas e atuais, status do dispositivo e operadoras de rede conectadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/15.png" alt="Image" width={800} height="auto" /></p>

## Ethernet

O reComputer Rugged J401 fornece 1x porta RJ45 Ethernet Gigabit padrão (10/100/1000M) (J35) e 4x portas RJ45 Gigabit PSE (Power Sourcing Equipment) (J36–J39). A porta Gigabit padrão é usada para conectividade geral de rede. As portas PSE suportam os padrões IEEE 802.3af/at, permitindo fornecimento de energia via Ethernet para dispositivos conectados, como câmeras IP e pontos de acesso sem fio, com saída máxima de 15,4 W por porta (802.3af). Isso o torna ideal para aplicações industriais, AMR e de computação de borda externa, eliminando a necessidade de cabeamento de energia separado. Todas as portas Gigabit são derivadas do controlador PCIe dentro do módulo Jetson Orin e suportam auto-negociação 10/100/1000M.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/16.jpg" alt="Image" width={800} height="auto" /></p>

Os nomes dos dispositivos de rede Linux são mapeados para as portas Ethernet físicas conforme mostrado abaixo. Ao visualizar os conectores Ethernet na mesma direção da imagem, o mapeamento da esquerda para a direita é `eth4`, `eth2`, `eth1`, `eth0` e `eth3`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/jetson/rugged-ethernet-Interface.png" alt="Mapping between Linux Ethernet device names and physical ports on reComputer Rugged J401" width={900} height="auto" /></p>

| Posição da porta física | Nome do dispositivo Linux |
| :--- | :--- |
| Primeira da esquerda | `eth4` |
| Segunda da esquerda | `eth2` |
| Centro | `eth1` |
| Segunda da direita | `eth0` |
| Primeira da direita | `eth3` |

Use `ethtool` para verificar a largura de banda negociada e o status do link físico de cada porta Ethernet. Instale-o primeiro se o comando não estiver disponível:

```bash
sudo apt update
sudo apt install -y ethtool
```

Execute o seguinte comando para exibir a velocidade, modo de duplex, status de auto-negociação e estado do link para todas as cinco interfaces Ethernet físicas:

```bash
for interface in eth0 eth1 eth2 eth3 eth4; do
  echo "=== ${interface} ==="
  sudo ethtool "${interface}" | grep -E 'Speed:|Duplex:|Auto-negotiation:|Link detected:'
done
```

:::note
`Speed` mostra a largura de banda de link negociada, como `1000Mb/s`; `Duplex` normalmente deve indicar `Full`; e `Link detected: yes` confirma que a porta física correspondente tem uma conexão ativa. Uma porta desconectada pode indicar `Speed: Unknown!` e `Link detected: no`.
:::

## Instruções de Uso

### Conexão de Hardware
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/poe_connect.png" alt="" />
</div>

### Ativando a Saída PoE

As quatro portas PSE (J36–J39) são alimentadas por um controlador PSE on-board que é **desativado por padrão**. Nada em um sistema padrão o liga, portanto uma câmera conectada em J36–J39 permanece sem alimentação até que a linha de habilitação de energia do PSE seja colocada em nível alto **e mantida em nível alto**.

| Sinal | GPIO | Direção | Significado |
| --- | --- | --- | --- |
| `PSE_PWR_EN` | `gpiochip2` line 15 | output | colocar em nível alto para ligar a saída PSE |
| `PSE_PG` | `gpiochip2` line 0 | input | `1` = energia PSE ok |
| `PSE_INTB` | `gpiochip2` line 1 | input | `0` = sem falha |

Instale as ferramentas de GPIO se estiverem ausentes, depois ative a saída e mantenha-a sustentada:

```bash
sudo apt-get install -y gpiod     # only if gpioset/gpioget are not already present

# Set PSE_PWR_EN high and keep it high.
# -m signal  : maintain the level until the process receives SIGINT/SIGTERM
# setsid + & : detach it from the terminal so the hold survives the SSH session
sudo setsid gpioset -m signal 2 15=1 >/dev/null 2>&1 &

# Confirm the hold is alive
ps aux | grep "[g]pioset -m signal 2 15=1"

# Confirm the controller reports power good -> expected output: "1 0"
sudo gpioget gpiochip2 0 1
```

**Saída esperada:**

```text
1 0
```

`1 0` significa `PSE_PG=1` (energia ok) e `PSE_INTB=0` (sem falha). Se `PSE_PG` permanecer `0`, nenhuma energia está sendo fornecida: verifique o cabo e o próprio requisito de energia da câmera (802.3af permite 15,4 W por porta). Se `PSE_INTB` indicar `1`, o controlador travou uma falha — remova a carga, desligue e ligue novamente a alimentação e verifique de novo.

**Importante:** o nível só é mantido enquanto o processo `gpioset` estiver ativo. Uma linha GPIO requisitada através do dispositivo de caractere retorna ao seu estado padrão quando o último processo que a mantém é encerrado — `gpioset --help` declara isso explicitamente — portanto executar o comando e deixá-lo retornar **não** mantém o PSE ligado. Após uma reinicialização, ou se o processo for encerrado, as câmeras perdem energia e o link cai.

#### Mantendo o PSE Ligado Após Reinicializações (Opcional)

Empacote o mesmo hold em uma unidade systemd para que seja aplicado a cada boot e reiniciado automaticamente se algum dia for encerrado:

```bash
sudo tee /etc/systemd/system/poe-pse-hold.service >/dev/null <<'EOF'
[Unit]
Description=Hold PoE PSE power enable (PSE_PWR_EN gpio2/15)

[Service]
Type=simple
ExecStart=/usr/bin/gpioset -m signal 2 15=1
Restart=on-failure
RestartSec=2

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now poe-pse-hold
systemctl status poe-pse-hold --no-pager
```

`Type=simple` mais `Restart=on-failure` é o que torna isto um *hold* em vez de um comando one-shot: o systemd mantém o processo — e, portanto, o nível do GPIO — ativo.

### Colocando Duas Câmeras PoE em Operação

Com a saída PSE ativada, duas câmeras podem ser alimentadas e acessadas sem qualquer injetor PoE externo. Colocá-las em operação manualmente requer três etapas.

**Etapa 1.** Encontre as portas que realmente possuem uma câmera conectada. As cinco portas Gigabit são enumeradas como `eth0`–`eth4`; leia o sinalizador de portadora (carrier) em vez de presumir qual índice pertence a qual conector:

```bash
for i in eth0 eth1 eth2 eth3 eth4; do
  echo "$i carrier=$(cat /sys/class/net/$i/carrier 2>/dev/null) speed=$(cat /sys/class/net/$i/speed 2>/dev/null)"
done
```

**Etapa 2.** Deixe as câmeras terminarem de inicializar (30–60 s após a energização do PSE), depois coloque a porta do Jetson na mesma sub-rede de cada câmera:

```bash
sleep 45

sudo ip link set eth1 up
sudo ip addr add 192.168.10.100/24 dev eth1     # camera A is 192.168.10.20
sudo ip link set eth2 up
sudo ip addr add 192.168.20.100/24 dev eth2       # camera B is 192.168.20.10
```

**Etapa 3.** Verifique os links e as duas câmeras:

```bash
ping -c2 -W1 192.168.10.20
ping -c2 -W1 192.168.20.10
ip -br addr show eth1
ip -br addr show eth2
```

**Saída esperada:** ambos os pings indicam `0% packet loss`, e cada porta mostra `UP` com o endereço que você atribuiu:

```text
eth1             UP             192.168.10.100/24
eth2             UP             192.168.20.100/24
```

Observações:

- Cada câmera mantém o endereço com o qual foi configurada. Se você não souber qual é, coloque a porta na sub-rede em que a câmera deveria estar e procure por ela com um ping sweep.
- Uma porta que permanece em `carrier=0` enquanto `PSE_PG=1` significa que a câmera não está consumindo energia ou que o conector à prova d'água não está totalmente encaixado.
- Os endereços acima são exemplos retirados de uma configuração com duas câmeras; use as sub-redes das suas próprias câmeras. `ip addr add` não é persistente entre reinicializações — configure a porta com o NetworkManager ou com o `systemd-networkd` se ela precisar sobreviver a um reinício.

```bash
# find an unknown camera on a port (example subnet)
for ip in $(seq 2 254); do ping -c1 -W1 192.168.10.$ip >/dev/null 2>&1 && echo "192.168.10.$ip is up"; done
```

### Pré-visualização Ao Vivo com Duas Câmeras

Ambos os streams RTSP podem ser exibidos ao mesmo tempo, cada um em sua própria janela GStreamer. Use o caminho GPU/EGL para a primeira janela e o caminho X11/Xv para a segunda: dois sinks baseados em EGL executando ao mesmo tempo podem travar o display EGL nesta plataforma.

```bash
# Window A - GPU/EGL path
nohup env DISPLAY=:0 XAUTHORITY=/home/seeed/.Xauthority gst-launch-1.0 \
  rtspsrc location="rtsp://<user>:<password>@192.168.10.20:554/" protocols=tcp latency=200 ! \
  rtph265depay ! h265parse ! nvv4l2decoder ! \
  nvvidconv ! "video/x-raw(memory:NVMM),width=1152,height=648" ! \
  nvegltransform ! nveglglessink sync=false > /tmp/camA_disp.log 2>&1 &

# Window B - X11/Xv path
nohup env DISPLAY=:0 XAUTHORITY=/home/seeed/.Xauthority gst-launch-1.0 \
  rtspsrc location="rtsp://<user>:<password>@192.168.20.10:554/" protocols=tcp latency=200 ! \
  rtph265depay ! h265parse ! nvv4l2decoder ! \
  nvvidconv ! "video/x-raw,width=1280,height=720" ! \
  xvimagesink sync=false > /tmp/camB_disp.log 2>&1 &
```

- Substitua `<user>:<password>` pelas credenciais da sua própria câmera e os endereços IP pelos que você verificou acima.
- `DISPLAY=:0` e `XAUTHORITY=/home/seeed/.Xauthority` são necessários quando os comandos são executados via SSH; ajuste o caminho se o seu usuário de desktop não for `seeed`. Executá-los a partir de um terminal dentro da sessão de desktop do JetPack não precisa de nenhum dos dois.
- `protocols=tcp` é usado porque RTSP sobre UDP costuma ser bloqueado ou apresentar perdas em redes industriais, e `latency=200` fornece ao stream um buffer de jitter de 200 ms.
- As câmeras testadas aqui transmitem em **H.265**. Verifique a sua própria câmera e troque o par depayloader/parser se ela usar H.264.
- Os primeiros frames aparecem após alguns segundos (handshake RTSP, aquecimento do decodificador e intervalo de keyframe da câmera). Se uma janela permanecer preta, leia `/tmp/camA_disp.log` ou `/tmp/camB_disp.log`.
- Pare a pré-visualização com `pkill -f "gst-launch-1.0.*rtspsrc"`, ou `kill %1 %2` se ambas tiverem sido iniciadas a partir do mesmo shell.

Para ler o codec de um stream:

```bash
timeout 20 gst-launch-1.0 -v rtspsrc location="rtsp://<user>:<password>@192.168.10.20:554/" \
  protocols=tcp latency=200 ! fakesink 2>&1 | grep -o "encoding-name=(string)H26[45]" | head -1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/rugged_poe.png" alt="" />
</div>

Para uma câmera H.264 use `rtph264depay ! h264parse` em vez de `rtph265depay ! h265parse`; o restante do pipeline permanece inalterado.

## USB

O reComputer Rugged J401 oferece 4 portas USB 3.2 Type-A (por meio de um hub interno USB 3.1 Gen1, suportando taxas de dados de até 5 Gbps para conexão de periféricos de alta velocidade, dispositivos de armazenamento ou câmeras) e 1 porta USB 2.0 Type-C de depuração (que funciona como um console serial para acessar logs do sistema, depurar problemas de boot e realizar atualizações de firmware).

### Teste de Velocidade USB-A

Crie um script para testar a velocidade do dispositivo USB:

```Bash
vim test_usb.sh
```

Cole o seguinte conteúdo:

```Bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF
```

Pressione Esc para sair do modo Insert, depois digite `:w` e pressione Enter para salvar o script e, em seguida, saia do processo.

Torne o script executável e teste:

```Bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/17.png" alt="Image" width={800} height="auto" /></p>

### Porta USB 2.0 Type-C

Usando esta porta serial, por meio do cabo de dados USB-C, você pode monitorar as informações de depuração de entrada e saída no PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/18.jpg" alt="Image" width={400} height="auto" /></p>

Instale o Silicon Labs CP210x Universal Windows VCP Driver no Windows.

No Gerenciador de Dispositivos, localize e confirme a porta COM atribuída ao dispositivo serial

(COM8 na captura de tela).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/19.png" alt="Image" width={800} height="auto" /></p>

Execute o seguinte comando no PowerShell：

```PowerShell
#Choose your own serial port 
python -m serial.tools.miniterm COM8 115200
```

Faça login com nome de usuário e senha.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/20.png" alt="Image" width={800} height="auto" /></p>

## RTC

O reComputer Rugged J401 inclui um RTC de hardware com bateria de backup para manter a hora com precisão. Ele é compatível com baterias tipo moeda CR1220 e CR1225. 

### Conexão de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/21.jpg" alt="Image" width={400} height="auto" /></p>

### Instruções de uso

**Passo 1.** Conecte uma bateria de RTC conforme mencionado acima.

**Passo 2.** Ligue o reComputer Rugged J401.

**Passo 3.** No Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede via cabo Ethernet e selecione **Automatic Date & Time** para obter a data/hora automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/22.png" alt="Image" width={800} height="auto" /></p>

Se você não tiver se conectado à internet via Ethernet, pode definir manualmente a data/hora aqui.

**Passo 4.** Abra uma janela de terminal e execute o comando abaixo para verificar a hora do relógio de hardware:

```Bash
cat /sys/devices/platform/bpmp/bpmp:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Passo 5.** Desconecte a conexão de rede e reinicie o dispositivo. Você verá que o sistema perdeu a alimentação, mas o horário ainda funciona normalmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/23.png" alt="Image" width={800} height="auto" /></p>

## CAN

O módulo NVIDIA Jetson Orin Nano/NX fornece apenas um controlador CAN nativo ([Controller Area Network (CAN) — NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html)). Para obter uma segunda interface CAN, é necessário um controlador CAN externo, como o MCP2518FDT-E. Para ativar a segunda porta CAN, carregue o driver com `sudo modprobe mttcan`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-1.jpg" alt="Image" width={800} height="auto" /></p>

### Instruções de uso

#### Teste USB-CAN

Use um adaptador USB-CAN para verificar a comunicação CAN da seguinte forma.

:::note
Adaptadores USB-CAN geralmente incluem um resistor de terminação embutido.

- Quando `CAN0_120R_EN_3V3=1`, o resistor de terminação de 120 Ω onboard do CAN0 é desconectado.
- Quando `CAN0_120R_EN_3V3=0`, o resistor de terminação de 120 Ω onboard do CAN0 é conectado.

A mesma lógica se aplica ao pino de controle de terminação do CAN1.
:::

##### Carregar o driver e configurar a interface

```Bash
# Load the driver to bring up the second CAN port
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up

# Disconnect the onboard 120 Ω termination resistors
# because the USB-CAN adapter already provides termination
sudo gpioset -m wait gpiochip2 2=1 3=1
```

##### Monitorar e enviar dados

```Bash
# Monitor data
candump can0 &
candump can1 &

# Send data
cansend can0 123#abcdabcd
```

Recepção e transmissão em CAN0:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-2.png" alt="Image" width={800} height="auto" /></p>

Transmissão em CAN1:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-3.png" alt="Image" width={800} height="auto" /></p>

#### Teste de loopback CAN

Você também pode conectar CAN0 e CAN1 juntos para um teste de loopback em nível de placa. Curto-circuite fisicamente os dois barramentos CAN (`CAN0_H` com `CAN1_H`, e `CAN0_L` com `CAN1_L`), ative os resistores de terminação de 120 Ω onboard em ambos os lados e, em seguida, verifique a comunicação bidirecional entre as duas interfaces.

Abra três terminais e execute os seguintes comandos.

**Janela 1: configurar e testar CAN0**

```Bash
sudo modprobe mttcan
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 250000
sudo ip link set can0 up

# Send frames from can0
cangen can0

# Receive frames on can0
candump can0
```

**Janela 2: configurar e testar CAN1**

```Bash
sudo modprobe mttcan
sudo ip link set can1 down
sudo ip link set can1 type can bitrate 250000
sudo ip link set can1 up

# Send frames from can1
cangen can1

# Receive frames on can1
candump can1
```

**Janela 3: ativar resistores de terminação e verificar contadores de link**

```Bash
# Enable the onboard 120 Ω termination resistors on both CAN ports
gpioset -m wait gpiochip2 2=0 3=0

# Check low-level TX/RX counters
ip -d -s link show can0
ip -d -s link show can1
```

Se a fiação e a terminação estiverem corretas, quadros gerados em uma interface devem ser recebidos na outra interface, e os contadores de TX/RX devem aumentar de forma correspondente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/can-4.png" alt="Image" width={800} height="auto" /></p>

## DI/DO

As interfaces DI/DO do reComputer Rugged J401 são integradas no conector J47 2x10P, compartilhando a interface com as interfaces CAN. Elas suportam 2 canais de entrada digital e 2 canais de saída digital, com transmissão de sinal estável e adaptação de tensão em nível industrial, adequadas para conectar sensores digitais, relés e outros dispositivos periféricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/24.png" alt="Image" width={500} height="auto" /></p>

### Conexão de hardware

Os pinos DI/DO correspondentes na interface M12 são mostrados na figura abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/25.png" alt="Image" width={500} height="auto" /></p>

Canais de Entrada Digital (DI) / Saída Digital (DO)

### Instruções de uso

#### Operação de Saída Digital (DO)

As interfaces DO adotam saída de dreno aberto. Você pode definir o nível de saída (alto/baixo) por meio de comandos para controlar periféricos como relés e LEDs.

Execute o seguinte comando para habilitar o canal DO (saída de 12 V, alimentado pelo resistor de pull-up externo e pela fonte de alimentação de 12 V):

```Markdown
# Enable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=1

# Enable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=1
```

Execute o seguinte comando para desabilitar o canal DO (saída de ~0 V):

```PowerShell
# Disable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=0

# Disable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=0
```

DO antes de puxar para alto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/26.png" alt="Image" width={800} height="auto" /></p>

DO depois de puxar para alto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/27.png" alt="Image" width={800} height="auto" /></p>

#### **Operação de Entrada Digital (DI)**

Use o comando `gpioget` para ler o nível de entrada do canal DI (valor de retorno `1` = nível alto, `0` = nível baixo) e obter o status dos dispositivos periféricos.

```PowerShell
# Read DI_12V_1 (gpiochip0 105) status
gpioget gpiochip0 105

# Read DI_12V_2 (gpiochip0 144) status
gpioget gpiochip0 144
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/28.png" alt="Image" width={400} height="auto" /></p>



## UART

O reComputer Rugged J401 está equipado com uma interface UART independente (UART1) que suporta modos de comunicação RS232, RS422 e RS485, com transmissão de sinal estável e ampla compatibilidade com dispositivos periféricos.

### Conexão de hardware

Canais da interface UART

Alterne entre os modos RS232, RS485 e RS422 alternando a chave SW3.

Observação: Quando a chave é pressionada (ON), o bit é 0; quando não está pressionada, o bit é 1

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/29.png" alt="Image" width={500} height="auto" /></p>

|Mode_0|Mode_1|Mode_2|Modo|Status|
|---|---|---|---|---|
|0|0|0|RS-422 Full Duplex|1T/1R RS-422|
|0|0|1|RS-232 Puro|3T/5R RS-232|
|0|1|0|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE <br />Ativo em nível baixo|
|0|1|1|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE Ativo em nível alto|
|1|0|0|RS-422 Full Duplex|RS-422 com resistor de terminação|
|1|0|1|RS-232|1T/1R RS-232 coexiste com aplicação RS485 sem necessidade de chave de barramento (para uso especial)|
|1|1|0|RS-485|1T/1R RS-485 com resistor de terminação, TX ENABLE Ativo em nível baixo|
|1|1|1|Desligado|Todos os pinos de I/O em alta impedância|



## SPI

### Conexão de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/30.jpg" alt="Image" width={800} height="auto" /></p>

### Instruções de uso

Use fios Dupont para conectar os pinos centrais do canal SPI de destino (tomando /dev/spidev0.0 como exemplo): conecte o pino MOSI ao pino MISO correspondente (realizando transmissão/recepção de dados em loopback).

O diagrama de fiação é o seguinte:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/31.jpg" alt="Image" width={500} height="auto" /></p>

**Etapa 1: Carregar o módulo de kernel SPI (pré-requisito)**

Antes de operar a interface SPI, certifique-se de que o módulo de kernel `spidev` esteja carregado (o sistema padrão pode pré-carregá-lo, mas é recomendável verificar manualmente):

```Bash
sudo modprobe spidev
```

Se o comando for executado sem mensagens de erro, significa que o módulo foi carregado com sucesso; se o módulo já estiver carregado, o comando não retornará nenhuma informação, o que é um fenômeno normal.

**Etapa 2: Ver os nós de dispositivo SPI**

Digite o seguinte comando no terminal para visualizar o nome do dispositivo mapeado pela interface SPI do reComputer Rugged J401:

```Bash
ls /dev/spidev*
```

Se nenhum nó de dispositivo for exibido, significa que o módulo `spidev` não foi carregado com sucesso. Execute novamente `sudo modprobe spidev` e verifique o log do sistema para solução de problemas.

**Etapa 3: Obter e compilar o código de teste SPI**

Obtenha o código de teste `spidev-test` do GitHub e compile-o:

```Bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Etapa 4: Executar o programa de teste SPI**

Digite o seguinte comando no terminal para executar o programa de teste SPI (tomando `/dev/spidev2.0` como exemplo):

```Bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000 -p "Hello SPI"
```

**Etapa 5: Verificar o resultado do teste**

Após executar o comando de teste, você pode observar no terminal o status de transmissão e recepção de dados da interface SPI0.0. A saída principal é a seguinte:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/32.png" alt="Image" width={800} height="auto" /></p>

> Padrão-chave de avaliação: os dados TX (transmitidos) são consistentes com os dados RX (recebidos), indicando que o teste de loopback SPI foi bem-sucedido e que a função da interface SPI está normal.
> 
> 

## **I2C**

O Rugged J401 fornece uma interface I2C por meio do conector J8 de 2x10 pinos, permitindo a fácil conexão de sensores e periféricos para expansão do sistema.

### **Conexão de hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/33.png" alt="Image" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/34.jpg" alt="Image" width={500} height="auto" /></p>

Conecte seu dispositivo I2C à interface I2C na placa carrier:

- Ground -> Ground (Pino 1)

- SDA -> SDA (Pino 16)

- SCL -> SCL (Pino 14)

- VCC -> 3V3 (Pino 20)

### **Instruções de uso**

**Etapa 1.** Instale as ferramentas de teste I2C:

```Bash
sudo apt update
sudo apt-get install i2c-tools
```

**Etapa 2.** Visualize os mapeamentos do barramento I2C:

```Bash
i2cdetect -l
```

**Etapa 3.** Faça a varredura de dispositivos no barramento I2C:

```Bash
sudo i2cdetect -y -r 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/35.png" alt="Image" width={500} height="auto" /></p>



## Recursos

- [reComputer Rugged J40 Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf) 
- [Esquemático da Carrier Board](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf)
- [Esquemático da PSE Board](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf)
- [Arquivo 3D](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp)
- [Código-fonte do Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Comparação de dispositivos NVIDIA Jetson](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)



## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
