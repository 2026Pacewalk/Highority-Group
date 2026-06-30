import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Loader2, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { api, setToken, ApiError } from '@/lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const { token } = await api<{ token: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username: email.trim(), password }),
      });
      setToken(token);
      navigate('/admin/leads');
    } catch (err) {
      if (err instanceof ApiError && err.status === 429)
        setError('Too many attempts. Please wait a few minutes and try again.');
      else setError('Invalid email or password.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-[#0A1628] flex items-center justify-center px-4 overflow-hidden">
      {/* Branded background */}
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.12) 0%, transparent 55%)' }} />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-[#00D4FF]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent" />
      </div>

      <div className="relative w-full max-w-[400px]">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/assets/logo-footer.png" alt="Highority Group" className="h-14 w-auto object-contain" />
        </div>

        {/* Card */}
        <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.45)] p-8">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D4FF]/[0.06] via-transparent to-transparent pointer-events-none" />

          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#00D4FF] font-body">Admin Portal</span>
            </div>
            <h1 className="text-center text-white font-display text-2xl font-semibold">Welcome back</h1>
            <p className="text-center text-sm text-[#7A8CA5] font-body mt-1 mb-7">Sign in to manage your website</p>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-xs text-[#7A8CA5] font-body mb-1.5">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                  <input
                    type="email"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg bg-white/5 border border-white/10 pl-10 pr-3 py-3 text-sm text-white placeholder:text-[#7A8CA5]/70 outline-none focus:border-[#00D4FF]/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#00D4FF]/15 transition"
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#7A8CA5] font-body mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8CA5]" />
                  <input
                    type={showPw ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg bg-white/5 border border-white/10 pl-10 pr-10 py-3 text-sm text-white placeholder:text-[#7A8CA5]/70 outline-none focus:border-[#00D4FF]/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#00D4FF]/15 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A8CA5] hover:text-white transition"
                  >
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-400 font-body bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={busy}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] text-[#0A1628] text-sm font-semibold py-3 mt-1 hover:shadow-[0_0_24px_rgba(0,212,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0 transition-all"
              >
                {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                {busy ? 'Signing in…' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>

        {/* Secure footer */}
        <div className="flex items-center justify-center gap-1.5 mt-5 text-[11px] text-[#7A8CA5] font-body">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00D4FF]" />
          Secured connection · Authorized access only
        </div>
        <p className="text-center text-[11px] text-[#7A8CA5]/60 font-body mt-2">
          &copy; {new Date().getFullYear()} Highority Group
        </p>
      </div>
    </div>
  );
}
