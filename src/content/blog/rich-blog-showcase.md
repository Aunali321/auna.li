---
title: 'Rich Blog Features Showcase'
description: 'A comprehensive demonstration of all the rich content features available for blog posts, including charts, callouts, code blocks, and interactive components.'
date: '2026-01-08'
updated: '2026-01-08'
tags: ['showcase', 'features', 'tutorial']
published: false
---

<script>
  import Callout from '$lib/components/blog/Callout.svelte';
  import Chart from '$lib/components/blog/Chart.svelte';
  import Accordion from '$lib/components/blog/Accordion.svelte';
  import Spoiler from '$lib/components/blog/Spoiler.svelte';
  import Tabs from '$lib/components/blog/Tabs.svelte';
</script>

This post demonstrates all the rich content features available when writing blog posts. Since we're using **mdsvex**, you can mix Markdown with Svelte components for maximum flexibility.

## Text Formatting

Standard markdown formatting works as expected:

- **Bold text** for emphasis
- _Italic text_ for subtle emphasis
- ~~Strikethrough~~ for corrections
- `inline code` for technical terms
- [Links](https://auna.li) for navigation

> Blockquotes are styled with a lavender border and work great for highlighting important quotes or excerpts.

## Callouts

Callouts are perfect for drawing attention to important information:

<Callout type="info" title="Pro Tip">
  You can use callouts to highlight tips, warnings, and important notes throughout your posts.
</Callout>

<Callout type="warning" title="Warning">
  Be careful when using this feature in production without proper testing!
</Callout>

<Callout type="success" title="Success">
  Your deployment completed successfully. All tests passed.
</Callout>

<Callout type="error" title="Error">
  Something went wrong. Please check the logs for more details.
</Callout>

<Callout type="note">
  Notes without a title work too - great for quick asides.
</Callout>

## Code Blocks

Syntax highlighting with Catppuccin theme for both light and dark modes:

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-hf")
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-hf")

def generate_text(prompt: str) -> str:
    inputs = tokenizer(prompt, return_tensors="pt")
    outputs = model.generate(**inputs, max_new_tokens=100)
    return tokenizer.decode(outputs[0], skip_special_tokens=True)
```

```typescript
interface User {
	id: string;
	name: string;
	email: string;
	role: 'admin' | 'user';
}

async function fetchUser(id: string): Promise<User> {
	const response = await fetch(`/api/users/${id}`);
	if (!response.ok) throw new Error('User not found');
	return response.json();
}
```

```rust
use std::collections::HashMap;

fn main() {
    let mut scores: HashMap<String, i32> = HashMap::new();

    scores.insert(String::from("Blue"), 10);
    scores.insert(String::from("Red"), 50);

    for (key, value) in &scores {
        println!("{}: {}", key, value);
    }
}
```

## Charts & Data Visualization

### Bar Chart

<Chart
type="bar"
title="Programming Languages Popularity"
data={[
{ label: 'Python', value: 85 },
{ label: 'JavaScript', value: 78 },
{ label: 'TypeScript', value: 65 },
{ label: 'Rust', value: 45 },
{ label: 'Go', value: 42 }
]}
/>

### Pie Chart

<Chart
type="pie"
title="Time Spent on Development Tasks"
data={[
{ label: 'Coding', value: 40 },
{ label: 'Debugging', value: 25 },
{ label: 'Meetings', value: 15 },
{ label: 'Code Review', value: 12 },
{ label: 'Documentation', value: 8 }
]}
/>

### Line Chart

<Chart
type="line"
title="Monthly Active Users (2025)"
height={250}
data={[
{ label: 'Jan', value: 1200 },
{ label: 'Feb', value: 1350 },
{ label: 'Mar', value: 1800 },
{ label: 'Apr', value: 2100 },
{ label: 'May', value: 2400 },
{ label: 'Jun', value: 2850 },
{ label: 'Jul', value: 3200 }
]}
/>

## Interactive Elements

### Accordion

Expandable content sections:

<Accordion label="Click to see the answer">
  The answer to life, the universe, and everything is **42**.
</Accordion>

<Accordion label="Implementation details">

Here's how the algorithm works under the hood:

1. First, we tokenize the input
2. Then we pass it through the encoder
3. The decoder generates output tokens autoregressively
4. Finally, we decode the tokens back to text

</Accordion>

### Spoiler Text

Inline spoilers that hide text until clicked: The killer was <Spoiler>the butler</Spoiler> all along!

You can also hide longer content: The secret password is <Spoiler>hunter2</Spoiler>.

### Tabs

Organize content into switchable tabs:

<Tabs
tabs={['JavaScript', 'Python', 'Rust']}
contents={[
'<code>console.log("Hello, World!");</code>',
'<code>print("Hello, World!")</code>',
'<code>println!("Hello, World!");</code>'
]}
/>

<Tabs
tabs={['Overview', 'Installation', 'Usage']}
contents={[
'This library provides utilities for working with async data in Svelte applications.',
'Run <code>npm install @example/lib</code> to install the package.',
'Import the functions you need: <code>import { fetch, cache } from "@example/lib"</code>'
]}
/>

## Tables

| Model    | Parameters | Training Data | Performance        |
| -------- | ---------- | ------------- | ------------------ |
| GPT-4    | 1.7T       | 13T tokens    | SOTA               |
| Claude 3 | Unknown    | Unknown       | Competitive        |
| Llama 3  | 70B        | 15T tokens    | Open-source leader |
| Gemini   | Unknown    | Unknown       | Multimodal         |

## Math & Formulas

You can write mathematical expressions inline like E = mc² or as blocks:

The quadratic formula: x = (-b ± √(b² - 4ac)) / 2a

For proper LaTeX rendering, consider adding KaTeX support.

## Images

Images are automatically styled with rounded corners:

![Placeholder](https://placehold.co/800x400/1e1e2e/cdd6f4?text=Your+Image+Here)

## Lists

### Ordered List

1. First item with some explanation
2. Second item that builds on the first
3. Third item to conclude the sequence

### Nested Lists

- Machine Learning
  - Supervised Learning
    - Classification
    - Regression
  - Unsupervised Learning
    - Clustering
    - Dimensionality Reduction
- Deep Learning
  - Neural Networks
  - Transformers

## Horizontal Rule

Content above the line.

---

Content below the line.

## Conclusion

<Callout type="success" title="You're all set!">
  You now have access to all these rich content features. Mix and match them to create engaging, informative blog posts.
</Callout>

These components give you the flexibility to create rich, interactive content while maintaining a clean, consistent design. Happy writing!
