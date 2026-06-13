import { NavLink, Outlet, useNavigate, Navigate } from 'react-router-dom';
import {
  Inbox, Building2, Award, Briefcase, Truck, Handshake, LayoutDashboard,
  LogOut, ExternalLink, PackageSearch,
} from 'lucide-react';
import { getToken, clearToken } from '@/lib/api';

const nav = [
  { to: '/admin/leads', label: 'Leads', icon: Inbox },
  { to: '/admin/shipments', label: 'Shipments', icon: PackageSearch },
  { section: 'Content' },
  { to: '/admin/content/hero', label: 'Homepage Hero', icon: LayoutDashboard },
  { to: '/admin/services', label: 'Services', icon: Truck },
  { to: '/admin/companies', label: 'Companies', icon: Briefcase },
  { to: '/admin/certifications', label: 'Certifications', icon: Award },
  { to: '/admin/offices', label: 'Offices', icon: Building2 },
  { to: '/admin/partners', label: 'Partners', icon: Handshake },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  if (!getToken()) return <Navigate to="/admin/login" replace />;

  function logout() {
    clearToken();
    navigate('/admin/login');
  }

  return (
    <div className="min-h-screen bg-[#F5F8FA] flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#0A1628] flex flex-col flex-shrink-0 sticky top-0 h-screen">
        <div className="px-5 py-5 border-b border-white/10">
          <p className="text-white font-semibold">Highority Admin</p>
          <p className="text-[11px] text-[#7A8CA5]">Content management</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-3">
          {nav.map((item, i) =>
            'section' in item ? (
              <p
                key={i}
                className="px-5 pt-4 pb-1.5 text-[10px] uppercase tracking-wider text-[#7A8CA5]/70"
              >
                {item.section}
              </p>
            ) : (
              <NavLink
                key={item.to}
                to={item.to!}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-2.5 text-sm transition ${
                    isActive
                      ? 'text-[#00D4FF] bg-[#00D4FF]/5 border-l-2 border-[#00D4FF]'
                      : 'text-[#B8C5D6] hover:text-white border-l-2 border-transparent'
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            )
          )}
        </nav>
        <div className="p-3 border-t border-white/10 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-2 py-2 text-sm text-[#B8C5D6] hover:text-white rounded-lg"
          >
            <ExternalLink className="w-4 h-4" /> View site
          </a>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-2 py-2 text-sm text-[#B8C5D6] hover:text-white rounded-lg"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 min-w-0 p-6 md:p-10 overflow-x-hidden">
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
