import card1Image from '../../assets/professioanl.avif';
import { ArrowRight } from 'lucide-react';

export default function RightCard(){
    return(
        <div className="h-full w-90 overflow-hidden relative rounded-4xl">
            <img src={card1Image} className='h-full w-full object-cover'></img>

            <div className='absolute top-0 left-0 h-full w-full bg-amber-600'>
                <h2>1</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum est rerum explicabo earum similique.</p>
                    <div>
                        <button>Satisfied</button>
                        <button><ArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}