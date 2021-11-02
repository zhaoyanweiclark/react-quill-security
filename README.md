# React Quill Editor

A security react quill editor, `react-quill` is out of date, it's time to retire it!

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

Using npm:

```bash
$ npm install react-quill-security
```

Using yarn:

```bash
$ yarn add react-quill-security
```
## Minimize Example

```node
import QuillSecurity from 'react-quill-security';

export default App = props => {

    const initValue = useRef({
      "ops":[{"insert":"React Quill Security Working!\n"}]
    });
    const [value, setValue] = useState(initValue.current);

    return (
      <QuillSecurity
        value={value}
        onChange={value => setValue(value)}
      />
    );
  }
}
```

## License

[BSD 3-clause](LICENSE)
