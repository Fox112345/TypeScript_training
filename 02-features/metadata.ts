import "reflect-metadata";

class Plane {
  color: string = "red";

  @markFunction("ergerge")
  fly(): void {
    console.log("vrrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  }
}

const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");

console.log(secret);


