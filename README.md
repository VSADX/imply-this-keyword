# imply-this-keyword
No more writing `this.` in class methods!  
  
<br>  
  
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
  
## What can I scope?
1. Just the static properties `imply_static`
2. Just the normal properties `imply_instance`
3. Both! `imply_this`
