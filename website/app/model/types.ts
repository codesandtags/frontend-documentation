export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  category: string;
  image: string;
  isNew: boolean;
  createdAt: string;
}

// Categories to handle:
// - Documentation
// - Code
// - Design
// - Tools
// - CSS

// Tags to handle:
// - css
// - javascript
// - react
// - vue
// - angular
// - svelte
// - typescript
