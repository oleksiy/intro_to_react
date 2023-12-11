// @ts-ignore
import React from "react";

export default function Home() {

    function handleClick() {
        console.log('Click event happened.');
    }
    //const[likes, setLikes] = React.useState();
    const offices = ['Baltimore', 'Dulles', 'New York'];
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <Button buttonText = "Crappy Button" onClick={handleClick}></Button>
        <ListOfOffices names = {offices}/>

    </main>
  )
}

interface ButtonProps {
    buttonText: string;
    onClick: () => void;
}

// @ts-ignore
function Button({ buttonText, onClick }: ButtonProps) {
    return(
        <>
            <button onClick={onClick}>{buttonText}</button>
        </>
    )
}

function Header() {
  return(
      <>
          <h1>Hello - this is a header</h1>
      </>
  )
}



function ListOfOffices(props:{ names: string[] }) {
    return(
        <ul>
            {props.names.map((name: string) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    )
}