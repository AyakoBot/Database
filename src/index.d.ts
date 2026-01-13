
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GuildSetting
 * 
 */
export type GuildSetting = $Result.DefaultSelection<Prisma.$GuildSettingPayload>
/**
 * Model CustomClient
 * 
 */
export type CustomClient = $Result.DefaultSelection<Prisma.$CustomClientPayload>
/**
 * Model FilteredWord
 * 
 */
export type FilteredWord = $Result.DefaultSelection<Prisma.$FilteredWordPayload>
/**
 * Model AfkState
 * 
 */
export type AfkState = $Result.DefaultSelection<Prisma.$AfkStatePayload>
/**
 * Model AfkSetting
 * 
 */
export type AfkSetting = $Result.DefaultSelection<Prisma.$AfkSettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FilterType: {
  Profanity: 'Profanity',
  SexualContent: 'SexualContent',
  Slurs: 'Slurs'
};

export type FilterType = (typeof FilterType)[keyof typeof FilterType]

}

export type FilterType = $Enums.FilterType

export const FilterType: typeof $Enums.FilterType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GuildSettings
 * const guildSettings = await prisma.guildSetting.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more GuildSettings
   * const guildSettings = await prisma.guildSetting.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.guildSetting`: Exposes CRUD operations for the **GuildSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildSettings
    * const guildSettings = await prisma.guildSetting.findMany()
    * ```
    */
  get guildSetting(): Prisma.GuildSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customClient`: Exposes CRUD operations for the **CustomClient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomClients
    * const customClients = await prisma.customClient.findMany()
    * ```
    */
  get customClient(): Prisma.CustomClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filteredWord`: Exposes CRUD operations for the **FilteredWord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilteredWords
    * const filteredWords = await prisma.filteredWord.findMany()
    * ```
    */
  get filteredWord(): Prisma.FilteredWordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.afkState`: Exposes CRUD operations for the **AfkState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AfkStates
    * const afkStates = await prisma.afkState.findMany()
    * ```
    */
  get afkState(): Prisma.AfkStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.afkSetting`: Exposes CRUD operations for the **AfkSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AfkSettings
    * const afkSettings = await prisma.afkSetting.findMany()
    * ```
    */
  get afkSetting(): Prisma.AfkSettingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    GuildSetting: 'GuildSetting',
    CustomClient: 'CustomClient',
    FilteredWord: 'FilteredWord',
    AfkState: 'AfkState',
    AfkSetting: 'AfkSetting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "guildSetting" | "customClient" | "filteredWord" | "afkState" | "afkSetting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GuildSetting: {
        payload: Prisma.$GuildSettingPayload<ExtArgs>
        fields: Prisma.GuildSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          findFirst: {
            args: Prisma.GuildSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          findMany: {
            args: Prisma.GuildSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>[]
          }
          create: {
            args: Prisma.GuildSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          createMany: {
            args: Prisma.GuildSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>[]
          }
          delete: {
            args: Prisma.GuildSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          update: {
            args: Prisma.GuildSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          deleteMany: {
            args: Prisma.GuildSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>[]
          }
          upsert: {
            args: Prisma.GuildSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildSettingPayload>
          }
          aggregate: {
            args: Prisma.GuildSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildSetting>
          }
          groupBy: {
            args: Prisma.GuildSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildSettingCountArgs<ExtArgs>
            result: $Utils.Optional<GuildSettingCountAggregateOutputType> | number
          }
        }
      }
      CustomClient: {
        payload: Prisma.$CustomClientPayload<ExtArgs>
        fields: Prisma.CustomClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload>
          }
          findFirst: {
            args: Prisma.CustomClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload>
          }
          findMany: {
            args: Prisma.CustomClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload>[]
          }
          create: {
            args: Prisma.CustomClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload>
          }
          createMany: {
            args: Prisma.CustomClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload>[]
          }
          delete: {
            args: Prisma.CustomClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload>
          }
          update: {
            args: Prisma.CustomClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload>
          }
          deleteMany: {
            args: Prisma.CustomClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload>[]
          }
          upsert: {
            args: Prisma.CustomClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomClientPayload>
          }
          aggregate: {
            args: Prisma.CustomClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomClient>
          }
          groupBy: {
            args: Prisma.CustomClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomClientCountArgs<ExtArgs>
            result: $Utils.Optional<CustomClientCountAggregateOutputType> | number
          }
        }
      }
      FilteredWord: {
        payload: Prisma.$FilteredWordPayload<ExtArgs>
        fields: Prisma.FilteredWordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilteredWordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilteredWordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload>
          }
          findFirst: {
            args: Prisma.FilteredWordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilteredWordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload>
          }
          findMany: {
            args: Prisma.FilteredWordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload>[]
          }
          create: {
            args: Prisma.FilteredWordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload>
          }
          createMany: {
            args: Prisma.FilteredWordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilteredWordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload>[]
          }
          delete: {
            args: Prisma.FilteredWordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload>
          }
          update: {
            args: Prisma.FilteredWordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload>
          }
          deleteMany: {
            args: Prisma.FilteredWordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilteredWordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilteredWordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload>[]
          }
          upsert: {
            args: Prisma.FilteredWordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilteredWordPayload>
          }
          aggregate: {
            args: Prisma.FilteredWordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilteredWord>
          }
          groupBy: {
            args: Prisma.FilteredWordGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilteredWordGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilteredWordCountArgs<ExtArgs>
            result: $Utils.Optional<FilteredWordCountAggregateOutputType> | number
          }
        }
      }
      AfkState: {
        payload: Prisma.$AfkStatePayload<ExtArgs>
        fields: Prisma.AfkStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AfkStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AfkStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload>
          }
          findFirst: {
            args: Prisma.AfkStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AfkStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload>
          }
          findMany: {
            args: Prisma.AfkStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload>[]
          }
          create: {
            args: Prisma.AfkStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload>
          }
          createMany: {
            args: Prisma.AfkStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AfkStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload>[]
          }
          delete: {
            args: Prisma.AfkStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload>
          }
          update: {
            args: Prisma.AfkStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload>
          }
          deleteMany: {
            args: Prisma.AfkStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AfkStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AfkStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload>[]
          }
          upsert: {
            args: Prisma.AfkStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkStatePayload>
          }
          aggregate: {
            args: Prisma.AfkStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAfkState>
          }
          groupBy: {
            args: Prisma.AfkStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<AfkStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.AfkStateCountArgs<ExtArgs>
            result: $Utils.Optional<AfkStateCountAggregateOutputType> | number
          }
        }
      }
      AfkSetting: {
        payload: Prisma.$AfkSettingPayload<ExtArgs>
        fields: Prisma.AfkSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AfkSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AfkSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload>
          }
          findFirst: {
            args: Prisma.AfkSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AfkSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload>
          }
          findMany: {
            args: Prisma.AfkSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload>[]
          }
          create: {
            args: Prisma.AfkSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload>
          }
          createMany: {
            args: Prisma.AfkSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AfkSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload>[]
          }
          delete: {
            args: Prisma.AfkSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload>
          }
          update: {
            args: Prisma.AfkSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload>
          }
          deleteMany: {
            args: Prisma.AfkSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AfkSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AfkSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload>[]
          }
          upsert: {
            args: Prisma.AfkSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AfkSettingPayload>
          }
          aggregate: {
            args: Prisma.AfkSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAfkSetting>
          }
          groupBy: {
            args: Prisma.AfkSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AfkSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AfkSettingCountArgs<ExtArgs>
            result: $Utils.Optional<AfkSettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    guildSetting?: GuildSettingOmit
    customClient?: CustomClientOmit
    filteredWord?: FilteredWordOmit
    afkState?: AfkStateOmit
    afkSetting?: AfkSettingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model GuildSetting
   */

  export type AggregateGuildSetting = {
    _count: GuildSettingCountAggregateOutputType | null
    _avg: GuildSettingAvgAggregateOutputType | null
    _sum: GuildSettingSumAggregateOutputType | null
    _min: GuildSettingMinAggregateOutputType | null
    _max: GuildSettingMaxAggregateOutputType | null
  }

  export type GuildSettingAvgAggregateOutputType = {
    rpEnableRuns: Decimal | null
    lastRpSyncRun: Decimal | null
    enableInvitesAt: Decimal | null
  }

  export type GuildSettingSumAggregateOutputType = {
    rpEnableRuns: Decimal | null
    lastRpSyncRun: Decimal | null
    enableInvitesAt: Decimal | null
  }

  export type GuildSettingMinAggregateOutputType = {
    guildId: string | null
    prefix: string | null
    interactionsMode: boolean | null
    language: string | null
    errorChannel: string | null
    rpEnabled: boolean | null
    rpEnableRuns: Decimal | null
    lastRpSyncRun: Decimal | null
    ptReminderEnabled: boolean | null
    legacyRp: boolean | null
    editRpCommands: boolean | null
    enableInvitesAt: Decimal | null
    statusChannel: string | null
    updatesChannel: string | null
    notifyChannel: string | null
  }

  export type GuildSettingMaxAggregateOutputType = {
    guildId: string | null
    prefix: string | null
    interactionsMode: boolean | null
    language: string | null
    errorChannel: string | null
    rpEnabled: boolean | null
    rpEnableRuns: Decimal | null
    lastRpSyncRun: Decimal | null
    ptReminderEnabled: boolean | null
    legacyRp: boolean | null
    editRpCommands: boolean | null
    enableInvitesAt: Decimal | null
    statusChannel: string | null
    updatesChannel: string | null
    notifyChannel: string | null
  }

  export type GuildSettingCountAggregateOutputType = {
    guildId: number
    prefix: number
    interactionsMode: number
    language: number
    errorChannel: number
    rpEnabled: number
    rpEnableRuns: number
    lastRpSyncRun: number
    ptReminderEnabled: number
    legacyRp: number
    editRpCommands: number
    enableInvitesAt: number
    statusChannel: number
    updatesChannel: number
    notifyChannel: number
    _all: number
  }


  export type GuildSettingAvgAggregateInputType = {
    rpEnableRuns?: true
    lastRpSyncRun?: true
    enableInvitesAt?: true
  }

  export type GuildSettingSumAggregateInputType = {
    rpEnableRuns?: true
    lastRpSyncRun?: true
    enableInvitesAt?: true
  }

  export type GuildSettingMinAggregateInputType = {
    guildId?: true
    prefix?: true
    interactionsMode?: true
    language?: true
    errorChannel?: true
    rpEnabled?: true
    rpEnableRuns?: true
    lastRpSyncRun?: true
    ptReminderEnabled?: true
    legacyRp?: true
    editRpCommands?: true
    enableInvitesAt?: true
    statusChannel?: true
    updatesChannel?: true
    notifyChannel?: true
  }

  export type GuildSettingMaxAggregateInputType = {
    guildId?: true
    prefix?: true
    interactionsMode?: true
    language?: true
    errorChannel?: true
    rpEnabled?: true
    rpEnableRuns?: true
    lastRpSyncRun?: true
    ptReminderEnabled?: true
    legacyRp?: true
    editRpCommands?: true
    enableInvitesAt?: true
    statusChannel?: true
    updatesChannel?: true
    notifyChannel?: true
  }

  export type GuildSettingCountAggregateInputType = {
    guildId?: true
    prefix?: true
    interactionsMode?: true
    language?: true
    errorChannel?: true
    rpEnabled?: true
    rpEnableRuns?: true
    lastRpSyncRun?: true
    ptReminderEnabled?: true
    legacyRp?: true
    editRpCommands?: true
    enableInvitesAt?: true
    statusChannel?: true
    updatesChannel?: true
    notifyChannel?: true
    _all?: true
  }

  export type GuildSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildSetting to aggregate.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildSettings
    **/
    _count?: true | GuildSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuildSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuildSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildSettingMaxAggregateInputType
  }

  export type GetGuildSettingAggregateType<T extends GuildSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildSetting[P]>
      : GetScalarType<T[P], AggregateGuildSetting[P]>
  }




  export type GuildSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildSettingWhereInput
    orderBy?: GuildSettingOrderByWithAggregationInput | GuildSettingOrderByWithAggregationInput[]
    by: GuildSettingScalarFieldEnum[] | GuildSettingScalarFieldEnum
    having?: GuildSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildSettingCountAggregateInputType | true
    _avg?: GuildSettingAvgAggregateInputType
    _sum?: GuildSettingSumAggregateInputType
    _min?: GuildSettingMinAggregateInputType
    _max?: GuildSettingMaxAggregateInputType
  }

  export type GuildSettingGroupByOutputType = {
    guildId: string
    prefix: string | null
    interactionsMode: boolean
    language: string
    errorChannel: string | null
    rpEnabled: boolean
    rpEnableRuns: Decimal
    lastRpSyncRun: Decimal | null
    ptReminderEnabled: boolean
    legacyRp: boolean
    editRpCommands: boolean
    enableInvitesAt: Decimal | null
    statusChannel: string | null
    updatesChannel: string | null
    notifyChannel: string | null
    _count: GuildSettingCountAggregateOutputType | null
    _avg: GuildSettingAvgAggregateOutputType | null
    _sum: GuildSettingSumAggregateOutputType | null
    _min: GuildSettingMinAggregateOutputType | null
    _max: GuildSettingMaxAggregateOutputType | null
  }

  type GetGuildSettingGroupByPayload<T extends GuildSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildSettingGroupByOutputType[P]>
            : GetScalarType<T[P], GuildSettingGroupByOutputType[P]>
        }
      >
    >


  export type GuildSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    prefix?: boolean
    interactionsMode?: boolean
    language?: boolean
    errorChannel?: boolean
    rpEnabled?: boolean
    rpEnableRuns?: boolean
    lastRpSyncRun?: boolean
    ptReminderEnabled?: boolean
    legacyRp?: boolean
    editRpCommands?: boolean
    enableInvitesAt?: boolean
    statusChannel?: boolean
    updatesChannel?: boolean
    notifyChannel?: boolean
  }, ExtArgs["result"]["guildSetting"]>

  export type GuildSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    prefix?: boolean
    interactionsMode?: boolean
    language?: boolean
    errorChannel?: boolean
    rpEnabled?: boolean
    rpEnableRuns?: boolean
    lastRpSyncRun?: boolean
    ptReminderEnabled?: boolean
    legacyRp?: boolean
    editRpCommands?: boolean
    enableInvitesAt?: boolean
    statusChannel?: boolean
    updatesChannel?: boolean
    notifyChannel?: boolean
  }, ExtArgs["result"]["guildSetting"]>

  export type GuildSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    prefix?: boolean
    interactionsMode?: boolean
    language?: boolean
    errorChannel?: boolean
    rpEnabled?: boolean
    rpEnableRuns?: boolean
    lastRpSyncRun?: boolean
    ptReminderEnabled?: boolean
    legacyRp?: boolean
    editRpCommands?: boolean
    enableInvitesAt?: boolean
    statusChannel?: boolean
    updatesChannel?: boolean
    notifyChannel?: boolean
  }, ExtArgs["result"]["guildSetting"]>

  export type GuildSettingSelectScalar = {
    guildId?: boolean
    prefix?: boolean
    interactionsMode?: boolean
    language?: boolean
    errorChannel?: boolean
    rpEnabled?: boolean
    rpEnableRuns?: boolean
    lastRpSyncRun?: boolean
    ptReminderEnabled?: boolean
    legacyRp?: boolean
    editRpCommands?: boolean
    enableInvitesAt?: boolean
    statusChannel?: boolean
    updatesChannel?: boolean
    notifyChannel?: boolean
  }

  export type GuildSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guildId" | "prefix" | "interactionsMode" | "language" | "errorChannel" | "rpEnabled" | "rpEnableRuns" | "lastRpSyncRun" | "ptReminderEnabled" | "legacyRp" | "editRpCommands" | "enableInvitesAt" | "statusChannel" | "updatesChannel" | "notifyChannel", ExtArgs["result"]["guildSetting"]>

  export type $GuildSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      guildId: string
      prefix: string | null
      interactionsMode: boolean
      language: string
      errorChannel: string | null
      rpEnabled: boolean
      rpEnableRuns: Prisma.Decimal
      lastRpSyncRun: Prisma.Decimal | null
      ptReminderEnabled: boolean
      legacyRp: boolean
      editRpCommands: boolean
      enableInvitesAt: Prisma.Decimal | null
      statusChannel: string | null
      updatesChannel: string | null
      notifyChannel: string | null
    }, ExtArgs["result"]["guildSetting"]>
    composites: {}
  }

  type GuildSettingGetPayload<S extends boolean | null | undefined | GuildSettingDefaultArgs> = $Result.GetResult<Prisma.$GuildSettingPayload, S>

  type GuildSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildSettingCountAggregateInputType | true
    }

  export interface GuildSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildSetting'], meta: { name: 'GuildSetting' } }
    /**
     * Find zero or one GuildSetting that matches the filter.
     * @param {GuildSettingFindUniqueArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildSettingFindUniqueArgs>(args: SelectSubset<T, GuildSettingFindUniqueArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildSettingFindUniqueOrThrowArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingFindFirstArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildSettingFindFirstArgs>(args?: SelectSubset<T, GuildSettingFindFirstArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingFindFirstOrThrowArgs} args - Arguments to find a GuildSetting
     * @example
     * // Get one GuildSetting
     * const guildSetting = await prisma.guildSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildSettings
     * const guildSettings = await prisma.guildSetting.findMany()
     * 
     * // Get first 10 GuildSettings
     * const guildSettings = await prisma.guildSetting.findMany({ take: 10 })
     * 
     * // Only select the `guildId`
     * const guildSettingWithGuildIdOnly = await prisma.guildSetting.findMany({ select: { guildId: true } })
     * 
     */
    findMany<T extends GuildSettingFindManyArgs>(args?: SelectSubset<T, GuildSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildSetting.
     * @param {GuildSettingCreateArgs} args - Arguments to create a GuildSetting.
     * @example
     * // Create one GuildSetting
     * const GuildSetting = await prisma.guildSetting.create({
     *   data: {
     *     // ... data to create a GuildSetting
     *   }
     * })
     * 
     */
    create<T extends GuildSettingCreateArgs>(args: SelectSubset<T, GuildSettingCreateArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildSettings.
     * @param {GuildSettingCreateManyArgs} args - Arguments to create many GuildSettings.
     * @example
     * // Create many GuildSettings
     * const guildSetting = await prisma.guildSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildSettingCreateManyArgs>(args?: SelectSubset<T, GuildSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildSettings and returns the data saved in the database.
     * @param {GuildSettingCreateManyAndReturnArgs} args - Arguments to create many GuildSettings.
     * @example
     * // Create many GuildSettings
     * const guildSetting = await prisma.guildSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildSettings and only return the `guildId`
     * const guildSettingWithGuildIdOnly = await prisma.guildSetting.createManyAndReturn({
     *   select: { guildId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuildSetting.
     * @param {GuildSettingDeleteArgs} args - Arguments to delete one GuildSetting.
     * @example
     * // Delete one GuildSetting
     * const GuildSetting = await prisma.guildSetting.delete({
     *   where: {
     *     // ... filter to delete one GuildSetting
     *   }
     * })
     * 
     */
    delete<T extends GuildSettingDeleteArgs>(args: SelectSubset<T, GuildSettingDeleteArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildSetting.
     * @param {GuildSettingUpdateArgs} args - Arguments to update one GuildSetting.
     * @example
     * // Update one GuildSetting
     * const guildSetting = await prisma.guildSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildSettingUpdateArgs>(args: SelectSubset<T, GuildSettingUpdateArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildSettings.
     * @param {GuildSettingDeleteManyArgs} args - Arguments to filter GuildSettings to delete.
     * @example
     * // Delete a few GuildSettings
     * const { count } = await prisma.guildSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildSettingDeleteManyArgs>(args?: SelectSubset<T, GuildSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildSettings
     * const guildSetting = await prisma.guildSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildSettingUpdateManyArgs>(args: SelectSubset<T, GuildSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildSettings and returns the data updated in the database.
     * @param {GuildSettingUpdateManyAndReturnArgs} args - Arguments to update many GuildSettings.
     * @example
     * // Update many GuildSettings
     * const guildSetting = await prisma.guildSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuildSettings and only return the `guildId`
     * const guildSettingWithGuildIdOnly = await prisma.guildSetting.updateManyAndReturn({
     *   select: { guildId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuildSetting.
     * @param {GuildSettingUpsertArgs} args - Arguments to update or create a GuildSetting.
     * @example
     * // Update or create a GuildSetting
     * const guildSetting = await prisma.guildSetting.upsert({
     *   create: {
     *     // ... data to create a GuildSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildSetting we want to update
     *   }
     * })
     */
    upsert<T extends GuildSettingUpsertArgs>(args: SelectSubset<T, GuildSettingUpsertArgs<ExtArgs>>): Prisma__GuildSettingClient<$Result.GetResult<Prisma.$GuildSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingCountArgs} args - Arguments to filter GuildSettings to count.
     * @example
     * // Count the number of GuildSettings
     * const count = await prisma.guildSetting.count({
     *   where: {
     *     // ... the filter for the GuildSettings we want to count
     *   }
     * })
    **/
    count<T extends GuildSettingCountArgs>(
      args?: Subset<T, GuildSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuildSettingAggregateArgs>(args: Subset<T, GuildSettingAggregateArgs>): Prisma.PrismaPromise<GetGuildSettingAggregateType<T>>

    /**
     * Group by GuildSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuildSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildSettingGroupByArgs['orderBy'] }
        : { orderBy?: GuildSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuildSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildSetting model
   */
  readonly fields: GuildSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GuildSetting model
   */
  interface GuildSettingFieldRefs {
    readonly guildId: FieldRef<"GuildSetting", 'String'>
    readonly prefix: FieldRef<"GuildSetting", 'String'>
    readonly interactionsMode: FieldRef<"GuildSetting", 'Boolean'>
    readonly language: FieldRef<"GuildSetting", 'String'>
    readonly errorChannel: FieldRef<"GuildSetting", 'String'>
    readonly rpEnabled: FieldRef<"GuildSetting", 'Boolean'>
    readonly rpEnableRuns: FieldRef<"GuildSetting", 'Decimal'>
    readonly lastRpSyncRun: FieldRef<"GuildSetting", 'Decimal'>
    readonly ptReminderEnabled: FieldRef<"GuildSetting", 'Boolean'>
    readonly legacyRp: FieldRef<"GuildSetting", 'Boolean'>
    readonly editRpCommands: FieldRef<"GuildSetting", 'Boolean'>
    readonly enableInvitesAt: FieldRef<"GuildSetting", 'Decimal'>
    readonly statusChannel: FieldRef<"GuildSetting", 'String'>
    readonly updatesChannel: FieldRef<"GuildSetting", 'String'>
    readonly notifyChannel: FieldRef<"GuildSetting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GuildSetting findUnique
   */
  export type GuildSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting findUniqueOrThrow
   */
  export type GuildSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting findFirst
   */
  export type GuildSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildSettings.
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildSettings.
     */
    distinct?: GuildSettingScalarFieldEnum | GuildSettingScalarFieldEnum[]
  }

  /**
   * GuildSetting findFirstOrThrow
   */
  export type GuildSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * Filter, which GuildSetting to fetch.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildSettings.
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildSettings.
     */
    distinct?: GuildSettingScalarFieldEnum | GuildSettingScalarFieldEnum[]
  }

  /**
   * GuildSetting findMany
   */
  export type GuildSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * Filter, which GuildSettings to fetch.
     */
    where?: GuildSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildSettings to fetch.
     */
    orderBy?: GuildSettingOrderByWithRelationInput | GuildSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildSettings.
     */
    cursor?: GuildSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildSettings.
     */
    skip?: number
    distinct?: GuildSettingScalarFieldEnum | GuildSettingScalarFieldEnum[]
  }

  /**
   * GuildSetting create
   */
  export type GuildSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a GuildSetting.
     */
    data: XOR<GuildSettingCreateInput, GuildSettingUncheckedCreateInput>
  }

  /**
   * GuildSetting createMany
   */
  export type GuildSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildSettings.
     */
    data: GuildSettingCreateManyInput | GuildSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildSetting createManyAndReturn
   */
  export type GuildSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * The data used to create many GuildSettings.
     */
    data: GuildSettingCreateManyInput | GuildSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildSetting update
   */
  export type GuildSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a GuildSetting.
     */
    data: XOR<GuildSettingUpdateInput, GuildSettingUncheckedUpdateInput>
    /**
     * Choose, which GuildSetting to update.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting updateMany
   */
  export type GuildSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildSettings.
     */
    data: XOR<GuildSettingUpdateManyMutationInput, GuildSettingUncheckedUpdateManyInput>
    /**
     * Filter which GuildSettings to update
     */
    where?: GuildSettingWhereInput
    /**
     * Limit how many GuildSettings to update.
     */
    limit?: number
  }

  /**
   * GuildSetting updateManyAndReturn
   */
  export type GuildSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * The data used to update GuildSettings.
     */
    data: XOR<GuildSettingUpdateManyMutationInput, GuildSettingUncheckedUpdateManyInput>
    /**
     * Filter which GuildSettings to update
     */
    where?: GuildSettingWhereInput
    /**
     * Limit how many GuildSettings to update.
     */
    limit?: number
  }

  /**
   * GuildSetting upsert
   */
  export type GuildSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the GuildSetting to update in case it exists.
     */
    where: GuildSettingWhereUniqueInput
    /**
     * In case the GuildSetting found by the `where` argument doesn't exist, create a new GuildSetting with this data.
     */
    create: XOR<GuildSettingCreateInput, GuildSettingUncheckedCreateInput>
    /**
     * In case the GuildSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildSettingUpdateInput, GuildSettingUncheckedUpdateInput>
  }

  /**
   * GuildSetting delete
   */
  export type GuildSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
    /**
     * Filter which GuildSetting to delete.
     */
    where: GuildSettingWhereUniqueInput
  }

  /**
   * GuildSetting deleteMany
   */
  export type GuildSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildSettings to delete
     */
    where?: GuildSettingWhereInput
    /**
     * Limit how many GuildSettings to delete.
     */
    limit?: number
  }

  /**
   * GuildSetting without action
   */
  export type GuildSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildSetting
     */
    select?: GuildSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildSetting
     */
    omit?: GuildSettingOmit<ExtArgs> | null
  }


  /**
   * Model CustomClient
   */

  export type AggregateCustomClient = {
    _count: CustomClientCountAggregateOutputType | null
    _min: CustomClientMinAggregateOutputType | null
    _max: CustomClientMaxAggregateOutputType | null
  }

  export type CustomClientMinAggregateOutputType = {
    guildId: string | null
    appId: string | null
    token: string | null
    publicKey: string | null
    secret: string | null
  }

  export type CustomClientMaxAggregateOutputType = {
    guildId: string | null
    appId: string | null
    token: string | null
    publicKey: string | null
    secret: string | null
  }

  export type CustomClientCountAggregateOutputType = {
    guildId: number
    appId: number
    token: number
    publicKey: number
    secret: number
    _all: number
  }


  export type CustomClientMinAggregateInputType = {
    guildId?: true
    appId?: true
    token?: true
    publicKey?: true
    secret?: true
  }

  export type CustomClientMaxAggregateInputType = {
    guildId?: true
    appId?: true
    token?: true
    publicKey?: true
    secret?: true
  }

  export type CustomClientCountAggregateInputType = {
    guildId?: true
    appId?: true
    token?: true
    publicKey?: true
    secret?: true
    _all?: true
  }

  export type CustomClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomClient to aggregate.
     */
    where?: CustomClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomClients to fetch.
     */
    orderBy?: CustomClientOrderByWithRelationInput | CustomClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomClients
    **/
    _count?: true | CustomClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomClientMaxAggregateInputType
  }

  export type GetCustomClientAggregateType<T extends CustomClientAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomClient[P]>
      : GetScalarType<T[P], AggregateCustomClient[P]>
  }




  export type CustomClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomClientWhereInput
    orderBy?: CustomClientOrderByWithAggregationInput | CustomClientOrderByWithAggregationInput[]
    by: CustomClientScalarFieldEnum[] | CustomClientScalarFieldEnum
    having?: CustomClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomClientCountAggregateInputType | true
    _min?: CustomClientMinAggregateInputType
    _max?: CustomClientMaxAggregateInputType
  }

  export type CustomClientGroupByOutputType = {
    guildId: string
    appId: string | null
    token: string | null
    publicKey: string | null
    secret: string | null
    _count: CustomClientCountAggregateOutputType | null
    _min: CustomClientMinAggregateOutputType | null
    _max: CustomClientMaxAggregateOutputType | null
  }

  type GetCustomClientGroupByPayload<T extends CustomClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomClientGroupByOutputType[P]>
            : GetScalarType<T[P], CustomClientGroupByOutputType[P]>
        }
      >
    >


  export type CustomClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    appId?: boolean
    token?: boolean
    publicKey?: boolean
    secret?: boolean
  }, ExtArgs["result"]["customClient"]>

  export type CustomClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    appId?: boolean
    token?: boolean
    publicKey?: boolean
    secret?: boolean
  }, ExtArgs["result"]["customClient"]>

  export type CustomClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    appId?: boolean
    token?: boolean
    publicKey?: boolean
    secret?: boolean
  }, ExtArgs["result"]["customClient"]>

  export type CustomClientSelectScalar = {
    guildId?: boolean
    appId?: boolean
    token?: boolean
    publicKey?: boolean
    secret?: boolean
  }

  export type CustomClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guildId" | "appId" | "token" | "publicKey" | "secret", ExtArgs["result"]["customClient"]>

  export type $CustomClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomClient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      guildId: string
      appId: string | null
      token: string | null
      publicKey: string | null
      secret: string | null
    }, ExtArgs["result"]["customClient"]>
    composites: {}
  }

  type CustomClientGetPayload<S extends boolean | null | undefined | CustomClientDefaultArgs> = $Result.GetResult<Prisma.$CustomClientPayload, S>

  type CustomClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomClientCountAggregateInputType | true
    }

  export interface CustomClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomClient'], meta: { name: 'CustomClient' } }
    /**
     * Find zero or one CustomClient that matches the filter.
     * @param {CustomClientFindUniqueArgs} args - Arguments to find a CustomClient
     * @example
     * // Get one CustomClient
     * const customClient = await prisma.customClient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomClientFindUniqueArgs>(args: SelectSubset<T, CustomClientFindUniqueArgs<ExtArgs>>): Prisma__CustomClientClient<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomClient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomClientFindUniqueOrThrowArgs} args - Arguments to find a CustomClient
     * @example
     * // Get one CustomClient
     * const customClient = await prisma.customClient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomClientFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomClientClient<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomClient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomClientFindFirstArgs} args - Arguments to find a CustomClient
     * @example
     * // Get one CustomClient
     * const customClient = await prisma.customClient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomClientFindFirstArgs>(args?: SelectSubset<T, CustomClientFindFirstArgs<ExtArgs>>): Prisma__CustomClientClient<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomClient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomClientFindFirstOrThrowArgs} args - Arguments to find a CustomClient
     * @example
     * // Get one CustomClient
     * const customClient = await prisma.customClient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomClientFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomClientClient<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomClients
     * const customClients = await prisma.customClient.findMany()
     * 
     * // Get first 10 CustomClients
     * const customClients = await prisma.customClient.findMany({ take: 10 })
     * 
     * // Only select the `guildId`
     * const customClientWithGuildIdOnly = await prisma.customClient.findMany({ select: { guildId: true } })
     * 
     */
    findMany<T extends CustomClientFindManyArgs>(args?: SelectSubset<T, CustomClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomClient.
     * @param {CustomClientCreateArgs} args - Arguments to create a CustomClient.
     * @example
     * // Create one CustomClient
     * const CustomClient = await prisma.customClient.create({
     *   data: {
     *     // ... data to create a CustomClient
     *   }
     * })
     * 
     */
    create<T extends CustomClientCreateArgs>(args: SelectSubset<T, CustomClientCreateArgs<ExtArgs>>): Prisma__CustomClientClient<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomClients.
     * @param {CustomClientCreateManyArgs} args - Arguments to create many CustomClients.
     * @example
     * // Create many CustomClients
     * const customClient = await prisma.customClient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomClientCreateManyArgs>(args?: SelectSubset<T, CustomClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomClients and returns the data saved in the database.
     * @param {CustomClientCreateManyAndReturnArgs} args - Arguments to create many CustomClients.
     * @example
     * // Create many CustomClients
     * const customClient = await prisma.customClient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomClients and only return the `guildId`
     * const customClientWithGuildIdOnly = await prisma.customClient.createManyAndReturn({
     *   select: { guildId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomClientCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomClient.
     * @param {CustomClientDeleteArgs} args - Arguments to delete one CustomClient.
     * @example
     * // Delete one CustomClient
     * const CustomClient = await prisma.customClient.delete({
     *   where: {
     *     // ... filter to delete one CustomClient
     *   }
     * })
     * 
     */
    delete<T extends CustomClientDeleteArgs>(args: SelectSubset<T, CustomClientDeleteArgs<ExtArgs>>): Prisma__CustomClientClient<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomClient.
     * @param {CustomClientUpdateArgs} args - Arguments to update one CustomClient.
     * @example
     * // Update one CustomClient
     * const customClient = await prisma.customClient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomClientUpdateArgs>(args: SelectSubset<T, CustomClientUpdateArgs<ExtArgs>>): Prisma__CustomClientClient<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomClients.
     * @param {CustomClientDeleteManyArgs} args - Arguments to filter CustomClients to delete.
     * @example
     * // Delete a few CustomClients
     * const { count } = await prisma.customClient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomClientDeleteManyArgs>(args?: SelectSubset<T, CustomClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomClients
     * const customClient = await prisma.customClient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomClientUpdateManyArgs>(args: SelectSubset<T, CustomClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomClients and returns the data updated in the database.
     * @param {CustomClientUpdateManyAndReturnArgs} args - Arguments to update many CustomClients.
     * @example
     * // Update many CustomClients
     * const customClient = await prisma.customClient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomClients and only return the `guildId`
     * const customClientWithGuildIdOnly = await prisma.customClient.updateManyAndReturn({
     *   select: { guildId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomClientUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomClient.
     * @param {CustomClientUpsertArgs} args - Arguments to update or create a CustomClient.
     * @example
     * // Update or create a CustomClient
     * const customClient = await prisma.customClient.upsert({
     *   create: {
     *     // ... data to create a CustomClient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomClient we want to update
     *   }
     * })
     */
    upsert<T extends CustomClientUpsertArgs>(args: SelectSubset<T, CustomClientUpsertArgs<ExtArgs>>): Prisma__CustomClientClient<$Result.GetResult<Prisma.$CustomClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomClientCountArgs} args - Arguments to filter CustomClients to count.
     * @example
     * // Count the number of CustomClients
     * const count = await prisma.customClient.count({
     *   where: {
     *     // ... the filter for the CustomClients we want to count
     *   }
     * })
    **/
    count<T extends CustomClientCountArgs>(
      args?: Subset<T, CustomClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomClientAggregateArgs>(args: Subset<T, CustomClientAggregateArgs>): Prisma.PrismaPromise<GetCustomClientAggregateType<T>>

    /**
     * Group by CustomClient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomClientGroupByArgs['orderBy'] }
        : { orderBy?: CustomClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomClient model
   */
  readonly fields: CustomClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomClient model
   */
  interface CustomClientFieldRefs {
    readonly guildId: FieldRef<"CustomClient", 'String'>
    readonly appId: FieldRef<"CustomClient", 'String'>
    readonly token: FieldRef<"CustomClient", 'String'>
    readonly publicKey: FieldRef<"CustomClient", 'String'>
    readonly secret: FieldRef<"CustomClient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomClient findUnique
   */
  export type CustomClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * Filter, which CustomClient to fetch.
     */
    where: CustomClientWhereUniqueInput
  }

  /**
   * CustomClient findUniqueOrThrow
   */
  export type CustomClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * Filter, which CustomClient to fetch.
     */
    where: CustomClientWhereUniqueInput
  }

  /**
   * CustomClient findFirst
   */
  export type CustomClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * Filter, which CustomClient to fetch.
     */
    where?: CustomClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomClients to fetch.
     */
    orderBy?: CustomClientOrderByWithRelationInput | CustomClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomClients.
     */
    cursor?: CustomClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomClients.
     */
    distinct?: CustomClientScalarFieldEnum | CustomClientScalarFieldEnum[]
  }

  /**
   * CustomClient findFirstOrThrow
   */
  export type CustomClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * Filter, which CustomClient to fetch.
     */
    where?: CustomClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomClients to fetch.
     */
    orderBy?: CustomClientOrderByWithRelationInput | CustomClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomClients.
     */
    cursor?: CustomClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomClients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomClients.
     */
    distinct?: CustomClientScalarFieldEnum | CustomClientScalarFieldEnum[]
  }

  /**
   * CustomClient findMany
   */
  export type CustomClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * Filter, which CustomClients to fetch.
     */
    where?: CustomClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomClients to fetch.
     */
    orderBy?: CustomClientOrderByWithRelationInput | CustomClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomClients.
     */
    cursor?: CustomClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomClients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomClients.
     */
    skip?: number
    distinct?: CustomClientScalarFieldEnum | CustomClientScalarFieldEnum[]
  }

  /**
   * CustomClient create
   */
  export type CustomClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * The data needed to create a CustomClient.
     */
    data: XOR<CustomClientCreateInput, CustomClientUncheckedCreateInput>
  }

  /**
   * CustomClient createMany
   */
  export type CustomClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomClients.
     */
    data: CustomClientCreateManyInput | CustomClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomClient createManyAndReturn
   */
  export type CustomClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * The data used to create many CustomClients.
     */
    data: CustomClientCreateManyInput | CustomClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomClient update
   */
  export type CustomClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * The data needed to update a CustomClient.
     */
    data: XOR<CustomClientUpdateInput, CustomClientUncheckedUpdateInput>
    /**
     * Choose, which CustomClient to update.
     */
    where: CustomClientWhereUniqueInput
  }

  /**
   * CustomClient updateMany
   */
  export type CustomClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomClients.
     */
    data: XOR<CustomClientUpdateManyMutationInput, CustomClientUncheckedUpdateManyInput>
    /**
     * Filter which CustomClients to update
     */
    where?: CustomClientWhereInput
    /**
     * Limit how many CustomClients to update.
     */
    limit?: number
  }

  /**
   * CustomClient updateManyAndReturn
   */
  export type CustomClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * The data used to update CustomClients.
     */
    data: XOR<CustomClientUpdateManyMutationInput, CustomClientUncheckedUpdateManyInput>
    /**
     * Filter which CustomClients to update
     */
    where?: CustomClientWhereInput
    /**
     * Limit how many CustomClients to update.
     */
    limit?: number
  }

  /**
   * CustomClient upsert
   */
  export type CustomClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * The filter to search for the CustomClient to update in case it exists.
     */
    where: CustomClientWhereUniqueInput
    /**
     * In case the CustomClient found by the `where` argument doesn't exist, create a new CustomClient with this data.
     */
    create: XOR<CustomClientCreateInput, CustomClientUncheckedCreateInput>
    /**
     * In case the CustomClient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomClientUpdateInput, CustomClientUncheckedUpdateInput>
  }

  /**
   * CustomClient delete
   */
  export type CustomClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
    /**
     * Filter which CustomClient to delete.
     */
    where: CustomClientWhereUniqueInput
  }

  /**
   * CustomClient deleteMany
   */
  export type CustomClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomClients to delete
     */
    where?: CustomClientWhereInput
    /**
     * Limit how many CustomClients to delete.
     */
    limit?: number
  }

  /**
   * CustomClient without action
   */
  export type CustomClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomClient
     */
    select?: CustomClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomClient
     */
    omit?: CustomClientOmit<ExtArgs> | null
  }


  /**
   * Model FilteredWord
   */

  export type AggregateFilteredWord = {
    _count: FilteredWordCountAggregateOutputType | null
    _min: FilteredWordMinAggregateOutputType | null
    _max: FilteredWordMaxAggregateOutputType | null
  }

  export type FilteredWordMinAggregateOutputType = {
    keyword: string | null
    filterType: $Enums.FilterType | null
  }

  export type FilteredWordMaxAggregateOutputType = {
    keyword: string | null
    filterType: $Enums.FilterType | null
  }

  export type FilteredWordCountAggregateOutputType = {
    keyword: number
    filterType: number
    _all: number
  }


  export type FilteredWordMinAggregateInputType = {
    keyword?: true
    filterType?: true
  }

  export type FilteredWordMaxAggregateInputType = {
    keyword?: true
    filterType?: true
  }

  export type FilteredWordCountAggregateInputType = {
    keyword?: true
    filterType?: true
    _all?: true
  }

  export type FilteredWordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilteredWord to aggregate.
     */
    where?: FilteredWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteredWords to fetch.
     */
    orderBy?: FilteredWordOrderByWithRelationInput | FilteredWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilteredWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteredWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteredWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilteredWords
    **/
    _count?: true | FilteredWordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilteredWordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilteredWordMaxAggregateInputType
  }

  export type GetFilteredWordAggregateType<T extends FilteredWordAggregateArgs> = {
        [P in keyof T & keyof AggregateFilteredWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilteredWord[P]>
      : GetScalarType<T[P], AggregateFilteredWord[P]>
  }




  export type FilteredWordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilteredWordWhereInput
    orderBy?: FilteredWordOrderByWithAggregationInput | FilteredWordOrderByWithAggregationInput[]
    by: FilteredWordScalarFieldEnum[] | FilteredWordScalarFieldEnum
    having?: FilteredWordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilteredWordCountAggregateInputType | true
    _min?: FilteredWordMinAggregateInputType
    _max?: FilteredWordMaxAggregateInputType
  }

  export type FilteredWordGroupByOutputType = {
    keyword: string
    filterType: $Enums.FilterType
    _count: FilteredWordCountAggregateOutputType | null
    _min: FilteredWordMinAggregateOutputType | null
    _max: FilteredWordMaxAggregateOutputType | null
  }

  type GetFilteredWordGroupByPayload<T extends FilteredWordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilteredWordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilteredWordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilteredWordGroupByOutputType[P]>
            : GetScalarType<T[P], FilteredWordGroupByOutputType[P]>
        }
      >
    >


  export type FilteredWordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    keyword?: boolean
    filterType?: boolean
  }, ExtArgs["result"]["filteredWord"]>

  export type FilteredWordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    keyword?: boolean
    filterType?: boolean
  }, ExtArgs["result"]["filteredWord"]>

  export type FilteredWordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    keyword?: boolean
    filterType?: boolean
  }, ExtArgs["result"]["filteredWord"]>

  export type FilteredWordSelectScalar = {
    keyword?: boolean
    filterType?: boolean
  }

  export type FilteredWordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"keyword" | "filterType", ExtArgs["result"]["filteredWord"]>

  export type $FilteredWordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilteredWord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      keyword: string
      filterType: $Enums.FilterType
    }, ExtArgs["result"]["filteredWord"]>
    composites: {}
  }

  type FilteredWordGetPayload<S extends boolean | null | undefined | FilteredWordDefaultArgs> = $Result.GetResult<Prisma.$FilteredWordPayload, S>

  type FilteredWordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilteredWordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilteredWordCountAggregateInputType | true
    }

  export interface FilteredWordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilteredWord'], meta: { name: 'FilteredWord' } }
    /**
     * Find zero or one FilteredWord that matches the filter.
     * @param {FilteredWordFindUniqueArgs} args - Arguments to find a FilteredWord
     * @example
     * // Get one FilteredWord
     * const filteredWord = await prisma.filteredWord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilteredWordFindUniqueArgs>(args: SelectSubset<T, FilteredWordFindUniqueArgs<ExtArgs>>): Prisma__FilteredWordClient<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilteredWord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilteredWordFindUniqueOrThrowArgs} args - Arguments to find a FilteredWord
     * @example
     * // Get one FilteredWord
     * const filteredWord = await prisma.filteredWord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilteredWordFindUniqueOrThrowArgs>(args: SelectSubset<T, FilteredWordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilteredWordClient<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilteredWord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteredWordFindFirstArgs} args - Arguments to find a FilteredWord
     * @example
     * // Get one FilteredWord
     * const filteredWord = await prisma.filteredWord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilteredWordFindFirstArgs>(args?: SelectSubset<T, FilteredWordFindFirstArgs<ExtArgs>>): Prisma__FilteredWordClient<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilteredWord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteredWordFindFirstOrThrowArgs} args - Arguments to find a FilteredWord
     * @example
     * // Get one FilteredWord
     * const filteredWord = await prisma.filteredWord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilteredWordFindFirstOrThrowArgs>(args?: SelectSubset<T, FilteredWordFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilteredWordClient<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilteredWords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteredWordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilteredWords
     * const filteredWords = await prisma.filteredWord.findMany()
     * 
     * // Get first 10 FilteredWords
     * const filteredWords = await prisma.filteredWord.findMany({ take: 10 })
     * 
     * // Only select the `keyword`
     * const filteredWordWithKeywordOnly = await prisma.filteredWord.findMany({ select: { keyword: true } })
     * 
     */
    findMany<T extends FilteredWordFindManyArgs>(args?: SelectSubset<T, FilteredWordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilteredWord.
     * @param {FilteredWordCreateArgs} args - Arguments to create a FilteredWord.
     * @example
     * // Create one FilteredWord
     * const FilteredWord = await prisma.filteredWord.create({
     *   data: {
     *     // ... data to create a FilteredWord
     *   }
     * })
     * 
     */
    create<T extends FilteredWordCreateArgs>(args: SelectSubset<T, FilteredWordCreateArgs<ExtArgs>>): Prisma__FilteredWordClient<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilteredWords.
     * @param {FilteredWordCreateManyArgs} args - Arguments to create many FilteredWords.
     * @example
     * // Create many FilteredWords
     * const filteredWord = await prisma.filteredWord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilteredWordCreateManyArgs>(args?: SelectSubset<T, FilteredWordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FilteredWords and returns the data saved in the database.
     * @param {FilteredWordCreateManyAndReturnArgs} args - Arguments to create many FilteredWords.
     * @example
     * // Create many FilteredWords
     * const filteredWord = await prisma.filteredWord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FilteredWords and only return the `keyword`
     * const filteredWordWithKeywordOnly = await prisma.filteredWord.createManyAndReturn({
     *   select: { keyword: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilteredWordCreateManyAndReturnArgs>(args?: SelectSubset<T, FilteredWordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FilteredWord.
     * @param {FilteredWordDeleteArgs} args - Arguments to delete one FilteredWord.
     * @example
     * // Delete one FilteredWord
     * const FilteredWord = await prisma.filteredWord.delete({
     *   where: {
     *     // ... filter to delete one FilteredWord
     *   }
     * })
     * 
     */
    delete<T extends FilteredWordDeleteArgs>(args: SelectSubset<T, FilteredWordDeleteArgs<ExtArgs>>): Prisma__FilteredWordClient<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilteredWord.
     * @param {FilteredWordUpdateArgs} args - Arguments to update one FilteredWord.
     * @example
     * // Update one FilteredWord
     * const filteredWord = await prisma.filteredWord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilteredWordUpdateArgs>(args: SelectSubset<T, FilteredWordUpdateArgs<ExtArgs>>): Prisma__FilteredWordClient<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilteredWords.
     * @param {FilteredWordDeleteManyArgs} args - Arguments to filter FilteredWords to delete.
     * @example
     * // Delete a few FilteredWords
     * const { count } = await prisma.filteredWord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilteredWordDeleteManyArgs>(args?: SelectSubset<T, FilteredWordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilteredWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteredWordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilteredWords
     * const filteredWord = await prisma.filteredWord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilteredWordUpdateManyArgs>(args: SelectSubset<T, FilteredWordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilteredWords and returns the data updated in the database.
     * @param {FilteredWordUpdateManyAndReturnArgs} args - Arguments to update many FilteredWords.
     * @example
     * // Update many FilteredWords
     * const filteredWord = await prisma.filteredWord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FilteredWords and only return the `keyword`
     * const filteredWordWithKeywordOnly = await prisma.filteredWord.updateManyAndReturn({
     *   select: { keyword: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilteredWordUpdateManyAndReturnArgs>(args: SelectSubset<T, FilteredWordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FilteredWord.
     * @param {FilteredWordUpsertArgs} args - Arguments to update or create a FilteredWord.
     * @example
     * // Update or create a FilteredWord
     * const filteredWord = await prisma.filteredWord.upsert({
     *   create: {
     *     // ... data to create a FilteredWord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilteredWord we want to update
     *   }
     * })
     */
    upsert<T extends FilteredWordUpsertArgs>(args: SelectSubset<T, FilteredWordUpsertArgs<ExtArgs>>): Prisma__FilteredWordClient<$Result.GetResult<Prisma.$FilteredWordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilteredWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteredWordCountArgs} args - Arguments to filter FilteredWords to count.
     * @example
     * // Count the number of FilteredWords
     * const count = await prisma.filteredWord.count({
     *   where: {
     *     // ... the filter for the FilteredWords we want to count
     *   }
     * })
    **/
    count<T extends FilteredWordCountArgs>(
      args?: Subset<T, FilteredWordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilteredWordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilteredWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteredWordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilteredWordAggregateArgs>(args: Subset<T, FilteredWordAggregateArgs>): Prisma.PrismaPromise<GetFilteredWordAggregateType<T>>

    /**
     * Group by FilteredWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilteredWordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilteredWordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilteredWordGroupByArgs['orderBy'] }
        : { orderBy?: FilteredWordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilteredWordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilteredWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilteredWord model
   */
  readonly fields: FilteredWordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilteredWord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilteredWordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FilteredWord model
   */
  interface FilteredWordFieldRefs {
    readonly keyword: FieldRef<"FilteredWord", 'String'>
    readonly filterType: FieldRef<"FilteredWord", 'FilterType'>
  }
    

  // Custom InputTypes
  /**
   * FilteredWord findUnique
   */
  export type FilteredWordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * Filter, which FilteredWord to fetch.
     */
    where: FilteredWordWhereUniqueInput
  }

  /**
   * FilteredWord findUniqueOrThrow
   */
  export type FilteredWordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * Filter, which FilteredWord to fetch.
     */
    where: FilteredWordWhereUniqueInput
  }

  /**
   * FilteredWord findFirst
   */
  export type FilteredWordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * Filter, which FilteredWord to fetch.
     */
    where?: FilteredWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteredWords to fetch.
     */
    orderBy?: FilteredWordOrderByWithRelationInput | FilteredWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilteredWords.
     */
    cursor?: FilteredWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteredWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteredWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilteredWords.
     */
    distinct?: FilteredWordScalarFieldEnum | FilteredWordScalarFieldEnum[]
  }

  /**
   * FilteredWord findFirstOrThrow
   */
  export type FilteredWordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * Filter, which FilteredWord to fetch.
     */
    where?: FilteredWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteredWords to fetch.
     */
    orderBy?: FilteredWordOrderByWithRelationInput | FilteredWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilteredWords.
     */
    cursor?: FilteredWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteredWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteredWords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilteredWords.
     */
    distinct?: FilteredWordScalarFieldEnum | FilteredWordScalarFieldEnum[]
  }

  /**
   * FilteredWord findMany
   */
  export type FilteredWordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * Filter, which FilteredWords to fetch.
     */
    where?: FilteredWordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilteredWords to fetch.
     */
    orderBy?: FilteredWordOrderByWithRelationInput | FilteredWordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilteredWords.
     */
    cursor?: FilteredWordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilteredWords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilteredWords.
     */
    skip?: number
    distinct?: FilteredWordScalarFieldEnum | FilteredWordScalarFieldEnum[]
  }

  /**
   * FilteredWord create
   */
  export type FilteredWordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * The data needed to create a FilteredWord.
     */
    data: XOR<FilteredWordCreateInput, FilteredWordUncheckedCreateInput>
  }

  /**
   * FilteredWord createMany
   */
  export type FilteredWordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilteredWords.
     */
    data: FilteredWordCreateManyInput | FilteredWordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilteredWord createManyAndReturn
   */
  export type FilteredWordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * The data used to create many FilteredWords.
     */
    data: FilteredWordCreateManyInput | FilteredWordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilteredWord update
   */
  export type FilteredWordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * The data needed to update a FilteredWord.
     */
    data: XOR<FilteredWordUpdateInput, FilteredWordUncheckedUpdateInput>
    /**
     * Choose, which FilteredWord to update.
     */
    where: FilteredWordWhereUniqueInput
  }

  /**
   * FilteredWord updateMany
   */
  export type FilteredWordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilteredWords.
     */
    data: XOR<FilteredWordUpdateManyMutationInput, FilteredWordUncheckedUpdateManyInput>
    /**
     * Filter which FilteredWords to update
     */
    where?: FilteredWordWhereInput
    /**
     * Limit how many FilteredWords to update.
     */
    limit?: number
  }

  /**
   * FilteredWord updateManyAndReturn
   */
  export type FilteredWordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * The data used to update FilteredWords.
     */
    data: XOR<FilteredWordUpdateManyMutationInput, FilteredWordUncheckedUpdateManyInput>
    /**
     * Filter which FilteredWords to update
     */
    where?: FilteredWordWhereInput
    /**
     * Limit how many FilteredWords to update.
     */
    limit?: number
  }

  /**
   * FilteredWord upsert
   */
  export type FilteredWordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * The filter to search for the FilteredWord to update in case it exists.
     */
    where: FilteredWordWhereUniqueInput
    /**
     * In case the FilteredWord found by the `where` argument doesn't exist, create a new FilteredWord with this data.
     */
    create: XOR<FilteredWordCreateInput, FilteredWordUncheckedCreateInput>
    /**
     * In case the FilteredWord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilteredWordUpdateInput, FilteredWordUncheckedUpdateInput>
  }

  /**
   * FilteredWord delete
   */
  export type FilteredWordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
    /**
     * Filter which FilteredWord to delete.
     */
    where: FilteredWordWhereUniqueInput
  }

  /**
   * FilteredWord deleteMany
   */
  export type FilteredWordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilteredWords to delete
     */
    where?: FilteredWordWhereInput
    /**
     * Limit how many FilteredWords to delete.
     */
    limit?: number
  }

  /**
   * FilteredWord without action
   */
  export type FilteredWordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilteredWord
     */
    select?: FilteredWordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilteredWord
     */
    omit?: FilteredWordOmit<ExtArgs> | null
  }


  /**
   * Model AfkState
   */

  export type AggregateAfkState = {
    _count: AfkStateCountAggregateOutputType | null
    _avg: AfkStateAvgAggregateOutputType | null
    _sum: AfkStateSumAggregateOutputType | null
    _min: AfkStateMinAggregateOutputType | null
    _max: AfkStateMaxAggregateOutputType | null
  }

  export type AfkStateAvgAggregateOutputType = {
    since: Decimal | null
  }

  export type AfkStateSumAggregateOutputType = {
    since: Decimal | null
  }

  export type AfkStateMinAggregateOutputType = {
    userId: string | null
    reason: string | null
    since: Decimal | null
    guildId: string | null
  }

  export type AfkStateMaxAggregateOutputType = {
    userId: string | null
    reason: string | null
    since: Decimal | null
    guildId: string | null
  }

  export type AfkStateCountAggregateOutputType = {
    userId: number
    reason: number
    since: number
    guildId: number
    _all: number
  }


  export type AfkStateAvgAggregateInputType = {
    since?: true
  }

  export type AfkStateSumAggregateInputType = {
    since?: true
  }

  export type AfkStateMinAggregateInputType = {
    userId?: true
    reason?: true
    since?: true
    guildId?: true
  }

  export type AfkStateMaxAggregateInputType = {
    userId?: true
    reason?: true
    since?: true
    guildId?: true
  }

  export type AfkStateCountAggregateInputType = {
    userId?: true
    reason?: true
    since?: true
    guildId?: true
    _all?: true
  }

  export type AfkStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AfkState to aggregate.
     */
    where?: AfkStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AfkStates to fetch.
     */
    orderBy?: AfkStateOrderByWithRelationInput | AfkStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AfkStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AfkStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AfkStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AfkStates
    **/
    _count?: true | AfkStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AfkStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AfkStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AfkStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AfkStateMaxAggregateInputType
  }

  export type GetAfkStateAggregateType<T extends AfkStateAggregateArgs> = {
        [P in keyof T & keyof AggregateAfkState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAfkState[P]>
      : GetScalarType<T[P], AggregateAfkState[P]>
  }




  export type AfkStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AfkStateWhereInput
    orderBy?: AfkStateOrderByWithAggregationInput | AfkStateOrderByWithAggregationInput[]
    by: AfkStateScalarFieldEnum[] | AfkStateScalarFieldEnum
    having?: AfkStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AfkStateCountAggregateInputType | true
    _avg?: AfkStateAvgAggregateInputType
    _sum?: AfkStateSumAggregateInputType
    _min?: AfkStateMinAggregateInputType
    _max?: AfkStateMaxAggregateInputType
  }

  export type AfkStateGroupByOutputType = {
    userId: string
    reason: string | null
    since: Decimal
    guildId: string
    _count: AfkStateCountAggregateOutputType | null
    _avg: AfkStateAvgAggregateOutputType | null
    _sum: AfkStateSumAggregateOutputType | null
    _min: AfkStateMinAggregateOutputType | null
    _max: AfkStateMaxAggregateOutputType | null
  }

  type GetAfkStateGroupByPayload<T extends AfkStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AfkStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AfkStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AfkStateGroupByOutputType[P]>
            : GetScalarType<T[P], AfkStateGroupByOutputType[P]>
        }
      >
    >


  export type AfkStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    reason?: boolean
    since?: boolean
    guildId?: boolean
  }, ExtArgs["result"]["afkState"]>

  export type AfkStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    reason?: boolean
    since?: boolean
    guildId?: boolean
  }, ExtArgs["result"]["afkState"]>

  export type AfkStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    reason?: boolean
    since?: boolean
    guildId?: boolean
  }, ExtArgs["result"]["afkState"]>

  export type AfkStateSelectScalar = {
    userId?: boolean
    reason?: boolean
    since?: boolean
    guildId?: boolean
  }

  export type AfkStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "reason" | "since" | "guildId", ExtArgs["result"]["afkState"]>

  export type $AfkStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AfkState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      reason: string | null
      since: Prisma.Decimal
      guildId: string
    }, ExtArgs["result"]["afkState"]>
    composites: {}
  }

  type AfkStateGetPayload<S extends boolean | null | undefined | AfkStateDefaultArgs> = $Result.GetResult<Prisma.$AfkStatePayload, S>

  type AfkStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AfkStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AfkStateCountAggregateInputType | true
    }

  export interface AfkStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AfkState'], meta: { name: 'AfkState' } }
    /**
     * Find zero or one AfkState that matches the filter.
     * @param {AfkStateFindUniqueArgs} args - Arguments to find a AfkState
     * @example
     * // Get one AfkState
     * const afkState = await prisma.afkState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AfkStateFindUniqueArgs>(args: SelectSubset<T, AfkStateFindUniqueArgs<ExtArgs>>): Prisma__AfkStateClient<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AfkState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AfkStateFindUniqueOrThrowArgs} args - Arguments to find a AfkState
     * @example
     * // Get one AfkState
     * const afkState = await prisma.afkState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AfkStateFindUniqueOrThrowArgs>(args: SelectSubset<T, AfkStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AfkStateClient<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AfkState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkStateFindFirstArgs} args - Arguments to find a AfkState
     * @example
     * // Get one AfkState
     * const afkState = await prisma.afkState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AfkStateFindFirstArgs>(args?: SelectSubset<T, AfkStateFindFirstArgs<ExtArgs>>): Prisma__AfkStateClient<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AfkState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkStateFindFirstOrThrowArgs} args - Arguments to find a AfkState
     * @example
     * // Get one AfkState
     * const afkState = await prisma.afkState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AfkStateFindFirstOrThrowArgs>(args?: SelectSubset<T, AfkStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__AfkStateClient<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AfkStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AfkStates
     * const afkStates = await prisma.afkState.findMany()
     * 
     * // Get first 10 AfkStates
     * const afkStates = await prisma.afkState.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const afkStateWithUserIdOnly = await prisma.afkState.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AfkStateFindManyArgs>(args?: SelectSubset<T, AfkStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AfkState.
     * @param {AfkStateCreateArgs} args - Arguments to create a AfkState.
     * @example
     * // Create one AfkState
     * const AfkState = await prisma.afkState.create({
     *   data: {
     *     // ... data to create a AfkState
     *   }
     * })
     * 
     */
    create<T extends AfkStateCreateArgs>(args: SelectSubset<T, AfkStateCreateArgs<ExtArgs>>): Prisma__AfkStateClient<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AfkStates.
     * @param {AfkStateCreateManyArgs} args - Arguments to create many AfkStates.
     * @example
     * // Create many AfkStates
     * const afkState = await prisma.afkState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AfkStateCreateManyArgs>(args?: SelectSubset<T, AfkStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AfkStates and returns the data saved in the database.
     * @param {AfkStateCreateManyAndReturnArgs} args - Arguments to create many AfkStates.
     * @example
     * // Create many AfkStates
     * const afkState = await prisma.afkState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AfkStates and only return the `userId`
     * const afkStateWithUserIdOnly = await prisma.afkState.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AfkStateCreateManyAndReturnArgs>(args?: SelectSubset<T, AfkStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AfkState.
     * @param {AfkStateDeleteArgs} args - Arguments to delete one AfkState.
     * @example
     * // Delete one AfkState
     * const AfkState = await prisma.afkState.delete({
     *   where: {
     *     // ... filter to delete one AfkState
     *   }
     * })
     * 
     */
    delete<T extends AfkStateDeleteArgs>(args: SelectSubset<T, AfkStateDeleteArgs<ExtArgs>>): Prisma__AfkStateClient<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AfkState.
     * @param {AfkStateUpdateArgs} args - Arguments to update one AfkState.
     * @example
     * // Update one AfkState
     * const afkState = await prisma.afkState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AfkStateUpdateArgs>(args: SelectSubset<T, AfkStateUpdateArgs<ExtArgs>>): Prisma__AfkStateClient<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AfkStates.
     * @param {AfkStateDeleteManyArgs} args - Arguments to filter AfkStates to delete.
     * @example
     * // Delete a few AfkStates
     * const { count } = await prisma.afkState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AfkStateDeleteManyArgs>(args?: SelectSubset<T, AfkStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AfkStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AfkStates
     * const afkState = await prisma.afkState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AfkStateUpdateManyArgs>(args: SelectSubset<T, AfkStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AfkStates and returns the data updated in the database.
     * @param {AfkStateUpdateManyAndReturnArgs} args - Arguments to update many AfkStates.
     * @example
     * // Update many AfkStates
     * const afkState = await prisma.afkState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AfkStates and only return the `userId`
     * const afkStateWithUserIdOnly = await prisma.afkState.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AfkStateUpdateManyAndReturnArgs>(args: SelectSubset<T, AfkStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AfkState.
     * @param {AfkStateUpsertArgs} args - Arguments to update or create a AfkState.
     * @example
     * // Update or create a AfkState
     * const afkState = await prisma.afkState.upsert({
     *   create: {
     *     // ... data to create a AfkState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AfkState we want to update
     *   }
     * })
     */
    upsert<T extends AfkStateUpsertArgs>(args: SelectSubset<T, AfkStateUpsertArgs<ExtArgs>>): Prisma__AfkStateClient<$Result.GetResult<Prisma.$AfkStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AfkStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkStateCountArgs} args - Arguments to filter AfkStates to count.
     * @example
     * // Count the number of AfkStates
     * const count = await prisma.afkState.count({
     *   where: {
     *     // ... the filter for the AfkStates we want to count
     *   }
     * })
    **/
    count<T extends AfkStateCountArgs>(
      args?: Subset<T, AfkStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AfkStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AfkState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AfkStateAggregateArgs>(args: Subset<T, AfkStateAggregateArgs>): Prisma.PrismaPromise<GetAfkStateAggregateType<T>>

    /**
     * Group by AfkState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AfkStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AfkStateGroupByArgs['orderBy'] }
        : { orderBy?: AfkStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AfkStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAfkStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AfkState model
   */
  readonly fields: AfkStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AfkState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AfkStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AfkState model
   */
  interface AfkStateFieldRefs {
    readonly userId: FieldRef<"AfkState", 'String'>
    readonly reason: FieldRef<"AfkState", 'String'>
    readonly since: FieldRef<"AfkState", 'Decimal'>
    readonly guildId: FieldRef<"AfkState", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AfkState findUnique
   */
  export type AfkStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * Filter, which AfkState to fetch.
     */
    where: AfkStateWhereUniqueInput
  }

  /**
   * AfkState findUniqueOrThrow
   */
  export type AfkStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * Filter, which AfkState to fetch.
     */
    where: AfkStateWhereUniqueInput
  }

  /**
   * AfkState findFirst
   */
  export type AfkStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * Filter, which AfkState to fetch.
     */
    where?: AfkStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AfkStates to fetch.
     */
    orderBy?: AfkStateOrderByWithRelationInput | AfkStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AfkStates.
     */
    cursor?: AfkStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AfkStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AfkStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AfkStates.
     */
    distinct?: AfkStateScalarFieldEnum | AfkStateScalarFieldEnum[]
  }

  /**
   * AfkState findFirstOrThrow
   */
  export type AfkStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * Filter, which AfkState to fetch.
     */
    where?: AfkStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AfkStates to fetch.
     */
    orderBy?: AfkStateOrderByWithRelationInput | AfkStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AfkStates.
     */
    cursor?: AfkStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AfkStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AfkStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AfkStates.
     */
    distinct?: AfkStateScalarFieldEnum | AfkStateScalarFieldEnum[]
  }

  /**
   * AfkState findMany
   */
  export type AfkStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * Filter, which AfkStates to fetch.
     */
    where?: AfkStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AfkStates to fetch.
     */
    orderBy?: AfkStateOrderByWithRelationInput | AfkStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AfkStates.
     */
    cursor?: AfkStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AfkStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AfkStates.
     */
    skip?: number
    distinct?: AfkStateScalarFieldEnum | AfkStateScalarFieldEnum[]
  }

  /**
   * AfkState create
   */
  export type AfkStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * The data needed to create a AfkState.
     */
    data: XOR<AfkStateCreateInput, AfkStateUncheckedCreateInput>
  }

  /**
   * AfkState createMany
   */
  export type AfkStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AfkStates.
     */
    data: AfkStateCreateManyInput | AfkStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AfkState createManyAndReturn
   */
  export type AfkStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * The data used to create many AfkStates.
     */
    data: AfkStateCreateManyInput | AfkStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AfkState update
   */
  export type AfkStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * The data needed to update a AfkState.
     */
    data: XOR<AfkStateUpdateInput, AfkStateUncheckedUpdateInput>
    /**
     * Choose, which AfkState to update.
     */
    where: AfkStateWhereUniqueInput
  }

  /**
   * AfkState updateMany
   */
  export type AfkStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AfkStates.
     */
    data: XOR<AfkStateUpdateManyMutationInput, AfkStateUncheckedUpdateManyInput>
    /**
     * Filter which AfkStates to update
     */
    where?: AfkStateWhereInput
    /**
     * Limit how many AfkStates to update.
     */
    limit?: number
  }

  /**
   * AfkState updateManyAndReturn
   */
  export type AfkStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * The data used to update AfkStates.
     */
    data: XOR<AfkStateUpdateManyMutationInput, AfkStateUncheckedUpdateManyInput>
    /**
     * Filter which AfkStates to update
     */
    where?: AfkStateWhereInput
    /**
     * Limit how many AfkStates to update.
     */
    limit?: number
  }

  /**
   * AfkState upsert
   */
  export type AfkStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * The filter to search for the AfkState to update in case it exists.
     */
    where: AfkStateWhereUniqueInput
    /**
     * In case the AfkState found by the `where` argument doesn't exist, create a new AfkState with this data.
     */
    create: XOR<AfkStateCreateInput, AfkStateUncheckedCreateInput>
    /**
     * In case the AfkState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AfkStateUpdateInput, AfkStateUncheckedUpdateInput>
  }

  /**
   * AfkState delete
   */
  export type AfkStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
    /**
     * Filter which AfkState to delete.
     */
    where: AfkStateWhereUniqueInput
  }

  /**
   * AfkState deleteMany
   */
  export type AfkStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AfkStates to delete
     */
    where?: AfkStateWhereInput
    /**
     * Limit how many AfkStates to delete.
     */
    limit?: number
  }

  /**
   * AfkState without action
   */
  export type AfkStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkState
     */
    select?: AfkStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkState
     */
    omit?: AfkStateOmit<ExtArgs> | null
  }


  /**
   * Model AfkSetting
   */

  export type AggregateAfkSetting = {
    _count: AfkSettingCountAggregateOutputType | null
    _avg: AfkSettingAvgAggregateOutputType | null
    _sum: AfkSettingSumAggregateOutputType | null
    _min: AfkSettingMinAggregateOutputType | null
    _max: AfkSettingMaxAggregateOutputType | null
  }

  export type AfkSettingAvgAggregateOutputType = {
    maxLetters: number | null
  }

  export type AfkSettingSumAggregateOutputType = {
    maxLetters: number | null
  }

  export type AfkSettingMinAggregateOutputType = {
    guildId: string | null
    maxLetters: number | null
  }

  export type AfkSettingMaxAggregateOutputType = {
    guildId: string | null
    maxLetters: number | null
  }

  export type AfkSettingCountAggregateOutputType = {
    guildId: number
    maxLetters: number
    _all: number
  }


  export type AfkSettingAvgAggregateInputType = {
    maxLetters?: true
  }

  export type AfkSettingSumAggregateInputType = {
    maxLetters?: true
  }

  export type AfkSettingMinAggregateInputType = {
    guildId?: true
    maxLetters?: true
  }

  export type AfkSettingMaxAggregateInputType = {
    guildId?: true
    maxLetters?: true
  }

  export type AfkSettingCountAggregateInputType = {
    guildId?: true
    maxLetters?: true
    _all?: true
  }

  export type AfkSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AfkSetting to aggregate.
     */
    where?: AfkSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AfkSettings to fetch.
     */
    orderBy?: AfkSettingOrderByWithRelationInput | AfkSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AfkSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AfkSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AfkSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AfkSettings
    **/
    _count?: true | AfkSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AfkSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AfkSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AfkSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AfkSettingMaxAggregateInputType
  }

  export type GetAfkSettingAggregateType<T extends AfkSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateAfkSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAfkSetting[P]>
      : GetScalarType<T[P], AggregateAfkSetting[P]>
  }




  export type AfkSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AfkSettingWhereInput
    orderBy?: AfkSettingOrderByWithAggregationInput | AfkSettingOrderByWithAggregationInput[]
    by: AfkSettingScalarFieldEnum[] | AfkSettingScalarFieldEnum
    having?: AfkSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AfkSettingCountAggregateInputType | true
    _avg?: AfkSettingAvgAggregateInputType
    _sum?: AfkSettingSumAggregateInputType
    _min?: AfkSettingMinAggregateInputType
    _max?: AfkSettingMaxAggregateInputType
  }

  export type AfkSettingGroupByOutputType = {
    guildId: string
    maxLetters: number
    _count: AfkSettingCountAggregateOutputType | null
    _avg: AfkSettingAvgAggregateOutputType | null
    _sum: AfkSettingSumAggregateOutputType | null
    _min: AfkSettingMinAggregateOutputType | null
    _max: AfkSettingMaxAggregateOutputType | null
  }

  type GetAfkSettingGroupByPayload<T extends AfkSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AfkSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AfkSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AfkSettingGroupByOutputType[P]>
            : GetScalarType<T[P], AfkSettingGroupByOutputType[P]>
        }
      >
    >


  export type AfkSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    maxLetters?: boolean
  }, ExtArgs["result"]["afkSetting"]>

  export type AfkSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    maxLetters?: boolean
  }, ExtArgs["result"]["afkSetting"]>

  export type AfkSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    guildId?: boolean
    maxLetters?: boolean
  }, ExtArgs["result"]["afkSetting"]>

  export type AfkSettingSelectScalar = {
    guildId?: boolean
    maxLetters?: boolean
  }

  export type AfkSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"guildId" | "maxLetters", ExtArgs["result"]["afkSetting"]>

  export type $AfkSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AfkSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      guildId: string
      maxLetters: number
    }, ExtArgs["result"]["afkSetting"]>
    composites: {}
  }

  type AfkSettingGetPayload<S extends boolean | null | undefined | AfkSettingDefaultArgs> = $Result.GetResult<Prisma.$AfkSettingPayload, S>

  type AfkSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AfkSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AfkSettingCountAggregateInputType | true
    }

  export interface AfkSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AfkSetting'], meta: { name: 'AfkSetting' } }
    /**
     * Find zero or one AfkSetting that matches the filter.
     * @param {AfkSettingFindUniqueArgs} args - Arguments to find a AfkSetting
     * @example
     * // Get one AfkSetting
     * const afkSetting = await prisma.afkSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AfkSettingFindUniqueArgs>(args: SelectSubset<T, AfkSettingFindUniqueArgs<ExtArgs>>): Prisma__AfkSettingClient<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AfkSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AfkSettingFindUniqueOrThrowArgs} args - Arguments to find a AfkSetting
     * @example
     * // Get one AfkSetting
     * const afkSetting = await prisma.afkSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AfkSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, AfkSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AfkSettingClient<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AfkSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkSettingFindFirstArgs} args - Arguments to find a AfkSetting
     * @example
     * // Get one AfkSetting
     * const afkSetting = await prisma.afkSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AfkSettingFindFirstArgs>(args?: SelectSubset<T, AfkSettingFindFirstArgs<ExtArgs>>): Prisma__AfkSettingClient<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AfkSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkSettingFindFirstOrThrowArgs} args - Arguments to find a AfkSetting
     * @example
     * // Get one AfkSetting
     * const afkSetting = await prisma.afkSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AfkSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, AfkSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AfkSettingClient<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AfkSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AfkSettings
     * const afkSettings = await prisma.afkSetting.findMany()
     * 
     * // Get first 10 AfkSettings
     * const afkSettings = await prisma.afkSetting.findMany({ take: 10 })
     * 
     * // Only select the `guildId`
     * const afkSettingWithGuildIdOnly = await prisma.afkSetting.findMany({ select: { guildId: true } })
     * 
     */
    findMany<T extends AfkSettingFindManyArgs>(args?: SelectSubset<T, AfkSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AfkSetting.
     * @param {AfkSettingCreateArgs} args - Arguments to create a AfkSetting.
     * @example
     * // Create one AfkSetting
     * const AfkSetting = await prisma.afkSetting.create({
     *   data: {
     *     // ... data to create a AfkSetting
     *   }
     * })
     * 
     */
    create<T extends AfkSettingCreateArgs>(args: SelectSubset<T, AfkSettingCreateArgs<ExtArgs>>): Prisma__AfkSettingClient<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AfkSettings.
     * @param {AfkSettingCreateManyArgs} args - Arguments to create many AfkSettings.
     * @example
     * // Create many AfkSettings
     * const afkSetting = await prisma.afkSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AfkSettingCreateManyArgs>(args?: SelectSubset<T, AfkSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AfkSettings and returns the data saved in the database.
     * @param {AfkSettingCreateManyAndReturnArgs} args - Arguments to create many AfkSettings.
     * @example
     * // Create many AfkSettings
     * const afkSetting = await prisma.afkSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AfkSettings and only return the `guildId`
     * const afkSettingWithGuildIdOnly = await prisma.afkSetting.createManyAndReturn({
     *   select: { guildId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AfkSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, AfkSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AfkSetting.
     * @param {AfkSettingDeleteArgs} args - Arguments to delete one AfkSetting.
     * @example
     * // Delete one AfkSetting
     * const AfkSetting = await prisma.afkSetting.delete({
     *   where: {
     *     // ... filter to delete one AfkSetting
     *   }
     * })
     * 
     */
    delete<T extends AfkSettingDeleteArgs>(args: SelectSubset<T, AfkSettingDeleteArgs<ExtArgs>>): Prisma__AfkSettingClient<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AfkSetting.
     * @param {AfkSettingUpdateArgs} args - Arguments to update one AfkSetting.
     * @example
     * // Update one AfkSetting
     * const afkSetting = await prisma.afkSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AfkSettingUpdateArgs>(args: SelectSubset<T, AfkSettingUpdateArgs<ExtArgs>>): Prisma__AfkSettingClient<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AfkSettings.
     * @param {AfkSettingDeleteManyArgs} args - Arguments to filter AfkSettings to delete.
     * @example
     * // Delete a few AfkSettings
     * const { count } = await prisma.afkSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AfkSettingDeleteManyArgs>(args?: SelectSubset<T, AfkSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AfkSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AfkSettings
     * const afkSetting = await prisma.afkSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AfkSettingUpdateManyArgs>(args: SelectSubset<T, AfkSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AfkSettings and returns the data updated in the database.
     * @param {AfkSettingUpdateManyAndReturnArgs} args - Arguments to update many AfkSettings.
     * @example
     * // Update many AfkSettings
     * const afkSetting = await prisma.afkSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AfkSettings and only return the `guildId`
     * const afkSettingWithGuildIdOnly = await prisma.afkSetting.updateManyAndReturn({
     *   select: { guildId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AfkSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, AfkSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AfkSetting.
     * @param {AfkSettingUpsertArgs} args - Arguments to update or create a AfkSetting.
     * @example
     * // Update or create a AfkSetting
     * const afkSetting = await prisma.afkSetting.upsert({
     *   create: {
     *     // ... data to create a AfkSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AfkSetting we want to update
     *   }
     * })
     */
    upsert<T extends AfkSettingUpsertArgs>(args: SelectSubset<T, AfkSettingUpsertArgs<ExtArgs>>): Prisma__AfkSettingClient<$Result.GetResult<Prisma.$AfkSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AfkSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkSettingCountArgs} args - Arguments to filter AfkSettings to count.
     * @example
     * // Count the number of AfkSettings
     * const count = await prisma.afkSetting.count({
     *   where: {
     *     // ... the filter for the AfkSettings we want to count
     *   }
     * })
    **/
    count<T extends AfkSettingCountArgs>(
      args?: Subset<T, AfkSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AfkSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AfkSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AfkSettingAggregateArgs>(args: Subset<T, AfkSettingAggregateArgs>): Prisma.PrismaPromise<GetAfkSettingAggregateType<T>>

    /**
     * Group by AfkSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AfkSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AfkSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AfkSettingGroupByArgs['orderBy'] }
        : { orderBy?: AfkSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AfkSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAfkSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AfkSetting model
   */
  readonly fields: AfkSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AfkSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AfkSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AfkSetting model
   */
  interface AfkSettingFieldRefs {
    readonly guildId: FieldRef<"AfkSetting", 'String'>
    readonly maxLetters: FieldRef<"AfkSetting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AfkSetting findUnique
   */
  export type AfkSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * Filter, which AfkSetting to fetch.
     */
    where: AfkSettingWhereUniqueInput
  }

  /**
   * AfkSetting findUniqueOrThrow
   */
  export type AfkSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * Filter, which AfkSetting to fetch.
     */
    where: AfkSettingWhereUniqueInput
  }

  /**
   * AfkSetting findFirst
   */
  export type AfkSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * Filter, which AfkSetting to fetch.
     */
    where?: AfkSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AfkSettings to fetch.
     */
    orderBy?: AfkSettingOrderByWithRelationInput | AfkSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AfkSettings.
     */
    cursor?: AfkSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AfkSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AfkSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AfkSettings.
     */
    distinct?: AfkSettingScalarFieldEnum | AfkSettingScalarFieldEnum[]
  }

  /**
   * AfkSetting findFirstOrThrow
   */
  export type AfkSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * Filter, which AfkSetting to fetch.
     */
    where?: AfkSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AfkSettings to fetch.
     */
    orderBy?: AfkSettingOrderByWithRelationInput | AfkSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AfkSettings.
     */
    cursor?: AfkSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AfkSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AfkSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AfkSettings.
     */
    distinct?: AfkSettingScalarFieldEnum | AfkSettingScalarFieldEnum[]
  }

  /**
   * AfkSetting findMany
   */
  export type AfkSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * Filter, which AfkSettings to fetch.
     */
    where?: AfkSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AfkSettings to fetch.
     */
    orderBy?: AfkSettingOrderByWithRelationInput | AfkSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AfkSettings.
     */
    cursor?: AfkSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AfkSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AfkSettings.
     */
    skip?: number
    distinct?: AfkSettingScalarFieldEnum | AfkSettingScalarFieldEnum[]
  }

  /**
   * AfkSetting create
   */
  export type AfkSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a AfkSetting.
     */
    data: XOR<AfkSettingCreateInput, AfkSettingUncheckedCreateInput>
  }

  /**
   * AfkSetting createMany
   */
  export type AfkSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AfkSettings.
     */
    data: AfkSettingCreateManyInput | AfkSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AfkSetting createManyAndReturn
   */
  export type AfkSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * The data used to create many AfkSettings.
     */
    data: AfkSettingCreateManyInput | AfkSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AfkSetting update
   */
  export type AfkSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a AfkSetting.
     */
    data: XOR<AfkSettingUpdateInput, AfkSettingUncheckedUpdateInput>
    /**
     * Choose, which AfkSetting to update.
     */
    where: AfkSettingWhereUniqueInput
  }

  /**
   * AfkSetting updateMany
   */
  export type AfkSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AfkSettings.
     */
    data: XOR<AfkSettingUpdateManyMutationInput, AfkSettingUncheckedUpdateManyInput>
    /**
     * Filter which AfkSettings to update
     */
    where?: AfkSettingWhereInput
    /**
     * Limit how many AfkSettings to update.
     */
    limit?: number
  }

  /**
   * AfkSetting updateManyAndReturn
   */
  export type AfkSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * The data used to update AfkSettings.
     */
    data: XOR<AfkSettingUpdateManyMutationInput, AfkSettingUncheckedUpdateManyInput>
    /**
     * Filter which AfkSettings to update
     */
    where?: AfkSettingWhereInput
    /**
     * Limit how many AfkSettings to update.
     */
    limit?: number
  }

  /**
   * AfkSetting upsert
   */
  export type AfkSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the AfkSetting to update in case it exists.
     */
    where: AfkSettingWhereUniqueInput
    /**
     * In case the AfkSetting found by the `where` argument doesn't exist, create a new AfkSetting with this data.
     */
    create: XOR<AfkSettingCreateInput, AfkSettingUncheckedCreateInput>
    /**
     * In case the AfkSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AfkSettingUpdateInput, AfkSettingUncheckedUpdateInput>
  }

  /**
   * AfkSetting delete
   */
  export type AfkSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
    /**
     * Filter which AfkSetting to delete.
     */
    where: AfkSettingWhereUniqueInput
  }

  /**
   * AfkSetting deleteMany
   */
  export type AfkSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AfkSettings to delete
     */
    where?: AfkSettingWhereInput
    /**
     * Limit how many AfkSettings to delete.
     */
    limit?: number
  }

  /**
   * AfkSetting without action
   */
  export type AfkSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AfkSetting
     */
    select?: AfkSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AfkSetting
     */
    omit?: AfkSettingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GuildSettingScalarFieldEnum: {
    guildId: 'guildId',
    prefix: 'prefix',
    interactionsMode: 'interactionsMode',
    language: 'language',
    errorChannel: 'errorChannel',
    rpEnabled: 'rpEnabled',
    rpEnableRuns: 'rpEnableRuns',
    lastRpSyncRun: 'lastRpSyncRun',
    ptReminderEnabled: 'ptReminderEnabled',
    legacyRp: 'legacyRp',
    editRpCommands: 'editRpCommands',
    enableInvitesAt: 'enableInvitesAt',
    statusChannel: 'statusChannel',
    updatesChannel: 'updatesChannel',
    notifyChannel: 'notifyChannel'
  };

  export type GuildSettingScalarFieldEnum = (typeof GuildSettingScalarFieldEnum)[keyof typeof GuildSettingScalarFieldEnum]


  export const CustomClientScalarFieldEnum: {
    guildId: 'guildId',
    appId: 'appId',
    token: 'token',
    publicKey: 'publicKey',
    secret: 'secret'
  };

  export type CustomClientScalarFieldEnum = (typeof CustomClientScalarFieldEnum)[keyof typeof CustomClientScalarFieldEnum]


  export const FilteredWordScalarFieldEnum: {
    keyword: 'keyword',
    filterType: 'filterType'
  };

  export type FilteredWordScalarFieldEnum = (typeof FilteredWordScalarFieldEnum)[keyof typeof FilteredWordScalarFieldEnum]


  export const AfkStateScalarFieldEnum: {
    userId: 'userId',
    reason: 'reason',
    since: 'since',
    guildId: 'guildId'
  };

  export type AfkStateScalarFieldEnum = (typeof AfkStateScalarFieldEnum)[keyof typeof AfkStateScalarFieldEnum]


  export const AfkSettingScalarFieldEnum: {
    guildId: 'guildId',
    maxLetters: 'maxLetters'
  };

  export type AfkSettingScalarFieldEnum = (typeof AfkSettingScalarFieldEnum)[keyof typeof AfkSettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'FilterType'
   */
  export type EnumFilterTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FilterType'>
    


  /**
   * Reference to a field of type 'FilterType[]'
   */
  export type ListEnumFilterTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FilterType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GuildSettingWhereInput = {
    AND?: GuildSettingWhereInput | GuildSettingWhereInput[]
    OR?: GuildSettingWhereInput[]
    NOT?: GuildSettingWhereInput | GuildSettingWhereInput[]
    guildId?: StringFilter<"GuildSetting"> | string
    prefix?: StringNullableFilter<"GuildSetting"> | string | null
    interactionsMode?: BoolFilter<"GuildSetting"> | boolean
    language?: StringFilter<"GuildSetting"> | string
    errorChannel?: StringNullableFilter<"GuildSetting"> | string | null
    rpEnabled?: BoolFilter<"GuildSetting"> | boolean
    rpEnableRuns?: DecimalFilter<"GuildSetting"> | Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: DecimalNullableFilter<"GuildSetting"> | Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: BoolFilter<"GuildSetting"> | boolean
    legacyRp?: BoolFilter<"GuildSetting"> | boolean
    editRpCommands?: BoolFilter<"GuildSetting"> | boolean
    enableInvitesAt?: DecimalNullableFilter<"GuildSetting"> | Decimal | DecimalJsLike | number | string | null
    statusChannel?: StringNullableFilter<"GuildSetting"> | string | null
    updatesChannel?: StringNullableFilter<"GuildSetting"> | string | null
    notifyChannel?: StringNullableFilter<"GuildSetting"> | string | null
  }

  export type GuildSettingOrderByWithRelationInput = {
    guildId?: SortOrder
    prefix?: SortOrderInput | SortOrder
    interactionsMode?: SortOrder
    language?: SortOrder
    errorChannel?: SortOrderInput | SortOrder
    rpEnabled?: SortOrder
    rpEnableRuns?: SortOrder
    lastRpSyncRun?: SortOrderInput | SortOrder
    ptReminderEnabled?: SortOrder
    legacyRp?: SortOrder
    editRpCommands?: SortOrder
    enableInvitesAt?: SortOrderInput | SortOrder
    statusChannel?: SortOrderInput | SortOrder
    updatesChannel?: SortOrderInput | SortOrder
    notifyChannel?: SortOrderInput | SortOrder
  }

  export type GuildSettingWhereUniqueInput = Prisma.AtLeast<{
    guildId?: string
    AND?: GuildSettingWhereInput | GuildSettingWhereInput[]
    OR?: GuildSettingWhereInput[]
    NOT?: GuildSettingWhereInput | GuildSettingWhereInput[]
    prefix?: StringNullableFilter<"GuildSetting"> | string | null
    interactionsMode?: BoolFilter<"GuildSetting"> | boolean
    language?: StringFilter<"GuildSetting"> | string
    errorChannel?: StringNullableFilter<"GuildSetting"> | string | null
    rpEnabled?: BoolFilter<"GuildSetting"> | boolean
    rpEnableRuns?: DecimalFilter<"GuildSetting"> | Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: DecimalNullableFilter<"GuildSetting"> | Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: BoolFilter<"GuildSetting"> | boolean
    legacyRp?: BoolFilter<"GuildSetting"> | boolean
    editRpCommands?: BoolFilter<"GuildSetting"> | boolean
    enableInvitesAt?: DecimalNullableFilter<"GuildSetting"> | Decimal | DecimalJsLike | number | string | null
    statusChannel?: StringNullableFilter<"GuildSetting"> | string | null
    updatesChannel?: StringNullableFilter<"GuildSetting"> | string | null
    notifyChannel?: StringNullableFilter<"GuildSetting"> | string | null
  }, "guildId">

  export type GuildSettingOrderByWithAggregationInput = {
    guildId?: SortOrder
    prefix?: SortOrderInput | SortOrder
    interactionsMode?: SortOrder
    language?: SortOrder
    errorChannel?: SortOrderInput | SortOrder
    rpEnabled?: SortOrder
    rpEnableRuns?: SortOrder
    lastRpSyncRun?: SortOrderInput | SortOrder
    ptReminderEnabled?: SortOrder
    legacyRp?: SortOrder
    editRpCommands?: SortOrder
    enableInvitesAt?: SortOrderInput | SortOrder
    statusChannel?: SortOrderInput | SortOrder
    updatesChannel?: SortOrderInput | SortOrder
    notifyChannel?: SortOrderInput | SortOrder
    _count?: GuildSettingCountOrderByAggregateInput
    _avg?: GuildSettingAvgOrderByAggregateInput
    _max?: GuildSettingMaxOrderByAggregateInput
    _min?: GuildSettingMinOrderByAggregateInput
    _sum?: GuildSettingSumOrderByAggregateInput
  }

  export type GuildSettingScalarWhereWithAggregatesInput = {
    AND?: GuildSettingScalarWhereWithAggregatesInput | GuildSettingScalarWhereWithAggregatesInput[]
    OR?: GuildSettingScalarWhereWithAggregatesInput[]
    NOT?: GuildSettingScalarWhereWithAggregatesInput | GuildSettingScalarWhereWithAggregatesInput[]
    guildId?: StringWithAggregatesFilter<"GuildSetting"> | string
    prefix?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
    interactionsMode?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    language?: StringWithAggregatesFilter<"GuildSetting"> | string
    errorChannel?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
    rpEnabled?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    rpEnableRuns?: DecimalWithAggregatesFilter<"GuildSetting"> | Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: DecimalNullableWithAggregatesFilter<"GuildSetting"> | Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    legacyRp?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    editRpCommands?: BoolWithAggregatesFilter<"GuildSetting"> | boolean
    enableInvitesAt?: DecimalNullableWithAggregatesFilter<"GuildSetting"> | Decimal | DecimalJsLike | number | string | null
    statusChannel?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
    updatesChannel?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
    notifyChannel?: StringNullableWithAggregatesFilter<"GuildSetting"> | string | null
  }

  export type CustomClientWhereInput = {
    AND?: CustomClientWhereInput | CustomClientWhereInput[]
    OR?: CustomClientWhereInput[]
    NOT?: CustomClientWhereInput | CustomClientWhereInput[]
    guildId?: StringFilter<"CustomClient"> | string
    appId?: StringNullableFilter<"CustomClient"> | string | null
    token?: StringNullableFilter<"CustomClient"> | string | null
    publicKey?: StringNullableFilter<"CustomClient"> | string | null
    secret?: StringNullableFilter<"CustomClient"> | string | null
  }

  export type CustomClientOrderByWithRelationInput = {
    guildId?: SortOrder
    appId?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    publicKey?: SortOrderInput | SortOrder
    secret?: SortOrderInput | SortOrder
  }

  export type CustomClientWhereUniqueInput = Prisma.AtLeast<{
    guildId?: string
    AND?: CustomClientWhereInput | CustomClientWhereInput[]
    OR?: CustomClientWhereInput[]
    NOT?: CustomClientWhereInput | CustomClientWhereInput[]
    appId?: StringNullableFilter<"CustomClient"> | string | null
    token?: StringNullableFilter<"CustomClient"> | string | null
    publicKey?: StringNullableFilter<"CustomClient"> | string | null
    secret?: StringNullableFilter<"CustomClient"> | string | null
  }, "guildId">

  export type CustomClientOrderByWithAggregationInput = {
    guildId?: SortOrder
    appId?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    publicKey?: SortOrderInput | SortOrder
    secret?: SortOrderInput | SortOrder
    _count?: CustomClientCountOrderByAggregateInput
    _max?: CustomClientMaxOrderByAggregateInput
    _min?: CustomClientMinOrderByAggregateInput
  }

  export type CustomClientScalarWhereWithAggregatesInput = {
    AND?: CustomClientScalarWhereWithAggregatesInput | CustomClientScalarWhereWithAggregatesInput[]
    OR?: CustomClientScalarWhereWithAggregatesInput[]
    NOT?: CustomClientScalarWhereWithAggregatesInput | CustomClientScalarWhereWithAggregatesInput[]
    guildId?: StringWithAggregatesFilter<"CustomClient"> | string
    appId?: StringNullableWithAggregatesFilter<"CustomClient"> | string | null
    token?: StringNullableWithAggregatesFilter<"CustomClient"> | string | null
    publicKey?: StringNullableWithAggregatesFilter<"CustomClient"> | string | null
    secret?: StringNullableWithAggregatesFilter<"CustomClient"> | string | null
  }

  export type FilteredWordWhereInput = {
    AND?: FilteredWordWhereInput | FilteredWordWhereInput[]
    OR?: FilteredWordWhereInput[]
    NOT?: FilteredWordWhereInput | FilteredWordWhereInput[]
    keyword?: StringFilter<"FilteredWord"> | string
    filterType?: EnumFilterTypeFilter<"FilteredWord"> | $Enums.FilterType
  }

  export type FilteredWordOrderByWithRelationInput = {
    keyword?: SortOrder
    filterType?: SortOrder
  }

  export type FilteredWordWhereUniqueInput = Prisma.AtLeast<{
    keyword_filterType?: FilteredWordKeywordFilterTypeCompoundUniqueInput
    AND?: FilteredWordWhereInput | FilteredWordWhereInput[]
    OR?: FilteredWordWhereInput[]
    NOT?: FilteredWordWhereInput | FilteredWordWhereInput[]
    keyword?: StringFilter<"FilteredWord"> | string
    filterType?: EnumFilterTypeFilter<"FilteredWord"> | $Enums.FilterType
  }, "keyword_filterType">

  export type FilteredWordOrderByWithAggregationInput = {
    keyword?: SortOrder
    filterType?: SortOrder
    _count?: FilteredWordCountOrderByAggregateInput
    _max?: FilteredWordMaxOrderByAggregateInput
    _min?: FilteredWordMinOrderByAggregateInput
  }

  export type FilteredWordScalarWhereWithAggregatesInput = {
    AND?: FilteredWordScalarWhereWithAggregatesInput | FilteredWordScalarWhereWithAggregatesInput[]
    OR?: FilteredWordScalarWhereWithAggregatesInput[]
    NOT?: FilteredWordScalarWhereWithAggregatesInput | FilteredWordScalarWhereWithAggregatesInput[]
    keyword?: StringWithAggregatesFilter<"FilteredWord"> | string
    filterType?: EnumFilterTypeWithAggregatesFilter<"FilteredWord"> | $Enums.FilterType
  }

  export type AfkStateWhereInput = {
    AND?: AfkStateWhereInput | AfkStateWhereInput[]
    OR?: AfkStateWhereInput[]
    NOT?: AfkStateWhereInput | AfkStateWhereInput[]
    userId?: StringFilter<"AfkState"> | string
    reason?: StringNullableFilter<"AfkState"> | string | null
    since?: DecimalFilter<"AfkState"> | Decimal | DecimalJsLike | number | string
    guildId?: StringFilter<"AfkState"> | string
  }

  export type AfkStateOrderByWithRelationInput = {
    userId?: SortOrder
    reason?: SortOrderInput | SortOrder
    since?: SortOrder
    guildId?: SortOrder
  }

  export type AfkStateWhereUniqueInput = Prisma.AtLeast<{
    userId_guildId?: AfkStateUserIdGuildIdCompoundUniqueInput
    AND?: AfkStateWhereInput | AfkStateWhereInput[]
    OR?: AfkStateWhereInput[]
    NOT?: AfkStateWhereInput | AfkStateWhereInput[]
    userId?: StringFilter<"AfkState"> | string
    reason?: StringNullableFilter<"AfkState"> | string | null
    since?: DecimalFilter<"AfkState"> | Decimal | DecimalJsLike | number | string
    guildId?: StringFilter<"AfkState"> | string
  }, "userId_guildId">

  export type AfkStateOrderByWithAggregationInput = {
    userId?: SortOrder
    reason?: SortOrderInput | SortOrder
    since?: SortOrder
    guildId?: SortOrder
    _count?: AfkStateCountOrderByAggregateInput
    _avg?: AfkStateAvgOrderByAggregateInput
    _max?: AfkStateMaxOrderByAggregateInput
    _min?: AfkStateMinOrderByAggregateInput
    _sum?: AfkStateSumOrderByAggregateInput
  }

  export type AfkStateScalarWhereWithAggregatesInput = {
    AND?: AfkStateScalarWhereWithAggregatesInput | AfkStateScalarWhereWithAggregatesInput[]
    OR?: AfkStateScalarWhereWithAggregatesInput[]
    NOT?: AfkStateScalarWhereWithAggregatesInput | AfkStateScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"AfkState"> | string
    reason?: StringNullableWithAggregatesFilter<"AfkState"> | string | null
    since?: DecimalWithAggregatesFilter<"AfkState"> | Decimal | DecimalJsLike | number | string
    guildId?: StringWithAggregatesFilter<"AfkState"> | string
  }

  export type AfkSettingWhereInput = {
    AND?: AfkSettingWhereInput | AfkSettingWhereInput[]
    OR?: AfkSettingWhereInput[]
    NOT?: AfkSettingWhereInput | AfkSettingWhereInput[]
    guildId?: StringFilter<"AfkSetting"> | string
    maxLetters?: IntFilter<"AfkSetting"> | number
  }

  export type AfkSettingOrderByWithRelationInput = {
    guildId?: SortOrder
    maxLetters?: SortOrder
  }

  export type AfkSettingWhereUniqueInput = Prisma.AtLeast<{
    guildId?: string
    AND?: AfkSettingWhereInput | AfkSettingWhereInput[]
    OR?: AfkSettingWhereInput[]
    NOT?: AfkSettingWhereInput | AfkSettingWhereInput[]
    maxLetters?: IntFilter<"AfkSetting"> | number
  }, "guildId">

  export type AfkSettingOrderByWithAggregationInput = {
    guildId?: SortOrder
    maxLetters?: SortOrder
    _count?: AfkSettingCountOrderByAggregateInput
    _avg?: AfkSettingAvgOrderByAggregateInput
    _max?: AfkSettingMaxOrderByAggregateInput
    _min?: AfkSettingMinOrderByAggregateInput
    _sum?: AfkSettingSumOrderByAggregateInput
  }

  export type AfkSettingScalarWhereWithAggregatesInput = {
    AND?: AfkSettingScalarWhereWithAggregatesInput | AfkSettingScalarWhereWithAggregatesInput[]
    OR?: AfkSettingScalarWhereWithAggregatesInput[]
    NOT?: AfkSettingScalarWhereWithAggregatesInput | AfkSettingScalarWhereWithAggregatesInput[]
    guildId?: StringWithAggregatesFilter<"AfkSetting"> | string
    maxLetters?: IntWithAggregatesFilter<"AfkSetting"> | number
  }

  export type GuildSettingCreateInput = {
    guildId: string
    prefix?: string | null
    interactionsMode?: boolean
    language?: string
    errorChannel?: string | null
    rpEnabled?: boolean
    rpEnableRuns?: Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: boolean
    legacyRp?: boolean
    editRpCommands?: boolean
    enableInvitesAt?: Decimal | DecimalJsLike | number | string | null
    statusChannel?: string | null
    updatesChannel?: string | null
    notifyChannel?: string | null
  }

  export type GuildSettingUncheckedCreateInput = {
    guildId: string
    prefix?: string | null
    interactionsMode?: boolean
    language?: string
    errorChannel?: string | null
    rpEnabled?: boolean
    rpEnableRuns?: Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: boolean
    legacyRp?: boolean
    editRpCommands?: boolean
    enableInvitesAt?: Decimal | DecimalJsLike | number | string | null
    statusChannel?: string | null
    updatesChannel?: string | null
    notifyChannel?: string | null
  }

  export type GuildSettingUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    interactionsMode?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    errorChannel?: NullableStringFieldUpdateOperationsInput | string | null
    rpEnabled?: BoolFieldUpdateOperationsInput | boolean
    rpEnableRuns?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    legacyRp?: BoolFieldUpdateOperationsInput | boolean
    editRpCommands?: BoolFieldUpdateOperationsInput | boolean
    enableInvitesAt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statusChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    notifyChannel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildSettingUncheckedUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    interactionsMode?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    errorChannel?: NullableStringFieldUpdateOperationsInput | string | null
    rpEnabled?: BoolFieldUpdateOperationsInput | boolean
    rpEnableRuns?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    legacyRp?: BoolFieldUpdateOperationsInput | boolean
    editRpCommands?: BoolFieldUpdateOperationsInput | boolean
    enableInvitesAt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statusChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    notifyChannel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildSettingCreateManyInput = {
    guildId: string
    prefix?: string | null
    interactionsMode?: boolean
    language?: string
    errorChannel?: string | null
    rpEnabled?: boolean
    rpEnableRuns?: Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: boolean
    legacyRp?: boolean
    editRpCommands?: boolean
    enableInvitesAt?: Decimal | DecimalJsLike | number | string | null
    statusChannel?: string | null
    updatesChannel?: string | null
    notifyChannel?: string | null
  }

  export type GuildSettingUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    interactionsMode?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    errorChannel?: NullableStringFieldUpdateOperationsInput | string | null
    rpEnabled?: BoolFieldUpdateOperationsInput | boolean
    rpEnableRuns?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    legacyRp?: BoolFieldUpdateOperationsInput | boolean
    editRpCommands?: BoolFieldUpdateOperationsInput | boolean
    enableInvitesAt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statusChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    notifyChannel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GuildSettingUncheckedUpdateManyInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    interactionsMode?: BoolFieldUpdateOperationsInput | boolean
    language?: StringFieldUpdateOperationsInput | string
    errorChannel?: NullableStringFieldUpdateOperationsInput | string | null
    rpEnabled?: BoolFieldUpdateOperationsInput | boolean
    rpEnableRuns?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastRpSyncRun?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ptReminderEnabled?: BoolFieldUpdateOperationsInput | boolean
    legacyRp?: BoolFieldUpdateOperationsInput | boolean
    editRpCommands?: BoolFieldUpdateOperationsInput | boolean
    enableInvitesAt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    statusChannel?: NullableStringFieldUpdateOperationsInput | string | null
    updatesChannel?: NullableStringFieldUpdateOperationsInput | string | null
    notifyChannel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomClientCreateInput = {
    guildId: string
    appId?: string | null
    token?: string | null
    publicKey?: string | null
    secret?: string | null
  }

  export type CustomClientUncheckedCreateInput = {
    guildId: string
    appId?: string | null
    token?: string | null
    publicKey?: string | null
    secret?: string | null
  }

  export type CustomClientUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomClientUncheckedUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomClientCreateManyInput = {
    guildId: string
    appId?: string | null
    token?: string | null
    publicKey?: string | null
    secret?: string | null
  }

  export type CustomClientUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomClientUncheckedUpdateManyInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    secret?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilteredWordCreateInput = {
    keyword: string
    filterType: $Enums.FilterType
  }

  export type FilteredWordUncheckedCreateInput = {
    keyword: string
    filterType: $Enums.FilterType
  }

  export type FilteredWordUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    filterType?: EnumFilterTypeFieldUpdateOperationsInput | $Enums.FilterType
  }

  export type FilteredWordUncheckedUpdateInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    filterType?: EnumFilterTypeFieldUpdateOperationsInput | $Enums.FilterType
  }

  export type FilteredWordCreateManyInput = {
    keyword: string
    filterType: $Enums.FilterType
  }

  export type FilteredWordUpdateManyMutationInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    filterType?: EnumFilterTypeFieldUpdateOperationsInput | $Enums.FilterType
  }

  export type FilteredWordUncheckedUpdateManyInput = {
    keyword?: StringFieldUpdateOperationsInput | string
    filterType?: EnumFilterTypeFieldUpdateOperationsInput | $Enums.FilterType
  }

  export type AfkStateCreateInput = {
    userId: string
    reason?: string | null
    since: Decimal | DecimalJsLike | number | string
    guildId: string
  }

  export type AfkStateUncheckedCreateInput = {
    userId: string
    reason?: string | null
    since: Decimal | DecimalJsLike | number | string
    guildId: string
  }

  export type AfkStateUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type AfkStateUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type AfkStateCreateManyInput = {
    userId: string
    reason?: string | null
    since: Decimal | DecimalJsLike | number | string
    guildId: string
  }

  export type AfkStateUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type AfkStateUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    since?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    guildId?: StringFieldUpdateOperationsInput | string
  }

  export type AfkSettingCreateInput = {
    guildId: string
    maxLetters?: number
  }

  export type AfkSettingUncheckedCreateInput = {
    guildId: string
    maxLetters?: number
  }

  export type AfkSettingUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    maxLetters?: IntFieldUpdateOperationsInput | number
  }

  export type AfkSettingUncheckedUpdateInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    maxLetters?: IntFieldUpdateOperationsInput | number
  }

  export type AfkSettingCreateManyInput = {
    guildId: string
    maxLetters?: number
  }

  export type AfkSettingUpdateManyMutationInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    maxLetters?: IntFieldUpdateOperationsInput | number
  }

  export type AfkSettingUncheckedUpdateManyInput = {
    guildId?: StringFieldUpdateOperationsInput | string
    maxLetters?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GuildSettingCountOrderByAggregateInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    interactionsMode?: SortOrder
    language?: SortOrder
    errorChannel?: SortOrder
    rpEnabled?: SortOrder
    rpEnableRuns?: SortOrder
    lastRpSyncRun?: SortOrder
    ptReminderEnabled?: SortOrder
    legacyRp?: SortOrder
    editRpCommands?: SortOrder
    enableInvitesAt?: SortOrder
    statusChannel?: SortOrder
    updatesChannel?: SortOrder
    notifyChannel?: SortOrder
  }

  export type GuildSettingAvgOrderByAggregateInput = {
    rpEnableRuns?: SortOrder
    lastRpSyncRun?: SortOrder
    enableInvitesAt?: SortOrder
  }

  export type GuildSettingMaxOrderByAggregateInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    interactionsMode?: SortOrder
    language?: SortOrder
    errorChannel?: SortOrder
    rpEnabled?: SortOrder
    rpEnableRuns?: SortOrder
    lastRpSyncRun?: SortOrder
    ptReminderEnabled?: SortOrder
    legacyRp?: SortOrder
    editRpCommands?: SortOrder
    enableInvitesAt?: SortOrder
    statusChannel?: SortOrder
    updatesChannel?: SortOrder
    notifyChannel?: SortOrder
  }

  export type GuildSettingMinOrderByAggregateInput = {
    guildId?: SortOrder
    prefix?: SortOrder
    interactionsMode?: SortOrder
    language?: SortOrder
    errorChannel?: SortOrder
    rpEnabled?: SortOrder
    rpEnableRuns?: SortOrder
    lastRpSyncRun?: SortOrder
    ptReminderEnabled?: SortOrder
    legacyRp?: SortOrder
    editRpCommands?: SortOrder
    enableInvitesAt?: SortOrder
    statusChannel?: SortOrder
    updatesChannel?: SortOrder
    notifyChannel?: SortOrder
  }

  export type GuildSettingSumOrderByAggregateInput = {
    rpEnableRuns?: SortOrder
    lastRpSyncRun?: SortOrder
    enableInvitesAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CustomClientCountOrderByAggregateInput = {
    guildId?: SortOrder
    appId?: SortOrder
    token?: SortOrder
    publicKey?: SortOrder
    secret?: SortOrder
  }

  export type CustomClientMaxOrderByAggregateInput = {
    guildId?: SortOrder
    appId?: SortOrder
    token?: SortOrder
    publicKey?: SortOrder
    secret?: SortOrder
  }

  export type CustomClientMinOrderByAggregateInput = {
    guildId?: SortOrder
    appId?: SortOrder
    token?: SortOrder
    publicKey?: SortOrder
    secret?: SortOrder
  }

  export type EnumFilterTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FilterType | EnumFilterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FilterType[] | ListEnumFilterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FilterType[] | ListEnumFilterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFilterTypeFilter<$PrismaModel> | $Enums.FilterType
  }

  export type FilteredWordKeywordFilterTypeCompoundUniqueInput = {
    keyword: string
    filterType: $Enums.FilterType
  }

  export type FilteredWordCountOrderByAggregateInput = {
    keyword?: SortOrder
    filterType?: SortOrder
  }

  export type FilteredWordMaxOrderByAggregateInput = {
    keyword?: SortOrder
    filterType?: SortOrder
  }

  export type FilteredWordMinOrderByAggregateInput = {
    keyword?: SortOrder
    filterType?: SortOrder
  }

  export type EnumFilterTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FilterType | EnumFilterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FilterType[] | ListEnumFilterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FilterType[] | ListEnumFilterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFilterTypeWithAggregatesFilter<$PrismaModel> | $Enums.FilterType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFilterTypeFilter<$PrismaModel>
    _max?: NestedEnumFilterTypeFilter<$PrismaModel>
  }

  export type AfkStateUserIdGuildIdCompoundUniqueInput = {
    userId: string
    guildId: string
  }

  export type AfkStateCountOrderByAggregateInput = {
    userId?: SortOrder
    reason?: SortOrder
    since?: SortOrder
    guildId?: SortOrder
  }

  export type AfkStateAvgOrderByAggregateInput = {
    since?: SortOrder
  }

  export type AfkStateMaxOrderByAggregateInput = {
    userId?: SortOrder
    reason?: SortOrder
    since?: SortOrder
    guildId?: SortOrder
  }

  export type AfkStateMinOrderByAggregateInput = {
    userId?: SortOrder
    reason?: SortOrder
    since?: SortOrder
    guildId?: SortOrder
  }

  export type AfkStateSumOrderByAggregateInput = {
    since?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AfkSettingCountOrderByAggregateInput = {
    guildId?: SortOrder
    maxLetters?: SortOrder
  }

  export type AfkSettingAvgOrderByAggregateInput = {
    maxLetters?: SortOrder
  }

  export type AfkSettingMaxOrderByAggregateInput = {
    guildId?: SortOrder
    maxLetters?: SortOrder
  }

  export type AfkSettingMinOrderByAggregateInput = {
    guildId?: SortOrder
    maxLetters?: SortOrder
  }

  export type AfkSettingSumOrderByAggregateInput = {
    maxLetters?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumFilterTypeFieldUpdateOperationsInput = {
    set?: $Enums.FilterType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumFilterTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FilterType | EnumFilterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FilterType[] | ListEnumFilterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FilterType[] | ListEnumFilterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFilterTypeFilter<$PrismaModel> | $Enums.FilterType
  }

  export type NestedEnumFilterTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FilterType | EnumFilterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FilterType[] | ListEnumFilterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FilterType[] | ListEnumFilterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFilterTypeWithAggregatesFilter<$PrismaModel> | $Enums.FilterType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFilterTypeFilter<$PrismaModel>
    _max?: NestedEnumFilterTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}