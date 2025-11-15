import ServicesGrid from '../components/sections/ServicesGrid';
import { payrollServices } from '../data/services';

function PayrollServicesDisplay() {
    return (
        <ServicesGrid 
            services={payrollServices}
            showTitle={false}
        />
    );
}

export default PayrollServicesDisplay;