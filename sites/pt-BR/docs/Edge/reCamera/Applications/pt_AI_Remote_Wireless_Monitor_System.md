---
title: Sistema de Monitoramento Remoto Sem Fio com IA e Wifi HaLow
description: Esta página wiki apresenta uma demo de Sistema de Monitoramento Remoto Sem Fio com IA e Wifi Halow. Um guia passo a passo para construir o próprio sistema do usuário.
keywords:
  - Wifi Halow
  - reCamera
  - detecção de borda com IA
slug: /ai_remote_wireless_monitor_system
sku: 102991897, 110070108
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 2
last_update:
  date: 2025-11-19
  author: John Xiang
createdAt: '2025-11-21'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/ai_remote_wireless_monitor_system/
---

# Sistema de monitoramento remoto sem fio com IA baseado em reCamera e Wifi Halow

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/6.gif" /></div>

Se você é um entusiasta de atividades ao ar livre, é frequentemente incomodado pela falta de rede na natureza, pela cobertura limitada do Wi-Fi tradicional e pela incapacidade da câmera de transmitir imagens em tempo real a longas distâncias? Por meio deste Wiki, você pode implementar seu próprio **sistema de monitoramento remoto sem fio com IA**, baseado na **série reCamera** e no módulo de transmissão de imagem **Wifi Halow**. Claro, você pode ter mais imaginação, incluindo, mas não se limitando a:

- Você quer monitoramento sem fio para toda a sua propriedade, mas sem necessidade de cabeamento ou roteadores, com IA embarcada detectando atividades suspeitas.

- Você tem um caminhão e quer detectar qualquer pessoa suspeita próxima ao veículo, mas a rede é instável o ano todo e não consegue enviar vídeo em tempo real ou câmeras comuns precisam depender da nuvem.

- Quando você estiver explorando a floresta, quer receber em qualquer momento as imagens da câmera fixa do acampamento para identificar se há ursos ou outros animais perigosos, mas a distância de comunicação sem fio comum é muito curta.

**Então por que a reCamera e o Wifi Halow conseguem viabilizar o sistema?** Em primeiro lugar, a reCamera fornece IA na borda com poder de computação de 1 Tops. Assim, ela pode executar IA dentro do dispositivo sem depender de outro dispositivo de borda.

Ela também se integra ao Node-RED e torna o processo de desenvolvimento muito conveniente e eficiente. Se você quiser que `rtsp` envie fluxo ou usar `WebSocket` para enviar dados, você só precisa arrastar o node para implementar, e não precisa construir um grande número de programas do zero. Consulte o link para mais detalhes: [Node-RED Tutorial on reCamera](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_node-red/)

Aqui está um exemplo de desenvolvimento com Node-RED: basta simplesmente arrastar 3 nodes para construir um fluxo de trabalho de visão com IA:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_1.png" /></div>

Em termos de Wi-Fi HaLow, é uma tecnologia sem fio de baixa frequência projetada para Internet das Coisas, oferecendo as vantagens de longo alcance, baixo consumo de energia e alta largura de banda. Na faixa de frequência de 902–928 MHz, pode atingir uma taxa máxima de transmissão de aproximadamente 16 Mbps sob uma largura de banda de 8 MHz, com distância de comunicação de até 1 km.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.png" /></div>

Comparado ao Wi-Fi tradicional de 2,4G/5G, o HaLow oferece maior penetração e cobertura mais ampla; e em comparação com outros métodos de comunicação de longa distância, como LoRa e Sub-GHz, o HaLow oferece maior largura de banda, capaz de suportar a transmissão de vários tipos de mídia, incluindo texto, áudio, imagens e até fluxos de vídeo simultaneamente.

