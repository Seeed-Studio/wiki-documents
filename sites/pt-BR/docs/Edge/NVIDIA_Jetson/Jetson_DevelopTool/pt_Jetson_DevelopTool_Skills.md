---
description: Use o módulo Skills no Seeed Jetson DevelopTool para executar mais de 50 scripts de automação integrados para drivers, frameworks de IA e ajuste de sistema no seu dispositivo Jetson.
title: Skills
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - Skills
  - automation
  - OpenClaw
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_skills
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/jetson_developtool_skills/
---

O módulo **Skills** fornece mais de 50 scripts de automação integrados que lidam com tarefas comuns de configuração e ajuste do Jetson — desde a instalação de drivers até a implantação de frameworks de IA — com um único clique.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-skills.png" style={{width:800, height:'auto'}}/></div>

## Categorias de Skills

### Drivers e Correções
| Skill | Description |
|-------|-------------|
| USB-WiFi (88x2bu) | Instala o driver para adaptadores Wi-Fi RTL88x2BU |
| 5G Module Support | Configura a conectividade de módulos celulares 5G |
| Bluetooth Conflict Fix | Resolve problemas comuns de coexistência entre Bluetooth e Wi-Fi |
| NVMe Boot | Configura o sistema para inicializar a partir de SSD NVMe |
| Docker Cleanup | Remove imagens e contêineres Docker não utilizados para liberar espaço |

### IA / LLM
| Skill | Description |
|-------|-------------|
| PyTorch (Jetson) | Instala o wheel do PyTorch otimizado pela NVIDIA para JetPack |
| Ollama | Instala o mecanismo de inferência LLM Ollama |
| DeepSeek | Implanta modelos DeepSeek no Jetson |
| Qwen2 | Instala o LLM Qwen2 com otimizações para Jetson |
| LeRobot | Configura o Hugging Face LeRobot para IA incorporada |
| vLLM | Instala o servidor de inferência vLLM de alta taxa de transferência |

### Visão / YOLO
| Skill | Description |
|-------|-------------|
| YOLOv8 | Instala o Ultralytics YOLOv8 com exportação para TensorRT |
| DeepStream | Configura o NVIDIA DeepStream SDK |
| NVBLOX | Instala o NVBLOX para reconstrução de cena 3D |
| Depth Estimation | Configura o pipeline de estimativa de profundidade |

### Rede e Acesso Remoto
| Skill | Description |
|-------|-------------|
| VS Code Server | Instala o code-server para IDE via navegador |
| VNC Server | Configura o desktop remoto noVNC |
| SSH Key Setup | Configura autenticação SSH sem senha com chave |
| Proxy Config | Configura proxy HTTP/HTTPS em todo o sistema |

### Ajuste de Sistema
| Skill | Description |
|-------|-------------|
| Max Performance Mode | Define o Jetson para velocidades máximas de clock de CPU/GPU (`nvpmodel`) |
| Swap Config | Cria ou redimensiona o espaço de swap |
| Fan Control | Configura a curva da ventoinha e o perfil de refrigeração |
| Cache Cleanup | Limpa caches de pacotes e do pip para recuperar espaço em disco |

## Executando uma Skill

1. Conecte-se ao seu dispositivo Jetson.
2. Abra a aba **Skills**.
3. Navegue por categoria ou pesquise por palavra-chave.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-header.png" style={{width:800, height:'auto'}}/></div>

4. Clique em **Run** na skill desejada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-cards.png" style={{width:800, height:'auto'}}/></div>

5. Uma janela de log mostra a saída da execução em tempo real.

## Skills da Comunidade (OpenClaw)

As skills usam o formato [OpenClaw](https://github.com/Seeed-Studio/openclaw). Você pode adicionar suas próprias skills personalizadas colocando-as no diretório `skills/openclaw/` — a ferramenta as carrega automaticamente na inicialização.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
