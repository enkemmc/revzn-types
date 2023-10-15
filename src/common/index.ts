export type FormCommonProps = {
  pdfPath: string;
}

export type RawData<T extends string = string, V = RowValue> = {
  properties: Record<T, V>;
};

export type Axis = "ROW1" | "ROW2";

export type RowValue<T extends string = string, A extends string = Axis> = {
  properties: Record<A, Value<T>>;
};

export type Value<T = any> = {
  value: T;
  content: T;
};

/** makes typescript treat all fields as possibly absent */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepNullable<T> = T extends null
  ? null
  : {
    [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepNullable<U>[]
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepNullable<U>>
    : T[P] extends object
    ? DeepNullable<T[P]>
    : T[P] | null;
  };
