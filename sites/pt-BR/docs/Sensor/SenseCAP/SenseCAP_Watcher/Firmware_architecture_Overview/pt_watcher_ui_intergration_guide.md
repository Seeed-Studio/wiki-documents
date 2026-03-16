---
description: Apresenta como desenvolver seu próprio conjunto de UI para o Watcher, com a ajuda do SquareLine Studio e do LVGL.
title: Guia de Integração de UI do Watcher
image: https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.webp
slug: /watcher_ui_integration_guide
sidebar_position: 4
last_update:
  date: 11/5/2024
  author: Citric
createdAt: '2024-11-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_ui_integration_guide/
---

# Guia de Integração de UI do Watcher

## 1. **Estrutura dos Componentes de UI**

Neste tutorial, você aprenderá como integrar seu próprio design de UI e funções lógicas relacionadas no diretório `view`. Todos os designs de UI e funções lógicas serão colocados no diretório `view`, que contém os subdiretórios `ui` e `ui_manager`. Além disso, o diretório `view` inclui `view.c`, `view_alarm.c`, `view_image_preview.c`, `view_pages.c` e os arquivos de cabeçalho `.h` correspondentes. O framework específico é mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.png" style={{width:600, height:'auto'}}/></div>

- O subdiretório `ui` contém todos os designs de UI definidos pelo usuário. Neste projeto, a `ui` é gerada pela ferramenta Squareline.

- O subdiretório `ui_manager` contém animações personalizadas, gerenciamento de grupos de objetos e várias definições de callbacks de eventos.

- Os arquivos-fonte que começam com `view` definem páginas globais e funções de callback de eventos relacionadas.

- A UI interage com a camada APP enviando e ouvindo eventos.

:::tip
A leitura das definições dos módulos abaixo ajudará você a entender e usar todo o framework de UI. Se quiser compreender rapidamente a integração de UI, você pode pular para o Capítulo 6 para leitura de aplicação.
:::

## 2. **Gerenciamento de Grupos**

### 2.1 Visão Geral

O SenseCAP Watcher oferece suporte a dispositivos de entrada de tela sensível ao toque e encoder. Para sincronizar essas ações dos dispositivos de entrada e garantir a correção, é necessário o gerenciamento de grupos para manter o foco no objeto correto e evitar conflitos de eventos.

As funções de gerenciamento de grupos são implementadas nos seguintes arquivos:

- **pm.c**: Contém as implementações das funções.
- **pm.h**: Contém os protótipos de funções e definições de tipos.

### 2.2 Adicionando Objetos a um Grupo

```cpp
static void addObjToGroup(GroupInfo *groupInfo, lv_obj_t *objects[], int count);
```

Aqui, `groupInfo` é um ponteiro para a estrutura `GroupInfo` à qual os objetos serão adicionados, `objects` é o array de objetos a serem adicionados ao grupo, e `count` é o número de objetos no array.

**Uso:**

```cpp
// Define the objects to be added to the page
lv_obj_t *example_objects[] = {example_obj1, example_obj2, ...};
// Add the objects to the group structure variable
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 2.3 Navegação de Página e Gerenciamento de Objetos

```cpp
void lv_pm_open_page(lv_group_t *group, 
                      GroupInfo *groupInfo, 
                      pm_operation_t operation, 
                      lv_obj_t **target, 
                      lv_scr_load_anim_t fademode,
                      int spd, 
                      int delay, 
                      void (*target_init)(void));
```

**Parâmetros:**

- `group`: Ponteiro para o grupo LVGL.
- `groupInfo`: Ponteiro para a estrutura `GroupInfo` que contém os objetos da página.
- `operation`: A operação a ser executada (adicionar objetos ao grupo, nenhuma operação ou limpar o grupo).
- `target`: O objeto alvo da nova página.
- `fademode`: Modo de animação de carregamento da tela.
- `spd`: Velocidade da animação de carregamento da tela.
- `delay`: Atraso antes do início da animação de carregamento da tela.
- `target_init`: Função de inicialização para a tela alvo.

**Uso:**

```cpp
// Add the objects from the structure variable to the group and navigate to the corresponding page
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

### 2.4 Associando o Encoder ao Grupo

Crie um grupo, itere para obter os dispositivos de entrada e associe o encoder ao grupo para que o encoder possa controlar os objetos no grupo.

