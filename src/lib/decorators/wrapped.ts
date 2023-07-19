export function Wrapped(options?: { before?: string; after?: string }): any {
  return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor): any {
    const childFunction = descriptor.value;

    descriptor.value = function(...args: any[]) {
      if (options?.before && this[options.before]) {
        this[options.before]();
      }
      const result = childFunction.apply(this, args);
      if (options?.after && this[options.after]) {
        this[options.after]();
      }

      return result;
    };

    return descriptor;
  };
}
