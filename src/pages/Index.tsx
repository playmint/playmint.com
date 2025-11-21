import heroImage from "@/assets/playmint-hero.avif";
import logoImage from "@/assets/playmint-logo-small.avif";
import cryptImage from "@/assets/the-crypt-game.avif";
import downstreamImage from "@/assets/downstream-game.avif";
import spaceShooterImage from "@/assets/space-shooter-game.webp";
import { Separator } from "@/components/ui/separator";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <img src={heroImage} alt="Playmint" className="w-full h-[200px] md:h-[300px] object-cover opacity-60" />
        <div className="absolute inset-0 z-20 flex flex-row items-center justify-center gap-4 md:gap-6">
          <img src={logoImage} alt="Playmint Logo" className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-lg" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Playmint
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pt-2 pb-12 bg-background">
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>
              Playmint was founded in 2021 to explore how decentralised technologies like blockchains could be used to create a new kind of videogame.
            </p>

            <p>
              Around that time, games were being built that used a blockchain token as the technology behind in-game currencies and in-game items. We wanted to go further with that idea and asked whether it was possible to put not just game items but the games themselves on a blockchain. Could we create the gaming equivalent of Bitcoin: created by someone but owned by no-one, free from centralised control, permanent and immutable?
            </p>

            <p>
              Our first published title was a dungeon game called <a href="https://www.youtube.com/watch?v=BEEmhrM6YdQ" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2 hover:decoration-primary/70">The Crypt</a>, which proved to ourselves and the world that a game could run on a programmable blockchain. It was more popular than we could have hoped and gave us conviction to follow the path further. We identified that cryptography techniques such as <a href="https://paragraph.com/@5p0rt5beard/client-side-proofs" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2 hover:decoration-primary/70">client-side proofs</a> could be used to safely offload work from the blockchain itself.
            </p>

            <figure className="my-8 rounded-lg overflow-hidden border border-border">
              <img src={cryptImage} alt="The Crypt game screenshot" className="w-full h-auto" />
              <figcaption className="text-sm text-muted-foreground text-center py-3 px-4">
                The Crypt - The world's first fully on-chain co-op multiplayer game.
              </figcaption>
            </figure>

            <p>
              Avoiding the scams and hustle of much of what we saw in the world of crypto, we instead shared ideas with the other nerds in the space, working on ideas the world had never seen before.
            </p>

            <p>
              Our second title was <a href="https://www.blockchaingamer.biz/features/opinions/26579/playmint-onchain-autonomous-worlds-downstream/" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2 hover:decoration-primary/70">Downstream</a>, an ambitious on-chain game that allowed anyone playing to <a href="https://medium.com/@david.amor/downstreams-builder-s-guide-40e5274699bf" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2 hover:decoration-primary/70">add code</a> to expand the game-world for every player inside it. Roblox had built a platform on a similar idea, but their centralised approach meant that the games there were creatively and commercially limited by what Roblox wanted to see on their platform. Downstream was more like the internet: a protocol that no one owned where people were free to build what they like. We released the first version of Downstream in the summer of 2024.
            </p>

            <figure className="my-8 rounded-lg overflow-hidden border border-border">
              <img src={downstreamImage} alt="Downstream game screenshot" className="w-full h-auto" />
              <figcaption className="text-sm text-muted-foreground text-center py-3 px-4">
                Downstream - An on-chain game that uses compatibility to allow players to expand the game world for everyone
              </figcaption>
            </figure>

            <p>
              While Downstream fulfilled our architectural goals, its gameplay was limited to the speed of the blockchain, which is a lot slower than a typical game server. To address this, we invented a technology called <a href="https://medium.com/@david.amor/why-weve-built-playerchains-6612c409ab2d" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2 hover:decoration-primary/70">Playerchains</a>, which let the players themselves become a blockchain using a peer-to-peer DAG consensus system. It was a trustless way of creating multiplayer without a server and worked perfectly in our proof-of-concept game Space Shooter.
            </p>

            <figure className="my-8 rounded-lg overflow-hidden border border-border">
              <img src={spaceShooterImage} alt="Space Shooter game screenshot" className="w-full h-auto" />
              <figcaption className="text-sm text-muted-foreground text-center py-3 px-4">
                Space Shooter - Powered by Playerchains, a peer-to-peer DAG consensus system for trustless multiplayer
              </figcaption>
            </figure>

            <p>
              As we look back on these projects, it's notable that in the few places where we used a web2 service like imgur or Azure the game has started to break, but the game code, the players and the worlds they created will all live on forever. A testament to the ethos we were striving for.
            </p>

            <Separator className="my-8" />

            <p className="font-medium">
              In late 2025 Playmint was acquired by the world's leading on-chain game infrastructure company, Cartridge. A team that shared the philosophy and ambition that Playmint was founded with in 2021. <a href="https://cartridge.gg" target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-2 underline-offset-2 hover:decoration-primary/70">Cartridge</a>, a team that shared the philosophy and ambition that Playmint was with in 2021.
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Playmint
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;