export const welcome = `# Welcome to Takenote!

TakeNote is a free, open-source notes app for the web. It is a demo project only, and does not integrate with any database or cloud. Your notes are saved in local storage and will not be permanently persisted, but are available for download.

View the source on [Github](https://github.com/taniarascia/takenote).

## Features

- **Plain text notes** - take notes in an IDE-like environment that makes no assumptions
- **Markdown preview** - view rendered HTML
- **Linked notes** - use syntax to link to notes within other notes
- **Syntax highlighting** - light and dark mode available (based on the beautiful [New Moon theme](https://taniarascia.github.io/new-moon/))
- **Keyboard shortcuts** - use the keyboard for all common tasks - creating notes and categories, toggling settings, and other options
- **Drag and drop** - drag a note or multiple notes to categories, favorites, or trash
- **Multi-cursor editing** - supports multiple cursors and other [Codemirror](https://codemirror.net/) options
- **Search notes** - easily search all notes, or notes within a category
- **Prettify notes** - use Prettier on the fly for your Markdown
- **No WYSIWYG** - made for developers, by developers
- **No database** - notes are only stored in the browser's local storage and are available for download and export to you alone
- **No tracking or analytics** - 'nuff said
- **GitHub integration** - self-hosted option is available for auto-syncing to a GitHub repository (not available in the demo)*Plain text notes** - take notes in an IDE-like environment that makes no assumptions
- **Markdown preview** - view rendered HTML
- **Linked notes** - use syntax to link to notes within other notes
- **Syntax highlighting** - light and dark mode available (based on the beautiful [New Moon theme](https://taniarascia.github.io/new-moon/))
- **Keyboard shortcuts** - use the keyboard for all common tasks - creating notes and categories, toggling settings, and other options
- **Drag and drop** - drag a note or multiple notes to categories, favorites, or trash
- **Multi-cursor editing** - supports multiple cursors and other [Codemirror](https://codemirror.net/) options
- **Search notes** - easily search all notes, or notes within a category
- **Prettify notes** - use Prettier on the fly for your Markdown
- **No WYSIWYG** - made for developers, by developers
- **No database** - notes are only stored in the browser's local storage and are available for download and export to you alone
- **No tracking or analytics** - 'nuff said
- **GitHub integration** - self-hosted option is available for auto-syncing to a GitHub repository (not available in the demo)*Plain text notes** - take notes in an IDE-like environment that makes no assumptions
- **Markdown preview** - view rendered HTML
- **Linked notes** - use  syntax to link to notes within other notes
- **Syntax highlighting** - light and dark mode available (based on the beautiful [New Moon theme](https://taniarascia.github.io/new-moon/))
- **Keyboard shortcuts** - use the keyboard for all common tasks - creating notes and categories, toggling settings, and other options
- **Drag and drop** - drag a note or multiple notes to categories, favorites, or trash
- **Multi-cursor editing** - supports multiple cursors and other [Codemirror](https://codemirror.net/) options
- **Search notes** - easily search all notes, or notes within a category
- **Prettify notes** - use Prettier on the fly for your Markdown
- **No WYSIWYG** - made for developers, by developers
- **No database** - notes are only stored in the browser's local storage and are available for download and export to you alone
- **No tracking or analytics** - 'nuff said
- **GitHub integration** - self-hosted option is available for auto-syncing to a GitHub repository (not available in the demo)*Plain text notes** - take notes in an IDE-like environment that makes no assumptions
- **Markdown preview** - view rendered HTML
- **Linked notes** - use  syntax to link to notes within other notes
- **Syntax highlighting** - light and dark mode available (based on the beautiful [New Moon theme](https://taniarascia.github.io/new-moon/))
- **Keyboard shortcuts** - use the keyboard for all common tasks - creating notes and categories, toggling settings, and other options
- **Drag and drop** - drag a note or multiple notes to categories, favorites, or trash
- **Multi-cursor editing** - supports multiple cursors and other [Codemirror](https://codemirror.net/) options
- **Search notes** - easily search all notes, or notes within a category
- **Prettify notes** - use Prettier on the fly for your Markdown
- **No WYSIWYG** - made for developers, by developers
- **No database** - notes are only stored in the browser's local storage and are available for download and export to you alone
- **No tracking or analytics** - 'nuff said
- **GitHub integration** - self-hosted option is available for auto-syncing to a GitHub repository (not available in the demo)
`;

export const tags = [
  {
    id: 1,
    name: "advancedev",
    number: 2,
  },
  {
    id: 2,
    name: "assignment",
    number: 2,
  },
  {
    id: 3,
    name: "blog",
    number: 9,
  },
  {
    id: 4,
    name: "business",
    number: 1,
  },
];
export const notes = [
  {
    id: 1,
    title: "Welcome to Remarque",
    subtitle: "Generating endless energy with",
    createdAt: "18/11/2019",
    content: welcome,
    folder: 1,
    favorite:false,
    tags:"welcome"
  },
  {
    id: 2,
    title: "Fusion Energy",
    subtitle: "Generating endless energy with",
    createdAt: "18/11/2019",
    content: "# Hi",
    folder: 2,
    favorite:false,
    tags:"welcome"
  },
  {
    id: 3,
    title: "But with some guidance and explanation",
    subtitle: "Generating endless energy with",
    createdAt: "18/11/2019",
    content: "# Bye bye",
    folder: 1,
    favorite:false,
    tags:"welcome"
  },
];
export const folders = [
  {
    id: 1,
    name: "reminders",
  },
  {
    id: 2,
    name: "tasks",
  },
  {
    id: 3,
    name: "favorites",
  },
  {
    id: 4,
    name: "highlights",
  },
  {
    id: 5,
    name: "activity",
  },
];
export const tempNotes = [
  {
    id: 1,
    title: "Welcome to Remarque",
    subtitle: "Generating endless energy with",
    createdAt: "18/11/2019",
    content: welcome,
    folder: 1,
    favorite:false,

    tags:"welcome"
  },
  {
    id: 2,
    title: "Fusion Energy",
    subtitle: "Generating endless energy with",
    createdAt: "18/11/2019",
    content: "# Hi",
    folder: 2,
    favorite:false,
    tags:"welcome"
  },
  {
    id: 3,
    title: "But with some guidance and explanation",
    subtitle: "Generating endless energy with",
    createdAt: "18/11/2019",
    content: "# Bye bye",
    folder: 1,
    favorite:false,
    tags:"welcome"
  },
];
