import Image from 'next/image'
import React from "react";
import {string} from "prop-types";
import dynamic from "next/dynamic";

export default function Home() {
    function handleClick() {
        console.log('Click event happened.');
    }
    //const[likes, setLikes] = React.useState();
    const offices = ['Baltimore', 'Dulles', 'New York'];
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <Button content = "Crappy Button"/>
        <ListOfOffices names = {offices}/>

    </main>
  )
}

function Button(props: { content: string }) {
    return(
        <>
            <button>{props.content}</button>
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