# Eitherify

A simple utility for eitherifing functions.

## Example

```typescript
class SomeFunctionError extends Error {
  name: "SomeFunctionError";
}

const someFn = (
    val: Value
): { prop1: string, prop2: number } | null => {
    if (!val) return null;
    const { prop1: string, prop2: number } = parse(val);
    return { prop1, prop2 };
};

const someFnEither = eitherify(
    decodeJwt,
    new SomeFunctionError("Something went wrong"),
    new SomeFunctionError("result is null")
);

const props = someFnEither(1).map((props) => props);
```
For the more information see: https://github.com/JSMonk/sweet-monads/tree/master/either

## License

MIT (c) Semen Shishlov see LICENSE file.
