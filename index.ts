import { Either, left, right } from "@sweet-monads/either";
import { isNull } from "lodash";

function eitherify<A, R, E1>(
  f: (...arg: A[]) => R | null,
  errorConditionError: E1
): (...arg: A[]) => Either<E1, R | null>;

function eitherify<A, R, E1, E2>(
  f: (...arg: A[]) => R,
  errorConditionError: E1,
  nullConditionError?: E2
): (...arg: A[]) => Either<E1, NonNullable<R>>;

function eitherify<A, R, E1, E2>(
  f: (...arg: A[]) => R,
  errorConditionError: E1,
  nullConditionError?: E2
): (...arg: A[]) => Either<E1 | E2, R> {
  return (...args) => {
    try {
      const res = f(...args);

      if (nullConditionError) {
        if (isNull(res)) {
          return left(nullConditionError);
        }
        return right(res);
      }

      return right(res);
    } catch (e) {
      return left(errorConditionError);
    }
  };
}

export { eitherify };
