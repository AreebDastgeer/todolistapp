import React, { useState } from 'react';
import { Checkbox } from '../checkbox/checkbox'; 

const Label = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isAnotherChecked, setIsAnotherChecked] = useState(false);
    const [isThirdChecked, setIsThirdChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const handleAnotherCheckboxChange = (event) => {
        setIsAnotherChecked(event.target.checked);
    };
    const handleThirdCheckboxChange = (event) => {
        setIsThirdChecked(event.target.checked);
    };

    return (
        <main>
        <div className='flex flex-col text-desert m-2'>
            <div className='rounded-lg bg-cream p-2 '>
                <Checkbox label="Fix Errors" isChecked={isChecked} onChange={handleCheckboxChange} />
                
                </div>
                
                <div className='rounded-lg bg-cream p-2 mt-2'>
                <Checkbox label="Do Assignments" isChecked={isAnotherChecked} onChange={handleAnotherCheckboxChange} />
            </div>
        </div>
        <div className='text-desert p-2 font-bold'>
    Inbox
</div>
<div className='flex flex-row text-desert m-2'>
<div className='rounded-lg bg-cream p-2 w-full'>
<Checkbox label="Die Peacefully" isChecked={isThirdChecked} onChange={handleThirdCheckboxChange} />
</div>
</div>
</main>
    );
};

export { Label };
