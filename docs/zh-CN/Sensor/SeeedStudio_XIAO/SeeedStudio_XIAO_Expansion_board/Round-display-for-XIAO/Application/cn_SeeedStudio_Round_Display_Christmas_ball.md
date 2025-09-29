---
description: XIAO 圆形显示屏圣诞球
title: 为你的圣诞树制作一个小圣诞球
keywords:
- XIAO
- Round Dislay
- Christmas
image: https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball_1.gif
slug: /cn/round_display_christmas_ball
last_update:
  date: 12/08/2024
  author: Bruno Santos
---

# Seeed Studio XIAO 圆形显示屏圣诞球

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball.gif" style={{width:400, height:'auto'}}/>
</div>

在本教程中，我将向您展示如何制作一个带有飘落雪花和变化背景图像的圣诞球。

该程序执行以下功能：

- 显示存储为 C 数组的背景图像。
- 模拟雪花粒子在图像上飘落，带有风效果。
- 检测触摸输入并循环切换一组背景图像。
- 使用双缓冲实现流畅的动画。

## 环境准备

### 硬件

对于这个项目，我们需要：

- [Seeed Studio XIAO 圆形显示屏](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)

我使用 XIAO ESP32S3 是因为内存的原因。PNGDEC 需要一些内存来运行，大约 40KB。

### 软件准备

