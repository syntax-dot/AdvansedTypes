// ### Awaited ###
// type ExampleType = Promise<string>

// type MyAwaited<T> = T extends Promise<infer R> ? R : T

// type Result = MyAwaited<ExampleType> // string

// ### Concat ###

// type Concat<T extends unknown[], R extends unknown[]> = [...T, ...R]

// type Result = Concat<[1], [2]>

// ### Exclude ###

// type MyExclude<T, U> = T extends U ? never : T //  'a' extends 'a' = true

// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

// ### Shift ###

// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]

// type First<T extends unknown[]> = T[0]

// type head1 = First<arr1> // expected to be 'a'
// type head2 = First<arr2> // expected to be 3

// ### If ###

// type If<C extends boolean, T, F> = C extends true ? T : F

// type A = If<true, 'a', 'b'> // expected to be 'a'
// type B = If<false, 'a', 'b'> // expected to be 'b'

// ### Includes ###

// type Includes<A extends unknown[], F> = F extends A[number] ? true : false

// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

// ### MyPick ###

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type MyPick<Type, Keys extends keyof Type> = {
//   [Key in Keys] : Type[Key]
// }

// type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }

// ### Push ###

type Push<Array extends unknown[], Pushed> = [...Array, Pushed]

type Result = Push<[1, 2], '3'> // [1, 2, '3']
