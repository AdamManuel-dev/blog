---
title: 'Proper TailwindCSS integration with Svelte'
excerpt: 'Svelte + Tailwind = 😃'
coverImage: https://miro.medium.com/max/1750/1*PTt12Kqq82Ft_cdhZzVGJQ.png
date: '2021-4-13'
author: Adam Manuel
state: 'draft'
tags: ["Tailwind", "Svelte"]
---

## Overloading JS keywords in Svelte for  Tailwind Compatibility

The new Tailwind compiler might reduce some of the benefits of using this pattern

So Svelte is bounded by JS's keyword restrictions when embedded the JS inside the Svelte Component.

When creating an input property for a svelte component you normally just need to do `export let prop = ""` but what happens when you want to export a property named `class` or `style`?

So first you create a local component variable with a internal name for the property value.

`let customClass = '';`

This is now the property you will then pass along the class string for. A simple example would look like this.

```html
<div class={customClass}>
  <!-- Content -->
</div>
```

But how would you be able to use this as if it's the class property if it's named `customClass`?

You can create and export an alias with the is connected to the `customClass` property.

```jsx
export { customClass as class };
```

Now you are done, you can pass along the customClass to be applied between the parent and child contexts on either side of the component.

```jsx
<ScrollbarStyle class="flex flex-row items-center justify-center w-full bg-gray-200">
  <!-- content -->
</ScrollbarStyle>
```

So if you notice that the class properties I assigned are tailwind classes this pattern has an additional benefit. Because PurgeCSS sees a `class` property on what looks to be HTML, but is Svelte. It WILL find the classes you are passing into the component, if they are inside the `"` inside the class prop.

This lets you build a Svelte component that not only let's you compose the views themselves using the `<slot>` system, but you can also compose the classes on demand by passing along the classes to be applied inside the component in a way PurgeCSS catches it.
