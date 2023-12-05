import Image from 'next/image'
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Button content = "Crappy Button"/>
    </main>
  )
}

function Header() {
  return(
      <>
          <h1>Hello - this is a header</h1>
      </>
  )
}

function Button(props: { content: string }) {

    return(
      <>
        <button>{props.content}</button>
      </>
    )
}