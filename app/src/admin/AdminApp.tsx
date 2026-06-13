import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
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
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/leads" replace />} />
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
