---
title: 'JSDoc Tips and Tricks'
excerpt: 'List of tips and tricks to help use JSDoc to define the type of a CommonJS file, to be consumed by a Typescript file.'
coverImage: https://i.ytimg.com/vi/YK-GurROGIg/maxresdefault.jpg
date: '2021-10-23'
author: Adam Manuel
state: 'in progress'
tags: ["JSDoc", "Typescript"]
---

# Laws of UX

## Jakob's Law

- Users will transfer expectations they have built around one familiar product to another that appears similar.
- By leveraging existing mental models, we can create superior user experiences in which the users can focus on their tasks rather than on learning new models.
- When making changes, minimize discord by empowering users to continue using a familiar version for a limited time.

## Fitts’s Law

- Touch targets should be large enough for users to accurately select them.
- Touch targets should have ample spacing between them.
- Touch targets should be placed in areas of an interface that allow them to be easily acquired.

## Hick’s Law

- Minimize choices when response times are critical to increase decision time.
- Break complex tasks into smaller steps in order to decrease cognitive load.
- Avoid overwhelming users by highlighting recommended options.
- Use progressive onboarding to minimize cognitive load for new users.
- Be careful not to simplify to the point of abstraction.

## Miller’s Law

- Don’t use the “magical number seven” to justify unnecessary design limitations.
- Organize content into smaller chunks to help users process, understand, and memorize easily.
- Remember that short-term memory capacity will vary per individual, based on their prior knowledge and situational context.

## Postel’s Law

- Be empathetic to, flexible about, and tolerant of any of the various actions the user could take or any input they might provide.
- Anticipate virtually anything in terms of input, access, and capability while providing a reliable and accessible interface.
- The more we can anticipate and plan for in design, the more resilient the design will be.
- Accept variable input from users, translating that input to meet your requirements, defining boundaries for input, and providing clear feedback to the user.

## Peak–End Rule

- Pay close attention to the most intense points and the final moments (the “end”) of the user journey.
- Identify the moments when your product is most helpful, valuable, or entertaining and design to delight the end user.
- Remember that people recall negative experiences more vividly than positive ones.

## Aesthetic–Usability Effect

- An aesthetically pleasing design creates a positive response in people’s brains and leads them to believe the design actually works better.
- People are more tolerant of minor usability issues when the design of a product or service is aesthetically pleasing.
- Visually pleasing design can mask usability problems and prevent issues from being discovered during usability testing.

## von Restorff Effect

- Make important information or key actions visually distinctive.
- Use restraint when placing emphasis on visual elements to avoid them competing with one another and to ensure salient items don’t get mistakenly identified as ads.
- Don’t exclude those with a color vision deficiency or low vision by relying exclusively on color to communicate contrast.
- Carefully consider users with motion sensitivity when using motion to communicate contrast.

## Tesler’s Law

- All processes have a core of complexity that cannot be designed away and therefore must be assumed by either the system or the user.
- Ensure as much as possible of the  burden is lifted from users by dealing with inherent complexity during design and development.
- Take care not to simplify interfaces to the point of abstraction.

## Doherty Threshold

- Provide system feedback within 400 ms in order to keep users’ attention and increase productivity.
- Use perceived performance to improve response time and reduce the perception of waiting.
- Animation is one way to visually engage people while loading or processing is happening in the background.
- Progress bars help make wait times tolerable, regardless of their accuracy.
- Purposefully adding a delay to a process can actually increase its perceived value and instill a sense of trust, even when the process itself actually takes much less time.