import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import SkillCategory from '../components/SkillCategory'
import SkillList from '../components/SkillList'
import CertificationCard from '../components/CertificationCard'

const stackGroups = [
  { title: 'Frontend Development', bg: 'bg-[#bef264] dark:bg-[#4d7c0f]', text: 'text-[#1a2e05] dark:text-[#ecfccb]', muted: 'text-[#365314] dark:text-[#d9f99d]', items: [
    { name: 'React.js', level: 5, proof: 'This entire portfolio is React', href: '/' },
    { name: 'TypeScript', level: 5, proof: '100% of this codebase is typed', href: '/' },
    { name: 'Responsive Web', level: 5, proof: 'Mobile-first, works on every screen', href: '/' },
    { name: 'UI / UX', level: 4, proof: 'Design system, dark mode, accessibility', href: '/' },
  ]},
  { title: 'Web3 & Blockchain', bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', text: 'text-[#2e1065] dark:text-[#ede9fe]', muted: 'text-[#4c1d95] dark:text-[#ddd6fe]', items: [
    { name: 'Web3', level: 4, proof: 'Live wallet connect demo', href: '/wallet' },
    { name: 'Blockchain', level: 4, proof: 'Live on-chain reads', href: '/wallet' },
    { name: 'DeFi', level: 3, proof: 'Testnet DeFi playground', href: '/contracts' },
    { name: 'Smart Contracts', level: 3, proof: 'Deployed on Sepolia', href: '/contracts' },
    { name: 'Viem', level: 5, proof: 'Used throughout the Web3 layer', href: '/wallet' },
    { name: 'Wagmi', level: 5, proof: 'Wallet hooks in every page', href: '/wallet' },
  ]},
  { title: 'APIs & Data', bg: 'bg-[#fb923c] dark:bg-[#c2410c]', text: 'text-[#431407] dark:text-[#ffedd5]', muted: 'text-[#7c2d12] dark:text-[#fed7aa]', items: [
    { name: 'RESTful APIs', level: 5, proof: 'Contact form + blog API', href: '/contact' },
    { name: 'GraphQL', level: 4, proof: 'GitHub stats on the home page', href: '/' },
  ]},
  { title: 'Process & Practice', bg: 'bg-[#fbbf24] dark:bg-[#b45309]', text: 'text-[#422006] dark:text-[#fef3c7]', muted: 'text-[#78350f] dark:text-[#fde68a]', items: [
    { name: 'Agile Development', level: 5, proof: 'GitHub Projects board + CHANGELOG', href: '/about' },
  ]},
]

const fullstackGroups = [
  { titleKey: 'fs_group_languages', itemsKey: 'fs_lang_', count: 4 },
  { titleKey: 'fs_group_lamp', itemsKey: 'fs_lamp_', count: 4 },
  { titleKey: 'fs_group_frontend', itemsKey: 'fs_front_', count: 5 },
  { titleKey: 'fs_group_backend', itemsKey: 'fs_back_', count: 6 },
  { titleKey: 'fs_group_deploy', itemsKey: 'fs_deploy_', count: 5 },
  { titleKey: 'fs_group_tools', itemsKey: 'fs_tools_', count: 5 },
  { titleKey: 'fs_group_ecom', itemsKey: 'fs_ecom_', count: 5 },
  { titleKey: 'fs_group_design', itemsKey: 'fs_design_', count: 5 },
  { titleKey: 'fs_group_network', itemsKey: 'fs_net_', count: 2 },
  { titleKey: 'fs_group_marketing', itemsKey: 'fs_mkt_', count: 7 },
  { titleKey: 'fs_group_ai', itemsKey: 'fs_ai_', count: 6 },
  { titleKey: 'fs_group_professional', itemsKey: 'fs_pro_', count: 6 },
]

const certGroups = [
  { titleKey: 'cert_group_ai', bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]', certs: [
    { titleKey: 'cert_upenn_spec', issuerKey: 'cert_issuer_upenn', year: '2026', highlight: true },
    { titleKey: 'cert_upenn_mkt', issuerKey: 'cert_issuer_upenn', year: '2026' },
    { titleKey: 'cert_upenn_hr', issuerKey: 'cert_issuer_upenn', year: '2026' },
    { titleKey: 'cert_upenn_gov', issuerKey: 'cert_issuer_upenn', year: '2026' },
    { titleKey: 'cert_upenn_fund', issuerKey: 'cert_issuer_upenn', year: '2026' },
    { titleKey: 'cert_google_ai_spec', issuerKey: 'cert_issuer_google', year: '2026', highlight: true },
    { titleKey: 'cert_google_ai_prod', issuerKey: 'cert_issuer_google', year: '2026' },
    { titleKey: 'cert_google_ai_intro', issuerKey: 'cert_issuer_google', year: '2026' },
  ]},
  { titleKey: 'cert_group_marketing', bg: 'bg-[#fb923c] dark:bg-[#c2410c]', certs: [
    { titleKey: 'cert_google_dm_spec', issuerKey: 'cert_issuer_google', year: '2026', highlight: true },
    { titleKey: 'cert_google_dm_build', issuerKey: 'cert_issuer_google', year: '2026' },
    { titleKey: 'cert_google_dm_analytics', issuerKey: 'cert_issuer_google', year: '2026' },
    { titleKey: 'cert_google_dm_email', issuerKey: 'cert_issuer_google', year: '2026' },
    { titleKey: 'cert_google_dm_attract', issuerKey: 'cert_issuer_google', year: '2026' },
    { titleKey: 'cert_google_dm_found', issuerKey: 'cert_issuer_google', year: '2026' },
  ]},
  { titleKey: 'cert_group_dev', bg: 'bg-[#bef264] dark:bg-[#4d7c0f]', certs: [
    { titleKey: 'cert_meta_front', issuerKey: 'cert_issuer_meta', year: '2026' },
    { titleKey: 'cert_google_net', issuerKey: 'cert_issuer_google', year: '2026' },
    { titleKey: 'cert_nvidia_net', issuerKey: 'cert_issuer_nvidia', year: '2026' },
    { titleKey: 'cert_alison_html', issuerKey: 'cert_issuer_alison', year: '2026' },
    { titleKey: 'cert_coursera_canva', issuerKey: 'cert_issuer_coursera', year: '2026' },
    { titleKey: 'cert_alison_blog', issuerKey: 'cert_issuer_alison', year: '2025' },
    { titleKey: 'cert_alison_cs', issuerKey: 'cert_issuer_alison', year: '2025' },
  ]},
  { titleKey: 'cert_group_education', bg: 'bg-[#fbbf24] dark:bg-[#b45309]', certs: [
    { titleKey: 'cert_ug_botany', issuerKey: 'cert_ug_name', year: '2022', highlight: true },
    { titleKey: 'cert_wassce', issuerKey: 'cert_wassce_name', year: '2014' },
  ]},
]

