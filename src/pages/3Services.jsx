import ServicesGrid from '../components/sections/ServicesGrid';
import { apArServices } from '../data/services';

function AccountingServicesDisplay() {
    return (
        <ServicesGrid 
            services={apArServices}
            title="PROFESSIONAL ACCOUNTING SERVICES"
        />
    );
}

export default AccountingServicesDisplay;