---
description: XIAO Round Dislay Christmas Ball
title: Create a small Christmas Ball for your Christmas Tree
keywords:
- XIAO
- Round Dislay
- Christmas
image: https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball_1.gif
slug: /round_display_christmas_ball
last_update:
  date: 12/08/2024
  author: Bruno Santos
---

# Seeed Studio Round Display for XIAO Christmas Ball

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Christmas_round_display/Christmas_ball.gif" style={{width:400, height:'auto'}}/>
</div>

On this tutorial I'm going to show you how you can create a Christmas ball with falling snow and changing background images.

The program performs the following:

- Displays a background image stored as a C array.
- Simulates snow particles falling over the image, with a wind effect.
- Detects touch input and cycles through a set of background images.
- Uses double-buffering for smooth animations.

## Environment Preparation

### Hardware

For the project, we're going to need:

- [Seeed Studio Round Display For XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)

I'm using the XIAO ESP32S3 because of the memory. The PNGDEC requires a bit of memory to run ~40kbytes.

### Software Preparation

To use the Round Display, head to [Getting Started with Round Display for XIAO](https://wiki.seeedstudio.com/get_start_round_display/#getting-started) to install the necessary libraries.

Try some of the examples to see if everything is working well.

### Libraries

For this project, we're going to use the libraries that come bundled with the [Seeed Studio Round Display For XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)

Install all the libraries like specified in the tutorial [Getting Started with Round Display for XIAO](https://wiki.seeedstudio.com/get_start_round_display/#getting-started).
After that, you need the following:

- PNGdec library .
- **Update LVGL library** (or not install the one from Seeed Studio github)

## Images

Our images are PNG images stored in Flash Arrays. They are displayed using PNGdec library.

**All images must be PNG**

Here are the images that I've used - all are AI generated
<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background1.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background2.png" style={{width:200, height:'auto'}}/>
<img src="https://files.seeedstudio.com/wiki/Christmas_round_display/background3.png" style={{width:200, height:'auto'}}/>
</div>

Our background images need to be prepared for that TFT_eSPI can display them and they fit well on the Round Display for XIAO.

### Prepare images

#### Resize Images

Our Round Display for XIAO has a 240x240 resolution. We need to resize the images.  I'm going to show how to do it using [GIMP](https://www.gimp.org/)

1. Open the image
2. Go to **Image > Scale Image**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot1.jpg" style={{width:600, height:'auto'}}/></div>

3. Set Width and Height to 240. Because the **Keep Ratio** is selected (the chain), once you change the **width**, the **height** should also change.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot2.jpg" style={{width:400, height:'auto'}}/></div>

4. Press the **Scale** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot3.jpg" style={{width:400, height:'auto'}}/></div>

5. Save the image (I'm going to override the old one)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot4.jpg" style={{width:400, height:'auto'}}/></div>

#### Create the Flash Arrays

**NOTE:** This instructions are inside the TFT_eSPI Flash_PNG example.

To create the flash array, go to [File to C style array converter](https://notisrac.github.io/FileToCArray/)

The steps now are:

1. Upload the image using **Browse** . After uploading the image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot5.jpg" style={{width:800, height:'auto'}}/></div>

2. We need to set some options

- **Treat as binary**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot6.jpg" style={{width:800, height:'auto'}}/></div>

All the other options gray out.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot7.jpg" style={{width:600, height:'auto'}}/></div>

3. Let's change the **Data type** to **char**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot8.jpg" style={{width:800, height:'auto'}}/></div>

4. Press convert. This will convert the image to an array.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot9.jpg" style={{width:800, height:'auto'}}/></div>

5. You can now press the button **Save as file** to save your image and add it to your Arduino Sketch or press the button **Copy to clipboard**
If you **Copy to clipboard**, you'll have to press the 3 dots on the right side of the Arduino editor and choose **New Tab**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot10.jpg" style={{width:400, height:'auto'}}/></div>

Give it a name (generally your image name with .h extension)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot11.jpg" style={{width:600, height:'auto'}}/></div>

You'll end up with all your images as *.h* files.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Christmas_round_display/screenshot12.jpg" style={{width:800, height:'auto'}}/></div>

## Code

Here's the code for the Christmas ball.
A little explanation of the principal functions of the code.  The code also includes some comments.

### Headers and libraries

We start by including some libraries.

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

Remember that you need to have the Seeed Studio libraries installed.

### Background images

Here are the functions to manage the background images

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

- Struct: Each background image is stored as a Background struct containing:
  - data: Pointer to the PNG data.
  - size: Size of the PNG file.

- Array: The backgrounds array stores all the background images. The currentBackground variable tracks the currently displayed background.

### Snow particles Simulation

1. Initialization of particles

```cpp
void initParticles() {
  for (int i = 0; i < numParticles; i++) {
    particles[i].x = random(0, sprite.width());
    particles[i].y = random(0, sprite.height());
    particles[i].speed = random(3, 8);
  }
}
```

- It initializes *numParticles* with random positions and speeds.

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

- Updates particle positions with:
  - Falling Effect: Each particle moves down.
  - Wind Effect: Adds a slight horizontal drift.
  - Wrap Around: Particles reset to the top when they exit the bottom.

3. Rendering particles:

```cpp
void renderParticlesToSprite() {
  for (int i = 0; i < numParticles; i++) {
    sprite.fillCircle(particles[i].x, particles[i].y, 2, TFT_WHITE);
  }
}
```

- It renders each particle as a small white circle

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

- Loads and decodes the current background PNG using the *png.openFLASH()* function

### Touch interaction

```cpp
if (chsc6x_is_pressed()) {
  currentBackground = (currentBackground + 1) % numBackgrounds; // Cycle backgrounds
  delay(300); // Debounce
}
```

- Detects a touch event using the *chsc6x_is_pressed()* and changes the background image by incrementing *currentBackground*

### Setup and loop

- **Setup:**

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

- Initializes the display, touch input and snow particles

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

- Clears the sprite, renders the current frame (background + particles), and checks for user input.

### Double buffering

To reduce the flickering and improving animation smoothness of the snow flakes, we use **double buffering**.

This allows us to draw in an off-screen buffer before displaying it on the screen.

#### Double buffering here

In this project, the TFT_eSPI library's TFT_eSprite class implements double buffering.

1. **Sprite creation**

- The sprite (off-screen buffer) is created in the setup() function:

```cpp
sprite.createSprite(240, 240); // Match display size
```

2. **Drawing the buffer**

- All drawing operations (background rendering and snow particle animation) are done on the sprite:

```cpp
sprite.fillScreen(TFT_BLACK); // Clear the sprite
renderParticlesToSprite();   // Draw snow particles
```

3. **Updating the display**

- After the frame is fully drawn in the sprite, it is pushed to the display in one operation:

```cpp
sprite.pushSprite(0, 0);
```

- This transfers the buffer's contents to the screen instantly.

4. **Reuse**

- The sprite is reused for every frame by clearing it at the start of the *loop()*:

```cpp
sprite.fillScreen(TFT_BLACK);
```

### Advantages of Using Double Buffering

- Smooth Snow Animation: The falling snow particles are updated seamlessly without flickering.
- Dynamic Background Switching: The touch-triggered background changes happen without visible delays or artifacts.
- Efficient Rendering: Drawing in memory (RAM) is faster than directly updating the display line by line.

**Here's the complete code for the project**:

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

Now you can use your own pictures to create a magical Christmas Ball.

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Thanks [Bruno Santos](https://github.com/orgs/Seeed-Studio/projects/6/views/1?sliceBy%5Bvalue%5D=feiticeir0&pane=issue&itemId=90657934&issue=Seeed-Studio%7Cwiki-documents%7C1993) and your work will be [exhibited](https://wiki.seeedstudio.com/contributors/).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
