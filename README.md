# imply-this-keyword

```js
class Desk {
  material = "wood"
  clean = .8

  wash(amount = 1) {
    clean += amount * .1
  }

  store(count = 4) {
    clean -= amount * .2
  }
}
```

```js
import { imply_this } from "./imply-this.js"

imply_this(Desk)
```
