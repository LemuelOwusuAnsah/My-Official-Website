import { useAccount, useConnect, useDisconnect, useBalance, useChainId, useEnsName } from 'wagmi'
import { Wallet, LogOut, Copy, Check, Download } from 'lucide-react'
import { useState, useEffect } from 'react'
import { CHAIN_NAMES } from '../web3/config'

export default function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const { connect, connectors, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const chainId = useChainId()
  const { data: balance } = useBalance({ address })
  const { data: ens } = useEnsName({ address })
  const [copied, setCopied] = useState(false)
  const [hasWallet, setHasWallet] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const eth = (window as unknown as { ethereum?: unknown }).ethereum
      setHasWallet(Boolean(eth))
    }
  }, [])

  async function copyAddress() {
    if (!address) return
    await navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  if (!isConnected) {
    if (!hasWallet) {
      return (
        <a
          href="https://metamask.io/download"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-button px-3 py-1.5 font-mono text-2xs uppercase tracking-[0.1em] border border-line dark:border-line-dark text-ink-muted dark:text-ink-muted-dark hover:border-ink dark:hover:border-ink-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
          title="Install MetaMask to try the Web3 demo"
        >
          <Download size={12} />
          Install MetaMask
        </a>
      )
    }

    const injectedConnector = connectors.find((c) => c.id === 'injected') ?? connectors[0]
    return (
      <button
        onClick={() => connect({ connector: injectedConnector })}
        disabled={isPending}
        className="hidden md:inline-flex items-center gap-2 rounded-button px-3 py-1.5 font-mono text-2xs uppercase tracking-[0.1em] border border-line dark:border-line-dark hover:border-ink dark:hover:border-ink-dark transition-colors disabled:opacity-50"
      >
        <Wallet size={12} />
        {isPending ? 'Connecting' : 'Connect'}
      </button>
    )
  }

  const short = `${address?.slice(0, 6)}…${address?.slice(-4)}`
  const display = ens ?? short

  return (
    <div className="hidden md:flex items-center gap-1 rounded-button border border-line dark:border-line-dark px-1 py-1">
      <button
        onClick={copyAddress}
        className="inline-flex items-center gap-1.5 rounded-button px-2 py-1 font-mono text-2xs uppercase tracking-[0.08em] hover:bg-surface-muted dark:hover:bg-surface-muted-dark transition-colors"
        title={address}
      >
        {copied ? <Check size={11} className="text-lemon dark:text-lemon-dark" /> : <Copy size={11} />}
        <span>{display}</span>
      </button>
      <span className="w-px h-4 bg-line dark:bg-line-dark" />
      <span className="font-mono text-2xs uppercase tracking-[0.08em] text-ink-muted dark:text-ink-muted-dark px-1">
        {balance ? `${Number(balance.formatted).toFixed(3)} ${balance.symbol}` : '—'}
      </span>
      <span className="w-px h-4 bg-line dark:bg-line-dark" />
      <button
        onClick={() => disconnect()}
        className="p-1.5 rounded-button hover:bg-surface-muted dark:hover:bg-surface-muted-dark transition-colors"
        aria-label="Disconnect"
        title={CHAIN_NAMES[chainId] ?? 'Unknown network'}
      >
        <LogOut size={12} />
      </button>
    </div>
  )
}