要使用圆形显示屏，请前往[XIAO 圆形显示屏入门指南](https://wiki.seeedstudio.com/cn/get_start_round_display/#getting-started)安装必要的库。

尝试一些示例，看看是否一切正常工作。

### 库

对于这个项目，我们将使用[Seeed Studio XIAO 圆形显示屏](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)附带的库。

按照教程[XIAO 圆形显示屏入门指南](https://wiki.seeedstudio.com/cn/get_start_round_display/#getting-started)中指定的方式安装所有库。
之后，您需要以下内容：

- PNGdec 库。
- **更新 LVGL 库**（或者不安装 Seeed Studio github 上的版本）

## 图像

我们的图像是存储在闪存数组中的 PNG 图像。它们使用 PNGdec 库显示。

**所有图像必须是 PNG 格式**

以下是我使用的图像 - 全部由 AI 生成
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background1.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background2.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background3.png" style={{width:200, height:'auto'}}/>
</div>

我们的背景图像需要准备好，以便 TFT_eSPI 可以显示它们，并且它们能很好地适配 XIAO 圆形显示屏。

### 准备图像

#### 调整图像大小

我们的 XIAO 圆形显示屏分辨率为 240x240。我们需要调整图像大小。我将展示如何使用 [GIMP](https://www.gimp.org/) 来完成。

1. 打开图像
2. 转到 **图像 > 缩放图像**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot1.jpg" style={{width:600, height:'auto'}}/></div>

3. 将宽度和高度设置为 240。因为选择了**保持比例**（链条图标），一旦您更改**宽度**，**高度**也应该随之更改。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot2.jpg" style={{width:400, height:'auto'}}/></div>

4. 按**缩放**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot3.jpg" style={{width:400, height:'auto'}}/></div>

5. 保存图像（我将覆盖旧的图像）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot4.jpg" style={{width:400, height:'auto'}}/></div>

#### 创建闪存数组

**注意：** 这些说明在 TFT_eSPI Flash_PNG 示例中。

要创建闪存数组，请转到[文件到 C 风格数组转换器](https://notisrac.github.io/FileToCArray/)

现在的步骤是：

1. 使用**浏览**上传图像。上传图像后

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot5.jpg" style={{width:800, height:'auto'}}/></div>

2. 我们需要设置一些选项

- **作为二进制处理**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot6.jpg" style={{width:800, height:'auto'}}/></div>

所有其他选项都变灰。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot7.jpg" style={{width:600, height:'auto'}}/></div>

3. 让我们将**数据类型**更改为 **char**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot8.jpg" style={{width:800, height:'auto'}}/></div>

4. 按转换。这将把图像转换为数组。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot9.jpg" style={{width:800, height:'auto'}}/></div>

5. 您现在可以按**保存为文件**按钮保存您的图像并将其添加到您的 Arduino 草图中，或按**复制到剪贴板**按钮
如果您**复制到剪贴板**，您必须按 Arduino 编辑器右侧的 3 个点并选择**新建选项卡**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot10.jpg" style={{width:400, height:'auto'}}/></div>

给它一个名称（通常是您的图像名称加上 .h 扩展名）
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot11.jpg" style={{width:600, height:'auto'}}/></div>

您最终会得到所有图像作为 *.h* 文件。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot12.jpg" style={{width:800, height:'auto'}}/></div>

## 代码

这是圣诞球的代码。
对代码主要功能的简单解释。代码还包含一些注释。

### 头文件和库

我们首先包含一些库。

```cpp
#include <PNGdec.h>
#include <TFT_eSPI.h>
#include <Wire.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"
```

请记住，您需要安装 Seeed Studio 库。

### 背景图片

以下是管理背景图片的函数

```cpp
struct Background {
  const uint8_t *data;
  size_t size;
};

const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};

```

- 结构体：每个背景图像都存储为一个 Background 结构体，包含：
  - data：指向 PNG 数据的指针。
  - size：PNG 文件的大小。

- 数组：backgrounds 数组存储所有背景图像。currentBackground 变量跟踪当前显示的背景。

### 雪花粒子模拟

1. 粒子初始化

```cpp
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8);
  }
}
```

- 它用随机位置和速度初始化 *numParticles*。

2. Particle updates

```cpp
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // Speed variation
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed; // Move down
    particles[i].x += random(-1, 2);      // Wind effect
    // Wrap-around logic
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}
```

- 更新粒子位置：
  - 下落效果：每个粒子向下移动。
  - 风力效果：添加轻微的水平漂移。
  - 循环回绕：粒子从底部退出时重置到顶部。

3. 渲染粒子：

```cpp
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}
```
- 它将每个粒子渲染为一个小白圆

### PNG Decoding

```cpp
int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);
if (rc != PNG_SUCCESS) {
  Serial.println("Failed to open PNG file!");
  return;
}
png.decode(NULL, 0);
```

- 使用 *png.openFLASH()* 函数加载并解码当前背景 PNG

### Touch interaction

```cpp
if (chsc6x_is_pressed()) {
  currentBackground = (currentBackground + 1) % numBackgrounds; // Cycle backgrounds
  delay(300); // Debounce
}
```

- 使用 *chsc6x_is_pressed()* 检测触摸事件，并通过递增 *currentBackground* 来改变背景图像

### 设置和循环

- **设置：**

```cpp
void setup() {
  Serial.begin(115200);
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // Match display size
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  initParticles();
}
```
- 初始化显示器、触摸输入和雪花粒子

- **Main loop:**

```cpp
void loop() {
  sprite.fillScreen(TFT_BLACK);
  // Render background and snow
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                             backgrounds[currentBackground].size,
                             pngDrawToSprite);
  if (rc == PNG_SUCCESS) {
    png.decode(NULL, 0);
    updateParticles();
    renderParticlesToSprite();
    sprite.pushSprite(0, 0);
  }
  // Handle touch input
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds;
    delay(300);
  }
  delay(10); // ~100 FPS
}
```

- 清除精灵，渲染当前帧（背景 + 粒子），并检查用户输入。

### 双缓冲

为了减少雪花的闪烁并改善动画的流畅性，我们使用**双缓冲**。

这允许我们在屏幕外缓冲区中绘制，然后再显示到屏幕上。

#### 这里的双缓冲

在这个项目中，TFT_eSPI 库的 TFT_eSprite 类实现了双缓冲。

1. **精灵创建**

- 精灵（屏幕外缓冲区）在 setup() 函数中创建：

```cpp
sprite.createSprite(240, 240); // Match display size
```

2. **绘制缓冲区**

- 所有绘制操作（背景渲染和雪花粒子动画）都在精灵上完成：

```cpp
sprite.fillScreen(TFT_BLACK); // Clear the sprite
renderParticlesToSprite();   // Draw snow particles
```

3. **更新显示**

- 在精灵中完全绘制帧后，它会在一次操作中推送到显示器：

```cpp
sprite.pushSprite(0, 0);
```

- 这会立即将缓冲区的内容传输到屏幕上。

4. **重用**

- 通过在 *loop()* 开始时清除精灵来为每一帧重用精灵：

```cpp
sprite.fillScreen(TFT_BLACK);
```

### 使用双缓冲的优势

- 流畅的雪花动画：下落的雪花粒子更新无缝，没有闪烁。
- 动态背景切换：触摸触发的背景变化没有可见的延迟或伪影。
- 高效渲染：在内存（RAM）中绘制比逐行直接更新显示更快。

**以下是该项目的完整代码**：

```cpp
/**
*
* To create the images as C arrays, visit:
* https://notisrac.github.io/FileToCArray/
*
*/
#include <PNGdec.h>
#include <TFT_eSPI.h>

#include "background1.h"
#include "background2.h"
#include "background3.h"

#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

// PNG decoder and TFT display instances
PNG png;
//TFT_eSPI tft = TFT_eSPI();
TFT_eSprite sprite = TFT_eSprite(&tft); // Off-screen buffer

#define MAX_IMAGE_WIDTH 240 

// Backgrounds for the snow globe
struct Background {
  const uint8_t *data;
  size_t size;
};

// Define the backgrounds with explicit casting
const Background backgrounds[] = {
    {(const uint8_t *)background1, sizeof(background1)},
    {(const uint8_t *)background2, sizeof(background2)},
    {(const uint8_t *)background3, sizeof(background3)},
};
const size_t numBackgrounds = sizeof(backgrounds) / sizeof(backgrounds[0]);

int currentBackground = 0; // Index of the current background

// Snow particle properties
const int numParticles = 100; // Number of snow particles
struct Particle {
  int16_t x, y;   // Position
  int16_t speed;  // Vertical speed
};
Particle particles[numParticles];

// Function to draw PNG to the sprite (callback for PNG decoder)
void pngDrawToSprite(PNGDRAW *pDraw) {
  uint16_t lineBuffer[MAX_IMAGE_WIDTH];
  png.getLineAsRGB565(pDraw, lineBuffer, PNG_RGB565_BIG_ENDIAN, 0xffffffff);
  sprite.pushImage(0, pDraw->y, pDraw->iWidth, 1, lineBuffer);
}

// Initialize snow particles
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8); // Random speed for each snowflake
  }
}

// Update snow particle positions
void updateParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].speed += random(-1, 2); // Random variation in speed
    particles[i].speed = constrain(particles[i].speed, 3, 8);
    particles[i].y += particles[i].speed;
    particles[i].x += random(-1, 2); // Wind effect

    // Wrap around screen
    if (particles[i].y > sprite.height()) {
      particles[i].y = 0;
      particles[i].x = random(0, sprite.width());
      particles[i].speed = random(3, 8);
    }
    if (particles[i].x < 0) particles[i].x = sprite.width();
    if (particles[i].x > sprite.width()) particles[i].x = 0;
  }
}

// Render snow particles to the sprite
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}

void setup() {
  Serial.begin(115200);
  Serial.println("\n\nUsing the PNGdec library with touch interaction");

  // Initialize TFT
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  sprite.createSprite(240, 240); // Match display size

  // Initialize touch interrupt pin
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();

  // Initialize particles
  initParticles();

  Serial.println("Setup complete.");
}

void loop() {
  // Clear the sprite for the new frame
  sprite.fillScreen(TFT_BLACK);

  // Render the current background to the sprite  
  int16_t rc = png.openFLASH((uint8_t *)backgrounds[currentBackground].data,
                           backgrounds[currentBackground].size,
                           pngDrawToSprite);


  if (rc != PNG_SUCCESS) {
    Serial.println("Failed to open PNG file!");
    return;
  }
  png.decode(NULL, 0); // Decode and render background

  // Update and render snow particles
  updateParticles();
  renderParticlesToSprite();

  // Push the sprite to the display
  sprite.pushSprite(0, 0);

  // Check for touch input using chsc6x_is_pressed
  if (chsc6x_is_pressed()) {
    currentBackground = (currentBackground + 1) % numBackgrounds; // Cycle through backgrounds
    delay(300); // Debounce delay
  }

  delay(10); // ~100 FPS
}
```

现在您可以使用自己的图片来创建一个神奇的圣诞球。

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 感谢 [Bruno Santos](https://github.com/orgs/Seeed-Studio/projects/6/views/1?sliceBy%5Bvalue%5D=feiticeir0&pane=issue&itemId=90657934&issue=Seeed-Studio%7Cwiki-documents%7C1993)，您的作品将会被[展示](https://wiki.seeedstudio.com/contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