```cpp
void lv_pm_init(void)
{
  // Create a group
  g_main = lv_group_create();
  cur_drv = NULL;
  // Loop to get input devices
  while ((cur_drv = lv_indev_get_next(cur_drv)))
  {
    // Associate the encoder with the group when the input device is an encoder
    if (cur_drv->driver->type == LV_INDEV_TYPE_ENCODER)
    {
      lv_indev_set_group(cur_drv, g_main);
      break;
    }
  }
  // Define objects in different GroupInfo structure variables
  initGroup();
}
```

**Uso:**

```cpp
// Call in `view_init` to initialize the group and associate the encoder with the group
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);
  // Initialize UI
  ui_init();
  // Initialize the group and associate the encoder
  lv_pm_init();
  lvgl_port_unlock();
}
```

### 2.5 Imprimindo Objetos GroupInfo

```cpp
static void printGroup(GroupInfo *groupInfo);
```

Aqui, `groupInfo` é um ponteiro para a estrutura `GroupInfo` à qual os objetos serão adicionados. Observe que, antes de imprimir, você precisa definir o `user_data` para os objetos usando `lv_obj_set_user_data(example_obj, "example_obj_print")`.

**Uso:**

```cpp
printGroup(&group_page_example);
```

### 2.6 Exemplo de Uso

1. Defina uma variável `GroupInfo`

```cpp
GroupInfo group_page_example;
```

2. Inicialize os objetos em `initGroup()`

```cpp
lv_obj_t * example_objects[] = {example_obj1, example_obj2, ...};
```

3. Adicione objetos ao grupo

```cpp
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

4. Abra a página e adicione o grupo

```cpp
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

Seguindo estas etapas, você pode garantir que as entradas da tela sensível ao toque e do encoder operem de forma síncrona e correta em sua aplicação.

## 3. Alarme do Dispositivo

### 3.1 Visão Geral

Esta seção explica como integrar e usar os componentes de UI de alarme no seu Watcher. Ao compreender e usar as seguintes funções, você pode gerenciar o comportamento de alarme da UI do dispositivo.

A UI de alarme é implementada nos seguintes arquivos:

- **view_alarm.c**: Contém as implementações das funções.
- **view_alarm.h**: Contém os protótipos de funções e definições de tipos.

### 3.2 Inicializando a UI de Alarme

```cpp
int view_alarm_init(lv_obj_t *ui_screen);
```

`ui_screen` é um ponteiro para o objeto de tela usado para exibir os componentes de UI de alarme.

**Uso:**

```cpp
// Create alarm-related UI on the top layer
view_alarm_init(lv_layer_top());
```

### 3.3 Ligando a UI de Alarme

```cpp
int view_alarm_on(struct tf_module_local_alarm_info *alarm_st);
```

`alarm_st` é um ponteiro para a estrutura `tf_module_local_alarm_info`, que contém informações relacionadas ao alarme, como a `duração do alarme`, `se deve exibir texto e imagens` e o `conteúdo específico do texto e das imagens`.

**Uso:**

```cpp
struct tf_module_local_alarm_info info;
view_alarm_on(&info);
```

### 3.4 Desligando a UI de Alarme

```cpp
void view_alarm_off();
```

**Uso:**

```cpp
// Hide the alarm-related UI, set corresponding flags, or execute page transition logic
view_alarm_off();
```

## 4. Renderização em Tempo Real de Imagem de Inferência de IA

### 4.1 Visão Geral

Esta seção explica como decodificar imagens no dispositivo e exibí-las no LVGL.

Esta funcionalidade é implementada nos seguintes arquivos:

- **view_image_preview.c**: Contém as implementações das funções.
- **view_image_preview.h**: Contém os protótipos de funções e definições de tipos.

### 4.2 Inicializando a Função de Pré-visualização de Imagem

```cpp
int view_image_preview_init(lv_obj_t *ui_screen);
```

`ui_screen` é um ponteiro para o objeto de tela usado para exibir pré-visualizações em tempo real. Esta função inicializa o decodificador JPEG, aloca memória e cria alguns objetos de UI para renderizar resultados de inferência de IA, como caixas de detecção de alvo e nomes de classificação.

**Uso:**

```cpp
// Create image preview UI on the ViewLive page
view_image_preview_init(ui_Page_ViewLive);
```

### 4.3 Atualizando a Imagem de Pré-visualização

```cpp
int view_image_preview_flush(struct tf_module_ai_camera_preview_info *p_info);
```

`p_info` é um ponteiro para a estrutura `tf_module_ai_camera_preview_info`, que contém informações da imagem e da inferência do modelo de IA.

