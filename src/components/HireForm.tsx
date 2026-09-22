import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const ROLES = [
  'Founder / Business Owner',
  'Operations Manager',
  'E-commerce Manager',
  'Digital Marketer',
  'Clinic / Practice Admin',
  'School Registrar / Education Manager',
  'Inventory / Warehouse Lead',
  'CRM / Sales Lead',
  'Finance / Admin',
  'Nonprofit Programme Manager',
  'Developer / Agency',
  'Other',
]

export default function HireForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: `${data.get('name')} (${data.get('role')})`,
      email: data.get('email'),
      subject: `Build enquiry — ${data.get('role')}`,
      message: `Role: ${data.get('role')}\nIndustry: ${data.get('industry')}\nBudget range: ${data.get('budget') || 'not specified'}\n\nWhat they need:\n${data.get('need')}\n\nAdditional notes:\n${data.get('notes') || '(none)'}`,
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={submit} className="rounded-surface border border-line dark:border-line-dark bg-surface dark:bg-surface-dark p-8 md:p-10 not-prose">
      <p className="font-mono text-2xs uppercase tracking-[0.14em] text-lemon dark:text-lemon-dark mb-6">
        Build enquiry form
      </p>

      <div className="grid gap-5 sm:grid-cols-2 mb-5">
        <label className="block">
          <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
            Your name *
          </span>
          <input
            name="name"
            type="text"
            required
            placeholder="Kofi Mensah"
            className="w-full rounded-button border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 transition-colors"
          />
        </label>

        <label className="block">
          <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
            Your email *
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-button border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 transition-colors"
          />
        </label>
      </div>

      <label className="block mb-5">
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
          Your role *
        </span>
        <select
          name="role"
          required
          defaultValue=""
          className="w-full rounded-button border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 transition-colors"
        >
          <option value="" disabled>Select your role…</option>
          {ROLES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </label>

      <div className="grid gap-5 sm:grid-cols-2 mb-5">
        <label className="block">
          <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
            Industry / sector
          </span>
          <input
            name="industry"
            type="text"
            placeholder="e.g. Retail, Healthcare, Education"
            className="w-full rounded-button border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 transition-colors"
          />
        </label>

        <label className="block">
          <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
            Budget range (optional)
          </span>
          <select
            name="budget"
            defaultValue=""
            className="w-full rounded-button border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 transition-colors"
          >
            <option value="">Prefer not to say</option>
            <option value="under-100">Under $100</option>
            <option value="100-500">$100 – $500</option>
            <option value="500-1500">$500 – $1,500</option>
            <option value="1500-5000">$1,500 – $5,000</option>
            <option value="5000-15000">$5,000 – $15,000</option>
            <option value="15000+">$15,000+</option>
            <option value="discuss">Let us discuss</option>
          </select>
        </label>
      </div>

      <label className="block mb-5">
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
          What system do you need built? *
        </span>
        <textarea
          name="need"
          required
          rows={6}
          placeholder="Tell me about your operation, what tools you use now, and what pain you want the new system to solve."
          className="w-full rounded-button border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 transition-colors resize-y"
        />
      </label>

      <label className="block mb-6">
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-muted dark:text-ink-muted-dark block mb-2">
          Anything else? (optional)
        </span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Deadlines, existing systems, team size, questions…"
          className="w-full rounded-button border border-line dark:border-line-dark bg-canvas dark:bg-canvas-dark px-4 py-3 font-sans text-sm text-ink dark:text-ink-dark focus:border-lemon dark:focus:border-lemon-dark focus:outline-none focus:ring-2 focus:ring-lemon/30 transition-colors resize-y"
        />
      </label>

      <div className="flex items-center gap-4 flex-wrap">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-accent disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
          <Send size={15} />
        </button>

        {status === 'success' && (
          <span className="inline-flex items-center gap-2 font-sans text-sm text-lemon dark:text-lemon-dark">
            <CheckCircle2 size={16} />
            Thank you. I will respond within 24 hours.
          </span>
        )}
        {status === 'error' && (
          <span className="inline-flex items-center gap-2 font-sans text-sm text-orange dark:text-orange-dark">
            <AlertCircle size={16} />
            Something went wrong. Please email hello@lemuelowusuansah.org directly.
          </span>
        )}
      </div>
    </form>
  )
}
