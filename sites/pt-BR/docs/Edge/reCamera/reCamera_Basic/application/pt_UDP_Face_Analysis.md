---
description: Esta demonstração mostra como realizar detecção de rosto em tempo real, análise de atributos (idade/gênero/raça) e reconhecimento de emoções na reCamera, e então transmitir os resultados via UDP para um PC para exibição.
title: Análise de Rosto via UDP com reCamera
keywords:
  - reCamera
  - Detecção de Rosto
  - Idade Gênero Raça
  - Reconhecimento de Emoções
  - Transmissão UDP
  - Edge AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif
slug: /recamera_udp_face_analysis_bak
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899,108990119,108990120,E20245041001,100018917, 100041077, 100029708, 100074316
sidebar_position: 12
last_update:
  date: 04/30/2026
  author: Samuel
createdAt: '2026-04-30'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/pt-br/reCamera/reCamera_Basic/application/recamera_udp_face_analysis_bak/
---

# Análise de Rosto via UDP com reCamera

## Introdução

Esta demonstração mostra como construir um sistema de análise de rosto em tempo real usando a reCamera. O sistema realiza:

- **Detecção de Rosto**: Usando o modelo de detecção de rosto YOLO
- **Análise de Atributos**: Estimativa de idade, gênero e raça usando o modelo FairFace
- **Reconhecimento de Emoções**: Detecção de emoções em 7 classes
- **Transmissão UDP**: Envia quadros JPEG com metadados de detecção para o PC via UDP

O aplicativo em C++ é executado na reCamera e envia quadros de vídeo juntamente com os resultados de detecção (caixas delimitadoras, atributos) por meio de UDP. Um script receptor em Python executado no seu PC exibe o fluxo de vídeo anotado em tempo real.

**Principais recursos**:
- Detecção de rosto em tempo real com controle de limiar de confiança
- Análise de múltiplos atributos por rosto (gênero, idade, raça, emoção)
- Transmissão UDP eficiente com compactação JPEG
- Inferência com pulo de quadros para reduzir a carga de CPU/TPU
- Estatísticas de desempenho detalhadas

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif" /></div>

## Configuração da Demo

Para configurar esta demonstração, você precisa:

1. Fazer a cross-compilação do programa em C++ no seu PC
2. Executar o executável compilado na reCamera
3. Executar o script receptor em Python no seu PC

### 1. Compilar o Programa em C++

:::note
Antes de compilar esta solução, certifique-se de que você configurou o ambiente **ReCamera-OS** de acordo com a documentação principal do projeto.
:::

Defina as seguintes variáveis de ambiente para o ambiente de compilação do **ReCamera-OS** antes de executar `cmake`:

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Primeiro, certifique-se de ter os modelos necessários:
- `yolo_face.cvimodel` - modelo de detecção de rosto YOLO
- `age_gender_race.cvimodel` - modelo FairFace para idade/gênero/raça
- `emotion.cvimodel` - modelo de reconhecimento de emoções

