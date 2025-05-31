import Image from "next/image"
import { Name } from "./name"
import { Description } from "./description"

interface CardProfileProps{
    user:{
        id: string,
        name: string | null,
        username: string | null,
        bio: string| null,
        image: string | null
      }
}

export function CardProfile({user}: CardProfileProps) {
    return(
        <section className="w-full flex flex-col items-center mx-auto px-4">
            <div className="">
                <Image
                    src={user.image ?? "https://avatars.githubusercontent.com/u/44274093?v=4"}
                    alt="Foto  de perfil"
                    width={104}
                    height={104}
                    priority
                    quality={100}
                    className="rounded-xl bg-gray-50 object-cover border-4 border-white hover:shadow-xl duration-300"
                />
            </div>
            <div>
                <Name
                initialName={user.name ?? "Mateus Luiz Gonzaga"}
                />
                <Description
                initialDescription={user.bio ?? "Digite sua biografia..."}
                />
            </div>
        </section>
    )
}