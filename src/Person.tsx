import {FC,ChangeEvent,useState} from 'react';

 interface Siu {
  name: string;
  age: number;
  email: string;
 
}

export const Person: FC<Siu> = ({name,email, age}) =>  {

  const [country, setCountry] = useState<string | null>(null)

  const handleChange =(event: ChangeEvent<HTMLInputElement>)=>{
    setCountry(event.target.value)
  }
  return (
    <div> 
      <h2>Name: {name}</h2>
      <h2>email: {email}</h2>
      <h2>Age: {age}</h2>

      <input type="text" placeholder='write  sown your country' onChange={handleChange} />

      {country}
    </div>
  );
}
	