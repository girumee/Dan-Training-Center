import ChooseUs from './ChooseUs';
import Results from './Results';

export default function ResAndChoose(){
    return <div className="w-auto h-auto bg-[url('/public/assets/resultAndChooseBG.png')] bg-cover bg-no-repeat">
        <Results />
        <hr className='bg-transparent border-8 opacity-5'></hr>
        <ChooseUs />
    </div>
}