| Característica | Wi-Fi (2.4/5GHz) | **Wi-Fi HaLow (802.11ah)** | LoRaWAN |
|---------|------------------|-----------------------------|----------|
| Faixa de frequência | 2.4GHz / 5GHz | **Sub-GHz (902–928MHz)** | Sub-GHz (por exemplo, 868/915MHz) |
| Alcance de cobertura | 50–100 m | **Até ~1 km** | 2–15 km (dependendo do ambiente) |
| Capacidade de penetração | Média | **Forte (melhor penetração de paredes)** | Muito forte |
| Taxa de dados típica | Centenas de Mbps a Gbps | **Até ~16 Mbps (canal de 8 MHz)** | Muito baixa (0,3–50 kbps) |
| Latência | Baixa | **Baixa (suporta imagens/vídeo)** | Alta (segundos) |
| Consumo de energia | Médio–Alto | **Menor que o Wi-Fi tradicional** | Muito baixo|
| Cenários adequados | Redes locais, vídeo HD/4K | **Vídeo de longo alcance, monitoramento remoto, IoT industrial** | Sensoriamento de longa distância, telemetria, IoT de ultrabaixo consumo |

Portanto, este sistema pode reduzir a barreira técnica para você desenvolver um sistema de monitoramento inteligente, de modo que usuários não profissionais possam começar com facilidade. Especificamente, ele fornece:

1. **Modelo de IA na borda**: Não é necessário construir sua própria arquitetura de IA do zero, não precisa de uma equipe de IA, não precisa entender o algoritmo, use assim que ligar.

2. **Poder de computação integrado**: Não depende de notebooks, desktops ou outros dispositivos de computação de borda

3. **Ferramenta de programação gráfica Node-RED**: Não é necessário dominar programação de front-end e back-end, nem se aprofundar em rede de computadores, integração de sistemas e outros conhecimentos profissionais

4. **Conexão remota sem fio**: Não há necessidade de cabeamento complexo, nem de switches/roteadores

## Arquitetura geral

A estrutura do sistema é muito simples. Os dois módulos HaLow usam cabo Ethernet para conectar, respectivamente, a reCamera e o reTerminal. Depois disso, os dois dispositivos transmitem sem fio por meio do Wifi HaLow.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1.png" /></div>

## Preparação de hardware

Para concluir este projeto, você precisará de qualquer uma das três reCamera - reCamera 2002 Série, reCamera HQ PoE, reCamera Gimbal.

### 📦 reCamera

<table align="center">

<tbody><tr>

<th>Seeed Studio reCamera 2002W 8GB/64GB</th>

<th>Seeed Studio reCamera 2002HQ PoE 64GB</th>

<th>Seeed Studio reCamera Gimbal</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### reTerminal e Placas de Expansão

Se você quiser tornar a aplicação móvel, pode usar o reTerminal com uma placa de expansão dedicada, com duas baterias 18650 integradas.

:::note

O reTerminal aqui pode ser substituído por qualquer dispositivo de computação de borda com porta de rede e tela. Incluindo, mas não se limitando a, notebooks, desktops, placas de desenvolvimento, etc. Nós o encorajamos a testar mais. Apenas usamos o reTerminal para demonstração neste tutorial; o reTerminal é um dispositivo terminal Raspberry Pi CM4 com múltiplas interfaces, como portas de rede.

:::

<table align="center">

<tbody><tr>

<th>Seeed Studio reTerminal - 5'' HMI CM4108032</th>

<th>Seeed Studio reTerminal E10-1 Expansion Board(Optional)</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" style={{width:300, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-CM4108032-p-5712.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### Módulo de Transmissão de Imagem Wifi Halow

Este é o módulo Wifi Halow que usamos no projeto. A faixa de frequência de operação é 902-928 MHz, a largura de banda é 8 MHz, a velocidade máxima é 16 Mbps, a distância máxima de comunicação pode chegar a 1 km, e a potência de transmissão é 20 dBm. O dispositivo fornece interface de antena IPEX, porta de rede 10/100 Mbps, porta serial TTL (até 350 kbps), suporta criptografia WPA2-PSK AES, alimentação de 5V/12V e operação confiável de -20 °C a 70 °C, com consumo médio de energia de 1,5 W.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.jpg" /></div>