function Dots({ level }: { level: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${level} of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`inline-block w-1.5 h-1.5 rounded-full ${n <= level ? 'bg-current' : 'bg-current opacity-20'}`} />
      ))}
    </span>
  )
}

export default function Skills() {
  const { t } = useTranslation()
  usePageMeta({ title: 'Skills', description: 'React, TypeScript, Web3, Wagmi, Viem, GraphQL, REST APIs, Agile — plus full-stack on the LAMP stack.' })
  const heroRef = useReveal<HTMLDivElement>()
  const stackRef = useReveal<HTMLDivElement>()
  const fsRef = useReveal<HTMLDivElement>()
  const certRef = useReveal<HTMLDivElement>()
  const discRef = useReveal<HTMLDivElement>()

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-24">
        <p className="kicker mb-6"><span className="kicker-dot" />{t('skills_intro_script')}</p>
        <h1 className="page-title mb-8">{t('skills_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">{t('skills_intro')}</p>
      </div>

      <section ref={stackRef} className="reveal mb-28">
        <div className="rule mb-8" />
        <p className="eyebrow mb-10">{t('core_stack_title')}</p>
        <div className="grid gap-5 md:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.title} className={`relative overflow-hidden rounded-surface ${group.bg} ${group.text} p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl`}>
              <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-8">{group.title}</h3>
              <ul className="space-y-5">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <Link to={skill.href} className="group block">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-sans font-semibold text-sm">{skill.name}</span>
                            <Dots level={skill.level} />
                          </div>
                          <p className={`font-sans text-xs ${group.muted}`}>{skill.proof}</p>
                        </div>
                        <ArrowRight size={14} className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section ref={fsRef} className="reveal mb-28">
        <div className="rule mb-8" />
        <p className="eyebrow mb-4">{t('fullstack_title')}</p>
        <p className="font-sans text-ink-muted dark:text-ink-muted-dark mb-10 max-w-2xl">{t('fullstack_intro')}</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fullstackGroups.map((g) => (
            <SkillList key={g.titleKey} titleKey={g.titleKey} itemsKey={g.itemsKey} count={g.count} />
          ))}
        </div>
      </section>

      <section ref={certRef} className="reveal mb-28">
        <div className="rule mb-8" />
        <p className="eyebrow mb-4">{t('certifications_title')}</p>
        <p className="font-sans text-ink-muted dark:text-ink-muted-dark mb-10 max-w-2xl">{t('certifications_intro')}</p>

        <div className="rounded-surface bg-[#c4b5fd] dark:bg-[#6d28d9] text-[#2e1065] dark:text-[#ede9fe] p-8 md:p-10 mb-10">
          <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mb-3">{t('ai_highlight_title')}</h3>
          <p className="font-sans text-base md:text-lg leading-relaxed text-[#4c1d95] dark:text-[#ddd6fe]">{t('ai_highlight_intro')}</p>
        </div>

        <div className="space-y-10">
          {certGroups.map((group) => (
            <div key={group.titleKey}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`inline-block w-2 h-2 rounded-full ${group.bg}`} />
                <h3 className="font-display text-lg font-semibold tracking-tight">{t(group.titleKey)}</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.certs.map((cert) => (
                  <CertificationCard key={cert.titleKey} titleKey={cert.titleKey} issuerKey={cert.issuerKey} year={cert.year} highlight={cert.highlight} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={discRef} className="reveal">
        <div className="rule mb-8" />
        <p className="eyebrow mb-10">{t('skills_categories_title')}</p>
        <div className="grid gap-5 md:grid-cols-3">
          <SkillCategory titleKey="skill_cat_tech" defaultTitle="Technology Skills" itemsKeyPrefix="skill_tech_" count={6} tone="lemon" />
          <SkillCategory titleKey="skill_cat_health" defaultTitle="Health & Life Sciences" itemsKeyPrefix="skill_health_" count={5} tone="cyan" />
          <SkillCategory titleKey="skill_cat_creative" defaultTitle="Creative & Communication Arts" itemsKeyPrefix="skill_creative_" count={8} tone="violet" />
        </div>
      </section>
    </div>
  )
}
