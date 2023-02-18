// type MyType = number | string[] | boolean
// const test = (name: string): MyType => {
//     return [name]
// }
//
// console.log((test('Max')));
//
// // const arr:number[] =[1,2,3,4]
// const arr: [number, string] = [2, '3']

// interface IUser<Data> {
//     name: string;
//     surname: string;
//     age: number;
//     status: boolean;
//     data:Data;
// }
//
// // const user: IUser = {name:'Max', surname:'Popov', age:18, status:true}
// // const user: Partial<IUser> = {name:'Max', surname:'Popov'}
// const user: IUser<number[]>={name:'Max', surname:'Popov', age:18, status:true, data:[1,2,3,4]}

// class User {
//     // private name: string
//     // private age: number
//     // constructor(name:string, age:number) {
//     //     this.name=name;
//     //     this.age=age;
// // }
//     constructor(private name: string, private age: number) {
//     }
// }

// interface IShape {
//     area: () => number;
//     perimeter: () => number;
// }
//
// interface IGreeting {
//     greeting: () => void;
// }
//
// class Rectangle implements IGreeting, IShape {
//     constructor(private a: number, private b: number) {
//     }
//
//     greeting(): void {
//         console.log('hello');
//     }
//
//     area(): number {
//         return this.a * this.b;
//     }
//
//     perimeter(): number {
//         return this.a * 2 + this.b * 2;
//     }
// }
//
// const rectangle = new Rectangle(1, 2);
// rectangle.greeting()
// console.log(rectangle.area());
// console.log(rectangle.perimeter());
//
// class Triangle implements IShape {
//     constructor(private a: number, private b: number, private c: number) {
//     }
//
//     area(): number {
//         return this.a * this.b * this.c;
//     }
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     }
// }
//
//
// const shapes:IShape[]=[new Rectangle(1,2), new  Triangle(1,2,3), new Rectangle(4,5)]
//
// for (let shape of shapes){
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }


// const x = (): number=>{
//     return 15
// }

// type MuType = ReturnType<typeof x>
//
// const a:MuType= 'sss'



import {userService} from "./services/userService";
userService.getAll().then(({data})=>{
    console.log(data[0].address.geo.lng);
})
