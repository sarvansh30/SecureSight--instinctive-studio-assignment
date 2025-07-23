import Image from 'next/image';
import IncidentHeader from './IncidentsHeader';

type Incident = {
    id: number,
    type: string;
    tsStart: string;
    tsEnd: string;
    thumbnailUrl: string;
};


const IncidentsPanels = () => {

    return (
        <div className='bg-[#131313] w-2/7 rounded-[6px]'>
            <IncidentHeader />

        </div>
    );
};

export default IncidentsPanels;