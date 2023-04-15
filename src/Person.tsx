import {FC} from 'react';

 interface Siu {
  name: string;
  age: number;
  email: string;
 
}

export const Person: FC<Siu> = ({name,email, age}) =>  {
  return (
    <div> 
      <h2>Name: {name}</h2>
      <h2>email: {email}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
}
	