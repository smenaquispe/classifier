import ResultContent from './components/ResultContent';
import Input from './components/Input';
import Button from './components/Button';
import FileInput from './components/FileInput';

function ClassifyForm(){
    
    return (
        <>
            <div className='grid  grid-cols-2 items-center px-8'>
                <Input />
                <ResultContent />
                <FileInput />
            </div>
            <Button />
        </>
    )
}

export default ClassifyForm;