## MDX and React

### Using JSX in Markdown

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

```ts
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);
```

```html
/* Instead of this: */
<span style="background-color: red">Foo</span>
/* Use this: */
<span style={{backgroundColor: 'red'}}>Foo</span>
```

### Importing components

```javascript
<!-- Docusaurus theme component -->
import TOCInline from '@theme/TOCInline';
<!-- External component -->
import Button from '@mui/material/Button';
<!-- Custom component -->
import BrowserWindow from '@site/src/components/BrowserWindow';
```

## Tabs

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

```html title="TABS"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

## Admonitions

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

```markdown
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::
```


:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

```markdown
:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

```markdown
:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

```markdown
:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

```markdown
:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

### Admonitions with MDX


<!-- import Tabs from '@theme/Tabs'; -->
<!-- import TabItem from '@theme/TabItem'; -->

:::tip Use tabs in admonitions

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::

```markdown

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip Use tabs in admonitions

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::
```

## Assets

### Images

<img
src={require('../assets/docusaurus.png').default}
alt="Example banner"
/>

<Tabs>
  <TabItem value="apple" label="Markdown syntax">

  ```txt
  ![Example banner](../assets/docusaurus.png)
  ```
  </TabItem>
  <TabItem value="orange" label="CommonJS require">

  ```js
  <img
  src={require('../assets/docusaurus.png').default}
  alt="Example banner"
/>
  ```
  </TabItem>
  <TabItem value="banana" label="Import statement">

  ```ts
  import myImageUrl from '../assets/docusaurus.png';
  <img src={myImageUrl} alt="Example banner" />;
  ```
  </TabItem>

</Tabs>


### Files

# My Markdown page

<a target="\_blank" href={require('../assets/docusaurus.png').default}> Download this docx </a>

or

[Download this docx using Markdown](../assets/docusaurus.png)

```markdown
<a target="\_blank" href={require('../assets/docusaurus.png').default}> Download this docx </a>

or

[Download this docx using Markdown](../assets/docusaurus.png)
```

## Math

Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

```markdown
Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.
```

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$

```markdown
$$
I = \int_0^{2\pi} \sin(x)\,dx
$$
```