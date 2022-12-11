import React from 'react';
import JotformEmbed from 'react-jotform-embed';

const ContactMe = () => {
    return (
        <div className='mx-12'>
            <JotformEmbed className="rounded-lg" src="https://form.jotform.com/223434997206462" />
        </div>
    );
};

export default ContactMe;