**Uso:**

```cpp
struct tf_module_ai_camera_preview_info info;
view_image_preview_flush(&info);
```

## 5. Definição de Eventos de Mensagem da UI

### 5.1 Visão Geral

A UI de front-end do dispositivo precisa interagir com as tarefas de APP de back-end. Ao ouvir e consumir eventos específicos, podem ser implementadas várias atualizações de UI e lógicas de transição de página. Para informações detalhadas sobre o tratamento de eventos no ESP32, consulte a seção `Event Loop Library` na documentação oficial da Espressif.

O tratamento de eventos de mensagem da UI é implementado nos seguintes arquivos:

- **view.c**: Contém as implementações das funções.
- **view.h**: Contém os protótipos de funções e definições de tipos.
- **data_defs.h**: Contém declarações de enumeração para vários IDs de eventos (tanto de front-end quanto de back-end).

### 5.2 Funções de Tratamento de Eventos da UI

```cpp
esp_err_t esp_event_handler_instance_register_with( esp_event_loop_handle_t event_loop, 
                                                    esp_event_base_t event_base, 
                                                    int32_t event_id, 
                                                    esp_event_handler_t event_handler, 
                                                    void * event_handler_arg, 
                                                    esp_event_handler_instance_t * instance ) 
```

**Parâmetros:**

- `event_loop`: Loop de eventos ao qual esta função de tratamento está registrada; não pode ser NULL.
- `event_base`: ID base do evento para o qual registrar o handler.
- `event_id`: ID do evento para o qual registrar o handler.
- `event_handler`: Função de tratamento a ser chamada quando o evento for despachado.
- `event_handler_arg`: Argumento a ser passado para a função de tratamento além dos dados do evento.
- `instance`: Objeto de instância do handler de eventos associado ao handler registrado e aos dados; pode ser NULL.

### 5.3 Uso

#### 1. Declarar e Definir Eventos, e Registrar a Instância do Handler de Evento de UI em um Loop Específico

```cpp
// Declaration and definition of VIEW event base
ESP_EVENT_DECLARE_BASE(VIEW_EVENT_BASE);
esp_event_loop_handle_t app_event_loop_handle;
// Declare event IDs as an enumeration; in the SenseCAP-Watcher project, this is placed in data_defs.h
enum {
    VIEW_EVENT_EXAMPLE
}
// Register instance
ESP_ERROR_CHECK(esp_event_handler_instance_register_with(app_event_loop_handle, 
                                                            VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, 
                                                            __view_event_handler, NULL, NULL));
```

#### 2. Manipulação de Eventos de Mensagens de UI

```cpp
static void __view_event_handler(void* handler_args, esp_event_base_t base, int32_t id, void* event_data)
{
  // Acquire lvgl thread lock
  lvgl_port_lock(0);
  if (base == VIEW_EVENT_BASE) {
    switch (id) {
      // Custom event
      case VIEW_EVENT_EXAMPLE: {
        ESP_LOGI("ui_event", "VIEW_EVENT_EXAMPLE");
        // Execute corresponding logic based on the received event
        break;
      }
    }
  }
  // Release lvgl thread lock
  lvgl_port_unlock();
}
```

#### 3. Envio de Eventos de Mensagens de UI

```cpp
// Send event to trigger corresponding logic
esp_event_post_to(app_event_loop_handle, VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, NULL, 0, pdMS_TO_TICKS(10000));
```

## 6. Aplicação

Agora vamos integrar um exemplo simples de UI no dispositivo SenseCAP Watcher usando as funções apresentadas acima. Isso envolverá o uso do Squareline para o design da UI, definição de eventos de callback da UI, gerenciamento de grupos de objetos e mais.

### 6.1 Criando Objetos de UI e Funções de Callback no Squareline

Crie botões no Squareline, defina seus nomes e estilos, e atribua funções de callback para cada botão. Clique em `ADD EVENT` na seção `Events`, escolha o tipo de gatilho para o evento e dê um nome para a função de callback. Isso conclui a criação dos objetos de UI e suas respectivas funções de callback.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img1.png" style={{width:800, height:'auto'}}/></div>

### 6.2 Exportando o Projeto `ui` do Squareline

No aplicativo, escolha `File` -> `Project Settings` na barra de navegação e defina o `UI Files Export Path` como `project_path/ui`, onde `project_path` é o caminho para o projeto Squareline. Isso define o caminho de exportação para o design da UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img2.png" style={{width:600, height:'auto'}}/></div>

