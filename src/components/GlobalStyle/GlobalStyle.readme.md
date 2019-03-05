## GlobalStyle

```js
import GlobalStyle from './components/GlobalStyle';
```

<!-- STORY -->

Global style component containing a reset and some sane defaults that should apply on a global level to all components first. Render this on Root/App level once, like this:

```js
<App>
  <GlobalStyle />
  {children}
</App>
```
