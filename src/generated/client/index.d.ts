/**
 * Client
 **/

import * as runtime from "./runtime/library.js"
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model User
 * ==============================================================
 *    USER
 *    ==============================================================
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Album
 * ==============================================================
 *    ALBUM
 *    ==============================================================
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model AlbumSection
 * ==============================================================
 *    ALBUM SECTION
 *    ==============================================================
 */
export type AlbumSection = $Result.DefaultSelection<Prisma.$AlbumSectionPayload>
/**
 * Model Photo
 * ==============================================================
 *    PHOTO
 *    ==============================================================
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Tag
 * ==============================================================
 *    TAG
 *    ==============================================================
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model PhotoTag
 * ==============================================================
 *    MANY‑TO‑MANY JOIN: Photo ↔ Tag
 *    ==============================================================
 */
export type PhotoTag = $Result.DefaultSelection<Prisma.$PhotoTagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] }

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  )
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  ): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs
      }
    >
  >

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Albums
   * const albums = await prisma.album.findMany()
   * ```
   */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.albumSection`: Exposes CRUD operations for the **AlbumSection** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AlbumSections
   * const albumSections = await prisma.albumSection.findMany()
   * ```
   */
  get albumSection(): Prisma.AlbumSectionDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Photos
   * const photos = await prisma.photo.findMany()
   * ```
   */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.photoTag`: Exposes CRUD operations for the **PhotoTag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PhotoTags
   * const photoTags = await prisma.photoTag.findMany()
   * ```
   */
  get photoTag(): Prisma.PhotoTagDelegate<ExtArgs, ClientOptions>
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */

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
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
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

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
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
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

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

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
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
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>

  export const ModelName: {
    User: "User"
    Album: "Album"
    AlbumSection: "AlbumSection"
    Photo: "Photo"
    Tag: "Tag"
    PhotoTag: "PhotoTag"
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps:
        | "user"
        | "album"
        | "albumSection"
        | "photo"
        | "tag"
        | "photoTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      AlbumSection: {
        payload: Prisma.$AlbumSectionPayload<ExtArgs>
        fields: Prisma.AlbumSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload>
          }
          findFirst: {
            args: Prisma.AlbumSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload>
          }
          findMany: {
            args: Prisma.AlbumSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload>[]
          }
          create: {
            args: Prisma.AlbumSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload>
          }
          createMany: {
            args: Prisma.AlbumSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload>[]
          }
          delete: {
            args: Prisma.AlbumSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload>
          }
          update: {
            args: Prisma.AlbumSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload>
          }
          deleteMany: {
            args: Prisma.AlbumSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload>[]
          }
          upsert: {
            args: Prisma.AlbumSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumSectionPayload>
          }
          aggregate: {
            args: Prisma.AlbumSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbumSection>
          }
          groupBy: {
            args: Prisma.AlbumSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumSectionCountArgs<ExtArgs>
            result:
              | $Utils.Optional<AlbumSectionCountAggregateOutputType>
              | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      PhotoTag: {
        payload: Prisma.$PhotoTagPayload<ExtArgs>
        fields: Prisma.PhotoTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          findFirst: {
            args: Prisma.PhotoTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          findMany: {
            args: Prisma.PhotoTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>[]
          }
          create: {
            args: Prisma.PhotoTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          createMany: {
            args: Prisma.PhotoTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>[]
          }
          delete: {
            args: Prisma.PhotoTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          update: {
            args: Prisma.PhotoTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          deleteMany: {
            args: Prisma.PhotoTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>[]
          }
          upsert: {
            args: Prisma.PhotoTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoTagPayload>
          }
          aggregate: {
            args: Prisma.PhotoTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoTag>
          }
          groupBy: {
            args: Prisma.PhotoTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoTagCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = "pretty" | "colorless" | "minimal"
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    album?: AlbumOmit
    albumSection?: AlbumSectionOmit
    photo?: PhotoOmit
    tag?: TagOmit
    photoTag?: PhotoTagOmit
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error"
  export type LogDefinition = {
    level: LogLevel
    emit: "stdout" | "event"
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T["level"] : T
  >

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never

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
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy"

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    albums: number
    photos: number
  }

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    albums?: boolean | UserCountOutputTypeCountAlbumsArgs
    photos?: boolean | UserCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlbumsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AlbumWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhotosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PhotoWhereInput
  }

  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    sections: number
  }

  export type AlbumCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    sections?: boolean | AlbumCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountSectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AlbumSectionWhereInput
  }

  /**
   * Count Type AlbumSectionCountOutputType
   */

  export type AlbumSectionCountOutputType = {
    photos: number
  }

  export type AlbumSectionCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    photos?: boolean | AlbumSectionCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * AlbumSectionCountOutputType without action
   */
  export type AlbumSectionCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSectionCountOutputType
     */
    select?: AlbumSectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumSectionCountOutputType without action
   */
  export type AlbumSectionCountOutputTypeCountPhotosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PhotoWhereInput
  }

  /**
   * Count Type PhotoCountOutputType
   */

  export type PhotoCountOutputType = {
    albumSections: number
    tags: number
  }

  export type PhotoCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    albumSections?: boolean | PhotoCountOutputTypeCountAlbumSectionsArgs
    tags?: boolean | PhotoCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoCountOutputType
     */
    select?: PhotoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeCountAlbumSectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AlbumSectionWhereInput
  }

  /**
   * PhotoCountOutputType without action
   */
  export type PhotoCountOutputTypeCountTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PhotoTagWhereInput
  }

  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    photos: number
  }

  export type TagCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    photos?: boolean | TagCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPhotosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PhotoTagWhereInput
  }

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    hashedPassword: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    hashedPassword: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hashedPassword: number
    _all: number
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    _all?: true
  }

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    hashedPassword: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      email?: boolean
      hashedPassword?: boolean
      albums?: boolean | User$albumsArgs<ExtArgs>
      photos?: boolean | User$photosArgs<ExtArgs>
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["user"]
  >

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      email?: boolean
      hashedPassword?: boolean
    },
    ExtArgs["result"]["user"]
  >

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      email?: boolean
      hashedPassword?: boolean
    },
    ExtArgs["result"]["user"]
  >

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
  }

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "email" | "hashedPassword",
    ExtArgs["result"]["user"]
  >
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    albums?: boolean | User$albumsArgs<ExtArgs>
    photos?: boolean | User$photosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "User"
    objects: {
      albums: Prisma.$AlbumPayload<ExtArgs>[]
      photos: Prisma.$PhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        email: string
        hashedPassword: string | null
      },
      ExtArgs["result"]["user"]
    >
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true
  }

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"]
      meta: { name: "User" }
    }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    albums<T extends User$albumsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$albumsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AlbumPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >
    photos<T extends User$photosArgs<ExtArgs> = {}>(
      args?: Subset<T, User$photosArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PhotoPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", "String">
    readonly email: FieldRef<"User", "String">
    readonly hashedPassword: FieldRef<"User", "String">
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.albums
   */
  export type User$albumsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * User.photos
   */
  export type User$photosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }

  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    ownerId: string | null
    publicSlug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    ownerId: string | null
    publicSlug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    description: number
    ownerId: number
    publicSlug: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    ownerId?: true
    publicSlug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    ownerId?: true
    publicSlug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    ownerId?: true
    publicSlug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlbumAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Albums
     **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
    [P in keyof T & keyof AggregateAlbum]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }

  export type AlbumGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AlbumWhereInput
    orderBy?:
      | AlbumOrderByWithAggregationInput
      | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: string
    title: string
    description: string | null
    ownerId: string
    publicSlug: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AlbumGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AlbumGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >

  export type AlbumSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      title?: boolean
      description?: boolean
      ownerId?: boolean
      publicSlug?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      owner?: boolean | UserDefaultArgs<ExtArgs>
      sections?: boolean | Album$sectionsArgs<ExtArgs>
      _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["album"]
  >

  export type AlbumSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      title?: boolean
      description?: boolean
      ownerId?: boolean
      publicSlug?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      owner?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["album"]
  >

  export type AlbumSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      title?: boolean
      description?: boolean
      ownerId?: boolean
      publicSlug?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      owner?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["album"]
  >

  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    ownerId?: boolean
    publicSlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlbumOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "title"
    | "description"
    | "ownerId"
    | "publicSlug"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["album"]
  >
  export type AlbumInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    sections?: boolean | Album$sectionsArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlbumPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Album"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      sections: Prisma.$AlbumSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        title: string
        description: string | null
        ownerId: string
        publicSlug: string | null
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs["result"]["album"]
    >
    composites: {}
  }

  type AlbumGetPayload<
    S extends boolean | null | undefined | AlbumDefaultArgs,
  > = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AlbumFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: AlbumCountAggregateInputType | true
  }

  export interface AlbumDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Album"]
      meta: { name: "Album" }
    }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(
      args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumClient<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumClient<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(
      args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumClient<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumClient<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     *
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AlbumFindManyArgs>(
      args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     *
     */
    create<T extends AlbumCreateArgs>(
      args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>
    ): Prisma__AlbumClient<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AlbumCreateManyArgs>(
      args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     *
     */
    delete<T extends AlbumDeleteArgs>(
      args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>
    ): Prisma__AlbumClient<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AlbumUpdateArgs>(
      args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>
    ): Prisma__AlbumClient<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AlbumDeleteManyArgs>(
      args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AlbumUpdateManyArgs>(
      args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(
      args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>
    ): Prisma__AlbumClient<
      $Result.GetResult<
        Prisma.$AlbumPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
     **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(
      args: Subset<T, AlbumAggregateArgs>
    ): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs["orderBy"] }
        : { orderBy?: AlbumGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetAlbumGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Album model
     */
    readonly fields: AlbumFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    sections<T extends Album$sectionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Album$sectionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AlbumSectionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", "String">
    readonly title: FieldRef<"Album", "String">
    readonly description: FieldRef<"Album", "String">
    readonly ownerId: FieldRef<"Album", "String">
    readonly publicSlug: FieldRef<"Album", "String">
    readonly createdAt: FieldRef<"Album", "DateTime">
    readonly updatedAt: FieldRef<"Album", "DateTime">
  }

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.sections
   */
  export type Album$sectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    where?: AlbumSectionWhereInput
    orderBy?:
      | AlbumSectionOrderByWithRelationInput
      | AlbumSectionOrderByWithRelationInput[]
    cursor?: AlbumSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumSectionScalarFieldEnum | AlbumSectionScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }

  /**
   * Model AlbumSection
   */

  export type AggregateAlbumSection = {
    _count: AlbumSectionCountAggregateOutputType | null
    _min: AlbumSectionMinAggregateOutputType | null
    _max: AlbumSectionMaxAggregateOutputType | null
  }

  export type AlbumSectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    albumId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumSectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    albumId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlbumSectionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    albumId: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type AlbumSectionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    albumId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumSectionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    albumId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlbumSectionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    albumId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlbumSectionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AlbumSection to aggregate.
     */
    where?: AlbumSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AlbumSections to fetch.
     */
    orderBy?:
      | AlbumSectionOrderByWithRelationInput
      | AlbumSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AlbumSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AlbumSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AlbumSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AlbumSections
     **/
    _count?: true | AlbumSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AlbumSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AlbumSectionMaxAggregateInputType
  }

  export type GetAlbumSectionAggregateType<
    T extends AlbumSectionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateAlbumSection]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumSection[P]>
      : GetScalarType<T[P], AggregateAlbumSection[P]>
  }

  export type AlbumSectionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AlbumSectionWhereInput
    orderBy?:
      | AlbumSectionOrderByWithAggregationInput
      | AlbumSectionOrderByWithAggregationInput[]
    by: AlbumSectionScalarFieldEnum[] | AlbumSectionScalarFieldEnum
    having?: AlbumSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumSectionCountAggregateInputType | true
    _min?: AlbumSectionMinAggregateInputType
    _max?: AlbumSectionMaxAggregateInputType
  }

  export type AlbumSectionGroupByOutputType = {
    id: string
    title: string
    description: string | null
    albumId: string
    createdAt: Date
    updatedAt: Date
    _count: AlbumSectionCountAggregateOutputType | null
    _min: AlbumSectionMinAggregateOutputType | null
    _max: AlbumSectionMaxAggregateOutputType | null
  }

  type GetAlbumSectionGroupByPayload<T extends AlbumSectionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AlbumSectionGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof AlbumSectionGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumSectionGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumSectionGroupByOutputType[P]>
        }
      >
    >

  export type AlbumSectionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      title?: boolean
      description?: boolean
      albumId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      album?: boolean | AlbumDefaultArgs<ExtArgs>
      photos?: boolean | AlbumSection$photosArgs<ExtArgs>
      _count?: boolean | AlbumSectionCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["albumSection"]
  >

  export type AlbumSectionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      title?: boolean
      description?: boolean
      albumId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      album?: boolean | AlbumDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["albumSection"]
  >

  export type AlbumSectionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      title?: boolean
      description?: boolean
      albumId?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      album?: boolean | AlbumDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["albumSection"]
  >

  export type AlbumSectionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    albumId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlbumSectionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "title" | "description" | "albumId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["albumSection"]
  >
  export type AlbumSectionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    photos?: boolean | AlbumSection$photosArgs<ExtArgs>
    _count?: boolean | AlbumSectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumSectionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }
  export type AlbumSectionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
  }

  export type $AlbumSectionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "AlbumSection"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>
      photos: Prisma.$PhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        title: string
        description: string | null
        albumId: string
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs["result"]["albumSection"]
    >
    composites: {}
  }

  type AlbumSectionGetPayload<
    S extends boolean | null | undefined | AlbumSectionDefaultArgs,
  > = $Result.GetResult<Prisma.$AlbumSectionPayload, S>

  type AlbumSectionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    AlbumSectionFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: AlbumSectionCountAggregateInputType | true
  }

  export interface AlbumSectionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["AlbumSection"]
      meta: { name: "AlbumSection" }
    }
    /**
     * Find zero or one AlbumSection that matches the filter.
     * @param {AlbumSectionFindUniqueArgs} args - Arguments to find a AlbumSection
     * @example
     * // Get one AlbumSection
     * const albumSection = await prisma.albumSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumSectionFindUniqueArgs>(
      args: SelectSubset<T, AlbumSectionFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumSectionClient<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one AlbumSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumSectionFindUniqueOrThrowArgs} args - Arguments to find a AlbumSection
     * @example
     * // Get one AlbumSection
     * const albumSection = await prisma.albumSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumSectionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, AlbumSectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumSectionClient<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first AlbumSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSectionFindFirstArgs} args - Arguments to find a AlbumSection
     * @example
     * // Get one AlbumSection
     * const albumSection = await prisma.albumSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumSectionFindFirstArgs>(
      args?: SelectSubset<T, AlbumSectionFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumSectionClient<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first AlbumSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSectionFindFirstOrThrowArgs} args - Arguments to find a AlbumSection
     * @example
     * // Get one AlbumSection
     * const albumSection = await prisma.albumSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumSectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AlbumSectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumSectionClient<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more AlbumSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumSections
     * const albumSections = await prisma.albumSection.findMany()
     *
     * // Get first 10 AlbumSections
     * const albumSections = await prisma.albumSection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const albumSectionWithIdOnly = await prisma.albumSection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AlbumSectionFindManyArgs>(
      args?: SelectSubset<T, AlbumSectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >

    /**
     * Create a AlbumSection.
     * @param {AlbumSectionCreateArgs} args - Arguments to create a AlbumSection.
     * @example
     * // Create one AlbumSection
     * const AlbumSection = await prisma.albumSection.create({
     *   data: {
     *     // ... data to create a AlbumSection
     *   }
     * })
     *
     */
    create<T extends AlbumSectionCreateArgs>(
      args: SelectSubset<T, AlbumSectionCreateArgs<ExtArgs>>
    ): Prisma__AlbumSectionClient<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many AlbumSections.
     * @param {AlbumSectionCreateManyArgs} args - Arguments to create many AlbumSections.
     * @example
     * // Create many AlbumSections
     * const albumSection = await prisma.albumSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AlbumSectionCreateManyArgs>(
      args?: SelectSubset<T, AlbumSectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlbumSections and returns the data saved in the database.
     * @param {AlbumSectionCreateManyAndReturnArgs} args - Arguments to create many AlbumSections.
     * @example
     * // Create many AlbumSections
     * const albumSection = await prisma.albumSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AlbumSections and only return the `id`
     * const albumSectionWithIdOnly = await prisma.albumSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AlbumSectionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, AlbumSectionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Delete a AlbumSection.
     * @param {AlbumSectionDeleteArgs} args - Arguments to delete one AlbumSection.
     * @example
     * // Delete one AlbumSection
     * const AlbumSection = await prisma.albumSection.delete({
     *   where: {
     *     // ... filter to delete one AlbumSection
     *   }
     * })
     *
     */
    delete<T extends AlbumSectionDeleteArgs>(
      args: SelectSubset<T, AlbumSectionDeleteArgs<ExtArgs>>
    ): Prisma__AlbumSectionClient<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one AlbumSection.
     * @param {AlbumSectionUpdateArgs} args - Arguments to update one AlbumSection.
     * @example
     * // Update one AlbumSection
     * const albumSection = await prisma.albumSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AlbumSectionUpdateArgs>(
      args: SelectSubset<T, AlbumSectionUpdateArgs<ExtArgs>>
    ): Prisma__AlbumSectionClient<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more AlbumSections.
     * @param {AlbumSectionDeleteManyArgs} args - Arguments to filter AlbumSections to delete.
     * @example
     * // Delete a few AlbumSections
     * const { count } = await prisma.albumSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AlbumSectionDeleteManyArgs>(
      args?: SelectSubset<T, AlbumSectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumSections
     * const albumSection = await prisma.albumSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AlbumSectionUpdateManyArgs>(
      args: SelectSubset<T, AlbumSectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumSections and returns the data updated in the database.
     * @param {AlbumSectionUpdateManyAndReturnArgs} args - Arguments to update many AlbumSections.
     * @example
     * // Update many AlbumSections
     * const albumSection = await prisma.albumSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AlbumSections and only return the `id`
     * const albumSectionWithIdOnly = await prisma.albumSection.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AlbumSectionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, AlbumSectionUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one AlbumSection.
     * @param {AlbumSectionUpsertArgs} args - Arguments to update or create a AlbumSection.
     * @example
     * // Update or create a AlbumSection
     * const albumSection = await prisma.albumSection.upsert({
     *   create: {
     *     // ... data to create a AlbumSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumSection we want to update
     *   }
     * })
     */
    upsert<T extends AlbumSectionUpsertArgs>(
      args: SelectSubset<T, AlbumSectionUpsertArgs<ExtArgs>>
    ): Prisma__AlbumSectionClient<
      $Result.GetResult<
        Prisma.$AlbumSectionPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of AlbumSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSectionCountArgs} args - Arguments to filter AlbumSections to count.
     * @example
     * // Count the number of AlbumSections
     * const count = await prisma.albumSection.count({
     *   where: {
     *     // ... the filter for the AlbumSections we want to count
     *   }
     * })
     **/
    count<T extends AlbumSectionCountArgs>(
      args?: Subset<T, AlbumSectionCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AlbumSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumSectionAggregateArgs>(
      args: Subset<T, AlbumSectionAggregateArgs>
    ): Prisma.PrismaPromise<GetAlbumSectionAggregateType<T>>

    /**
     * Group by AlbumSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumSectionGroupByArgs} args - Group by arguments.
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
      T extends AlbumSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumSectionGroupByArgs["orderBy"] }
        : { orderBy?: AlbumSectionGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AlbumSectionGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetAlbumSectionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the AlbumSection model
     */
    readonly fields: AlbumSectionFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumSectionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AlbumDefaultArgs<ExtArgs>>
    ): Prisma__AlbumClient<
      | $Result.GetResult<
          Prisma.$AlbumPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    photos<T extends AlbumSection$photosArgs<ExtArgs> = {}>(
      args?: Subset<T, AlbumSection$photosArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PhotoPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the AlbumSection model
   */
  interface AlbumSectionFieldRefs {
    readonly id: FieldRef<"AlbumSection", "String">
    readonly title: FieldRef<"AlbumSection", "String">
    readonly description: FieldRef<"AlbumSection", "String">
    readonly albumId: FieldRef<"AlbumSection", "String">
    readonly createdAt: FieldRef<"AlbumSection", "DateTime">
    readonly updatedAt: FieldRef<"AlbumSection", "DateTime">
  }

  // Custom InputTypes
  /**
   * AlbumSection findUnique
   */
  export type AlbumSectionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSection to fetch.
     */
    where: AlbumSectionWhereUniqueInput
  }

  /**
   * AlbumSection findUniqueOrThrow
   */
  export type AlbumSectionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSection to fetch.
     */
    where: AlbumSectionWhereUniqueInput
  }

  /**
   * AlbumSection findFirst
   */
  export type AlbumSectionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSection to fetch.
     */
    where?: AlbumSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AlbumSections to fetch.
     */
    orderBy?:
      | AlbumSectionOrderByWithRelationInput
      | AlbumSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AlbumSections.
     */
    cursor?: AlbumSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AlbumSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AlbumSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AlbumSections.
     */
    distinct?: AlbumSectionScalarFieldEnum | AlbumSectionScalarFieldEnum[]
  }

  /**
   * AlbumSection findFirstOrThrow
   */
  export type AlbumSectionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSection to fetch.
     */
    where?: AlbumSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AlbumSections to fetch.
     */
    orderBy?:
      | AlbumSectionOrderByWithRelationInput
      | AlbumSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AlbumSections.
     */
    cursor?: AlbumSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AlbumSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AlbumSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AlbumSections.
     */
    distinct?: AlbumSectionScalarFieldEnum | AlbumSectionScalarFieldEnum[]
  }

  /**
   * AlbumSection findMany
   */
  export type AlbumSectionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    /**
     * Filter, which AlbumSections to fetch.
     */
    where?: AlbumSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AlbumSections to fetch.
     */
    orderBy?:
      | AlbumSectionOrderByWithRelationInput
      | AlbumSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AlbumSections.
     */
    cursor?: AlbumSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AlbumSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AlbumSections.
     */
    skip?: number
    distinct?: AlbumSectionScalarFieldEnum | AlbumSectionScalarFieldEnum[]
  }

  /**
   * AlbumSection create
   */
  export type AlbumSectionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a AlbumSection.
     */
    data: XOR<AlbumSectionCreateInput, AlbumSectionUncheckedCreateInput>
  }

  /**
   * AlbumSection createMany
   */
  export type AlbumSectionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AlbumSections.
     */
    data: AlbumSectionCreateManyInput | AlbumSectionCreateManyInput[]
  }

  /**
   * AlbumSection createManyAndReturn
   */
  export type AlbumSectionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * The data used to create many AlbumSections.
     */
    data: AlbumSectionCreateManyInput | AlbumSectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumSection update
   */
  export type AlbumSectionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a AlbumSection.
     */
    data: XOR<AlbumSectionUpdateInput, AlbumSectionUncheckedUpdateInput>
    /**
     * Choose, which AlbumSection to update.
     */
    where: AlbumSectionWhereUniqueInput
  }

  /**
   * AlbumSection updateMany
   */
  export type AlbumSectionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AlbumSections.
     */
    data: XOR<
      AlbumSectionUpdateManyMutationInput,
      AlbumSectionUncheckedUpdateManyInput
    >
    /**
     * Filter which AlbumSections to update
     */
    where?: AlbumSectionWhereInput
    /**
     * Limit how many AlbumSections to update.
     */
    limit?: number
  }

  /**
   * AlbumSection updateManyAndReturn
   */
  export type AlbumSectionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * The data used to update AlbumSections.
     */
    data: XOR<
      AlbumSectionUpdateManyMutationInput,
      AlbumSectionUncheckedUpdateManyInput
    >
    /**
     * Filter which AlbumSections to update
     */
    where?: AlbumSectionWhereInput
    /**
     * Limit how many AlbumSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumSection upsert
   */
  export type AlbumSectionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the AlbumSection to update in case it exists.
     */
    where: AlbumSectionWhereUniqueInput
    /**
     * In case the AlbumSection found by the `where` argument doesn't exist, create a new AlbumSection with this data.
     */
    create: XOR<AlbumSectionCreateInput, AlbumSectionUncheckedCreateInput>
    /**
     * In case the AlbumSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumSectionUpdateInput, AlbumSectionUncheckedUpdateInput>
  }

  /**
   * AlbumSection delete
   */
  export type AlbumSectionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    /**
     * Filter which AlbumSection to delete.
     */
    where: AlbumSectionWhereUniqueInput
  }

  /**
   * AlbumSection deleteMany
   */
  export type AlbumSectionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AlbumSections to delete
     */
    where?: AlbumSectionWhereInput
    /**
     * Limit how many AlbumSections to delete.
     */
    limit?: number
  }

  /**
   * AlbumSection.photos
   */
  export type AlbumSection$photosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * AlbumSection without action
   */
  export type AlbumSectionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
  }

  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    sizeBytes: number | null
    width: number | null
    height: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PhotoSumAggregateOutputType = {
    sizeBytes: number | null
    width: number | null
    height: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    originalUrl: string | null
    thumbnailUrl: string | null
    mobileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    filename: string | null
    mimeType: string | null
    sizeBytes: number | null
    width: number | null
    height: number | null
    captureDate: Date | null
    description: string | null
    latitude: number | null
    longitude: number | null
    knownPlace: string | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    originalUrl: string | null
    thumbnailUrl: string | null
    mobileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    filename: string | null
    mimeType: string | null
    sizeBytes: number | null
    width: number | null
    height: number | null
    captureDate: Date | null
    description: string | null
    latitude: number | null
    longitude: number | null
    knownPlace: string | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    ownerId: number
    originalUrl: number
    thumbnailUrl: number
    mobileUrl: number
    createdAt: number
    updatedAt: number
    filename: number
    mimeType: number
    sizeBytes: number
    width: number
    height: number
    captureDate: number
    description: number
    latitude: number
    longitude: number
    knownPlace: number
    _all: number
  }

  export type PhotoAvgAggregateInputType = {
    sizeBytes?: true
    width?: true
    height?: true
    latitude?: true
    longitude?: true
  }

  export type PhotoSumAggregateInputType = {
    sizeBytes?: true
    width?: true
    height?: true
    latitude?: true
    longitude?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    ownerId?: true
    originalUrl?: true
    thumbnailUrl?: true
    mobileUrl?: true
    createdAt?: true
    updatedAt?: true
    filename?: true
    mimeType?: true
    sizeBytes?: true
    width?: true
    height?: true
    captureDate?: true
    description?: true
    latitude?: true
    longitude?: true
    knownPlace?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    ownerId?: true
    originalUrl?: true
    thumbnailUrl?: true
    mobileUrl?: true
    createdAt?: true
    updatedAt?: true
    filename?: true
    mimeType?: true
    sizeBytes?: true
    width?: true
    height?: true
    captureDate?: true
    description?: true
    latitude?: true
    longitude?: true
    knownPlace?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    ownerId?: true
    originalUrl?: true
    thumbnailUrl?: true
    mobileUrl?: true
    createdAt?: true
    updatedAt?: true
    filename?: true
    mimeType?: true
    sizeBytes?: true
    width?: true
    height?: true
    captureDate?: true
    description?: true
    latitude?: true
    longitude?: true
    knownPlace?: true
    _all?: true
  }

  export type PhotoAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Photos
     **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
    [P in keyof T & keyof AggregatePhoto]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }

  export type PhotoGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PhotoWhereInput
    orderBy?:
      | PhotoOrderByWithAggregationInput
      | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    ownerId: string
    originalUrl: string
    thumbnailUrl: string | null
    mobileUrl: string | null
    createdAt: Date
    updatedAt: Date
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date
    description: string | null
    latitude: number | null
    longitude: number | null
    knownPlace: string | null
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PhotoGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof PhotoGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >

  export type PhotoSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      ownerId?: boolean
      originalUrl?: boolean
      thumbnailUrl?: boolean
      mobileUrl?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      filename?: boolean
      mimeType?: boolean
      sizeBytes?: boolean
      width?: boolean
      height?: boolean
      captureDate?: boolean
      description?: boolean
      latitude?: boolean
      longitude?: boolean
      knownPlace?: boolean
      owner?: boolean | UserDefaultArgs<ExtArgs>
      albumSections?: boolean | Photo$albumSectionsArgs<ExtArgs>
      tags?: boolean | Photo$tagsArgs<ExtArgs>
      _count?: boolean | PhotoCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["photo"]
  >

  export type PhotoSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      ownerId?: boolean
      originalUrl?: boolean
      thumbnailUrl?: boolean
      mobileUrl?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      filename?: boolean
      mimeType?: boolean
      sizeBytes?: boolean
      width?: boolean
      height?: boolean
      captureDate?: boolean
      description?: boolean
      latitude?: boolean
      longitude?: boolean
      knownPlace?: boolean
      owner?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["photo"]
  >

  export type PhotoSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      ownerId?: boolean
      originalUrl?: boolean
      thumbnailUrl?: boolean
      mobileUrl?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      filename?: boolean
      mimeType?: boolean
      sizeBytes?: boolean
      width?: boolean
      height?: boolean
      captureDate?: boolean
      description?: boolean
      latitude?: boolean
      longitude?: boolean
      knownPlace?: boolean
      owner?: boolean | UserDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["photo"]
  >

  export type PhotoSelectScalar = {
    id?: boolean
    ownerId?: boolean
    originalUrl?: boolean
    thumbnailUrl?: boolean
    mobileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    filename?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    width?: boolean
    height?: boolean
    captureDate?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    knownPlace?: boolean
  }

  export type PhotoOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "ownerId"
    | "originalUrl"
    | "thumbnailUrl"
    | "mobileUrl"
    | "createdAt"
    | "updatedAt"
    | "filename"
    | "mimeType"
    | "sizeBytes"
    | "width"
    | "height"
    | "captureDate"
    | "description"
    | "latitude"
    | "longitude"
    | "knownPlace",
    ExtArgs["result"]["photo"]
  >
  export type PhotoInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    albumSections?: boolean | Photo$albumSectionsArgs<ExtArgs>
    tags?: boolean | Photo$tagsArgs<ExtArgs>
    _count?: boolean | PhotoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Photo"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      albumSections: Prisma.$AlbumSectionPayload<ExtArgs>[]
      tags: Prisma.$PhotoTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        ownerId: string
        originalUrl: string
        thumbnailUrl: string | null
        mobileUrl: string | null
        createdAt: Date
        updatedAt: Date
        filename: string
        mimeType: string
        sizeBytes: number
        width: number
        height: number
        captureDate: Date
        description: string | null
        latitude: number | null
        longitude: number | null
        knownPlace: string | null
      },
      ExtArgs["result"]["photo"]
    >
    composites: {}
  }

  type PhotoGetPayload<
    S extends boolean | null | undefined | PhotoDefaultArgs,
  > = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PhotoFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PhotoCountAggregateInputType | true
  }

  export interface PhotoDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Photo"]
      meta: { name: "Photo" }
    }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(
      args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>
    ): Prisma__PhotoClient<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoClient<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(
      args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>
    ): Prisma__PhotoClient<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoClient<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     *
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PhotoFindManyArgs>(
      args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     *
     */
    create<T extends PhotoCreateArgs>(
      args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>
    ): Prisma__PhotoClient<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PhotoCreateManyArgs>(
      args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     *
     */
    delete<T extends PhotoDeleteArgs>(
      args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>
    ): Prisma__PhotoClient<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PhotoUpdateArgs>(
      args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>
    ): Prisma__PhotoClient<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PhotoDeleteManyArgs>(
      args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PhotoUpdateManyArgs>(
      args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(
      args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>
    ): Prisma__PhotoClient<
      $Result.GetResult<
        Prisma.$PhotoPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
     **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(
      args: Subset<T, PhotoAggregateArgs>
    ): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
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
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs["orderBy"] }
        : { orderBy?: PhotoGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPhotoGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Photo model
     */
    readonly fields: PhotoFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    albumSections<T extends Photo$albumSectionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Photo$albumSectionsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$AlbumSectionPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >
    tags<T extends Photo$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, Photo$tagsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PhotoTagPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", "String">
    readonly ownerId: FieldRef<"Photo", "String">
    readonly originalUrl: FieldRef<"Photo", "String">
    readonly thumbnailUrl: FieldRef<"Photo", "String">
    readonly mobileUrl: FieldRef<"Photo", "String">
    readonly createdAt: FieldRef<"Photo", "DateTime">
    readonly updatedAt: FieldRef<"Photo", "DateTime">
    readonly filename: FieldRef<"Photo", "String">
    readonly mimeType: FieldRef<"Photo", "String">
    readonly sizeBytes: FieldRef<"Photo", "Int">
    readonly width: FieldRef<"Photo", "Int">
    readonly height: FieldRef<"Photo", "Int">
    readonly captureDate: FieldRef<"Photo", "DateTime">
    readonly description: FieldRef<"Photo", "String">
    readonly latitude: FieldRef<"Photo", "Float">
    readonly longitude: FieldRef<"Photo", "Float">
    readonly knownPlace: FieldRef<"Photo", "String">
  }

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo.albumSections
   */
  export type Photo$albumSectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AlbumSection
     */
    select?: AlbumSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumSection
     */
    omit?: AlbumSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumSectionInclude<ExtArgs> | null
    where?: AlbumSectionWhereInput
    orderBy?:
      | AlbumSectionOrderByWithRelationInput
      | AlbumSectionOrderByWithRelationInput[]
    cursor?: AlbumSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumSectionScalarFieldEnum | AlbumSectionScalarFieldEnum[]
  }

  /**
   * Photo.tags
   */
  export type Photo$tagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    where?: PhotoTagWhereInput
    orderBy?:
      | PhotoTagOrderByWithRelationInput
      | PhotoTagOrderByWithRelationInput[]
    cursor?: PhotoTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tags
     **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }

  export type TagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof TagGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagGroupByOutputType[P]>
          : GetScalarType<T[P], TagGroupByOutputType[P]>
      }
    >
  >

  export type TagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      photos?: boolean | Tag$photosArgs<ExtArgs>
      _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["tag"]
  >

  export type TagSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
    },
    ExtArgs["result"]["tag"]
  >

  export type TagSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
    },
    ExtArgs["result"]["tag"]
  >

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    photos?: boolean | Tag$photosArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}
  export type TagIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {}

  export type $TagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Tag"
    objects: {
      photos: Prisma.$PhotoTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
      },
      ExtArgs["result"]["tag"]
    >
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> =
    $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TagFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: TagCountAggregateInputType | true
  }

  export interface TagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Tag"]
      meta: { name: "Tag" }
    }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     *
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     *
     */
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     *
     */
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
     **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(
      args: Subset<T, TagAggregateArgs>
    ): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs["orderBy"] }
        : { orderBy?: TagGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Tag model
     */
    readonly fields: TagFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Tag$photosArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$photosArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PhotoTagPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", "String">
    readonly name: FieldRef<"Tag", "String">
  }

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.photos
   */
  export type Tag$photosArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    where?: PhotoTagWhereInput
    orderBy?:
      | PhotoTagOrderByWithRelationInput
      | PhotoTagOrderByWithRelationInput[]
    cursor?: PhotoTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }

  /**
   * Model PhotoTag
   */

  export type AggregatePhotoTag = {
    _count: PhotoTagCountAggregateOutputType | null
    _min: PhotoTagMinAggregateOutputType | null
    _max: PhotoTagMaxAggregateOutputType | null
  }

  export type PhotoTagMinAggregateOutputType = {
    photoId: string | null
    tagId: string | null
  }

  export type PhotoTagMaxAggregateOutputType = {
    photoId: string | null
    tagId: string | null
  }

  export type PhotoTagCountAggregateOutputType = {
    photoId: number
    tagId: number
    _all: number
  }

  export type PhotoTagMinAggregateInputType = {
    photoId?: true
    tagId?: true
  }

  export type PhotoTagMaxAggregateInputType = {
    photoId?: true
    tagId?: true
  }

  export type PhotoTagCountAggregateInputType = {
    photoId?: true
    tagId?: true
    _all?: true
  }

  export type PhotoTagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PhotoTag to aggregate.
     */
    where?: PhotoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PhotoTags to fetch.
     */
    orderBy?:
      | PhotoTagOrderByWithRelationInput
      | PhotoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PhotoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PhotoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PhotoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PhotoTags
     **/
    _count?: true | PhotoTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PhotoTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PhotoTagMaxAggregateInputType
  }

  export type GetPhotoTagAggregateType<T extends PhotoTagAggregateArgs> = {
    [P in keyof T & keyof AggregatePhotoTag]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoTag[P]>
      : GetScalarType<T[P], AggregatePhotoTag[P]>
  }

  export type PhotoTagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PhotoTagWhereInput
    orderBy?:
      | PhotoTagOrderByWithAggregationInput
      | PhotoTagOrderByWithAggregationInput[]
    by: PhotoTagScalarFieldEnum[] | PhotoTagScalarFieldEnum
    having?: PhotoTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoTagCountAggregateInputType | true
    _min?: PhotoTagMinAggregateInputType
    _max?: PhotoTagMaxAggregateInputType
  }

  export type PhotoTagGroupByOutputType = {
    photoId: string
    tagId: string
    _count: PhotoTagCountAggregateOutputType | null
    _min: PhotoTagMinAggregateOutputType | null
    _max: PhotoTagMaxAggregateOutputType | null
  }

  type GetPhotoTagGroupByPayload<T extends PhotoTagGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PhotoTagGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof PhotoTagGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoTagGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoTagGroupByOutputType[P]>
        }
      >
    >

  export type PhotoTagSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      photoId?: boolean
      tagId?: boolean
      photo?: boolean | PhotoDefaultArgs<ExtArgs>
      tag?: boolean | TagDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["photoTag"]
  >

  export type PhotoTagSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      photoId?: boolean
      tagId?: boolean
      photo?: boolean | PhotoDefaultArgs<ExtArgs>
      tag?: boolean | TagDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["photoTag"]
  >

  export type PhotoTagSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      photoId?: boolean
      tagId?: boolean
      photo?: boolean | PhotoDefaultArgs<ExtArgs>
      tag?: boolean | TagDefaultArgs<ExtArgs>
    },
    ExtArgs["result"]["photoTag"]
  >

  export type PhotoTagSelectScalar = {
    photoId?: boolean
    tagId?: boolean
  }

  export type PhotoTagOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<"photoId" | "tagId", ExtArgs["result"]["photoTag"]>
  export type PhotoTagInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PhotoTagIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PhotoTagIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    photo?: boolean | PhotoDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $PhotoTagPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "PhotoTag"
    objects: {
      photo: Prisma.$PhotoPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        photoId: string
        tagId: string
      },
      ExtArgs["result"]["photoTag"]
    >
    composites: {}
  }

  type PhotoTagGetPayload<
    S extends boolean | null | undefined | PhotoTagDefaultArgs,
  > = $Result.GetResult<Prisma.$PhotoTagPayload, S>

  type PhotoTagCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<PhotoTagFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PhotoTagCountAggregateInputType | true
  }

  export interface PhotoTagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["PhotoTag"]
      meta: { name: "PhotoTag" }
    }
    /**
     * Find zero or one PhotoTag that matches the filter.
     * @param {PhotoTagFindUniqueArgs} args - Arguments to find a PhotoTag
     * @example
     * // Get one PhotoTag
     * const photoTag = await prisma.photoTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoTagFindUniqueArgs>(
      args: SelectSubset<T, PhotoTagFindUniqueArgs<ExtArgs>>
    ): Prisma__PhotoTagClient<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one PhotoTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoTagFindUniqueOrThrowArgs} args - Arguments to find a PhotoTag
     * @example
     * // Get one PhotoTag
     * const photoTag = await prisma.photoTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoTagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PhotoTagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoTagClient<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first PhotoTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagFindFirstArgs} args - Arguments to find a PhotoTag
     * @example
     * // Get one PhotoTag
     * const photoTag = await prisma.photoTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoTagFindFirstArgs>(
      args?: SelectSubset<T, PhotoTagFindFirstArgs<ExtArgs>>
    ): Prisma__PhotoTagClient<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first PhotoTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagFindFirstOrThrowArgs} args - Arguments to find a PhotoTag
     * @example
     * // Get one PhotoTag
     * const photoTag = await prisma.photoTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoTagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PhotoTagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoTagClient<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more PhotoTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoTags
     * const photoTags = await prisma.photoTag.findMany()
     *
     * // Get first 10 PhotoTags
     * const photoTags = await prisma.photoTag.findMany({ take: 10 })
     *
     * // Only select the `photoId`
     * const photoTagWithPhotoIdOnly = await prisma.photoTag.findMany({ select: { photoId: true } })
     *
     */
    findMany<T extends PhotoTagFindManyArgs>(
      args?: SelectSubset<T, PhotoTagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >

    /**
     * Create a PhotoTag.
     * @param {PhotoTagCreateArgs} args - Arguments to create a PhotoTag.
     * @example
     * // Create one PhotoTag
     * const PhotoTag = await prisma.photoTag.create({
     *   data: {
     *     // ... data to create a PhotoTag
     *   }
     * })
     *
     */
    create<T extends PhotoTagCreateArgs>(
      args: SelectSubset<T, PhotoTagCreateArgs<ExtArgs>>
    ): Prisma__PhotoTagClient<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many PhotoTags.
     * @param {PhotoTagCreateManyArgs} args - Arguments to create many PhotoTags.
     * @example
     * // Create many PhotoTags
     * const photoTag = await prisma.photoTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PhotoTagCreateManyArgs>(
      args?: SelectSubset<T, PhotoTagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhotoTags and returns the data saved in the database.
     * @param {PhotoTagCreateManyAndReturnArgs} args - Arguments to create many PhotoTags.
     * @example
     * // Create many PhotoTags
     * const photoTag = await prisma.photoTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PhotoTags and only return the `photoId`
     * const photoTagWithPhotoIdOnly = await prisma.photoTag.createManyAndReturn({
     *   select: { photoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PhotoTagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PhotoTagCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Delete a PhotoTag.
     * @param {PhotoTagDeleteArgs} args - Arguments to delete one PhotoTag.
     * @example
     * // Delete one PhotoTag
     * const PhotoTag = await prisma.photoTag.delete({
     *   where: {
     *     // ... filter to delete one PhotoTag
     *   }
     * })
     *
     */
    delete<T extends PhotoTagDeleteArgs>(
      args: SelectSubset<T, PhotoTagDeleteArgs<ExtArgs>>
    ): Prisma__PhotoTagClient<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one PhotoTag.
     * @param {PhotoTagUpdateArgs} args - Arguments to update one PhotoTag.
     * @example
     * // Update one PhotoTag
     * const photoTag = await prisma.photoTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PhotoTagUpdateArgs>(
      args: SelectSubset<T, PhotoTagUpdateArgs<ExtArgs>>
    ): Prisma__PhotoTagClient<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more PhotoTags.
     * @param {PhotoTagDeleteManyArgs} args - Arguments to filter PhotoTags to delete.
     * @example
     * // Delete a few PhotoTags
     * const { count } = await prisma.photoTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PhotoTagDeleteManyArgs>(
      args?: SelectSubset<T, PhotoTagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoTags
     * const photoTag = await prisma.photoTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PhotoTagUpdateManyArgs>(
      args: SelectSubset<T, PhotoTagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoTags and returns the data updated in the database.
     * @param {PhotoTagUpdateManyAndReturnArgs} args - Arguments to update many PhotoTags.
     * @example
     * // Update many PhotoTags
     * const photoTag = await prisma.photoTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PhotoTags and only return the `photoId`
     * const photoTagWithPhotoIdOnly = await prisma.photoTag.updateManyAndReturn({
     *   select: { photoId: true },
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
    updateManyAndReturn<T extends PhotoTagUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PhotoTagUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >

    /**
     * Create or update one PhotoTag.
     * @param {PhotoTagUpsertArgs} args - Arguments to update or create a PhotoTag.
     * @example
     * // Update or create a PhotoTag
     * const photoTag = await prisma.photoTag.upsert({
     *   create: {
     *     // ... data to create a PhotoTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoTag we want to update
     *   }
     * })
     */
    upsert<T extends PhotoTagUpsertArgs>(
      args: SelectSubset<T, PhotoTagUpsertArgs<ExtArgs>>
    ): Prisma__PhotoTagClient<
      $Result.GetResult<
        Prisma.$PhotoTagPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of PhotoTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagCountArgs} args - Arguments to filter PhotoTags to count.
     * @example
     * // Count the number of PhotoTags
     * const count = await prisma.photoTag.count({
     *   where: {
     *     // ... the filter for the PhotoTags we want to count
     *   }
     * })
     **/
    count<T extends PhotoTagCountArgs>(
      args?: Subset<T, PhotoTagCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PhotoTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoTagAggregateArgs>(
      args: Subset<T, PhotoTagAggregateArgs>
    ): Prisma.PrismaPromise<GetPhotoTagAggregateType<T>>

    /**
     * Group by PhotoTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoTagGroupByArgs} args - Group by arguments.
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
      T extends PhotoTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoTagGroupByArgs["orderBy"] }
        : { orderBy?: PhotoTagGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
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
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PhotoTagGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPhotoTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the PhotoTag model
     */
    readonly fields: PhotoTagFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoTagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photo<T extends PhotoDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PhotoDefaultArgs<ExtArgs>>
    ): Prisma__PhotoClient<
      | $Result.GetResult<
          Prisma.$PhotoPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TagDefaultArgs<ExtArgs>>
    ): Prisma__TagClient<
      | $Result.GetResult<
          Prisma.$TagPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the PhotoTag model
   */
  interface PhotoTagFieldRefs {
    readonly photoId: FieldRef<"PhotoTag", "String">
    readonly tagId: FieldRef<"PhotoTag", "String">
  }

  // Custom InputTypes
  /**
   * PhotoTag findUnique
   */
  export type PhotoTagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTag to fetch.
     */
    where: PhotoTagWhereUniqueInput
  }

  /**
   * PhotoTag findUniqueOrThrow
   */
  export type PhotoTagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTag to fetch.
     */
    where: PhotoTagWhereUniqueInput
  }

  /**
   * PhotoTag findFirst
   */
  export type PhotoTagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTag to fetch.
     */
    where?: PhotoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PhotoTags to fetch.
     */
    orderBy?:
      | PhotoTagOrderByWithRelationInput
      | PhotoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PhotoTags.
     */
    cursor?: PhotoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PhotoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PhotoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PhotoTags.
     */
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * PhotoTag findFirstOrThrow
   */
  export type PhotoTagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTag to fetch.
     */
    where?: PhotoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PhotoTags to fetch.
     */
    orderBy?:
      | PhotoTagOrderByWithRelationInput
      | PhotoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PhotoTags.
     */
    cursor?: PhotoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PhotoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PhotoTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PhotoTags.
     */
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * PhotoTag findMany
   */
  export type PhotoTagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter, which PhotoTags to fetch.
     */
    where?: PhotoTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PhotoTags to fetch.
     */
    orderBy?:
      | PhotoTagOrderByWithRelationInput
      | PhotoTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PhotoTags.
     */
    cursor?: PhotoTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PhotoTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PhotoTags.
     */
    skip?: number
    distinct?: PhotoTagScalarFieldEnum | PhotoTagScalarFieldEnum[]
  }

  /**
   * PhotoTag create
   */
  export type PhotoTagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoTag.
     */
    data: XOR<PhotoTagCreateInput, PhotoTagUncheckedCreateInput>
  }

  /**
   * PhotoTag createMany
   */
  export type PhotoTagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PhotoTags.
     */
    data: PhotoTagCreateManyInput | PhotoTagCreateManyInput[]
  }

  /**
   * PhotoTag createManyAndReturn
   */
  export type PhotoTagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * The data used to create many PhotoTags.
     */
    data: PhotoTagCreateManyInput | PhotoTagCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoTag update
   */
  export type PhotoTagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoTag.
     */
    data: XOR<PhotoTagUpdateInput, PhotoTagUncheckedUpdateInput>
    /**
     * Choose, which PhotoTag to update.
     */
    where: PhotoTagWhereUniqueInput
  }

  /**
   * PhotoTag updateMany
   */
  export type PhotoTagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PhotoTags.
     */
    data: XOR<PhotoTagUpdateManyMutationInput, PhotoTagUncheckedUpdateManyInput>
    /**
     * Filter which PhotoTags to update
     */
    where?: PhotoTagWhereInput
    /**
     * Limit how many PhotoTags to update.
     */
    limit?: number
  }

  /**
   * PhotoTag updateManyAndReturn
   */
  export type PhotoTagUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * The data used to update PhotoTags.
     */
    data: XOR<PhotoTagUpdateManyMutationInput, PhotoTagUncheckedUpdateManyInput>
    /**
     * Filter which PhotoTags to update
     */
    where?: PhotoTagWhereInput
    /**
     * Limit how many PhotoTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoTag upsert
   */
  export type PhotoTagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoTag to update in case it exists.
     */
    where: PhotoTagWhereUniqueInput
    /**
     * In case the PhotoTag found by the `where` argument doesn't exist, create a new PhotoTag with this data.
     */
    create: XOR<PhotoTagCreateInput, PhotoTagUncheckedCreateInput>
    /**
     * In case the PhotoTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoTagUpdateInput, PhotoTagUncheckedUpdateInput>
  }

  /**
   * PhotoTag delete
   */
  export type PhotoTagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
    /**
     * Filter which PhotoTag to delete.
     */
    where: PhotoTagWhereUniqueInput
  }

  /**
   * PhotoTag deleteMany
   */
  export type PhotoTagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PhotoTags to delete
     */
    where?: PhotoTagWhereInput
    /**
     * Limit how many PhotoTags to delete.
     */
    limit?: number
  }

  /**
   * PhotoTag without action
   */
  export type PhotoTagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PhotoTag
     */
    select?: PhotoTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoTag
     */
    omit?: PhotoTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoTagInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: "Serializable"
  }

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const UserScalarFieldEnum: {
    id: "id"
    email: "email"
    hashedPassword: "hashedPassword"
  }

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

  export const AlbumScalarFieldEnum: {
    id: "id"
    title: "title"
    description: "description"
    ownerId: "ownerId"
    publicSlug: "publicSlug"
    createdAt: "createdAt"
    updatedAt: "updatedAt"
  }

  export type AlbumScalarFieldEnum =
    (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]

  export const AlbumSectionScalarFieldEnum: {
    id: "id"
    title: "title"
    description: "description"
    albumId: "albumId"
    createdAt: "createdAt"
    updatedAt: "updatedAt"
  }

  export type AlbumSectionScalarFieldEnum =
    (typeof AlbumSectionScalarFieldEnum)[keyof typeof AlbumSectionScalarFieldEnum]

  export const PhotoScalarFieldEnum: {
    id: "id"
    ownerId: "ownerId"
    originalUrl: "originalUrl"
    thumbnailUrl: "thumbnailUrl"
    mobileUrl: "mobileUrl"
    createdAt: "createdAt"
    updatedAt: "updatedAt"
    filename: "filename"
    mimeType: "mimeType"
    sizeBytes: "sizeBytes"
    width: "width"
    height: "height"
    captureDate: "captureDate"
    description: "description"
    latitude: "latitude"
    longitude: "longitude"
    knownPlace: "knownPlace"
  }

  export type PhotoScalarFieldEnum =
    (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]

  export const TagScalarFieldEnum: {
    id: "id"
    name: "name"
  }

  export type TagScalarFieldEnum =
    (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]

  export const PhotoTagScalarFieldEnum: {
    photoId: "photoId"
    tagId: "tagId"
  }

  export type PhotoTagScalarFieldEnum =
    (typeof PhotoTagScalarFieldEnum)[keyof typeof PhotoTagScalarFieldEnum]

  export const SortOrder: {
    asc: "asc"
    desc: "desc"
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const NullsOrder: {
    first: "first"
    last: "last"
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashedPassword?: StringNullableFilter<"User"> | string | null
    albums?: AlbumListRelationFilter
    photos?: PhotoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    albums?: AlbumOrderByRelationAggregateInput
    photos?: PhotoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      email?: string
      AND?: UserWhereInput | UserWhereInput[]
      OR?: UserWhereInput[]
      NOT?: UserWhereInput | UserWhereInput[]
      hashedPassword?: StringNullableFilter<"User"> | string | null
      albums?: AlbumListRelationFilter
      photos?: PhotoListRelationFilter
    },
    "id" | "email"
  >

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    description?: StringNullableFilter<"Album"> | string | null
    ownerId?: StringFilter<"Album"> | string
    publicSlug?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    sections?: AlbumSectionListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    publicSlug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    sections?: AlbumSectionOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      publicSlug?: string
      AND?: AlbumWhereInput | AlbumWhereInput[]
      OR?: AlbumWhereInput[]
      NOT?: AlbumWhereInput | AlbumWhereInput[]
      title?: StringFilter<"Album"> | string
      description?: StringNullableFilter<"Album"> | string | null
      ownerId?: StringFilter<"Album"> | string
      createdAt?: DateTimeFilter<"Album"> | Date | string
      updatedAt?: DateTimeFilter<"Album"> | Date | string
      owner?: XOR<UserScalarRelationFilter, UserWhereInput>
      sections?: AlbumSectionListRelationFilter
    },
    "id" | "publicSlug"
  >

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    publicSlug?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?:
      | AlbumScalarWhereWithAggregatesInput
      | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?:
      | AlbumScalarWhereWithAggregatesInput
      | AlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Album"> | string
    title?: StringWithAggregatesFilter<"Album"> | string
    description?: StringNullableWithAggregatesFilter<"Album"> | string | null
    ownerId?: StringWithAggregatesFilter<"Album"> | string
    publicSlug?: StringNullableWithAggregatesFilter<"Album"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Album"> | Date | string
  }

  export type AlbumSectionWhereInput = {
    AND?: AlbumSectionWhereInput | AlbumSectionWhereInput[]
    OR?: AlbumSectionWhereInput[]
    NOT?: AlbumSectionWhereInput | AlbumSectionWhereInput[]
    id?: StringFilter<"AlbumSection"> | string
    title?: StringFilter<"AlbumSection"> | string
    description?: StringNullableFilter<"AlbumSection"> | string | null
    albumId?: StringFilter<"AlbumSection"> | string
    createdAt?: DateTimeFilter<"AlbumSection"> | Date | string
    updatedAt?: DateTimeFilter<"AlbumSection"> | Date | string
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    photos?: PhotoListRelationFilter
  }

  export type AlbumSectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    album?: AlbumOrderByWithRelationInput
    photos?: PhotoOrderByRelationAggregateInput
  }

  export type AlbumSectionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: AlbumSectionWhereInput | AlbumSectionWhereInput[]
      OR?: AlbumSectionWhereInput[]
      NOT?: AlbumSectionWhereInput | AlbumSectionWhereInput[]
      title?: StringFilter<"AlbumSection"> | string
      description?: StringNullableFilter<"AlbumSection"> | string | null
      albumId?: StringFilter<"AlbumSection"> | string
      createdAt?: DateTimeFilter<"AlbumSection"> | Date | string
      updatedAt?: DateTimeFilter<"AlbumSection"> | Date | string
      album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
      photos?: PhotoListRelationFilter
    },
    "id"
  >

  export type AlbumSectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlbumSectionCountOrderByAggregateInput
    _max?: AlbumSectionMaxOrderByAggregateInput
    _min?: AlbumSectionMinOrderByAggregateInput
  }

  export type AlbumSectionScalarWhereWithAggregatesInput = {
    AND?:
      | AlbumSectionScalarWhereWithAggregatesInput
      | AlbumSectionScalarWhereWithAggregatesInput[]
    OR?: AlbumSectionScalarWhereWithAggregatesInput[]
    NOT?:
      | AlbumSectionScalarWhereWithAggregatesInput
      | AlbumSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlbumSection"> | string
    title?: StringWithAggregatesFilter<"AlbumSection"> | string
    description?:
      | StringNullableWithAggregatesFilter<"AlbumSection">
      | string
      | null
    albumId?: StringWithAggregatesFilter<"AlbumSection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AlbumSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlbumSection"> | Date | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    ownerId?: StringFilter<"Photo"> | string
    originalUrl?: StringFilter<"Photo"> | string
    thumbnailUrl?: StringNullableFilter<"Photo"> | string | null
    mobileUrl?: StringNullableFilter<"Photo"> | string | null
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    updatedAt?: DateTimeFilter<"Photo"> | Date | string
    filename?: StringFilter<"Photo"> | string
    mimeType?: StringFilter<"Photo"> | string
    sizeBytes?: IntFilter<"Photo"> | number
    width?: IntFilter<"Photo"> | number
    height?: IntFilter<"Photo"> | number
    captureDate?: DateTimeFilter<"Photo"> | Date | string
    description?: StringNullableFilter<"Photo"> | string | null
    latitude?: FloatNullableFilter<"Photo"> | number | null
    longitude?: FloatNullableFilter<"Photo"> | number | null
    knownPlace?: StringNullableFilter<"Photo"> | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    albumSections?: AlbumSectionListRelationFilter
    tags?: PhotoTagListRelationFilter
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    originalUrl?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    mobileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    captureDate?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    knownPlace?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    albumSections?: AlbumSectionOrderByRelationAggregateInput
    tags?: PhotoTagOrderByRelationAggregateInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: PhotoWhereInput | PhotoWhereInput[]
      OR?: PhotoWhereInput[]
      NOT?: PhotoWhereInput | PhotoWhereInput[]
      ownerId?: StringFilter<"Photo"> | string
      originalUrl?: StringFilter<"Photo"> | string
      thumbnailUrl?: StringNullableFilter<"Photo"> | string | null
      mobileUrl?: StringNullableFilter<"Photo"> | string | null
      createdAt?: DateTimeFilter<"Photo"> | Date | string
      updatedAt?: DateTimeFilter<"Photo"> | Date | string
      filename?: StringFilter<"Photo"> | string
      mimeType?: StringFilter<"Photo"> | string
      sizeBytes?: IntFilter<"Photo"> | number
      width?: IntFilter<"Photo"> | number
      height?: IntFilter<"Photo"> | number
      captureDate?: DateTimeFilter<"Photo"> | Date | string
      description?: StringNullableFilter<"Photo"> | string | null
      latitude?: FloatNullableFilter<"Photo"> | number | null
      longitude?: FloatNullableFilter<"Photo"> | number | null
      knownPlace?: StringNullableFilter<"Photo"> | string | null
      owner?: XOR<UserScalarRelationFilter, UserWhereInput>
      albumSections?: AlbumSectionListRelationFilter
      tags?: PhotoTagListRelationFilter
    },
    "id"
  >

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    originalUrl?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    mobileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    captureDate?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    knownPlace?: SortOrderInput | SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?:
      | PhotoScalarWhereWithAggregatesInput
      | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?:
      | PhotoScalarWhereWithAggregatesInput
      | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    ownerId?: StringWithAggregatesFilter<"Photo"> | string
    originalUrl?: StringWithAggregatesFilter<"Photo"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    mobileUrl?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
    filename?: StringWithAggregatesFilter<"Photo"> | string
    mimeType?: StringWithAggregatesFilter<"Photo"> | string
    sizeBytes?: IntWithAggregatesFilter<"Photo"> | number
    width?: IntWithAggregatesFilter<"Photo"> | number
    height?: IntWithAggregatesFilter<"Photo"> | number
    captureDate?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Photo"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Photo"> | number | null
    knownPlace?: StringNullableWithAggregatesFilter<"Photo"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    photos?: PhotoTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photos?: PhotoTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      name?: string
      AND?: TagWhereInput | TagWhereInput[]
      OR?: TagWhereInput[]
      NOT?: TagWhereInput | TagWhereInput[]
      photos?: PhotoTagListRelationFilter
    },
    "id" | "name"
  >

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type PhotoTagWhereInput = {
    AND?: PhotoTagWhereInput | PhotoTagWhereInput[]
    OR?: PhotoTagWhereInput[]
    NOT?: PhotoTagWhereInput | PhotoTagWhereInput[]
    photoId?: StringFilter<"PhotoTag"> | string
    tagId?: StringFilter<"PhotoTag"> | string
    photo?: XOR<PhotoScalarRelationFilter, PhotoWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type PhotoTagOrderByWithRelationInput = {
    photoId?: SortOrder
    tagId?: SortOrder
    photo?: PhotoOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type PhotoTagWhereUniqueInput = Prisma.AtLeast<
    {
      photoId_tagId?: PhotoTagPhotoIdTagIdCompoundUniqueInput
      AND?: PhotoTagWhereInput | PhotoTagWhereInput[]
      OR?: PhotoTagWhereInput[]
      NOT?: PhotoTagWhereInput | PhotoTagWhereInput[]
      photoId?: StringFilter<"PhotoTag"> | string
      tagId?: StringFilter<"PhotoTag"> | string
      photo?: XOR<PhotoScalarRelationFilter, PhotoWhereInput>
      tag?: XOR<TagScalarRelationFilter, TagWhereInput>
    },
    "photoId_tagId"
  >

  export type PhotoTagOrderByWithAggregationInput = {
    photoId?: SortOrder
    tagId?: SortOrder
    _count?: PhotoTagCountOrderByAggregateInput
    _max?: PhotoTagMaxOrderByAggregateInput
    _min?: PhotoTagMinOrderByAggregateInput
  }

  export type PhotoTagScalarWhereWithAggregatesInput = {
    AND?:
      | PhotoTagScalarWhereWithAggregatesInput
      | PhotoTagScalarWhereWithAggregatesInput[]
    OR?: PhotoTagScalarWhereWithAggregatesInput[]
    NOT?:
      | PhotoTagScalarWhereWithAggregatesInput
      | PhotoTagScalarWhereWithAggregatesInput[]
    photoId?: StringWithAggregatesFilter<"PhotoTag"> | string
    tagId?: StringWithAggregatesFilter<"PhotoTag"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    hashedPassword?: string | null
    albums?: AlbumCreateNestedManyWithoutOwnerInput
    photos?: PhotoCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    hashedPassword?: string | null
    albums?: AlbumUncheckedCreateNestedManyWithoutOwnerInput
    photos?: PhotoUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUncheckedUpdateManyWithoutOwnerNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    hashedPassword?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumCreateInput = {
    id?: string
    title: string
    description?: string | null
    publicSlug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAlbumsInput
    sections?: AlbumSectionCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    ownerId: string
    publicSlug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: AlbumSectionUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publicSlug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAlbumsNestedInput
    sections?: AlbumSectionUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    publicSlug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AlbumSectionUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    ownerId: string
    publicSlug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publicSlug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    publicSlug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumSectionCreateInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutSectionsInput
    photos?: PhotoCreateNestedManyWithoutAlbumSectionsInput
  }

  export type AlbumSectionUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumSectionsInput
  }

  export type AlbumSectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutSectionsNestedInput
    photos?: PhotoUpdateManyWithoutAlbumSectionsNestedInput
  }

  export type AlbumSectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutAlbumSectionsNestedInput
  }

  export type AlbumSectionCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumSectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumSectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateInput = {
    id?: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
    owner: UserCreateNestedOneWithoutPhotosInput
    albumSections?: AlbumSectionCreateNestedManyWithoutPhotosInput
    tags?: PhotoTagCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    ownerId: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
    albumSections?: AlbumSectionUncheckedCreateNestedManyWithoutPhotosInput
    tags?: PhotoTagUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutPhotosNestedInput
    albumSections?: AlbumSectionUpdateManyWithoutPhotosNestedInput
    tags?: PhotoTagUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
    albumSections?: AlbumSectionUncheckedUpdateManyWithoutPhotosNestedInput
    tags?: PhotoTagUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoCreateManyInput = {
    id?: string
    ownerId: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: string
    name: string
    photos?: PhotoTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    photos?: PhotoTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photos?: PhotoTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photos?: PhotoTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoTagCreateInput = {
    photo: PhotoCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutPhotosInput
  }

  export type PhotoTagUncheckedCreateInput = {
    photoId: string
    tagId: string
  }

  export type PhotoTagUpdateInput = {
    photo?: PhotoUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoTagUncheckedUpdateInput = {
    photoId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoTagCreateManyInput = {
    photoId: string
    tagId: string
  }

  export type PhotoTagUpdateManyMutationInput = {}

  export type PhotoTagUncheckedUpdateManyInput = {
    photoId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AlbumSectionListRelationFilter = {
    every?: AlbumSectionWhereInput
    some?: AlbumSectionWhereInput
    none?: AlbumSectionWhereInput
  }

  export type AlbumSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    publicSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    publicSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    publicSlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AlbumScalarRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type AlbumSectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlbumSectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PhotoTagListRelationFilter = {
    every?: PhotoTagWhereInput
    some?: PhotoTagWhereInput
    none?: PhotoTagWhereInput
  }

  export type PhotoTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    originalUrl?: SortOrder
    thumbnailUrl?: SortOrder
    mobileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    captureDate?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    knownPlace?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    originalUrl?: SortOrder
    thumbnailUrl?: SortOrder
    mobileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    captureDate?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    knownPlace?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    originalUrl?: SortOrder
    thumbnailUrl?: SortOrder
    mobileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    filename?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    captureDate?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    knownPlace?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
    width?: SortOrder
    height?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PhotoScalarRelationFilter = {
    is?: PhotoWhereInput
    isNot?: PhotoWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type PhotoTagPhotoIdTagIdCompoundUniqueInput = {
    photoId: string
    tagId: string
  }

  export type PhotoTagCountOrderByAggregateInput = {
    photoId?: SortOrder
    tagId?: SortOrder
  }

  export type PhotoTagMaxOrderByAggregateInput = {
    photoId?: SortOrder
    tagId?: SortOrder
  }

  export type PhotoTagMinOrderByAggregateInput = {
    photoId?: SortOrder
    tagId?: SortOrder
  }

  export type AlbumCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput>
      | AlbumCreateWithoutOwnerInput[]
      | AlbumUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?:
      | AlbumCreateOrConnectWithoutOwnerInput
      | AlbumCreateOrConnectWithoutOwnerInput[]
    createMany?: AlbumCreateManyOwnerInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<PhotoCreateWithoutOwnerInput, PhotoUncheckedCreateWithoutOwnerInput>
      | PhotoCreateWithoutOwnerInput[]
      | PhotoUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?:
      | PhotoCreateOrConnectWithoutOwnerInput
      | PhotoCreateOrConnectWithoutOwnerInput[]
    createMany?: PhotoCreateManyOwnerInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput>
      | AlbumCreateWithoutOwnerInput[]
      | AlbumUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?:
      | AlbumCreateOrConnectWithoutOwnerInput
      | AlbumCreateOrConnectWithoutOwnerInput[]
    createMany?: AlbumCreateManyOwnerInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutOwnerInput = {
    create?:
      | XOR<PhotoCreateWithoutOwnerInput, PhotoUncheckedCreateWithoutOwnerInput>
      | PhotoCreateWithoutOwnerInput[]
      | PhotoUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?:
      | PhotoCreateOrConnectWithoutOwnerInput
      | PhotoCreateOrConnectWithoutOwnerInput[]
    createMany?: PhotoCreateManyOwnerInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AlbumUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput>
      | AlbumCreateWithoutOwnerInput[]
      | AlbumUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?:
      | AlbumCreateOrConnectWithoutOwnerInput
      | AlbumCreateOrConnectWithoutOwnerInput[]
    upsert?:
      | AlbumUpsertWithWhereUniqueWithoutOwnerInput
      | AlbumUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AlbumCreateManyOwnerInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?:
      | AlbumUpdateWithWhereUniqueWithoutOwnerInput
      | AlbumUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?:
      | AlbumUpdateManyWithWhereWithoutOwnerInput
      | AlbumUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<PhotoCreateWithoutOwnerInput, PhotoUncheckedCreateWithoutOwnerInput>
      | PhotoCreateWithoutOwnerInput[]
      | PhotoUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?:
      | PhotoCreateOrConnectWithoutOwnerInput
      | PhotoCreateOrConnectWithoutOwnerInput[]
    upsert?:
      | PhotoUpsertWithWhereUniqueWithoutOwnerInput
      | PhotoUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PhotoCreateManyOwnerInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?:
      | PhotoUpdateWithWhereUniqueWithoutOwnerInput
      | PhotoUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?:
      | PhotoUpdateManyWithWhereWithoutOwnerInput
      | PhotoUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<AlbumCreateWithoutOwnerInput, AlbumUncheckedCreateWithoutOwnerInput>
      | AlbumCreateWithoutOwnerInput[]
      | AlbumUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?:
      | AlbumCreateOrConnectWithoutOwnerInput
      | AlbumCreateOrConnectWithoutOwnerInput[]
    upsert?:
      | AlbumUpsertWithWhereUniqueWithoutOwnerInput
      | AlbumUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: AlbumCreateManyOwnerInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?:
      | AlbumUpdateWithWhereUniqueWithoutOwnerInput
      | AlbumUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?:
      | AlbumUpdateManyWithWhereWithoutOwnerInput
      | AlbumUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?:
      | XOR<PhotoCreateWithoutOwnerInput, PhotoUncheckedCreateWithoutOwnerInput>
      | PhotoCreateWithoutOwnerInput[]
      | PhotoUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?:
      | PhotoCreateOrConnectWithoutOwnerInput
      | PhotoCreateOrConnectWithoutOwnerInput[]
    upsert?:
      | PhotoUpsertWithWhereUniqueWithoutOwnerInput
      | PhotoUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PhotoCreateManyOwnerInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?:
      | PhotoUpdateWithWhereUniqueWithoutOwnerInput
      | PhotoUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?:
      | PhotoUpdateManyWithWhereWithoutOwnerInput
      | PhotoUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<
      UserCreateWithoutAlbumsInput,
      UserUncheckedCreateWithoutAlbumsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumSectionCreateNestedManyWithoutAlbumInput = {
    create?:
      | XOR<
          AlbumSectionCreateWithoutAlbumInput,
          AlbumSectionUncheckedCreateWithoutAlbumInput
        >
      | AlbumSectionCreateWithoutAlbumInput[]
      | AlbumSectionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?:
      | AlbumSectionCreateOrConnectWithoutAlbumInput
      | AlbumSectionCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumSectionCreateManyAlbumInputEnvelope
    connect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
  }

  export type AlbumSectionUncheckedCreateNestedManyWithoutAlbumInput = {
    create?:
      | XOR<
          AlbumSectionCreateWithoutAlbumInput,
          AlbumSectionUncheckedCreateWithoutAlbumInput
        >
      | AlbumSectionCreateWithoutAlbumInput[]
      | AlbumSectionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?:
      | AlbumSectionCreateOrConnectWithoutAlbumInput
      | AlbumSectionCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumSectionCreateManyAlbumInputEnvelope
    connect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<
      UserCreateWithoutAlbumsInput,
      UserUncheckedCreateWithoutAlbumsInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutAlbumsInput
    upsert?: UserUpsertWithoutAlbumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutAlbumsInput,
        UserUpdateWithoutAlbumsInput
      >,
      UserUncheckedUpdateWithoutAlbumsInput
    >
  }

  export type AlbumSectionUpdateManyWithoutAlbumNestedInput = {
    create?:
      | XOR<
          AlbumSectionCreateWithoutAlbumInput,
          AlbumSectionUncheckedCreateWithoutAlbumInput
        >
      | AlbumSectionCreateWithoutAlbumInput[]
      | AlbumSectionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?:
      | AlbumSectionCreateOrConnectWithoutAlbumInput
      | AlbumSectionCreateOrConnectWithoutAlbumInput[]
    upsert?:
      | AlbumSectionUpsertWithWhereUniqueWithoutAlbumInput
      | AlbumSectionUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumSectionCreateManyAlbumInputEnvelope
    set?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    disconnect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    delete?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    connect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    update?:
      | AlbumSectionUpdateWithWhereUniqueWithoutAlbumInput
      | AlbumSectionUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?:
      | AlbumSectionUpdateManyWithWhereWithoutAlbumInput
      | AlbumSectionUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumSectionScalarWhereInput | AlbumSectionScalarWhereInput[]
  }

  export type AlbumSectionUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?:
      | XOR<
          AlbumSectionCreateWithoutAlbumInput,
          AlbumSectionUncheckedCreateWithoutAlbumInput
        >
      | AlbumSectionCreateWithoutAlbumInput[]
      | AlbumSectionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?:
      | AlbumSectionCreateOrConnectWithoutAlbumInput
      | AlbumSectionCreateOrConnectWithoutAlbumInput[]
    upsert?:
      | AlbumSectionUpsertWithWhereUniqueWithoutAlbumInput
      | AlbumSectionUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumSectionCreateManyAlbumInputEnvelope
    set?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    disconnect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    delete?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    connect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    update?:
      | AlbumSectionUpdateWithWhereUniqueWithoutAlbumInput
      | AlbumSectionUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?:
      | AlbumSectionUpdateManyWithWhereWithoutAlbumInput
      | AlbumSectionUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumSectionScalarWhereInput | AlbumSectionScalarWhereInput[]
  }

  export type AlbumCreateNestedOneWithoutSectionsInput = {
    create?: XOR<
      AlbumCreateWithoutSectionsInput,
      AlbumUncheckedCreateWithoutSectionsInput
    >
    connectOrCreate?: AlbumCreateOrConnectWithoutSectionsInput
    connect?: AlbumWhereUniqueInput
  }

  export type PhotoCreateNestedManyWithoutAlbumSectionsInput = {
    create?:
      | XOR<
          PhotoCreateWithoutAlbumSectionsInput,
          PhotoUncheckedCreateWithoutAlbumSectionsInput
        >
      | PhotoCreateWithoutAlbumSectionsInput[]
      | PhotoUncheckedCreateWithoutAlbumSectionsInput[]
    connectOrCreate?:
      | PhotoCreateOrConnectWithoutAlbumSectionsInput
      | PhotoCreateOrConnectWithoutAlbumSectionsInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutAlbumSectionsInput = {
    create?:
      | XOR<
          PhotoCreateWithoutAlbumSectionsInput,
          PhotoUncheckedCreateWithoutAlbumSectionsInput
        >
      | PhotoCreateWithoutAlbumSectionsInput[]
      | PhotoUncheckedCreateWithoutAlbumSectionsInput[]
    connectOrCreate?:
      | PhotoCreateOrConnectWithoutAlbumSectionsInput
      | PhotoCreateOrConnectWithoutAlbumSectionsInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type AlbumUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<
      AlbumCreateWithoutSectionsInput,
      AlbumUncheckedCreateWithoutSectionsInput
    >
    connectOrCreate?: AlbumCreateOrConnectWithoutSectionsInput
    upsert?: AlbumUpsertWithoutSectionsInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<
      XOR<
        AlbumUpdateToOneWithWhereWithoutSectionsInput,
        AlbumUpdateWithoutSectionsInput
      >,
      AlbumUncheckedUpdateWithoutSectionsInput
    >
  }

  export type PhotoUpdateManyWithoutAlbumSectionsNestedInput = {
    create?:
      | XOR<
          PhotoCreateWithoutAlbumSectionsInput,
          PhotoUncheckedCreateWithoutAlbumSectionsInput
        >
      | PhotoCreateWithoutAlbumSectionsInput[]
      | PhotoUncheckedCreateWithoutAlbumSectionsInput[]
    connectOrCreate?:
      | PhotoCreateOrConnectWithoutAlbumSectionsInput
      | PhotoCreateOrConnectWithoutAlbumSectionsInput[]
    upsert?:
      | PhotoUpsertWithWhereUniqueWithoutAlbumSectionsInput
      | PhotoUpsertWithWhereUniqueWithoutAlbumSectionsInput[]
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?:
      | PhotoUpdateWithWhereUniqueWithoutAlbumSectionsInput
      | PhotoUpdateWithWhereUniqueWithoutAlbumSectionsInput[]
    updateMany?:
      | PhotoUpdateManyWithWhereWithoutAlbumSectionsInput
      | PhotoUpdateManyWithWhereWithoutAlbumSectionsInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutAlbumSectionsNestedInput = {
    create?:
      | XOR<
          PhotoCreateWithoutAlbumSectionsInput,
          PhotoUncheckedCreateWithoutAlbumSectionsInput
        >
      | PhotoCreateWithoutAlbumSectionsInput[]
      | PhotoUncheckedCreateWithoutAlbumSectionsInput[]
    connectOrCreate?:
      | PhotoCreateOrConnectWithoutAlbumSectionsInput
      | PhotoCreateOrConnectWithoutAlbumSectionsInput[]
    upsert?:
      | PhotoUpsertWithWhereUniqueWithoutAlbumSectionsInput
      | PhotoUpsertWithWhereUniqueWithoutAlbumSectionsInput[]
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?:
      | PhotoUpdateWithWhereUniqueWithoutAlbumSectionsInput
      | PhotoUpdateWithWhereUniqueWithoutAlbumSectionsInput[]
    updateMany?:
      | PhotoUpdateManyWithWhereWithoutAlbumSectionsInput
      | PhotoUpdateManyWithWhereWithoutAlbumSectionsInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPhotosInput = {
    create?: XOR<
      UserCreateWithoutPhotosInput,
      UserUncheckedCreateWithoutPhotosInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumSectionCreateNestedManyWithoutPhotosInput = {
    create?:
      | XOR<
          AlbumSectionCreateWithoutPhotosInput,
          AlbumSectionUncheckedCreateWithoutPhotosInput
        >
      | AlbumSectionCreateWithoutPhotosInput[]
      | AlbumSectionUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?:
      | AlbumSectionCreateOrConnectWithoutPhotosInput
      | AlbumSectionCreateOrConnectWithoutPhotosInput[]
    connect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
  }

  export type PhotoTagCreateNestedManyWithoutPhotoInput = {
    create?:
      | XOR<
          PhotoTagCreateWithoutPhotoInput,
          PhotoTagUncheckedCreateWithoutPhotoInput
        >
      | PhotoTagCreateWithoutPhotoInput[]
      | PhotoTagUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?:
      | PhotoTagCreateOrConnectWithoutPhotoInput
      | PhotoTagCreateOrConnectWithoutPhotoInput[]
    createMany?: PhotoTagCreateManyPhotoInputEnvelope
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
  }

  export type AlbumSectionUncheckedCreateNestedManyWithoutPhotosInput = {
    create?:
      | XOR<
          AlbumSectionCreateWithoutPhotosInput,
          AlbumSectionUncheckedCreateWithoutPhotosInput
        >
      | AlbumSectionCreateWithoutPhotosInput[]
      | AlbumSectionUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?:
      | AlbumSectionCreateOrConnectWithoutPhotosInput
      | AlbumSectionCreateOrConnectWithoutPhotosInput[]
    connect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
  }

  export type PhotoTagUncheckedCreateNestedManyWithoutPhotoInput = {
    create?:
      | XOR<
          PhotoTagCreateWithoutPhotoInput,
          PhotoTagUncheckedCreateWithoutPhotoInput
        >
      | PhotoTagCreateWithoutPhotoInput[]
      | PhotoTagUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?:
      | PhotoTagCreateOrConnectWithoutPhotoInput
      | PhotoTagCreateOrConnectWithoutPhotoInput[]
    createMany?: PhotoTagCreateManyPhotoInputEnvelope
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<
      UserCreateWithoutPhotosInput,
      UserUncheckedCreateWithoutPhotosInput
    >
    connectOrCreate?: UserCreateOrConnectWithoutPhotosInput
    upsert?: UserUpsertWithoutPhotosInput
    connect?: UserWhereUniqueInput
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPhotosInput,
        UserUpdateWithoutPhotosInput
      >,
      UserUncheckedUpdateWithoutPhotosInput
    >
  }

  export type AlbumSectionUpdateManyWithoutPhotosNestedInput = {
    create?:
      | XOR<
          AlbumSectionCreateWithoutPhotosInput,
          AlbumSectionUncheckedCreateWithoutPhotosInput
        >
      | AlbumSectionCreateWithoutPhotosInput[]
      | AlbumSectionUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?:
      | AlbumSectionCreateOrConnectWithoutPhotosInput
      | AlbumSectionCreateOrConnectWithoutPhotosInput[]
    upsert?:
      | AlbumSectionUpsertWithWhereUniqueWithoutPhotosInput
      | AlbumSectionUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    disconnect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    delete?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    connect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    update?:
      | AlbumSectionUpdateWithWhereUniqueWithoutPhotosInput
      | AlbumSectionUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?:
      | AlbumSectionUpdateManyWithWhereWithoutPhotosInput
      | AlbumSectionUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: AlbumSectionScalarWhereInput | AlbumSectionScalarWhereInput[]
  }

  export type PhotoTagUpdateManyWithoutPhotoNestedInput = {
    create?:
      | XOR<
          PhotoTagCreateWithoutPhotoInput,
          PhotoTagUncheckedCreateWithoutPhotoInput
        >
      | PhotoTagCreateWithoutPhotoInput[]
      | PhotoTagUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?:
      | PhotoTagCreateOrConnectWithoutPhotoInput
      | PhotoTagCreateOrConnectWithoutPhotoInput[]
    upsert?:
      | PhotoTagUpsertWithWhereUniqueWithoutPhotoInput
      | PhotoTagUpsertWithWhereUniqueWithoutPhotoInput[]
    createMany?: PhotoTagCreateManyPhotoInputEnvelope
    set?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    disconnect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    delete?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    update?:
      | PhotoTagUpdateWithWhereUniqueWithoutPhotoInput
      | PhotoTagUpdateWithWhereUniqueWithoutPhotoInput[]
    updateMany?:
      | PhotoTagUpdateManyWithWhereWithoutPhotoInput
      | PhotoTagUpdateManyWithWhereWithoutPhotoInput[]
    deleteMany?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
  }

  export type AlbumSectionUncheckedUpdateManyWithoutPhotosNestedInput = {
    create?:
      | XOR<
          AlbumSectionCreateWithoutPhotosInput,
          AlbumSectionUncheckedCreateWithoutPhotosInput
        >
      | AlbumSectionCreateWithoutPhotosInput[]
      | AlbumSectionUncheckedCreateWithoutPhotosInput[]
    connectOrCreate?:
      | AlbumSectionCreateOrConnectWithoutPhotosInput
      | AlbumSectionCreateOrConnectWithoutPhotosInput[]
    upsert?:
      | AlbumSectionUpsertWithWhereUniqueWithoutPhotosInput
      | AlbumSectionUpsertWithWhereUniqueWithoutPhotosInput[]
    set?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    disconnect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    delete?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    connect?: AlbumSectionWhereUniqueInput | AlbumSectionWhereUniqueInput[]
    update?:
      | AlbumSectionUpdateWithWhereUniqueWithoutPhotosInput
      | AlbumSectionUpdateWithWhereUniqueWithoutPhotosInput[]
    updateMany?:
      | AlbumSectionUpdateManyWithWhereWithoutPhotosInput
      | AlbumSectionUpdateManyWithWhereWithoutPhotosInput[]
    deleteMany?: AlbumSectionScalarWhereInput | AlbumSectionScalarWhereInput[]
  }

  export type PhotoTagUncheckedUpdateManyWithoutPhotoNestedInput = {
    create?:
      | XOR<
          PhotoTagCreateWithoutPhotoInput,
          PhotoTagUncheckedCreateWithoutPhotoInput
        >
      | PhotoTagCreateWithoutPhotoInput[]
      | PhotoTagUncheckedCreateWithoutPhotoInput[]
    connectOrCreate?:
      | PhotoTagCreateOrConnectWithoutPhotoInput
      | PhotoTagCreateOrConnectWithoutPhotoInput[]
    upsert?:
      | PhotoTagUpsertWithWhereUniqueWithoutPhotoInput
      | PhotoTagUpsertWithWhereUniqueWithoutPhotoInput[]
    createMany?: PhotoTagCreateManyPhotoInputEnvelope
    set?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    disconnect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    delete?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    update?:
      | PhotoTagUpdateWithWhereUniqueWithoutPhotoInput
      | PhotoTagUpdateWithWhereUniqueWithoutPhotoInput[]
    updateMany?:
      | PhotoTagUpdateManyWithWhereWithoutPhotoInput
      | PhotoTagUpdateManyWithWhereWithoutPhotoInput[]
    deleteMany?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
  }

  export type PhotoTagCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<
          PhotoTagCreateWithoutTagInput,
          PhotoTagUncheckedCreateWithoutTagInput
        >
      | PhotoTagCreateWithoutTagInput[]
      | PhotoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?:
      | PhotoTagCreateOrConnectWithoutTagInput
      | PhotoTagCreateOrConnectWithoutTagInput[]
    createMany?: PhotoTagCreateManyTagInputEnvelope
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
  }

  export type PhotoTagUncheckedCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<
          PhotoTagCreateWithoutTagInput,
          PhotoTagUncheckedCreateWithoutTagInput
        >
      | PhotoTagCreateWithoutTagInput[]
      | PhotoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?:
      | PhotoTagCreateOrConnectWithoutTagInput
      | PhotoTagCreateOrConnectWithoutTagInput[]
    createMany?: PhotoTagCreateManyTagInputEnvelope
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
  }

  export type PhotoTagUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<
          PhotoTagCreateWithoutTagInput,
          PhotoTagUncheckedCreateWithoutTagInput
        >
      | PhotoTagCreateWithoutTagInput[]
      | PhotoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?:
      | PhotoTagCreateOrConnectWithoutTagInput
      | PhotoTagCreateOrConnectWithoutTagInput[]
    upsert?:
      | PhotoTagUpsertWithWhereUniqueWithoutTagInput
      | PhotoTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PhotoTagCreateManyTagInputEnvelope
    set?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    disconnect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    delete?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    update?:
      | PhotoTagUpdateWithWhereUniqueWithoutTagInput
      | PhotoTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?:
      | PhotoTagUpdateManyWithWhereWithoutTagInput
      | PhotoTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
  }

  export type PhotoTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<
          PhotoTagCreateWithoutTagInput,
          PhotoTagUncheckedCreateWithoutTagInput
        >
      | PhotoTagCreateWithoutTagInput[]
      | PhotoTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?:
      | PhotoTagCreateOrConnectWithoutTagInput
      | PhotoTagCreateOrConnectWithoutTagInput[]
    upsert?:
      | PhotoTagUpsertWithWhereUniqueWithoutTagInput
      | PhotoTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PhotoTagCreateManyTagInputEnvelope
    set?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    disconnect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    delete?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    connect?: PhotoTagWhereUniqueInput | PhotoTagWhereUniqueInput[]
    update?:
      | PhotoTagUpdateWithWhereUniqueWithoutTagInput
      | PhotoTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?:
      | PhotoTagUpdateManyWithWhereWithoutTagInput
      | PhotoTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
  }

  export type PhotoCreateNestedOneWithoutTagsInput = {
    create?: XOR<
      PhotoCreateWithoutTagsInput,
      PhotoUncheckedCreateWithoutTagsInput
    >
    connectOrCreate?: PhotoCreateOrConnectWithoutTagsInput
    connect?: PhotoWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPhotosInput = {
    create?: XOR<
      TagCreateWithoutPhotosInput,
      TagUncheckedCreateWithoutPhotosInput
    >
    connectOrCreate?: TagCreateOrConnectWithoutPhotosInput
    connect?: TagWhereUniqueInput
  }

  export type PhotoUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<
      PhotoCreateWithoutTagsInput,
      PhotoUncheckedCreateWithoutTagsInput
    >
    connectOrCreate?: PhotoCreateOrConnectWithoutTagsInput
    upsert?: PhotoUpsertWithoutTagsInput
    connect?: PhotoWhereUniqueInput
    update?: XOR<
      XOR<
        PhotoUpdateToOneWithWhereWithoutTagsInput,
        PhotoUpdateWithoutTagsInput
      >,
      PhotoUncheckedUpdateWithoutTagsInput
    >
  }

  export type TagUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<
      TagCreateWithoutPhotosInput,
      TagUncheckedCreateWithoutPhotosInput
    >
    connectOrCreate?: TagCreateOrConnectWithoutPhotosInput
    upsert?: TagUpsertWithoutPhotosInput
    connect?: TagWhereUniqueInput
    update?: XOR<
      XOR<
        TagUpdateToOneWithWhereWithoutPhotosInput,
        TagUpdateWithoutPhotosInput
      >,
      TagUncheckedUpdateWithoutPhotosInput
    >
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AlbumCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    publicSlug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: AlbumSectionCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description?: string | null
    publicSlug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: AlbumSectionUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutOwnerInput = {
    where: AlbumWhereUniqueInput
    create: XOR<
      AlbumCreateWithoutOwnerInput,
      AlbumUncheckedCreateWithoutOwnerInput
    >
  }

  export type AlbumCreateManyOwnerInputEnvelope = {
    data: AlbumCreateManyOwnerInput | AlbumCreateManyOwnerInput[]
  }

  export type PhotoCreateWithoutOwnerInput = {
    id?: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
    albumSections?: AlbumSectionCreateNestedManyWithoutPhotosInput
    tags?: PhotoTagCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUncheckedCreateWithoutOwnerInput = {
    id?: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
    albumSections?: AlbumSectionUncheckedCreateNestedManyWithoutPhotosInput
    tags?: PhotoTagUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type PhotoCreateOrConnectWithoutOwnerInput = {
    where: PhotoWhereUniqueInput
    create: XOR<
      PhotoCreateWithoutOwnerInput,
      PhotoUncheckedCreateWithoutOwnerInput
    >
  }

  export type PhotoCreateManyOwnerInputEnvelope = {
    data: PhotoCreateManyOwnerInput | PhotoCreateManyOwnerInput[]
  }

  export type AlbumUpsertWithWhereUniqueWithoutOwnerInput = {
    where: AlbumWhereUniqueInput
    update: XOR<
      AlbumUpdateWithoutOwnerInput,
      AlbumUncheckedUpdateWithoutOwnerInput
    >
    create: XOR<
      AlbumCreateWithoutOwnerInput,
      AlbumUncheckedCreateWithoutOwnerInput
    >
  }

  export type AlbumUpdateWithWhereUniqueWithoutOwnerInput = {
    where: AlbumWhereUniqueInput
    data: XOR<
      AlbumUpdateWithoutOwnerInput,
      AlbumUncheckedUpdateWithoutOwnerInput
    >
  }

  export type AlbumUpdateManyWithWhereWithoutOwnerInput = {
    where: AlbumScalarWhereInput
    data: XOR<
      AlbumUpdateManyMutationInput,
      AlbumUncheckedUpdateManyWithoutOwnerInput
    >
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    description?: StringNullableFilter<"Album"> | string | null
    ownerId?: StringFilter<"Album"> | string
    publicSlug?: StringNullableFilter<"Album"> | string | null
    createdAt?: DateTimeFilter<"Album"> | Date | string
    updatedAt?: DateTimeFilter<"Album"> | Date | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PhotoWhereUniqueInput
    update: XOR<
      PhotoUpdateWithoutOwnerInput,
      PhotoUncheckedUpdateWithoutOwnerInput
    >
    create: XOR<
      PhotoCreateWithoutOwnerInput,
      PhotoUncheckedCreateWithoutOwnerInput
    >
  }

  export type PhotoUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PhotoWhereUniqueInput
    data: XOR<
      PhotoUpdateWithoutOwnerInput,
      PhotoUncheckedUpdateWithoutOwnerInput
    >
  }

  export type PhotoUpdateManyWithWhereWithoutOwnerInput = {
    where: PhotoScalarWhereInput
    data: XOR<
      PhotoUpdateManyMutationInput,
      PhotoUncheckedUpdateManyWithoutOwnerInput
    >
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    ownerId?: StringFilter<"Photo"> | string
    originalUrl?: StringFilter<"Photo"> | string
    thumbnailUrl?: StringNullableFilter<"Photo"> | string | null
    mobileUrl?: StringNullableFilter<"Photo"> | string | null
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    updatedAt?: DateTimeFilter<"Photo"> | Date | string
    filename?: StringFilter<"Photo"> | string
    mimeType?: StringFilter<"Photo"> | string
    sizeBytes?: IntFilter<"Photo"> | number
    width?: IntFilter<"Photo"> | number
    height?: IntFilter<"Photo"> | number
    captureDate?: DateTimeFilter<"Photo"> | Date | string
    description?: StringNullableFilter<"Photo"> | string | null
    latitude?: FloatNullableFilter<"Photo"> | number | null
    longitude?: FloatNullableFilter<"Photo"> | number | null
    knownPlace?: StringNullableFilter<"Photo"> | string | null
  }

  export type UserCreateWithoutAlbumsInput = {
    id?: string
    email: string
    hashedPassword?: string | null
    photos?: PhotoCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutAlbumsInput = {
    id?: string
    email: string
    hashedPassword?: string | null
    photos?: PhotoUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutAlbumsInput,
      UserUncheckedCreateWithoutAlbumsInput
    >
  }

  export type AlbumSectionCreateWithoutAlbumInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoCreateNestedManyWithoutAlbumSectionsInput
  }

  export type AlbumSectionUncheckedCreateWithoutAlbumInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    photos?: PhotoUncheckedCreateNestedManyWithoutAlbumSectionsInput
  }

  export type AlbumSectionCreateOrConnectWithoutAlbumInput = {
    where: AlbumSectionWhereUniqueInput
    create: XOR<
      AlbumSectionCreateWithoutAlbumInput,
      AlbumSectionUncheckedCreateWithoutAlbumInput
    >
  }

  export type AlbumSectionCreateManyAlbumInputEnvelope = {
    data: AlbumSectionCreateManyAlbumInput | AlbumSectionCreateManyAlbumInput[]
  }

  export type UserUpsertWithoutAlbumsInput = {
    update: XOR<
      UserUpdateWithoutAlbumsInput,
      UserUncheckedUpdateWithoutAlbumsInput
    >
    create: XOR<
      UserCreateWithoutAlbumsInput,
      UserUncheckedCreateWithoutAlbumsInput
    >
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: UserWhereInput
    data: XOR<
      UserUpdateWithoutAlbumsInput,
      UserUncheckedUpdateWithoutAlbumsInput
    >
  }

  export type UserUpdateWithoutAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: PhotoUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutAlbumsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: PhotoUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type AlbumSectionUpsertWithWhereUniqueWithoutAlbumInput = {
    where: AlbumSectionWhereUniqueInput
    update: XOR<
      AlbumSectionUpdateWithoutAlbumInput,
      AlbumSectionUncheckedUpdateWithoutAlbumInput
    >
    create: XOR<
      AlbumSectionCreateWithoutAlbumInput,
      AlbumSectionUncheckedCreateWithoutAlbumInput
    >
  }

  export type AlbumSectionUpdateWithWhereUniqueWithoutAlbumInput = {
    where: AlbumSectionWhereUniqueInput
    data: XOR<
      AlbumSectionUpdateWithoutAlbumInput,
      AlbumSectionUncheckedUpdateWithoutAlbumInput
    >
  }

  export type AlbumSectionUpdateManyWithWhereWithoutAlbumInput = {
    where: AlbumSectionScalarWhereInput
    data: XOR<
      AlbumSectionUpdateManyMutationInput,
      AlbumSectionUncheckedUpdateManyWithoutAlbumInput
    >
  }

  export type AlbumSectionScalarWhereInput = {
    AND?: AlbumSectionScalarWhereInput | AlbumSectionScalarWhereInput[]
    OR?: AlbumSectionScalarWhereInput[]
    NOT?: AlbumSectionScalarWhereInput | AlbumSectionScalarWhereInput[]
    id?: StringFilter<"AlbumSection"> | string
    title?: StringFilter<"AlbumSection"> | string
    description?: StringNullableFilter<"AlbumSection"> | string | null
    albumId?: StringFilter<"AlbumSection"> | string
    createdAt?: DateTimeFilter<"AlbumSection"> | Date | string
    updatedAt?: DateTimeFilter<"AlbumSection"> | Date | string
  }

  export type AlbumCreateWithoutSectionsInput = {
    id?: string
    title: string
    description?: string | null
    publicSlug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumUncheckedCreateWithoutSectionsInput = {
    id?: string
    title: string
    description?: string | null
    ownerId: string
    publicSlug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumCreateOrConnectWithoutSectionsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<
      AlbumCreateWithoutSectionsInput,
      AlbumUncheckedCreateWithoutSectionsInput
    >
  }

  export type PhotoCreateWithoutAlbumSectionsInput = {
    id?: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
    owner: UserCreateNestedOneWithoutPhotosInput
    tags?: PhotoTagCreateNestedManyWithoutPhotoInput
  }

  export type PhotoUncheckedCreateWithoutAlbumSectionsInput = {
    id?: string
    ownerId: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
    tags?: PhotoTagUncheckedCreateNestedManyWithoutPhotoInput
  }

  export type PhotoCreateOrConnectWithoutAlbumSectionsInput = {
    where: PhotoWhereUniqueInput
    create: XOR<
      PhotoCreateWithoutAlbumSectionsInput,
      PhotoUncheckedCreateWithoutAlbumSectionsInput
    >
  }

  export type AlbumUpsertWithoutSectionsInput = {
    update: XOR<
      AlbumUpdateWithoutSectionsInput,
      AlbumUncheckedUpdateWithoutSectionsInput
    >
    create: XOR<
      AlbumCreateWithoutSectionsInput,
      AlbumUncheckedCreateWithoutSectionsInput
    >
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutSectionsInput = {
    where?: AlbumWhereInput
    data: XOR<
      AlbumUpdateWithoutSectionsInput,
      AlbumUncheckedUpdateWithoutSectionsInput
    >
  }

  export type AlbumUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publicSlug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type AlbumUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    publicSlug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpsertWithWhereUniqueWithoutAlbumSectionsInput = {
    where: PhotoWhereUniqueInput
    update: XOR<
      PhotoUpdateWithoutAlbumSectionsInput,
      PhotoUncheckedUpdateWithoutAlbumSectionsInput
    >
    create: XOR<
      PhotoCreateWithoutAlbumSectionsInput,
      PhotoUncheckedCreateWithoutAlbumSectionsInput
    >
  }

  export type PhotoUpdateWithWhereUniqueWithoutAlbumSectionsInput = {
    where: PhotoWhereUniqueInput
    data: XOR<
      PhotoUpdateWithoutAlbumSectionsInput,
      PhotoUncheckedUpdateWithoutAlbumSectionsInput
    >
  }

  export type PhotoUpdateManyWithWhereWithoutAlbumSectionsInput = {
    where: PhotoScalarWhereInput
    data: XOR<
      PhotoUpdateManyMutationInput,
      PhotoUncheckedUpdateManyWithoutAlbumSectionsInput
    >
  }

  export type UserCreateWithoutPhotosInput = {
    id?: string
    email: string
    hashedPassword?: string | null
    albums?: AlbumCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutPhotosInput = {
    id?: string
    email: string
    hashedPassword?: string | null
    albums?: AlbumUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutPhotosInput = {
    where: UserWhereUniqueInput
    create: XOR<
      UserCreateWithoutPhotosInput,
      UserUncheckedCreateWithoutPhotosInput
    >
  }

  export type AlbumSectionCreateWithoutPhotosInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    album: AlbumCreateNestedOneWithoutSectionsInput
  }

  export type AlbumSectionUncheckedCreateWithoutPhotosInput = {
    id?: string
    title: string
    description?: string | null
    albumId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumSectionCreateOrConnectWithoutPhotosInput = {
    where: AlbumSectionWhereUniqueInput
    create: XOR<
      AlbumSectionCreateWithoutPhotosInput,
      AlbumSectionUncheckedCreateWithoutPhotosInput
    >
  }

  export type PhotoTagCreateWithoutPhotoInput = {
    tag: TagCreateNestedOneWithoutPhotosInput
  }

  export type PhotoTagUncheckedCreateWithoutPhotoInput = {
    tagId: string
  }

  export type PhotoTagCreateOrConnectWithoutPhotoInput = {
    where: PhotoTagWhereUniqueInput
    create: XOR<
      PhotoTagCreateWithoutPhotoInput,
      PhotoTagUncheckedCreateWithoutPhotoInput
    >
  }

  export type PhotoTagCreateManyPhotoInputEnvelope = {
    data: PhotoTagCreateManyPhotoInput | PhotoTagCreateManyPhotoInput[]
  }

  export type UserUpsertWithoutPhotosInput = {
    update: XOR<
      UserUpdateWithoutPhotosInput,
      UserUncheckedUpdateWithoutPhotosInput
    >
    create: XOR<
      UserCreateWithoutPhotosInput,
      UserUncheckedCreateWithoutPhotosInput
    >
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhotosInput = {
    where?: UserWhereInput
    data: XOR<
      UserUpdateWithoutPhotosInput,
      UserUncheckedUpdateWithoutPhotosInput
    >
  }

  export type UserUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type AlbumSectionUpsertWithWhereUniqueWithoutPhotosInput = {
    where: AlbumSectionWhereUniqueInput
    update: XOR<
      AlbumSectionUpdateWithoutPhotosInput,
      AlbumSectionUncheckedUpdateWithoutPhotosInput
    >
    create: XOR<
      AlbumSectionCreateWithoutPhotosInput,
      AlbumSectionUncheckedCreateWithoutPhotosInput
    >
  }

  export type AlbumSectionUpdateWithWhereUniqueWithoutPhotosInput = {
    where: AlbumSectionWhereUniqueInput
    data: XOR<
      AlbumSectionUpdateWithoutPhotosInput,
      AlbumSectionUncheckedUpdateWithoutPhotosInput
    >
  }

  export type AlbumSectionUpdateManyWithWhereWithoutPhotosInput = {
    where: AlbumSectionScalarWhereInput
    data: XOR<
      AlbumSectionUpdateManyMutationInput,
      AlbumSectionUncheckedUpdateManyWithoutPhotosInput
    >
  }

  export type PhotoTagUpsertWithWhereUniqueWithoutPhotoInput = {
    where: PhotoTagWhereUniqueInput
    update: XOR<
      PhotoTagUpdateWithoutPhotoInput,
      PhotoTagUncheckedUpdateWithoutPhotoInput
    >
    create: XOR<
      PhotoTagCreateWithoutPhotoInput,
      PhotoTagUncheckedCreateWithoutPhotoInput
    >
  }

  export type PhotoTagUpdateWithWhereUniqueWithoutPhotoInput = {
    where: PhotoTagWhereUniqueInput
    data: XOR<
      PhotoTagUpdateWithoutPhotoInput,
      PhotoTagUncheckedUpdateWithoutPhotoInput
    >
  }

  export type PhotoTagUpdateManyWithWhereWithoutPhotoInput = {
    where: PhotoTagScalarWhereInput
    data: XOR<
      PhotoTagUpdateManyMutationInput,
      PhotoTagUncheckedUpdateManyWithoutPhotoInput
    >
  }

  export type PhotoTagScalarWhereInput = {
    AND?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
    OR?: PhotoTagScalarWhereInput[]
    NOT?: PhotoTagScalarWhereInput | PhotoTagScalarWhereInput[]
    photoId?: StringFilter<"PhotoTag"> | string
    tagId?: StringFilter<"PhotoTag"> | string
  }

  export type PhotoTagCreateWithoutTagInput = {
    photo: PhotoCreateNestedOneWithoutTagsInput
  }

  export type PhotoTagUncheckedCreateWithoutTagInput = {
    photoId: string
  }

  export type PhotoTagCreateOrConnectWithoutTagInput = {
    where: PhotoTagWhereUniqueInput
    create: XOR<
      PhotoTagCreateWithoutTagInput,
      PhotoTagUncheckedCreateWithoutTagInput
    >
  }

  export type PhotoTagCreateManyTagInputEnvelope = {
    data: PhotoTagCreateManyTagInput | PhotoTagCreateManyTagInput[]
  }

  export type PhotoTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PhotoTagWhereUniqueInput
    update: XOR<
      PhotoTagUpdateWithoutTagInput,
      PhotoTagUncheckedUpdateWithoutTagInput
    >
    create: XOR<
      PhotoTagCreateWithoutTagInput,
      PhotoTagUncheckedCreateWithoutTagInput
    >
  }

  export type PhotoTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PhotoTagWhereUniqueInput
    data: XOR<
      PhotoTagUpdateWithoutTagInput,
      PhotoTagUncheckedUpdateWithoutTagInput
    >
  }

  export type PhotoTagUpdateManyWithWhereWithoutTagInput = {
    where: PhotoTagScalarWhereInput
    data: XOR<
      PhotoTagUpdateManyMutationInput,
      PhotoTagUncheckedUpdateManyWithoutTagInput
    >
  }

  export type PhotoCreateWithoutTagsInput = {
    id?: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
    owner: UserCreateNestedOneWithoutPhotosInput
    albumSections?: AlbumSectionCreateNestedManyWithoutPhotosInput
  }

  export type PhotoUncheckedCreateWithoutTagsInput = {
    id?: string
    ownerId: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
    albumSections?: AlbumSectionUncheckedCreateNestedManyWithoutPhotosInput
  }

  export type PhotoCreateOrConnectWithoutTagsInput = {
    where: PhotoWhereUniqueInput
    create: XOR<
      PhotoCreateWithoutTagsInput,
      PhotoUncheckedCreateWithoutTagsInput
    >
  }

  export type TagCreateWithoutPhotosInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutPhotosInput = {
    where: TagWhereUniqueInput
    create: XOR<
      TagCreateWithoutPhotosInput,
      TagUncheckedCreateWithoutPhotosInput
    >
  }

  export type PhotoUpsertWithoutTagsInput = {
    update: XOR<
      PhotoUpdateWithoutTagsInput,
      PhotoUncheckedUpdateWithoutTagsInput
    >
    create: XOR<
      PhotoCreateWithoutTagsInput,
      PhotoUncheckedCreateWithoutTagsInput
    >
    where?: PhotoWhereInput
  }

  export type PhotoUpdateToOneWithWhereWithoutTagsInput = {
    where?: PhotoWhereInput
    data: XOR<PhotoUpdateWithoutTagsInput, PhotoUncheckedUpdateWithoutTagsInput>
  }

  export type PhotoUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutPhotosNestedInput
    albumSections?: AlbumSectionUpdateManyWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
    albumSections?: AlbumSectionUncheckedUpdateManyWithoutPhotosNestedInput
  }

  export type TagUpsertWithoutPhotosInput = {
    update: XOR<
      TagUpdateWithoutPhotosInput,
      TagUncheckedUpdateWithoutPhotosInput
    >
    create: XOR<
      TagCreateWithoutPhotosInput,
      TagUncheckedCreateWithoutPhotosInput
    >
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPhotosInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPhotosInput, TagUncheckedUpdateWithoutPhotosInput>
  }

  export type TagUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumCreateManyOwnerInput = {
    id?: string
    title: string
    description?: string | null
    publicSlug?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoCreateManyOwnerInput = {
    id?: string
    originalUrl: string
    thumbnailUrl?: string | null
    mobileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filename: string
    mimeType: string
    sizeBytes: number
    width: number
    height: number
    captureDate: Date | string
    description?: string | null
    latitude?: number | null
    longitude?: number | null
    knownPlace?: string | null
  }

  export type AlbumUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publicSlug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AlbumSectionUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publicSlug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AlbumSectionUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    publicSlug?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
    albumSections?: AlbumSectionUpdateManyWithoutPhotosNestedInput
    tags?: PhotoTagUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
    albumSections?: AlbumSectionUncheckedUpdateManyWithoutPhotosNestedInput
    tags?: PhotoTagUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumSectionCreateManyAlbumInput = {
    id?: string
    title: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlbumSectionUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUpdateManyWithoutAlbumSectionsNestedInput
  }

  export type AlbumSectionUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: PhotoUncheckedUpdateManyWithoutAlbumSectionsNestedInput
  }

  export type AlbumSectionUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpdateWithoutAlbumSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutPhotosNestedInput
    tags?: PhotoTagUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateWithoutAlbumSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: PhotoTagUncheckedUpdateManyWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateManyWithoutAlbumSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mobileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    captureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    knownPlace?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoTagCreateManyPhotoInput = {
    tagId: string
  }

  export type AlbumSectionUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type AlbumSectionUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumSectionUncheckedUpdateManyWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoTagUpdateWithoutPhotoInput = {
    tag?: TagUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoTagUncheckedUpdateWithoutPhotoInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoTagUncheckedUpdateManyWithoutPhotoInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoTagCreateManyTagInput = {
    photoId: string
  }

  export type PhotoTagUpdateWithoutTagInput = {
    photo?: PhotoUpdateOneRequiredWithoutTagsNestedInput
  }

  export type PhotoTagUncheckedUpdateWithoutTagInput = {
    photoId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoTagUncheckedUpdateManyWithoutTagInput = {
    photoId?: StringFieldUpdateOperationsInput | string
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