Em seguida, clique em `Export` -> `Export UI Files` na barra de navegação para exportar uma pasta de diretório contendo todos os designs de UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img3.png" style={{width:500, height:'auto'}}/></div>

### 6.3 Implementando Funções de Callback Declaradas em Arquivos Header

Importe a pasta `ui` para o projeto do SenseCAP Watcher, abra e consulte as funções declaradas em `ui_events.h` da pasta `ui`, e implemente essas funções em `ui_events.c` da pasta `ui_manager` para completar a lógica dessas funções de callback.

Por exemplo, em `ui_events.h`:

```cpp
void btn1click_cb(lv_event_t * e);
void btn2click_cb(lv_event_t * e);
void btn3click_cb(lv_event_t * e);
```

E o código ficará assim em `ui_events.c`:

```cpp
void btn1click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn1click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn2click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn2click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn3click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn3click_cb");
    // Define the logic for this object when the clicked event is triggered
}
```

### 6.4 Adicionando Objetos a Variáveis de Estrutura

Nesta etapa, precisamos gerenciar o codificador e o grupo criado. Adicionar e remover objetos ao e do grupo permitirá que o codificador controle os objetos.

```cpp
// Define a GroupInfo variable
GroupInfo group_page_example;
// Initialize objects in initGroup()
lv_obj_t * example_objects[] = {ui_Button1, ui_Button2, ui_Button3};
// Add objects to the structure variable to facilitate adding objects to the group in different pages
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 6.5 Inicialização da UI

Em `view_init` em `view.c`, chame `ui_init` para inicializar a UI. Dessa forma, quando a thread da tarefa lvgl rodar, ela poderá carregar a UI projetada. A página carregada por padrão é a primeira página projetada no Squareline.

```cpp
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);

  ui_init();
  lv_pm_init();
  // There are two ways to add objects to the group
  // First: Clear the objects in the group and add them to the group one by one
  lv_group_remove_all_objs(g_example);
  lv_group_add_obj(ui_Button1);
  lv_group_add_obj(ui_Button2);
  lv_group_add_obj(ui_Button3);

  // Second: Add the corresponding objects to the group through the page transition function:
  lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);

  lvgl_port_unlock();

  // Other initialization code
}
```

### 6.6 Visualizando o Efeito em Execução

Agora implementamos de forma simples a integração da UI no projeto. Em seguida, podemos compilar e gravar o código no Watcher para ver o efeito em execução!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img4.png" style={{width:500, height:'auto'}}/></div>

Como mostrado acima, clicando nos botões na página usando a tela sensível ao toque ou a roda, você pode ver os objetos correspondentes acionando eventos de callback no assistente de depuração serial, indicando que as funções de callback estão funcionando corretamente!

## 7. Projeto SquareLine

A maior parte das páginas no SenseCAP-Watcher é criada usando Squareline. A ferramenta Squareline permite modificações fáceis e rápidas de estilo de vários objetos de página no Watcher. Portanto, é altamente recomendado usar Squareline para desenvolvimento e iteração de UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img5.png" style={{width:800, height:'auto'}}/></div>

Como mostrado na imagem acima, as páginas na ferramenta são organizadas de acordo com a lógica de navegação. Páginas adjacentes podem ser navegadas por meio de botões ou outros objetos acionáveis. Você pode clicar na página e nos objetos correspondentes para visualizar eventos definidos, tornando muito simples modificar os estilos de diferentes páginas e objetos, personalizando o seu assistente de IA! No entanto, observe que os objetos e eventos de callback definidos nas páginas atuais estão vinculados às funções da camada APP do Watcher. Modificá-los pode afetar o funcionamento normal do Watcher. Recomenda-se modificar apenas os estilos dos objetos, como cor e tamanho, para garantir a funcionalidade normal do Watcher.

## 8. Descrição de Arquivos

- A pasta [`ui_intergration_demo\SenseCAP-Watcher_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/SenseCAP-Watcher_example) contém o projeto Squareline completo para o SenseCAP-Watcher, incluindo quase todos os designs de recursos de UI.

- A pasta [`ui_intergration_demo\ui_intergration_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/ui_intergration_example) contém o projeto Squareline para o exemplo no capítulo Aplicação.

- A pasta [`ui_intergration_demo\view`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/view) contém o componente `view` para o exemplo no capítulo Aplicação. Você pode usar o exemplo substituindo diretamente o `view` original no projeto.

## Suporte Técnico & Discussão de Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
