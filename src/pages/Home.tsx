import Hero from '../components/Hero'
import RolesRow from '../components/RolesRow'
import FeaturedStrip from '../components/FeaturedStrip'
import ColorBlock from '../components/ColorBlock'
import { AppleMusicIcon, AppleBooksIcon } from '../components/BrandIcons'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'Lemuel Owusu-Ansah — Full-Stack Developer, Author, Founder',
    description: 'Full-stack developer, founder of Lans Multimedia, published author, and music producer from Accra, Ghana.',
  })

  return (
    <>
      <Hero />
      <RolesRow />
      <FeaturedStrip />

      <ColorBlock
        tone="lemon"
        kickerKey="block_dev_kicker"
        kickerDefault="01 — Development"
        titleKey="block_dev_title"
        titleDefault="Code that ships, and lasts."
        bodyKey="block_dev_body"
        bodyDefault="Full-stack engineering with the LAMP stack, React, and TypeScript — plus a Web3 layer using Wagmi and Viem. Every product is deployed, typed, and tested."
        ctaTo="/skills"
        ctaKey="block_dev_cta"
        ctaDefault="Explore my stack"
        meta={[
          { num: 'LAMP', key: 'block_dev_meta_1', fallback: 'Linux · Apache · MySQL · PHP' },
          { num: 'JS/TS', key: 'block_dev_meta_2', fallback: 'React · TypeScript · Node' },
          { num: 'AI', key: 'block_dev_meta_3', fallback: 'AI-assisted workflows' },
        ]}
      />

      <ColorBlock
        tone="orange"
        kickerKey="block_books_kicker"
        kickerDefault="02 — Books"
        titleKey="block_books_title"
        titleDefault="Words worth keeping."
        bodyKey="block_books_body"
        bodyDefault="Published works spanning fiction, travel, and reflection — available on Apple Books. From Accra to the world."
        ctaHref="https://books.apple.com/gb/author/lemuel-owusu-ansah/id1587403972"
        ctaKey="block_books_cta"
        ctaDefault="Read on Apple Books"
        ctaIcon={<AppleBooksIcon size={18} />}
        meta={[
          { num: 'BOOKS', key: 'block_books_meta_1', fallback: 'Fiction · Travel · Wisdom' },
          { num: 'SINCE', key: 'block_books_meta_2', fallback: '2024' },
          { num: 'WHERE', key: 'block_books_meta_3', fallback: 'Apple Books' },
        ]}
      />

      <ColorBlock
        tone="violet"
        kickerKey="block_music_kicker"
        kickerDefault="03 — Music"
        titleKey="block_music_title"
        titleDefault="Sound, as Lemy Newman."
        bodyKey="block_music_body"
        bodyDefault="Original compositions blending Ghanaian rhythm with modern production. Listen, collaborate, or license."
        ctaHref="https://music.apple.com/gh/artist/lemy-newman/1587403970"
        ctaKey="block_music_cta"
        ctaDefault="Listen / Follow"
        ctaIcon={<AppleMusicIcon size={18} />}
        meta={[
          { num: 'STYLE', key: 'block_music_meta_1', fallback: 'Afro · R&B · Hip-hop' },
          { num: 'ROLE', key: 'block_music_meta_2', fallback: 'Compose · Mix · Master' },
          { num: 'STUDIO', key: 'block_music_meta_3', fallback: 'Lans Multimedia' },
        ]}
      />
    </>
  )
}
