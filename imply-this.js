export function imply_this(cls) {
    const fns = Object.getOwnPropertyNames(cls.prototype).filter(name => name !== "constructor")
    fns.forEach(name => cls.prototype[name] = Function(
      `with(this)return {${cls.prototype[name]}}["${name}"](...arguments)`
        )
    )
}

/**
  class Car {

    miles = 10_000
    color = "green"
    traffic_stops = 13

    unit_stops() {
      return traffic_stops / miles
    }
    
  }
  
  imply_this(Car)
**/
