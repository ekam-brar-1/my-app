import Image from "next/image";

export default function Page(){
  const image = "hello world";
  return(
    <div>
      <h1 class="h-2 font-bold mx-auto">{image}</h1>
    </div>
  )
}