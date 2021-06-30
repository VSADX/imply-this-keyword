/* auto scope static + instance / prototype properties */
export function imply_this(cls) {
    const fns = Object.getOwnPropertyNames(cls.prototype).filter(name => name !== "constructor")
    cls[Symbol.unscopables] = { arguments: true, caller: true }
    fns.forEach(name => cls.prototype[name] = Function(
      `with(this.constructor) with(this) return {${cls.prototype[name]}}["${name}"](...arguments)`
        )
    )
}
/* auto scope instance / prototype properties */
export function imply_instance(cls) {
    const fns = Object.getOwnPropertyNames(cls.prototype).filter(name => name !== "constructor")
    fns.forEach(name => cls.prototype[name] = Function(
      `with(this) return {${cls.prototype[name]}}["${name}"](...arguments)`
        )
    )
}
/* auto scope static class properties */
export function imply_static(cls) {
    const fns = Object.getOwnPropertyNames(cls.prototype).filter(name => name !== "constructor")
    cls[Symbol.unscopables] = { arguments: true, caller: true }
    fns.forEach(name => cls.prototype[name] = Function(
      `with(this.constructor) return {${cls.prototype[name]}}["${name}"](...arguments)`
        )
    )
}

/**
  class Car {
    static free_miles = 1_000
    miles = 10_000
    color = "green"
    traffic_stops = 13

    unit_stops() {
      return traffic_stops / (miles - free_miles)
    }
    
  }
  
  imply_this(Car)
  let a = (new Car()).unit_stops()
  console.log(a)
**/
