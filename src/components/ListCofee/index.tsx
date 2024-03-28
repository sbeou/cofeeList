import { useQuery } from '@tanstack/react-query';
import { fetchCofees } from "@/app/fetchApi/fetchCofees";
import './ListCofeeStyle.scss';
import { Loader } from '../loader';
import CardCofee from '../CardCofee';
import { IFilter } from '@/interface';
import { useState } from 'react';
import { it } from 'node:test';

export default function ListCofee() {
    const filterLabel : IFilter[] = [
        { 
            label:'All Products', 
            filter: false
        }, 
        {
            label:'Available Now',
            filter: true
        }
    ];
    const [active, setActive] = useState<string>('All Products')
    const [available, setAvailable] = useState<boolean>(false)
     const { data, isLoading, isError } = useQuery({
        queryKey: ['cofee'],
        queryFn: () => fetchCofees(),
    });
    if (isLoading || !data) {
        return (
        <div className="flex items-center min-h-96 py-20"><Loader /></div>
        );
    }
    const filterCofee = (item : IFilter) => {
        setActive(item.label)
        setAvailable(item.filter)
    }
    const cofees = (!available ? data : data.filter(item => item.available === true))
    return (
        <div className="listCofee">
            <ul className="filter flex gap-1 justify-center mt-5">
                {filterLabel.map((item) => (
                    <li 
                        key={item.label} 
                        className={active === item.label ? 'active' : ''}
                        onClick={() => filterCofee(item)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
            <div className='gridCofee'>
                {cofees.map((item) => (
                    <CardCofee key={item.id} cofee={item} />
                ))}
            </div>
        </div>
    )
}
