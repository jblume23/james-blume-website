# Academic Website Template

This is a static academic website designed for GitHub Pages. It contains:

- `index.html` — About page
- `research.html` — Research page with expandable abstracts
- `cv.html` — HTML CV page
- `styles.css` — All visual styling
- `script.js` — Mobile navigation, abstract toggles, and current year
- `assets/profile-placeholder.svg` — Replace with your portrait
- `files/` — Place your CV and papers here

## 1. Replace the placeholders

Search all files for `INSERT`. Replace each placeholder with your own information.

Do not change the filenames unless you also update the corresponding links.

## 2. Add your portrait

Put your photograph in the `assets` folder. For example:

```text
assets/profile.jpg
```

Then change this line in `index.html`:

```html
src="assets/profile-placeholder.svg"
```

to:

```html
src="assets/profile.jpg"
```

A portrait with a roughly 4:5 aspect ratio works best.

## 3. Add your CV

Put your PDF at:

```text
files/cv.pdf
```

The CV page already links to that location.

## 4. Add papers

Put paper PDFs in `files/`, then replace the placeholder filenames in
`research.html`. For example:

```html
<a href="files/my-paper.pdf">PDF</a>
```

Duplicate an entire `<article class="paper"> ... </article>` block to add
another paper.

## 5. Preview locally

Open `index.html` in a browser. The site does not require a build system.

## 6. Publish with GitHub Pages

1. Create a public GitHub repository named `YOUR-USERNAME.github.io`.
2. Upload every file and folder from this template to the repository root.
3. In the repository, open **Settings → Pages**.
4. Set the source to **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. The site will be available at `https://YOUR-USERNAME.github.io`.

## Optional custom domain

Add your domain under **Settings → Pages → Custom domain**, then configure
the DNS records with your domain registrar.

## Design note

The design uses original HTML, CSS, and JavaScript. It follows the general
conventions of restrained academic faculty websites: a narrow reading column,
simple navigation, muted links, a portrait-led homepage, and expandable
research abstracts.
