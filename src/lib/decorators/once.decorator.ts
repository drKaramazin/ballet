export function Once() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const initFlagPropertyKey = `${propertyKey}__InitFlag`;
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
      if (this[initFlagPropertyKey]) {
        throw new Error(`${propertyKey} method has been already fired once!`);
      } else {
        this[initFlagPropertyKey] = true;
        return originalMethod.apply(this, args);
      }
    };

    return descriptor;
  };
}