## Preparação de ferramentas

- **PC**: Usado para conectar a reCamera para depuração. As operações subsequentes precisam fazer login no back-end da reCamera e gravar o sistema operacional Raspberry Pi para o reTerminal. Ao mesmo tempo, a depuração será mais conveniente se houver problemas no PC, e todos os tipos de ferramentas de software estarão completos.

- **3 cabos USB-C**:

Uma conexão é da reCamera ao PC para fornecer energia, e os outros dois são usados para fornecer energia ao módulo Wifi Halow.

- **Teclado/Mouse**: Conectar ao reTerminal para depuração.

- **Fonte de alimentação USB-C 5V3A** Mesma fonte do Raspberry Pi 4/5 para alimentar o reTerminal. Link de compra: [5V3A USB-C Power Supply](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)

- **(Opcional) Fonte de Alimentação DC 12V** Usada para alimentar a placa de expansão do reTerminal. Link para compra: [12V DC Power Supply(US/EU)](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)

- **(Opcional) Suporte Triangular para reCamera** Link para compra: [Mini Tripod](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)

:::note

Você não precisa se preocupar com a fonte de alimentação do dispositivo, a fonte de alimentação do Raspberry Pi 4/5 pode ser usada pelo reTerminal ao mesmo tempo se você pretende usar a placa de expansão, apenas a fonte de alimentação DC 12V, não é mais necessário alimentação USB-C 5V3A, porque o reTerminal pode obter energia diretamente da placa de expansão.

:::

## Tutorial Detalhado: Configuração do Módulo Wifi HaLow da reCamera Configuração do reTerminal

A ideia geral de todo o sistema é permitir que a reCamera forme uma rede com o equipamento terminal por meio do Wifi HaLow. Primeiro, configure IP estático no equipamento terminal (reTerminal) e na reCamera, porque aplicações externas ou móveis não podem ter roteadores, não há serviço DHCP, e o IP precisa ser atribuído manualmente.

Depois que o IP é atribuído, esses dispositivos formam uma "rede local" e podem acessar uns aos outros por meio de IP. Neste momento, crie nós de stream e nós WebSocket na reCamera através do Node-RED, envie o fluxo de vídeo na forma de stream de push rtsp e envie o resultado de detecção do yolo via WebSocket.

Por fim, o fluxo de vídeo e os resultados de detecção de IA são acessados no dispositivo terminal, como o VLC Media Player no Windows/Linux. Este tutorial demonstrará como obter o stream de push rtsp através do ffplay no Linux.

### Fase 1: Configurar a reCamera

#### Passo 1.1 Fazer login na reCamera

Conecte a reCamera ao computador com um cabo USB-C. Leva algum tempo para iniciar o dispositivo logo após ser ligado. Depois de esperar 1–2 minutos, abra qualquer navegador da web e digite ** 192.68.42.1 ** para entrar no sistema da reCamera.

Você precisa configurar sua própria senha no primeiro login. Lembre-se de sua senha e use-a mais tarde. Depois de entrar no sistema da reCamera, você deverá ver esta página:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t2.png" /></div>

:::note

Se você não vir esta página, atualize o navegador.

Se o seu dispositivo já foi usado ou configurado antes, é possível pular diretamente para o Workspace. Neste momento, o site é: 'http:// 192.168.42.1/#/workspace' Por favor, pule para o próximo passo. De qualquer forma, basta entrar no Workspace.

Se a atualização ainda não resolver, redefina o dispositivo ou entre em contato com o suporte técnico para resolver.

:::

#### Passo 1.2 Configurar o nó da câmera

Clique no botão verde no canto inferior direito da página para entrar no Workspace.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3.png" /></div>

Exibição da página do Workspace

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_0.png" /></div>

