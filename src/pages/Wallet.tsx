import { useTranslation } from 'react-i18next'
import {
  useAccount, useConnect, useDisconnect, useBalance, useBlockNumber, useChainId, useEnsName,
} from 'wagmi'
import { Wallet as WalletIcon, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useReveal } from '../hooks/useReveal'
import { CHAIN_NAMES } from '../web3/config'

export default function Wallet() {
  const { t } = useTranslation()
  usePageMeta({
    title: 'Wallet',
    description: 'Live Web3 demo — connect a wallet, read on-chain state, and interact with a smart contract on Sepolia testnet.',
  })

  const { address, isConnected, connector } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const chainId = useChainId()
  const { data: balance } = useBalance({ address })
  const { data: blockNumber } = useBlockNumber({ watch: true })
  const { data: ens } = useEnsName({ address })
  const [copied, setCopied] = useState(false)
  const heroRef = useReveal<HTMLDivElement>()
  const panelRef = useReveal<HTMLDivElement>()

  async function copyAddress() {
    if (!address) return
    await navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  const injectedConnector = connectors.find((c) => c.id === 'injected') ?? connectors[0]

  return (
    <div className="container-content py-16 md:py-24">
      <div ref={heroRef} className="reveal max-w-4xl mb-16">
        <p className="kicker mb-6">
          <span className="kicker-dot" />
          {t('wallet_script')}
        </p>
        <h1 className="page-title mb-8">{t('wallet_page_title')}</h1>
        <p className="font-sans text-lg md:text-xl text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
          {t('wallet_intro')}
        </p>
      </div>

      {!isConnected ? (
        <div
          ref={panelRef}
          className="reveal rounded-surface bg-[#c4b5fd] dark:bg-[#6d28d9] text-[#2e1065] dark:text-[#ede9fe] p-10 md:p-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-button bg-white/30 dark:bg-black/20 mb-8">
            <WalletIcon size={28} strokeWidth={1.75} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            {t('wallet_connect_title')}
          </h2>
          <button
            onClick={() => connect({ connector: injectedConnector })}
            disabled={isPending}
            className="inline-flex items-center gap-2 rounded-button px-6 py-3.5 font-medium text-sm bg-[#2e1065] text-[#ede9fe] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 disabled:opacity-60"
          >
            <WalletIcon size={16} />
            {isPending ? t('wallet_connecting') : t('wallet_connect_button')}
          </button>
          <p className="mt-6 font-sans text-sm text-[#4c1d95] dark:text-[#ddd6fe] inline-flex items-center gap-2">
            <AlertCircle size={14} />
            {t('wallet_no_wallet')}
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          <StatCard
            label={t('wallet_address_label')}
            value={address ?? ''}
            mono
            action={copied ? <Check size={13} className="text-lemon dark:text-lemon-dark" /> : <Copy size={13} />}
            onAction={copyAddress}
          />
          <StatCard label={t('wallet_chain_label')} value={CHAIN_NAMES[chainId] ?? `Chain ${chainId}`} />
          <StatCard
            label={t('wallet_balance_label')}
            value={balance ? `${Number(balance.formatted).toFixed(4)} ${balance.symbol}` : '—'}
            mono
          />
          <StatCard label={t('wallet_ens_label')} value={ens ?? t('wallet_ens_none')} />
          <StatCard label={t('wallet_block_label')} value={blockNumber ? `#${blockNumber.toString()}` : '—'} mono />
          <StatCard
            label="Connector"
            value={connector?.name ?? '—'}
          />

          <div className="md:col-span-2 mt-6">
            <button onClick={() => disconnect()} className="btn-outline">
              {t('wallet_disconnect')}
            </button>
          </div>

          <div className="md:col-span-2 mt-6 rounded-surface border border-line dark:border-line-dark p-6 md:p-8">
            <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark mb-4">
              Blockscout explorer
            </p>
            <a
              href={`https://sepolia.etherscan.io/address/${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              View address on Etherscan
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

function StatCard({
  label, value, mono, action, onAction,
}: {
  label: string
  value: string
  mono?: boolean
  action?: React.ReactNode
  onAction?: () => void
}) {
  return (
    <div className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-6">
      <div className="flex items-center justify-between mb-3">
        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-faint dark:text-ink-faint-dark">
          {label}
        </p>
        {action && (
          <button onClick={onAction} className="p-1 hover:text-lemon dark:hover:text-lemon-dark transition-colors">
            {action}
          </button>
        )}
      </div>
      <p className={`font-sans text-base md:text-lg text-ink dark:text-ink-dark break-words ${mono ? 'font-mono text-sm' : ''}`}>
        {value}
      </p>
    </div>
  )
}
