import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ADMIN_BASE } from './config';
import AdminLayout from './AdminLayout';
import LoginPage from './LoginPage';
import LeadsInbox from './LeadsInbox';
import HeroForm from './HeroForm';
import GenericList from './GenericList';
import GenericForm from './GenericForm';

export default function AdminApp() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path={`${ADMIN_BASE}/login`} element={<LoginPage />} />
        <Route path={ADMIN_BASE} element={<AdminLayout />}>
          <Route index element={<Navigate to={`${ADMIN_BASE}/leads`} replace />} />
          <Route path="leads" element={<LeadsInbox />} />
          <Route path="content/hero" element={<HeroForm />} />
          <Route path=":resource" element={<GenericList />} />
          <Route path=":resource/new" element={<GenericForm />} />
          <Route path=":resource/:id/edit" element={<GenericForm />} />
        </Route>
      </Routes>
    </>
  );
}
