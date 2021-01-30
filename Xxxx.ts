class User implements UserInterface {

  id: number;
  name: string;
  age?: number;

  greeting(): void {
    console.log('asdfashgdf');
  }


  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

interface UserInterface {
  id: number;
  name: string;
  age?: number;

  greeting(): void;


}


function xxx(
  user: UserInterface,
  user2: UserInterface
): void {
}

xxx(new User(1, 'vasya', 123), {
  id: 1, name: 'asdasd', age: 123, greeting: () => {
    console.log('sfgsjf');
  }
});


let asd: User[] = [new User(123, 'adsad', 123)];