Clique duas vezes no nó da câmera para entrar na página de configuração. Para garantir fluidez, configuramos o nó da câmera como **480P, 5 quadros**. Você pode tentar uma resolução ou taxa de quadros mais alta, mas a latência pode ser maior.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_1.png" /></div>

#### Passo 1.3 Configurar o nó de stream

Conforme mencionado acima, precisamos configurar o stream de push rtsp no Node-RED. Na lista de nós à esquerda, procure o nó 'stream' ou role a roda do mouse para baixo até o final para encontrar o nó Stream. Quanto ao método de configuração, consulte: [Node-Red Stream Node Configuration](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_node-red/#stream-node)Após a configuração, você deverá obter o seguinte resultado:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_3.png" /></div>

Siga totalmente o tutorial do Node-RED para garantir que sua saída seja para sscma, e o fluxo de vídeo final será enviado para: rtsp:// admin:admin@192.168.xxx.xxx:554/live, onde 192.168.xxx.xxx é o endereço IP estático da reCamera. O IP estático pode ser configurado livremente. 192.168.10.100 é usado para demonstração aqui.

#### Passo 1.4.1 Configurar o nó WebSocket

Para exibir os resultados detectados pelo yolo no equipamento terminal, precisamos enviar os resultados de detecção via WebSocket. O tipo de nó WebSocket deve ser configurado como 'connect' em vez de 'listen'.

Ao configurar o URL do nó WebSocket aqui, ele precisa ser configurado como ws://192.168.
nnn.nnn:9000 Na verdade, 192.168.nnn.nnn é o endereço IP estático do reTerminal ou de seu próprio outro equipamento terminal, não o endereço IP estático da reCamera acima. 192.168.10.3 é usado aqui para demonstração. O resultado final é o seguinte:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_5.png" /></div>

#### Passo 1.5. Entrar na página de configurações

Ou, na página do Workspace em que você acabou de modificar o Node RED, clique em "Setting" no canto superior esquerdo'

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t4_1.png" /></div>

> Figura 4: Quadro de Configurações do Workspace

#### Passo 1.6 Entrar no terminal da reCamera

Depois de entrar na página de configurações, selecione 'Terminal' para entrar na linha de comando da reCamera

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t5.png" /></div>

> Figura 5: Quadro de Terminal da Página de Configuração

Depois de clicar em Terminal, você precisa fazer login novamente, digite o nome de usuário: 'recamera' e, em seguida, digite a senha definida para usar o Terminal. o efeito é o seguinte. Se você esquecer sua senha, consulte o seguinte tutorial para redefinir o dispositivo: [reCamera Factory Reset](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#factory-reset)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t6.png" /></div>

> Figura 6: Efeito da página do Terminal após o login

#### Passo 1.7 Configurar IP Estático da reCamera

Na reCamera, precisamos configurar a rede através do sistema de rede tradicional do Linux (ifupdown). O método é muito simples. Só precisamos entrar no arquivo de configuração de rede e configurar a porta Ethernet na reCamera para o IP estático que você deseja: 192.168.xxx.xxx.xxx. Aqui eu configuro o IP estático

102.168.10.100 Primeiro, entre no arquivo de configuração de rede através do editor vi e digite o seguinte comando no terminal da reCamera:

```bash
sudo vi /etc/network/interfaces
```

Adicione no final do arquivo:

```bash
auto eth0
iface eth0 inet static
address 192.168.10.100
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_0.png" /></div>

Esse código define que a porta Ethernet da reCamera de configuração é IP estático 192.168.10.100, a máscara de sub-rede é 255.255.255.0 e o gateway é 192.168.10.1. Claro, você pode usar 192.168.3.xxx ou 192.168.42.xxx para configuração livre de IP específico. No entanto, certifique-se de que esteja no mesmo segmento de rede que o seu reTerminal ou equipamento terminal. Por exemplo, se a sua reCamera for 192.168.33, então o reTerminal precisa ser configurado como 192.168.33.nnn. Se o IP estático do reTerminal se tornar 192.168.32.nnn ou 192.168.34.nnn, não será possível realizar comunicação.

Depois de adicionar o código acima, digite ''':wq''' para sair do editor vi e voltar ao terminal da reCamera. Em seguida, digite '''sudo reboot ''' para reiniciar a reCamera.

:::note

Deve-se notar que, depois que o IP estático é configurado, a reCamera deve estar conectada ao PC com um cabo de rede. Ao mesmo tempo, o IP estático deve ser configurado no PC antes de fazer login novamente na reCamera. O IP estático recém-configurado da reCamera é usado ao fazer login. O Windows é usado para configurar o IP estático como demonstração aqui. Novamente, para todos os dispositivos configurados com IP estático, deve-se garantir que estejam no mesmo segmento de rede, como reCamera-192.168.10.100 e reTerminal-192.168.10.3, laptop (Windows)-192.168.10.2 Caso contrário, eles não poderão se comunicar entre si. A configuração de referência no Windows é a seguinte:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/tx.png" /></div>

:::

#### Passo 1.8 Verificar Configuração de IP Estático

Repita o passo 1.5 para retornar às Configurações da reCamera e verificar se o IP estático foi configurado com sucesso:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_1.png" /></div>

Ótimo, agora temos um IP estático configurado na reCamera, vamos prosseguir para a próxima fase

### Fase 2: Configurar o Módulo de Transmissão de Imagem Wifi HaLow

#### Passo 2.1 Definir o modo de trabalho dos dois módulos HaLow

Primeiro, defina um dos módulos Wifi HaLow para o modo AP e o outro para o modo STA. Não se preocupe se o módulo AT ou STA está conectado à reCamera/terminal. A ordem não é importante, mas é garantido que haja pelo menos um módulo em modo STA e um em modo AP.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t8.png" /></div>

#### Passo 2.2 Parear o Módulo HaLow

Agora pressione o botão de pareamento em ambos os módulos ao mesmo tempo:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t9.png" /></div>
Depois disso, o LED verde nos dois módulos piscará. Quando a piscada parar e o LED verde permanecer sempre aceso, o pareamento do módulo será bem-sucedido.

Muito bom! Você pareou com sucesso dois módulos Wifi HaLow, eles agora podem ser vistos como as duas pontas de um cabo de rede, podendo ser usados para conectar a reCamera e o equipamento terminal.

### Fase 3: Configurar Dispositivos Finais (reTerminal)

Agora vamos configurar o IP estático no reTerminal. Teoricamente, existem muitos métodos, como o NetworkManager. O NetworkManager é um daemon de gerenciamento de rede no sistema Linux, que automaticamente ajuda você a gerenciar todas as ferramentas de conexão de rede, como Wi-Fi/Ethernet/endereço IP/DHCP/hotspot/roteamento. Você pode tentar usar o NetworkManager. No entanto, para reduzir o custo de aprendizado, usamos o mesmo método da reCamera, configurando um endereço IP estático através de '/etc/network/interfaces.

:::note

Novamente, o reTerminal pode ser substituído por qualquer dispositivo de computação (de borda) com porta de rede e tela, incluindo, mas não se limitando a laptops, desktops, placas de desenvolvimento, etc. Para monitoramento em local fixo, podem ser usados laptops/desktops com Windows. Para implantação móvel, podem ser usados dispositivos finais baseados em Raspberry Pi com telas. Este tutorial usa a placa de expansão reTerminal reTerminal E10 (placa de expansão para alimentação externa). Você pode escolher sua própria fonte de alimentação.

:::

#### Etapa 3.1 Iniciar o reTerminal

O reTerminal vem de fábrica com o sistema, teoricamente você pode entrar diretamente no Raspbian. No entanto, se o LED verde no canto inferior esquerdo acender/piscar mas a tela permanecer preta após ligar, consulte o seguinte tutorial para regravar o sistema. Esta etapa requer depuração com monitor externo. [Tutorial de Inicialização do reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-with-drivers-from-seeed-to-emmc)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t10.jpg" /></div>

#### Etapa 3.2 Desativar o Serviço NetworkManager

Conecte o teclado e o mouse ao reTerminal e pressione **Ctrl Alt T** para abrir o terminal. Como o NetworkManager entra em conflito com o método acima, precisamos desativar o serviço NetworkManager. Execute no terminal do reTerminal:

```bash
sudo systemctl stop NetworkManager
sudo systemctl disable NetworkManager
```

#### Etapa 3.3 Configurar IP Estático do reTerminal

Assim como na etapa 1.7, no terminal do reTerminal:

```bash
sudo nano /etc/network/interfaces
```

Acesse o arquivo de configuração de rede e adicione o seguinte ao final do arquivo. Aqui o IP estático do reTerminal é definido como **192.168.10.3**:

```bash
auto eth0
iface eth0 inet static
address 192.168.10.3
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t11.jpg" /></div>

:::note

Se quiser reutilizar o NetworkManager no futuro, basta excluir as 4 linhas recém-adicionadas 'auto eth0' em '/etc/network/interfaces', totalizando 5 linhas.

Em seguida, execute:

```bash
sudo systemctl enable NetworkManager
sudo systemctl restart NetworkManager
```

:::

Salve com ctrl s, ctrl x e saia. Depois digite '''reboot''' para reiniciar o reTerminal.

#### Etapa 3.4 Verificar a Configuração de IP Estático

Volte ao terminal do reTerminal e execute o seguinte comando: '''ifconfig''' para verificar se o endereço IP estático foi configurado com sucesso.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t12.png" /></div>

Se você vir IP = **192.168.10.3** em 'eth0', significa que deu certo.

Perfeito! Todos os equipamentos estão configurados, agora você pode entrar na próxima fase :)

### Fase 4: Conectar e Reproduzir

Você se lembra que configuramos o nó de push de stream rtsp na etapa 1.2? Já existe um stream de vídeo rtsp em: '''rtsp:// admin:admin@192.168.xxx.xxx:554/live''' aqui '192.168.xxx.xxx' é o **IP estático da reCamera** que você configurou manualmente na etapa 1.6, não o IP estático do reTermnial. No meu caso, o stream rtsp de push correspondente é:

```
rtsp://admin:admin@192.168.10.100:554/live
```

Na verdade, você pode usar qualquer método de software para abrir o stream de vídeo, como o **VLC Player**.

No entanto, para facilitar o uso, usamos o **comando ffplay** no ffmpeg para abrir o stream de vídeo rtsp diretamente no terminal.

#### Etapa 4.1 Instalar a Placa de Expansão do reTerminal

Tutorial de referência: [Guia de Instalação do reTerminal E10](https://wiki.seeedstudio.com/pt-br/reTerminal_Mount_Options/)

Após instalar a placa de expansão, você pode usar a porta usbc no reTerminal para alimentar o módulo HaLow, e as duas portas usba podem ser conectadas ao mouse e ao teclado.

#### Etapa 4.2 Instalar o Módulo de Transmissão de Imagem Wifi HaLow

Instale os dois módulos de transmissão de imagem pareados na reCamera e no reTerminal

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_1.jpg" /></div>

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_2.jpg" /></div>

#### Etapa 4.3 Instalar ffmpeg e nmap no reTerminal

ffmpeg é usado para obter o stream de push rtsp, nmap é usado para listar. execute no terminal do reTerminal:

```bash
sudo apt install ffmpeg
sudo apt install nmap
```

#### Etapa 4.4 reproduzir o stream de vídeo rtsp

Execute o comando ffplay para obter o stream rtsp da reCamera (pertencente ao comando ffmpeg):

```bash
ffplay -rtsp_transport udp -max_delay 20000 -probesize 2M rtsp://admin:admin@192.168.10.100:554/live
```

Aqui está uma explicação dos parâmetros no comando ffplay:

-'-rtsp_transport udp': Especifica o uso do protocolo de transporte UDP, porque a reCamera usa streaming por UDP por padrão.

-'-max_delay 20000': Define o atraso máximo para 20 segundos para lidar com atrasos de rede.

-'-probesize 2M': Define o tamanho da sondagem para 2MB para aumentar a velocidade de reprodução do stream de vídeo.

-'rtsp:// admin:admin@192.168.10.100:554/live': Este é o endereço de ingestão rtsp da reCamera. Substitua pelo seu próprio endereço.

Neste momento, uma nova janela será exibida, o stream de vídeo rtsp será mostrado dentro dela, e ao clicar duas vezes na janela é possível reproduzir em tela cheia.

:::note
Como alternativa, você pode usar VLC Player ou GStreamer para abrir o stream de vídeo rtsp. Execute o seguinte comando no terminal do reTerminal para instalar o GStreamer:

```bash
sudo apt update
sudo apt install -y \
    gstreamer1.0-tools \
    gstreamer1.0-plugins-base \
    gstreamer1.0-plugins-good \
    gstreamer1.0-plugins-bad \
    gstreamer1.0-plugins-ugly \
    gstreamer1.0-libav \
    gstreamer1.0-rtsp \
    gstreamer1.0-x \
    gstreamer1.0-gl \
    gstreamer1.0-alsa \
    gstreamer1.0-pulseaudio

```

Em seguida, execute o comando para reproduzir o stream de vídeo rtsp:

```bash
gst-launch-1.0 rtspsrc location=rtsp://admin:admin@192.168.10.100:554/live latency=2000 ! rtph264depay ! h264parse ! avdec_h264 ! videoconvert ! autovideosink
```

:::
bus

#### Etapa 4.5 Monitorar Resultados do Teste Yolo

Pressione **Ctrl + Alt + T** para abrir um novo terminal no reTerminal. Iremos iniciar um servidor WebSocket para receber os resultados de detecção de IA. Execute o seguinte comando:

```bash
wscat -l 9000
```

Quando o servidor iniciar, ele mostrará:

```bash
Listening on port 9000 (press CTRL+C to quit)
```

Mantenha este terminal aberto para exibir os resultados de detecção enviados pela reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t15.jpg" /></div>
A imagem acima mostra o streaming RTSP via GStreamer e os resultados de detecção de IA em texto via WebSocket.

O terminal à esquerda demonstra os resultados da detecção:

```bash
< counts=person:1; person(682,359,1175,704)
< counts=person:1; person(649,359,1247,704)
< counts=person:1; person(678,359,1188,704)
< counts=person:1; person(652,359,1240,704)
< counts=person:1; person(656,359,1227,704)
< counts=person:1; person(648,359,1236,704)
< counts=person:1; person(648,359,1243,704)
< counts=person:1; person(650,359,1227,703)
< counts=person:1; person(652,359,1241,704)
< counts=person:1; person(646,359,1246,704)
< counts=person:1; person(647,359,1244,704)
< counts=person:1; person(653,359,1252,704)
< counts=person:1; person(650,359,1238,704)
```

**Parabéns! Você implementou seu próprio sistema remoto de detecção por IA.**

## Explore o que é Possível

Como mencionado no início, este projeto é apenas um exemplo simples de detecção remota por IA. Você pode expandi-lo para cenários mais complexos. Apresentaremos alguns exemplos aqui. Todos esses exemplos serão atualizados no Github posteriormente.

### Caso 1: Sistema de Alerta de Ursos em Acampamento Selvagem

Envie um modelo de detecção de ursos para a reCamera e implante o dispositivo em uma posição fixa em um acampamento na floresta para detectar possíveis intrusões de ursos. Você pode monitorar a área à distância através do reTerminal ou de outros dispositivos, ajudando a evitar chegar muito perto da vida selvagem e reduzindo o risco de perigo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/ta_1.jpg" /></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>
