const IncidentHeader = () => (
    <div className='flex items-center p-[16px] justify-between '>
        <div className='flex gap-2'>
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="24" height="24" rx="12" fill="#7F1D1D" />
                <rect x="1" y="1" width="24" height="24" rx="12" stroke="#450A0A" stroke-width="2" />
                <path d="M13 11.5V13.5M13 15.5H13.005M17.865 16L13.865 8.99999C13.7777 8.84609 13.6513 8.71808 13.4984 8.62902C13.3456 8.53997 13.1719 8.49304 12.995 8.49304C12.8181 8.49304 12.6443 8.53997 12.4915 8.62902C12.3387 8.71808 12.2122 8.84609 12.125 8.99999L8.12496 16C8.03681 16.1527 7.99058 16.3259 7.99097 16.5022C7.99136 16.6785 8.03835 16.8516 8.12719 17.0039C8.21602 17.1562 8.34354 17.2823 8.49681 17.3694C8.65009 17.4565 8.82367 17.5016 8.99996 17.5H17C17.1754 17.4998 17.3477 17.4535 17.4996 17.3656C17.6515 17.2778 17.7776 17.1515 17.8652 16.9995C17.9529 16.8476 17.999 16.6752 17.9989 16.4997C17.9989 16.3243 17.9527 16.1519 17.865 16Z" stroke="#F87171" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p className='font-semibold text-white font-jakarta text-lg '>Unresolved Incidents</p>
        </div>

        <div className='flex items-center gap-2'>
            
                <svg width="52" height="21" viewBox="0 0 52 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" rx="10" fill="#431407" />
                    <g clip-path="url(#clip0_1_1669)">
                        <path d="M10.5 6H12C12.2652 6 12.5196 6.10536 12.7071 6.29289C12.8946 6.48043 13 6.73478 13 7V14M5 14H6.5M6.5 14L9.879 14.8445C9.95269 14.8629 10.0296 14.8642 10.1039 14.8484C10.1782 14.8326 10.2479 14.8001 10.3078 14.7534C10.3676 14.7066 10.416 14.6469 10.4493 14.5786C10.4827 14.5104 10.5 14.4354 10.5 14.3595V6.28098C10.4999 6.12907 10.4652 5.97868 10.3985 5.84218C10.3318 5.70569 10.2349 5.58618 10.1152 5.49273C9.99541 5.39928 9.85592 5.33435 9.70732 5.30285C9.55871 5.27136 9.40488 5.27414 9.2575 5.31098L7.2575 5.81098C7.04116 5.86505 6.8491 5.98989 6.71185 6.16564C6.5746 6.3414 6.50003 6.55798 6.5 6.78098V14ZM10.5 14H15M9 10V10.005" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <rect x="16" width="20" height="20" rx="10" fill="#450A0A" />
                    <path d="M22.5 10H29.5M26 6.5V13.5" stroke="#EF4444" stroke-linecap="round" stroke-linejoin="round" />
                    <rect x="32" width="20" height="20" rx="10" fill="#172554" />
                    <path d="M41.15 11.5H39.5C38.9696 11.5 38.4609 11.7107 38.0858 12.0858C37.7107 12.4609 37.5 12.9696 37.5 13.5V14.5M46.5 14.5L45.55 13.55M43 7.5C43 8.60457 42.1046 9.5 41 9.5C39.8954 9.5 39 8.60457 39 7.5C39 6.39543 39.8954 5.5 41 5.5C42.1046 5.5 43 6.39543 43 7.5ZM46 12.5C46 13.3284 45.3284 14 44.5 14C43.6716 14 43 13.3284 43 12.5C43 11.6716 43.6716 11 44.5 11C45.3284 11 46 11.6716 46 12.5Z" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <clipPath id="clip0_1_1669">
                            <rect width="12" height="12" fill="white" transform="translate(4 4)" />
                        </clipPath>
                    </defs>
                </svg>
        

            <div className='flex bg-[#0B0B0B] rounded-xl p-1 items-center border border-white/10'>
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3L3.5 8.5L1 6M11 5L7.25 8.75L6.5 8" stroke="#22C55E" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='text-white text-xs'>resolved incidents</p>
            </div>

        </div>

    </div>
);

export default IncidentHeader;