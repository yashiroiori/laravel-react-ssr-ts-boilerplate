import { AdminLayout } from '@/Layouts/Admin/AdminLayout';

const DashboardIndex = () => {
    return (
        <div>DashboardIndex 123</div>
    );
}
DashboardIndex.layout = page => <AdminLayout children={page} />;
export default DashboardIndex;