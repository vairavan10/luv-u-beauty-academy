# Contributing to Luv U Beauty Academy Website

Thank you for your interest in contributing! 🎉

## Getting Started

1. **Fork** this repository
2. **Clone** your fork locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/luv-u-beauty-academy.git
   cd luv-u-beauty-academy
   ```
3. **Install** dependencies
   ```bash
   npm install
   ```
4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

```bash
npm run dev     # Start dev server
npm run build   # Test production build
npm run lint    # Check code quality
```

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new gallery filter
fix: resolve mobile navbar overlap
docs: update installation guide
style: format testimonials page
refactor: extract Avatar component
perf: optimise image loading
chore: update dependencies
```

## Pull Request Guidelines

- Keep PRs focused — one feature or fix per PR
- Include a clear description of what changed and why
- Test on mobile (375px) and desktop (1440px)
- Ensure `npm run build` passes with no TypeScript errors
- Add screenshots for any visual changes

## Code Style

- **TypeScript** strict mode — no `any` types
- **Inline styles** preferred for component-scoped CSS (avoids Tailwind conflicts with Next.js SSG)
- **Lucide React** for all icons — no emoji in production UI
- **Inter** for body copy, **Playfair Display** for headings
- Pink brand colour: `#E91E8C` — use this consistently

## Reporting Bugs

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md).  
Please include browser, OS, and reproduction steps.

## Suggesting Features

Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md).

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). Be respectful.

---

Thank you for helping make Luv U Beauty Academy's website better! 🌸
