### Heading (variant:'default')

Heading extends the [Heading](https://theme-ui.com/components/heading) provided by Theme UI.
A heading can be styled independently of the H-level used in the resulting markup.

- A default heading without props will be rendered as a &lt;H2&gt; and styled as `h2` variant.
- Setting `as="h3"` results in a &lt;H3&gt markup and a `h3` variant styling accordingly.
- Setting `as="h3"` in combination with `variant="h2"` will result in &lt;H3&gt markup and `h2` variant styling.
- `variant` trumps `as` prop in it's effect on preset style.

```js
<Heading>A Heading renders by default as &lt;H2&gt;</Heading>
```

### Variants of Headings

```js
<Heading as="h1">&lt;H1&gt; Heading</Heading>
<Heading as="h2">&lt;H2&gt; Heading</Heading>
<Heading as="h3">&lt;H3&gt; Heading</Heading>
<Heading as="h4">&lt;H4&gt; Heading</Heading>
<Heading as="h5">&lt;H5&gt; Heading</Heading>
<Heading as="h6">&lt;H6&gt; Heading</Heading>
<br />
<Heading variant="h6" as="h1">A &lt;H1&gt; Heading rendered with h6 variant</Heading>
<Heading variant="h1" as="h6">A &lt;H6&gt; Heading rendered with h1 variant</Heading>
```