Você pode baixar esses três arquivos de modelo a partir do [lançamento sscma-example-sg200x v1.0.1](https://github.com/RobotXTeam/sscma-example-sg200x/releases/tag/v1.0.1), ou treinar seus próprios modelos e então quantizá-los/convertê-los para o formato `.cvimodel`.

Navegue até o diretório da solução e compile:

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/face_udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
rm -rf build && mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

O executável compilado estará em: `build/face_udp`

:::note
O repositório inclui modelos pré-compilados na pasta da solução:
- `yolo-face_mixfp16.cvimodel`
- `age_gender_race_bf16.cvimodel`
- `emotion_bf16.cvimodel`
:::

### 2. Configurar a reCamera

:::warning
Antes de executar o programa em C++, você deve parar os serviços padrão do Node-RED, pois eles ocupam os recursos da câmera. Execute os seguintes comandos via SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. Executar o Executável na reCamera

Envie o executável compilado e os modelos para `/home/recamera/` na reCamera e então execute:

```bash
chmod +x face_udp
./face_udp <yolo_face.cvimodel> <age_gender_race.cvimodel> <emotion.cvimodel> [single|multi] [threshold] [skip] [udp_ip] [udp_port] [log_every_n_infer]
```

#### Parâmetros

| Parâmetro | Descrição | Padrão |
|-----------|-------------|---------|
| `yolo_face.cvimodel` | Modelo de detecção de rosto YOLO (obrigatório) | - |
| `age_gender_race.cvimodel` | Modelo FairFace (obrigatório) | - |
| `emotion.cvimodel` | Modelo de emoções (obrigatório) | - |
| `single\|multi` | Tipo de head YOLO | multi |
| `threshold` | Limiar de detecção | 0.5 (multi) / 0.7 (single) |
| `skip` | Inferência a cada N quadros | 3 (multi) / 1 (single) |
| `udp_ip` | Endereço IP do PC para UDP | - |
| `udp_port` | Número da porta UDP | - |
| `log_every_n_infer` | Imprimir log a cada N inferências | 20 |

#### Comandos de Exemplo

**Uso básico (sem transmissão UDP)**:
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bf16.cvimodel
```

**Com transmissão UDP**:
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bfpf16.cvimodel multi 0.5 3 192.168.31.100 5001
```

:::note
Lembre-se de substituir `192.168.31.100` pelo endereço IP real do seu PC na mesma rede da reCamera.
:::

### 4. Executar o Receptor em Python no PC

No seu PC, certifique-se de que o Python com as bibliotecas necessárias esteja instalado:

```bash
pip install opencv-python numpy
```

Navegue até o diretório da solução e execute:

```bash
cd sscma-example-sg200x/solutions/sesg-project/face_udp
python3 udp_receiver.py
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_show.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_demo.gif" /></div>

## Saída Esperada

### No Terminal da reCamera

O programa exibirá estatísticas de desempenho em tempo real a cada 2 segundos:

```
========== Performance Stats (Last 2 Seconds) ==========
Video FPS: 30.2 | UDP FPS: 9.8
Frames: 300 | Inferences: 100

Average YOLO Timing:
  Preprocess: 0.9 ms
  Inference:  35.5 ms
  Postprocess: 32.3 ms
  Total: 68.7 ms

Average Attribute/Emotion Overhead:
  mmap: 1.2 ms
  AGR: 45.3 ms/frame | 45.3 ms/face
  EMO: 12.1 ms/frame | 12.1 ms/face

UDP Send:
  avg_send: 2.1 ms | throughput: 850.5 kbps
======================================
```

### Na Janela do Receptor em Python

O PC exibirá uma janela mostrando:
- Fluxo de vídeo ao vivo com quadros JPEG
- Caixas delimitadoras de rosto (retângulos verdes)
- Rótulos de atributos no canto superior esquerdo:
  - Gênero (Masculino/Feminino)
  - Faixa etária
  - Classificação de raça
  - Emoção (angry/disgust/fear/happy/sad/surprise/neutral)



## Solução de Problemas

### Erro de Acesso à Câmera

Se você vir o erro "No camera":
- Certifique-se de que os serviços do Node-RED estejam parados (veja a Etapa 2 acima)
- Verifique a conexão da câmera

### Falha na Conexão UDP

Se o PC não receber dados:
- Verifique se o PC e a reCamera estão na mesma rede
- Verifique as configurações de firewall no PC
- Confirme se a porta UDP 5001 não está bloqueada
- Teste com `ping` entre os dispositivos

### Erro ao Carregar o Modelo

Se o modelo não carregar:
- Verifique se os arquivos de modelo foram enviados para `/home/recamera/`
- Verifique as permissões de arquivo com `ls -la`
- Certifique-se de que há espaço de armazenamento suficiente

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
