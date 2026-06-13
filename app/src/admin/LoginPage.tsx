import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Loader2 } from 'lucide-react';
import { api, setToken } from '@/lib/api';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const { token } = await api<{ token: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });
      setToken(token);
      navigate('/admin/leads');
    } catch {
      setError('Invalid username or password');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A1628] flex items-center justify-center px-4">
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />
      <form
        onSubmit={submit}
        className="relative w-full max-w-sm rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur p-8"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="w-9 h-9 rounded-lg bg-[#00D4FF]/15 flex items-center justify-center">
            <Lock className="w-4 h-4 text-[#00D4FF]" />
          </span>
          <div>
            <h1 className="text-white font-semibold">Highority Admin</h1>
            <p className="text-xs text-[#7A8CA5]">Sign in to manage content</p>
          </div>
        </div>

        <label className="block text-xs text-[#7A8CA5] mb-1">Username</label>
        <input
          className="w-full mb-4 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white outline-none focus:border-[#00D4FF]/60"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />

        <label className="block text-xs text-[#7A8CA5] mb-1">Password</label>
        <input
          type="password"
          className="w-full mb-5 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-sm text-white outline-none focus:border-[#00D4FF]/60"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

        <button
          type="submit"
          disabled={busy}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#00A8CC] text-[#0A1628] text-sm font-medium py-2.5 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] disabled:opacity-60 transition"
        >
          {busy && <Loader2 className="w-4 h-4 animate-spin" />}
          Sign In
        </button>
      </form>
    </div>
  );
}
