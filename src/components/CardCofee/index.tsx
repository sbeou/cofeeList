import { ICofee } from "@/interface";
import Image from 'next/image';
import "./CardCofeeStyle.scss";

export default function CardCofee({cofee}: {cofee : ICofee}) {
    return (
        <div className="cofee">
            <div className="cofee--image relative">
                <Image 
                    src={cofee.image}
                    alt={cofee.name}
                    height={160}
                    width={260}
                    className="rounded-xl mb-4"
                />
                {cofee.popular && (
                    <div className="popular rounded-3xl absolute top-2 left-2 py-1 px-3 text-xs font-bold">
                        Popular
                    </div>
                )}
            </div>
            <div className="flex justify-between text-left items-center pb-2">
                <h3>{cofee.name}</h3>
                <div className="price px-2 py-1 rounded-lg font-bold">
                    {cofee.price}
                </div>
                </div>
                <div className="flex justify-between text-left items-center">    
                    {cofee.rating ? (
                        <div className="flex items-center gap-1">
                            <Image 
                                src={'/images/Star_fill.svg'} 
                                width={24}
                                height={24}
                                alt="ratings" 
                            /> 
                            <p><span className="rating">{cofee.rating}</span> ({cofee.votes} votes)</p>   
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <Image 
                                src={'/images/Star.svg'} 
                                width={24}
                                height={24}
                                alt="no ratings" 
                            /> 
                            <p>No ratings</p>   
                        </div>
                    )}
                    {!cofee.available && (
                        <span className="available">Sold out</span>
                    )}
            </div> 
        </div>
    )
    
}